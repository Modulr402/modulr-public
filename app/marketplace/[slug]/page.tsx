import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCreatorTool, getApprovedTools } from "@/data/marketplace";
import { getDb } from "@/lib/db/client";
import { ensureSchema } from "@/lib/db/migrate";
import type { CreatorTool, CreatorToolCategory, EndpointStatus } from "@/types/marketplace";
import { ToolDetailClient } from "@/components/marketplace/tool-detail-client";

export const revalidate = 60;

async function getToolBySlug(slug: string): Promise<CreatorTool | null> {
  const staticTool = getCreatorTool(slug);
  if (staticTool) return { ...staticTool, endpointStatus: "x402_ready", endpointMessage: "Endpoint verified and x402 compatible", source: "modulr" as const };

  try {
    await ensureSchema();
    const db = getDb();
    const result = await db.query(
      `SELECT * FROM marketplace_submissions WHERE slug = $1 AND status = 'approved' LIMIT 1`,
      [slug]
    );
    if (!result.rows.length) return null;
    const row = result.rows[0];
    return {
      slug: row.slug as string,
      name: row.tool_name as string,
      creatorName: row.creator_name as string,
      creatorTwitter: row.creator_twitter as string,
      description: row.full_description as string,
      shortDescription: row.short_description as string,
      category: row.category as CreatorToolCategory,
      priceUsd: Number(row.price_usd),
      endpointUrl: row.endpoint_url as string,
      expectedInput: (() => { try { const p = JSON.parse(row.example_request as string); return (p && typeof p === "object" && !Array.isArray(p)) ? Object.fromEntries(Object.entries(p).map(([k, v]) => [k, String(v)])) : {}; } catch { return {}; } })(),
      exampleOutput: (() => { try { return JSON.parse(row.example_response as string); } catch { return {}; } })(),
      status: "approved" as const,
      tags: Array.isArray(row.tags) && (row.tags as string[]).length > 0 ? (row.tags as string[]) : [row.category as string],
      createdAt: (row.submitted_at as Date).toISOString().slice(0, 10),
      lastTestedAt: row.reviewed_at ? (row.reviewed_at as Date).toISOString().slice(0, 10) : (row.submitted_at as Date).toISOString().slice(0, 10),
      x402Compatible: row.endpoint_status === "x402_ready",
      endpointStatus: (row.endpoint_status as EndpointStatus) ?? "unverified",
      endpointMessage: row.endpoint_message as string | undefined,
      source: "community" as const,
    };
  } catch {
    return null;
  }
}

async function getSiblingTools(creatorTwitter: string, currentSlug: string): Promise<CreatorTool[]> {
  const staticSiblings = getApprovedTools()
    .filter((t) => t.creatorTwitter === creatorTwitter && t.slug !== currentSlug)
    .map((t) => ({ ...t, endpointStatus: "x402_ready" as EndpointStatus, source: "modulr" as const }));

  try {
    await ensureSchema();
    const db = getDb();
    const result = await db.query(
      `SELECT * FROM marketplace_submissions WHERE creator_twitter = $1 AND slug != $2 AND status = 'approved' ORDER BY reviewed_at DESC LIMIT 6`,
      [creatorTwitter, currentSlug]
    );
    const dbSiblings: CreatorTool[] = result.rows.map((row) => ({
      slug: row.slug as string,
      name: row.tool_name as string,
      creatorName: row.creator_name as string,
      creatorTwitter: row.creator_twitter as string,
      description: row.full_description as string,
      shortDescription: row.short_description as string,
      category: row.category as CreatorToolCategory,
      priceUsd: Number(row.price_usd),
      endpointUrl: row.endpoint_url as string,
      expectedInput: (() => { try { const p = JSON.parse(row.example_request as string); return (p && typeof p === "object" && !Array.isArray(p)) ? Object.fromEntries(Object.entries(p).map(([k, v]) => [k, String(v)])) : {}; } catch { return {}; } })(),
      exampleOutput: (() => { try { return JSON.parse(row.example_response as string); } catch { return {}; } })(),
      status: "approved" as const,
      tags: Array.isArray(row.tags) && (row.tags as string[]).length > 0 ? (row.tags as string[]) : [row.category as string],
      createdAt: (row.submitted_at as Date).toISOString().slice(0, 10),
      lastTestedAt: row.reviewed_at ? (row.reviewed_at as Date).toISOString().slice(0, 10) : (row.submitted_at as Date).toISOString().slice(0, 10),
      x402Compatible: row.endpoint_status === "x402_ready",
      endpointStatus: (row.endpoint_status as EndpointStatus) ?? "unverified",
      endpointMessage: row.endpoint_message as string | undefined,
      source: "community" as const,
    }));
    return [...staticSiblings, ...dbSiblings];
  } catch {
    return staticSiblings;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);
  if (!tool) return { title: "Tool not found" };
  return {
    title: `${tool.name} — Creator Marketplace | Modulr`,
    description: tool.shortDescription,
    alternates: { canonical: `/marketplace/${slug}` },
    openGraph: {
      title: `${tool.name} — Creator Marketplace | Modulr`,
      description: tool.shortDescription,
      url: `/marketplace/${slug}`,
    },
  };
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);
  if (!tool) notFound();
  const relatedTools = await getSiblingTools(tool.creatorTwitter, slug);
  return <ToolDetailClient tool={tool} relatedTools={relatedTools} />;
}

export async function generateStaticParams() {
  return getApprovedTools().map((t) => ({ slug: t.slug }));
}
