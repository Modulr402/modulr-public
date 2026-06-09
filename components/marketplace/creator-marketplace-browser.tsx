"use client";

import { useState, useMemo } from "react";
import { Search, Tag, Store } from "lucide-react";
import Link from "next/link";
import { ToolCard } from "@/components/marketplace/tool-card";
import type { CreatorTool, CreatorToolCategory } from "@/types/marketplace";

const CATEGORIES: { value: CreatorToolCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "security", label: "Security" },
  { value: "analytics", label: "Analytics" },
  { value: "automation", label: "Automation" },
  { value: "data", label: "Data" },
  { value: "development", label: "Development" },
  { value: "other", label: "Other" },
];

function EmptyState({ filtered, sourceFilter }: { filtered: boolean; sourceFilter: SourceFilter }) {
  const communityEmpty = sourceFilter === "community";
  return (
    <div className="border border-white/[0.06] p-12 text-center">
      <Store className="mx-auto h-10 w-10 text-slate-600" />
      <h3 className="mt-4 text-lg font-semibold text-white">
        {communityEmpty ? "No community tools yet" : filtered ? "No tools match your search" : "No tools listed yet"}
      </h3>
      <p className="mt-2 text-sm text-slate-500">
        {communityEmpty
          ? "Be the first to list your x402 tool on the marketplace."
          : filtered
          ? "Try a different category or search term."
          : "Creator submissions are under review. Check back soon."}
      </p>
      {(filtered || communityEmpty) && (
        <Link href="/marketplace/submit" className="mt-5 inline-flex font-mono text-xs text-teal-400 hover:text-teal-300 transition">
          Submit your own tool →
        </Link>
      )}
    </div>
  );
}

type SortOption = "newest" | "price_asc" | "price_desc";
type SourceFilter = "all" | "modulr" | "community";

const SOURCE_FILTERS: { value: SourceFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "modulr", label: "Official" },
  { value: "community", label: "Community" },
];

export function CreatorMarketplaceBrowser({ tools }: { tools: CreatorTool[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CreatorToolCategory | "all">("all");
  const [sort, setSort] = useState<SortOption>("newest");
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = tools.filter((t) => {
      const matchesCat = category === "all" || t.category === category;
      const matchesSource = sourceFilter === "all" || t.source === sourceFilter;
      const matchesQuery = !q ||
        t.name.toLowerCase().includes(q) ||
        t.shortDescription.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        t.creatorTwitter.toLowerCase().includes(q);
      return matchesCat && matchesSource && matchesQuery;
    });
    if (sort === "price_asc") return [...result].sort((a, b) => a.priceUsd - b.priceUsd);
    if (sort === "price_desc") return [...result].sort((a, b) => b.priceUsd - a.priceUsd);
    return result;
  }, [tools, query, category, sort, sourceFilter]);

  const counts = useMemo(() => {
    const c: Partial<Record<CreatorToolCategory, number>> = {};
    for (const t of tools) c[t.category] = (c[t.category] ?? 0) + 1;
    return c;
  }, [tools]);

  const sourceCounts = useMemo(() => ({
    modulr: tools.filter((t) => t.source === "modulr").length,
    community: tools.filter((t) => t.source === "community").length,
  }), [tools]);

  const isFiltered = query.trim() !== "" || category !== "all" || sourceFilter !== "all";

  return (
    <>
      {/* Search + filter */}
      <div className="mt-10 space-y-4">
        <div className="flex gap-3">
          <div className="flex flex-1 items-center gap-3 border border-white/10 bg-white/[0.02] px-4">
            <Search className="h-4 w-4 shrink-0 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools, tags or creators…"
              className="h-11 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600 font-mono"
            />
            {query && (
              <button onClick={() => setQuery("")} className="font-mono text-[10px] text-slate-500 hover:text-slate-300 transition shrink-0">
                Clear
              </button>
            )}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="border border-white/10 bg-slate-950 px-3 font-mono text-xs text-slate-400 focus:outline-none hover:border-white/20 transition cursor-pointer"
          >
            <option value="newest">Newest</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          {SOURCE_FILTERS.map((sf) => (
            <button
              key={sf.value}
              onClick={() => setSourceFilter(sf.value)}
              className={`border px-3 py-1.5 font-mono text-xs transition ${
                sourceFilter === sf.value
                  ? "border-teal-400/30 bg-teal-400/[0.08] text-teal-300"
                  : "border-white/[0.08] text-slate-500 hover:text-slate-300 hover:border-white/20"
              }`}
            >
              {sf.label}
              {sf.value === "all" && <span className="ml-1.5 text-slate-600">{tools.length}</span>}
              {sf.value === "modulr" && <span className="ml-1.5 text-slate-600">{sourceCounts.modulr}</span>}
              {sf.value === "community" && <span className="ml-1.5 text-slate-600">{sourceCounts.community}</span>}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`border px-3 py-1.5 font-mono text-xs transition ${
                category === cat.value
                  ? "border-teal-400/30 bg-teal-400/[0.08] text-teal-300"
                  : "border-white/[0.08] text-slate-500 hover:text-slate-300 hover:border-white/20"
              }`}
            >
              {cat.label}
              {cat.value !== "all" && counts[cat.value] != null && (
                <span className="ml-1.5 text-slate-600">{counts[cat.value]}</span>
              )}
              {cat.value === "all" && (
                <span className="ml-1.5 text-slate-600">{tools.length}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <section className="mt-10">
        <div className="flex items-center justify-between gap-3 mb-6">
          <h2 className="text-base font-semibold text-white">
            {isFiltered ? `${filtered.length} result${filtered.length === 1 ? "" : "s"}` : `${tools.length} tool${tools.length === 1 ? "" : "s"} listed`}
          </h2>
          <Tag className="h-4 w-4 text-slate-500" />
        </div>

        {filtered.length === 0 ? (
          <EmptyState filtered={isFiltered} sourceFilter={sourceFilter} />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} onTagClick={(tag) => setQuery(tag)} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
