"use client";

import { motion } from "framer-motion";
import { Boxes, CheckCircle2, ChevronRight } from "lucide-react";
import { StatusBadge } from "@/components/roadmap/status-badge";
import type { RoadmapQuarter } from "@/types/roadmap";

interface RoadmapCardProps {
  quarter: RoadmapQuarter;
  index: number;
}

export function RoadmapCard({ quarter, index }: RoadmapCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="relative grid gap-5 lg:grid-cols-[1fr_88px_1fr]"
    >
      <div className={isEven ? "lg:order-1" : "lg:order-3"} />

      <div className="relative hidden justify-center lg:order-2 lg:flex">
        <div className="absolute top-0 h-full w-px bg-white/10" />
        <div className="relative mt-8 flex h-12 w-12 items-center justify-center border border-teal-300/25 bg-slate-950 text-teal-100 shadow-glow">
          <span className="h-2.5 w-2.5 bg-teal-200" />
        </div>
      </div>

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`relative border border-white/10 bg-white/[0.035] p-5 shadow-soft-border backdrop-blur sm:p-6 ${
          isEven ? "lg:order-3" : "lg:order-1"
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/40 to-transparent" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">{quarter.quarter}</p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{quarter.title}</h2>
          </div>
          <StatusBadge status={quarter.status} />
        </div>

        <div className="mt-6 border-l border-teal-300/25 pl-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Focus</p>
          <p className="mt-2 leading-7 text-slate-300">{quarter.focus}</p>
        </div>

        <div className="mt-7 max-h-[340px] space-y-4 overflow-y-auto pr-1 [scrollbar-color:rgba(94,234,212,0.3)_transparent] [scrollbar-width:thin]">
          {quarter.items.map((item, itemIndex) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: isEven ? 18 : -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: index * 0.06 + itemIndex * 0.08 }}
              className={`group border p-4 transition ${
                item.completed
                  ? "border-teal-300/30 bg-teal-300/[0.06]"
                  : "border-white/[0.08] bg-slate-950/[0.45] hover:border-teal-300/25 hover:bg-teal-300/[0.045]"
              }`}
            >
              <div className="flex items-start gap-3">
                {item.completed ? (
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                ) : (
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center border border-white/10 bg-white/[0.05] font-mono text-xs text-teal-100">
                    {itemIndex + 1}
                  </span>
                )}
                <div>
                  <h3 className={`text-base font-medium ${item.completed ? "text-teal-100" : "text-white"}`}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                  {item.completed && (
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-teal-400">Completed</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-3 border border-dashed border-teal-300/20 bg-teal-300/[0.045] p-4">
          <Boxes className="mt-0.5 h-5 w-5 shrink-0 text-teal-200" />
          <div>
            <p className="text-sm font-medium text-white">Quarterly Expansion</p>
            <p className="mt-1 text-sm leading-6 text-slate-400">{quarter.expansion}</p>
          </div>
          <ChevronRight className="ml-auto hidden h-5 w-5 shrink-0 text-slate-600 sm:block" />
        </div>
      </motion.div>
    </motion.article>
  );
}
