"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Send, CheckCircle2, Copy, Check, AlertTriangle, ShieldCheck } from "lucide-react";
import { MotionDiv } from "@/components/motion-div";

const LISTING_FEE_USDC = 10;
const LISTING_FEE_WALLET = "8KmTMWadv8cF11rYWmzcPRvu8Kvwc7YWFW2aTtJDFcTu";

const CATEGORIES = [
  { value: "security", label: "Security" },
  { value: "analytics", label: "Analytics" },
  { value: "automation", label: "Automation" },
  { value: "data", label: "Data" },
  { value: "development", label: "Development" },
  { value: "other", label: "Other" },
];

const RULES = [
  "Tool must return clean, structured JSON",
  "Endpoint must respond to x402 payment headers",
  "Tool must do something genuinely useful — no spam or filler",
  "Tool name must not impersonate Modulr or other known projects",
  "Endpoint must be live and reachable at submission time",
  "Price must reflect the value of the output",
];

const FIELD = "border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-teal-400/40 focus:outline-none w-full font-mono";
const LABEL = "block text-xs font-mono text-slate-400 mb-2 uppercase tracking-widest";

type FormState = {
  creatorName: string;
  creatorTwitter: string;
  walletAddress: string;
  toolName: string;
  shortDescription: string;
  fullDescription: string;
  endpointUrl: string;
  priceUsd: string;
  category: string;
  tags: string;
  exampleRequest: string;
  exampleResponse: string;
  listingFeeTx: string;
};

