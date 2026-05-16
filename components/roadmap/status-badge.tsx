import { Circle, FlaskConical, Layers3, RadioTower } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RoadmapStatus } from "@/types/roadmap";

const statusStyles: Record<RoadmapStatus, string> = {
  "In Progress": "border-teal-300/25 bg-teal-300/10 text-teal-100",
  Planned: "border-sky-300/20 bg-sky-300/10 text-sky-100",
  Research: "border-violet-300/20 bg-violet-300/10 text-violet-100",
  Scaling: "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
};

const statusIcons = {
  "In Progress": Circle,
  Planned: Layers3,
  Research: FlaskConical,
  Scaling: RadioTower
};

interface StatusBadgeProps {
  status: RoadmapStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const Icon = statusIcons[status];

  return (
    <span className={cn("inline-flex items-center gap-2 border px-3 py-1.5 text-xs font-medium", statusStyles[status])}>
      <Icon className="h-3.5 w-3.5" />
      {status}
    </span>
  );
}
