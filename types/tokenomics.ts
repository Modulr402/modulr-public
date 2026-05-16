export type TokenAllocationIcon = "dev" | "buyback" | "giveaway";

export interface TokenAllocation {
  label: string;
  percentage: number;
  summary: string;
  description: string;
  icon: TokenAllocationIcon;
}

export interface WeeklyScheduleItem {
  day: string;
  time?: string;
  title: string;
  details: string[];
}
