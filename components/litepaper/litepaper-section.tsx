"use client";

import { motion } from "framer-motion";
import type { LitepaperSection as LitepaperSectionType } from "@/types/litepaper";

interface LitepaperSectionProps {
  section: LitepaperSectionType;
  index: number;
}

export function LitepaperSection({ section, index }: LitepaperSectionProps) {
  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
      className="scroll-mt-28 border-b border-white/10 py-10 first:pt-0 last:border-b-0"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">{section.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">{section.title}</h2>
        </div>
      </div>

      <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
        {section.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {section.points ? (
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {section.points.map((point) => (
            <div key={point} className="flex items-center gap-3 border border-white/[0.08] bg-white/[0.025] p-3">
              <span className="h-1.5 w-1.5 shrink-0 bg-teal-200" />
              <span className="text-sm text-slate-300">{point}</span>
            </div>
          ))}
        </div>
      ) : null}
    </motion.section>
  );
}
