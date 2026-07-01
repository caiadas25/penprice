import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Best Chinese Fountain Pens in 2026 — Budget Pens Worth Buying | PenPrice",
  description:
    "Compare prices on the best Chinese fountain pens from Jinhao, Hongdian, Majohn, Hero, and Wingsung. Quality fountain pens from $3 to $50 with live price comparison across Amazon and AliExpress.",
  openGraph: {
    title: "Best Chinese Fountain Pens in 2026 — Budget Pens Worth Buying",
    description:
      "Chinese fountain pens offer incredible value. Compare Jinhao, Hongdian, Majohn, and Hero pens with live prices.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Chinese Fountain Pens in 2026",
    description:
      "Quality fountain pens from $3 to $50. Jinhao, Hongdian, Majohn, and more compared.",
  },
};

interface ChinesePen {
  name: string;
  brand: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  why: string;
  nibType: string;
  fillingSystem: string;
}

const chinesePens: ChinesePen[] = [
  {
    name: "Jinhao X450",
    brand: "Jinhao",
    slug: "x450",
    brandSlug: "jinhao",
    priceFrom: 4.99,
    why: "The gateway drug of fountain pens. Heavy brass body, reliable Schmidt-style nib, and it costs less than a coffee. The X450 has introduced millions of people to fountain pen writing.",
    nibType: "Steel (Medium)",
    fillingSystem: "Cartridge / Converter",
  },
  {
    name: "Jinhao 82",
    brand: "Jinhao",
    slug: "82",
    brandSlug: "jinhao",
    priceFrom: 6.99,
    why: "A pocket pen with a surprising amount of quality. The 82 features a snap cap, smooth steel nib, and a compact design that fits in any pocket. A genuine Kaweco Sport alternative at 1/4 the price.",
    nibType: "Steel (Fine/Medium)",
    fillingSystem: "Cartridge / Converter",
  },
  {
    name: "Hongdian Black Forest",
    brand: "Hongdian",
    slug: "black-forest",
    brandSlug: "hongdian",
    priceFrom: 12.99,
    why: "Hongdian's bestseller. Matte black metal body with subtle texture, smooth fine nib, and a weight that feels premium. Often called the best fountain pen under $15.",
    nibType: "Steel (Fine)",
    fillingSystem: "Cartridge / Converter",
  },
  {
    name: "Majohn P136",
    brand: "Majohn (Moonman)",
    slug: "p136",
    brandSlug: "majohn",
    priceFrom: 18.99,
    why: "A demonstrator pen with a vacuum filling system inspired by the Pilot Custom 823. Clear body shows off your ink, and the 14k gold-plated nib writes smoother than it has any right to at this price.",
    nibType: "Steel (Fine/Medium)",
    fillingSystem: "Vacuum filler",
  },
  {
    name: "Jinhao 100",
    brand: "Jinhao",
    slug: "100",
    brandSlug: "jinhao",
    priceFrom: 8.99,
    why: "A classic cigar-shaped pen with a smooth steel nib. The 100 is one of Jinhao's most popular models, available in dozens of colors. A reliable daily writer that punches way above its price.",
    nibType: "Steel (Fine/Medium/Broad)",
    fillingSystem: "Cartridge / Converter",
  },
  {
    name: "Hongdian Ares",
    brand: "Hongdian",
    slug: "ares",
    brandSlug: "hongdian",
    priceFrom: 19.99,
    why: "Hongdian's mid-range offering with a piston filling system and a larger ink capacity. The brass body and smooth nib make it a serious competitor to the Pilot Metropolitan.",
    nibType: "Steel (Fine/Medium)",
    fillingSystem: "Piston",
  },
  {
    name: "Majohn Q1",
    brand: "Majohn (Moonman)",
    slug: "q1",
    brandSlug: "majohn",
    priceFrom: 15.99,
    why: "An eyedropper-filling demonstrator with a unique triangular shape. Holds a massive amount of ink and writes wet and smooth. A favorite in the fountain pen community for its ink capacity.",
    nibType: "Steel (Fine/Medium)",
    fillingSystem: "Eyedropper",
  },
  {
    name: "Wing Sung 618",
    brand: "Wing Sung",
    slug: "618",
    brandSlug: "wing-sung",
    priceFrom: 9.99,
    why: "A piston-filling demonstrator pen that offers genuine piston mechanics at an entry-level price. The clear body and smooth nib make it a popular choice for ink enthusiasts on a budget.",
    nibType: "Steel (Fine/Medium)",
    fillingSystem: "Piston",
  },
  {
    name: "Hero 616",
    brand: "Hero",
    slug: "616",
    brandSlug: "hero",
    priceFrom: 2.99,
    why: "China's most iconic fountain pen. The 616 has been in production since the 1960s and remains one of the cheapest functional fountain pens in the world. A Parker 51 clone that works surprisingly well.",
    nibType: "Steel (Fine)",
    fillingSystem: "Aerometric",
  },
  {
    name: "Jinhao 993",
    brand: "Jinhao",
    slug: "993",
    brandSlug: "jinhao",
    priceFrom: 11.99,
    why: "A shark-shaped novelty pen that writes better than it has any business doing. The 993 is a cult favorite for its unique design and surprisingly smooth nib. Great gift pen.",
    nibType: "Steel (Fine/Medium)",
    fillingSystem: "Cartridge / Converter",
  },
];

