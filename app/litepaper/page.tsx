import type { Metadata } from "next";
import { BookOpen, Layers3, ShieldCheck } from "lucide-react";
import { litepaperSections } from "@/data/litepaper";
import { LitepaperSection, LitepaperToc } from "@/components/litepaper";
import { MotionDiv } from "@/components/motion-div";

export const metadata: Metadata = {
  title: "Litepaper",
  description:
    "Modulr is a live on-chain marketplace for crypto tools. Pay in USDC, generate professional reports, export in any format. Three tools live today: Wallet Risk Report, Token Launch Checklist, Smart Contract Audit.",
  alternates: { canonical: "/litepaper" },
  openGraph: {
    title: "Litepaper | Modulr",
    description:
      "Modulr is a live on-chain marketplace for crypto tools. Pay in USDC, generate professional reports, export in any format. Three tools live today: Wallet Risk Report, Token Launch Checklist, Smart Contract Audit.",
    url: "/litepaper",
  },
  twitter: {
    title: "Litepaper | Modulr",
    description:
      "Modulr is a live on-chain marketplace for crypto tools. Pay in USDC, generate professional reports, export in any format. Three tools live today: Wallet Risk Report, Token Launch Checklist, Smart Contract Audit.",
  },
};

export default function LitepaperPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-16 sm:px-8 lg:pt-24">
      <section className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">Modulr Litepaper</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            On-chain marketplace for crypto tools. Live now.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Modulr is a functioning on-chain marketplace. Connect a Solana wallet, pay in USDC, generate
            professional-grade reports and audits, then download them in any format. Three tools live today,
            more coming.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="grid gap-3"
        >
          {[
            {
              icon: BookOpen,
              title: "Live platform",
              text: "Three tools are live on Solana mainnet today. Real USDC payments, on-chain verification, permanent report storage."
            },
            {
              icon: Layers3,
              title: "Pay-per-use model",
              text: "One payment unlocks one generation. Reports are saved permanently and re-downloadable anytime from your dashboard."
            },
            {
              icon: ShieldCheck,
              title: "$MODU token",
              text: "Launched on pump.fun. The platform is revenue-generating at launch. Holders back a live product, not a roadmap."
            }
          ].map((item) => (
            <div key={item.title} className="border border-white/10 bg-white/[0.035] p-4 shadow-soft-border">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-teal-300/20 bg-teal-300/10 text-teal-200">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-sm font-medium text-white">{item.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </MotionDiv>
      </section>

      <div className="grid gap-10 pt-12 lg:grid-cols-[280px_1fr]">
        <LitepaperToc sections={litepaperSections} />
        <article className="min-w-0 border border-white/10 bg-slate-950/45 px-5 py-8 shadow-soft-border sm:px-8 lg:px-10">
          {litepaperSections.map((section, index) => (
            <LitepaperSection key={section.id} section={section} index={index} />
          ))}
        </article>
      </div>
    </div>
  );
}
