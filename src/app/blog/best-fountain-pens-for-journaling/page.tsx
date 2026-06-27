import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Best Fountain Pens for Journaling in 2026 — Top Picks for Daily Writing | PenPrice",
  description:
    "Find the best fountain pen for journaling with our 2026 guide. Compare prices on Pilot Custom 823, Lamy Safari, TWSBI Eco, and more across Amazon, JetPens, and Goulet Pens. Tips on nib sizes, ink flow, and comfort for long writing sessions.",
  openGraph: {
    title: "Best Fountain Pens for Journaling in 2026",
    description:
      "The best fountain pens for journaling, compared by comfort, ink capacity, and price. Pilot Custom 823, Lamy 2000, TWSBI Eco, and more.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fountain Pens for Journaling in 2026",
    description:
      "Top fountain pens for journaling compared by comfort, ink capacity, and price. Full guide with price comparisons.",
  },
};

interface PenRec {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  why: string;
  bestFor: string;
}

const recommendations: PenRec[] = [
  {
    name: "Pilot Custom 823",
    slug: "custom-823",
    brandSlug: "pilot",
    priceFrom: 289.99,
    why: "The vacuum-filling system holds enough ink for weeks of daily journaling without refilling. The 14k gold #15 nib is smooth and springy, making long writing sessions effortless. The cigar-shaped body is perfectly balanced for extended use.",
    bestFor: "Extended journaling sessions where ink capacity matters most",
  },
  {
    name: "TWSBI Eco",
    slug: "eco",
    brandSlug: "twsbi",
    priceFrom: 32.99,
    why: "The king of ink capacity. The piston-filling TWSBI Eco holds over 1.5ml of ink, enough for weeks of daily journaling. The transparent demonstrator lets you see your ink level at a glance. At under $35, it is the best value journaling pen available.",
    bestFor: "Budget journaling with maximum ink capacity",
  },
  {
    name: "Lamy 2000",
    slug: "2000",
    brandSlug: "lamy",
    priceFrom: 179.99,
    why: "The brushed Makrolon body is virtually weightless and the piston-filling system provides generous ink capacity. The hooded 14k gold nib writes smoothly on any paper. A minimalist design that has remained unchanged since 1966 because it works.",
    bestFor: "Comfort and build quality for daily journaling",
  },
  {
    name: "Pilot Metropolitan",
    slug: "metropolitan",
    brandSlug: "pilot",
    priceFrom: 19.99,
    why: "The most recommended first fountain pen for journaling. The stainless steel nib writes smoothly, the brass body feels premium, and the squeeze converter is easy to fill. Under $20 makes it a risk-free way to start journaling with a fountain pen.",
    bestFor: "Beginners starting their journaling journey",
  },
  {
    name: "Lamy Safari",
    slug: "safari",
    brandSlug: "lamy",
    priceFrom: 29.99,
    why: "The triangular grip section trains proper hand posture, which matters when journaling for 30+ minutes. The wide range of nib sizes lets you match your writing style. The left-handed nib option makes it one of the few pens designed for southpaw journalers.",
    bestFor: "Ergonomic grip for long journaling sessions",
  },
  {
    name: "Sailor Pro Gear",
    slug: "pro-gear",
    brandSlug: "sailor",
    priceFrom: 296.00,
    why: "The 21k gold nib has a unique pencil-like feedback that many journalers prefer for its tactile writing feel. The flat-top design posts securely and the bicolor nib adds a touch of luxury to every page. A pen that makes journaling feel like a ritual.",
    bestFor: "Journalers who enjoy tactile feedback while writing",
  },
  {
    name: "TWSBI Diamond 580",
    slug: "diamond-580",
    brandSlug: "twsbi",
    priceFrom: 62.99,
    why: "An upgrade over the Eco with a faceted demonstrator body and slightly larger ink capacity. The 1.1mm stub nib option is excellent for headers and section breaks in journals. The premium feel at under $65 makes it a sweet spot for serious journalers.",
    bestFor: "Journalers who want a premium feel at a mid-range price",
  },
];

