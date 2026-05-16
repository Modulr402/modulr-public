"use client";

import { motion } from "framer-motion";
import type { LegalSection as LegalSectionType } from "@/types/legal";

interface LegalSectionProps {
  section: LegalSectionType;
  index: number;
}

export function LegalSection({ section, index }: LegalSectionProps) {
  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      className="scroll-mt-28 border border-white/10 bg-white/[0.035] p-5 shadow-soft-border sm:p-6"
    >
      <div className="flex items-start gap-4">
        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-teal-300/20 bg-teal-300/10 font-mono text-xs text-teal-100">
          {index + 1}
        </span>
        <div>
          <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
          <p className="mt-4 leading-7 text-slate-400">{section.body}</p>
        </div>
      </div>
    </motion.section>
  );
}
