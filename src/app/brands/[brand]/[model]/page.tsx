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
      <span className="w-16 text-right text-stone-400 text-xs">{label}</span>
      <div className="flex-1 h-3 bg-stone-100 rounded overflow-hidden relative">
        <div
          className={`h-full rounded bg-gradient-to-r ${color} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-16 text-right font-mono font-bold text-stone-900">${value.toFixed(0)}</span>
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
      <div className="text-sm text-stone-500 mb-8 animate-fade-in-up">
        <Link href="/" className="hover:text-blue-900 transition-colors">
          Brands
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/brands/${brand.slug}`}
          className="hover:text-blue-900 transition-colors"
        >
          {brand.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700">{model.name}</span>
      </div>

      {/* Model Header */}
      <div className="mb-12 animate-fade-in-up">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl">{v.emoji}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900">
            {brand.name} {model.name}
          </h1>
        </div>
        <p className="text-stone-500 max-w-3xl leading-relaxed mb-8">{model.description}</p>

        {/* Price Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {lowest !== null && (
            <div className="p-5 rounded border border-blue-200 bg-blue-50/50">
              <div className="text-xs text-stone-500 uppercase tracking-wider mb-1">
                Best Price
              </div>
              <div className="text-3xl font-bold text-blue-800">
                ${lowest.toFixed(0)}
              </div>
              {model.msrp && (
                <div className="text-xs text-stone-400 mt-1">
                  MSRP: <span className="line-through">${model.msrp.toFixed(0)}</span>
                  {model.msrpUrl && (
                    <a href={model.msrpUrl} target="_blank" rel="noopener noreferrer" className="ml-1.5 text-blue-800/60 hover:text-blue-800 transition-colors" title="Manufacturer's suggested retail price">
                      [source]
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
          {savings !== null && savings > 0 && (
            <div className="p-5 rounded border border-emerald-200 bg-emerald-50/50">
              <div className="text-xs text-stone-500 uppercase tracking-wider mb-1">
                You Save
              </div>
              <div className="text-2xl font-bold text-emerald-700">
                ${savings.toFixed(0)}
              </div>
              {savingsPercent !== null && (
                <div className="text-xs text-emerald-600/70 mt-1">
                  {savingsPercent}% off MSRP
                </div>
              )}
            </div>
          )}
          {range && (
            <div className="p-5 rounded border border-stone-200 bg-white">
              <div className="text-xs text-stone-500 uppercase tracking-wider mb-1">
                Price Range
              </div>
              <div className="text-2xl font-bold text-stone-900">
                ${range.min.toFixed(0)}
                <span className="text-stone-400 text-lg mx-1">—</span>$
                {range.max.toFixed(0)}
              </div>
              <div className="text-xs text-stone-400 mt-1">
                across {model.knownPrices.length} retailers
              </div>
            </div>
          )}
        </div>

        {/* Visual Price Comparison Bar */}
        {range && range.min < range.max && (
          <div className="mb-8 p-5 rounded border border-stone-200 bg-white">
            <h3 className="text-xs text-stone-500 uppercase tracking-wider mb-4">
              Price Comparison
            </h3>
            <div className="space-y-2.5">
              {model.knownPrices
                .sort((a, b) => a.price - b.price)
                .map((rp, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-right text-stone-400 text-xs truncate" title={rp.retailer}>
                      {rp.retailer}
                    </span>
                    <div className="flex-1 h-4 bg-stone-100 rounded overflow-hidden relative">
                      <div
                        className={`h-full rounded transition-all duration-500 ${
                          rp.price === lowest
                            ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                            : "bg-stone-300"
                        }`}
                        style={{ width: `${(rp.price / maxPriceForBar) * 100}%` }}
                      />
                    </div>
                    <span className="w-20 text-right font-mono font-bold text-sm text-stone-900">
                      ${rp.price.toFixed(2)}
                      {rp.price === lowest && (
                        <span className="ml-1 text-xs px-1 py-0.5 bg-blue-50 text-blue-700 rounded">
                          Best
                        </span>
                      )}
                    </span>
                  </div>
                ))}
            </div>
            {model.msrp && (
              <div className="mt-3 pt-3 border-t border-stone-200">
                <PriceBar
                  value={model.msrp}
                  maxVal={maxPriceForBar}
                  label="MSRP"
                  color="from-stone-400 to-stone-300 opacity-70"
                />
              </div>
            )}
          </div>
        )}

        {/* Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {model.nibOptions.length > 0 && (
            <div className="p-4 rounded border border-stone-200 bg-white">
              <div className="text-stone-400 text-xs uppercase tracking-wider mb-1">Nib</div>
              <div className="text-stone-800 text-sm leading-relaxed">
                {model.nibOptions.join(", ")}
              </div>
            </div>
          )}
          <div className="p-4 rounded border border-stone-200 bg-white">
            <div className="text-stone-400 text-xs uppercase tracking-wider mb-1">Filling</div>
            <div className="text-stone-800 text-sm">{model.fillingSystem}</div>
          </div>
          <div className="p-4 rounded border border-stone-200 bg-white">
            <div className="text-stone-400 text-xs uppercase tracking-wider mb-1">Material</div>
            <div className="text-stone-800 text-sm">{model.material}</div>
          </div>
          {model.yearIntroduced && (
            <div className="p-4 rounded border border-stone-200 bg-white">
              <div className="text-stone-400 text-xs uppercase tracking-wider mb-1">Introduced</div>
              <div className="text-stone-800 text-sm">{model.yearIntroduced}</div>
            </div>
          )}
        </div>
      </div>

      {/* Price Comparison Table */}
      <h2 className="text-xl font-semibold text-stone-900 mb-4 animate-fade-in-up">All Retailer Prices</h2>
      <div className="overflow-x-auto rounded border border-stone-200 mb-12 animate-fade-in-up">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-stone-100 border-b border-stone-200">
              <th className="text-left px-4 py-3 font-medium text-stone-500">Retailer</th>
              <th className="text-right px-4 py-3 font-medium text-stone-500">Price</th>
              <th className="text-right px-4 py-3 font-medium text-stone-500">vs. MSRP</th>
              <th className="text-right px-4 py-3 font-medium text-stone-500">Condition</th>
              <th className="text-right px-4 py-3 font-medium text-stone-500">Link</th>
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
                  className={`border-b border-stone-100 hover:bg-stone-50 transition-colors ${
                    rp.price === lowest ? "bg-blue-50/40" : ""
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-stone-800">{rp.retailer}</td>
                  <td className="px-4 py-3 text-right">
                    <span
                      className={
                        rp.price === lowest
                          ? "text-blue-800 font-bold"
                          : "text-stone-700"
                      }
                    >
                      ${rp.price.toFixed(2)}
                    </span>
                    {rp.price === lowest && (
                      <span className="ml-2 text-xs px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded">
                        Best
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {model.msrp ? (
                      <span className={discount > 0 ? "text-emerald-600" : "text-stone-400"}>
                        {discount > 0 ? `-${discount}%` : "MSRP"}
                      </span>
                    ) : (
                      <span className="text-stone-400">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right text-stone-500 capitalize">{rp.condition}</td>
                  <td className="px-4 py-3 text-right">
                    {rp.url ? (
                      <a
                        href={rp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800/70 hover:text-blue-900 transition-colors"
                      >
                        Shop ↗
                      </a>
                    ) : (
                      <span className="text-stone-300">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Live Marketplaces */}
      <h2 className="text-xl font-semibold text-stone-900 mb-4">Check Live Marketplaces</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <a
          href={buildEbaySearchUrl(brand.name, model.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded border border-stone-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
        >
          <span className="text-3xl">🏷️</span>
          <div className="flex-1">
            <div className="font-semibold text-stone-900 group-hover:text-blue-800 transition-colors">
              Search on eBay
            </div>
            <div className="text-xs text-stone-400">Current listings</div>
          </div>
          <span className="text-stone-300 group-hover:text-blue-800 transition-colors">↗</span>
        </a>
        <a
          href={buildEbaySoldUrl(brand.name, model.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded border border-stone-200 bg-white hover:border-purple-300 hover:shadow-sm transition-all duration-200 group"
        >
          <span className="text-3xl">📊</span>
          <div className="flex-1">
            <div className="font-semibold text-stone-900 group-hover:text-purple-700 transition-colors">
              eBay Sold Prices
            </div>
            <div className="text-xs text-stone-400">Actual sale data</div>
          </div>
          <span className="text-stone-300 group-hover:text-purple-700 transition-colors">↗</span>
        </a>
        <a
          href={buildAmazonUrl(brand.name, model.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded border border-stone-200 bg-white hover:border-orange-300 hover:shadow-sm transition-all duration-200 group"
        >
          <span className="text-3xl">🛒</span>
          <div className="flex-1">
            <div className="font-semibold text-stone-900 group-hover:text-orange-700 transition-colors">
              Search on Amazon
            </div>
            <div className="text-xs text-stone-400">New &amp; used listings</div>
          </div>
          <span className="text-stone-300 group-hover:text-orange-700 transition-colors">↗</span>
        </a>
      </div>

      {/* Back */}
      <div className="flex gap-6">
        <Link
          href={`/brands/${brand.slug}`}
          className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-blue-900 transition-colors"
        >
          ← All {brand.name} models
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-blue-900 transition-colors"
        >
          All brands
        </Link>
      </div>
    </div>
  );
}

export const dynamicParams = false;