import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pelikan M800 Review 2026 — German Luxury Piston Filler | PenPrice",
  description:
    "In-depth Pelikan M800 review: 18k gold nib, piston filling system, build quality, and live price comparison across Amazon, Goulet Pens, Goldspot Pens, and Appelboom.",
  openGraph: {
    title: "Pelikan M800 Review 2026 — German Luxury Piston Filler",
    description: "The Pelikan Souverän M800 is one of the most recommended luxury fountain pens. Full review with live prices.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelikan M800 Review 2026",
    description: "18k gold nib, piston filler, and German engineering. Reviewed with live prices.",
  },
};

interface RetailerPrice {
  retailer: string;
  price: number;
  url: string;
}

const retailers: RetailerPrice[] = [
  { retailer: "Amazon", price: 479.00, url: "https://www.amazon.com/s?k=Pelikan+Souveran+M800+fountain+pen" },
  { retailer: "Goulet Pens", price: 525.00, url: "https://www.gouletpens.com/search?q=pelikan+m800" },
  { retailer: "Goldspot Pens", price: 510.00, url: "https://www.goldspot.com/pelikan/souveran/m800/" },
  { retailer: "Appelboom", price: 495.00, url: "https://appelboom.com/search?q=pelikan+m800" },
  { retailer: "JetPens", price: 520.00, url: "https://www.jetpens.com/search?q=Pelikan+Souveran+M800" },
];

