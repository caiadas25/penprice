import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lamy 2000 Review 2026 — The Iconic Piston Filler | PenPrice",
  description:
    "In-depth Lamy 2000 review: 14k gold nib, piston filling, Makrolon body, writing experience, and price comparison across retailers. Is the Lamy 2000 still worth it in 2026?",
  openGraph: {
    title: "Lamy 2000 Review 2026 — The Iconic Piston Filler",
    description:
      "The Lamy 2000 has been in production since 1966. We review its 14k gold nib, piston filling, and compare prices across Amazon, Goulet, and more.",
    type: "article",
  },
};

const retailers = [
  { name: "Amazon", price: 205.00, url: "https://www.amazon.com/s?k=Lamy+2000+fountain+pen" },
  { name: "Goulet Pens", price: 219.00, url: "https://www.gouletpens.com/collections/lamy-2000" },
  { name: "JetPens", price: 219.00, url: "https://www.jetpens.com/Lamy-2000-Fountain-Pen/ct/1330" },
  { name: "Goldspot Pens", price: 215.00, url: "https://www.goldspot.com/lamy/2000/" },
  { name: "Appelboom", price: 195.00, url: "https://www.appelboom.com/lamy-2000/" },
  { name: "eBay (new)", price: 185.00, url: "https://www.ebay.com/sch/i.html?_nkw=Lamy+2000+fountain+pen+new" },
];

const pros = [
  "Seamless, minimalist design by Gerd A. Muller (1966) — still looks modern today",
  "14k gold nib with a uniquely smooth, feedback-free writing experience",
  "Piston filling system with excellent ink capacity (~1.3ml)",
  "Makrolon fiberglass body is lightweight and virtually indestructible",
  "Brushed stainless steel clip and piston knob add premium feel",
  "Made in Germany with outstanding quality control",
  "Snap cap posts securely and posts flush to the body",
];

const cons = [
  "The piston knob is flush-mounted and can be hard to grip when filling",
  "No ink window — you can't see how much ink is left",
  "The nib is partially hooded, making nib swaps more difficult than other Lamy pens",
  "Some users find the grip section too short for large hands",
  "At $200+, it's a significant step up from the Lamy Safari",
  "The snap cap can loosen over years of heavy use",
];

const specs = [
  { label: "Nib Size", value: "Extra Fine, Fine, Medium, Broad, Oblique (14k gold)" },
  { label: "Filling System", value: "Piston" },
  { label: "Material", value: "Makrolon fiberglass body, brushed stainless steel" },
  { label: "Weight", value: "25g (without ink)" },
  { label: "Length (capped)", value: "13.9 cm / 5.47 inches" },
  { label: "Length (posted)", value: "15.2 cm / 5.98 inches" },
  { label: "Ink Capacity", value: "~1.3ml (piston fill)" },
  { label: "Barrel Diameter", value: "1.3 cm / 0.51 inches" },
  { label: "Year Introduced", value: "1966" },
  { label: "MSRP", value: "$219" },
];

const faqItems = [
  {
    q: "Is the Lamy 2000 worth the price in 2026?",
    a: "Absolutely. The Lamy 2000 has been in continuous production for 60 years because it does everything right. The 14k gold nib, piston filling, and timeless design make it one of the best value propositions in the $200+ fountain pen range. You're buying a pen that will last decades.",
  },
  {
    q: "What is the difference between Lamy 2000 and Lamy Safari?",
    a: "The Safari is a $30 plastic pen with a steel nib and cartridge/converter filling. The 2000 is a $200+ pen with a 14k gold nib, piston filling, and a Makrolon fiberglass body. The 2000 is an entirely different class of pen. The Safari is an excellent beginner pen; the 2000 is an endgame pen.",
  },
  {
    q: "Does the Lamy 2000 have an ink window?",
    a: "No. This is one of the most common complaints about the Lamy 2000. There is no way to see the ink level without unscrewing the piston knob and checking the feed. Some users keep track of fills mentally, while others use a syringe to check the remaining ink.",
  },
  {
    q: "What nib size should I get for the Lamy 2000?",
    a: "The Lamy 2000 nibs run wider than most Western nibs. If you normally use a Fine, you might prefer the Extra Fine on the Lamy 2000. The Medium writes closer to a Western Broad. The Fine is the most versatile choice for everyday writing.",
  },
  {
    q: "Can I swap nibs on the Lamy 2000?",
    a: "Yes, but it's more difficult than swapping nibs on a Lamy Safari. The Lamy 2000 uses a friction-fit nib and feed that requires careful removal. Lamy sells replacement nibs separately, and many pen shops offer nib tuning services if you want to customize the writing experience.",
  },
  {
    q: "How does the Lamy 2000 compare to the Pilot Custom 823?",
    a: "Both are piston/vacuum fillers with 14k gold nibs in the $200-300 range. The 823 has a larger ink capacity (1.2ml vs 1.3ml — actually comparable) and a more premium feel. The Lamy 2000 is lighter, more minimalist, and has a snap cap vs the 823's screw cap. The 823 nib is smoother; the 2000 nib has more character. Choose the 823 for pure writing smoothness, the 2000 for design and lightweight carry.",
  },
];

