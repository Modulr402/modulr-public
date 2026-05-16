"use client";

import { cn } from "@/lib/utils";
import { EXPORT_FORMATS, type ExportFormat } from "@/types/export";

interface FormatPickerProps {
  value: ExportFormat;
  onChange: (format: ExportFormat) => void;
  disabled?: boolean;
}

export function FormatPicker({ value, onChange, disabled }: FormatPickerProps) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Output format</p>
      <div className="flex gap-1.5 flex-wrap">
        {EXPORT_FORMATS.map(({ value: fmt, label }) => (
          <button
            key={fmt}
            type="button"
            disabled={disabled}
            onClick={() => onChange(fmt)}
            className={cn(
              "h-8 px-3 font-mono text-xs font-semibold tracking-wider border transition",
              value === fmt
                ? "border-teal-300/40 bg-teal-300/[0.12] text-teal-200"
                : "border-white/10 bg-white/[0.025] text-slate-500 hover:border-white/20 hover:text-slate-300",
              disabled && "opacity-40 cursor-not-allowed pointer-events-none"
            )}
          >
            {label}
          </button>
        ))}
      </div>
      {value === "pdf" && !disabled && (
        <p className="mt-1.5 text-[11px] text-slate-600">
          Opens a print dialog. Save as PDF from your browser.
        </p>
      )}
    </div>
  );
}
