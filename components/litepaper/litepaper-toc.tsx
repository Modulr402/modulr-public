"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import type { LitepaperSection } from "@/types/litepaper";

interface LitepaperTocProps {
  sections: LitepaperSection[];
}

export function LitepaperToc({ sections }: LitepaperTocProps) {
  return (
    <aside className="sticky top-28 hidden self-start border border-white/10 bg-slate-950/60 p-5 shadow-soft-border backdrop-blur lg:block">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <span className="flex h-9 w-9 items-center justify-center border border-teal-300/20 bg-teal-300/10 text-teal-200">
          <FileText className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-medium text-white">Litepaper</p>
          <p className="text-xs text-slate-500">Table of contents</p>
        </div>
      </div>

      <nav className="mt-4 space-y-1">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className="flex items-center gap-3 px-3 py-2 text-sm text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            <span className="font-mono text-xs text-teal-200">{section.eyebrow}</span>
            <span>{section.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
