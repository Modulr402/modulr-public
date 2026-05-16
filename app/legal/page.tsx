import { AlertTriangle, FileCheck2, Scale } from "lucide-react";
import { legalSections } from "@/data/legal";
import { LegalSection } from "@/components/legal";
import { MotionDiv } from "@/components/motion-div";

export default function LegalPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 pb-24 pt-16 sm:px-8 lg:pt-24">
      <section className="border-b border-white/10 pb-12">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">Legal</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Platform usage, crypto risk and marketplace limitations.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This page summarizes important legal and risk considerations for Modulr as an evolving infrastructure and
            marketplace project.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="mt-8 grid gap-3 sm:grid-cols-3"
        >
          {[
            { icon: Scale, label: "Usage responsibility" },
            { icon: AlertTriangle, label: "Crypto risk" },
            { icon: FileCheck2, label: "Evolving policy" }
          ].map((item) => (
            <div key={item.label} className="border border-white/10 bg-white/[0.035] p-4 shadow-soft-border">
              <item.icon className="h-5 w-5 text-teal-200" />
              <p className="mt-4 text-sm font-medium text-white">{item.label}</p>
            </div>
          ))}
        </MotionDiv>
      </section>

      <div className="mt-8 space-y-4">
        {legalSections.map((section, index) => (
          <LegalSection key={section.id} section={section} index={index} />
        ))}
      </div>
    </div>
  );
}
