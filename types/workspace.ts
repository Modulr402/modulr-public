export type WorkspaceLayoutType = "wallet-risk" | "launch-checklist" | "audit-summary";

export interface WorkspacePanel {
  title: string;
  description: string;
  placeholders: string[];
}

export interface ComponentWorkspaceConfig {
  productId: string;
  title: string;
  layout: WorkspaceLayoutType;
  inputPanel: WorkspacePanel;
  outputPanels: WorkspacePanel[];
}
