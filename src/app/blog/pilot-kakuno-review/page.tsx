import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pilot Kakuno Review 2026 — Best Fountain Pen Under $15? | PenPrice",
  description:
    "In-depth Pilot Kakuno review: nib quality, ink capacity, writing experience, and price comparison across Amazon, JetPens, and Goulet Pens. Is the Kakuno the best beginner fountain pen?",
  openGraph: {
    title: "Pilot Kakuno Review 2026 — Best Fountain Pen Under $15?",
    description:
      "The Pilot Kakuno is a $13 fountain pen with a smiley-face nib. We review its nib quality, ink capacity, and compare prices across retailers.",
    type: "article",
  },
};

const retailers = [
  { name: "Amazon", price: 12.99, url: "https://www.amazon.com/s?k=Pilot+Kakuno+fountain+pen" },
  { name: "JetPens", price: 14.50, url: "https://www.jetpens.com/Pilot-Kakuno-Fountain-Pen/ct/5380" },
  { name: "Goulet Pens", price: 13.00, url: "https://www.gouletpens.com/collections/pilot-kakuno" },
];

const pros = [
  "Incredibly smooth nib for the price — writes like pens 3x the cost",
  "Smiley face nib engraving makes it fun and approachable",
  "Pilot's proprietary cartridges are widely available",
  "Lightweight and comfortable for long writing sessions",
  "Demonstrator version lets you see ink levels",
  "Hexagonal barrel prevents rolling off your desk",
];

const cons = [
  "Proprietary Pilot cartridges — no standard international compatibility",
  "CON-40 converter sold separately and has limited ink capacity",
  "Plastic body feels toy-like (though that's partly the charm)",
  "Cap doesn't post securely on the back",
];

const specs = [
  { label: "Nib Size", value: "Extra Fine, Fine, Medium (steel)" },
  { label: "Filling System", value: "Cartridge / Converter (CON-40)" },
  { label: "Material", value: "ABS plastic" },
  { label: "Weight", value: "11g (without cartridge)" },
  { label: "Length (capped)", value: "14.6 cm / 5.75 inches" },
  { label: "Length (posted)", value: "15.8 cm / 6.22 inches" },
  { label: "Ink Capacity (cartridge)", value: "~0.7ml (standard Pilot)" },
  { label: "Year Introduced", value: "2012" },
];

const faqItems = [
  {
    q: "Is the Pilot Kakuno good for beginners?",
    a: "Absolutely. The Kakuno is one of the best beginner fountain pens available. The smooth steel nib writes effortlessly, the price is hard to beat at under $15, and the smiley face on the nib adds a touch of fun. It's less intimidating than most fountain pens.",
  },
  {
    q: "What is the difference between Pilot Kakuno and Pilot Metropolitan?",
    a: "The Metropolitan has a brass body and weighs about 27g, giving it a premium feel. The Kakuno is plastic and weighs 11g. The Metropolitan comes with a converter included; the Kakuno does not. Both use the same Pilot cartridges. The Kakuno's nib is slightly softer and more forgiving for new writers.",
  },
  {
    q: "Can you use Pilot CON-40 converter with Kakuno?",
    a: "Yes, the Kakuno accepts the Pilot CON-40 converter (sold separately). However, the CON-40 has a small ink capacity. Many users prefer Pilot's proprietary cartridges for convenience and capacity.",
  },
  {
    q: "What nib size should I get for the Pilot Kakuno?",
    a: "For everyday writing on standard paper, the Fine nib is the most versatile. Pilot's Japanese Fine writes finer than Western Fine, so it's great for small handwriting and cheap paper. The Medium is smoother but may bleed through thin paper.",
  },
];