const EMPTY: FormState = {
  creatorName: "", creatorTwitter: "", walletAddress: "", toolName: "",
  shortDescription: "", fullDescription: "", endpointUrl: "", priceUsd: "",
  category: "", tags: "", exampleRequest: "", exampleResponse: "", listingFeeTx: "",
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    void navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }
  return (
    <button type="button" onClick={copy} className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500 hover:text-slate-300 transition">
      {copied ? <Check className="h-3 w-3 text-teal-400" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default function SubmitPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [endpointResult, setEndpointResult] = useState<{ status: string; message: string } | null>(null);
  const [submittedSlug, setSubmittedSlug] = useState<string | null>(null);

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/marketplace/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, priceUsd: Number(form.priceUsd) }),
      });
      const data = (await res.json()) as { success?: boolean; error?: string; endpointStatus?: string; endpointMessage?: string; slug?: string };
      if (!res.ok || !data.success) {
        setError(data.error ?? "Submission failed.");
      } else {
        setEndpointResult(data.endpointStatus ? { status: data.endpointStatus, message: data.endpointMessage ?? "" } : null);
        setSubmittedSlug(data.slug ?? null);
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto w-full max-w-2xl px-5 pb-24 pt-16 sm:px-8 lg:pt-24">
        <MotionDiv initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <div className="border border-teal-400/20 bg-teal-400/[0.04] p-10 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-teal-400 mb-4" />
            <h2 className="text-xl font-semibold text-white">Submission received</h2>
            <p className="mt-3 text-sm text-slate-400 max-w-sm mx-auto">
              Your tool is pending review. Once we confirm your listing fee we&apos;ll test the endpoint and reach out via Twitter. Fee is refunded if your tool is not listed.
            </p>
            {endpointResult && (
              <p className={`mt-4 font-mono text-xs ${endpointResult.status === "x402_ready" ? "text-teal-400" : endpointResult.status === "unreachable" ? "text-red-400" : "text-amber-400"}`}>
                Endpoint: {endpointResult.message}
              </p>
            )}
            {submittedSlug && (
              <div className="mt-4 border border-white/[0.08] bg-white/[0.03] px-4 py-3">
                <p className="font-mono text-[10px] text-slate-500 mb-1 uppercase tracking-widest">Your listing URL (once approved)</p>
                <p className="font-mono text-xs text-teal-300 break-all">/marketplace/{submittedSlug}</p>
              </div>
            )}
            <Link href="/marketplace" className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-teal-400 hover:text-teal-300 transition">
              <ArrowLeft className="h-3 w-3" /> Back to Marketplace
            </Link>
          </div>
        </MotionDiv>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-5 pb-24 pt-16 sm:px-8 lg:pt-24">
      <MotionDiv initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>

        <Link href="/marketplace" className="inline-flex items-center gap-2 font-mono text-xs text-slate-500 hover:text-slate-300 transition mb-8">
          <ArrowLeft className="h-3 w-3" /> Back to Marketplace
        </Link>

        <div className="border-b border-white/10 pb-10 mb-10">
          <span className="border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-400">Creator Submission</span>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Submit a tool</h1>
          <p className="mt-4 text-slate-400 text-sm leading-7">
            Submit your x402-compatible tool for review. All submissions are manually tested before listing.
          </p>
        </div>

        {/* Rules */}
        <div className="mb-10 border border-amber-400/10 bg-amber-400/[0.03] p-5">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-4 w-4 text-amber-400" />
            <h2 className="font-mono text-xs text-amber-400 uppercase tracking-widest">Listing requirements</h2>
          </div>
          <ul className="space-y-2">
            {RULES.map((rule) => (
              <li key={rule} className="flex items-start gap-2 text-xs text-slate-400">
                <span className="mt-0.5 shrink-0 text-amber-400/50">—</span> {rule}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Creator */}
          <div>
            <h2 className="text-sm font-semibold text-white mb-5 uppercase tracking-widest font-mono">Creator</h2>
            <div className="space-y-4">
              <div>
                <label className={LABEL}>Name</label>
                <input className={FIELD} placeholder="Your name or alias" value={form.creatorName} onChange={set("creatorName")} required maxLength={80} />
              </div>
              <div>
                <label className={LABEL}>Twitter / X handle</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-mono text-sm">@</span>
                  <input className={FIELD + " pl-8"} placeholder="handle" value={form.creatorTwitter} onChange={set("creatorTwitter")} required maxLength={50} />
                </div>
              </div>
              <div>
                <label className={LABEL}>Solana wallet address</label>
                <input className={FIELD} placeholder="Your Solana wallet address" value={form.walletAddress} onChange={set("walletAddress")} required maxLength={44} />
              </div>
            </div>
          </div>

          {/* Tool */}
          <div>
            <h2 className="text-sm font-semibold text-white mb-5 uppercase tracking-widest font-mono">Tool</h2>
            <div className="space-y-4">
              <div>
                <label className={LABEL}>Tool name</label>
                <input className={FIELD} placeholder="e.g. Solana Whale Tracker" value={form.toolName} onChange={set("toolName")} required maxLength={80} />
              </div>
              <div>
                <label className={LABEL}>Short description <span className="text-slate-600 normal-case">(max 140 chars)</span></label>
                <input className={FIELD} placeholder="One sentence. What does it do?" value={form.shortDescription} onChange={set("shortDescription")} required maxLength={140} />
                <p className="mt-1 text-right font-mono text-[10px] text-slate-600">{form.shortDescription.length}/140</p>
              </div>
              <div>
                <label className={LABEL}>Full description</label>
                <textarea className={FIELD + " h-28 resize-none"} placeholder="What it does, what it returns, and who it's useful for." value={form.fullDescription} onChange={set("fullDescription")} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={LABEL}>Category</label>
                  <select className={FIELD} value={form.category} onChange={set("category")} required>
                    <option value="">Select category</option>
                    {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className={LABEL}>Price (USDC per call)</label>
                  <input className={FIELD} type="number" step="0.01" min="0.01" max="100" placeholder="0.10" value={form.priceUsd} onChange={set("priceUsd")} required />
                </div>
              </div>
              <div>
                <label className={LABEL}>Tags <span className="text-slate-600 normal-case">(optional, max 5)</span></label>
                <input className={FIELD} placeholder="e.g. solana, wallet, defi, analytics" value={form.tags} onChange={set("tags")} maxLength={120} />
                <p className="mt-1 font-mono text-[10px] text-slate-600">Comma-separated. Helps buyers find your tool when searching.</p>
              </div>
            </div>
          </div>

          {/* Endpoint */}
          <div>
            <h2 className="text-sm font-semibold text-white mb-5 uppercase tracking-widest font-mono">Endpoint</h2>
            <div className="space-y-4">
              <div>
                <label className={LABEL}>HTTPS endpoint URL</label>
                <input className={FIELD} type="url" placeholder="https://yourapi.com/x402/your-tool" value={form.endpointUrl} onChange={set("endpointUrl")} required />
                <p className="mt-1 font-mono text-[10px] text-slate-600">Must be HTTPS. Must return x402 payment header when not paid.</p>
              </div>
              <div>
                <label className={LABEL}>Example request body (JSON)</label>
                <textarea className={FIELD + " h-24 resize-none"} placeholder={'{ "address": "9apA5U8..." }'} value={form.exampleRequest} onChange={set("exampleRequest")} required />
              </div>
              <div>
                <label className={LABEL}>Example response (JSON)</label>
                <textarea className={FIELD + " h-24 resize-none"} placeholder={'{ "result": "..." }'} value={form.exampleResponse} onChange={set("exampleResponse")} required />
              </div>
            </div>
          </div>

          {/* Listing Fee */}
          <div>
            <h2 className="text-sm font-semibold text-white mb-5 uppercase tracking-widest font-mono">Listing Fee</h2>
            <div className="border border-white/10 bg-white/[0.02] p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white font-semibold">${LISTING_FEE_USDC} USDC</p>
                  <p className="mt-1 text-xs text-slate-500">One-time fee. Covers manual review and endpoint testing. Refunded if your tool is not listed.</p>
                </div>
                <AlertTriangle className="h-5 w-5 text-amber-400/60 shrink-0" />
              </div>
              <div className="border-t border-white/[0.06] pt-4">
                <p className="font-mono text-xs text-slate-500 mb-2">Send to this wallet:</p>
                <div className="flex items-center justify-between border border-white/[0.08] bg-slate-950 px-3 py-2">
                  <span className="font-mono text-xs text-teal-300 break-all">{LISTING_FEE_WALLET}</span>
                  <CopyButton text={LISTING_FEE_WALLET} />
                </div>
              </div>
              <div>
                <label className={LABEL}>Transaction signature</label>
                <input
                  className={FIELD}
                  placeholder="Paste your Solana transaction signature after paying"
                  value={form.listingFeeTx}
                  onChange={set("listingFeeTx")}
                  required
                  maxLength={90}
                />
                <p className="mt-1 font-mono text-[10px] text-slate-600">We will verify this before reviewing your submission.</p>
              </div>
            </div>
          </div>

          {error && (
            <div className="border border-red-400/20 bg-red-400/[0.05] px-4 py-3 font-mono text-xs text-red-400">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 border border-teal-400/30 bg-teal-400/[0.06] px-6 py-4 font-mono text-sm text-teal-300 transition hover:bg-teal-400/[0.12] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" />
            {loading ? "Submitting…" : "Submit for review"}
          </button>

          <p className="text-center font-mono text-[10px] text-slate-600">
            Submissions are manually reviewed after fee confirmation. Fee is refunded if your tool is not listed.
          </p>
        </form>

      </MotionDiv>
    </div>
  );
}
