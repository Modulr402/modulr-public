export type MarketplaceComponentStatus = "coming-soon";

export interface MarketplaceComponent {
  id: string;
  name: string;
  description: string;
  status: MarketplaceComponentStatus;
}
