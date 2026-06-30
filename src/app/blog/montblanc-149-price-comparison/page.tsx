import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Montblanc 149 Price Comparison 2026 — Meisterstuck 149 Deals | PenPrice",
  description:
    "Compare Montblanc Meisterstuck 149 prices across Amazon, eBay, JetPens, Goulet Pens, and Goldspot. Find the best deal on the iconic luxury fountain pen with live price tracking.",
  openGraph: {
    title: "Montblanc 149 Price Comparison — Best Deals 2026",
    description:
      "Compare Montblanc Meisterstuck 149 prices across 5+ retailers. Find the lowest price on the world's most iconic luxury fountain pen.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Montblanc 149 Price Comparison 2026",
    description:
      "Find the best price on the Montblanc Meisterstuck 149. Compare Amazon, eBay, Goulet Pens, and Goldspot.",
  },
};

const retailers = [
  {
    name: "Amazon",
    price: 699.99,
    url: "https://www.amazon.com/s?k=Montblanc+Meisterstuck+149+fountain+pen",
    note: "New listings, varies by seller",
  },
  {
    name: "Goldspot Pens",
    price: 945.00,
    url: "https://www.goldspot.com/montblanc/149/",
    note: "Authorized dealer, full warranty",
  },
  {
    name: "Appelboom Pennen",
    price: 855.00,
    url: "https://www.appelboompennen.com/",
    note: "EU retailer, ships worldwide",
  },
  {
    name: "eBay (New)",
    price: 789.00,
    url: "https://www.ebay.com/sch/i.html?_nkw=Montblanc+Meisterstuck+149+fountain+pen",
    note: "New listings, check seller ratings",
  },
  {
    name: "eBay (Sold)",
    price: 650.00,
    url: "https://www.ebay.com/sch/i.html?_nkw=Montblanc+149+fountain+pen&LH_Complete=1&LH_Sold=1",
    note: "Actual sale prices (used)",
  },
];

const nibSizes = [
  { size: "Extra Fine", writing: "Fine lines, detailed writing, excellent for small handwriting", bestFor: "Note-taking, journaling, detailed work" },
  { size: "Fine", writing: "Clean, controlled lines with slight flex", bestFor: "Everyday writing, correspondence" },
  { size: "Medium", writing: "Smooth, wet lines with good flow", bestFor: "Signing documents, general use" },
  { size: "Broad", writing: "Thick, wet lines with visible shading", bestFor: "Signature, headings, display writing" },
  { size: "Double Broad", writing: "Very thick lines, maximum ink flow", bestFor: "Calligraphy, signatures, art" },
  { size: "Oblique", writing: "Italic-like variation with natural angle", bestFor: "Calligraphy, cursive writing" },
];

const pros = [
  "World's most recognizable luxury fountain pen",
  "18k gold nib with exceptional smoothness and character",
  "Piston filling system with massive ink capacity",
  "Precious resin body develops beautiful patina over time",
  "Status symbol and conversation piece",
  "Excellent resale value, holds value better than most luxury pens",
  "Available in a wide range of nib sizes and custom grinds",
  "Full manufacturer warranty and global service network",
];

const cons = [
  "Very expensive — over $800 at retail",
  "Heavy for extended writing sessions",
  "No clip option (some prefer a more understated pen)",
  "The 18k nib is softer than some prefer for quick note-taking",
  "Requires regular maintenance to keep piston mechanism smooth",
  "Not the best value for pure writing performance",
];

