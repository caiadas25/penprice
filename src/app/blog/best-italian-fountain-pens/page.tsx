import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Best Italian Fountain Pens in 2026 — Price Comparison Guide | PenPrice",
  description:
    "Compare prices on the best Italian fountain pens from Aurora, Visconti, Leonardo, Montegrappa, Delta, and Pineider. Find the best deal on Aurora Optima, Visconti Homo Sapiens, Leonardo Momento Zero, and more.",
  openGraph: {
    title: "Best Italian Fountain Pens in 2026 — Complete Price Guide",
    description:
      "Italian fountain pens are known for their stunning design, bold colors, and exceptional craftsmanship. Compare prices across Amazon, Goldspot, and Goulet Pens.",
    type: "article",
  },
};

interface ItalianPen {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  category: string;
  why: string;
}

const italianPens: ItalianPen[] = [
  {
    name: "Aurora Ipsilon",
    slug: "ipsilon",
    brandSlug: "aurora",
    priceFrom: 96,
    category: "Best Entry-Level Gold Nib",
    why: "Aurora's gateway pen with a 14K gold nib at a price point most brands charge for steel. Made in Turin with the same attention to detail as Aurora's flagship models. A genuine gold nib for under $100 is rare.",
  },
  {
    name: "Leonardo Furore",
    slug: "furore",
    brandSlug: "leonardo",
    priceFrom: 89,
    category: "Best Under $100",
    why: "From the Florence-based team behind the legendary Delta pens. Gorgeous Italian resin colors, smooth steel nib, and excellent build quality. One of the best values in Italian fountain pens.",
  },
  {
    name: "Montegrappa Elmo 01",
    slug: "elmo-01",
    brandSlug: "montegrappa",
    priceFrom: 135,
    category: "Best Design",
    why: "Italy's oldest pen maker (1912) distilled into a clean, modern design. Inspired by the Dolomites, the Elmo 01 is balanced, lightweight, and writes smoothly. A refined entry into Italian luxury.",
  },
  {
    name: "Visconti Van Gogh",
    slug: "van-gogh",
    brandSlug: "visconti",
    priceFrom: 159,
    category: "Best Art Pen",
    why: "Each colorway is inspired by a Van Gogh painting. Swirl acrylic resin bodies that are genuinely beautiful. The steel nib is smooth and well-tuned. An art pen that writes as good as it looks.",
  },
  {
    name: "Leonardo Momento Zero",
    slug: "momento-zero",
    brandSlug: "leonardo",
    priceFrom: 179,
    category: "Best Piston Filler Under $200",
    why: "A 14K gold nib, piston filler, and stunning Italian resin. The Momento Zero punches far above its weight class. Massive ink capacity and a writing experience that rivals pens costing twice as much.",
  },
  {
    name: "Visconti Rembrandt",
    slug: "rembrandt",
    brandSlug: "visconti",
    priceFrom: 195,
    category: "Best Mid-Range",
    why: "Visconti's refined mid-range option with their proprietary My Pen System (interchangeable cap top). Swirl acrylic resin, smooth steel nib, and the unmistakable Visconti clip design.",
  },
  {
    name: "Aurora 88",
    slug: "88",
    brandSlug: "aurora",
    priceFrom: 379,
    category: "Best Heritage Pen",
    why: "A modern reinterpretation of the iconic 1947 Aurora 88 that launched the brand. Piston filler, 18K gold nib, cigar-shaped design. A piece of Italian pen history in your hand.",
  },
  {
    name: "Aurora Optima",
    slug: "optima",
    brandSlug: "aurora",
    priceFrom: 489,
    category: "Best Luxury",
    why: "Aurora's flagship. Auroloide resin barrel, 18K gold nib, piston filler, and the iconic tuning-fork clip. Often considered one of the finest luxury fountain pens made anywhere in the world.",
  },
  {
    name: "Visconti Homo Sapiens",
    slug: "homo-sapiens",
    brandSlug: "visconti",
    priceFrom: 599,
    category: "Best Ultra-Luxury",
    why: "Made from real volcanic lava from Mount Etna. The body is virtually indestructible and has a unique matte texture. 18K gold nib, vacuum power filler, magnetic cap. A pen unlike anything else.",
  },
];

const quickComparison = italianPens.map((p) => ({
  name: p.name,
  brand: p.brandSlug.charAt(0).toUpperCase() + p.brandSlug.slice(1),
  price: `$${p.priceFrom}`,
  category: p.category,
}));

