import type {
  MarketplaceCategory,
  MarketplaceCategoryDefinition,
  MarketplaceProduct,
  MarketplaceStatistic,
  MarketplaceTrustItem
} from "@/types/components";

export const marketplaceProducts: MarketplaceProduct[] = [
  {
    slug: "wallet-risk-report-generator",
    title: "Wallet Risk Report Generator",
    category: "Analytics",
    description:
      "Generate deep on-chain wallet risk reports powered by real Helius RPC data. Fetches up to 1,000 transactions to score wallet age, activity, token diversity, balance consistency and dormancy — then layers in protocol detection, NFT count, wallet type classification, funding source, activity timeline and a plain-English verdict.",
    shortDescription:
      "On-chain wallet risk reports with protocol detection, wallet type classification, activity timeline and verdict.",
    price: "0.25 USDC",
    difficulty: "Intermediate",
    version: "v0.2.0",
    lastUpdated: "May 29, 2026",
    compatibility: ["Solana wallets", "Risk reports", "Multi-format export"],
    infrastructureTags: ["Wallet intelligence", "On-chain analytics", "Risk scoring"],
    futureApiSupport: true,
    walletAware: true,
    featured: true,
    trending: true,
    features: [
      "Wallet type classification: DeFi Trader, NFT Collector, Whale, Pump.fun Trader and more",
      "Protocol detection: Raydium, Jupiter, Orca, Magic Eden, pump.fun and more",
      "NFT holdings count via Helius DAS API",
      "Analysis verdict — plain-English risk summary with key callouts",
      "Per-dimension confidence indicators on all 5 score components",
      "12-month activity timeline bar chart",
      "Counterparty analysis with pattern detection",
      "Funding source detection from oldest transaction"
    ],
    useCases: [
      "Vetting a wallet before a trade, deal or counterparty interaction",
      "Identifying bot wallets, fresh wallets or dormant whales",
      "Due diligence on team or investor wallets before a token launch"
    ]
  },
  {
    slug: "token-launch-checklist-generator",
    title: "Token Launch Checklist Generator",
    category: "Launch Infrastructure",
    description:
      "Generate a structured token launch readiness checklist with optional on-chain verification. Paste your Solana mint address to auto-fetch mint authority, freeze authority, token metadata and liquidity pool status via Helius — then compare against what you claimed. Flags discrepancies, scores 7 readiness sections and delivers a plain-English launch verdict.",
    shortDescription:
      "Launch readiness checklist with on-chain verification, discrepancy flagging and a go/no-go verdict.",
    price: "0.5 USDC",
    difficulty: "Intermediate",
    version: "v0.2.0",
    lastUpdated: "May 29, 2026",
    compatibility: ["Solana launches", "EVM launches", "Any token project"],
    infrastructureTags: ["Launch operations", "On-chain verification", "Readiness scoring"],
    futureApiSupport: true,
    walletAware: false,
    featured: true,
    trending: true,
    features: [
      "On-chain verification: mint authority, freeze authority, metadata and liquidity pools via Helius",
      "Discrepancy flagging — compares your claimed status against what the chain actually shows",
      "Launch verdict paragraph with go/no-go assessment",
      "Per-section blockers with Critical, High and Medium impact labels",
      "Readiness score across 7 weighted sections",
      "Risk flags and recommended next steps",
      "Works without mint address for non-Solana or pre-deploy projects"
    ],
    useCases: [
      "Verifying your token is actually ready before launch day",
      "Catching security gaps like live mint authority or missing liquidity before going public",
      "Getting a structured pre-launch review without hiring a consultant"
    ]
  },
  {
    slug: "token-site-generator",
    title: "Token Website Generator",
    category: "Launch Infrastructure",
    description:
      "Generate a complete, production-ready token launch website from your project details. AI-powered, fully responsive, single HTML file with inline CSS, animations and a copy-CA button. Four style vibes: minimal, aggressive, professional or neon.",
    shortDescription:
      "AI-generated token launch websites. Input your details, choose a vibe, download a complete HTML file.",
    price: "3 USDC",
    difficulty: "Beginner",
    version: "v1.0.0",
    lastUpdated: "May 19, 2026",
    compatibility: ["Solana tokens", "EVM tokens", "Any launch"],
    infrastructureTags: ["AI generation", "Launch infrastructure", "Site builder"],
    futureApiSupport: false,
    walletAware: true,
    featured: true,
    trending: true,
    features: [
      "AI-generated complete HTML site",
      "4 style vibes: minimal, aggressive, professional, neon",
      "Hero, tokenomics, roadmap, how-to-buy, socials sections",
      "Copy CA button, smooth scroll, mobile responsive",
      "Single file download, deploy anywhere"
    ],
    useCases: [
      "Launching a new Solana or EVM token with no web development experience",
      "Getting a production-ready site in under 60 seconds",
      "Customizing the generated site or hosting it on Vercel, Netlify or GitHub Pages"
    ]
  },
  {
    slug: "ai-agent-generator",
    title: "AI Agent Generator",
    category: "AI Systems",
    description:
      "Describe the agent you want and get a production-ready TypeScript script back. Specify the agent type, target chain, trigger conditions, parameters and framework — Modulr generates a complete, runnable agent with setup instructions, required environment variables and inline comments explaining every decision.",
    shortDescription:
      "Describe your agent, get a production-ready TypeScript script. Trading bots, wallet monitors, DeFi automation and more.",
    price: "2 USDC",
    difficulty: "Intermediate",
    version: "v1.0.0",
    lastUpdated: "Jun 3, 2026",
    compatibility: ["Solana", "Ethereum", "Base", "Arbitrum"],
    infrastructureTags: ["AI generation", "Agent infrastructure", "Script output"],
    futureApiSupport: true,
    walletAware: true,
    featured: true,
    trending: true,
    features: [
      "8 agent types: Trading Bot, Wallet Monitor, Price Alert, DeFi Automation, NFT Sniper, Portfolio Tracker, Liquidity Manager and Custom",
      "Multi-chain: Solana, Ethereum, Base, Arbitrum",
      "Framework selection: Vanilla TypeScript, Anchor, Ethers.js or Viem",
      "Trigger condition and parameter specification",
      "Complete script with setup instructions and required environment variables",
      "Single-file TypeScript download, ready to run"
    ],
    useCases: [
      "Building a custom trading or monitoring agent without writing boilerplate from scratch",
      "Generating a starting point for DeFi automation on any supported chain",
      "Getting a structured agent script with setup instructions for deployment"
    ]
  },
  {
    slug: "smart-contract-audit-summary",
    title: "Smart Contract Audit Summary",
    category: "Security",
    description:
      "Paste Solidity, Rust/Anchor or Move code and get a heuristic audit summary across 30+ vulnerability patterns and 8 gas optimisation checks. Outputs a security risk score, a separate code quality score, severity-ranked findings, a gas optimisation section, a security checklist, suggested fixes and an executive summary with a clear deploy recommendation.",
    shortDescription:
      "30+ pattern heuristic audit with gas optimisation, code quality score and deploy recommendation.",
    price: "1 USDC",
    difficulty: "Advanced",
    version: "v0.2.0",
    lastUpdated: "May 29, 2026",
    compatibility: ["Solidity", "Rust / Anchor", "Move"],
    infrastructureTags: ["Security review", "Audit preparation", "Gas optimisation"],
    futureApiSupport: true,
    walletAware: false,
    featured: false,
    trending: true,
    features: [
      "30+ security vulnerability patterns across Critical, High, Medium, Low and Informational",
      "Gas optimisation section: 8 patterns covering storage loops, redundant writes, type inefficiencies and more",
      "Code quality score (0–100) measuring documentation, standards usage and validation patterns",
      "Executive summary with deploy recommendation: Deploy, Deploy with caution, Address findings first or Do not deploy",
      "Security checklist with Pass, Warning and Fail status per check",
      "Suggested fixes for every detected pattern",
      "Positive signals highlighting good security practices in use"
    ],
    useCases: [
      "Pre-audit review before sending a contract to a professional auditor",
      "Catching common vulnerabilities and gas inefficiencies before deployment",
      "Getting a quick security and quality baseline on any contract"
    ]
  }
];

