import type { RoadmapQuarter } from "@/types/roadmap";

export const roadmap: RoadmapQuarter[] = [
  {
    quarter: "Q2 2026",
    title: "Foundation Layer",
    status: "Complete",
    focus: "Building the core Modulr infrastructure and marketplace foundation.",
    items: [
      {
        title: "Marketplace Core Architecture",
        description:
          "Building the scalable frontend and backend structure for Modulr's future marketplace ecosystem, including reusable marketplace systems, scalable routing and long-term infrastructure planning.",
        completed: true
      },
      {
        title: "Wallet Infrastructure Layer",
        description:
          "Implementing Phantom, Solflare and MetaMask connectivity with future support for wallet-authenticated purchases, transaction verification and secure digital delivery systems.",
        completed: true
      },
      {
        title: "Modulr Design System",
        description:
          "Creating a premium UI framework with reusable components, motion systems, responsive layouts and scalable frontend architecture for future platform expansion.",
        completed: true
      },
      {
        title: "$MODU Payment System",
        description:
          "Native $MODU payment support live alongside USDC. One-click checkout via connected wallet, on-chain verification via Helius, automatic holder discount tiers (10–30% off), and burn tracking for all $MODU paid.",
        completed: true
      },
      {
        title: "Modulr SDK",
        description:
          "The official TypeScript SDK for the Modulr API. Developers can integrate wallet risk, token launch and smart contract audit directly into their own applications with a single install and no setup required.",
        completed: true
      },
    ],
    expansion: "2 new premium components will be launched during the quarter."
  },
  {
    quarter: "Q3 2026",
    title: "Marketplace Systems",
    status: "Planned",
    focus: "Turning Modulr into a functional crypto-native developer marketplace.",
    items: [
      {
        title: "Webhook & Event Infrastructure",
        description:
          "Real-time push infrastructure allowing developers to subscribe to Modulr events via webhooks. Receive instant notifications on analysis completion, risk threshold breaches and on-chain activity — enabling fully automated workflows without polling.",
      },
      {
        title: "On-Chain Referral System",
        description:
          "Wallet-based referral tracking where users earn $MODU rewards for bringing new buyers to the platform. Referrals are verified on-chain and rewards are distributed automatically per verified purchase."
      },
      {
        title: "Creator Submission Layer",
        description:
          "Opening Modulr for external tool submissions. Creators can submit, price and publish their own tools to the marketplace, with on-chain revenue attribution and direct wallet payouts."
      }
    ],
    expansion: "2 new premium components will be launched during the quarter."
  },
  {
    quarter: "Q4 2026",
    title: "Infrastructure Expansion",
    status: "Research",
    focus: "Expanding Modulr into a larger developer infrastructure ecosystem.",
    items: [
      {
        title: "Multi-Chain Transaction Layer",
        description:
          "Expanding Modulr infrastructure to support Solana and EVM-compatible transaction systems through a unified payment and verification architecture."
      },
      {
        title: "Modulr API Infrastructure",
        description:
          "Building external API access for developers, allowing third-party applications and services to integrate Modulr marketplace functionality."
      },
      {
        title: "Advanced Creator Infrastructure",
        description:
          "Developing creator-side analytics, marketplace metrics, update management systems and scalable deployment tooling."
      }
    ],
    expansion: "2 new premium components will be launched during the quarter."
  },
  {
    quarter: "Q1 2027",
    title: "Intelligent Systems",
    status: "Planned",
    focus: "Adding advanced automation and intelligence systems to Modulr.",
    items: [
      {
        title: "AI-Assisted Infrastructure",
        description:
          "Integrating AI-powered systems for marketplace workflows, reporting infrastructure and advanced platform tooling."
      },
      {
        title: "Automated Marketplace Operations",
        description:
          "Building automation systems for licensing, creator distribution, payment routing and platform management."
      },
      {
        title: "Smart Analytics Engine",
        description:
          "Developing advanced behavioral analytics and infrastructure monitoring across marketplace usage and platform interaction."
      }
    ],
    expansion: "2 new premium components will be launched during the quarter."
  },
  {
    quarter: "Q2 2027",
    title: "Ecosystem Scaling",
    status: "Scaling",
    focus: "Scaling Modulr into a full crypto infrastructure platform.",
    items: [
      {
        title: "Enterprise Marketplace Infrastructure",
        description: "Launching scalable infrastructure for teams, protocols and enterprise-grade developer tooling."
      },
      {
        title: "External Developer Ecosystem",
        description: "Opening Modulr for advanced integrations, APIs and third-party marketplace expansion."
      },
      {
        title: "Global Infrastructure Scaling",
        description:
          "Expanding reliability, deployment infrastructure and distributed delivery systems for large-scale platform usage."
      }
    ],
    expansion: "2 new premium components will be launched during the quarter."
  }
];
