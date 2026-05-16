import type { Metadata } from "next";
import {
  marketplaceCategories,
  marketplaceCategoryDefinitions,
  marketplaceProducts,
  marketplaceStats,
  marketplaceTrustItems
} from "@/data/components";
import { MarketplaceBrowser } from "@/components/marketplace";

export const metadata: Metadata = {
  title: "Marketplace",
  description:
    "Browse premium crypto and developer infrastructure tools. Wallet risk reports, token launch checklists, smart contract audit summaries and more, priced in USDC.",
  alternates: { canonical: "/components" },
  openGraph: {
    title: "Marketplace | Modulr",
    description:
      "Browse premium crypto and developer infrastructure tools. Wallet risk reports, token launch checklists, smart contract audit summaries and more, priced in USDC.",
    url: "/components",
  },
  twitter: {
    title: "Marketplace | Modulr",
    description:
      "Browse premium crypto and developer infrastructure tools. Wallet risk reports, token launch checklists, smart contract audit summaries and more, priced in USDC.",
  },
};

export default function ComponentsPage() {
  return (
    <MarketplaceBrowser
      products={marketplaceProducts}
      categories={marketplaceCategories}
      categoryDefinitions={marketplaceCategoryDefinitions}
      stats={marketplaceStats}
      trustItems={marketplaceTrustItems}
    />
  );
}
