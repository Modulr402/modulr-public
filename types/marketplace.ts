export type CreatorToolStatus = "pending" | "approved" | "rejected";
export type CreatorToolCategory = "security" | "analytics" | "automation" | "data" | "development" | "other";
export type EndpointStatus = "unverified" | "verified" | "x402_ready" | "unreachable" | "needs_review";

export interface CreatorTool {
  slug: string;
  name: string;
  creatorName: string;
  creatorTwitter: string;
  description: string;
  shortDescription: string;
  category: CreatorToolCategory;
  priceUsd: number;
  endpointUrl: string;
  expectedInput: Record<string, string>;
  exampleOutput: Record<string, unknown>;
  status: CreatorToolStatus;
  tags: string[];
  createdAt: string;
  lastTestedAt: string;
  x402Compatible: boolean;
  endpointStatus?: EndpointStatus;
  endpointMessage?: string;
  source?: "modulr" | "community";
}
