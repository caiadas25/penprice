import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TWSBI Eco Review 2026 — Best Piston-Filler Under $40? | PenPrice",
  description:
    "TWSBI Eco review with price comparison. 1.7ml ink capacity, piston filler, demonstrator body. Compare prices across Amazon, JetPens, Goulet Pens, and Goldspot Pens. Is the TWSBI Eco the best value fountain pen?",
  openGraph: {
    title: "TWSBI Eco Review 2026 — The Ink Tank That Changed Everything",
    description:
      "Is the TWSBI Eco the best value fountain pen? Full review with price comparison across 4 retailers.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "TWSBI Eco Review 2026 — Best Piston-Filler Under $40",
    description:
      "TWSBI Eco: 1.7ml ink capacity, piston filler, under $35. Full review and price comparison.",
  },
};

export default function TwsbiEcoReviewPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: "TWSBI Eco",
      brand: { "@type": "Brand", name: "TWSBI" },
      category: "Fountain Pen",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: 28,
        highPrice: 38,
        priceCurrency: "USD",
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 4.6,
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
        name: "Is the TWSBI Eco good for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The TWSBI Eco is an excellent choice for beginners who want to try bottled ink. The piston filler is easy to use, the 1.7ml ink capacity means fewer refills, and the demonstrator body lets you see your ink color. At around $32, it's one of the best value fountain pens available.",
        },
      },
      {
        "@type": "Question",
        name: "How do you fill a TWSBI Eco?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The TWSBI Eco uses a piston filling mechanism. Unscrew the end cap, dip the nib in bottled ink, and turn the piston knob to draw ink in. The 1.7ml capacity is 3-4x more than a cartridge. TWSBI includes a wrench and silicone grease for maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "Does the TWSBI Eco leak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The TWSBI Eco is generally reliable, but early models had occasional cracking issues around the barrel. TWSBI has improved the design over the years. The snap cap provides a good seal. Store it nib-up or horizontally if concerned about leaking during travel.",
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
          <span className="text-stone-500">TWSBI Eco Review</span>
        </nav>

        <article>
          <header className="mb-10">
            <p className="text-blue-800 text-sm font-medium mb-2">Review — Updated July 2026</p>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              TWSBI Eco Review 2026
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed">
              The TWSBI Eco changed what people expected from a sub-$35 fountain pen. A piston filler with 1.7ml ink capacity, a clear demonstrator body, and a smooth steel nib. It&apos;s the pen that made bottled ink accessible to everyone. Here&apos;s why it&apos;s still one of the best value fountain pens in 2026.
            </p>
          </header>

          {/* TL;DR */}
          <div className="bg-white border border-stone-200 rounded p-6 mb-10">
            <h2 className="text-lg font-bold text-stone-900 mb-3">TL;DR</h2>
            <ul className="space-y-2 text-sm text-stone-700">
              <li><strong className="text-stone-900">The TWSBI Eco</strong> is a $32 piston-filling fountain pen with a massive 1.7ml ink capacity and clear demonstrator body. Prices range from $28 to $38 depending on colorway.</li>
              <li><strong className="text-stone-900">Best for:</strong> Anyone who wants to try bottled ink without spending much. Great for writers, journalers, and anyone who hates refilling cartridges.</li>
              <li><strong className="text-stone-900">Watch out for:</strong> Earlier models had cracking issues (improved in recent batches). The snap cap isn&apos;t as secure as a screw cap for pocket carry.</li>
              <li><strong className="text-stone-900">Bottom line:</strong> The best value fountain pen under $35. The ink capacity alone makes it worth it.</li>
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
                    <td className="p-3 text-stone-900 font-mono">$28–$35</td>
                    <td className="p-3 text-stone-500 text-xs">15+ colors</td>
                    <td className="p-3"><a href="https://www.amazon.com/s?k=TWSBI+ECO+fountain+pen" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">JetPens</td>
                    <td className="p-3 text-stone-900 font-mono">$32</td>
                    <td className="p-3 text-stone-500 text-xs">10+ colors</td>
                    <td className="p-3"><a href="https://www.jetpens.com/TWSBI-ECO-Fountain-Pen/ct/3289" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">Goulet Pens</td>
                    <td className="p-3 text-stone-900 font-mono">$32</td>
                    <td className="p-3 text-stone-500 text-xs">12+ colors</td>
                    <td className="p-3"><a href="https://www.gouletpens.com/collections/twsbi-eco" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-900 font-medium">Goldspot Pens</td>
                    <td className="p-3 text-stone-900 font-mono">$31</td>
                    <td className="p-3 text-stone-500 text-xs">10+ colors</td>
                    <td className="p-3"><a href="https://www.goldspot.com/twsbi/eco/" className="text-blue-700 hover:text-blue-900 text-xs" target="_blank" rel="noopener noreferrer">Shop →</a></td>
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
                  <tr><td className="p-3 text-stone-500 bg-stone-50 w-1/3 font-medium">Nib</td><td className="p-3 text-stone-900">Steel, JoWo #5</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Nib Sizes</td><td className="p-3 text-stone-900">Extra Fine, Fine, Medium, Broad</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Length (capped)</td><td className="p-3 text-stone-900">5.5 inches (139mm)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Length (posted)</td><td className="p-3 text-stone-900">5.5 inches (139mm)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Weight</td><td className="p-3 text-stone-900">19g</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Ink Capacity</td><td className="p-3 text-stone-900">1.7ml (piston)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Filling System</td><td className="p-3 text-stone-900">Piston</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Material</td><td className="p-3 text-stone-900">ABS plastic (demonstrator)</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">Cap</td><td className="p-3 text-stone-900">Snap cap</td></tr>
                  <tr><td className="p-3 text-stone-500 bg-stone-50 font-medium">MSRP</td><td className="p-3 text-stone-900">$32</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* The Ink Tank */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">The 1.7ml Ink Tank</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              The TWSBI Eco&apos;s defining feature is its 1.7ml ink capacity. For context, a standard Pilot cartridge holds 0.7ml. That means the Eco holds 2.4x more ink than a cartridge. For most writers, that translates to 2-3 weeks of daily writing before needing a refill.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The piston filling mechanism is smooth and reliable. Twist the end knob to draw ink directly from a bottle. TWSBI includes a wrench and silicone grease for maintenance. The demonstrator body lets you see exactly how much ink is left, which is both practical and visually appealing.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The piston mechanism also means you can mix inks directly in the pen (though we recommend cleaning between colors). The wide barrel accepts even the most saturated inks without staining issues.
            </p>
          </section>

          {/* Pros/Cons */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Pros and Cons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded p-5">
                <h3 className="font-bold text-green-800 mb-3">✅ Pros</h3>
                <ul className="space-y-2 text-sm text-green-900">
                  <li>Massive 1.7ml ink capacity (2-3 weeks of writing)</li>
                  <li>Piston filler at an incredible price point</li>
                  <li>Demonstrator body shows ink level and color</li>
                  <li>15+ colorways to choose from</li>
                  <li>Smooth JoWo #5 nib with good flow</li>
                  <li>Includes wrench and silicone grease for maintenance</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded p-5">
                <h3 className="font-bold text-red-800 mb-3">❌ Cons</h3>
                <ul className="space-y-2 text-sm text-red-900">
                  <li>Earlier models had cracking issues (improved but not eliminated)</li>
                  <li>Snap cap less secure than screw cap for pocket carry</li>
                  <li>Nibs are not easily swappable (requires TWSBI-specific nib units)</li>
                  <li>Plastic body may feel less premium than metal alternatives</li>
                  <li>Piston mechanism requires periodic maintenance</li>
                  <li>Japanese nib sizing runs finer than Western equivalents</li>
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
                  Is the TWSBI Eco good for beginners?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">
                  The TWSBI Eco is an excellent choice for beginners who want to try bottled ink. The piston filler is easy to use, the 1.7ml ink capacity means fewer refills, and the demonstrator body lets you see your ink color. At around $32, it&apos;s one of the best value fountain pens available. See our <Link href="/blog/best-fountain-pens-for-beginners" className="text-blue-700 hover:text-blue-900">beginner guide</Link> for more options.
                </p>
              </details>

              <details className="bg-stone-50 rounded p-4 group">
                <summary className="font-medium text-stone-900 cursor-pointer list-none flex items-center justify-between">
                  How do you fill a TWSBI Eco?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">
                  The TWSBI Eco uses a piston filling mechanism. Unscrew the end cap, dip the nib in bottled ink, and turn the piston knob to draw ink in. The 1.7ml capacity is 3-4x more than a cartridge. TWSBI includes a wrench and silicone grease for maintenance. Check our <Link href="/blog/fountain-pen-filling-systems-explained" className="text-blue-700 hover:text-blue-900">filling systems guide</Link> for more details.
                </p>
              </details>

              <details className="bg-stone-50 rounded p-4 group">
                <summary className="font-medium text-stone-900 cursor-pointer list-none flex items-center justify-between">
                  Does the TWSBI Eco leak?
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-stone-600 mt-3 text-sm leading-relaxed">
                  The TWSBI Eco is generally reliable, but early models had occasional cracking issues around the barrel. TWSBI has improved the design over the years. The snap cap provides a good seal. Store it nib-up or horizontally if concerned about leaking during travel.
                </p>
              </details>
            </div>
          </section>

          {/* Related Posts */}
          <section className="border-t border-stone-200 pt-8 mt-10">
            <h2 className="text-lg font-bold text-stone-900 mb-4">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/blog/twsbi-eco-vs-kaweco-sport" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">TWSBI Eco vs Kaweco Sport</span>
                <span className="text-stone-500">Piston filler vs pocket pen</span>
              </Link>
              <Link href="/blog/twsbi-eco-vs-pilot-metropolitan" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">TWSBI Eco vs Pilot Metropolitan</span>
                <span className="text-stone-500">Piston filler vs cartridge</span>
              </Link>
              <Link href="/blog/fountain-pen-filling-systems-explained" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">Fountain Pen Filling Systems</span>
                <span className="text-stone-500">Piston, vacuum, cartridge & more</span>
              </Link>
              <Link href="/blog/best-fountain-pens-under-40" className="block p-4 rounded-lg border border-stone-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-sm">
                <span className="font-medium text-stone-900 block">Best Fountain Pens Under $40</span>
                <span className="text-stone-500">Budget options compared</span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
