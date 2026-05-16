import type { Metadata } from "next";
import { Activity, ArrowUpRight, Network } from "lucide-react";
import { roadmap } from "@/data/roadmap";
import { MotionDiv } from "@/components/motion-div";
import { RoadmapTimeline } from "@/components/roadmap";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "A focused expansion plan for Modulr marketplace infrastructure, wallet-authenticated access, AI-powered workflows, developer tooling and long-term platform scale.",
  alternates: { canonical: "/roadmap" },
  openGraph: {
    title: "Roadmap | Modulr",
    description:
      "A focused expansion plan for Modulr marketplace infrastructure, wallet-authenticated access, AI-powered workflows, developer tooling and long-term platform scale.",
    url: "/roadmap",
  },
  twitter: {
    title: "Roadmap | Modulr",
    description:
      "A focused expansion plan for Modulr marketplace infrastructure, wallet-authenticated access, AI-powered workflows, developer tooling and long-term platform scale.",
  },
};

const principles = [
  {
    icon: Network,
    label: "Infrastructure first",
    text: "Marketplace systems, wallet verification and delivery architecture are treated as core platform primitives."
  },
  {
    icon: Activity,
    label: "Measured expansion",
    text: "Every quarter expands the product surface deliberately, with two premium components launched per quarter."
  },
  {
    icon: ArrowUpRight,
    label: "Long-term platform",
    text: "The roadmap prioritizes SDKs, APIs, payment rails and creator infrastructure before broad ecosystem scaling."
  }
];

export default function RoadmapPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-16 sm:px-8 lg:pt-24">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">Roadmap</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building Modulr as durable crypto infrastructure.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A focused expansion plan for marketplace infrastructure, wallet-authenticated access, AI-powered workflows,
            developer tooling and long-term platform scale.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="grid gap-3"
        >
          {principles.map((principle) => (
            <div key={principle.label} className="border border-white/10 bg-white/[0.035] p-4 shadow-soft-border">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-teal-300/20 bg-teal-300/10 text-teal-200">
                  <principle.icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-sm font-medium text-white">{principle.label}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{principle.text}</p>
                </div>
              </div>
            </div>
          ))}
        </MotionDiv>
      </section>

      <RoadmapTimeline quarters={roadmap} />
    </div>
  );
}
