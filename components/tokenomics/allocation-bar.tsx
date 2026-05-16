"use client";

import { motion } from "framer-motion";
import type { TokenAllocation } from "@/types/tokenomics";

const segmentStyles = ["bg-teal-300", "bg-sky-300", "bg-emerald-300"];

interface AllocationBarProps {
  allocations: TokenAllocation[];
}

export function AllocationBar({ allocations }: AllocationBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="border border-white/10 bg-slate-950/55 p-5 shadow-soft-border"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">Allocation</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Weekly creator fee split</h2>
        </div>
        <span className="hidden font-mono text-sm text-slate-500 sm:block">100%</span>
      </div>

      <div className="mt-6 flex h-5 overflow-hidden border border-white/10 bg-white/[0.04]">
        {allocations.map((allocation, index) => (
          <motion.div
            key={allocation.label}
            initial={{ width: 0 }}
            whileInView={{ width: `${allocation.percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
            className={segmentStyles[index]}
          />
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {allocations.map((allocation, index) => (
          <div key={allocation.label} className="flex items-center gap-3 text-sm text-slate-300">
            <span className={`h-2.5 w-2.5 ${segmentStyles[index]}`} />
            <span>{allocation.label}</span>
            <span className="ml-auto font-mono text-slate-500">{allocation.percentage}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
