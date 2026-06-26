import Link from "next/link";
import {
  brands,
  getBrandBySlug,
  getModelBySlug,
  getLowestPrice,
  getPriceRange,
} from "@/data/brands";
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

  const lowest = getLowestPrice(model);
  const range = getPriceRange(model);
  const savings = model.msrp && lowest ? model.msrp - lowest : null;
  const savingsPercent =
    model.msrp && lowest ? Math.round((1 - lowest / model.msrp) * 100) : null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-500 mb-8">
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
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          {brand.name} {model.name}
        </h1>
        <p className="text-slate-400 max-w-3xl mb-6">{model.description}</p>

        {/* Price Highlight */}
        <div className="flex flex-wrap gap-6 mb-6">
          {lowest !== null && (
            <div className="p-4 rounded-xl border border-amber-700/30 bg-amber-900/10">
              <div className="text-xs text-slate-500 uppercase tracking-wide">
                Best Price
              </div>
              <div className="text-3xl font-bold text-amber-400">
                ${lowest.toFixed(0)}
              </div>
              {model.msrp && (
                <div className="text-xs text-slate-500 mt-1">
                  MSRP: ${model.msrp.toFixed(0)}
                </div>
              )}
            </div>
          )}
          {savings !== null && savings > 0 && (
            <div className="p-4 rounded-xl border border-green-700/30 bg-green-900/10">
              <div className="text-xs text-slate-500 uppercase tracking-wide">
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
            <div className="p-4 rounded-xl border border-slate-700 bg-slate-800/50">
              <div className="text-xs text-slate-500 uppercase tracking-wide">
                Price Range
              </div>
              <div className="text-2xl font-bold">
                ${range.min.toFixed(0)}
                <span className="text-slate-500 text-lg"> — </span>$
                {range.max.toFixed(0)}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                across retailers
              </div>
            </div>
          )}
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {model.nibOptions.length > 0 && (
            <div className="p-3 rounded-lg bg-slate-800/30">
              <div className="text-slate-500 text-xs">Nib Options</div>
              <div className="text-slate-300">{model.nibOptions.join(", ")}</div>
            </div>
          )}
          <div className="p-3 rounded-lg bg-slate-800/30">
            <div className="text-slate-500 text-xs">Filling System</div>
            <div className="text-slate-300">{model.fillingSystem}</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-800/30">
            <div className="text-slate-500 text-xs">Material</div>
            <div className="text-slate-300">{model.material}</div>
          </div>
          {model.yearIntroduced && (
            <div className="p-3 rounded-lg bg-slate-800/30">
              <div className="text-slate-500 text-xs">Introduced</div>
              <div className="text-slate-300">{model.yearIntroduced}</div>
            </div>
          )}
        </div>
      </div>

      {/* Price Comparison Table */}
      <h2 className="text-xl font-bold mb-4">Price Comparison</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-800 mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-800/50 border-b border-slate-700">
              <th className="text-left px-4 py-3 font-medium text-slate-400">
                Retailer
              </th>
              <th className="text-right px-4 py-3 font-medium text-slate-400">
                Price
              </th>
              <th className="text-right px-4 py-3 font-medium text-slate-400">
                vs. MSRP
              </th>
              <th className="text-right px-4 py-3 font-medium text-slate-400">
                Condition
              </th>
              <th className="text-right px-4 py-3 font-medium text-slate-400">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {model.knownPrices.map((rp, i) => {
              const discount =
                model.msrp
                  ? Math.round((1 - rp.price / model.msrp) * 100)
                  : 0;
              return (
                <tr
                  key={i}
                  className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors"
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
                      <span
                        className={
                          discount > 0 ? "text-green-400" : "text-slate-500"
                        }
                      >
                        {discount > 0 ? `-${discount}%` : "MSRP"}
                      </span>
                    ) : (
                      <span className="text-slate-500">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right text-slate-400 capitalize">
                    {rp.condition}
                  </td>
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
      <h2 className="text-xl font-bold mb-4">Check Live Marketplaces</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <a
          href={buildEbaySearchUrl(brand.name, model.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-blue-900/20 hover:border-blue-700/50 transition-all group"
        >
          <span className="text-3xl">🏷️</span>
          <div className="flex-1">
            <div className="font-bold group-hover:text-blue-400 transition-colors">
              Search on eBay
            </div>
            <div className="text-xs text-slate-500">
              Current listings sorted by lowest price
            </div>
          </div>
          <span className="text-slate-600 group-hover:text-blue-400 transition-colors">
            ↗
          </span>
        </a>
        <a
          href={buildEbaySoldUrl(brand.name, model.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-purple-900/20 hover:border-purple-700/50 transition-all group"
        >
          <span className="text-3xl">📊</span>
          <div className="flex-1">
            <div className="font-bold group-hover:text-purple-400 transition-colors">
              eBay Sold Listings
            </div>
            <div className="text-xs text-slate-500">
              See what these pens actually sold for
            </div>
          </div>
          <span className="text-slate-600 group-hover:text-purple-400 transition-colors">
            ↗
          </span>
        </a>
        <a
          href={buildAmazonUrl(brand.name, model.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-orange-900/20 hover:border-orange-700/50 transition-all group"
        >
          <span className="text-3xl">🛒</span>
          <div className="flex-1">
            <div className="font-bold group-hover:text-orange-400 transition-colors">
              Search on Amazon
            </div>
            <div className="text-xs text-slate-500">
              New and used listings
            </div>
          </div>
          <span className="text-slate-600 group-hover:text-orange-400 transition-colors">
            ↗
          </span>
        </a>
      </div>

      {/* Back */}
      <div className="flex gap-4">
        <Link
          href={`/brands/${brand.slug}`}
          className="text-sm text-slate-500 hover:text-amber-400 transition-colors"
        >
          ← All {brand.name} models
        </Link>
        <Link
          href="/"
          className="text-sm text-slate-500 hover:text-amber-400 transition-colors"
        >
          All brands
        </Link>
      </div>
    </div>
  );
}

export const dynamicParams = false;