export default function BestChineseFountainPensPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Best Chinese Fountain Pens</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Buying Guide — Updated July 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Best Chinese Fountain Pens in 2026
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Chinese fountain pens offer extraordinary value. From the $2.99 Hero 616 to the
            $19.99 Hongdian Ares, these pens deliver writing quality that rivals pens costing
            10x more. Here are the 10 best Chinese fountain pens with live prices.
          </p>
        </header>

        {/* Why Chinese Pens */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why Chinese Fountain Pens?</h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            China has been manufacturing fountain pens since the 1930s. In the last decade,
            brands like Jinhao, Hongdian, and Majohn (Moonman) have dramatically improved
            quality while keeping prices incredibly low. Here&apos;s why they&apos;re worth considering:
          </p>
          <div className="bg-stone-100 rounded p-6 mb-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Key advantages:</h3>
            <ul className="space-y-2 text-stone-500">
              <li className="flex items-start gap-2">
                <span className="text-blue-800 mt-1">•</span>
                <span><strong className="text-stone-800">Unbeatable price:</strong> A functional fountain pen for under $5. Most models cost less than a single fill of premium ink.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-800 mt-1">•</span>
                <span><strong className="text-stone-800">Metal bodies:</strong> Many Chinese pens use brass or aluminum bodies, giving them a premium weight and feel that plastic pens lack.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-800 mt-1">•</span>
                <span><strong className="text-stone-800">Innovation:</strong> Chinese brands now offer piston fillers, vacuum fillers, and eyedropper systems at prices Western brands can&apos;t match.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-800 mt-1">•</span>
                <span><strong className="text-stone-800">Low risk:</strong> At these prices, you can try multiple pens and filling systems without committing to an expensive purchase.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="mb-12 overflow-x-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Quick Comparison</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-stone-200">
                <th className="text-left py-3 px-4 font-semibold text-stone-700">Pen</th>
                <th className="text-left py-3 px-4 font-semibold text-stone-700">Brand</th>
                <th className="text-left py-3 px-4 font-semibold text-stone-700">Filling</th>
                <th className="text-left py-3 px-4 font-semibold text-stone-700">From</th>
              </tr>
            </thead>
            <tbody>
              {chinesePens.map((pen) => (
                <tr key={pen.slug} className="border-b border-stone-200/50 hover:bg-white">
                  <td className="py-3 px-4">
                    <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="text-blue-800 hover:text-blue-700 font-medium">
                      {pen.name}
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-stone-500">{pen.brand}</td>
                  <td className="py-3 px-4 text-stone-500">{pen.fillingSystem}</td>
                  <td className="py-3 px-4 text-green-600 font-medium">${pen.priceFrom.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Detailed Reviews */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Detailed Reviews</h2>
          <div className="space-y-8">
            {chinesePens.map((pen, index) => (
              <div key={pen.slug} className="bg-white rounded p-6 border border-stone-200/50">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-blue-800/30">{index + 1}</span>
                  <div className="flex-1">
                    <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="text-xl font-bold text-stone-900 hover:text-blue-800 transition-colors">
                      {pen.name}
                    </Link>
                    <p className="text-blue-800 text-sm mt-1">From ${pen.priceFrom.toFixed(2)}</p>
                    <p className="text-stone-500 mt-3 leading-relaxed">{pen.why}</p>
                    <div className="mt-3 flex gap-2 flex-wrap">
                      <span className="inline-block bg-stone-100 text-stone-600 px-3 py-1 rounded text-xs">{pen.nibType}</span>
                      <span className="inline-block bg-stone-100 text-stone-600 px-3 py-1 rounded text-xs">{pen.fillingSystem}</span>
                      <Link
                        href={`/brands/${pen.brandSlug}/${pen.slug}`}
                        className="inline-block bg-blue-800/10 text-blue-800 px-3 py-1 rounded text-sm hover:bg-blue-800/20 transition-colors"
                      >
                        View Prices →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips for Buying */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Tips for Buying Chinese Fountain Pens</h2>
          <div className="bg-stone-100 rounded p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-stone-800 mb-1">Buy from Amazon or AliExpress</h3>
              <p className="text-stone-500 text-sm">Amazon offers faster shipping and easier returns. AliExpress has wider selection and lower prices, but shipping takes 2-4 weeks.</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-1">Expect to tune the nib</h3>
              <p className="text-stone-500 text-sm">Chinese nibs sometimes need minor adjustment. A brass shim or micromesh can fix most flow issues in minutes. YouTube has great tutorials.</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-1">Start with Jinhao X450 or Hongdian Black Forest</h3>
              <p className="text-stone-500 text-sm">These two models are the most reliable entry points. Both write well out of the box and cost less than $15 combined.</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-1">Use international standard cartridges</h3>
              <p className="text-stone-500 text-sm">Most Chinese pens use international standard cartridges and converters, making them compatible with a wide range of inks.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Are Chinese fountain pens good quality?",
                a: "Modern Chinese fountain pens from brands like Jinhao, Hongdian, and Majohn offer surprisingly good quality. While they may need occasional nib tuning, they write well and are built with metal bodies that feel premium. At their price point, they offer extraordinary value.",
              },
              {
                q: "What is the best Chinese fountain pen for beginners?",
                a: "The Jinhao X450 ($4.99) or Hongdian Black Forest ($12.99) are the best starting points. Both write reliably out of the box and offer metal bodies with a premium feel. The Jinhao 82 is also excellent if you want a pocket pen.",
              },
              {
                q: "Where can I buy Chinese fountain pens?",
                a: "Amazon is the most convenient option with fast shipping and easy returns. AliExpress offers lower prices but 2-4 week shipping. JetPens and Goulet Pens carry select Chinese brands.",
              },
              {
                q: "Are Chinese nibs compatible with Western inks?",
                a: "Yes. Most Chinese pens use international standard cartridges and converters, so they work with any international standard ink cartridge or bottled ink via converter.",
              },
              {
                q: "Do Chinese fountain pens need maintenance?",
                a: "Like all fountain pens, Chinese pens benefit from regular cleaning. Flush with water every 4-6 weeks or when changing ink colors. The piston and vacuum filler models may need occasional silicone grease on the piston mechanism.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded p-6 border border-stone-200/50">
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{faq.q}</h3>
                <p className="text-stone-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/best-fountain-pens-under-10" className="bg-white rounded p-5 border border-stone-200/50 hover:border-blue-800/50 transition-colors">
              <h3 className="font-semibold text-stone-900 hover:text-blue-800 transition-colors">Best Fountain Pens Under $10</h3>
              <p className="text-sm text-stone-400 mt-1">Budget picks including Chinese pens.</p>
            </Link>
            <Link href="/blog/best-fountain-pens-for-beginners" className="bg-white rounded p-5 border border-stone-200/50 hover:border-blue-800/50 transition-colors">
              <h3 className="font-semibold text-stone-900 hover:text-blue-800 transition-colors">Best Fountain Pens for Beginners</h3>
              <p className="text-sm text-stone-400 mt-1">Start your fountain pen journey right.</p>
            </Link>
            <Link href="/blog/fountain-pen-filling-systems-explained" className="bg-white rounded p-5 border border-stone-200/50 hover:border-blue-800/50 transition-colors">
              <h3 className="font-semibold text-stone-900 hover:text-blue-800 transition-colors">Filling Systems Explained</h3>
              <p className="text-sm text-stone-400 mt-1">Cartridge, piston, vacuum, eyedropper.</p>
            </Link>
            <Link href="/blog/fountain-pen-maintenance-guide" className="bg-white rounded p-5 border border-stone-200/50 hover:border-blue-800/50 transition-colors">
              <h3 className="font-semibold text-stone-900 hover:text-blue-800 transition-colors">Fountain Pen Maintenance Guide</h3>
              <p className="text-sm text-stone-400 mt-1">Keep your pens writing smoothly.</p>
            </Link>
          </div>
        </section>
      </article>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best Chinese Fountain Pens in 2026",
            description: "Compare prices on the best Chinese fountain pens from Jinhao, Hongdian, Majohn, and Hero.",
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            author: {
              "@type": "Organization",
              name: "PenPrice",
            },
            publisher: {
              "@type": "Organization",
              name: "PenPrice",
            },
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
                name: "Are Chinese fountain pens good quality?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Modern Chinese fountain pens from brands like Jinhao, Hongdian, and Majohn offer surprisingly good quality with metal bodies and smooth nibs.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best Chinese fountain pen for beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Jinhao X450 ($4.99) or Hongdian Black Forest ($12.99) are the best starting points.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I buy Chinese fountain pens?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Amazon for fast shipping, AliExpress for lower prices. JetPens and Goulet Pens carry select Chinese brands.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
