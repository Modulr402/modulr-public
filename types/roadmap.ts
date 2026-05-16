export type RoadmapStatus = "In Progress" | "Planned" | "Research" | "Scaling";

export interface RoadmapItem {
  title: string;
  description: string;
}

export interface RoadmapQuarter {
  quarter: string;
  title: string;
  status: RoadmapStatus;
  focus: string;
  items: RoadmapItem[];
  expansion: string;
}
