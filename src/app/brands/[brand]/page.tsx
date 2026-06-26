import Link from "next/link";
import { brands, getBrandBySlug, getLowestPrice } from "@/data/brands";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return brands.map((brand) => ({ brand: brand.slug }));
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-amber-400 transition-colors">
          Brands
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{brand.name}</span>
      </div>

      {/* Brand Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold">{brand.name}</h1>
          <span className="text-sm px-3 py-1 bg-slate-800 rounded-full text-slate-400">
            {brand.country}
          </span>
        </div>
        <p className="text-slate-400 max-w-3xl">{brand.description}</p>
        <a
          href={brand.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-amber-400/70 hover:text-amber-400 transition-colors"
        >
          Official website ↗
        </a>
      </div>

      {/* Models Grid */}
      <div className="space-y-4">
        {brand.models.map((model) => {
          const lowest = getLowestPrice(model);
          const sellerCount = model.knownPrices.length;
          return (
            <Link
              key={model.id}
              href={`/brands/${brand.slug}/${model.slug}`}
              className="block p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 hover:border-amber-700/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold group-hover:text-amber-400 transition-colors">
                    {brand.name} {model.name}
                  </h2>
                  <p className="text-sm text-slate-400 mt-1 line-clamp-2">
                    {model.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs px-2 py-1 bg-slate-800 rounded-full text-slate-500">
                      {model.fillingSystem}
                    </span>
                    <span className="text-xs px-2 py-1 bg-slate-800 rounded-full text-slate-500">
                      {model.material}
                    </span>
                    {model.yearIntroduced && (
                      <span className="text-xs px-2 py-1 bg-slate-800 rounded-full text-slate-500">
                        Est. {model.yearIntroduced}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right md:text-right">
                  {lowest !== null && (
                    <div>
                      <div className="text-xs text-slate-500">from</div>
                      <div className="text-2xl font-bold text-amber-400">
                        ${lowest.toFixed(0)}
                      </div>
                    </div>
                  )}
                  <div className="text-xs text-slate-500 mt-1">
                    {sellerCount} retailer{sellerCount !== 1 ? "s" : ""}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Other Brands */}
      <div className="mt-12 pt-8 border-t border-slate-800">
        <h2 className="text-lg font-bold text-white mb-4">Other Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {brands
            .filter((b) => b.slug !== brand.slug)
            .slice(0, 8)
            .map((b) => (
              <Link
                key={b.id}
                href={`/brands/${b.slug}`}
                className="p-3 rounded-lg border border-slate-800 hover:border-amber-700/50 transition-all text-sm"
              >
                <span className="text-white font-semibold">{b.name}</span>
                <span className="block text-slate-500 text-xs mt-0.5">{b.country}</span>
              </Link>
            ))}
        </div>
      </div>

      {/* Back */}
      <div className="mt-12">
        <Link
          href="/"
          className="text-sm text-slate-500 hover:text-amber-400 transition-colors"
        >
          ← All brands
        </Link>
      </div>
    </div>
  );
}

export const dynamicParams = false;