export default function PelikanM800Review() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article>
        <nav className="text-sm text-stone-400 mb-8">
          <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-500">Pelikan M800 Review</span>
        </nav>

        <header className="mb-10">
          <p className="text-sm text-stone-400 mb-2">Updated July 2026</p>
          <h1 className="text-3xl font-bold text-stone-900 mb-4">
            Pelikan M800 Review 2026
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            The Pelikan Souverän M800 is a German luxury fountain pen that has been a benchmark for piston fillers since 1950. With its distinctive green-striped barrel, 18k gold nib, and reliable piston mechanism, it remains one of the most recommended pens in the $400-600 range. We tested it across five retailers.
          </p>
        </header>

        {/* Quick Specs */}
        <section className="mb-10 p-6 rounded-lg border border-stone-200 bg-white">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Quick Specs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-stone-400 block">Nib</span>
              <span className="font-medium text-stone-900">18k Gold, Two-Tone</span>
            </div>
            <div>
              <span className="text-stone-400 block">Filling</span>
              <span className="font-medium text-stone-900">Piston</span>
            </div>
            <div>
              <span className="text-stone-400 block">Weight</span>
              <span className="font-medium text-stone-900">27.5g</span>
            </div>
            <div>
              <span className="text-stone-400 block">Length (capped)</span>
              <span className="font-medium text-stone-900">142mm</span>
            </div>
            <div>
              <span className="text-stone-400 block">Material</span>
              <span className="font-medium text-stone-900">Celluloid acetate, gold trim</span>
            </div>
            <div>
              <span className="text-stone-400 block">Nib Sizes</span>
              <span className="font-medium text-stone-900">EF, F, M, B, BB, OB, OBB</span>
            </div>
            <div>
              <span className="text-stone-400 block">Ink Capacity</span>
              <span className="font-medium text-stone-900">~1.4ml</span>
            </div>
            <div>
              <span className="text-stone-400 block">MSRP</span>
              <span className="font-medium text-stone-900">$525</span>
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

        {/* Design & Build */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Design &amp; Build Quality</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            The M800 is an iconic pen. The distinctive green-striped barrel (made from layered celluloid acetate) has been recognizable since 1950. The chrome and gold trim, pelican-beak clip, and rounded finials give it a classic, understated elegance that works equally well in a boardroom or at a coffee shop.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            Build quality is excellent. The threads are smooth, the piston operates with a satisfying turn, and the cap posts securely. At 27.5g, it has enough weight to feel substantial without being tiring. The brass piston mechanism adds a reassuring heft.
          </p>
        </section>

        {/* The Nib */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">The 18k Gold Nib</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Pelikan&apos;s nibs are among the best in the world. The two-tone 18k gold nib on the M800 is a size #15 (similar to Pilot&apos;s Custom 823). It&apos;s known for a slightly springy, wet writing experience that rewards a lighter hand. The nib is available in more sizes than most competitors, including OB (Oblique Broad) and OBB (Oblique Double Broad).
          </p>
          <p className="text-stone-600 leading-relaxed">
            The nib can be easily swapped — just unscrew the nib unit from the barrel. Pelikan sells replacement nib units, and the M800 shares nibs with the M600 and M400. This makes the M800 an incredibly versatile platform: buy one pen, own multiple nib sizes.
          </p>
        </section>

        {/* Piston Filling */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Piston Filling System</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            The M800 uses a traditional piston filler — dip the nib in ink, turn the end knob, and the piston draws ink directly into the barrel. The 1.4ml capacity is generous (about 3.5x a standard cartridge). Pelikan&apos;s piston mechanism is widely considered the smoothest in the industry.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Cleaning is straightforward: flush with water by repeatedly drawing and expelling clean water through the nib. The piston seal is robust and can handle vigorous flushing without leaking.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Pros and Cons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-green-200 bg-green-50">
              <h3 className="font-bold text-green-800 mb-2">✅ Pros</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Iconic design, instantly recognizable</li>
                <li>• Smoothest piston mechanism in the industry</li>
                <li>• Interchangeable nibs across M400/M600/M800</li>
                <li>• Wet, springy 18k gold nib</li>
                <li>• Large ink capacity (1.4ml)</li>
                <li>• Excellent build quality and durability</li>
              </ul>
            </div>
            <div className="p-4 rounded border border-red-200 bg-red-50">
              <h3 className="font-bold text-red-800 mb-2">❌ Cons</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Premium price ($479-525)</li>
                <li>• Gold trim can tarnish over years</li>
                <li>• No converter option (piston only)</li>
                <li>• Limited color options in M800 size</li>
                <li>• Wet writer may not suit all inks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VS Comparisons */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">How It Compares</h2>
          <div className="space-y-3">
            <Link href="/blog/pelikan-m800-vs-montblanc-149" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Pelikan M800 vs Montblanc 149 →</span>
              <span className="block text-stone-400 mt-1">Two German luxury fountain pens compared — which is the better value?</span>
            </Link>
            <Link href="/blog/lamy-2000-vs-pilot-custom-823" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Endgame Fountain Pens →</span>
              <span className="block text-stone-400 mt-1">The M800 vs Lamy 2000 vs Pilot Custom 823</span>
            </Link>
            <Link href="/blog/best-fountain-pens-under-300" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Fountain Pens Under $300 →</span>
              <span className="block text-stone-400 mt-1">More affordable alternatives to the M800</span>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Is the Pelikan M800 worth the price?</h3>
              <p className="text-stone-500">If you value a smooth piston mechanism, wet gold nib, and classic design, the M800 is one of the best pens in its price range. The ability to swap nibs (buying additional nib units at ~$150-200 each) means one pen can serve multiple purposes. For many enthusiasts, it&apos;s the last pen they need to buy.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">What&apos;s the difference between M600 and M800?</h3>
              <p className="text-stone-500">The M800 is larger and heavier (27.5g vs 20g). The M800 has a #15 nib (bigger, more gold) while the M600 has a #14 nib. The M800 also has a brass piston mechanism (smoother) versus the M600&apos;s plastic piston. Both accept the same inks and share design DNA. The M800 is the pen for those who prefer a full-size, weighty pen.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Does the green barrel stain?</h3>
              <p className="text-stone-500">The green-striped barrel is made from layered celluloid acetate, which is highly resistant to staining. The material has been used since 1950 and is well-proven. You can safely use any fountain pen ink without worrying about discoloration.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">More Fountain Pen Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/pelikan-m800-vs-montblanc-149" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Pelikan M800 vs Montblanc 149 →</span>
              <span className="block text-stone-400 mt-1">German luxury showdown</span>
            </Link>
            <Link href="/blog/best-italian-fountain-pens" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Italian Fountain Pens →</span>
              <span className="block text-stone-400 mt-1">Visconti, Leonardo, and more compared</span>
            </Link>
            <Link href="/blog/fountain-pen-filling-systems-explained" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Filling Systems Explained →</span>
              <span className="block text-stone-400 mt-1">Piston, vacuum, cartridge, and more</span>
            </Link>
            <Link href="/blog/best-japanese-fountain-pens" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Japanese Fountain Pens →</span>
              <span className="block text-stone-400 mt-1">Pilot, Sailor, Platinum compared</span>
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
            headline: "Pelikan M800 Review 2026",
            description: "In-depth review of the Pelikan Souverän M800 luxury fountain pen with live price comparison across 5 retailers.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            mainEntityOfPage: "https://penprice.vercel.app/blog/pelikan-m800-review",
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
                name: "Is the Pelikan M800 worth the price?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you value a smooth piston mechanism, wet gold nib, and classic design, the M800 is one of the best pens in its price range. The ability to swap nibs means one pen can serve multiple purposes.",
                },
              },
              {
                "@type": "Question",
                name: "What's the difference between Pelikan M600 and M800?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The M800 is larger and heavier (27.5g vs 20g), has a bigger #15 nib, and uses a brass piston mechanism. Both accept the same inks.",
                },
              },
              {
                "@type": "Question",
                name: "Does the green barrel stain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The green-striped barrel is made from layered celluloid acetate, which is highly resistant to staining. You can safely use any fountain pen ink.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