export const marketplaceCategoryDefinitions: MarketplaceCategoryDefinition[] = [
  {
    name: "Analytics",
    description: "Wallet, activity and market intelligence systems for structured technical review.",
    status: "Active"
  },
  {
    name: "Security",
    description: "Review-oriented tooling for contract notes, audit preparation and security workflows.",
    status: "Active"
  },
  {
    name: "Launch Infrastructure",
    description: "Operational systems for launch readiness, deployment planning and coordination.",
    status: "Active"
  },
  {
    name: "Wallet Infrastructure",
    description: "Wallet-aware access, authentication and future ownership verification systems.",
    status: "Active"
  },
  {
    name: "Automation",
    description: "Workflow automation layers for marketplace operations and technical delivery.",
    status: "Planned"
  },
  {
    name: "AI Systems",
    description: "AI-assisted infrastructure for reporting, analysis and advanced developer workflows.",
    status: "Active"
  }
];

export const marketplaceCategories: Array<MarketplaceCategory | "All"> = [
  "All",
  "Analytics",
  "Security",
  "Launch Infrastructure",
  "Wallet Infrastructure",
  "Automation",
  "AI Systems"
];

export const marketplaceStats: MarketplaceStatistic[] = [
  {
    label: "Active Components",
    value: "5",
    detail: "Initial infrastructure listings"
  },
  {
    label: "Wallet Connections",
    value: "3",
    detail: "Phantom, Solflare and MetaMask UI"
  },

  {
    label: "Supported Infrastructure Layers",
    value: "6",
    detail: "Active and planned marketplace categories"
  }
];

export const marketplaceTrustItems: MarketplaceTrustItem[] = [
  {
    title: "Wallet-authenticated access",
    description: "Marketplace access is being structured around connected wallet identity and future ownership checks."
  },
  {
    title: "Future secure delivery",
    description: "Delivery surfaces are planned for verified access, protected releases and controlled update paths."
  },
  {
    title: "Version-controlled releases",
    description: "Each listing is modeled with version metadata so future releases can evolve without losing traceability."
  },
  {
    title: "Infrastructure scaling",
    description: "Categories, metadata and purchase surfaces are designed to support a broader developer ecosystem."
  }
];

export function getMarketplaceProduct(slug: string) {
  return marketplaceProducts.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string) {
  return marketplaceProducts.filter((product) => product.slug !== slug).slice(0, 2);
}