export default function Lamy2000ReviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-900 transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-600">Lamy 2000 Review</span>
      </nav>

      <article>
        <header className="mb-12">
          <p className="text-sm font-medium text-blue-800 mb-2">Review &amp; Price Comparison</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Lamy 2000 Review 2026: The Iconic Piston Filler
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            The Lamy 2000 has been in continuous production since 1966. It&apos;s the pen that defines &ldquo;timeless design&rdquo; in the fountain pen world. Here&apos;s our full review after months of daily use.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-stone-400">
            <span>Last updated July 2026</span>
            <span>·</span>
            <span>11 min read</span>
          </div>
        </header>

        {/* Quick Verdict */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-10">
          <h2 className="font-semibold text-stone-900 mb-2">Quick Verdict</h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            The Lamy 2000 is the best-designed fountain pen under $300. Sixty years in production, and it still looks like the future. The 14k gold nib is uniquely smooth, the piston filling holds 1.3ml of ink, and the Makrolon body is nearly indestructible. If you want one pen that does everything well, this is it.
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
          <p className="text-xs text-stone-400 mt-2">Prices as of July 2026. May vary by nib size and finish.</p>
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

        {/* Design Deep Dive */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">The Design: 60 Years of Perfection</h2>
          <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
            <p>
              Designed by Gerd A. Muller in 1966, the Lamy 2000 is a masterclass in Bauhaus-inspired minimalism. Every line serves a purpose. The brushed Makrolon fiberglass body is seamless — there are no visible seams, no decorative rings, no clip engravings. It&apos;s a pen that disappears in your hand and lets the writing take center stage.
            </p>
            <p>
              The clip is spring-loaded stainless steel that works as well today as it did in 1966. The piston knob is flush-mounted at the end of the barrel, maintaining the clean silhouette. When you post the cap, it sits flush against the body — no wobble, no rattling.
            </p>
            <p>
              At 25 grams, it&apos;s remarkably light for a piston-filling pen. The weight distribution is perfect whether you write with the cap posted or unposted. The brushed finish hides fingerprints and scratches, making it an ideal everyday carry pen that still looks great after years of use.
            </p>
          </div>
        </section>

        {/* Nib Deep Dive */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">The Nib: Smooth Without Being Boring</h2>
          <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
            <p>
              The Lamy 2000 uses a 14k gold nib that&apos;s partially hooded — meaning only the tip is visible. This design reduces ink evaporation and gives the nib a unique, almost frictionless writing feel. It&apos;s not buttery-smooth like a Pilot gold nib; it has a distinctive &ldquo;Lamy smooth&rdquo; character that&apos;s hard to describe but instantly recognizable.
            </p>
            <p>
              The nib is available in Extra Fine, Fine, Medium, Broad, and Oblique. Lamy&apos;s nib sizing runs larger than Japanese nibs and slightly larger than most Western brands. A Lamy Fine writes like a Japanese Medium. If you have small handwriting, the Extra Fine is the way to go.
            </p>
            <p>
              One unique feature: the Lamy 2000&apos;s nib can be tuned by Lamy&apos;s factory. If you want a wetter or drier writer, or a specific line variation, Lamy offers nib customization services. This is rare among pen manufacturers and adds significant value.
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
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Who Should Buy the Lamy 2000?</h2>
          <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
            <p><strong>Design enthusiasts</strong> — If you appreciate minimalist industrial design, the Lamy 2000 is the most beautiful fountain pen ever made.</p>
            <p><strong>Everyday writers</strong> — Lightweight, durable, and comfortable for long writing sessions. The snap cap makes it quick to deploy.</p>
            <p><strong>Pilot Custom 823 alternatives</strong> — If the 823 is too heavy or the vacuum filler is too fussy, the Lamy 2000 offers a similar gold nib experience in a lighter, simpler package.</p>
            <p><strong>Upgraders from Lamy Safari</strong> — If you love your Safari but want gold nib quality, the 2000 is the natural evolution of the Lamy design philosophy.</p>
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
              href="/blog/lamy-2000-vs-pilot-custom-823"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">Lamy 2000 vs Pilot Custom 823</span>
              <p className="text-stone-500 mt-1">Two gold nib endgame pens compared.</p>
            </Link>
            <Link
              href="/blog/lamy-safari-review"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">Lamy Safari Review</span>
              <p className="text-stone-500 mt-1">The beginner pen that started it all.</p>
            </Link>
            <Link
              href="/blog/fountain-pen-filling-systems-explained"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">Fountain Pen Filling Systems Explained</span>
              <p className="text-stone-500 mt-1">Cartridge, converter, piston, vacuum, and more.</p>
            </Link>
            <Link
              href="/blog/best-japanese-fountain-pens"
              className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm"
            >
              <span className="font-medium text-stone-900">Best Japanese Fountain Pens</span>
              <p className="text-stone-500 mt-1">Pilot, Platinum, Sailor — the big three.</p>
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
            headline: "Lamy 2000 Review 2026 — The Iconic Piston Filler",
            description:
              "In-depth Lamy 2000 review: 14k gold nib, piston filling, Makrolon body, and price comparison.",
            datePublished: "2026-07-01",
            dateModified: "2026-07-01",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            mainEntityOfPage: "https://penprice.vercel.app/blog/lamy-2000-review",
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
