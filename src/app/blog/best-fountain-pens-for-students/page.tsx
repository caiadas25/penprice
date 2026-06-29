import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Best Fountain Pens for Students in 2026 — Affordable Pens for School | PenPrice",
  description:
    "Find the best fountain pen for students with our 2026 guide. Compare prices on Pilot Metropolitan, Lamy Safari, TWSBI Eco, Platinum Preppy, and more. Budget-friendly, durable pens for school and note-taking.",
  openGraph: {
    title: "Best Fountain Pens for Students in 2026",
    description:
      "Budget-friendly fountain pens for students, compared by durability, ink capacity, and price. Pilot Metropolitan, Lamy Safari, TWSBI Eco, and more.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fountain Pens for Students in 2026",
    description:
      "Top fountain pens for students compared by price, durability, and writing comfort. Full guide with price comparisons.",
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
    name: "Pilot Metropolitan",
    slug: "metropolitan",
    brandSlug: "pilot",
    priceFrom: 19.99,
    why: "The most recommended first fountain pen for students. The stainless steel nib writes smoothly, the brass body feels premium, and the squeeze converter is easy to fill. Under $20 makes it a risk-free way to start writing with a fountain pen.",
    bestFor: "Students on a tight budget who want a premium-feeling pen",
  },
  {
    name: "Lamy Safari",
    slug: "safari",
    brandSlug: "lamy",
    priceFrom: 29.99,
    why: "The triangular grip section trains proper hand posture, which matters during long note-taking sessions. The wide range of nib sizes lets you match your writing style. The left-handed nib option makes it one of the few pens designed for southpaw writers.",
    bestFor: "Students who need a comfortable grip for extended note-taking",
  },
  {
    name: "TWSBI Eco",
    slug: "eco",
    brandSlug: "twsbi",
    priceFrom: 32.99,
    why: "The king of ink capacity. The piston-filling TWSBI Eco holds over 1.5ml of ink, enough for weeks of daily note-taking without refilling. The transparent demonstrator lets you see your ink level at a glance. At under $35, it is the best value student pen available.",
    bestFor: "Students who write a lot and hate refilling",
  },
  {
    name: "Platinum Preppy",
    slug: "preppy",
    brandSlug: "platinum",
    priceFrom: 7.99,
    why: "The most affordable fountain pen worth buying. The Platinum Preppy features a smooth fine nib, a cap that prevents ink from drying out, and a cartridge system that is easy to refill. At under $10, it is the cheapest entry point into fountain pens.",
    bestFor: "Students who want to try fountain pens without spending much",
  },
  {
    name: "Kaweco Sport",
    slug: "sport",
    brandSlug: "kaweco",
    priceFrom: 33.99,
    why: "The compact, pocket-sized Kaweco Sport is perfect for students who need a pen that fits in a pocket or backpack. The octagonal body prevents rolling off desks, and the snap cap opens quickly for impulsive note-taking. A classic design that has been around since 1930.",
    bestFor: "Students who need a pocket-sized, durable pen",
  },
  {
    name: "Jinhao X450",
    slug: "x450",
    brandSlug: "jinhao",
    priceFrom: 12.99,
    why: "An incredible value for the price. The Jinhao X450 features a metal body, a medium steel nib, and a converter that can be filled with bottled ink. Under $15 makes it a great pen for students who want to experiment with different inks.",
    bestFor: "Students who want a metal pen with bottled ink capability",
  },
  {
    name: "Faber-Castell Loom",
    slug: "loom",
    brandSlug: "faber-castell",
    priceFrom: 42.99,
    why: "A well-built German pen with a smooth steel nib and a satisfying weight in hand. The Loom's metal body is durable enough for daily school use, and the snap cap is easy to open. A step up from the Pilot Metropolitan in build quality.",
    bestFor: "Students who want a durable, well-built pen at a mid-range price",
  },
];

