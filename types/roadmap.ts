export type RoadmapStatus = "Complete" | "In Progress" | "Planned" | "Research" | "Scaling";

export interface RoadmapItem {
  title: string;
  description: string;
  completed?: boolean;
}

export interface RoadmapQuarter {
  quarter: string;
  title: string;
  status: RoadmapStatus;
  focus: string;
  items: RoadmapItem[];
  expansion: string;
}
