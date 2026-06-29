import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Best Fountain Pens for Note-Taking in 2026 — Fast-Drying, Comfortable Picks | PenPrice",
  description:
    "Find the best fountain pen for note-taking in 2026. Compare fast-drying nibs, comfortable grips, and ink capacity on Pilot, Lamy, Sailor, TWSBI, and Platinum pens. Price comparisons across Amazon, JetPens, and Goulet Pens.",
  openGraph: {
    title: "Best Fountain Pens for Note-Taking in 2026",
    description:
      "The best fountain pens for note-taking compared by drying speed, grip comfort, and ink capacity. Pilot Kakuno, Lamy Safari, TWSBI Eco, and more.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fountain Pens for Note-Taking in 2026",
    description:
      "Top fountain pens for note-taking. Fast-drying nibs, comfortable grips, and prices compared.",
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
    name: "Platinum Preppy",
    slug: "preppy",
    brandSlug: "platinum",
    priceFrom: 5.75,
    why: "Platinum's Slip & Seal cap keeps the nib wet even if you forget to cap it between classes. The Extra Fine and Fine nibs produce thin lines that dry in under 3 seconds on most paper. At under $6, it is the best way to find out if fountain pens work for your note-taking workflow.",
    bestFor: "Students and anyone testing fountain pens for notes",
  },
  {
    name: "Pilot Kakuno",
    slug: "kakuno",
    brandSlug: "pilot",
    priceFrom: 12.00,
    why: "Pilot's Fine nib produces quick-drying lines on standard notebook paper. The hexagonal body won't roll off your desk, and the lightweight design means zero hand fatigue during a 2-hour lecture. The smiley face on the nib is a bonus.",
    bestFor: "Lightweight, affordable note-taking pen",
  },
  {
    name: "Pilot Metropolitan",
    slug: "metropolitan",
    brandSlug: "pilot",
    priceFrom: 18.95,
    why: "The brass body provides a satisfying weight that helps with writing speed. Pilot's steel Fine nib produces a crisp, quick-drying line. The squeeze converter holds enough ink for weeks of lecture notes. A step up from the Kakuno without breaking the bank.",
    bestFor: "Daily note-taking with a premium feel at a low price",
  },
  {
    name: "Lamy Safari",
    slug: "safari",
    brandSlug: "lamy",
    priceFrom: 29.99,
    why: "The triangular grip section trains your hand into a consistent writing angle, which matters when you're scribbling fast during lectures. The Fine nib writes a slightly wetter line than Japanese pens but dries quickly on fountain-pen-friendly paper. Wide nib selection lets you fine-tune.",
    bestFor: "Fast writers who need an ergonomic grip",
  },
  {
    name: "TWSBI Eco",
    slug: "eco",
    brandSlug: "twsbi",
    priceFrom: 32.99,
    why: "The piston-filling system holds 1.7ml of ink, enough for an entire semester of daily note-taking. The transparent body lets you see exactly how much ink remains. At under $35 with this ink capacity, the cost-per-page is unbeatable.",
    bestFor: "Heavy note-takers who hate refilling",
  },
  {
    name: "Sailor Pro Color",
    slug: "pro-color",
    brandSlug: "sailor",
    priceFrom: 25.00,
    why: "Sailor's steel Fine nib delivers the brand's signature feedback at a student-friendly price. The nib writes a thin, fast-drying line ideal for compact note-taking. The body is durable and comes in fun colors. A gateway to the Sailor gold nib experience.",
    bestFor: "Note-takers who want Sailor quality without the gold nib price",
  },
  {
    name: "Platinum 3776 Century",
    slug: "3776",
    brandSlug: "platinum",
    priceFrom: 176.00,
    why: "The 14k gold Fine nib is one of the best for rapid note-taking. The Slip & Seal cap means you can leave it uncapped for minutes between thoughts and it won't dry out. The gold nib flexes just enough for variation without slowing you down.",
    bestFor: "Serious note-takers who want gold nib performance",
  },
  {
    name: "Lamy Al-Star",
    slug: "al-star",
    brandSlug: "lamy",
    priceFrom: 38.99,
    why: "The same triangular grip as the Safari but in brushed aluminum, giving it a more premium feel during long study sessions. The slightly heavier body provides better control for fast writing. Same nib ecosystem as the Safari.",
    bestFor: "Note-takers who want the Safari experience with a metal body",
  },
];

export default function BestFountainPensForNoteTakingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Fountain Pens for Note-Taking in 2026",
    description:
      "The best fountain pens for note-taking compared by drying speed, grip comfort, and ink capacity. Pilot Kakuno, Lamy Safari, TWSBI Eco, and more.",
    datePublished: "2026-06-29",
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
        name: "What is the best fountain pen for note-taking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The TWSBI Eco is the best overall fountain pen for note-taking due to its massive 1.7ml ink capacity that lasts an entire semester. For budget note-taking, the Platinum Preppy at under $6 offers fast-drying ink and a cap that prevents drying out.",
        },
      },
      {
        "@type": "Question",
        name: "What nib size is best for note-taking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fine or Extra Fine nibs are best for note-taking because they produce thin lines that dry quickly on standard notebook paper. Japanese Fine nibs (Pilot, Sailor, Platinum) are thinner than Western Fine nibs (Lamy, Pelikan) and dry even faster.",
        },
      },
      {
        "@type": "Question",
        name: "Do fountain pens work on regular notebook paper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, with the right nib size. Fine and Extra Fine nibs from Japanese brands (Pilot Kakuno, Platinum Preppy) work well on standard notebook paper without feathering or bleed-through. Avoid Broad or stub nibs on cheap paper.",
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
            Best Fountain Pens for Note-Taking
          </span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 mb-3 inline-block">
              Buying Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Best Fountain Pens for Note-Taking in 2026
            </h1>
            <p className="text-lg text-stone-500">
              Fountain pens are excellent for note-taking once you find the right
              one. Fast-drying nibs, comfortable grips, and generous ink
              capacity make the difference between notes you enjoy taking and a
              pen you abandon after one lecture. We compared the top options
              across drying speed, comfort, and cost-per-page.
            </p>
          </header>

          {/* Key Takeaway */}
          <div className="bg-amber-950/30 border border-amber-900/50 rounded p-6 mb-10">
            <h2 className="text-lg font-bold text-blue-800 mb-2">
              Quick Picks
            </h2>
            <ul className="space-y-2 text-stone-700">
              <li>
                <strong className="text-stone-900">Best Value:</strong> TWSBI Eco ($33) — 1.7ml ink capacity, enough for a whole semester
              </li>
              <li>
                <strong className="text-stone-900">Best Budget:</strong> Platinum Preppy ($6) — Slip & Seal cap, fast-drying Fine nib
              </li>
              <li>
                <strong className="text-stone-900">Best for Lectures:</strong> Pilot Kakuno ($12) — lightweight, Fine nib, won&apos;t roll off your desk
              </li>
              <li>
                <strong className="text-stone-900">Best Premium:</strong> Platinum 3776 Century ($176) — gold nib that won&apos;t dry out
              </li>
            </ul>
          </div>

          {/* Recommendations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Top Pens for Note-Taking
            </h2>
            <div className="space-y-6">
              {recommendations.map((pen, index) => {
                const brand = brands.find((b) => b.slug === pen.brandSlug);
                return (
                  <div
                    key={pen.slug}
                    className="border border-stone-200 rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs text-stone-400 mr-2">
                          #{index + 1}
                        </span>
                        <Link
                          href={`/brands/${pen.brandSlug}/${pen.slug}`}
                          className="text-xl font-bold text-blue-800 hover:text-blue-600 transition-colors"
                        >
                          {pen.name}
                        </Link>
                        {brand && (
                          <span className="text-sm text-stone-400 ml-2">
                            by {brand.name}
                          </span>
                        )}
                      </div>
                      <span className="text-lg font-bold text-stone-900">
                        From ${pen.priceFrom.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-stone-600 mb-3">{pen.why}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">
                        {pen.bestFor}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Nib Size Guide for Notes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Choosing the Right Nib for Note-Taking
            </h2>
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-600 mb-4">
                For note-taking, your nib choice matters more than the pen
                itself. Here is what to know:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="border border-stone-200 rounded-lg p-4">
                  <h3 className="font-bold text-stone-900 mb-2">Extra Fine</h3>
                  <p className="text-sm text-stone-600">
                    Thinnest line. Dries fastest. Best for cheap notebook paper
                    and tiny handwriting. Japanese EF is finer than Western EF.
                  </p>
                </div>
                <div className="border border-stone-200 rounded-lg p-4">
                  <h3 className="font-bold text-stone-900 mb-2">Fine</h3>
                  <p className="text-sm text-stone-600">
                    The sweet spot for note-taking. Thin enough to dry quickly,
                    smooth enough for fast writing. Start here if you are new to
                    fountain pens.
                  </p>
                </div>
                <div className="border border-stone-200 rounded-lg p-4">
                  <h3 className="font-bold text-stone-900 mb-2">Medium</h3>
                  <p className="text-sm text-stone-600">
                    Wetter line, longer dry time. Only use if your paper can
                    handle it. Better for reviewing notes than writing them in
                    real time.
                  </p>
                </div>
              </div>

              <p className="text-stone-600">
                Japanese nibs (Pilot, Sailor, Platinum) run about one size finer
                than Western nibs (Lamy, Pelikan). A Pilot Fine is roughly
                equivalent to a Lamy Extra Fine. Keep this in mind when
                comparing pens across brands. See our{" "}
                <Link href="/blog/fountain-pen-nib-sizes-explained" className="text-blue-800 hover:text-blue-600">
                  complete nib sizes guide
                </Link>{" "}
                for more detail.
              </p>
            </div>
          </section>

          {/* Paper Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Best Paper for Fountain Pen Note-Taking
            </h2>
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-600 mb-4">
                Paper quality dramatically affects your note-taking experience.
                Here are our recommendations:
              </p>
              <ul className="space-y-3 text-stone-600">
                <li>
                  <strong className="text-stone-900">Rhodia Dot Pad</strong> — Gold standard for fountain pen note-taking. No feathering, no bleed-through, fast dry time. The dot grid helps keep notes organized.
                </li>
                <li>
                  <strong className="text-stone-900">Clairefontaine Triomphe</strong> — Ultra-smooth 90gsm paper. Excellent for fast writing, but slower dry time than Rhodia.
                </li>
                <li>
                  <strong className="text-stone-900">Leuchtturm1917</strong> — Popular for bullet journaling, works well with Fine nibs. Slightly textured paper. Comes with page numbers and index.
                </li>
                <li>
                  <strong className="text-stone-900">Moleskine</strong> — Widely available but not fountain-pen-friendly. Use Extra Fine nibs only, and expect some feathering with wetter inks.
                </li>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-stone-900 mb-2">
                  What is the best fountain pen for note-taking?
                </h3>
                <p className="text-stone-600">
                  The TWSBI Eco is the best overall fountain pen for note-taking due to its massive 1.7ml ink capacity that lasts an entire semester. For budget note-taking, the Platinum Preppy at under $6 offers fast-drying ink and a cap that prevents drying out.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">
                  What nib size is best for note-taking?
                </h3>
                <p className="text-stone-600">
                  Fine or Extra Fine nibs are best for note-taking because they produce thin lines that dry quickly on standard notebook paper. Japanese Fine nibs (Pilot, Sailor, Platinum) are thinner than Western Fine nibs (Lamy, Pelikan) and dry even faster.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">
                  Do fountain pens work on regular notebook paper?
                </h3>
                <p className="text-stone-600">
                  Yes, with the right nib size. Fine and Extra Fine nibs from Japanese brands work well on standard notebook paper without feathering or bleed-through. Avoid Broad or stub nibs on cheap paper.
                </p>
              </div>
            </div>
          </section>

          {/* Related */}
          <section className="border-t border-stone-200 pt-8">
            <h2 className="text-lg font-bold text-stone-900 mb-4">
              Related Guides
            </h2>
            <ul className="space-y-2 text-blue-800">
              <li>
                <Link href="/blog/fountain-pen-nib-sizes-explained" className="hover:text-blue-600 transition-colors">
                  Fountain Pen Nib Sizes Explained
                </Link>
              </li>
              <li>
                <Link href="/blog/best-fountain-pens-for-beginners" className="hover:text-blue-600 transition-colors">
                  Best Fountain Pens for Beginners
                </Link>
              </li>
              <li>
                <Link href="/blog/best-fountain-pens-under-50" className="hover:text-blue-600 transition-colors">
                  Best Fountain Pens Under $50
                </Link>
              </li>
              <li>
                <Link href="/blog/best-fountain-pen-inks" className="hover:text-blue-600 transition-colors">
                  Best Fountain Pen Inks
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}