export default function BestItalianFountainPensPage() {
  const faqItems = [
    {
      question: "What makes Italian fountain pens different from Japanese or German pens?",
      answer: "Italian fountain pens are distinguished by their emphasis on design and materials. Italian pen makers use stunning hand-turned resins (Aurora's Auroloide), innovative materials (Visconti's volcanic lava), and bold color palettes inspired by Italian art and culture. While Japanese pens focus on nib precision and German pens on engineering precision, Italian pens prioritize the overall aesthetic experience and writing pleasure.",
    },
    {
      question: "What is the best Italian fountain pen for beginners?",
      answer: "The Aurora Ipsilon ($96) and Leonardo Furore ($89) are the best entry points into Italian fountain pens. The Ipsilon offers a 14K gold nib at an incredible price, while the Furore gives you Leonardo's gorgeous resin colors and smooth steel nib. Both are well-built, reliable writers that showcase Italian craftsmanship.",
    },
    {
      question: "Are Italian fountain pens worth the price?",
      answer: "Italian fountain pens offer exceptional value when you consider the materials and craftsmanship. Brands like Leonardo and Aurora hand-finish their resins and tune each nib individually. The Aurora Ipsilon has a 14K gold nib for under $100 — a price point where most competitors only offer steel. For luxury models, Italian pens are competitively priced against German and Japanese equivalents.",
    },
    {
      question: "What is the most iconic Italian fountain pen?",
      answer: "The Visconti Homo Sapiens is arguably the most iconic, famous for its volcanic lava body from Mount Etna. The Aurora 88 is historically significant as the pen that launched Aurora in 1947. The Delta Dolcevita, with its signature orange barrel, is also deeply iconic among Italian pen enthusiasts.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Best Italian Fountain Pens</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Brand Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Best Italian Fountain Pens in 2026
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            Italy has a rich tradition of fountain pen making — from Aurora&apos;s century-old Turin factory to Visconti&apos;s volcanic lava innovations in Florence. Here are the best Italian fountain pens at every budget, with price comparisons.
          </p>
        </header>

        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
              <thead className="bg-stone-100">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-stone-700">Pen</th>
                  <th className="text-left px-4 py-3 font-semibold text-stone-700">Category</th>
                  <th className="text-right px-4 py-3 font-semibold text-stone-700">From</th>
                </tr>
              </thead>
              <tbody>
                {quickComparison.map((p, i) => (
                  <tr key={i} className="border-t border-stone-100 hover:bg-stone-50 transition-colors">
                    <td className="px-4 py-3">
                      <span className="font-medium text-stone-900">{p.name}</span>
                      <span className="text-stone-400 ml-1.5">({p.brand})</span>
                    </td>
                    <td className="px-4 py-3 text-stone-500">{p.category}</td>
                    <td className="px-4 py-3 text-right font-semibold text-blue-800">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Cards */}
        <section className="space-y-8 mb-12">
          <h2 className="text-xl font-bold text-stone-900">Detailed Picks</h2>
          {italianPens.map((pen, i) => (
            <div key={i} className="p-6 rounded-lg border border-stone-200 bg-white hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs font-medium text-blue-800 bg-blue-50 px-2 py-0.5 rounded">{pen.category}</span>
                  <h3 className="text-lg font-bold text-stone-900 mt-2">
                    <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="hover:text-blue-800 transition-colors">
                      {pen.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-stone-400">{pen.brandSlug.charAt(0).toUpperCase() + pen.brandSlug.slice(1)}</p>
                </div>
                <span className="text-xl font-bold text-blue-800">${pen.priceFrom}</span>
              </div>
              <p className="text-stone-600 leading-relaxed">{pen.why}</p>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-4">
                <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="text-sm text-blue-800 hover:text-blue-600 font-medium transition-colors">
                  Compare prices →
                </Link>
                <Link href={`/brands/${pen.brandSlug}`} className="text-sm text-stone-400 hover:text-stone-600 transition-colors">
                  All {pen.brandSlug.charAt(0).toUpperCase() + pen.brandSlug.slice(1)} models
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Italian Fountain Pen Brands Overview */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Italian Fountain Pen Brands</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/brands/aurora" className="p-4 rounded-lg border border-stone-200 bg-white hover:shadow-md transition-shadow">
              <h3 className="font-bold text-stone-900">Aurora</h3>
              <p className="text-sm text-stone-500 mt-1">Founded 1919, Turin. Italy&apos;s oldest pen manufacturer. Makes their own 18K gold nibs in-house.</p>
              <p className="text-xs text-stone-400 mt-2">3 models · From $96</p>
            </Link>
            <Link href="/brands/visconti" className="p-4 rounded-lg border border-stone-200 bg-white hover:shadow-md transition-shadow">
              <h3 className="font-bold text-stone-900">Visconti</h3>
              <p className="text-sm text-stone-500 mt-1">Founded 1988, Florence. Known for volcanic lava bodies, innovative filling systems, and bold design.</p>
              <p className="text-xs text-stone-400 mt-2">3 models · From $159</p>
            </Link>
            <Link href="/brands/leonardo" className="p-4 rounded-lg border border-stone-200 bg-white hover:shadow-md transition-shadow">
              <h3 className="font-bold text-stone-900">Leonardo</h3>
              <p className="text-sm text-stone-500 mt-1">Founded 2018, Florence. Vintage-inspired designs from the former Delta team. Massive ink capacity.</p>
              <p className="text-xs text-stone-400 mt-2">2 models · From $89</p>
            </Link>
            <Link href="/brands/montegrappa" className="p-4 rounded-lg border border-stone-200 bg-white hover:shadow-md transition-shadow">
              <h3 className="font-bold text-stone-900">Montegrappa</h3>
              <p className="text-sm text-stone-500 mt-1">Founded 1912, Bassano del Grappa. Italy&apos;s oldest pen maker. Bold designs, distinctive clips.</p>
              <p className="text-xs text-stone-400 mt-2">2 models · From $135</p>
            </Link>
            <Link href="/brands/pineider" className="p-4 rounded-lg border border-stone-200 bg-white hover:shadow-md transition-shadow">
              <h3 className="font-bold text-stone-900">Pineider</h3>
              <p className="text-sm text-stone-500 mt-1">Founded 1774, Florence. Supplied pens to Napoleon. Magnetic closure systems and hand-turned resin.</p>
              <p className="text-xs text-stone-400 mt-2">2 models · From $289</p>
            </Link>
            <Link href="/brands/delta" className="p-4 rounded-lg border border-stone-200 bg-white hover:shadow-md transition-shadow">
              <h3 className="font-bold text-stone-900">Delta</h3>
              <p className="text-sm text-stone-500 mt-1">Founded 1982, Naples. Bold, colorful designs inspired by Italian art. The Dolcevita is legendary.</p>
              <p className="text-xs text-stone-400 mt-2">2 models · From $499</p>
            </Link>
          </div>
        </section>

        {/* How to Choose */}
        <section className="mb-12 p-6 rounded-lg bg-stone-50 border border-stone-200">
          <h2 className="text-xl font-bold text-stone-900 mb-4">How to Choose an Italian Fountain Pen</h2>
          <div className="space-y-4 text-stone-600">
            <div>
              <h3 className="font-semibold text-stone-900 mb-1">Budget: Under $150</h3>
              <p>Start with the Leonardo Furore ($89) for incredible value, or the Aurora Ipsilon ($96) for a gold nib at a steel-nib price. The Montegrappa Elmo 01 ($135) offers the best pure design.</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-1">Mid-Range: $150-$400</h3>
              <p>The Leonardo Momento Zero ($179) is the standout here — gold nib, piston filler, gorgeous resin. The Visconti Van Gogh ($159) and Rembrandt ($195) offer art-inspired designs. The Aurora 88 ($379) delivers heritage and prestige.</p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-1">Luxury: $400+</h3>
              <p>The Aurora Optima ($489) is the quintessential Italian luxury pen. The Visconti Homo Sapiens ($599) is truly unique with its volcanic lava body. The Delta Dolcevita ($499) is iconic and bold.</p>
            </div>
          </div>
        </section>

        {/* FAQ with JSON-LD */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-stone-900 mb-2">{faq.question}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="p-6 rounded-lg bg-blue-50 border border-blue-100">
          <h2 className="font-bold text-stone-900 mb-3">Explore More Fountain Pen Guides</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <Link href="/blog/best-japanese-fountain-pens" className="text-sm text-blue-800 hover:underline">Best Japanese Fountain Pens</Link>
            <Link href="/blog/best-fountain-pens-for-beginners" className="text-sm text-blue-800 hover:underline">Best Fountain Pens for Beginners</Link>
            <Link href="/blog/best-fountain-pens-under-200" className="text-sm text-blue-800 hover:underline">Best Fountain Pens Under $200</Link>
            <Link href="/blog/best-gold-nib-fountain-pens-under-200" className="text-sm text-blue-800 hover:underline">Best Gold Nib Pens Under $200</Link>
            <Link href="/blog/fountain-pen-filling-systems-explained" className="text-sm text-blue-800 hover:underline">Filling Systems Explained</Link>
            <Link href="/blog/fountain-pen-nib-sizes-explained" className="text-sm text-blue-800 hover:underline">Nib Sizes Explained</Link>
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
            headline: "Best Italian Fountain Pens in 2026 — Price Comparison Guide",
            description: "Compare prices on the best Italian fountain pens from Aurora, Visconti, Leonardo, Montegrappa, Delta, and Pineider.",
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
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
