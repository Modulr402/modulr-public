import Link from "next/link";
import { ArrowLeft, Code2, Network } from "lucide-react";
import { AccessPanel } from "@/components/marketplace/access-panel";
import { ProductCard } from "@/components/marketplace/product-card";
import { Button } from "@/components/ui/button";
import type { MarketplaceProduct } from "@/types/components";

interface ProductDetailProps {
  product: MarketplaceProduct;
  relatedProducts: MarketplaceProduct[];
}

export function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-12 sm:px-8 lg:pt-20">
      <Button asChild variant="ghost" className="mb-8 px-0">
        <Link href="/components">
          <ArrowLeft className="h-4 w-4" />
          Back to Components
        </Link>
      </Button>

      <section>
        <div className="border border-white/10 bg-white/[0.035] p-6 shadow-soft-border sm:p-8">
          <div className="flex flex-wrap gap-2">
            <span className="border border-teal-300/20 bg-teal-300/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-teal-100">
              {product.category}
            </span>
            <span className="border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
              {product.version}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{product.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{product.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="border border-white/10 bg-slate-950/45 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Price</p>
              <p className="mt-2 font-mono text-xl text-white">{product.price}</p>
            </div>
            <div className="border border-white/10 bg-slate-950/45 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Difficulty</p>
              <p className="mt-2 text-white">{product.difficulty}</p>
            </div>
            <div className="border border-white/10 bg-slate-950/45 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Access</p>
              <p className="mt-2 text-white">Wallet Required</p>
            </div>
            <div className="border border-white/10 bg-slate-950/45 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Last updated</p>
              <p className="mt-2 text-white">{product.lastUpdated}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <MetadataPanel title="Compatibility" items={product.compatibility} />
            <MetadataPanel title="Infrastructure tags" items={product.infrastructureTags} />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.walletAware ? (
              <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
                <Network className="h-4 w-4 text-teal-200" />
                Wallet-aware listing
              </span>
            ) : null}
            {product.futureApiSupport ? (
              <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
                <Code2 className="h-4 w-4 text-teal-200" />
                Future API support
              </span>
            ) : null}
          </div>

          <Button asChild className="mt-8">
            <Link href={`/components/${product.slug}/use`}>Use This Tool</Link>
          </Button>
        </div>

      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="border border-white/10 bg-white/[0.035] p-6 shadow-soft-border">
          <h2 className="text-2xl font-semibold text-white">Features</h2>
          <div className="mt-5 space-y-3">
            {product.features.map((feature) => (
              <div key={feature} className="flex gap-3 text-sm leading-6 text-slate-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-teal-200" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-white/10 bg-white/[0.035] p-6 shadow-soft-border">
          <h2 className="text-2xl font-semibold text-white">Use cases</h2>
          <div className="mt-5 space-y-3">
            {product.useCases.map((useCase) => (
              <div key={useCase} className="flex gap-3 text-sm leading-6 text-slate-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-teal-200" />
                <span>{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 border border-white/10 bg-slate-950/55 p-6 shadow-soft-border">
        <h2 className="text-2xl font-semibold text-white">Future integration note</h2>
        <p className="mt-4 max-w-4xl leading-7 text-slate-400">
          Future versions are planned to connect this infrastructure listing with wallet-authenticated purchasing,
          transaction verification, secure release access, version-aware updates and marketplace API hooks. No blockchain
          transaction or unlock logic is included in this implementation step.
        </p>
      </section>

      <AccessPanel productId={product.slug} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white">Related tools</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {relatedProducts.map((relatedProduct, index) => (
            <ProductCard key={relatedProduct.slug} product={relatedProduct} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

function MetadataPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-white/10 bg-slate-950/35 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-xs text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
