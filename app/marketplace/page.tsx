import type { Metadata } from "next";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-div";
import { CreatorMarketplaceBrowser } from "@/components/marketplace/creator-marketplace-browser";
import { getApprovedTools } from "@/data/marketplace";
import { getDb } from "@/lib/db/client";
import { ensureSchema } from "@/lib/db/migrate";
import type { CreatorTool, CreatorToolCategory, EndpointStatus } from "@/types/marketplace";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Creator Marketplace | Modulr",
  description: "Browse reviewed x402-payable tools submitted by developers. Tested before listing, callable by agents and developers across every x402-compatible network.",
  alternates: { canonical: "/marketplace" },
  openGraph: {
    title: "Creator Marketplace | Modulr",
    description: "Browse reviewed x402-payable tools submitted by developers.",
    url: "/marketplace",
  },
};

async function getDbApprovedTools(): Promise<CreatorTool[]> {
  try {
    await ensureSchema();
    const db = getDb();
    const result = await db.query(
      `SELECT * FROM marketplace_submissions WHERE status = 'approved' ORDER BY reviewed_at DESC`
    );
    return result.rows.map((row) => ({
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
  } catch {
    return [];
  }
}

export default async function MarketplacePage() {
  const [staticTools, dbTools] = await Promise.all([
    Promise.resolve(getApprovedTools().map((t) => ({ ...t, endpointStatus: "x402_ready" as EndpointStatus, source: "modulr" as const }))),
    getDbApprovedTools(),
  ]);

  const tools = [...staticTools, ...dbTools];

  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-16 sm:px-8 lg:pt-24">

      <MotionDiv initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <section className="border-b border-white/10 pb-14">
          <div className="flex items-center gap-2">
            <span className="border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-400">Creator Submitted</span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Marketplace</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Reviewed x402-payable tools from external developers. Each tool is tested before listing and shows the creator so you can support them directly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-slate-400">Pay in USDC</span>
            <span className="border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-slate-400">x402 compatible</span>
            <span className="border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-slate-400">Reviewed before listing</span>
            <span className="border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-slate-400">{tools.length} tools listed</span>
            <Link href="/marketplace/submit" className="border border-teal-400/20 bg-teal-400/[0.04] px-3 py-1 font-mono text-teal-400 hover:bg-teal-400/[0.08] transition">
              Submit a tool →
            </Link>
          </div>
        </section>

        <CreatorMarketplaceBrowser tools={tools} />
      </MotionDiv>

    </div>
  );
}
