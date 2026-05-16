"use client";

import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";
import type { WeeklyScheduleItem } from "@/types/tokenomics";

interface ScheduleTimelineProps {
  schedule: WeeklyScheduleItem[];
}

export function ScheduleTimeline({ schedule }: ScheduleTimelineProps) {
  return (
    <section className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">Weekly Schedule</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Distribution cadence</h2>
      </motion.div>

      <div className="relative mt-8 grid gap-4 lg:grid-cols-3">
        {schedule.map((item, index) => (
          <motion.article
            key={`${item.day}-${item.title}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="border border-white/10 bg-white/[0.035] p-5 shadow-soft-border"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-teal-200">{item.day}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              </div>
              {item.time ? (
                <span className="inline-flex shrink-0 items-center gap-2 border border-white/10 bg-white/[0.05] px-3 py-1.5 font-mono text-xs text-slate-300">
                  <Clock3 className="h-3.5 w-3.5 text-teal-200" />
                  {item.time}
                </span>
              ) : null}
            </div>
            <div className="mt-5 space-y-3">
              {item.details.map((detail) => (
                <div key={detail} className="flex gap-3 text-sm leading-6 text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-teal-200" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
