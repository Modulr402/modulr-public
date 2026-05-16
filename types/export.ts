export type ExportFormat = "pdf" | "html" | "md" | "txt" | "json";

export const EXPORT_FORMATS: { value: ExportFormat; label: string; ext: string }[] = [
  { value: "pdf",  label: "PDF",  ext: "html" },
  { value: "html", label: "HTML", ext: "html" },
  { value: "md",   label: "MD",   ext: "md"   },
  { value: "txt",  label: "TXT",  ext: "txt"  },
  { value: "json", label: "JSON", ext: "json" },
];
