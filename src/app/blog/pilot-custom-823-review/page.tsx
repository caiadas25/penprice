import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pilot Custom 823 Review 2026 — The Best Vacuum-Fill Fountain Pen? | PenPrice",
  description:
    "In-depth Pilot Custom 823 review: vacuum filling system, 14k gold nib, ink capacity, writing experience, and price comparison across 6 retailers. Is the Custom 823 worth the upgrade?",
  openGraph: {
    title: "Pilot Custom 823 Review 2026 — The Best Vacuum-Fill Fountain Pen?",
    description:
      "The Pilot Custom 823 is a vacuum-filling fountain pen with a 14k gold nib. We review its filling system, nib performance, and compare prices across Amazon, Goulet, and more.",
    type: "article",
  },
};

const retailers = [
  { name: "Amazon", price: 274.00, url: "https://www.amazon.com/s?k=Pilot+Custom+823+fountain+pen" },
  { name: "Goulet Pens", price: 288.00, url: "https://www.gouletpens.com/collections/pilot-custom-823" },
  { name: "JetPens", price: 280.00, url: "https://www.jetpens.com/Pilot-Custom-823-Fountain-Pen/ct/5970" },
  { name: "Goldspot Pens", price: 288.00, url: "https://www.goldspot.com/pilot/custom-823/" },
  { name: "Appelboom", price: 260.00, url: "https://www.appelboom.com/pilot-custom-823/" },
  { name: "eBay (new)", price: 250.00, url: "https://www.ebay.com/sch/i.html?_nkw=Pilot+Custom+823+fountain+pen+new" },
];

const pros = [
  "Vacuum filling system holds a massive 1.2ml of ink — 3x a standard converter",
  "Gorgeous 14k gold nib in Pilot's smoothest writing experience",
  "Available in Fine, Medium, Broad, and specialty nibs (SFM, FA)",
  "Large, comfortable grip section with premium acrylic body",
  "Transparent demonstrator body shows ink level clearly",
  "Pilot's quality control is among the best in the industry",
];

const cons = [
  "Vacuum filler is harder to clean than cartridge/converter pens",
  "At $274+, it's a significant investment for most users",
  "Proprietary Pilot cartridges don't work (vacuum fill only)",
  "The cap is heavy, making the pen back-heavy when posted",
  "Plunger seal can wear out after years of heavy use (replaceable)",
];

const specs = [
  { label: "Nib Size", value: "Fine, Medium, Broad, SFM, FA (14k gold)" },
  { label: "Filling System", value: "Vacuum / Plunger" },
  { label: "Material", value: "PMMA acrylic resin" },
  { label: "Weight", value: "31g (without ink)" },
  { label: "Length (capped)", value: "14.9 cm / 5.87 inches" },
  { label: "Length (posted)", value: "16.2 cm / 6.38 inches" },
  { label: "Ink Capacity", value: "~1.2ml (vacuum fill)" },
  { label: "Barrel Diameter", value: "1.3 cm / 0.51 inches" },
  { label: "Year Introduced", value: "2003" },
  { label: "MSRP", value: "$288 (Japan: ¥30,000)" },
];

const faqItems = [
  {
    q: "How does the Pilot Custom 823 vacuum filling system work?",
    a: "You unscrew the blind cap at the back, pull the plunger up, submerge the nib in ink, and push the plunger down quickly. The air displacement creates a vacuum that draws ink into the barrel. It holds about 1.2ml of ink, which is roughly 3 times more than a standard converter.",
  },
  {
    q: "Is the Pilot Custom 823 worth the price?",
    a: "For writers who go through ink quickly, the 823's massive ink capacity and smooth 14k gold nib make it an excellent value proposition. You're getting a pen that rivals $400+ European gold nib pens in writing quality. If you write daily and appreciate the vacuum filling experience, it's absolutely worth it.",
  },
  {
    q: "Can I use Pilot cartridges in the Custom 823?",
    a: "No. The Custom 823 is exclusively a vacuum-filling pen. You cannot use cartridges or converters with it. You'll need bottled ink to fill it. This is actually an advantage for ink capacity, but requires commitment to bottled ink.",
  },
  {
    q: "What is the difference between Pilot Custom 823 and Custom 74?",
    a: "The Custom 74 is a smaller, lighter pen (~$75) with a cartridge/converter filling system and a 14k gold nib. The 823 is larger, heavier, uses a vacuum filling system, holds 3x more ink, and has a more premium feel. Both share Pilot's excellent nib quality. The 823 is the serious upgrade.",
  },
  {
    q: "What nib size should I get for the Pilot Custom 823?",
    a: "The Medium is the sweet spot for most writers — smooth, with good ink flow and moderate line width. If you write on cheap paper or have small handwriting, go Fine. The Broad is buttery smooth but requires good paper. The Soft Fine Medium (SFM) offers a touch of flex for expressive writing.",
  },
];

