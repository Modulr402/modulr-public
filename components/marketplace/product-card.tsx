"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, LockKeyhole, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { MarketplaceProduct } from "@/types/components";

interface ProductCardProps {
  product: MarketplaceProduct;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="relative flex min-h-80 flex-col border border-white/10 bg-white/[0.035] p-5 shadow-soft-border transition hover:border-teal-300/25"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/35 to-transparent" />
      <div className="flex items-start justify-between gap-4">
        <span className="border border-teal-300/20 bg-teal-300/10 px-3 py-1.5 text-xs font-medium text-teal-100">
          {product.category}
        </span>
        <div className="text-right">
          <span className="block font-mono text-sm text-white">{product.price}</span>
          <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
            {product.version}
          </span>
        </div>
      </div>

      <h2 className="mt-5 text-2xl font-semibold leading-tight text-white">{product.title}</h2>
      <p className="mt-4 flex-1 leading-7 text-slate-400">{product.shortDescription}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {product.infrastructureTags.slice(0, 2).map((tag) => (
          <span key={tag} className="border border-white/10 bg-slate-950/50 px-2.5 py-1 text-xs text-slate-400">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-300">
          {product.difficulty}
        </span>
        <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-300">
          <LockKeyhole className="h-3.5 w-3.5 text-teal-200" />
          Wallet Required
        </span>
        {product.walletAware ? (
          <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-300">
            <Network className="h-3.5 w-3.5 text-teal-200" />
            Wallet-aware
          </span>
        ) : null}
        {product.futureApiSupport ? (
          <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-300">
            <Code2 className="h-3.5 w-3.5 text-teal-200" />
            Future API
          </span>
        ) : null}
      </div>

      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
        Updated {product.lastUpdated}
      </p>

      <Button asChild variant="outline" className="mt-6 w-full">
        <Link href={`/components/${product.slug}`}>
          View Details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </motion.article>
  );
}
