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
      className={`group relative block p-5 rounded border border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all duration-200 animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      {/* Brand color accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${v.color} opacity-70`} />

      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">{v.emoji}</span>
          <div>
            <h2 className="text-base font-semibold text-stone-900 group-hover:text-blue-900 transition-colors duration-200">
              {brand.name}
            </h2>
            <p className="text-xs text-stone-400">
              {v.flag} {brand.country}
            </p>
          </div>
        </div>
        <span className="text-xs px-2 py-0.5 bg-stone-100 rounded text-stone-500 font-medium">
          {modelCount} {modelCount === 1 ? "model" : "models"}
        </span>
      </div>

      <p className="text-sm text-stone-500 line-clamp-2 mb-4 leading-relaxed">
        {brand.description}
      </p>

      <div className="flex items-center justify-between text-sm pt-3 border-t border-stone-100">
        <div>
          <span className="text-xs text-stone-400">From</span>
          <span className="ml-1.5 text-base font-semibold text-blue-800">${cheapest.toFixed(0)}</span>
        </div>
        <span className="flex items-center gap-1 text-stone-400 group-hover:text-blue-800 transition-colors duration-200 text-xs font-medium">
          See models
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </span>
      </div>
    </Link>
  );
}

function PriceTierCard({ label, min, max, range }: { label: string; min: number; max: number; range: string }) {
  return (
    <div className="p-4 rounded border border-stone-200 bg-white">
      <div className="text-xs text-stone-400 uppercase tracking-wider mb-1">{label}</div>
      <div className="text-lg font-semibold text-stone-900">
        ${min}<span className="text-sm text-stone-400 mx-1">—</span>${max}
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-stone-100 overflow-hidden">
        <div className={`h-full rounded-full ${range}`} style={{ width: "100%" }} />
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

  const allPrices = brands.flatMap(b => b.models.flatMap(m => m.knownPrices.map(p => p.price)));
  const cheapCount = allPrices.filter(p => p < 50).length;
  const midCount = allPrices.filter(p => p >= 50 && p < 200).length;
  const premiumCount = allPrices.filter(p => p >= 200).length;
  const total = cheapCount + midCount + premiumCount;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-20">
        <div className="flex justify-center mb-8">
          <span className="text-5xl">🖋️</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight text-stone-900">
          Find the Best Price on Any{" "}
          <span className="text-blue-900">
            Fountain Pen
          </span>
        </h1>

        <p className="text-base md:text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed mb-10">
          Compare live prices from Amazon, JetPens, Goulet Pens, Goldspot, and
          specialty retailers. Organized by brand and model — so you never
          overpay for your next pen.
        </p>

        {/* Hero separator */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-stone-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-900/30" />
          <div className="h-px w-12 bg-stone-200" />
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded text-sm text-stone-600 font-medium">
            {brands.length} brands
          </span>
          <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded text-sm text-stone-600 font-medium">
            {totalModels} models tracked
          </span>
          <span className="px-3.5 py-1.5 bg-white border border-stone-200 rounded text-sm text-stone-600 font-medium">
            12+ retailers
          </span>
        </div>

        {/* Price tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto mb-6">
          <PriceTierCard label="Budget" min={6} max={50} range="bg-emerald-400" />
          <PriceTierCard label="Mid-Range" min={50} max={200} range="bg-blue-400" />
          <PriceTierCard label="Premium" min={200} max={1000} range="bg-violet-400" />
        </div>
        <p className="text-xs text-stone-400">
          {cheapCount} budget · {midCount} mid-range · {premiumCount} premium listings tracked
        </p>
      </div>

      {/* Browse by Brand heading */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-stone-200" />
        <h2 className="text-sm font-medium text-stone-400 uppercase tracking-widest">
          Browse by Brand
        </h2>
        <div className="h-px flex-1 bg-stone-200" />
      </div>

      {/* Brand Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedBrands.map((brand, i) => (
          <BrandCard key={brand.id} brand={brand} index={i} />
        ))}
      </div>

      {/* Blog Teaser */}
      <div className="mt-20">
        <div className="max-w-lg mx-auto text-center p-8 rounded-lg border border-stone-200 bg-white">
          <span className="text-3xl mb-3 block">📖</span>
          <h3 className="text-lg font-semibold text-stone-900 mb-2">Need help choosing?</h3>
          <p className="text-sm text-stone-500 mb-6">
            Read our detailed guides with price comparisons, buying tips, and brand vs brand shootouts.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-blue-900 text-white hover:bg-blue-800 transition-colors duration-200 text-sm font-medium"
          >
            Read Our Guides
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-stone-200 text-xs text-stone-400 text-center space-y-1">
        <p>
          PenPrice — Autonomous fountain pen price comparison tool. Prices updated from retailer listings.
        </p>
        <p>
          Built by an AI agent as a 30-day experiment.{' '}
          <a
            href="https://github.com/caiadas25/penprice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-blue-900 transition-colors"
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