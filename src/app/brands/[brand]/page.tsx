import Link from "next/link";
import { brands, getBrandBySlug, getLowestPrice } from "@/data/brands";
import { getBrandVisual } from "@/data/visuals";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return brands.map((brand) => ({ brand: brand.slug }));
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) notFound();

  const v = getBrandVisual(brand.slug);

  const allLowest = brand.models
    .map((m) => ({ model: m, price: getLowestPrice(m) }))
    .filter((m) => m.price !== null)
    .sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));

  const minPrice = allLowest[0]?.price ?? 0;
  const maxPrice = allLowest[allLowest.length - 1]?.price ?? 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-stone-500 mb-8 animate-fade-in-up">
        <Link href="/" className="hover:text-blue-900 transition-colors">
          Brands
        </Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700">{brand.name}</span>
      </div>

      {/* Brand Header */}
      <div className="mb-12 animate-fade-in-up">
        <div className="relative">
          {/* Brand color accent */}
          <div className={`absolute -top-6 left-0 w-24 h-0.5 bg-gradient-to-r ${v.color} opacity-60`} />

          <div className="flex items-center gap-5 mb-4">
            <span className="text-5xl">{v.emoji}</span>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-4xl md:text-5xl font-bold text-stone-900">{brand.name}</h1>
                <span className="text-sm px-3 py-1 bg-stone-100 rounded text-stone-500">
                  {v.flag} {brand.country}
                </span>
              </div>
              <p className="mt-1 text-sm text-stone-400">
                {brand.models.length} models · ${minPrice.toFixed(0)} – ${maxPrice.toFixed(0)} price range
              </p>
            </div>
          </div>
        </div>

        <p className="text-stone-500 max-w-3xl leading-relaxed">{brand.description}</p>
        <a
          href={brand.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm text-blue-800/70 hover:text-blue-900 transition-colors"
        >
          Official website ↗
        </a>
      </div>

      {/* Models Grid */}
      <div className="space-y-3">
        {brand.models.map((model, i) => {
          const lowest = getLowestPrice(model);
          const sellerCount = model.knownPrices.length;
          const savings = model.msrp && lowest ? Math.round((1 - lowest / model.msrp) * 100) : 0;

          return (
            <Link
              key={model.id}
              href={`/brands/${brand.slug}/${model.slug}`}
              className="group block p-5 rounded border border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all duration-200 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-stone-900 group-hover:text-blue-900 transition-colors duration-200">
                    {brand.name} {model.name}
                  </h2>
                  <p className="text-sm text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                    {model.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs px-2 py-0.5 bg-stone-100 rounded text-stone-500">
                      {model.fillingSystem}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-stone-100 rounded text-stone-500">
                      {model.material}
                    </span>
                    {model.yearIntroduced && (
                      <span className="text-xs px-2 py-0.5 bg-stone-100 rounded text-stone-500">
                        Est. {model.yearIntroduced}
                      </span>
                    )}
                    {savings > 0 && (
                      <span className="text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded">
                        Save {savings}%
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-1">
                  {lowest !== null && (
                    <div className="text-right">
                      <div className="text-xs text-stone-400">from</div>
                      <div className="text-2xl font-bold text-blue-800">
                        ${lowest.toFixed(0)}
                      </div>
                      {model.msrp && model.msrp > lowest && (
                        <div className="text-xs text-stone-400 line-through">
                          MSRP ${model.msrp.toFixed(0)}
                          {model.msrpUrl && (
                            <a href={model.msrpUrl} target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-800/50 hover:text-blue-800 transition-colors no-underline" title="Manufacturer's suggested retail price">
                              [source]
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  <div className="text-xs text-stone-400 text-right">
                    {sellerCount} retailer{sellerCount !== 1 ? "s" : ""}
                    <span className="block text-stone-400 group-hover:text-blue-800 transition-colors mt-1 text-xs">
                      Compare →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Price Range Overview */}
      {allLowest.length > 1 && (
        <div className="mt-12 p-5 rounded border border-stone-200 bg-white">
          <h3 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-4">
            {brand.name} Price Overview
          </h3>
          <div className="relative h-8 bg-stone-100 rounded overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full rounded bg-gradient-to-r ${v.color} opacity-50`}
              style={{ width: `${Math.min(100, ((maxPrice - minPrice) / maxPrice) * 100 + 10)}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-stone-400 mt-2">
            <span>${minPrice.toFixed(0)}</span>
            <span>${maxPrice.toFixed(0)}</span>
          </div>
        </div>
      )}

      {/* Other Brands */}
      <div className="mt-12 pt-8 border-t border-stone-200">
        <h2 className="text-lg font-semibold text-stone-900 mb-4">Other Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {brands
            .filter((b) => b.slug !== brand.slug)
            .slice(0, 8)
            .map((b) => {
              const bv = getBrandVisual(b.slug);
              return (
                <Link
                  key={b.id}
                  href={`/brands/${b.slug}`}
                  className="group p-3 rounded border border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm transition-all text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span>{bv.emoji}</span>
                    <span className="text-stone-900 font-semibold">{b.name}</span>
                  </div>
                  <span className="block text-stone-400 text-xs mt-1">{bv.flag} {b.country}</span>
                </Link>
              );
            })}
        </div>
      </div>

      {/* Back */}
      <div className="mt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-blue-900 transition-colors"
        >
          ← All brands
        </Link>
      </div>
    </div>
  );
}

export const dynamicParams = false;