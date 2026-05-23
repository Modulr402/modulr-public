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
      "Generate structured behavioral and activity-based wallet risk reports using transaction analysis, wallet activity patterns and risk signal summaries.",
    shortDescription:
      "Structured wallet risk reports based on transaction behavior, activity patterns and signal summaries.",
    price: "0.25 USDC",
    difficulty: "Intermediate",
    version: "v0.1.0",
    lastUpdated: "May 15, 2026",
    compatibility: ["Wallet activity data", "Risk reports", "CSV-ready output"],
    infrastructureTags: ["Wallet intelligence", "Behavioral analytics", "Research workflow"],
    futureApiSupport: true,
    walletAware: true,
    featured: true,
    trending: true,
    features: [
      "Behavioral wallet activity summary",
      "Transaction pattern review structure",
      "Risk signal categorization",
      "Report-ready output format"
    ],
    useCases: [
      "Reviewing wallet activity before counterparty interaction",
      "Preparing internal wallet risk notes",
      "Summarizing high-level wallet behavior for research workflows"
    ]
  },
  {
    slug: "token-launch-checklist-generator",
    title: "Token Launch Checklist Generator",
    category: "Launch Infrastructure",
    description:
      "Generate structured launch preparation checklists covering liquidity preparation, wallet setup, deployment readiness and operational launch planning.",
    shortDescription:
      "Launch readiness checklists for liquidity preparation, wallet setup and operational planning.",
    price: "0.5 USDC",
    difficulty: "Intermediate",
    version: "v0.1.0",
    lastUpdated: "May 15, 2026",
    compatibility: ["Solana launches", "EVM launches", "Operational planning"],
    infrastructureTags: ["Launch operations", "Readiness systems", "Deployment workflow"],
    futureApiSupport: true,
    walletAware: false,
    featured: true,
    trending: false,
    features: [
      "Launch preparation checklist structure",
      "Liquidity and wallet setup planning",
      "Deployment readiness categories",
      "Operational launch review prompts"
    ],
    useCases: [
      "Planning token launch preparation steps",
      "Coordinating technical and operational readiness",
      "Creating reusable pre-launch review templates"
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
    slug: "smart-contract-audit-summary",
    title: "Smart Contract Audit Summary",
    category: "Security",
    description:
      "Generate structured audit-style summaries from smart contract notes, architecture explanations or pasted code segments.",
    shortDescription:
      "Audit-style summaries from contract notes, architecture explanations or pasted code segments.",
    price: "1 USDC",
    difficulty: "Advanced",
    version: "v0.1.0",
    lastUpdated: "May 15, 2026",
    compatibility: ["Solidity notes", "Architecture docs", "Code review briefs"],
    infrastructureTags: ["Security review", "Audit preparation", "Technical reporting"],
    futureApiSupport: true,
    walletAware: false,
    featured: false,
    trending: true,
    features: [
      "Audit-style summary format",
      "Architecture and code note parsing structure",
      "Security review categories",
      "Findings-oriented documentation output"
    ],
    useCases: [
      "Summarizing early smart contract review notes",
      "Preparing audit handoff documentation",
      "Organizing architecture-level security observations"
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
    status: "Planned"
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
    value: "4",
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
