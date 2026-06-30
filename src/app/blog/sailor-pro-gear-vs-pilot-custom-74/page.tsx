import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sailor Pro Gear vs Pilot Custom 74 — Gold Nib Showdown 2026 | PenPrice",
  description:
    "Sailor Pro Gear vs Pilot Custom 74: two legendary Japanese gold nib fountain pens compared side by side. Nib feel, filling system, build quality, price, and which one you should buy.",
  openGraph: {
    title: "Sailor Pro Gear vs Pilot Custom 74 — Gold Nib Showdown 2026",
    description:
      "The two most popular sub-$300 Japanese gold nib pens, head to head. Nib feel, price, filling system, and our recommendation.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sailor Pro Gear vs Pilot Custom 74",
    description:
      "Which Japanese gold nib pen should you buy? The Pro Gear or the Custom 74? We compare everything.",
  },
};

const comparisonTable = [
  { spec: "Nib", sailor: "21k Gold", pilot: "14k Gold" },
  { spec: "Nib Sizes", sailor: "EF, F, MF, M, B, Zoom, specialty grinds", pilot: "EF, F, FM, M, B, PO, WA, C" },
  { spec: "Filling System", sailor: "Cartridge / Converter (proprietary)", pilot: "Cartridge / Converter (proprietary)" },
  { spec: "Converter", sailor: "Sailor converters (sold separately)", pilot: "Pilot CON-40 (included)" },
  { spec: "Body Material", sailor: "ABS resin (classic) or PMMA acrylic", pilot: "PMMA resin" },
  { spec: "Weight (capped)", sailor: "27g", pilot: "21g" },
  { spec: "Length (capped)", sailor: "133mm", pilot: "141mm" },
  { spec: "Length (posted)", sailor: "149mm", pilot: "161mm" },
  { spec: "MSRP", sailor: "$275", pilot: "$135" },
  { spec: "Street Price", sailor: "$200–$240", pilot: "$100–$130" },
  { spec: "Year Introduced", sailor: "2003", pilot: "1994" },
  { spec: "Country", sailor: "Japan", pilot: "Japan" },
];

const faqItems = [
  {
    q: "Which nib feels better, Sailor or Pilot?",
    a: "It depends on your preference. Sailor's 21k gold nibs have a distinctive \"feedback\" or \"toothy\" feel that many writers love — it's like writing with a very smooth pencil. Pilot's 14k nibs are buttery smooth with almost no feedback. If you like feeling the paper, go Sailor. If you want zero resistance, go Pilot.",
  },
  {
    q: "Is the Sailor Pro Gear worth the extra money over the Pilot Custom 74?",
    a: "The Sailor Pro Gear costs roughly twice as much as the Custom 74. For that premium, you get a 21k gold nib (vs 14k), a more premium build, and Sailor's signature nib feedback. The Custom 74 is arguably the better value — a 14k gold nib for under $130 is hard to beat. If you're new to gold nibs, start with the Custom 74. If you know you like Sailor's feel, the Pro Gear is worth every penny.",
  },
  {
    q: "Can I use Pilot cartridges in a Sailor pen?",
    a: "No. Both brands use proprietary cartridge systems. Pilot cartridges only fit Pilot pens, and Sailor cartridges only fit Sailor pens. You cannot cross-use them. Both brands also have proprietary converters that only fit their own pens.",
  },
  {
    q: "Which pen has better ink capacity?",
    a: "The Pilot Custom 74 with the CON-40 converter holds about 0.5ml of ink. The Sailor Pro Gear with a Sailor converter holds roughly 0.4ml. Both are cartridge/converter pens with modest ink capacity. If ink capacity is a priority, consider a piston filler like the TWSBI Eco or Lamy 2000 instead.",
  },
  {
    q: "Which is better for everyday writing, Sailor Pro Gear or Pilot Custom 74?",
    a: "Both are excellent everyday writers. The Custom 74 is lighter (21g vs 27g) and cheaper to replace if damaged. The Pro Gear has a more premium feel and the 21k gold nib is slightly more expressive. For daily note-taking and journaling, many people prefer the Custom 74. For letter writing and special correspondence, the Pro Gear shines.",
  },
];

