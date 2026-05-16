import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/tokenomics", label: "Tokenomics" },
  { href: "/litepaper", label: "Litepaper" },
  { href: "/dashboard", label: "Dashboard" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:min-h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img src="/logo.png" alt="Modulr" className="h-9 w-9 object-contain" />
          <span className="text-lg font-semibold tracking-normal text-white">Modulr</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-slate-400 transition hover:bg-white/[0.05] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
