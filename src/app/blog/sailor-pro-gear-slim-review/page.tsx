import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sailor Pro Gear Slim Review 2026 — The Perfect Entry to Sailor Gold Nibs? | PenPrice",
  description:
    "Sailor Pro Gear Slim review with price comparison. 14K gold nib, compact size, 21 colorways. Compare prices across Amazon, JetPens, Goulet Pens, and Goldspot Pens. Is the Pro Gear Slim worth it in 2026?",
  openGraph: {
    title: "Sailor Pro Gear Slim Review 2026 — Gold Nib Under $200",
    description:
      "Is the Sailor Pro Gear Slim the best entry point to Sailor's legendary gold nibs? Full review with price comparison across 4 retailers.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sailor Pro Gear Slim Review 2026 — Gold Nib Under $200",
    description:
      "Sailor Pro Gear Slim: 14K gold nib, 21 colorways, under $200. Full review and price comparison.",
  },
};

export default function SailorProGearSlimReviewPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: "Sailor Pro Gear Slim",
      brand: { "@type": "Brand", name: "Sailor" },
      category: "Fountain Pen",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: 148,
        highPrice: 216,
        priceCurrency: "USD",
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 4.5,
      bestRating: 5,
    },
    author: { "@type": "Organization", name: "PenPrice" },
    datePublished: "2026-07-01",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the Sailor Pro Gear Slim good for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Pro Gear Slim is an excellent choice for fountain pen users ready to try a gold nib. At around $150-200, it's one of the most affordable ways to experience Sailor's legendary nib feel. However, if you've never used a fountain pen before, start with a Pilot Metropolitan ($18) or Lamy Safari ($30) first.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Pro Gear Slim and Pro Gear?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Pro Gear Slim is a compact version of the full-size Pro Gear. The Slim is 120mm capped vs 134mm for the full-size. The Slim uses a smaller converter (Slide Converter) while the full-size uses a standard converter. Both share the same 14K gold nib and flat-top design. The Slim is more portable and often preferred by those with smaller hands.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Sailor Pro Gear Slim take standard cartridges?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Pro Gear Slim uses Sailor proprietary cartridges and converters. It does NOT accept international standard cartridges. You can use Sailor cartridges or the included Sailor Slide Converter for bottled ink.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-400 mb-8">
          <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-800 transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-500">Sailor Pro Gear Slim Review</span>
        </nav>

        <article>
          <header className="mb-10">
            <p className="text-blue-800 text-sm font-medium mb-2">Review — Updated July 2026</p>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Sailor Pro Gear Slim Review 2026
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed">
              The Sailor Pro Gear Slim is often called the gateway to gold nibs. With a 14K gold nib, 21+ colorways, and a price under $200, it&apos;s one of the most compelling entry points into Sailor&apos;s legendary nib lineup. But is the &ldquo;Slim&rdquo; a compromise or a feature? Here&apos;s everything you need to know.
            </p>
          </header>

          {/* TL;DR */}
          <div className="bg-white border border-stone-200 rounded p-6 mb-10">
            <h2 className="text-lg font-bold text-stone-900 mb-3">TL;DR</h2>
            <ul className="space-y-2 text-sm text-stone-700">
              <li><strong className="text-stone-900">The Sailor Pro Gear Slim</strong> is a compact, flat-top fountain pen with a 14K gold nib. Prices range from $148 to $216 depending on colorway and retailer.</li>
              <li><strong className="text-stone-900">Best for:</strong> Anyone wanting to try Sailor&apos;s gold nib feel without spending $300+. Great for journaling, note-taking, and everyday writing.</li>
              <li><strong className="text-stone-900">Watch out for:</strong> Sailor nibs write finer than Western nibs (Fine = Extra Fine in Western sizing). The Slide Converter holds less ink than a standard converter.</li>
              <li><strong className="text-stone-900">Bottom line:</strong> The best sub-$200 gold nib pen. The nib feel alone is worth the price.</li>
            </ul>
          </div>

          {/* Price Comparison */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Price Comparison — Where to Buy</h2>
            <p className="text-stone-500 mb-4 text-sm">
              Prices vary significantly by colorway. The classic Black/Gold is the most affordable; limited editions cost more.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-stone-700">Retailer</th>
                    <th className="text-left p-3 font-semibold text-stone-700">Black/Gold</th>
                    <th className="text-left p-3 font-semibold text-stone-700">Color Editions</th>
                    <th className="text-left p-3 font-semibold text-stone-700">Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">Amazon</td>
                    <td className="p-3 text-stone-900 font-mono">$148</td>
                    <td className="p-3 text-stone-900 font-mono">$160–$200</td>
                    <td className="p-3"><a href="https://www.amazon.com/s?k=Sailor+Pro+Gear+Slim" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">JetPens</td>
                    <td className="p-3 text-stone-900 font-mono">$158</td>
                    <td className="p-3 text-stone-900 font-mono">$158–$216</td>
                    <td className="p-3"><a href="https://www.jetpens.com/Sailor-Pro-Gear-Slim-Fountain-Pen/ct/5162" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">Goulet Pens</td>
                    <td className="p-3 text-stone-900 font-mono">$162</td>
                    <td className="p-3 text-stone-900 font-mono">$162–$216</td>
                    <td className="p-3"><a href="https://www.gouletpens.com/collections/sailor-pro-gear-slim" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">Goldspot Pens</td>
                    <td className="p-3 text-stone-900 font-mono">$155</td>
                    <td className="p-3 text-stone-900 font-mono">$155–$210</td>
                    <td className="p-3"><a href="https://www.goldspot.com/sailor/pro-gear-slim/" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Specs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
                <tbody className="divide-y divide-stone-200">
                  <tr><td className="p-3 text-stone-500 bg-stone-50 w-1/3 font-medium">Nib</td><td className="p-3 text-stone-900">14K gold, bicolor (gold/rhodium)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Nib Sizes</td><td className="p-3 text-stone-900">Extra Fine, Fine, Medium, Broad, Zoom, Cross Point</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Length (capped)</td><td className="p-3 text-stone-900">4.7 inches (120mm)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Length (posted)</td><td className="p-3 text-stone-900">5.3 inches (135mm)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Weight</td><td className="p-3 text-stone-900">16.5g</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Filling System</td><td className="p-3 text-stone-900">Cartridge / Slide Converter (proprietary)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Material</td><td className="p-3 text-stone-900">Resin</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Cap</td><td className="p-3 text-stone-900">Screw cap</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">MSRP</td><td className="p-3 text-stone-900">$196 (varies by colorway)</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* The Nib */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">The Nib: Where the Magic Is</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Sailor nibs are famous for a reason. The 14K gold nib on the Pro Gear Slim has a signature feedback that&apos;s unlike any other fountain pen. It&apos;s not scratchy. It&apos;s not smooth like a Pilot gold nib. It&apos;s something in between: a gentle, paper-like resistance that many describe as &ldquo;writing with a pencil.&rdquo;
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The nib is available in a wide range of sizes, from Extra Fine to the unique Zoom and Cross Point options. The Fine nib is particularly popular for everyday writing, though it runs notably finer than Western Fine nibs. If you&apos;re used to Lamy or Pelikan sizing, expect Sailor Fine to feel closer to Western Extra Fine.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Sailor also offers specialty nibs like the Music nib (3 tines, creates line variation) and the King of Pen-sized specialty grinds. These are harder to find but worth seeking out if you want something truly unique.
            </p>
          </section>

          {/* Pros/Cons */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Pros and Cons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded p-5">
                <h3 className="font-bold text-green-800 mb-3">✅ Pros</h3>
                <ul className="space-y-2 text-sm text-green-900">
                  <li>Legendary Sailor nib feel at an accessible price</li>
                  <li>21+ colorways to choose from (constant new releases)</li>
                  <li>Compact size is great for pocket carry or smaller hands</li>
                  <li>Excellent cap seal keeps ink from drying out</li>
                  <li>14K gold nib with impressive line variation</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded p-5">
                <h3 className="font-bold text-red-800 mb-3">❌ Cons</h3>
                <ul className="space-y-2 text-sm text-red-900">
                  <li>Sailor nibs run fine — Western Fine users may find them too thin</li>
                  <li>Proprietary cartridges and converters (not international standard)</li>
                  <li>Slide Converter holds only 0.4ml of ink</li>
                  <li>Resin body can feel plasticky at this price point</li>
                  <li>Converter not included with all retailers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Who Should Buy the Sailor Pro Gear Slim?</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              The Pro Gear Slim is ideal for fountain pen enthusiasts who want to experience Sailor&apos;s gold nib without committing to the full-size Pro Gear ($250+) or the King of Pens ($500+). It&apos;s particularly popular among:
            </p>
            <ul className="space-y-2 text-sm text-stone-700 mb-4">
              <li>• <strong className="text-stone-900">Journal writers</strong> who want a reliable, low-fatigue pen for long writing sessions</li>
              <li>• <strong className="text-stone-900">Collectors</strong> who love the colorway options (Sailor releases new ones frequently)</li>
              <li>• <strong className="text-stone-900">Note-takers</strong> who prefer a lightweight, compact pen</li>
              <li>• <strong className="text-stone-900">Gold nib upgraders</strong> moving from steel nibs for the first time</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <details className="bg-stone-50 rounded p-4 group">
                <summary className="font-medium text-stone-900 cursor-pointer list-none flex items-center justify-between">
                  Is the Sailor Pro Gear Slim good for beginners?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">
                  The Pro Gear Slim is an excellent choice for fountain pen users ready to try a gold nib. At around $150-200, it&apos;s one of the most affordable ways to experience Sailor&apos;s legendary nib feel. However, if you&apos;ve never used a fountain pen before, start with a <Link href="/blog/best-fountain-pens-for-beginners" className="text-blue-700 hover:text-blue-900">Pilot Metropolitan ($18)</Link> or <Link href="/blog/kaweco-sport-vs-lamy-safari" className="text-blue-700 hover:text-blue-900">Lamy Safari ($30)</Link> first.
                </p>
              </details>

              <details className="bg-stone-50 rounded p-4 group">
                <summary className="font-medium text-stone-900 cursor-pointer list-none flex items-center justify-between">
                  What is the difference between Pro Gear Slim and Pro Gear?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">
                  The Pro Gear Slim is a compact version of the full-size Pro Gear. The Slim is 120mm capped vs 134mm for the full-size. The Slim uses a smaller Slide Converter while the full-size uses a standard converter. Both share the same 14K gold nib and flat-top design. The Slim is more portable and often preferred by those with smaller hands.
                </p>
              </details>

              <details className="bg-stone-50 rounded p-4 group">
                <summary className="font-medium text-stone-900 cursor-pointer list-none flex items-center justify-between">
                  Does the Sailor Pro Gear Slim take standard cartridges?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">
                  The Pro Gear Slim uses Sailor proprietary cartridges and converters. It does NOT accept international standard cartridges. You can use Sailor cartridges or the included Sailor Slide Converter for bottled ink. Check our <Link href="/blog/fountain-pen-converters-explained" className="text-blue-700 hover:text-blue-900">converter guide</Link> for more details.
                </p>
              </details>
            </div>
          </section>

          {/* Related Posts */}
          <section className="border-t border-stone-200 pt-8 mt-10">
            <h2 className="text-lg font-bold text-stone-900 mb-4">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/blog/pilot-custom-823-vs-sailor-pro-gear" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">Pilot Custom 823 vs Sailor Pro Gear</span>
                <span className="text-stone-500">The endgame showdown</span>
              </Link>
              <Link href="/blog/sailor-pro-gear-vs-pilot-custom-74" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">Sailor Pro Gear vs Pilot Custom 74</span>
                <span className="text-stone-500">Two gold nib icons compared</span>
              </Link>
              <Link href="/blog/best-gold-nib-fountain-pens-under-200" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">Best Gold Nib Fountain Pens Under $200</span>
                <span className="text-stone-500">More gold nib options</span>
              </Link>
              <Link href="/blog/best-fountain-pens-for-journaling" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">Best Fountain Pens for Journaling</span>
                <span className="text-stone-500">Pens built for long writing sessions</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
