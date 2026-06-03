import type { LitepaperSection } from "@/types/litepaper";

export const litepaperSections: LitepaperSection[] = [
  {
    id: "introduction",
    eyebrow: "01",
    title: "Introduction",
    body: [
      "Modulr is a live, on-chain marketplace for technical crypto tools. Users connect a Solana wallet, pay in USDC or $MODU, and receive immediate access to professional-grade reports, audits and analytics. No accounts, no subscriptions, no friction.",
      "Five tools are live today: a Wallet Risk Report powered by real on-chain RPC data, a Token Launch Checklist with structured readiness scoring, a Smart Contract Audit that runs heuristic pattern scanning against Solidity, Rust/Anchor and Move contracts, a Token Website Generator that produces complete production-ready token launch sites from project details, and an AI Agent Generator that produces complete TypeScript agent scripts for trading, monitoring, DeFi automation and more. Each tool is pay-per-use: one payment generates one output, exported in the format you choose."
    ]
  },
  {
    id: "vision",
    eyebrow: "02",
    title: "Vision",
    body: [
      "The crypto space is full of builders who repeatedly solve the same problems: auditing contracts, vetting wallets, structuring token launches. Modulr is the infrastructure layer that eliminates that repeated work.",
      "The vision is a marketplace where any technical tool (analysis, due diligence, infrastructure, monitoring) can be purchased on-chain, used once or many times, and delivered instantly in the format the user needs. Modulr handles access, verification and delivery so builders can focus on what they're building."
    ]
  },
  {
    id: "marketplace-infrastructure",
    eyebrow: "03",
    title: "Marketplace Infrastructure",
    body: [
      "The Modulr marketplace is live and handling real payments on Solana mainnet. Users pay with USDC or $MODU, and the platform verifies the transfer on-chain via Helius RPC before granting access. $MODU payments use a one-click checkout flow — the user approves the transaction in their connected wallet and access is unlocked automatically.",
      "Access is pay-per-use. Each verified payment unlocks one generation. After generating, the report is permanently saved to the user's dashboard and downloadable in any of five formats at any time. The user never loses their output."
    ],
    points: [
      "Live on Solana mainnet with USDC and $MODU payments",
      "One-click $MODU checkout via connected wallet",
      "On-chain transaction verification via Helius RPC",
      "Pay-per-use access model",
      "Permanent report storage and re-download",
      "Multi-format export: PDF, HTML, MD, TXT, JSON",
      "Wallet-authenticated dashboard"
    ]
  },
  {
    id: "wallet-payment-infrastructure",
    eyebrow: "04",
    title: "Wallet & Payment Infrastructure",
    body: [
      "Modulr uses Solana wallet connection for identity and dashboard access. Phantom and Solflare are supported. Wallet connection is required to use any tool. It ties the user's purchases and generated reports to their address.",
      "Two payment methods are live. USDC: the user sends from any wallet or exchange and pastes the transaction signature for manual verification. $MODU: one-click checkout directly from the connected wallet — the user approves the transaction, it is confirmed on-chain via Helius, and access is granted automatically. $MODU holders receive automatic discounts at checkout based on their holdings: 100K for 10% off, 500K for 15%, 2M for 20%, and 4M for 30%. All $MODU paid on Modulr is permanently burned, reducing supply with every transaction."
    ],
    points: [
      "Phantom and Solflare wallet support",
      "USDC payment: manual send and on-chain verification",
      "$MODU payment: one-click checkout via connected wallet",
      "Automatic holder discount tiers: 10% to 30% off",
      "All $MODU payments permanently burned",
      "On-chain verification via Helius RPC",
      "Purchases tied to connected wallet address"
    ]
  },
  {
    id: "live-tools",
    eyebrow: "05",
    title: "Live Tools",
    body: [
      "Five tools are available on Modulr today. Each is purpose-built for a specific crypto workflow, runs entirely in-browser, and produces professional-grade output.",
      "The Wallet Risk Report fetches up to 1,000 on-chain transactions via Helius RPC, computes a heuristic risk score across five dimensions (wallet age, activity level, token diversity, balance consistency and dormancy) and outputs a full report with signals, explainability and score breakdown. The Token Launch Checklist takes project inputs and produces a structured readiness score with section-level analysis, risk flags and recommended next steps. The Smart Contract Audit scans pasted contract code for 30+ vulnerability patterns across Solidity, Rust/Anchor and Move, producing severity-ranked findings, a security checklist, suggested fixes and positive signals. The Token Website Generator takes token details and a style vibe and produces a complete, production-ready HTML site — downloadable as a ZIP. The AI Agent Generator takes a description and produces a complete, runnable TypeScript agent script for trading, monitoring, DeFi automation and more — with setup instructions, required environment variables and a one-click ZIP download."
    ],
    points: [
      "Wallet Risk Report: real on-chain scoring across 5 dimensions",
      "Token Launch Checklist: structured readiness score with risk flags",
      "Smart Contract Audit: 30+ pattern heuristic vulnerability scanner across Solidity, Rust/Anchor and Move",
      "Token Website Generator: AI-generated production-ready token launch sites",
      "AI Agent Generator: complete TypeScript agent scripts with streaming output",
      "All tools export to PDF, HTML, MD, TXT, JSON or ZIP",
      "Reports permanently saved and re-downloadable from dashboard"
    ]
  },
  {
    id: "modulr-sdk",
    eyebrow: "06",
    title: "Modulr SDK",
    body: [
      "The Modulr SDK is live. Developers can install it with a single command and call Modulr's tools programmatically — no API key, no setup, no browser required.",
      "The SDK exposes wallet risk analysis, token launch checklists, smart contract audit and AI agent generation as typed TypeScript modules. Install with npm install @modulr/sdk, import the Modulr class and start calling tools directly from any TypeScript or Node.js application. Full documentation is available at modulr402.com/developers."
    ],
    points: [
      "npm install @modulr/sdk — zero config, works immediately",
      "Programmatic access to all Modulr tools",
      "Typed TypeScript modules for every tool",
      "Structured JSON output for downstream use",
      "No API key required",
      "Full docs at modulr402.com/developers"
    ]
  },
  {
    id: "creator-ecosystem",
    eyebrow: "07",
    title: "Creator Ecosystem",
    body: [
      "Modulr is designed to scale beyond a single-team tool library into an open creator marketplace where technical builders can publish, price and distribute their own tools.",
      "Creator infrastructure will include submission workflows, protected delivery, on-chain revenue attribution and analytics. Creators will be able to price their tools in USDC or $MODU and receive direct on-chain payments as users generate reports."
    ],
    points: [
      "Open tool submission and publishing",
      "On-chain revenue attribution",
      "Creator analytics dashboard",
      "Protected tool delivery",
      "USDC and $MODU pricing",
      "Community-curated tool marketplace"
    ]
  },
  {
    id: "token-infrastructure",
    eyebrow: "08",
    title: "Token: $MODU",
    body: [
      "$MODU is the Modulr ecosystem token, launched on pump.fun. The platform is live and generating real revenue at launch. $MODU holders are backing a functioning product, not a roadmap.",
      "$MODU is now a live payment method on Modulr. Holders receive automatic discounts at checkout based on how much they hold — up to 30% off all tools. All $MODU used to pay on Modulr is permanently burned, reducing supply with every transaction. The live price is fetched every 30 seconds so the displayed amount is always accurate. Beyond payments, $MODU is positioned for SDK tier gating, buyback mechanics funded by platform revenue, and governance over future marketplace direction."
    ],
    points: [
      "Launched on pump.fun",
      "Platform live and revenue-generating at launch",
      "$MODU payments live alongside USDC",
      "Automatic holder discounts: 10% to 30% off",
      "All $MODU payments permanently burned",
      "Live price feed updated every 30 seconds",
      "SDK tier gating",
      "Revenue-funded buyback mechanics",
      "Governance over marketplace direction"
    ]
  },
  {
    id: "transparency-risk",
    eyebrow: "09",
    title: "Transparency & Risk",
    body: [
      "Modulr is live infrastructure in active development. The tools available today use heuristic analysis. They are not replacements for professional audits, legal advice or financial due diligence. All reports carry explicit disclaimers and should be used as a starting point for further review, not a final verdict.",
      "$MODU is a utility token, not a financial instrument or investment. Token value is not guaranteed and depends on platform adoption, market conditions and continued development. All users remain responsible for their own decisions, transactions and use of Modulr tools."
    ],
    points: [
      "Heuristic tools, not substitutes for professional review",
      "Platform features and roadmap may evolve",
      "$MODU is a utility token, no guarantee of financial return",
      "On-chain payments are final and non-reversible",
      "Users are responsible for their own decisions and usage"
    ]
  }
];
