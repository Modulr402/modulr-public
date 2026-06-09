"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck, Wifi, WifiOff, AlertCircle, BadgeCheck, Sparkles } from "lucide-react";
import type { CreatorTool, CreatorToolCategory, EndpointStatus } from "@/types/marketplace";

const CATEGORY_LABELS: Record<CreatorToolCategory, string> = {
  security: "Security",
  analytics: "Analytics",
  automation: "Automation",
  data: "Data",
  development: "Development",
  other: "Other",
};

const PRICE_COLOR = (price: number) =>
  price <= 0.10 ? "text-green-400 border-green-400/20 bg-green-400/[0.05]"
  : price <= 0.25 ? "text-teal-400 border-teal-400/20 bg-teal-400/[0.05]"
  : "text-amber-400 border-amber-400/20 bg-amber-400/[0.05]";

function EndpointBadge({ status }: { status?: EndpointStatus }) {
  if (!status || status === "unverified") return null;
  if (status === "x402_ready") return (
    <span className="flex items-center gap-1 border border-teal-400/20 bg-teal-400/[0.05] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-teal-400">
      <ShieldCheck className="h-2.5 w-2.5" /> x402 ready
    </span>
  );
  if (status === "verified") return (
    <span className="flex items-center gap-1 border border-green-400/20 bg-green-400/[0.05] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-green-400">
      <Wifi className="h-2.5 w-2.5" /> Verified
    </span>
  );
  if (status === "unreachable") return (
    <span className="flex items-center gap-1 border border-red-400/20 bg-red-400/[0.05] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-red-400">
      <WifiOff className="h-2.5 w-2.5" /> Unreachable
    </span>
  );
  return (
    <span className="flex items-center gap-1 border border-amber-400/20 bg-amber-400/[0.05] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-amber-400">
      <AlertCircle className="h-2.5 w-2.5" /> Needs review
    </span>
  );
}

const FOURTEEN_DAYS_MS = 14 * 24 * 60 * 60 * 1000;

export function ToolCard({ tool, onTagClick }: { tool: CreatorTool; onTagClick?: (tag: string) => void }) {
  const isOfficial = tool.source === "modulr";
  const isNew = !isOfficial && tool.lastTestedAt ? (Date.now() - new Date(tool.lastTestedAt).getTime()) < FOURTEEN_DAYS_MS : false;

  return (
    <Link href={`/marketplace/${tool.slug}`} className="group block border border-white/10 bg-white/[0.02] p-5 transition hover:bg-white/[0.04] hover:border-white/20">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{CATEGORY_LABELS[tool.category]}</span>
            {isOfficial && (
              <span className="flex items-center gap-1 border border-teal-400/30 bg-teal-400/[0.07] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-teal-300">
                <BadgeCheck className="h-2.5 w-2.5" /> Official
              </span>
            )}
            {isNew && (
              <span className="flex items-center gap-1 border border-purple-400/30 bg-purple-400/[0.07] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-purple-300">
                <Sparkles className="h-2.5 w-2.5" /> New
              </span>
            )}
            <EndpointBadge status={tool.endpointStatus ?? (tool.x402Compatible ? "x402_ready" : undefined)} />
          </div>
          <h3 className="mt-2 text-base font-semibold text-white group-hover:text-teal-200 transition">{tool.name}</h3>
          <p className="mt-1.5 text-sm leading-6 text-slate-400 line-clamp-2">{tool.shortDescription}</p>
        </div>
        <span className={`shrink-0 border px-2 py-0.5 font-mono text-xs ${PRICE_COLOR(tool.priceUsd)}`}>
          ${tool.priceUsd.toFixed(2)}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <a
          href={`https://x.com/${tool.creatorTwitter}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 hover:text-slate-300 transition"
        >
          <ExternalLink className="h-3 w-3" />
          @{tool.creatorTwitter}
        </a>
        <div className="flex flex-wrap gap-1">
          {tool.tags.slice(0, 3).map((t) => onTagClick ? (
            <button key={t} onClick={(e) => { e.preventDefault(); onTagClick(t); }} className="border border-white/[0.08] px-1.5 py-0.5 font-mono text-[9px] text-slate-500 hover:text-teal-400 hover:border-teal-400/30 transition">
              {t}
            </button>
          ) : (
            <span key={t} className="border border-white/[0.08] px-1.5 py-0.5 font-mono text-[9px] text-slate-500">{t}</span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 font-mono text-xs text-slate-500 group-hover:text-teal-400 transition">
        View tool <ArrowRight className="h-3 w-3" />
      </div>
    </Link>
  );
}
