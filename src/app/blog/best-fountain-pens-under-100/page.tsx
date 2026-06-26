import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Best Fountain Pens Under $100 in 2026 — Price Comparison Guide | PenPrice",
  description:
    "Discover the best fountain pens under $100. Compare live prices on the Lamy 2000, Sailor Pro Gear Slim, Pilot Custom 74, Kaweco Dia2, and more across Amazon, JetPens, and Goulet Pens.",
  openGraph: {
    title: "Best Fountain Pens Under $100 — 2026 Price Comparison",
    description: "Compare prices on the top-rated mid-range fountain pens. Lamy 2000 vs Sailor Pro Gear vs Pilot Custom 74 — find the best deal.",
    type: "article",
  },
};

interface PenRecommendation {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  why: string;
}

const recommendations: PenRecommendation[] = [
  {
    name: "Pilot Custom 74",
    slug: "custom-74",
    brandSlug: "pilot",
    priceFrom: 72.00,
    why: "Pilot's gateway to gold nibs. A 14k gold nib that writes with incredible smoothness and a hint of spring. The soft fine nib is a revelation at this price. One of the best value gold nib pens ever made.",
  },
  {
    name: "TWSBI Diamond 580",
    slug: "diamond-580",
    brandSlug: "twsbi",
    priceFrom: 62.99,
    why: "The premium version of the TWSBI Eco. Larger body, faceted demonstrator design, and a piston filler with massive ink capacity. The 1.1mm stub nib option is excellent for headings and emphasis.",
  },
  {
    name: "Kaweco Dia2",
    slug: "dia-2",
    brandSlug: "kaweco",
    priceFrom: 85.00,
    why: "A modern reinterpretation of the 1920s Dia design. Brass body with chrome trim, snap cap, and a smooth Kaweco steel nib. Compact when capped, comfortable when posted. One of the most stylish pens under $100.",
  },
  {
    name: "Conklin Duragraph",
    slug: "duragraph",
    brandSlug: "conklin",
    priceFrom: 52.00,
    why: "A robust demonstrator pen with a faceted cap and smooth steel nib. The Duragraph has satisfying heft, a comfortable grip, and comes in dozens of color combinations. A sleeper pick.",
  },
  {
    name: "Faber-Castell Ambition",
    slug: "ambition",
    brandSlug: "faber-castell",
    priceFrom: 75.00,
    why: "Faber-Castell's premium steel nib pen. The Ambition features a matte metal body, snap cap, and their signature smooth steel nib. It's a serious writing instrument that looks and feels expensive.",
  },
  {
    name: "Lamy Studio",
    slug: "studio",
    brandSlug: "lamy",
    priceFrom: 79.00,
    why: "Lamy's step up from the Safari. Aluminum body with a brushed finish and a distinctive propeller-shaped clip. Same great Lamy steel nib system with interchangeable nibs. More refined, same reliability.",
  },
  {
    name: "Monteverde Ritma",
    slug: "ritma",
    brandSlug: "monteverde",
    priceFrom: 42.00,
    why: "A magnetic-capped pen with a minimalist hexagonal stainless steel body. The cap posts with a satisfying magnetic snap. Smooth JoWo steel nib. Exceptional build quality for the price.",
  },
  {
    name: "Sailor Pro Gear Slim",
    slug: "pro-gear",
    brandSlug: "sailor",
    priceFrom: 96.00,
    why: "The entry point to Sailor's legendary 21k gold nib. The Pro Gear Slim has a distinctive flat top, a two-tone nib with amazing feedback, and comes in dozens of limited edition colors. The nib alone is worth the price.",
  },
];

