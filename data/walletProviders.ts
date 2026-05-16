import type { WalletProviderConfig } from "@/types/wallet";

export const walletProviders: WalletProviderConfig[] = [
  {
    id: "phantom",
    name: "Phantom",
    description: "Solana wallet provider for wallet-aware Modulr infrastructure previews.",
    networkType: "Solana",
    iconSrc: "/wallets/phantom.ico",
    status: "available",
    supportedPaymentAssets: ["USDC", "future $MODU"]
  },
  {
    id: "solflare",
    name: "Solflare",
    description: "Solana wallet provider for builder-focused marketplace account access.",
    networkType: "Solana",
    iconSrc: "/wallets/solflare.ico",
    status: "available",
    supportedPaymentAssets: ["USDC", "future $MODU"]
  },
  {
    id: "metamask",
    name: "MetaMask",
    description: "EVM support planned for future multi-chain marketplace infrastructure.",
    networkType: "EVM",
    iconSrc: "/wallets/metamask.ico",
    status: "coming soon",
    supportedPaymentAssets: ["USDC", "future $MODU"]
  }
];

export function getWalletProvider(providerId: WalletProviderConfig["id"]) {
  return walletProviders.find((provider) => provider.id === providerId);
}
