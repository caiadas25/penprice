import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kaweco Sport Review 2026 — The Original Pocket Fountain Pen | PenPrice",
  description:
    "Kaweco Sport review with price comparison. Since 1930, the iconic octagonal pocket pen. Compare prices across Amazon, JetPens, Goulet Pens, and Goldspot Pens. Is the Kaweco Sport worth it in 2026?",
  openGraph: {
    title: "Kaweco Sport Review 2026 — The Original Pocket Pen",
    description:
      "Is the Kaweco Sport the best pocket fountain pen? Full review with price comparison across 4 retailers.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaweco Sport Review 2026 — The Original Pocket Pen",
    description:
      "Kaweco Sport: since 1930, the octagonal pocket pen. Full review and price comparison.",
  },
};

export default function KawecoSportReviewPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: "Kaweco Sport",
      brand: { "@type": "Brand", name: "Kaweco" },
      category: "Fountain Pen",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: 22,
        highPrice: 115,
        priceCurrency: "USD",
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 4.4,
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
        name: "Is the Kaweco Sport good for everyday carry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Kaweco Sport is one of the best everyday carry fountain pens. At 4.1 inches capped, it fits in any pocket. The screw cap prevents accidental opening, and the lightweight body (12g in plastic) is barely noticeable. Post the cap on the back and it becomes a full-size pen.",
        },
      },
      {
        "@type": "Question",
        name: "What cartridges does the Kaweco Sport use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Kaweco Sport uses the international standard short cartridge. This means you can use cartridges from Kaweco, Diamine, Pelikan, and many other brands. For bottled ink, you'll need a standard international converter (sold separately) or the Kaweco squeeze converter.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Kaweco Sport and AL Sport?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The standard Kaweco Sport is made of ABS plastic (12g). The AL Sport is made of aluminum (28g) with a more premium feel. Both share the same design, nib, and dimensions. The Sport Classic is plastic, the Sport Skyline has pastel colors, and the Sport Nostalgia has a vintage clip. The AL Sport comes in multiple metallic finishes.",
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
          <span className="text-stone-500">Kaweco Sport Review</span>
        </nav>

        <article>
          <header className="mb-10">
            <p className="text-blue-800 text-sm font-medium mb-2">Review — Updated July 2026</p>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Kaweco Sport Review 2026
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed">
              The Kaweco Sport has been the world&apos;s most popular pocket fountain pen since 1930. Its octagonal cap, compact size, and lightweight design make it the go-to pen for everyday carry. But in 2026, with modern competitors like the TWSBI Diamond 580R and the Pilot Prera, is the Sport still relevant? Here&apos;s everything you need to know.
            </p>
          </header>

          {/* TL;DR */}
          <div className="bg-white border border-stone-200 rounded p-6 mb-10">
            <h2 className="text-lg font-bold text-stone-900 mb-3">TL;DR</h2>
            <ul className="space-y-2 text-sm text-stone-700">
              <li><strong className="text-stone-900">The Kaweco Sport</strong> is a 4.1-inch pocket fountain pen with a screw cap and steel nib. Prices range from $22 (plastic) to $115 (brass) depending on material.</li>
              <li><strong className="text-stone-900">Best for:</strong> Everyday carry, journaling on the go, anyone who wants a full-size writing experience in a pocket-friendly package.</li>
              <li><strong className="text-stone-900">Watch out for:</strong> The plastic body may feel cheap at $22, and the converter is sold separately. The nib is good but not as smooth as Pilot or Lamy.</li>
              <li><strong className="text-stone-900">Bottom line:</strong> The definitive pocket fountain pen. If you want to carry a fountain pen everywhere, this is it.</li>
            </ul>
          </div>

          {/* Price Comparison */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Price Comparison — Where to Buy</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-stone-700">Retailer</th>
                    <th className="text-left p-3 font-semibold text-stone-700">Plastic</th>
                    <th className="text-left p-3 font-semibold text-stone-700">AL Sport</th>
                    <th className="text-left p-3 font-semibold text-stone-700">Brass</th>
                    <th className="text-left p-3 font-semibold text-stone-700">Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">Amazon</td>
                    <td className="p-3 text-stone-900 font-mono">$22</td>
                    <td className="p-3 text-stone-900 font-mono">$62</td>
                    <td className="p-3 text-stone-900 font-mono">$108</td>
                    <td className="p-3"><a href="https://www.amazon.com/s?k=Kaweco+Sport+fountain+pen" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">JetPens</td>
                    <td className="p-3 text-stone-900 font-mono">$25</td>
                    <td className="p-3 text-stone-900 font-mono">$68</td>
                    <td className="p-3 text-stone-900 font-mono">$115</td>
                    <td className="p-3"><a href="https://www.jetpens.com/Kaweco-Sport-Fountain-Pen/ct/1232" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">Goulet Pens</td>
                    <td className="p-3 text-stone-900 font-mono">$25</td>
                    <td className="p-3 text-stone-900 font-mono">$68</td>
                    <td className="p-3 text-stone-900 font-mono">$115</td>
                    <td className="p-3"><a href="https://www.gouletpens.com/collections/kaweco-sport" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">Goldspot Pens</td>
                    <td className="p-3 text-stone-900 font-mono">$24</td>
                    <td className="p-3 text-stone-900 font-mono">$65</td>
                    <td className="p-3 text-stone-900 font-mono">$112</td>
                    <td className="p-3"><a href="https://www.goldspot.com/kaweco/sport/" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
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
                  <tr><td className="p-3 text-stone-500 bg-stone-50 w-1/3 font-medium">Nib</td><td className="p-3 text-stone-900">Steel, Kaweco Bock #5</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Nib Sizes</td><td className="p-3 text-stone-900">EF, F, M, B, BB, 1.1, 1.5, 2.3</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Length (capped)</td><td className="p-3 text-stone-900">4.1 inches (105mm)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Length (posted)</td><td className="p-3 text-stone-900">5.2 inches (133mm)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Weight</td><td className="p-3 text-stone-900">12g (plastic) / 28g (AL) / 56g (Brass)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Filling System</td><td className="p-3 text-stone-900">Cartridge / Converter (international standard)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Material</td><td className="p-3 text-stone-900">ABS plastic / Aluminum / Brass / AC</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Cap</td><td className="p-3 text-stone-900">Screw cap</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">MSRP</td><td className="p-3 text-stone-900">$22 (plastic) / $65 (AL) / $115 (Brass)</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* The Design */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">The Design: Pocket-Sized Perfection</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              The Kaweco Sport&apos;s octagonal cap is one of the most recognizable designs in fountain pens. At 4.1 inches capped, it fits in any pocket, coin purse, or small bag. Post the cap on the back and it becomes a full-size 5.2-inch pen that writes like any other fountain pen.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The plastic Sport is lightweight (12g) and comes in dozens of colors. The AL Sport (aluminum, 28g) has a more premium feel with metallic finishes. The Brass Sport (56g) is heavy and develops a beautiful patina. There&apos;s a Kaweco Sport for every style and budget.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The screw cap provides a secure seal that won&apos;t pop open in your pocket. It also means you need two hands to open it, which some people find inconvenient. The octagonal shape prevents the pen from rolling off your desk.
            </p>
          </section>

          {/* Pros/Cons */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Pros and Cons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded p-5">
                <h3 className="font-bold text-green-800 mb-3">✅ Pros</h3>
                <ul className="space-y-2 text-sm text-green-900">
                  <li>True pocket pen — 4.1 inches capped</li>
                  <li>Posts to full-size for comfortable writing</li>
                  <li>International standard cartridges (wide ink selection)</li>
                  <li>Multiple materials: plastic, aluminum, brass</li>
                  <li>Dozens of color options</li>
                  <li>Since 1930 — iconic, timeless design</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded p-5">
                <h3 className="font-bold text-red-800 mb-3">❌ Cons</h3>
                <ul className="space-y-2 text-sm text-red-900">
                  <li>Converter sold separately ($5-8)</li>
                  <li>Plastic body may feel cheap at this price</li>
                  <li>Screw cap requires two hands to open</li>
                  <li>Nib is good but not as smooth as Pilot or Lamy</li>
                  <li>Small ink capacity (~0.7ml cartridge)</li>
                  <li>Posted cap makes it a standard pen (loses pocket advantage)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <details className="bg-stone-50 rounded p-4 group">
                <summary className="font-medium text-stone-900 cursor-pointer list-none flex items-center justify-between">
                  Is the Kaweco Sport good for everyday carry?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">
                  The Kaweco Sport is one of the best everyday carry fountain pens. At 4.1 inches capped, it fits in any pocket. The screw cap prevents accidental opening, and the lightweight body (12g in plastic) is barely noticeable. Post the cap on the back and it becomes a full-size pen. See our <Link href="/blog/best-fountain-pens-for-travel" className="text-blue-700 hover:text-blue-900">travel pen guide</Link> for more options.
                </p>
              </details>

              <details className="bg-stone-50 rounded p-4 group">
                <summary className="font-medium text-stone-900 cursor-pointer list-none flex items-center justify-between">
                  What cartridges does the Kaweco Sport use?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">
                  The Kaweco Sport uses the international standard short cartridge. This means you can use cartridges from Kaweco, Diamine, Pelikan, and many other brands. For bottled ink, you&apos;ll need a standard international converter (sold separately) or the Kaweco squeeze converter. Check our <Link href="/blog/fountain-pen-converters-explained" className="text-blue-700 hover:text-blue-900">converter guide</Link> for details.
                </p>
              </details>

              <details className="bg-stone-50 rounded p-4 group">
                <summary className="font-medium text-stone-900 cursor-pointer list-none flex items-center justify-between">
                  What is the difference between Kaweco Sport and AL Sport?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">
                  The standard Kaweco Sport is made of ABS plastic (12g). The AL Sport is made of aluminum (28g) with a more premium feel. Both share the same design, nib, and dimensions. The Sport Classic is plastic, the Sport Skyline has pastel colors, and the Sport Nostalgia has a vintage clip. The AL Sport comes in multiple metallic finishes.
                </p>
              </details>
            </div>
          </section>

          {/* Related Posts */}
          <section className="border-t border-stone-200 pt-8 mt-10">
            <h2 className="text-lg font-bold text-stone-900 mb-4">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/blog/kaweco-sport-vs-lamy-safari" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">Kaweco Sport vs Lamy Safari</span>
                <span className="text-stone-500">Pocket pen vs full-size classic</span>
              </Link>
              <Link href="/blog/twsbi-eco-vs-kaweco-sport" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">TWSBI Eco vs Kaweco Sport</span>
                <span className="text-stone-500">Piston filler vs pocket pen</span>
              </Link>
              <Link href="/blog/best-fountain-pens-for-travel" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">Best Fountain Pens for Travel</span>
                <span className="text-stone-500">Compact pens for adventure</span>
              </Link>
              <Link href="/blog/best-fountain-pens-under-30" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">Best Fountain Pens Under $30</span>
                <span className="text-stone-500">Budget options compared</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