export default function Montblanc149PricePage() {
  const lowest = Math.min(...retailers.map((r) => r.price));
  const highest = Math.max(...retailers.map((r) => r.price));
  const savings = highest - lowest;
  const msrp = 995;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-500 mb-8">
        <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/brands/montblanc" className="hover:text-blue-900 transition-colors">Montblanc</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700">Montblanc 149 Price</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2.5 py-0.5 rounded bg-stone-100 text-stone-600">Price Guide</span>
            <span className="text-xs text-stone-400">Updated June 30, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Montblanc 149 Price Comparison — Best Deals in 2026
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            The Montblanc Meisterstuck 149 is the world&apos;s most iconic luxury fountain pen.
            Here&apos;s where to find the best price across major retailers.
          </p>
        </header>

        {/* Price Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="p-5 rounded border border-blue-200 bg-blue-50/50">
            <div className="text-xs text-stone-500 uppercase tracking-wider mb-1">Best Price</div>
            <div className="text-3xl font-bold text-blue-800">${lowest.toFixed(0)}</div>
            <div className="text-xs text-stone-400 mt-1">Amazon (new listing)</div>
          </div>
          <div className="p-5 rounded border border-emerald-200 bg-emerald-50/50">
            <div className="text-xs text-stone-500 uppercase tracking-wider mb-1">You Save</div>
            <div className="text-2xl font-bold text-emerald-700">${savings.toFixed(0)}</div>
            <div className="text-xs text-emerald-600/70 mt-1">{Math.round((savings / highest) * 100)}% off highest</div>
          </div>
          <div className="p-5 rounded border border-stone-200 bg-white">
            <div className="text-xs text-stone-500 uppercase tracking-wider mb-1">MSRP</div>
            <div className="text-2xl font-bold text-stone-900">${msrp}</div>
            <div className="text-xs text-stone-400 mt-1">Manufacturer suggested retail</div>
          </div>
        </div>

        {/* Retailer Price Comparison */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Retailer Price Comparison</h2>
          <div className="overflow-x-auto rounded border border-stone-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-100 border-b border-stone-200">
                  <th className="text-left px-4 py-3 font-medium text-stone-500">Retailer</th>
                  <th className="text-right px-4 py-3 font-medium text-stone-500">Price</th>
                  <th className="text-right px-4 py-3 font-medium text-stone-500">vs MSRP</th>
                  <th className="text-left px-4 py-3 font-medium text-stone-500">Notes</th>
                  <th className="text-right px-4 py-3 font-medium text-stone-500">Link</th>
                </tr>
              </thead>
              <tbody>
                {retailers.sort((a, b) => a.price - b.price).map((r, i) => {
                  const discount = Math.round((1 - r.price / msrp) * 100);
                  const isLowest = r.price === lowest;
                  return (
                    <tr
                      key={i}
                      className={`border-b border-stone-100 hover:bg-stone-50 transition-colors ${isLowest ? "bg-blue-50/40" : ""}`}
                    >
                      <td className="px-4 py-3 font-medium text-stone-800">{r.name}</td>
                      <td className="px-4 py-3 text-right">
                        <span className={isLowest ? "text-blue-800 font-bold" : "text-stone-700"}>
                          ${r.price.toFixed(2)}
                        </span>
                        {isLowest && (
                          <span className="ml-2 text-xs px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded">Best</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className={discount > 0 ? "text-emerald-600" : "text-stone-400"}>
                          {discount > 0 ? `-${discount}%` : "MSRP"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-stone-500 text-xs">{r.note}</td>
                      <td className="px-4 py-3 text-right">
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-blue-800/70 hover:text-blue-900 transition-colors">
                          Shop ↗
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Specs */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Montblanc 149 Specifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <div className="text-stone-400 text-xs uppercase tracking-wider mb-1">Nib</div>
              <div className="text-stone-800 text-sm">18k gold, #9 size</div>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <div className="text-stone-400 text-xs uppercase tracking-wider mb-1">Filling</div>
              <div className="text-stone-800 text-sm">Piston</div>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <div className="text-stone-400 text-xs uppercase tracking-wider mb-1">Material</div>
              <div className="text-stone-800 text-sm">Precious resin</div>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <div className="text-stone-400 text-xs uppercase tracking-wider mb-1">Length</div>
              <div className="text-stone-800 text-sm">146mm (capped)</div>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <div className="text-stone-400 text-xs uppercase tracking-wider mb-1">Weight</div>
              <div className="text-stone-800 text-sm">32g</div>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <div className="text-stone-400 text-xs uppercase tracking-wider mb-1">Nib Sizes</div>
              <div className="text-stone-800 text-sm">EF, F, M, B, BB, Oblique</div>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <div className="text-stone-400 text-xs uppercase tracking-wider mb-1">MSRP</div>
              <div className="text-stone-800 text-sm">$995</div>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <div className="text-stone-400 text-xs uppercase tracking-wider mb-1">Since</div>
              <div className="text-stone-800 text-sm">1952</div>
            </div>
          </div>
        </section>

        {/* Nib Guide */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Which Nib Size Should You Choose?</h2>
          <div className="grid gap-3">
            {nibSizes.map((nib) => (
              <div key={nib.size} className="p-4 rounded border border-stone-200 bg-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-stone-900">{nib.size}</h3>
                    <p className="text-sm text-stone-500 mt-1">{nib.writing}</p>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-stone-100 rounded text-stone-500 shrink-0">{nib.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Pros and Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded border border-emerald-200 bg-emerald-50/30">
              <h3 className="font-semibold text-emerald-800 mb-3">Pros</h3>
              <ul className="space-y-2">
                {pros.map((p) => (
                  <li key={p} className="text-sm text-stone-600 flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded border border-red-200 bg-red-50/30">
              <h3 className="font-semibold text-red-800 mb-3">Cons</h3>
              <ul className="space-y-2">
                {cons.map((c) => (
                  <li key={c} className="text-sm text-stone-600 flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Alternative Pens */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Alternatives Worth Considering</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Link href="/brands/pilot/custom-823" className="p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-semibold text-stone-900 text-sm">Pilot Custom 823</h3>
              <p className="text-xs text-stone-500 mt-1">From $290 · Vacuum filler · 14k gold nib</p>
              <span className="text-xs text-blue-800 mt-2 block">See prices →</span>
            </Link>
            <Link href="/brands/sailor/pro-gear" className="p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-semibold text-stone-900 text-sm">Sailor Pro Gear (1911L)</h3>
              <p className="text-xs text-stone-500 mt-1">From $247 · Cartridge · 21k gold nib</p>
              <span className="text-xs text-blue-800 mt-2 block">See prices →</span>
            </Link>
            <Link href="/brands/pelikan/m800" className="p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-semibold text-stone-900 text-sm">Pelikan M800</h3>
              <p className="text-xs text-stone-500 mt-1">From $500 · Piston · 18k gold nib</p>
              <span className="text-xs text-blue-800 mt-2 block">See prices →</span>
            </Link>
          </div>
        </section>

        {/* Live Marketplaces */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Check Live Marketplaces</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="https://www.ebay.com/sch/i.html?_nkw=Montblanc+Meisterstuck+149+fountain+pen&_sop=15&LH_PrefLoc=1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded border border-stone-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all group">
              <span className="text-3xl">🏷️</span>
              <div className="flex-1">
                <div className="font-semibold text-stone-900 group-hover:text-blue-800 transition-colors">Search on eBay</div>
                <div className="text-xs text-stone-400">Current listings</div>
              </div>
            </a>
            <a href="https://www.ebay.com/sch/i.html?_nkw=Montblanc+149+fountain+pen&LH_Complete=1&LH_Sold=1&_sop=15" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded border border-stone-200 bg-white hover:border-purple-300 hover:shadow-sm transition-all group">
              <span className="text-3xl">📊</span>
              <div className="flex-1">
                <div className="font-semibold text-stone-900 group-hover:text-purple-700 transition-colors">eBay Sold Prices</div>
                <div className="text-xs text-stone-400">Actual sale data</div>
              </div>
            </a>
            <a href="https://www.amazon.com/s?k=Montblanc+Meisterstuck+149+fountain+pen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded border border-stone-200 bg-white hover:border-orange-300 hover:shadow-sm transition-all group">
              <span className="text-3xl">🛒</span>
              <div className="flex-1">
                <div className="font-semibold text-stone-900 group-hover:text-orange-700 transition-colors">Search on Amazon</div>
                <div className="text-xs text-stone-400">New &amp; used listings</div>
              </div>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How much does the Montblanc 149 cost?", a: "The MSRP is $995, but you can find it for $650–$945 depending on the retailer. Amazon often has the lowest prices for new listings, while authorized dealers like Goldspot offer full warranty." },
              { q: "Is the Montblanc 149 worth the price?", a: "For luxury pen enthusiasts, yes. The 149 offers exceptional build quality, an 18k gold nib with beautiful character, and strong resale value. However, if pure writing performance is all you care about, a $300 Pilot Custom 823 writes just as well." },
              { q: "What is the difference between the Montblanc 146 and 149?", a: "The 149 is the larger pen (146mm vs 131mm, 32g vs 25g). The 149 has a larger #9 nib while the 146 has a #6 nib. Both use piston filling and precious resin. The 149 is the flagship." },
              { q: "Where is the cheapest place to buy a Montblanc 149?", a: "Amazon typically offers the lowest new prices ($699–$800). eBay can be cheaper but check seller ratings carefully. Appelboom Pennen in Europe often has competitive prices with worldwide shipping." },
              { q: "What nib size should I get for the Montblanc 149?", a: "For everyday writing, the Medium is the most popular choice. The Fine is excellent for smaller handwriting, and the Broad is great for signatures. The 18k gold nib is softer than most, so even the Medium produces characterful lines." },
            ].map((faq) => (
              <div key={faq.q} className="p-4 rounded border border-stone-200 bg-white">
                <h3 className="font-semibold text-stone-900 text-sm mb-1">{faq.q}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-12 border-t border-stone-200 pt-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/pilot-custom-823-vs-sailor-pro-gear" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm bg-white">
              <span className="text-stone-900 font-semibold">Pilot Custom 823 vs Sailor Pro Gear →</span>
              <span className="block text-stone-400 mt-1">Two Japanese gold nib icons compared</span>
            </Link>
            <Link href="/blog/best-gold-nib-fountain-pens-under-200" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm bg-white">
              <span className="text-stone-900 font-semibold">Best Gold Nib Pens Under $200 →</span>
              <span className="block text-stone-400 mt-1">Affordable luxury without breaking the bank</span>
            </Link>
            <Link href="/blog/best-fountain-pens-under-300" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm bg-white">
              <span className="text-stone-900 font-semibold">Best Fountain Pens Under $300 →</span>
              <span className="block text-stone-400 mt-1">The sweet spot for flagship build quality</span>
            </Link>
            <Link href="/brands/montblanc" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm bg-white">
              <span className="text-stone-900 font-semibold">All Montblanc Models →</span>
              <span className="block text-stone-400 mt-1">146, 149, StarWalker, and more</span>
            </Link>
          </div>
        </section>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Montblanc 149 Price Comparison 2026 — Best Deals Across Retailers",
            description: "Compare Montblanc Meisterstuck 149 prices across Amazon, eBay, JetPens, Goulet Pens, and Goldspot.",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice", url: "https://penprice.vercel.app" },
            mainEntityOfPage: "https://penprice.vercel.app/blog/montblanc-149-price-comparison",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does the Montblanc 149 cost?",
                acceptedAnswer: { "@type": "Answer", text: "The MSRP is $995, but you can find it for $650–$945 depending on the retailer." },
              },
              {
                "@type": "Question",
                name: "Is the Montblanc 149 worth the price?",
                acceptedAnswer: { "@type": "Answer", text: "For luxury pen enthusiasts, yes. The 149 offers exceptional build quality, an 18k gold nib with beautiful character, and strong resale value." },
              },
              {
                "@type": "Question",
                name: "What is the difference between the Montblanc 146 and 149?",
                acceptedAnswer: { "@type": "Answer", text: "The 149 is the larger pen (146mm vs 131mm, 32g vs 25g). The 149 has a larger #9 nib while the 146 has a #6 nib." },
              },
              {
                "@type": "Question",
                name: "Where is the cheapest place to buy a Montblanc 149?",
                acceptedAnswer: { "@type": "Answer", text: "Amazon typically offers the lowest new prices ($699–$800). eBay can be cheaper but check seller ratings carefully." },
              },
              {
                "@type": "Question",
                name: "What nib size should I get for the Montblanc 149?",
                acceptedAnswer: { "@type": "Answer", text: "For everyday writing, the Medium is the most popular choice. The Fine is excellent for smaller handwriting, and the Broad is great for signatures." },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