export default function SailorProGearVsPilotCustom74Page() {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-stone-400 mb-8">
          <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-900 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-600">Sailor Pro Gear vs Pilot Custom 74</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-xs text-stone-400 mb-4">
            <span className="px-2 py-0.5 bg-blue-50 text-blue-800 rounded font-medium">Comparison</span>
            <span>June 30, 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 leading-tight">
            Sailor Pro Gear vs Pilot Custom 74 — Gold Nib Showdown 2026
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            The two most popular sub-$300 Japanese gold nib fountain pens, head to head. We compare nib feel, build quality, filling system, price, and help you decide which one belongs in your collection.
          </p>
        </header>

        {/* Quick Verdict */}
        <section className="mb-12 p-6 bg-white rounded border border-stone-200">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Quick Verdict</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-2">Choose the Sailor Pro Gear if...</h3>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>• You want that distinctive Sailor nib feedback</li>
                <li>• You prefer a heavier, more substantial pen</li>
                <li>• You value the 21k gold nib feel</li>
                <li>• You don&apos;t mind paying $200+ for a pen</li>
              </ul>
            </div>
            <div className="p-4 bg-stone-50 rounded border border-stone-200">
              <h3 className="font-semibold text-stone-900 mb-2">Choose the Pilot Custom 74 if...</h3>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>• You want a smooth, buttery nib with zero feedback</li>
                <li>• You prefer a lighter pen for long writing sessions</li>
                <li>• You want the best value gold nib pen on the market</li>
                <li>• You&apos;re new to gold nibs and want to try one affordably</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded border border-stone-200">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50">
                  <th className="text-left p-3 font-semibold text-stone-600">Spec</th>
                  <th className="text-left p-3 font-semibold text-blue-800">Sailor Pro Gear</th>
                  <th className="text-left p-3 font-semibold text-stone-900">Pilot Custom 74</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row) => (
                  <tr key={row.spec} className="border-b border-stone-100 last:border-0">
                    <td className="p-3 font-medium text-stone-600">{row.spec}</td>
                    <td className="p-3 text-stone-700">{row.sailor}</td>
                    <td className="p-3 text-stone-700">{row.pilot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Nib Deep Dive */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-stone-900 mb-4">The Nib: What Really Matters</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              The nib is the soul of a fountain pen, and this is where the Sailor Pro Gear and Pilot Custom 74 diverge most dramatically.
            </p>
            <h3 className="text-lg font-semibold text-stone-900">Sailor&apos;s 21k Gold Nib</h3>
            <p>
              Sailor uses 21k gold for their Pro Gear nibs — one of the highest gold purities in any production fountain pen. The extra gold content gives the nib a softer, more springy feel. But the real magic is Sailor&apos;s signature &quot;feedback.&quot; When you write with a Sailor, you feel the texture of the paper. It&apos;s not scratchy — it&apos;s more like writing with a very smooth pencil. Many writers find this feedback addictive once they experience it.
            </p>
            <p>
              Sailor nibs are also known for their consistency. Every Sailor 21k nib writes similarly out of the box, with minimal tuning needed. The nib sizes run slightly finer than Western equivalents — a Sailor Fine writes like a Japanese Fine, which is finer than a Lamy Fine.
            </p>
            <h3 className="text-lg font-semibold text-stone-900">Pilot&apos;s 14k Gold Nib</h3>
            <p>
              Pilot&apos;s 14k gold nib is the definition of smooth. Where Sailor gives you feedback, Pilot gives you almost none. The nib glides across paper like it&apos;s on ice. For writers who want their pen to disappear and just let the words flow, the Custom 74 delivers.
            </p>
            <p>
              Pilot also offers more specialty nib options for the Custom 74. The PO (Posting) nib is slightly downturned for writing on the back of thin paper. The WA (Waverly) nib has a turned-up tip for a smooth experience at any angle. The C (Cursive) nib is ground for smooth cursive writing. These specialty nibs are hard to find outside of Japan but add real value for enthusiasts.
            </p>
          </div>
        </section>

        {/* Price Comparison */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Where to Buy — Price Comparison</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white rounded border border-stone-200">
              <h3 className="font-semibold text-blue-800 mb-3">Sailor Pro Gear</h3>
              <div className="space-y-2 text-sm">
                <a
                  href="https://www.amazon.com/s?k=Sailor+Pro+Gear+fountain+pen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded hover:bg-stone-50 transition-colors"
                >
                  <span className="text-stone-600">Amazon</span>
                  <span className="font-semibold text-stone-900">$200–$240</span>
                </a>
                <a
                  href="https://www.jetpens.com/Sailor-Professional-Gear-Fountain-Pen/ct/1744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded hover:bg-stone-50 transition-colors"
                >
                  <span className="text-stone-600">JetPens</span>
                  <span className="font-semibold text-stone-900">$236</span>
                </a>
                <a
                  href="https://www.gouletpens.com/collections/sailor-pro-gear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded hover:bg-stone-50 transition-colors"
                >
                  <span className="text-stone-600">Goulet Pens</span>
                  <span className="font-semibold text-stone-900">$275</span>
                </a>
              </div>
            </div>
            <div className="p-5 bg-white rounded border border-stone-200">
              <h3 className="font-semibold text-stone-900 mb-3">Pilot Custom 74</h3>
              <div className="space-y-2 text-sm">
                <a
                  href="https://www.amazon.com/s?k=Pilot+Custom+74+fountain+pen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded hover:bg-stone-50 transition-colors"
                >
                  <span className="text-stone-600">Amazon</span>
                  <span className="font-semibold text-stone-900">$100–$130</span>
                </a>
                <a
                  href="https://www.jetpens.com/Pilot-Custom-74-Fountain-Pen/ct/2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded hover:bg-stone-50 transition-colors"
                >
                  <span className="text-stone-600">JetPens</span>
                  <span className="font-semibold text-stone-900">$115</span>
                </a>
                <a
                  href="https://www.amazon.com/s?k=Pilot+Custom+74+Japan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded hover:bg-stone-50 transition-colors"
                >
                  <span className="text-stone-600">Amazon JP (import)</span>
                  <span className="font-semibold text-stone-900">$80–$100</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Alternatives */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Consider These Alternatives</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/brands/sailor/1911"
              className="p-4 bg-white rounded border border-stone-200 hover:border-blue-200 hover:shadow-sm transition-all group"
            >
              <h3 className="font-semibold text-stone-900 group-hover:text-blue-900 transition-colors">Sailor 1911 Standard</h3>
              <p className="text-sm text-stone-500 mt-1">Same 21k nib as the Pro Gear in a simpler, cigar-shaped body. Slightly cheaper.</p>
              <span className="text-xs text-stone-400 mt-2 block">From $170</span>
            </Link>
            <Link
              href="/brands/pilot/custom-743"
              className="p-4 bg-white rounded border border-stone-200 hover:border-blue-200 hover:shadow-sm transition-all group"
            >
              <h3 className="font-semibold text-stone-900 group-hover:text-blue-900 transition-colors">Pilot Custom 743</h3>
              <p className="text-sm text-stone-500 mt-1">Pilot&apos;s #15 size 14k gold nib — bigger, bolder, and more expressive than the Custom 74.</p>
              <span className="text-xs text-stone-400 mt-2 block">From $200</span>
            </Link>
            <Link
              href="/brands/platinum/3776"
              className="p-4 bg-white rounded border border-stone-200 hover:border-blue-200 hover:shadow-sm transition-all group"
            >
              <h3 className="font-semibold text-stone-900 group-hover:text-blue-900 transition-colors">Platinum 3776 Century</h3>
              <p className="text-sm text-stone-500 mt-1">Another Japanese 14k gold nib pen with Platinum&apos;s slip & seal cap. Excellent value.</p>
              <span className="text-xs text-stone-400 mt-2 block">From $80</span>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="bg-white rounded border border-stone-200 p-4 group"
              >
                <summary className="font-semibold text-stone-900 cursor-pointer list-none flex items-center justify-between">
                  {item.q}
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-stone-600 leading-relaxed text-sm">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/blog/pilot-custom-823-vs-sailor-pro-gear"
              className="p-4 bg-white rounded border border-stone-200 hover:border-blue-200 hover:shadow-sm transition-all group"
            >
              <h3 className="font-semibold text-stone-900 group-hover:text-blue-900 transition-colors">
                Pilot Custom 823 vs Sailor Pro Gear
              </h3>
              <p className="text-sm text-stone-500 mt-1">
                The premium showdown: Pilot&apos;s flagship vacuum filler vs Sailor&apos;s gold nib icon.
              </p>
            </Link>
            <Link
              href="/blog/best-japanese-fountain-pens"
              className="p-4 bg-white rounded border border-stone-200 hover:border-blue-200 hover:shadow-sm transition-all group"
            >
              <h3 className="font-semibold text-stone-900 group-hover:text-blue-900 transition-colors">
                Best Japanese Fountain Pens 2026
              </h3>
              <p className="text-sm text-stone-500 mt-1">
                Pilot, Sailor, Platinum, and more — the complete guide to Japanese fountain pens.
              </p>
            </Link>
            <Link
              href="/blog/fountain-pen-nib-sizes-explained"
              className="p-4 bg-white rounded border border-stone-200 hover:border-blue-200 hover:shadow-sm transition-all group"
            >
              <h3 className="font-semibold text-stone-900 group-hover:text-blue-900 transition-colors">
                Fountain Pen Nib Sizes Explained
              </h3>
              <p className="text-sm text-stone-500 mt-1">
                Extra Fine to Broad: what each nib size writes like, and how Japanese vs Western sizes compare.
              </p>
            </Link>
            <Link
              href="/blog/best-gold-nib-fountain-pens-under-200"
              className="p-4 bg-white rounded border border-stone-200 hover:border-blue-200 hover:shadow-sm transition-all group"
            >
              <h3 className="font-semibold text-stone-900 group-hover:text-blue-900 transition-colors">
                Best Gold Nib Fountain Pens Under $200
              </h3>
              <p className="text-sm text-stone-500 mt-1">
                Affordable gold nibs from Pilot, Platinum, Sailor, and Lamy — with price comparisons.
              </p>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-stone-400 pt-8 border-t border-stone-200">
          <p>Built by an AI agent as a fountain pen price comparison experiment.</p>
          <p className="mt-1">
            <Link href="/" className="text-blue-800 hover:underline">Compare prices on 50+ brands</Link> · 
            <Link href="/blog" className="text-blue-800 hover:underline ml-1">Read more guides</Link>
          </p>
        </footer>
      </div>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Sailor Pro Gear vs Pilot Custom 74 — Gold Nib Showdown 2026",
            description:
              "Sailor Pro Gear vs Pilot Custom 74: two legendary Japanese gold nib fountain pens compared side by side.",
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
            author: {
              "@type": "Organization",
              name: "PenPrice",
            },
            publisher: {
              "@type": "Organization",
              name: "PenPrice",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://penprice.vercel.app/blog/sailor-pro-gear-vs-pilot-custom-74",
            },
          }),
        }}
      />
    </main>
  );
}