export default function KakunoReviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-900 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-600">Pilot Kakuno Review</span>
      </nav>

      <article>
        <header className="mb-12">
          <p className="text-sm font-medium text-blue-800 mb-2">Review &amp; Price Comparison</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Pilot Kakuno Review 2026: Is It the Best Fountain Pen Under $15?
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            The Pilot Kakuno is a $13 fountain pen with a smiley face engraved on the nib. It sounds like a toy, but it&apos;s one of the smoothest-writing pens at any price. Here&apos;s our full review.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-stone-400">
            <span>Last updated July 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Quick Verdict */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-10">
          <h2 className="font-semibold text-stone-900 mb-2">Quick Verdict</h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            The Pilot Kakuno is the best fountain pen you can buy under $15. Period. The smooth steel nib rivals pens costing three times as much, the smiley face is charming, and the lightweight design makes it perfect for students and anyone new to fountain pens. If you&apos;re hesitating about trying a fountain pen, start here.
          </p>
        </div>

        {/* Price Comparison */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Where to Buy — Price Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-stone-200 rounded-lg overflow-hidden">
              <thead className="bg-stone-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-stone-600">Retailer</th>
                  <th className="text-left px-4 py-3 font-medium text-stone-600">Price</th>
                  <th className="text-left px-4 py-3 font-medium text-stone-600">Link</th>
                </tr>
              </thead>
              <tbody>
                {retailers.map((r, i) => (
                  <tr key={i} className="border-t border-stone-100">
                    <td className="px-4 py-3 font-medium text-stone-900">{r.name}</td>
                    <td className="px-4 py-3 font-semibold text-blue-800">${r.price.toFixed(2)}</td>
                    <td className="px-4 py-3">
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Check Price ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-400 mt-2">Prices as of July 2026. May vary.</p>
        </section>

        {/* Specs */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {specs.map((s, i) => (
              <div key={i} className="flex justify-between py-2 border-b border-stone-100 text-sm">
                <span className="text-stone-500">{s.label}</span>
                <span className="font-medium text-stone-800 text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Nib Deep Dive */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">The Nib: Where the Magic Happens</h2>
          <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
            <p>
              Pilot makes some of the best steel nibs in the world, and the Kakuno&apos;s nib is no exception. Available in Extra Fine, Fine, and Medium, it&apos;s incredibly smooth right out of the box with zero break-in period needed.
            </p>
            <p>
              The Japanese Fine is noticeably finer than Western Fine nibs (like Lamy or Pelikan). This makes it ideal for writing on cheap paper, in margins, or anywhere you need precision. If you have large handwriting, go for the Medium.
            </p>
            <p>
              The smiley face engraved on the nib isn&apos;t just cute — it&apos;s a deliberate design choice. The face points up when you hold the pen at the correct writing angle, serving as a subtle guide for beginners.
            </p>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Pros &amp; Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-800 mb-3">Pros</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                {pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">Cons</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                {cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Who Should Buy */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Who Should Buy the Kakuno?</h2>
          <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
            <p><strong>Students</strong> — The low price, comfortable grip, and fine nib make it perfect for note-taking on standard paper.</p>
            <p><strong> Fountain pen curious</strong> — If you&apos;ve never tried a fountain pen, the Kakuno is the lowest-risk way to find out if you like them.</p>
            <p><strong> fountain pen veterans</strong> — Many experienced users keep a Kakuno in their rotation because it&apos;s lightweight, reliable, and writes beautifully.</p>
            <p><strong> Gift givers</strong> — The smiley face nib and fun colors make it a great gift for anyone who writes.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-stone-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-stone-200 rounded-lg p-5">
                <h3 className="font-medium text-stone-900 mb-2">{item.q}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/blog/best-fountain-pens-for-beginners"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">Best Fountain Pens for Beginners</span>
              <p className="text-stone-500 mt-1">Our top 10 picks for first-time fountain pen users.</p>
            </Link>
            <Link
              href="/blog/lamy-safari-vs-pilot-metropolitan"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">Lamy Safari vs Pilot Metropolitan</span>
              <p className="text-stone-500 mt-1">The two most popular beginner pens go head-to-head.</p>
            </Link>
            <Link
              href="/blog/fountain-pen-nib-sizes-explained"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">Fountain Pen Nib Sizes Explained</span>
              <p className="text-stone-500 mt-1">What do EF, F, M, B mean? A visual guide to nib sizes.</p>
            </Link>
            <Link
              href="/blog/best-fountain-pens-under-20"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">Best Fountain Pens Under $20</span>
              <p className="text-stone-500 mt-1">Quality pens that won&apos;t break the bank.</p>
            </Link>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Pilot Kakuno Review 2026 — Best Fountain Pen Under $15?",
            description:
              "In-depth Pilot Kakuno review: nib quality, ink capacity, writing experience, and price comparison.",
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            mainEntityOfPage: "https://penprice.vercel.app/blog/pilot-kakuno-review",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </div>
  );
}
