export type MarketplaceCategory =
  | "Analytics"
  | "Security"
  | "Launch Infrastructure"
  | "Wallet Infrastructure"
  | "Automation"
  | "AI Systems";
export type MarketplaceDifficulty = "Intermediate" | "Advanced";
export type MarketplaceCategoryStatus = "Active" | "Planned";

export interface MarketplaceCategoryDefinition {
  name: MarketplaceCategory;
  description: string;
  status: MarketplaceCategoryStatus;
}

export interface MarketplaceStatistic {
  label: string;
  value: string;
  detail: string;
}

export interface MarketplaceTrustItem {
  title: string;
  description: string;
}

export interface MarketplaceProduct {
  slug: string;
  title: string;
  category: MarketplaceCategory;
  description: string;
  shortDescription: string;
  price: string;
  difficulty: MarketplaceDifficulty;
  version: string;
  lastUpdated: string;
  compatibility: string[];
  infrastructureTags: string[];
  futureApiSupport: boolean;
  walletAware: boolean;
  featured: boolean;
  trending: boolean;
  features: string[];
  useCases: string[];
}
