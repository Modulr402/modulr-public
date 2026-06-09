"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ExternalLink, Copy, Check, Code, Tag, Zap, ShieldCheck, Wifi, WifiOff, AlertCircle, Terminal, Share2, BadgeCheck, Sparkles } from "lucide-react";
import { ToolCard } from "@/components/marketplace/tool-card";
import type { CreatorTool, EndpointStatus } from "@/types/marketplace";

const PRICE_COLOR = (price: number) =>
  price <= 0.10 ? "text-green-400 border-green-400/20 bg-green-400/[0.05]"
  : price <= 0.25 ? "text-teal-400 border-teal-400/20 bg-teal-400/[0.05]"
  : "text-amber-400 border-amber-400/20 bg-amber-400/[0.05]";

const STATUS_CONFIG: Record<EndpointStatus, { label: string; color: string; icon: React.ReactNode }> = {
  x402_ready: { label: "x402 Ready", color: "text-teal-400 border-teal-400/20 bg-teal-400/[0.06]", icon: <ShieldCheck className="h-3.5 w-3.5" /> },
  verified: { label: "Endpoint Verified", color: "text-green-400 border-green-400/20 bg-green-400/[0.06]", icon: <Wifi className="h-3.5 w-3.5" /> },
  unreachable: { label: "Unreachable", color: "text-red-400 border-red-400/20 bg-red-400/[0.06]", icon: <WifiOff className="h-3.5 w-3.5" /> },
  needs_review: { label: "Needs Review", color: "text-amber-400 border-amber-400/20 bg-amber-400/[0.06]", icon: <AlertCircle className="h-3.5 w-3.5" /> },
  unverified: { label: "Unverified", color: "text-slate-400 border-slate-400/20 bg-slate-400/[0.06]", icon: <AlertCircle className="h-3.5 w-3.5" /> },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    void navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }
  return (
    <button onClick={copy} className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500 hover:text-slate-300 transition">
      {copied ? <Check className="h-3 w-3 text-teal-400" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function StatusBadge({ status, message }: { status?: EndpointStatus; message?: string }) {
  const s = status ?? "unverified";
  const cfg = STATUS_CONFIG[s];
  return (
    <div className="group relative inline-flex">
      <span className={`flex items-center gap-1.5 border px-2.5 py-1 font-mono text-xs ${cfg.color}`}>
        {cfg.icon} {cfg.label}
      </span>
      {message && (
        <span className="pointer-events-none absolute bottom-full left-0 mb-2 hidden w-64 border border-white/10 bg-slate-950 px-3 py-2 font-mono text-[10px] text-slate-400 group-hover:block">
          {message}
        </span>
      )}
    </div>
  );
}

function ShareButton() {
  const [copied, setCopied] = useState(false);
  function share() {
    void navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }
  return (
    <button onClick={share} className="flex items-center gap-1.5 border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-400 hover:border-white/20 hover:text-slate-200 transition">
      {copied ? <Check className="h-3.5 w-3.5 text-teal-400" /> : <Share2 className="h-3.5 w-3.5" />}
      {copied ? "Copied" : "Share"}
    </button>
  );
}

const FOURTEEN_DAYS_MS = 14 * 24 * 60 * 60 * 1000;

export function ToolDetailClient({ tool, relatedTools }: { tool: CreatorTool; relatedTools?: CreatorTool[] }) {
  const isNew = tool.source !== "modulr" && tool.lastTestedAt
    ? (Date.now() - new Date(tool.lastTestedAt).getTime()) < FOURTEEN_DAYS_MS
    : false;
  const inputKeys = Object.keys(tool.expectedInput);
  const exampleBody = inputKeys.length > 0
    ? JSON.stringify(Object.fromEntries(inputKeys.map((k) => [k, tool.expectedInput[k]])), null, 2)
    : JSON.stringify({}, null, 2);

  const codeSnippet = `import { wrapFetchWithPayment } from "@x402/fetch";

// Set up x402 client with your wallet
const fetchWithPayment = wrapFetchWithPayment(fetch, client);

const response = await fetchWithPayment("${tool.endpointUrl}", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(${JSON.stringify(Object.fromEntries(inputKeys.map((k) => [k, "..."])))}),
});

const result = await response.json();`;

  const curlSnippet = `curl -X POST "${tool.endpointUrl}" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(Object.fromEntries(inputKeys.map((k) => [k, "..."])))}' `;

  return (
    <div className="mx-auto w-full max-w-5xl px-5 pb-24 pt-16 sm:px-8 lg:pt-24">

      <Link href="/marketplace" className="inline-flex items-center gap-2 font-mono text-xs text-slate-500 hover:text-slate-300 transition mb-8">
        <ArrowLeft className="h-3 w-3" /> Back to Marketplace
      </Link>

      {/* Header */}
      <div className="border-b border-white/10 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            {tool.source === "modulr" ? (
              <span className="flex items-center gap-1.5 border border-teal-400/30 bg-teal-400/[0.07] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-teal-300">
                <BadgeCheck className="h-3 w-3" /> Modulr Official
              </span>
            ) : (
              <span className="border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-slate-400">Creator Submitted</span>
            )}
            {isNew && (
              <span className="flex items-center gap-1.5 border border-purple-400/30 bg-purple-400/[0.07] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-purple-300">
                <Sparkles className="h-3 w-3" /> New
              </span>
            )}
            <StatusBadge status={tool.endpointStatus} message={tool.endpointMessage} />
          </div>
          <ShareButton />
        </div>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">{tool.name}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">{tool.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className={`border px-3 py-1 font-mono text-sm font-semibold ${PRICE_COLOR(tool.priceUsd)}`}>
            ${tool.priceUsd.toFixed(2)} USDC per call
          </span>
          <a
            href={`https://x.com/${tool.creatorTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-slate-400 hover:text-slate-200 transition"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            @{tool.creatorTwitter}
          </a>
          <span className="text-sm text-slate-600">Last tested {tool.lastTestedAt}</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tool.tags.map((t) => (
            <span key={t} className="border border-white/[0.08] px-2 py-0.5 font-mono text-[10px] text-slate-500">{t}</span>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        {/* Endpoint */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-teal-300" />
              <h2 className="text-base font-semibold text-white">Endpoint</h2>
            </div>
            <CopyButton text={tool.endpointUrl} />
          </div>
          <div className="border border-white/10 bg-slate-950 p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="border border-teal-300/30 bg-teal-300/[0.08] px-2 py-0.5 font-mono text-xs text-teal-300">POST</span>
              <span className="break-all font-mono text-xs text-white">{tool.endpointUrl}</span>
            </div>
            {tool.endpointStatus === "x402_ready" && (
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-teal-400/70">
                <ShieldCheck className="h-3 w-3" /> x402 compatible — payment handled automatically
              </div>
            )}
          </div>
        </div>

        {/* Expected Input */}
        {inputKeys.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-4 w-4 text-teal-300" />
              <h2 className="text-base font-semibold text-white">Expected Input</h2>
            </div>
            <div className="border border-white/10 bg-slate-950 p-4">
              <table className="w-full">
                <tbody>
                  {Object.entries(tool.expectedInput).map(([key, desc]) => (
                    <tr key={key} className="border-b border-white/[0.06] last:border-0">
                      <td className="py-2 pr-4 font-mono text-xs text-teal-300 align-top whitespace-nowrap">{key}</td>
                      <td className="py-2 text-xs text-slate-400">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Example Output */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-teal-300" />
              <h2 className="text-base font-semibold text-white">Example Output</h2>
            </div>
            <CopyButton text={JSON.stringify(tool.exampleOutput, null, 2)} />
          </div>
          <pre className="w-full overflow-x-auto border border-white/10 bg-slate-950 px-4 py-4 font-mono text-[11px] leading-5 text-slate-300">
            {JSON.stringify(tool.exampleOutput, null, 2)}
          </pre>
        </div>

      </div>

      {/* Call this tool */}
      <div className="mt-12 space-y-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-teal-300" />
          <h2 className="text-base font-semibold text-white">Call this tool</h2>
        </div>

        {/* TypeScript / x402 */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-slate-500">TypeScript — x402</span>
            <CopyButton text={codeSnippet} />
          </div>
          <pre className="overflow-x-auto border border-white/10 bg-slate-950 px-4 py-4 font-mono text-[11px] leading-5 text-slate-300">
            {codeSnippet}
          </pre>
        </div>

        {/* cURL */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-slate-500">cURL — raw request</span>
            <CopyButton text={curlSnippet} />
          </div>
          <pre className="overflow-x-auto border border-white/10 bg-slate-950 px-4 py-4 font-mono text-[11px] leading-5 text-slate-300">
            {curlSnippet}
          </pre>
        </div>

        {/* Request body */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-slate-500">Example request body</span>
            <CopyButton text={exampleBody} />
          </div>
          <pre className="overflow-x-auto border border-white/10 bg-slate-950 px-4 py-4 font-mono text-[11px] leading-5 text-slate-300">
            {exampleBody}
          </pre>
        </div>

        <p className="text-xs text-slate-600 font-mono">
          See the <Link href="/developers" className="text-teal-400 hover:text-teal-300">developers page</Link> for the full x402 setup guide.
        </p>
      </div>

      {/* More from @creator */}
      {relatedTools && relatedTools.length > 0 && (
        <div className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-base font-semibold text-white mb-6">
            More from{" "}
            <a href={`https://x.com/${tool.creatorTwitter}`} target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-200 transition">
              @{tool.creatorTwitter}
            </a>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
