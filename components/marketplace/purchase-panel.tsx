"use client";

import { useState } from "react";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import { CheckoutModal } from "@/components/checkout";
import { Button } from "@/components/ui/button";
import type { MarketplaceProduct } from "@/types/components";

interface PurchasePanelProps {
  product: MarketplaceProduct;
}

export function PurchasePanel({ product }: PurchasePanelProps) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <aside className="border border-white/10 bg-slate-950/60 p-6 shadow-soft-border">
      <LockKeyhole className="h-6 w-6 text-teal-200" />
      <h2 className="mt-5 text-2xl font-semibold text-white">Purchase access</h2>
      <p className="mt-4 leading-7 text-slate-400">
        Send USDC to the payment address, paste your transaction hash, and access is granted instantly.
      </p>

      <div className="mt-6 space-y-3">
        <PurchaseRow label="Product" value={product.title} />
        <PurchaseRow label="Price" value={product.price} />
        <PurchaseRow label="Asset" value="USDC on Solana" />
      </div>

      <Button className="mt-6 w-full" onClick={() => setIsCheckoutOpen(true)}>
        Pay with USDC
      </Button>

      <div className="mt-4 border border-teal-300/20 bg-teal-300/[0.045] p-4">
        <p className="flex items-center gap-2 text-sm font-medium text-teal-100">
          <ShieldCheck className="h-4 w-4" />
          No wallet connection required
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Send from any Solana wallet. Paste the transaction hash to verify and unlock access.
        </p>
      </div>

      <CheckoutModal
        open={isCheckoutOpen}
        onOpenChange={setIsCheckoutOpen}
        product={product}
      />
    </aside>
  );
}

function PurchaseRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-white/[0.035] p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-medium text-white">{value}</p>
    </div>
  );
}
