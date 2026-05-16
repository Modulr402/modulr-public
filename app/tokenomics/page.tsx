import type { Metadata } from "next";
import { AlertTriangle, FileText, ShieldCheck } from "lucide-react";
import { tokenAllocations, weeklySchedule } from "@/data/tokenomics";
import { MotionDiv } from "@/components/motion-div";
import { AllocationBar, AllocationCard, ScheduleTimeline } from "@/components/tokenomics";

export const metadata: Metadata = {
  title: "$MODU Tokenomics",
  description:
    "Weekly creator fee distribution model for $MODU. 70% operations, 15% buybacks, 15% ecosystem rewards. Transparent and predictable allocation structure.",
  alternates: { canonical: "/tokenomics" },
  openGraph: {
    title: "$MODU Tokenomics | Modulr",
    description:
      "Weekly creator fee distribution model for $MODU. 70% operations, 15% buybacks, 15% ecosystem rewards. Transparent and predictable allocation structure.",
    url: "/tokenomics",
  },
  twitter: {
    title: "$MODU Tokenomics | Modulr",
    description:
      "Weekly creator fee distribution model for $MODU. 70% operations, 15% buybacks, 15% ecosystem rewards. Transparent and predictable allocation structure.",
  },
};

export default function TokenomicsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-16 sm:px-8 lg:pt-24">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">$MODU Tokenomics</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Weekly Creator Fee Distribution
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Modulr uses a clear weekly process for routing creator fees across development, buybacks and community
            rewards. This page describes the intended distribution structure only.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="border border-white/10 bg-white/[0.035] p-6 shadow-soft-border"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-teal-300/20 bg-teal-300/10 text-teal-200">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-teal-200">Operating Model</p>
              <p className="mt-3 leading-7 text-slate-300">
                70% supports Modulr development and operations. 15% is allocated to buybacks with a 6-month lock. 15%
                supports weekly giveaways and ecosystem rewards.
              </p>
            </div>
          </div>
        </MotionDiv>
      </section>

      <section className="mt-14 grid gap-4 lg:grid-cols-3">
        {tokenAllocations.map((allocation, index) => (
          <AllocationCard key={allocation.label} allocation={allocation} index={index} />
        ))}
      </section>

      <div className="mt-6">
        <AllocationBar allocations={tokenAllocations} />
      </div>

      <ScheduleTimeline schedule={weeklySchedule} />

      <section className="mt-16 grid gap-4 lg:grid-cols-2">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="border border-white/10 bg-slate-950/55 p-6 shadow-soft-border"
        >
          <FileText className="h-6 w-6 text-teal-200" />
          <h2 className="mt-5 text-2xl font-semibold text-white">Transparency</h2>
          <p className="mt-4 leading-7 text-slate-400">
            Modulr aims to make creator fee distribution predictable and transparent through a clear weekly process. The
            schedule defines when giveaways open, when creator fees are claimed, how buyback and giveaway allocations are
            routed, and when weekly results are announced.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="border border-white/10 bg-white/[0.035] p-6 shadow-soft-border"
        >
          <AlertTriangle className="h-6 w-6 text-sky-200" />
          <h2 className="mt-5 text-2xl font-semibold text-white">Risk and clarity</h2>
          <p className="mt-4 leading-7 text-slate-400">
            Tokenomics may evolve as Modulr grows, as infrastructure requirements, ecosystem needs and operating
            conditions change. $MODU is not a guarantee of profit, income or return.
          </p>
        </MotionDiv>
      </section>
    </div>
  );
}
