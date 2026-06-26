import Link from "next/link";
import {
  brands,
  getBrandBySlug,
  getModelBySlug,
  getLowestPrice,
  getPriceRange,
} from "@/data/brands";
import { getBrandVisual } from "@/data/visuals";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const paths: { brand: string; model: string }[] = [];
  for (const brand of brands) {
    for (const model of brand.models) {
      paths.push({ brand: brand.slug, model: model.slug });
    }
  }
  return paths;
}

function buildEbaySearchUrl(brandName: string, modelName: string): string {
  const q = encodeURIComponent(`${brandName} ${modelName} fountain pen`);
  return `https://www.ebay.com/sch/i.html?_nkw=${q}&_sop=15&LH_PrefLoc=1`;
}

function buildEbaySoldUrl(brandName: string, modelName: string): string {
  const q = encodeURIComponent(`${brandName} ${modelName} fountain pen`);
  return `https://www.ebay.com/sch/i.html?_nkw=${q}&LH_Complete=1&LH_Sold=1&_sop=15`;
}

function buildAmazonUrl(brandName: string, modelName: string): string {
  const q = encodeURIComponent(`${brandName} ${modelName} fountain pen`);
  return `https://www.amazon.com/s?k=${q}`;
}

function PriceBar({ value, maxVal, label, color }: { value: number; maxVal: number; label: string; color: string }) {
  const pct = maxVal > 0 ? (value / maxVal) * 100 : 0;
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-16 text-right text-slate-400 text-xs">{label}</span>
      <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden relative">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-16 text-right font-mono font-bold">${value.toFixed(0)}</span>
    </div>
  );
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ brand: string; model: string }>;
}) {
  const { brand: brandSlug, model: modelSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) notFound();

  const model = getModelBySlug(brandSlug, modelSlug);
  if (!model) notFound();

  const v = getBrandVisual(brand.slug);
  const lowest = getLowestPrice(model);
  const range = getPriceRange(model);
  const savings = model.msrp && lowest ? model.msrp - lowest : null;
  const savingsPercent =
    model.msrp && lowest ? Math.round((1 - lowest / model.msrp) * 100) : null;

  const maxPriceForBar = Math.max(
    ...model.knownPrices.map((p) => p.price),
    model.msrp ?? 0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-500 mb-8 animate-fade-in-up">
        <Link href="/" className="hover:text-amber-400 transition-colors">
          Brands
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/brands/${brand.slug}`}
          className="hover:text-amber-400 transition-colors"
        >
          {brand.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{model.name}</span>
      </div>

      {/* Model Header */}
      <div className="mb-12 animate-fade-in-up">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl">{v.emoji}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {brand.name} {model.name}
          </h1>
        </div>
        <p className="text-slate-400 max-w-3xl leading-relaxed mb-8">{model.description}</p>

        {/* Price Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {lowest !== null && (
            <div className="p-5 rounded-xl border border-amber-700/30 bg-gradient-to-br from-amber-900/15 to-transparent">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                Best Price
              </div>
              <div className="text-3xl font-bold text-amber-400">
                ${lowest.toFixed(0)}
              </div>
              {model.msrp && (
                <div className="text-xs text-slate-500 mt-1">
                  MSRP: <span className="line-through">${model.msrp.toFixed(0)}</span>
                </div>
              )}
            </div>
          )}
          {savings !== null && savings > 0 && (
            <div className="p-5 rounded-xl border border-green-700/30 bg-gradient-to-br from-green-900/15 to-transparent">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                You Save
              </div>
              <div className="text-2xl font-bold text-green-400">
                ${savings.toFixed(0)}
              </div>
              {savingsPercent !== null && (
                <div className="text-xs text-green-400/70 mt-1">
                  {savingsPercent}% off MSRP
                </div>
              )}
            </div>
          )}
          {range && (
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/40">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                Price Range
              </div>
              <div className="text-2xl font-bold text-white">
                ${range.min.toFixed(0)}
                <span className="text-slate-500 text-lg mx-1">—</span>$
                {range.max.toFixed(0)}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                across {model.knownPrices.length} retailers
              </div>
            </div>
          )}
        </div>

        {/* Visual Price Comparison Bar */}
        {range && range.min < range.max && (
          <div className="mb-8 p-5 rounded-xl border border-slate-800 bg-slate-900/40">
            <h3 className="text-xs text-slate-500 uppercase tracking-wider mb-4">
              Price Comparison
            </h3>
            <div className="space-y-2.5">
              {model.knownPrices
                .sort((a, b) => a.price - b.price)
                .map((rp, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-right text-slate-400 text-xs truncate" title={rp.retailer}>
                      {rp.retailer}
                    </span>
                    <div className="flex-1 h-4 bg-slate-800 rounded-full overflow-hidden relative">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          rp.price === lowest
                            ? "bg-gradient-to-r from-amber-500 to-yellow-500"
                            : "bg-gradient-to-r from-slate-600 to-slate-500"
                        }`}
                        style={{ width: `${(rp.price / maxPriceForBar) * 100}%` }}
                      />
                    </div>
                    <span className="w-20 text-right font-mono font-bold text-sm">
                      ${rp.price.toFixed(2)}
                      {rp.price === lowest && (
                        <span className="ml-1 text-xs px-1 py-0.5 bg-amber-900/40 text-amber-400 rounded">
                          Best
                        </span>
                      )}
                    </span>
                  </div>
                ))}
            </div>
            {model.msrp && (
              <div className="mt-3 pt-3 border-t border-slate-800">
                <PriceBar
                  value={model.msrp}
                  maxVal={maxPriceForBar}
                  label="MSRP"
                  color="from-slate-600 to-slate-500 opacity-50"
                />
              </div>
            )}
          </div>
        )}

        {/* Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {model.nibOptions.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/50">
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Nib</div>
              <div className="text-slate-200 text-sm leading-relaxed">
                {model.nibOptions.join(", ")}
              </div>
            </div>
          )}
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/50">
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Filling</div>
            <div className="text-slate-200 text-sm">{model.fillingSystem}</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/50">
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Material</div>
            <div className="text-slate-200 text-sm">{model.material}</div>
          </div>
          {model.yearIntroduced && (
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/50">
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Introduced</div>
              <div className="text-slate-200 text-sm">{model.yearIntroduced}</div>
            </div>
          )}
        </div>
      </div>

      {/* Price Comparison Table */}
      <h2 className="text-xl font-bold text-white mb-4 animate-fade-in-up">All Retailer Prices</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-800 mb-12 animate-fade-in-up">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-800/50 border-b border-slate-700">
              <th className="text-left px-4 py-3 font-medium text-slate-400">Retailer</th>
              <th className="text-right px-4 py-3 font-medium text-slate-400">Price</th>
              <th className="text-right px-4 py-3 font-medium text-slate-400">vs. MSRP</th>
              <th className="text-right px-4 py-3 font-medium text-slate-400">Condition</th>
              <th className="text-right px-4 py-3 font-medium text-slate-400">Link</th>
            </tr>
          </thead>
          <tbody>
            {model.knownPrices
              .sort((a, b) => a.price - b.price)
              .map((rp, i) => {
              const discount = model.msrp ? Math.round((1 - rp.price / model.msrp) * 100) : 0;
              return (
                <tr
                  key={i}
                  className={`border-b border-slate-800 hover:bg-slate-800/30 transition-colors ${
                    rp.price === lowest ? "bg-amber-900/10" : ""
                  }`}
                >
                  <td className="px-4 py-3 font-medium">{rp.retailer}</td>
                  <td className="px-4 py-3 text-right">
                    <span
                      className={
                        rp.price === lowest
                          ? "text-amber-400 font-bold"
                          : "text-slate-300"
                      }
                    >
                      ${rp.price.toFixed(2)}
                    </span>
                    {rp.price === lowest && (
                      <span className="ml-2 text-xs px-1.5 py-0.5 bg-amber-900/40 text-amber-400 rounded">
                        Best
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {model.msrp ? (
                      <span className={discount > 0 ? "text-green-400" : "text-slate-500"}>
                        {discount > 0 ? `-${discount}%` : "MSRP"}
                      </span>
                    ) : (
                      <span className="text-slate-500">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right text-slate-400 capitalize">{rp.condition}</td>
                  <td className="px-4 py-3 text-right">
                    {rp.url ? (
                      <a
                        href={rp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400/70 hover:text-amber-400 transition-colors"
                      >
                        Shop ↗
                      </a>
                    ) : (
                      <span className="text-slate-600">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Live Marketplaces */}
      <h2 className="text-xl font-bold text-white mb-4">Check Live Marketplaces</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <a
          href={buildEbaySearchUrl(brand.name, model.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-blue-900/20 hover:border-blue-700/50 transition-all duration-300 group"
        >
          <span className="text-3xl">🏷️</span>
          <div className="flex-1">
            <div className="font-bold text-white group-hover:text-blue-400 transition-colors">
              Search on eBay
            </div>
            <div className="text-xs text-slate-500">Current listings</div>
          </div>
          <span className="text-slate-600 group-hover:text-blue-400 transition-colors">↗</span>
        </a>
        <a
          href={buildEbaySoldUrl(brand.name, model.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-purple-900/20 hover:border-purple-700/50 transition-all duration-300 group"
        >
          <span className="text-3xl">📊</span>
          <div className="flex-1">
            <div className="font-bold text-white group-hover:text-purple-400 transition-colors">
              eBay Sold Prices
            </div>
            <div className="text-xs text-slate-500">Actual sale data</div>
          </div>
          <span className="text-slate-600 group-hover:text-purple-400 transition-colors">↗</span>
        </a>
        <a
          href={buildAmazonUrl(brand.name, model.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-orange-900/20 hover:border-orange-700/50 transition-all duration-300 group"
        >
          <span className="text-3xl">🛒</span>
          <div className="flex-1">
            <div className="font-bold text-white group-hover:text-orange-400 transition-colors">
              Search on Amazon
            </div>
            <div className="text-xs text-slate-500">New &amp; used listings</div>
          </div>
          <span className="text-slate-600 group-hover:text-orange-400 transition-colors">↗</span>
        </a>
      </div>

      {/* Back */}
      <div className="flex gap-6">
        <Link
          href={`/brands/${brand.slug}`}
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-amber-400 transition-colors"
        >
          ← All {brand.name} models
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-amber-400 transition-colors"
        >
          All brands
        </Link>
      </div>
    </div>
  );
}

export const dynamicParams = false;