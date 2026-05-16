"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { WalletConnectButton } from "@/components/wallet";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/tokenomics", label: "Tokenomics" },
  { href: "/litepaper", label: "Litepaper" },
  { href: "/dashboard", label: "Dashboard" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="relative mx-auto flex min-h-16 w-full max-w-7xl flex-col px-5 py-4 sm:px-8 lg:min-h-20 lg:py-0">
        <div className="flex items-center justify-between gap-4 lg:min-h-20">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <img src="/logo.png" alt="Modulr" className="h-16 w-16 object-contain" />
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-white/10 text-slate-300 transition hover:bg-white/[0.06] hover:text-white lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={cn(
            "grid gap-4 overflow-hidden transition-all lg:absolute lg:left-1/2 lg:top-0 lg:min-h-20 lg:-translate-x-1/2 lg:overflow-visible lg:transition-none",
            isMenuOpen ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr] lg:grid-rows-[1fr] lg:pt-0"
          )}
        >
          <div className="min-h-0 lg:flex lg:min-h-20 lg:items-center">
            <nav className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "px-3 py-2 text-sm text-slate-400 transition hover:bg-white/[0.05] hover:text-white",
                      isActive && "bg-white/[0.08] text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 flex items-center gap-3 lg:hidden">
              <a
                href="https://x.com/Modulr402"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-white/10 text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
                aria-label="Modulr on X"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Modulr402"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-white/10 text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
                aria-label="Modulr on GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <WalletConnectButton />
            </div>
          </div>
        </div>

        <div className="hidden lg:absolute lg:right-8 lg:top-1/2 lg:flex lg:items-center lg:gap-3 lg:-translate-y-1/2">
          <a
            href="https://x.com/Modulr402"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center border border-white/10 text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
            aria-label="Modulr on X"
          >
            <XIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Modulr402"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center border border-white/10 text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
            aria-label="Modulr on GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <WalletConnectButton />
        </div>
      </div>
    </header>
  );
}
