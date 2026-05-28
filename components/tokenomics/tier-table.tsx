"use client";

import { motion } from "framer-motion";

export function TierTable() {
  const tiers = [
    { tier: "Holder",    minBalance: "100,000",   discount: 10 },
    { tier: "Supporter", minBalance: "500,000",   discount: 15 },
    { tier: "Builder",   minBalance: "2,000,000", discount: 20 },
    { tier: "Architect", minBalance: "4,000,000", discount: 30 },
  ];

  return (
    <section className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">$MODU Holder Discounts</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Discount tiers</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Holding $MODU unlocks automatic discounts on all tools at checkout. Discounts are applied based on your wallet balance at the time of purchase.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative mt-8 border border-white/10 bg-white/[0.035] shadow-soft-border"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/35 to-transparent" />
        <div className="grid grid-cols-3 border-b border-white/10 px-5 py-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Tier</p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Min. $MODU</p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Discount</p>
        </div>
        {tiers.map((t, i) => (
          <motion.div
            key={t.tier}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
            className="grid grid-cols-3 border-b border-white/[0.06] px-5 py-4 last:border-0"
          >
            <p className="text-sm font-medium text-white">{t.tier}</p>
            <p className="font-mono text-sm text-slate-300">{t.minBalance}</p>
            <p className="font-mono text-sm text-teal-300">{t.discount}% off</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
