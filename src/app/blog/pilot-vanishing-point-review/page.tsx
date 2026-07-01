import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pilot Vanishing Point Review 2026 — The Retractable Fountain Pen | PenPrice",
  description:
    "In-depth Pilot Vanishing Point review: retractable 18k gold nib, click mechanism, writing experience, and live price comparison across Amazon, JetPens, Goulet Pens, and Goldspot Pens.",
  openGraph: {
    title: "Pilot Vanishing Point Review 2026 — Retractable Gold Nib",
    description: "The world's most famous retractable fountain pen reviewed with live prices.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilot Vanishing Point Review 2026",
    description: "Retractable 18k gold nib, click mechanism, and live price comparison.",
  },
};

interface RetailerPrice {
  retailer: string;
  price: number;
  url: string;
}

const retailers: RetailerPrice[] = [
  { retailer: "Amazon", price: 164.00, url: "https://www.amazon.com/s?k=Pilot+Vanishing+Point+fountain+pen" },
  { retailer: "JetPens", price: 184.00, url: "https://www.jetpens.com/search?q=Pilot+Vanishing+Point" },
  { retailer: "Goulet Pens", price: 184.00, url: "https://www.gouletpens.com/search?q=pilot+vanishing+point" },
  { retailer: "Goldspot Pens", price: 179.00, url: "https://www.goldspot.com/pilot/vanishing-point/" },
  { retailer: "Appelboom", price: 175.00, url: "https://appelboom.com/search?q=pilot+vanishing+point" },
];

