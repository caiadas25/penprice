import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pilot Metropolitan Review 2026 — Best Beginner Fountain Pen? | PenPrice",
  description:
    "Pilot Metropolitan review with price comparison. The $18 fountain pen that started millions of writers. Compare prices across Amazon, JetPens, Goulet Pens, and Goldspot Pens. Is it still the best beginner pen in 2026?",
  openGraph: {
    title: "Pilot Metropolitan Review 2026 — The $18 Legend",
    description:
      "Is the Pilot Metropolitan still the best beginner fountain pen? Full review with price comparison across 4 retailers.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilot Metropolitan Review 2026 — Best Beginner Fountain Pen",
    description:
      "Pilot Metropolitan: the $18 fountain pen that started millions of writers. Full review and price comparison.",
  },
};

export default function PilotMetropolitanReviewPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: "Pilot Metropolitan",
      brand: { "@type": "Brand", name: "Pilot" },
      category: "Fountain Pen",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: 17,
        highPrice: 22,
        priceCurrency: "USD",
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 4.7,
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
        name: "Is the Pilot Metropolitan good for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Pilot Metropolitan is widely considered the best beginner fountain pen. At around $18, it offers a smooth steel nib, metal body, and reliable ink flow. It's the most recommended starter pen in the fountain pen community.",
        },
      },
      {
        "@type": "Question",
        name: "What ink cartridges does the Pilot Metropolitan use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Pilot Metropolitan uses Pilot proprietary cartridges and the CON-40 converter. It does NOT accept international standard cartridges. You can also use it as an eyedropper filler for maximum ink capacity.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a Pilot Metropolitan last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Pilot Metropolitan is a very durable pen with a brass body. With proper care, it can last decades. The most common wear is on the finish, which may show brassing over time. The nib is replaceable if damaged.",
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
          <span className="text-stone-500">Pilot Metropolitan Review</span>
        </nav>

        <article>
          <header className="mb-10">
            <p className="text-blue-800 text-sm font-medium mb-2">Review — Updated July 2026</p>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Pilot Metropolitan Review 2026
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed">
              The Pilot Metropolitan has been the world&apos;s most recommended beginner fountain pen for over a decade. At around $18, it offers a smooth steel nib, a brass body that feels premium, and Pilot&apos;s legendary ink quality. But in 2026, with competitors like the Lamy Safari, TWSBI Eco, and Kaweco Sport, is the Metropolitan still the best place to start? Here&apos;s everything you need to know.
            </p>
          </header>

          {/* TL;DR */}
          <div className="bg-white border border-stone-200 rounded p-6 mb-10">
            <h2 className="text-lg font-bold text-stone-900 mb-3">TL;DR</h2>
            <ul className="space-y-2 text-sm text-stone-700">
              <li><strong className="text-stone-900">The Pilot Metropolitan</strong> is a $18 metal-body fountain pen with a smooth Japanese steel nib. It&apos;s the gold standard for beginner fountain pens.</li>
              <li><strong className="text-stone-900">Best for:</strong> First-time fountain pen users, students, anyone who wants a reliable everyday pen without spending much.</li>
              <li><strong className="text-stone-900">Watch out for:</strong> Proprietary cartridges (not international standard), the CON-40 converter holds only 0.4ml, and theFine nib runs very fine by Western standards.</li>
              <li><strong className="text-stone-900">Bottom line:</strong> Still the best pen under $20. Nothing else at this price comes close to the nib quality.</li>
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
                    <th className="text-left p-3 font-semibold text-stone-700">Price</th>
                    <th className="text-left p-3 font-semibold text-stone-700">Colors</th>
                    <th className="text-left p-3 font-semibold text-stone-700">Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">Amazon</td>
                    <td className="p-3 text-stone-900 font-mono">$17–$20</td>
                    <td className="p-3 text-stone-500 text-xs">10+ colors</td>
                    <td className="p-3"><a href="https://www.amazon.com/s?k=Pilot+Metropolitan+fountain+pen" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">JetPens</td>
                    <td className="p-3 text-stone-900 font-mono">$18</td>
                    <td className="p-3 text-stone-500 text-xs">8+ colors</td>
                    <td className="p-3"><a href="https://www.jetpens.com/Pilot-Metropolitan-Fountain-Pen/ct/1432" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">Goulet Pens</td>
                    <td className="p-3 text-stone-900 font-mono">$18</td>
                    <td className="p-3 text-stone-500 text-xs">6+ colors</td>
                    <td className="p-3"><a href="https://www.gouletpens.com/collections/pilot-metropolitan" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">Goldspot Pens</td>
                    <td className="p-3 text-stone-900 font-mono">$18</td>
                    <td className="p-3 text-stone-500 text-xs">6+ colors</td>
                    <td className="p-3"><a href="https://www.goldspot.com/pilot/mr-metropolitan/" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
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
                  <tr><td className="p-3 text-stone-500 bg-stone-50 w-1/3 font-medium">Nib</td><td className="p-3 text-stone-900">Steel, Pilot standard</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Nib Sizes</td><td className="p-3 text-stone-900">Extra Fine, Fine, Medium</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Length (capped)</td><td className="p-3 text-stone-900">5.5 inches (141mm)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Length (posted)</td><td className="p-3 text-stone-900">5.9 inches (150mm)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Weight</td><td className="p-3 text-stone-900">27g</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Filling System</td><td className="p-3 text-stone-900">Cartridge / Converter (CON-40) / Eyedropper</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Material</td><td className="p-3 text-stone-900">Brass body with stainless steel clip</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Cap</td><td className="p-3 text-stone-900">Snap cap</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">MSRP</td><td className="p-3 text-stone-900">$18</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* The Nib */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">The Nib: Punching Way Above Its Weight</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              The Metropolitan&apos;s steel nib is the reason it&apos;s been the top beginner recommendation for over a decade. Pilot makes their own nibs in-house, and the quality shows even at this price point. The Fine nib is smooth, consistent, and writes with zero scratchiness. It&apos;s often compared to pens costing 3-4x more.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The Japanese nib sizing runs finer than Western equivalents. Pilot Fine is closer to a Western Extra Fine. If you&apos;re used to Lamy or Pelikan sizing, go up a size. The Medium is a good everyday writer for most people.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              One limitation: you can&apos;t swap nibs like on a Lamy Safari. The nib is friction-fit and Pilot doesn&apos;t sell replacement nibs separately. If you want to try different nib sizes, you&apos;ll need to buy a second Metropolitan.
            </p>
          </section>

          {/* Pros/Cons */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Pros and Cons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded p-5">
                <h3 className="font-bold text-green-800 mb-3">✅ Pros</h3>
                <ul className="space-y-2 text-sm text-green-900">
                  <li>Incredible nib quality for under $20</li>
                  <li>Brass body feels premium and durable</li>
                  <li>Snap cap is quick to deploy</li>
                  <li>Available in 10+ colorways</li>
                  <li>Can be used as an eyedropper filler</li>
                  <li>Includes a squeeze converter in the box</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded p-5">
                <h3 className="font-bold text-red-800 mb-3">❌ Cons</h3>
                <ul className="space-y-2 text-sm text-red-900">
                  <li>Proprietary cartridges (not international standard)</li>
                  <li>CON-40 converter holds only 0.4ml of ink</li>
                  <li>Nibs are not swappable</li>
                  <li>Japanese sizing runs fine (Fine = Western EF)</li>
                  <li>Snap cap can loosen over time</li>
                  <li>Brass body is heavier than plastic alternatives</li>
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
                  Is the Pilot Metropolitan good for beginners?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">
                  The Pilot Metropolitan is widely considered the best beginner fountain pen. At around $18, it offers a smooth steel nib, metal body, and reliable ink flow. It&apos;s the most recommended starter pen in the fountain pen community. Check our <Link href="/blog/best-fountain-pens-for-beginners" className="text-blue-700 hover:text-blue-900">beginner guide</Link> for more options.
                </p>
              </details>

              <details className="bg-stone-50 rounded p-4 group">
                <summary className="font-medium text-stone-900 cursor-pointer list-none flex items-center justify-between">
                  What ink cartridges does the Pilot Metropolitan use?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">
                  The Pilot Metropolitan uses Pilot proprietary cartridges and the CON-40 converter. It does NOT accept international standard cartridges. You can also use it as an eyedropper filler for maximum ink capacity. See our <Link href="/blog/fountain-pen-converters-explained" className="text-blue-700 hover:text-blue-900">converter guide</Link> for details.
                </p>
              </details>

              <details className="bg-stone-50 rounded p-4 group">
                <summary className="font-medium text-stone-900 cursor-pointer list-none flex items-center justify-between">
                  How long does a Pilot Metropolitan last?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">
                  The Pilot Metropolitan is a very durable pen with a brass body. With proper care, it can last decades. The most common wear is on the finish, which may show brassing over time. The nib is replaceable if damaged, though Pilot doesn&apos;t sell them separately.
                </p>
              </details>
            </div>
          </section>

          {/* Related Posts */}
          <section className="border-t border-stone-200 pt-8 mt-10">
            <h2 className="text-lg font-bold text-stone-900 mb-4">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/blog/lamy-safari-vs-pilot-metropolitan" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">Lamy Safari vs Pilot Metropolitan</span>
                <span className="text-stone-500">The beginner pen showdown</span>
              </Link>
              <Link href="/blog/twsbi-eco-vs-pilot-metropolitan" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">TWSBI Eco vs Pilot Metropolitan</span>
                <span className="text-stone-500">Piston filler vs cartridge</span>
              </Link>
              <Link href="/blog/best-fountain-pens-for-beginners" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">Best Fountain Pens for Beginners</span>
                <span className="text-stone-500">Our complete beginner guide</span>
              </Link>
              <Link href="/blog/best-fountain-pens-under-20" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">Best Fountain Pens Under $20</span>
                <span className="text-stone-500">Budget options compared</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