export default function BestFountainPensForJournalingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Fountain Pens for Journaling in 2026",
    description:
      "The best fountain pens for journaling compared by comfort, ink capacity, and price. Pilot Custom 823, Lamy 2000, TWSBI Eco, and more.",
    datePublished: "2026-06-27",
    author: {
      "@type": "Organization",
      name: "PenPrice",
      url: "https://penprice.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "PenPrice",
      url: "https://penprice.vercel.app",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best fountain pen for journaling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The TWSBI Eco is the best overall fountain pen for journaling due to its massive ink capacity, comfortable grip, and affordable $33 price. For premium journaling, the Pilot Custom 823 offers weeks of ink capacity and a luxurious 14k gold nib.",
        },
      },
      {
        "@type": "Question",
        name: "What nib size is best for journaling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Fine or Medium nib is ideal for most journalers. Fine nibs work well on thinner paper (like Moleskine or Leuchtturm1917) without bleeding through, while Medium nibs offer a smoother writing experience on fountain-pen-friendly paper like Rhodia or Clairefontaine.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a fountain pen ink cartridge last for journaling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard cartridge lasts about 1-2 weeks of daily journaling (1-2 pages per day). Piston-filling pens like the TWSBI Eco or Lamy 2000 hold 3-5x more ink and can last 4-8 weeks between refills, making them ideal for dedicated journalers.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-amber-400 transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-400">
            Best Fountain Pens for Journaling
          </span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-900/30 text-amber-400 mb-3 inline-block">
              Buying Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Best Fountain Pens for Journaling in 2026
            </h1>
            <p className="text-lg text-slate-400">
              Fountain pens transform journaling from a chore into a ritual. The
              right pen turns blank pages into something you look forward to
              filling. We compared ink capacity, nib comfort, and value to find
              the best pens for daily journal writing.
            </p>
          </header>

          {/* Key Takeaway */}
          <div className="bg-amber-950/30 border border-amber-900/50 rounded-lg p-6 mb-10">
            <h2 className="text-lg font-bold text-amber-400 mb-2">
              Quick Picks
            </h2>
            <ul className="space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Best Value:</strong> TWSBI Eco ($33) — enormous ink capacity, transparent body, comfortable for long sessions
              </li>
              <li>
                <strong className="text-white">Best Overall:</strong> Pilot Custom 823 ($290) — vacuum filler, weeks of ink, gold nib that glides
              </li>
              <li>
                <strong className="text-white">Best for Beginners:</strong> Pilot Metropolitan ($20) — smooth steel nib, premium brass body, risk-free entry
              </li>
              <li>
                <strong className="text-white">Best Premium:</strong> Lamy 2000 ($180) — timeless design, piston filler, hooded gold nib
              </li>
            </ul>
          </div>

          {/* Recommendations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Top Pens for Journaling
            </h2>
            <div className="space-y-6">
              {recommendations.map((pen, index) => {
                const brand = brands.find((b) => b.slug === pen.brandSlug);
                const model = brand?.models.find((m) => m.slug === pen.slug);
                const lowestPrice = model
                  ? Math.min(...model.knownPrices.map((p) => p.price))
                  : pen.priceFrom;

                return (
                  <div
                    key={pen.slug}
                    className="bg-slate-900/50 border border-slate-800 rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs text-slate-500 font-medium">
                          #{index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          <Link
                            href={`/brands/${pen.brandSlug}/${pen.slug}`}
                            className="hover:text-amber-400 transition-colors"
                          >
                            {pen.name}
                          </Link>
                        </h3>
                        {brand && (
                          <p className="text-sm text-slate-400">{brand.name}</p>
                        )}
                      </div>
                      <span className="text-amber-400 font-bold text-lg">
                        From ${lowestPrice.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-slate-300 mb-3">{pen.why}</p>
                    <p className="text-sm text-amber-500/80 italic">
                      Best for: {pen.bestFor}
                    </p>
                    {model && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {model.knownPrices.slice(0, 3).map((price) => (
                          <a
                            key={price.retailer}
                            href={price.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-full transition-colors"
                          >
                            {price.retailer} — ${price.price.toFixed(2)}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* What to Look For */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              What to Look For in a Journaling Pen
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
                <h3 className="font-bold text-amber-400 mb-2">
                  Ink Capacity
                </h3>
                <p className="text-slate-300 text-sm">
                  Journaling daily means going through ink fast. Piston-fillers
                  (TWSBI, Lamy 2000) and vacuum-fillers (Pilot Custom 823) hold
                  1-2ml per fill. Cartridge pens hold 0.5-0.7ml. More ink means
                  fewer interruptions mid-thought.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
                <h3 className="font-bold text-amber-400 mb-2">
                  Nib Comfort
                </h3>
                <p className="text-slate-300 text-sm">
                  Fine nibs (0.3-0.5mm) are ideal for smaller handwriting and
                  thinner paper. Medium nibs (0.5-0.7mm) provide a smoother,
                  more enjoyable writing experience. Gold nibs flex slightly and
                  feel softer on paper.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
                <h3 className="font-bold text-amber-400 mb-2">
                  Paper Pairing
                </h3>
                <p className="text-slate-300 text-sm">
                  Cheap paper (Moleskine, Field Notes) causes feathering and
                  bleed-through with fountain pens. Premium paper like Rhodia
                  No. 16 or Clairefontaine Triomphe eliminates these issues
                  entirely. The pen and paper matter equally.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
                <h3 className="font-bold text-amber-400 mb-2">
                  Weight and Balance
                </h3>
                <p className="text-slate-300 text-sm">
                  A journaling session can last 30-60 minutes. Heavy pens
                  (brass bodies) cause hand fatigue. Lightweight pens (Lamy
                  2000, TWSBI Eco) are better for extended writing. Post the cap
                  for better balance with shorter pens.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="bg-slate-900/50 border border-slate-800 rounded-lg">
                <summary className="p-4 font-medium text-slate-200 cursor-pointer hover:text-amber-400 transition-colors">
                  What is the best fountain pen for journaling?
                </summary>
                <div className="px-4 pb-4 text-slate-300 text-sm">
                  The <strong>TWSBI Eco</strong> is the best overall fountain pen
                  for journaling due to its massive ink capacity, comfortable
                  grip, and affordable $33 price. For premium journaling, the{" "}
                  <strong>Pilot Custom 823</strong> offers weeks of ink capacity
                  and a luxurious 14k gold nib.
                </div>
              </details>
              <details className="bg-slate-900/50 border border-slate-800 rounded-lg">
                <summary className="p-4 font-medium text-slate-200 cursor-pointer hover:text-amber-400 transition-colors">
                  What nib size is best for journaling?
                </summary>
                <div className="px-4 pb-4 text-slate-300 text-sm">
                  A <strong>Fine or Medium</strong> nib is ideal for most
                  journalers. Fine nibs work well on thinner paper (like Moleskine
                  or Leuchtturm1917) without bleeding through, while Medium nibs
                  offer a smoother writing experience on fountain-pen-friendly
                  paper like Rhodia or Clairefontaine.
                </div>
              </details>
              <details className="bg-slate-900/50 border border-slate-800 rounded-lg">
                <summary className="p-4 font-medium text-slate-200 cursor-pointer hover:text-amber-400 transition-colors">
                  How long does a fountain pen ink cartridge last for journaling?
                </summary>
                <div className="px-4 pb-4 text-slate-300 text-sm">
                  A standard cartridge lasts about 1-2 weeks of daily journaling
                  (1-2 pages per day). Piston-filling pens like the TWSBI Eco or
                  Lamy 2000 hold 3-5x more ink and can last 4-8 weeks between
                  refills, making them ideal for dedicated journalers.
                </div>
              </details>
              <details className="bg-slate-900/50 border border-slate-800 rounded-lg">
                <summary className="p-4 font-medium text-slate-200 cursor-pointer hover:text-amber-400 transition-colors">
                  Can I use any ink for journaling?
                </summary>
                <div className="px-4 pb-4 text-slate-300 text-sm">
                  Use fountain pen ink only. India ink and calligraphy ink will
                  clog your pen permanently. For journaling, waterproof inks like{" "}
                  <Link
                    href="/blog/best-fountain-pen-inks"
                    className="text-amber-400 hover:underline"
                  >
                    Noodler's Heart of Darkness
                  </Link>{" "}
                  are great if you want smudge-proof entries. Dye-based inks
                  like Pilot Iroshizuku are easier to clean and come in beautiful
                  colors.
                </div>
              </details>
            </div>
          </section>

          {/* Related Guides */}
          <section className="border-t border-slate-800 pt-8">
            <h2 className="text-lg font-bold text-slate-300 mb-4">
              Related Guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/blog/best-fountain-pens-for-beginners"
                className="block bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-amber-900/50 transition-colors"
              >
                <span className="text-sm font-medium text-white">
                  Best Fountain Pens for Beginners
                </span>
                <span className="block text-xs text-slate-400 mt-1">
                  Start your fountain pen journey right
                </span>
              </Link>
              <Link
                href="/blog/fountain-pen-maintenance-guide"
                className="block bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-amber-900/50 transition-colors"
              >
                <span className="text-sm font-medium text-white">
                  Fountain Pen Maintenance Guide
                </span>
                <span className="block text-xs text-slate-400 mt-1">
                  Keep your journaling pen writing smoothly
                </span>
              </Link>
              <Link
                href="/blog/fountain-pen-nib-sizes-explained"
                className="block bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-amber-900/50 transition-colors"
              >
                <span className="text-sm font-medium text-white">
                  Nib Sizes Explained
                </span>
                <span className="block text-xs text-slate-400 mt-1">
                  Find the right nib for your writing style
                </span>
              </Link>
              <Link
                href="/blog/best-fountain-pen-inks"
                className="block bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-amber-900/50 transition-colors"
              >
                <span className="text-sm font-medium text-white">
                  Best Fountain Pen Inks
                </span>
                <span className="block text-xs text-slate-400 mt-1">
                  The best inks for everyday writing
                </span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