export default function PilotVanishingPointReview() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article>
        <nav className="text-sm text-stone-400 mb-8">
          <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-500">Pilot Vanishing Point Review</span>
        </nav>

        <header className="mb-10">
          <p className="text-sm text-stone-400 mb-2">Updated July 2026</p>
          <h1 className="text-3xl font-bold text-stone-900 mb-4">
            Pilot Vanishing Point Review 2026
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            The Pilot Vanishing Point is the world&apos;s most famous retractable fountain pen. With a click mechanism that exposes a 18k gold nib, it combines fountain pen writing with ballpoint convenience. We tested it across six retailers to find the best deal.
          </p>
        </header>

        {/* Quick Specs */}
        <section className="mb-10 p-6 rounded-lg border border-stone-200 bg-white">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Quick Specs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-stone-400 block">Nib</span>
              <span className="font-medium text-stone-900">18k Gold</span>
            </div>
            <div>
              <span className="text-stone-400 block">Filling</span>
              <span className="font-medium text-stone-900">Cartridge / Converter</span>
            </div>
            <div>
              <span className="text-stone-400 block">Weight</span>
              <span className="font-medium text-stone-900">30g</span>
            </div>
            <div>
              <span className="text-stone-400 block">Length (capped)</span>
              <span className="font-medium text-stone-900">139mm</span>
            </div>
            <div>
              <span className="text-stone-400 block">Material</span>
              <span className="font-medium text-stone-900">Brass body, resin trim</span>
            </div>
            <div>
              <span className="text-stone-400 block">Nib Sizes</span>
              <span className="font-medium text-stone-900">EF, F, FM, M, B</span>
            </div>
            <div>
              <span className="text-stone-400 block">Mechanism</span>
              <span className="font-medium text-stone-900">Retractable (click)</span>
            </div>
            <div>
              <span className="text-stone-400 block">MSRP</span>
              <span className="font-medium text-stone-900">$184</span>
            </div>
          </div>
        </section>

        {/* Price Comparison */}
        <section className="mb-10 overflow-x-auto">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Price Comparison</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 text-left">
                <th className="py-2 pr-4 font-semibold text-stone-700">Retailer</th>
                <th className="py-2 pr-4 font-semibold text-stone-700">Price</th>
                <th className="py-2 font-semibold text-stone-700">Link</th>
              </tr>
            </thead>
            <tbody>
              {retailers.map((r) => (
                <tr key={r.retailer} className="border-b border-stone-100">
                  <td className="py-2 pr-4 font-medium text-stone-900">{r.retailer}</td>
                  <td className="py-2 pr-4 text-stone-600">${r.price.toFixed(2)}</td>
                  <td className="py-2">
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">
                      Check Price →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* The Retractable Mechanism */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">The Retractable Mechanism</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            The Vanishing Point&apos;s defining feature is its retractable nib. A click of the knock mechanism extends or retracts the nib, just like a ballpoint pen. This means you never have to uncap the pen to write, which is a genuine game-changer for quick notes.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            The mechanism uses a spring-loaded trap door that seals the nib when retracted. This prevents the nib from drying out, even after days of non-use. The seal isn&apos;t as airtight as a screw cap (like the Lamy 2000), but it&apos;s remarkably effective for a click mechanism.
          </p>
          <p className="text-stone-600 leading-relaxed">
            The trade-off is that the nib is mounted in a fixed position on the clip side of the barrel. If you rotate the pen while writing, the nib won&apos;t be oriented correctly. You need to learn to hold the Vanishing Point with the clip facing up. Most people adapt within a day.
          </p>
        </section>

        {/* The Nib */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">The 18k Gold Nib</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Pilot&apos;s 18k gold nibs are among the smoothest in the world. The Vanishing Point uses a slightly smaller #5 nib (compared to the #15 in the Custom 823), but the writing experience is exceptional. The Fine nib writes at a true Japanese Fine (~0.3mm), which is finer than a Western Fine.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Best For</h3>
              <p className="text-stone-500 text-sm">Quick notes, journaling, everyday carry, one-handed writing, pocket carry, professionals who need to jot notes frequently throughout the day.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Not Ideal For</h3>
              <p className="text-stone-500 text-sm">Long writing sessions (the barrel is narrow), people who rotate the pen while writing, flex nib enthusiasts, calligraphy.</p>
            </div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Pros and Cons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-green-200 bg-green-50">
              <h3 className="font-bold text-green-800 mb-2">✅ Pros</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Retractable nib — one-handed operation</li>
                <li>• 18k gold nib writes incredibly smooth</li>
                <li>• Clip placement guides grip position</li>
                <li>• Nib won&apos;t dry out when retracted</li>
                <li>• Compact, professional appearance</li>
                <li>• Multiple body colors and finishes</li>
              </ul>
            </div>
            <div className="p-4 rounded border border-red-200 bg-red-50">
              <h3 className="font-bold text-red-800 mb-2">❌ Cons</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Nib fixed on clip side (rotation issue)</li>
                <li>• Narrow barrel — less comfortable for long sessions</li>
                <li>• Converter capacity is small (0.4ml)</li>
                <li>• The click mechanism adds weight</li>
                <li>• Premium price for a cartridge pen</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VS Comparisons */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">How It Compares</h2>
          <div className="space-y-3">
            <Link href="/blog/pilot-custom-823-review" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Pilot Custom 823 vs Vanishing Point →</span>
              <span className="block text-stone-400 mt-1">Vacuum filler vs retractable — two very different Pilot flagships</span>
            </Link>
            <Link href="/blog/lamy-2000-vs-pilot-custom-823" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Endgame Fountain Pens →</span>
              <span className="block text-stone-400 mt-1">Where the Vanishing Point fits in the premium pen landscape</span>
            </Link>
            <Link href="/blog/best-fountain-pens-for-journaling" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Fountain Pens for Journaling →</span>
              <span className="block text-stone-400 mt-1">The Vanishing Point is a top pick for daily journal writers</span>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">How long does the nib last before needing to retract?</h3>
              <p className="text-stone-500">Pilot rates the mechanism for 50,000+ clicks. In practice, the nib lasts years before any degradation. The spring is the most replaceable part.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Can you replace the nib?</h3>
              <p className="text-stone-500">Yes. Pilot sells replacement nib units separately (~$80-100). The nib unit slides out of the barrel and can be swapped in seconds. You can also buy a Fine nib unit to swap with your Medium.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Does it post (cap on back)?</h3>
              <p className="text-stone-500">No. The Vanishing Point has no cap to post. The retractable mechanism eliminates the need. The pen is designed to write at its natural length (~5.5 inches uncapped).</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">More Fountain Pen Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/pilot-custom-823-review" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Pilot Custom 823 Review →</span>
              <span className="block text-stone-400 mt-1">The best vacuum-fill fountain pen</span>
            </Link>
            <Link href="/blog/best-gold-nib-fountain-pens-under-200" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Gold Nibs Under $200 →</span>
              <span className="block text-stone-400 mt-1">Affordable gold nibs from Pilot, Sailor, Platinum, and more</span>
            </Link>
            <Link href="/blog/best-fountain-pens-for-journaling" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Pens for Journaling →</span>
              <span className="block text-stone-400 mt-1">The Vanishing Point is a top daily journal pen</span>
            </Link>
            <Link href="/blog/best-fountain-pens-for-travel" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Travel Fountain Pens →</span>
              <span className="block text-stone-400 mt-1">Pocket-friendly pens for on-the-go writing</span>
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
            headline: "Pilot Vanishing Point Review 2026",
            description: "In-depth review of the Pilot Vanishing Point retractable fountain pen with live price comparison across 5 retailers.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            mainEntityOfPage: "https://penprice.vercel.app/blog/pilot-vanishing-point-review",
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
                name: "How long does the nib last before needing to retract?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pilot rates the mechanism for 50,000+ clicks. In practice, the nib lasts years before any degradation.",
                },
              },
              {
                "@type": "Question",
                name: "Can you replace the nib on the Pilot Vanishing Point?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Pilot sells replacement nib units separately (~$80-100). The nib unit slides out of the barrel and can be swapped in seconds.",
                },
              },
              {
                "@type": "Question",
                name: "Does the Pilot Vanishing Point post?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. The Vanishing Point has no cap to post. The retractable mechanism eliminates the need.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