function PenCard({ pen }: { pen: PenRecommendation }) {
  const brand = brands.find((b) => b.slug === pen.brandSlug);
  const model = brand?.models.find((m) => m.slug === pen.slug);

  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 hover:border-amber-600/50 transition-all">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-bold text-white">
            <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="hover:text-amber-400 transition-colors">
              {pen.name}
            </Link>
          </h3>
          <p className="text-sm text-slate-400">{brand?.name} &middot; {brand?.country}</p>
        </div>
        <div className="text-right">
          <p className="text-amber-400 font-bold text-lg">From ${pen.priceFrom.toFixed(2)}</p>
          {model?.msrp && (
            <p className="text-xs text-slate-500">MSRP ${model.msrp}</p>
          )}
        </div>
      </div>
      <p className="text-sm text-slate-300 leading-relaxed mb-3">{pen.why}</p>
      {model && (
        <div className="flex flex-wrap gap-2">
          {model.knownPrices.map((price) => (
            <a
              key={`${price.retailer}-${price.price}`}
              href={price.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full hover:bg-slate-600/50 hover:text-white transition-colors"
            >
              {price.retailer}: ${price.price.toFixed(2)} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BestUnder100Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">Best Fountain Pens Under $100</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-amber-400 text-sm font-medium mb-2">Price Comparison Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Best Fountain Pens Under $100 in 2026
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            The $50 to $100 range is the sweet spot for fountain pens. You get gold nibs, piston fillers,
            and premium build quality without breaking the bank. Here are 8 pens that punch well above their weight.
          </p>
        </header>

        {/* TL;DR */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-white mb-3">TL;DR — Quick Picks</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><span className="text-amber-400 font-semibold">Best gold nib under $100:</span> Pilot Custom 74 — 14k gold nib at ~$72, incredible value</li>
            <li><span className="text-amber-400 font-semibold">Best demonstrator:</span> TWSBI Diamond 580 — piston filler, faceted body, massive ink capacity</li>
            <li><span className="text-amber-400 font-semibold">Best everyday carry:</span> Kaweco Dia2 — compact brass pen, snap cap, vintage design</li>
            <li><span className="text-amber-400 font-semibold">Best for small handwriting:</span> Sailor Pro Gear Slim — legendary 21k nib with precise feedback</li>
            <li><span className="text-amber-400 font-semibold">Best magnetic cap:</span> Monteverde Ritma — hexagonal steel body, magnetic closure</li>
            <li><span className="text-amber-400 font-semibold">Best value under $60:</span> Conklin Duragraph — robust build, smooth nib, dozens of colors</li>
          </ul>
        </div>

        {/* Pens */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">The Full List</h2>
          <div className="grid gap-4">
            {recommendations.map((pen) => (
              <PenCard key={pen.slug} pen={pen} />
            ))}
          </div>
        </section>

        {/* Buyer's Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Buying Guide: Gold vs Steel Nibs</h2>
          <div className="prose prose-invert max-w-none space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>
              <strong className="text-white">The $50-$100 range is where gold nibs start appearing.</strong> A
              14k gold nib offers a subtle springiness that steel nibs can&apos;t match. It&apos;s not
              about softness — it&apos;s about the nib flexing slightly under pressure, giving your writing
              more character and feeling more responsive.
            </p>
            <p>
              <strong className="text-white">Don&apos;t overlook steel nibs at this price.</strong> The
              TWSBI Diamond 580 and Monteverde Ritma have steel nibs that write beautifully. A premium steel
              nib can be just as smooth as a gold nib — it just won&apos;t flex the same way.
            </p>
            <p>
              <strong className="text-white">Filling systems matter more here.</strong> Under $50, most pens
              are cartridge/converter. At $50-$100, you can get piston fillers (TWSBI, Lamy 2000 at the top
              end), which hold more ink and feel more premium.
            </p>
            <p>
              <strong className="text-white">Limited editions are everywhere.</strong> Sailor and TWSBI release
              dozens of colorways each year. The pen itself is identical — you&apos;re paying for the color.
              If you don&apos;t care about collecting, the standard colors are usually cheaper.
            </p>
            <p>
              <strong className="text-white">Check retailer prices.</strong> The same pen can vary by $10-20
              between retailers. Amazon often has the best price on Pilot and TWSBI pens. Goulet Pens is best
              for Lamy and Noodler&apos;s. JetPens excels at Japanese brands.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">What is the best fountain pen under $100?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The <Link href="/brands/pilot/custom-74" className="text-amber-400 hover:underline">Pilot Custom 74</Link> is
                widely considered the best fountain pen under $100. It offers a 14k gold nib — something almost
                no other pen at this price can match — with Pilot&apos;s legendary nib quality and smooth writing
                experience. It&apos;s the gateway to gold nib pens for good reason.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Are gold nibs worth it under $100?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Yes, but with caveats. A 14k gold nib (like the Pilot Custom 74&apos;s) offers subtle springiness
                and responsiveness that steel nibs lack. However, a well-tuned steel nib like the TWSBI&apos;s
                or Lamy&apos;s can be just as smooth for daily writing. Gold nibs are worth it if you value
                that extra writing feel.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Should I buy a fountain pen from Amazon?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Amazon often has the best prices, especially for Pilot, TWSBI, and Lamy pens. However,
                watch for third-party sellers with inflated prices. Check the seller rating and compare
                with <Link href="/brands/lamy/safari" className="text-amber-400 hover:underline">specialty retailers</Link> like
                Goulet Pens and JetPens, which offer better customer service and nib tuning options.
              </p>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="border-t border-slate-700 pt-8">
          <h2 className="text-lg font-bold text-white mb-4">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/best-fountain-pens-under-50" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Best Under $50 →</span>
              <span className="block text-slate-500 mt-1">Budget picks: Pilot Metropolitan, TWSBI Eco, Kaweco Sport</span>
            </Link>
            <Link href="/blog/best-fountain-pens-under-20" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Best Under $20 →</span>
              <span className="block text-slate-500 mt-1">Ultra-budget: Platinum Preppy, Jinhao X450, Noodler&apos;s Ahab</span>
            </Link>
            <Link href="/blog/best-japanese-fountain-pens" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Best Japanese Pens →</span>
              <span className="block text-slate-500 mt-1">Pilot, Sailor, Platinum, TWSBI — Japan dominates fountain pens</span>
            </Link>
            <Link href="/brands/sailor" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">All Sailor Pens →</span>
              <span className="block text-slate-500 mt-1">1911, Pro Gear, King of Pens — legendary gold nibs</span>
            </Link>
            <Link href="/brands/pilot" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">All Pilot Pens →</span>
              <span className="block text-slate-500 mt-1">Metropolitan, Custom 74, Custom 823, Vanishing Point</span>
            </Link>
            <Link href="/blog/fountain-pen-nib-sizes-explained" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Nib Sizes Explained →</span>
              <span className="block text-slate-500 mt-1">Japanese vs Western nib sizes, gold vs steel, specialty nibs</span>
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
            headline: "Best Fountain Pens Under $100 in 2026",
            description: "Compare live prices on the best mid-range fountain pens including Pilot Custom 74, TWSBI Diamond 580, Sailor Pro Gear Slim, and more.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-06-26",
            dateModified: "2026-06-26",
            mainEntityOfPage: "https://penprice.vercel.app/blog/best-fountain-pens-under-100",
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
                name: "What is the best fountain pen under $100?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Pilot Custom 74 is widely considered the best fountain pen under $100. It offers a 14k gold nib with Pilot's legendary nib quality and smooth writing experience.",
                },
              },
              {
                "@type": "Question",
                name: "Are gold nibs worth it under $100?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. A 14k gold nib offers subtle springiness and responsiveness that steel nibs lack. However, a well-tuned steel nib can be just as smooth for daily writing.",
                },
              },
              {
                "@type": "Question",
                name: "Should I buy a fountain pen from Amazon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Amazon often has the best prices for Pilot, TWSBI, and Lamy pens. Watch for third-party sellers with inflated prices and compare with specialty retailers like Goulet Pens and JetPens.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
