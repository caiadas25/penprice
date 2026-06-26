import Link from "next/link";
import { brands } from "@/data/brands";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find the Best Price on Any{" "}
          <span className="text-amber-400">Fountain Pen</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Compare live prices from Amazon, eBay, JetPens, Goulet Pens, and
          specialty retailers. Organized by brand and model — so you never
          overpay for your next pen.
        </p>
        <div className="flex gap-2 justify-center mt-8 text-sm text-slate-500">
          <span className="px-3 py-1 bg-slate-800/50 rounded-full">
            {brands.length} brands
          </span>
          <span className="px-3 py-1 bg-slate-800/50 rounded-full">
            {brands.reduce((a, b) => a + b.models.length, 0)} models tracked
          </span>
          <span className="px-3 py-1 bg-slate-800/50 rounded-full">
            eBay &bull; Amazon &bull; Retailers
          </span>
        </div>
      </div>

      {/* Brand Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand) => {
          const modelCount = brand.models.length;
          const cheapest = Math.min(
            ...brand.models
              .map((m) => Math.min(...m.knownPrices.map((p) => p.price)))
              .filter((p) => p !== Infinity)
          );
          return (
            <Link
              key={brand.id}
              href={`/brands/${brand.slug}`}
              className="group block p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 hover:border-amber-700/50 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-xl font-bold group-hover:text-amber-400 transition-colors">
                    {brand.name}
                  </h2>
                  <p className="text-sm text-slate-500">{brand.country}</p>
                </div>
                <span className="text-xs px-2 py-1 bg-slate-800 rounded-full text-slate-400">
                  {modelCount} models
                </span>
              </div>
              <p className="text-sm text-slate-400 line-clamp-2 mb-3">
                {brand.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-amber-400/70">
                  From ${cheapest.toFixed(0)}
                </span>
                <span className="text-slate-600 group-hover:text-amber-400 transition-colors">
                  See models →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Blog Teaser */}
      <div className="mt-16 text-center">
        <Link
          href="/blog"
          className="inline-block px-6 py-3 rounded-full border border-amber-700/50 text-amber-400 hover:bg-amber-900/20 transition-all font-medium"
        >
          Read Our Guides →
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-600 text-center">
        <p>
          PenPrice — Autonomous fountain pen price comparison tool. Prices
          updated from retailer listings. Built by an AI agent as a 30-day
          experiment.
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