"use client";

import { useMemo, useState } from "react";
import { Blocks, Network, Search, ShieldCheck, SlidersHorizontal, Sparkles, TrendingUp } from "lucide-react";
import { MotionDiv } from "@/components/motion-div";
import { ProductCard } from "@/components/marketplace/product-card";
import { cn } from "@/lib/utils";
import type {
  MarketplaceCategory,
  MarketplaceCategoryDefinition,
  MarketplaceProduct,
  MarketplaceStatistic,
  MarketplaceTrustItem
} from "@/types/components";

interface MarketplaceBrowserProps {
  products: MarketplaceProduct[];
  categories: Array<MarketplaceCategory | "All">;
  categoryDefinitions: MarketplaceCategoryDefinition[];
  stats: MarketplaceStatistic[];
  trustItems: MarketplaceTrustItem[];
}

export function MarketplaceBrowser({
  products,
  categories,
  categoryDefinitions,
  stats,
  trustItems
}: MarketplaceBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<MarketplaceCategory | "All">("All");

  const featuredProducts = products.filter((product) => product.featured);
  const trendingProducts = products.filter((product) => product.trending);
  const productCountByCategory = useMemo(
    () =>
      products.reduce<Record<MarketplaceCategory, number>>((accumulator, product) => {
        accumulator[product.category] = (accumulator[product.category] ?? 0) + 1;
        return accumulator;
      }, {} as Record<MarketplaceCategory, number>),
    [products]
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesQuery =
        !normalizedQuery ||
        product.title.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery) ||
        product.compatibility.some((tag) => tag.toLowerCase().includes(normalizedQuery)) ||
        product.infrastructureTags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesQuery;
    });
  }, [category, products, query]);

  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:pt-24">
      <MotionDiv initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">Marketplace</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Components</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          A growing marketplace ecosystem for crypto infrastructure, developer workflows and wallet-aware tooling.
          Current listings are structured for future x402 access, secure delivery and marketplace-scale integrations.
        </p>
      </MotionDiv>

      <section className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <MotionDiv
            key={stat.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="border border-white/10 bg-white/[0.035] p-5 shadow-soft-border"
          >
            <p className="font-mono text-2xl text-white">{stat.value}</p>
            <p className="mt-3 text-sm font-medium text-slate-200">{stat.label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">{stat.detail}</p>
          </MotionDiv>
        ))}
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div className="border border-white/10 bg-slate-950/55 p-5 shadow-soft-border">
          <div className="flex items-center gap-3 border border-white/10 bg-white/[0.035] px-4">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search systems, tags or infrastructure layers"
              className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "border px-3 py-2 text-sm transition",
                  category === item
                    ? "border-teal-300/30 bg-teal-300/10 text-teal-100"
                    : "border-white/10 bg-white/[0.035] text-slate-400 hover:text-white"
                )}
              >
                <span>{item}</span>
                {item !== "All" ? (
                  <span className="ml-2 font-mono text-xs text-slate-500">{productCountByCategory[item] ?? 0}</span>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <div className="border border-white/10 bg-white/[0.035] p-5 shadow-soft-border">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="h-5 w-5 text-teal-200" />
            <div>
              <p className="text-sm font-medium text-white">Marketplace filters</p>
              <p className="mt-1 text-sm text-slate-500">
                Frontend metadata filtering for current and planned infrastructure categories.
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {categoryDefinitions.map((definition) => (
              <div key={definition.name} className="border border-white/10 bg-slate-950/45 px-3 py-2">
                <p className="text-xs font-medium text-slate-200">{definition.name}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  {definition.status} · {productCountByCategory[definition.name] ?? 0}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="border border-white/10 bg-white/[0.035] p-6 shadow-soft-border">
          <div className="flex items-center gap-3">
            <Blocks className="h-5 w-5 text-teal-200" />
            <h2 className="text-2xl font-semibold text-white">Ecosystem categories</h2>
          </div>
          <p className="mt-4 leading-7 text-slate-400">
            Modulr categories are organized around infrastructure layers rather than isolated files, so listings can
            expand into wallet access, APIs and release systems over time.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {categoryDefinitions.map((definition) => (
            <button
              key={definition.name}
              type="button"
              onClick={() => setCategory(definition.name)}
              className="group border border-white/10 bg-slate-950/45 p-4 text-left transition hover:border-teal-300/25 hover:bg-teal-300/[0.035]"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-white">{definition.name}</p>
                <span className="border border-white/10 bg-white/[0.035] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500 group-hover:text-teal-100">
                  {definition.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">{definition.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-5 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-teal-200" />
          <h2 className="text-2xl font-semibold text-white">Featured</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </section>

      <section className="mt-12 border border-white/10 bg-slate-950/55 p-6 shadow-soft-border">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-teal-200" />
          <h2 className="text-2xl font-semibold text-white">Marketplace trust layer</h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.title} className="border border-white/10 bg-white/[0.035] p-4">
              <Network className="h-4 w-4 text-teal-200" />
              <p className="mt-4 font-medium text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-5 flex items-center gap-3">
          <TrendingUp className="h-5 w-5 text-teal-200" />
          <h2 className="text-2xl font-semibold text-white">Trending</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {trendingProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">All Tools</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Marketplace grid</h2>
          </div>
          <p className="text-sm text-slate-500">{filteredProducts.length} result(s)</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
