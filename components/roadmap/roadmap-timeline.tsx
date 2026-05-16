"use client";

import { motion } from "framer-motion";
import { RoadmapCard } from "@/components/roadmap/roadmap-card";
import type { RoadmapQuarter } from "@/types/roadmap";

interface RoadmapTimelineProps {
  quarters: RoadmapQuarter[];
}

export function RoadmapTimeline({ quarters }: RoadmapTimelineProps) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.12 }
        }
      }}
      className="relative mt-14 space-y-8 lg:space-y-0"
    >
      <div className="absolute left-5 top-0 h-full w-px bg-white/10 lg:hidden" />
      {quarters.map((quarter, index) => (
        <div key={`${quarter.quarter}-${quarter.title}`} className="relative pl-12 lg:pl-0">
          <div className="absolute left-0 top-8 flex h-10 w-10 items-center justify-center border border-teal-300/25 bg-slate-950 text-teal-100 shadow-glow lg:hidden">
            <span className="h-2 w-2 bg-teal-200" />
          </div>
          <RoadmapCard quarter={quarter} index={index} />
        </div>
      ))}
    </motion.section>
  );
}
