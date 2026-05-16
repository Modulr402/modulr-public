"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Clock3, LockKeyhole, ShieldOff } from "lucide-react";
import { useWallet } from "@/components/wallet/wallet-context";
import { purchaseStorage, PURCHASE_UPDATED_EVENT, STORAGE_MODE_LABEL } from "@/lib/storage/purchaseStorage";
import type { PurchaseRecord } from "@/types/purchase";

interface AccessPanelProps {
  productId: string;
}

type UiAccessStatus = "locked" | "pending" | "active" | "revoked";

const statusConfig: Record<UiAccessStatus, { label: string; icon: typeof LockKeyhole }> = {
  locked: { label: "Locked", icon: LockKeyhole },
  pending: { label: "Pending verification", icon: Clock3 },
  active: { label: "Access active", icon: CheckCircle2 },
  revoked: { label: "Access revoked", icon: ShieldOff },
};

function toUiStatus(purchase: PurchaseRecord | null): UiAccessStatus {
  if (!purchase) return "locked";
  if (purchase.purchaseStatus === "verified" && purchase.accessStatus === "active") return "active";
  if (purchase.accessStatus === "pending") return "pending";
  if (purchase.accessStatus === "revoked") return "revoked";
  return "locked";
}

function accessMessage(status: UiAccessStatus, isConnected: boolean): string {
  if (!isConnected) return "Connect a wallet to check access status. Ownership is stored locally until a database is added.";
  if (status === "active") return "Local verified purchase found. Workspace access is active on this browser.";
  if (status === "pending") return "Payment is pending verification. Access will be granted after successful on-chain verification.";
  if (status === "revoked") return "Access for this component has been revoked.";
  return "Access is locked. A verified USDC payment is required to activate this component.";
}

export function AccessPanel({ productId }: AccessPanelProps) {
  const { wallet, isConnected } = useWallet();
  const [purchase, setPurchase] = useState<PurchaseRecord | null>(null);

  useEffect(() => {
    if (!wallet?.address) {
      setPurchase(null);
      return;
    }

    const sync = () => {
      const record =
        purchaseStorage.getPurchasesByWallet(wallet.address).find((p) => p.productId === productId) ?? null;
      setPurchase(record);
    };

    sync();
    window.addEventListener(PURCHASE_UPDATED_EVENT, sync);
    return () => window.removeEventListener(PURCHASE_UPDATED_EVENT, sync);
  }, [productId, wallet?.address]);

  const status = toUiStatus(purchase);
  const StatusIcon = statusConfig[status].icon;

  return (
    <section className="mt-10 border border-white/10 bg-white/[0.035] p-6 shadow-soft-border">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-teal-200">Access Control</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Component access status</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-400">{accessMessage(status, isConnected)}</p>
        </div>
        <div className="border border-white/10 bg-slate-950/55 p-4 sm:min-w-56">
          <StatusIcon className="h-5 w-5 text-teal-200" />
          <p className="mt-4 text-sm text-slate-500">Current status</p>
          <p className="mt-1 text-lg font-semibold text-white">{statusConfig[status].label}</p>
          {isConnected && (
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-600">
              {STORAGE_MODE_LABEL}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 border border-dashed border-white/[0.15] bg-slate-950/45 p-4">
        <p className="text-sm leading-6 text-slate-400">
          {status === "active"
            ? "Local persistence mode is active. Access exists on this browser only. Production accounts, permanent ownership records and file delivery are not enabled yet."
            : "Modulr is not delivering files, revealing component code, faking purchases or storing permanent ownership records unless a verified local purchase exists."}
        </p>
      </div>
    </section>
  );
}
