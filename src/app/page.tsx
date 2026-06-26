import Link from "next/link";
import { brands } from "@/data/brands";
import { getBrandVisual } from "@/data/visuals";

const totalModels = brands.reduce((a, b) => a + b.models.length, 0);

function BrandCard({ brand, index }: { brand: typeof brands[0]; index: number }) {
  const v = getBrandVisual(brand.slug);
  const cheapest = Math.min(
    ...brand.models
      .map((m) => Math.min(...m.knownPrices.map((p) => p.price)))
      .filter((p) => p !== Infinity)
  );
  const modelCount = brand.models.length;

  return (
    <Link
      key={brand.id}
      href={`/brands/${brand.slug}`}
      className={`group relative block p-6 rounded-xl border border-slate-800 bg-slate-900/60 ${v.gradient} hover:bg-slate-800/60 transition-all duration-300 animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Brand color accent line */}
      <div className={`absolute top-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r ${v.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{v.emoji}</span>
          <div>
            <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
              {brand.name}
            </h2>
            <p className="text-xs text-slate-500">
              {v.flag} {brand.country}
            </p>
          </div>
        </div>
        <span className="text-xs px-2.5 py-1 bg-slate-800 rounded-full text-slate-400 font-medium">
          {modelCount} {modelCount === 1 ? "model" : "models"}
        </span>
      </div>

      <p className="text-sm text-slate-400 line-clamp-2 mb-4 leading-relaxed">
        {brand.description}
      </p>

      <div className="flex items-center justify-between text-sm pt-2 border-t border-slate-800/50">
        <div>
          <span className="text-xs text-slate-500">From</span>
          <span className="ml-1 text-lg font-bold text-amber-400">${cheapest.toFixed(0)}</span>
        </div>
        <span className="flex items-center gap-1 text-slate-500 group-hover:text-amber-400 transition-colors duration-300 text-xs font-medium">
          See models
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </span>
      </div>
    </Link>
  );
}

function PriceTierCard({ label, min, max, color }: { label: string; min: number; max: number; color: string }) {
  return (
    <div className={`p-4 rounded-xl border ${color} bg-slate-800/30`}>
      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{label}</div>
      <div className="text-xl font-bold text-white">
        ${min} <span className="text-sm text-slate-500">—</span> ${max}
      </div>
    </div>
  );
}

export default function HomePage() {
  const sortedBrands = [...brands].sort((a, b) => {
    const aMin = Math.min(...a.models.map(m => Math.min(...m.knownPrices.map(p => p.price))).filter(p => p !== Infinity));
    const bMin = Math.min(...b.models.map(m => Math.min(...m.knownPrices.map(p => p.price))).filter(p => p !== Infinity));
    return aMin - bMin;
  });

  // Price tiers
  const allPrices = brands.flatMap(b => b.models.flatMap(m => m.knownPrices.map(p => p.price)));
  const cheap = allPrices.filter(p => p < 50);
  const mid = allPrices.filter(p => p >= 50 && p < 200);
  const premium = allPrices.filter(p => p >= 200);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-20 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-amber-500/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          <div className="flex justify-center mb-6">
            <span className="text-6xl animate-float">🖊️</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Find the Best Price on Any{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Fountain Pen
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Compare live prices from Amazon, JetPens, Goulet Pens, Goldspot, and
            specialty retailers. Organized by brand and model — so you never
            overpay for your next pen.
          </p>

          {/* Stats + CTA */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-sm text-slate-300 font-medium">
              {brands.length} brands
            </span>
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-sm text-slate-300 font-medium">
              {totalModels} models tracked
            </span>
            <span className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-sm text-slate-300 font-medium">
              12+ retailers
            </span>
          </div>

          {/* Price tiers quick view */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto mb-8">
            <PriceTierCard label="Budget" min={6} max={50} color="border-green-800/40" />
            <PriceTierCard label="Mid-Range" min={50} max={200} color="border-amber-800/40" />
            <PriceTierCard label="Premium" min={200} max={1000} color="border-purple-800/40" />
          </div>
        </div>
      </div>

      {/* Brand Grid */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          <h2 className="text-sm font-medium text-slate-500 uppercase tracking-widest">
            Browse by Brand
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedBrands.map((brand, i) => (
          <BrandCard key={brand.id} brand={brand} index={i} />
        ))}
      </div>

      {/* Blog Teaser */}
      <div className="mt-20 text-center">
        <div className="inline-block p-8 rounded-2xl border border-slate-800 bg-slate-900/40 max-w-lg mx-auto shimmer-bg">
          <span className="text-3xl mb-3 block">📖</span>
          <h3 className="text-lg font-bold text-white mb-2">Need help choosing?</h3>
          <p className="text-sm text-slate-400 mb-5">
            Read our detailed guides with price comparisons, buying tips, and brand vs brand shootouts.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600/20 border border-amber-700/50 text-amber-400 hover:bg-amber-600/30 hover:border-amber-600/70 transition-all duration-300 font-medium text-sm"
          >
            Read Our Guides
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-800/50 text-xs text-slate-600 text-center space-y-1">
        <p>
          PenPrice — Autonomous fountain pen price comparison tool. Prices updated from retailer listings.
        </p>
        <p>
          Built by an AI agent as a 30-day experiment.{' '}
          <a
            href="https://github.com/caiadas25/penprice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-amber-400 transition-colors"
          >
            Source on GitHub ↗
          </a>
        </p>
      </footer>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "PenPrice",
            url: "https://penprice.vercel.app",
            description:
              "Compare fountain pen prices across Amazon, eBay, JetPens, Goulet Pens, and more.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://penprice.vercel.app/brands/{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </div>
  );
}