export default function BestFountainPensForStudentsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Fountain Pens for Students in 2026",
    description:
      "The best fountain pens for students compared by durability, ink capacity, and price. Pilot Metropolitan, Lamy Safari, TWSBI Eco, and more.",
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
        name: "What is the best fountain pen for students?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Pilot Metropolitan is the best fountain pen for students due to its smooth steel nib, premium brass body, and affordable $20 price. For students who write a lot, the TWSBI Eco offers massive ink capacity and a comfortable grip at under $35.",
        },
      },
      {
        "@type": "Question",
        name: "Are fountain pens allowed in school?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most schools allow fountain pens, but some may have restrictions on certain types of ink or nib sizes. Check your school's policy before using one. A Fine or Extra Fine nib is generally the safest choice for school use.",
        },
      },
      {
        "@type": "Question",
        name: "What nib size is best for students?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Fine nib is ideal for most students. It writes cleanly on standard notebook paper without bleeding through, and it is easier to control for smaller handwriting. Extra Fine nibs are also popular for note-taking on thin paper.",
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
        <nav className="text-sm text-stone-400 mb-8">
          <Link href="/" className="hover:text-blue-800 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-800 transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-stone-500">
            Best Fountain Pens for Students
          </span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 mb-3 inline-block">
              Buying Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Best Fountain Pens for Students in 2026
            </h1>
            <p className="text-lg text-stone-500">
              Fountain pens make writing more enjoyable and help students take
              better notes. We compared price, durability, ink capacity, and
              writing comfort to find the best pens for students.
            </p>
          </header>

          {/* Quick Picks */}
          <div className="bg-amber-950/30 border border-amber-900/50 rounded p-6 mb-10">
            <h2 className="text-lg font-bold text-blue-800 mb-2">
              Quick Picks
            </h2>
            <ul className="space-y-2 text-stone-700">
              <li>
                <strong className="text-stone-900">Best Value:</strong> Pilot Metropolitan ($20) — smooth steel nib, premium brass body, risk-free entry
              </li>
              <li>
                <strong className="text-stone-900">Best Overall:</strong> TWSBI Eco ($33) — enormous ink capacity, transparent body, comfortable grip
              </li>
              <li>
                <strong className="text-stone-900">Best for Beginners:</strong> Platinum Preppy ($8) — cheapest entry point, smooth fine nib
              </li>
              <li>
                <strong className="text-stone-900">Best Ergonomic:</strong> Lamy Safari ($30) — triangular grip trains proper hand posture
              </li>
            </ul>
          </div>

          {/* Recommendations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Top Pens for Students
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
                    className="bg-white border border-stone-200 rounded p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs text-stone-400 font-medium">
                          #{index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-stone-900">
                          <Link
                            href={`/brands/${pen.brandSlug}/${pen.slug}`}
                            className="hover:text-blue-800 transition-colors"
                          >
                            {pen.name}
                          </Link>
                        </h3>
                        {brand && (
                          <p className="text-sm text-stone-500">{brand.name}</p>
                        )}
                      </div>
                      <span className="text-blue-800 font-bold text-lg">
                        From ${lowestPrice.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-stone-700 mb-3">{pen.why}</p>
                    <p className="text-sm text-blue-700/80 italic">
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
                            className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-700 px-3 py-1.5 rounded transition-colors"
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
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              What to Look For in a Student Pen
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 rounded p-5">
                <h3 className="font-bold text-blue-800 mb-2">
                  Durability
                </h3>
                <p className="text-stone-700 text-sm">
                  Students need pens that can handle daily use, being tossed in
                  backpacks, and occasional drops. Metal-bodied pens like the
                  Pilot Metropolitan and Jinhao X450 are more durable than
                  plastic alternatives.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded p-5">
                <h3 className="font-bold text-blue-800 mb-2">
                  Ink Capacity
                </h3>
                <p className="text-stone-700 text-sm">
                  Piston-fillers like the TWSBI Eco hold 1-2ml of ink, enough
                  for weeks of daily note-taking. Cartridge pens hold 0.5-0.7ml.
                  More ink means fewer interruptions during class.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded p-5">
                <h3 className="font-bold text-blue-800 mb-2">
                  Nib Size
                </h3>
                <p className="text-stone-700 text-sm">
                  A Fine nib is ideal for most students. It writes cleanly on
                  standard notebook paper without bleeding through, and it is
                  easier to control for smaller handwriting. Extra Fine nibs are
                  also popular for note-taking on thin paper.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded p-5">
                <h3 className="font-bold text-blue-800 mb-2">
                  Price
                </h3>
                <p className="text-stone-700 text-sm">
                  Fountain pens range from $8 (Platinum Preppy) to $35 (TWSBI
                  Eco). All of the pens in this guide are under $50, making them
                  accessible for students on a budget.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded p-5">
                <h3 className="font-bold text-blue-800 mb-2">
                  What is the best fountain pen for students?
                </h3>
                <p className="text-stone-700 text-sm">
                  The Pilot Metropolitan is the best fountain pen for students
                  due to its smooth steel nib, premium brass body, and affordable
                  $20 price. For students who write a lot, the TWSBI Eco offers
                  massive ink capacity and a comfortable grip at under $35.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded p-5">
                <h3 className="font-bold text-blue-800 mb-2">
                  Are fountain pens allowed in school?
                </h3>
                <p className="text-stone-700 text-sm">
                  Most schools allow fountain pens, but some may have
                  restrictions on certain types of ink or nib sizes. Check your
                  school's policy before using one. A Fine or Extra Fine nib
                  is generally the safest choice for school use.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded p-5">
                <h3 className="font-bold text-blue-800 mb-2">
                  What nib size is best for students?
                </h3>
                <p className="text-stone-700 text-sm">
                  A Fine nib is ideal for most students. It writes cleanly on
                  standard notebook paper without bleeding through, and it is
                  easier to control for smaller handwriting. Extra Fine nibs are
                  also popular for note-taking on thin paper.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Related Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/best-fountain-pens-for-beginners"
                className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all"
              >
                <h3 className="font-bold text-stone-900 mb-1">
                  Best Fountain Pens for Beginners
                </h3>
                <p className="text-sm text-stone-500">
                  New to fountain pens? Our complete starter guide covers the top
                  10 beginner pens, nib sizes, and filling systems.
                </p>
              </Link>
              <Link
                href="/blog/best-fountain-pens-under-50"
                className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all"
              >
                <h3 className="font-bold text-stone-900 mb-1">
                  Best Fountain Pens Under $50
                </h3>
                <p className="text-sm text-stone-500">
                  Compare prices on the top-rated affordable fountain pens. Pilot
                  Metropolitan, Lamy Safari, TWSBI Eco, and more.
                </p>
              </Link>
              <Link
                href="/blog/fountain-pen-nib-sizes-explained"
                className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all"
              >
                <h3 className="font-bold text-stone-900 mb-1">
                  Fountain Pen Nib Sizes Explained
                </h3>
                <p className="text-sm text-stone-500">
                  From Extra Fine to Broad, learn what each nib size writes like.
                  Japanese vs European sizing, steel vs gold.
                </p>
              </Link>
              <Link
                href="/blog/fountain-pen-vs-gel-pen"
                className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all"
              >
                <h3 className="font-bold text-stone-900 mb-1">
                  Fountain Pen vs Gel Pen
                </h3>
                <p className="text-sm text-stone-500">
                  Detailed comparison of writing feel, ink cost, refillability,
                  and maintenance. Find out which is right for you.
                </p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