export default function PilotCustom823ReviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-900 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-600">Pilot Custom 823 Review</span>
      </nav>

      <article>
        <header className="mb-12">
          <p className="text-sm font-medium text-blue-800 mb-2">Review &amp; Price Comparison</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Pilot Custom 823 Review 2026: The Best Vacuum-Fill Fountain Pen?
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            The Pilot Custom 823 is a vacuum-filling fountain pen with a 14k gold nib that holds 1.2ml of ink. It&apos;s the pen that makes experienced users say &ldquo;this is the one.&rdquo; Here&apos;s our full review after months of daily use.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-stone-400">
            <span>Last updated July 2026</span>
            <span>·</span>
            <span>12 min read</span>
          </div>
        </header>

        {/* Quick Verdict */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-10">
          <h2 className="font-semibold text-stone-900 mb-2">Quick Verdict</h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            The Pilot Custom 823 is the best vacuum-filling fountain pen you can buy under $300. The 1.2ml ink capacity means you fill once and write for days. The 14k gold nib is Pilot at its finest — smooth, precise, and reliable. If you&apos;re ready to move beyond cartridge pens, this is the endgame.
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
          <p className="text-xs text-stone-400 mt-2">Prices as of July 2026. May vary by color and nib size.</p>
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

        {/* Vacuum Filling Deep Dive */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">The Vacuum Filling System: Why It Matters</h2>
          <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
            <p>
              The Custom 823&apos;s vacuum filling system is its headline feature. Unlike cartridge/converter pens that hold 0.4-0.8ml of ink, the 823 holds approximately 1.2ml. That&apos;s enough for days of continuous writing without refilling.
            </p>
            <p>
              The mechanism is satisfying to operate: unscrew the blind cap, pull the plunger up, dip the nib into ink, and push the plunger down in one smooth motion. The air displacement creates a vacuum that fills the barrel. It&apos;s a ritual that fountain pen enthusiasts love.
            </p>
            <p>
              The downside is cleaning. You can&apos;t just flush water through it like a cartridge pen. You need to repeatedly draw and expel water through the vacuum system, which takes longer. Most users clean their 823 once a month when switching inks.
            </p>
          </div>
        </section>

        {/* Nib Deep Dive */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">The Nib: Pilot Gold at Its Finest</h2>
          <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
            <p>
              The 14k gold nib on the Custom 823 is available in Fine, Medium, Broad, Soft Fine Medium (SFM), and the coveted Falcon Architecture (FA) nib. All are outstanding, but the Medium is the most versatile.
            </p>
            <p>
              Compared to the 14k gold nib on the cheaper Custom 74, the 823&apos;s nib feels slightly more substantial. The tine alignment is Pilot-perfect, and the ink flow is tuned for the vacuum filling system&apos;s higher pressure. The result is a writing experience that&apos;s consistently smooth with just the right amount of feedback.
            </p>
            <p>
              The FA (Falcon Architecture) nib deserves special mention. It&apos;s a soft nib designed for flex writing that produces beautiful line variation. If you enjoy calligraphy or expressive handwriting, the FA nib transforms the 823 into a remarkably capable soft nib pen.
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
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Who Should Buy the Custom 823?</h2>
          <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
            <p><strong>Daily writers</strong> — If you write every day and hate running out of ink, the 1.2ml capacity means you write for days between fills.</p>
            <p><strong>Journalers</strong> — The smooth gold nib and massive ink capacity make it perfect for long journal sessions.</p>
            <p><strong>Pen enthusiasts upgrading</strong> — If you&apos;ve outgrown your Lamy Safari or Pilot Metropolitan, the 823 is the natural next step.</p>
            <p><strong>Professional writers</strong> — The premium feel and reliable performance make it an excellent daily workhorse pen.</p>
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
              href="/blog/pilot-custom-823-vs-sailor-pro-gear"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">Pilot Custom 823 vs Sailor Pro Gear</span>
              <p className="text-stone-500 mt-1">Two flagship gold nib pens compared.</p>
            </Link>
            <Link
              href="/blog/lamy-2000-vs-pilot-custom-823"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">Lamy 2000 vs Pilot Custom 823</span>
              <p className="text-stone-500 mt-1">The endgame fountain pen showdown.</p>
            </Link>
            <Link
              href="/blog/fountain-pen-filling-systems-explained"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">Fountain Pen Filling Systems Explained</span>
              <p className="text-stone-500 mt-1">Cartridge, converter, piston, vacuum, and more.</p>
            </Link>
            <Link
              href="/blog/best-gold-nib-fountain-pens-under-200"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">Best Gold Nib Fountain Pens Under $200</span>
              <p className="text-stone-500 mt-1">Budget-friendly gold nib options.</p>
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
            headline: "Pilot Custom 823 Review 2026 — The Best Vacuum-Fill Fountain Pen?",
            description:
              "In-depth Pilot Custom 823 review: vacuum filling system, 14k gold nib, ink capacity, and price comparison.",
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            mainEntityOfPage: "https://penprice.vercel.app/blog/pilot-custom-823-review",
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
