import Link from "next/link";
import { ArrowRight, Blocks, BookOpen, Code2, CreditCard, Layers3, Sparkles, WalletCards } from "lucide-react";
import { MotionDiv } from "@/components/motion-div";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Blocks,
    title: "Explore",
    description: "Browse premium crypto and developer infrastructure tools with clear categories, pricing and detail pages."
  },
  {
    icon: WalletCards,
    title: "Connect",
    description: "Use the wallet-connected dashboard and checkout UI prepared for authenticated marketplace access."
  },
  {
    icon: CreditCard,
    title: "Checkout",
    description: "Send USDC, paste your transaction signature and get instant on-chain verified access. No account required."
  }
];

const platformItems = [
  "Marketplace product pages",
  "Wallet-connected dashboard",
  "Frontend checkout flow",
  "Roadmap and litepaper"
];

const platformStats = [
  { label: "Marketplace tools", value: "3" },
  { label: "Wallet options", value: "3" },
  { label: "Core docs", value: "4" }
];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-20 pt-16 sm:px-8 lg:pt-24">
      <section className="grid min-h-[620px] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 border border-teal-300/20 bg-teal-300/[0.08] px-3 py-1.5 text-sm text-teal-100 shadow-glow">
            <Sparkles className="h-4 w-4" />
            x402 component marketplace infrastructure
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Modulr
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Modulr is an x402 component marketplace built for crypto-native builders and technical users. Connect your wallet, access premium on-chain tools and receive structured professional output ready to use and exportable in any format.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/components">
                Explore Components
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/litepaper">
                Read Litepaper
                <BookOpen className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-8 bg-teal-400/10 blur-3xl" />
          <div className="relative border border-white/10 bg-white/[0.045] p-5 shadow-soft-border backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-teal-200">Platform Surface</p>
                <h2 className="mt-2 text-xl font-medium text-white">Current Modulr structure</h2>
              </div>
              <Code2 className="h-5 w-5 text-teal-200" />
            </div>
            <div className="mt-5 space-y-3">
              {platformItems.map((item, index) => (
                <div key={item} className="flex items-center justify-between border border-white/[0.08] bg-slate-950/50 p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center border border-teal-300/20 bg-teal-300/10 font-mono text-sm text-teal-100">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-100">{item}</span>
                  </div>
                  <span className="font-mono text-xs text-teal-200">LIVE</span>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {platformStats.map((stat) => (
                <div key={stat.label} className="border border-white/10 bg-white/[0.035] p-3">
                  <p className="font-mono text-xl text-white">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionDiv>
      </section>

      <section className="border-y border-white/10 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">What Modulr is</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A serious infrastructure marketplace surface.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            Modulr now includes marketplace listings, product detail pages, wallet connection UI, checkout-state
            a connected dashboard, roadmap, tokenomics, litepaper and legal documentation. Real payment,
            delivery and verification logic remain intentionally separated for later implementation.
          </p>
        </div>
      </section>

      <section id="how-it-will-work" className="py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">Process</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">How it will work</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="border border-white/10 bg-white/[0.035] p-6 shadow-soft-border">
              <step.icon className="h-6 w-6 text-teal-200" />
              <h3 className="mt-6 text-xl font-medium text-white">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-white/10 bg-slate-950/55 p-6 shadow-soft-border sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <Layers3 className="h-7 w-7 text-teal-200" />
            <h2 className="mt-5 text-3xl font-semibold text-white">Built for expansion without noise.</h2>
            <p className="mt-4 leading-7 text-slate-400">
              The current product surface keeps infrastructure clear: marketplace discovery, wallet-aware account state,
              checkout preparation, and public documentation live in separate, scalable sections.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/roadmap">View Roadmap</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/tokenomics">View Tokenomics</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "On-chain payment verification", status: "Live" },
              { label: "Wallet-connected access and dashboard", status: "Live" },
              { label: "Creator tool marketplace", status: "In development" },
              { label: "SDK and API access layer", status: "Roadmap" },
            ].map((item) => (
              <div key={item.label} className="min-h-28 border border-white/10 bg-white/[0.025] p-4">
                <p className="text-sm font-medium text-slate-200">{item.label}</p>
                <p className={`mt-6 font-mono text-xs ${item.status === "Live" ? "text-teal-400/70" : "text-slate-600"}`}>{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
