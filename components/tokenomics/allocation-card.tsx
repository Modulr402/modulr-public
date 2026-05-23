"use client";

import { motion } from "framer-motion";
import { Gift, Hammer, RotateCcw } from "lucide-react";
import type { TokenAllocation } from "@/types/tokenomics";

const allocationIcons = {
  dev: Hammer,
  buyback: RotateCcw,
  giveaway: Gift
};

interface AllocationCardProps {
  allocation: TokenAllocation;
  index: number;
}

export function AllocationCard({ allocation, index }: AllocationCardProps) {
  const Icon = allocationIcons[allocation.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="relative border border-white/10 bg-white/[0.035] p-6 shadow-soft-border transition hover:border-teal-300/25"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/35 to-transparent" />
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="font-mono text-4xl font-semibold text-white">{allocation.percentage}%</p>
          <h2 className="mt-4 text-xl font-semibold text-white">{allocation.label}</h2>
          <p className="mt-1 text-sm text-teal-100">{allocation.summary}</p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-teal-300/20 bg-teal-300/10 text-teal-200">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <p className="mt-6 leading-7 text-slate-400">{allocation.description}</p>
      {allocation.moduLocked !== undefined && (
        <div className="mt-5 border border-teal-300/20 bg-teal-300/[0.04] p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-400">$MODU Locked</p>
          <p className="mt-1 font-mono text-2xl font-semibold text-white">{allocation.moduLocked} <span className="text-sm text-teal-300">$MODU</span></p>
        </div>
      )}
      {allocation.walletAddress && (
        <div className="mt-3 border border-white/[0.08] bg-slate-950/50 p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Wallet Address</p>
          <p className="mt-1.5 break-all font-mono text-xs text-slate-300">{allocation.walletAddress}</p>
        </div>
      )}
    </motion.article>
  );
}
