import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Best Fountain Pens Under $200 in 2026 — Premium Value Guide | PenPrice",
  description:
    "The $200 sweet spot delivers gold nibs, piston fillers, and flagship build quality. Compare prices on the Lamy 2000, Pilot Custom 823, Sailor Pro Gear, Pelikan M400, and TWSBI Diamond 580 across Amazon, JetPens, and Goulet Pens.",
  openGraph: {
    title: "Best Fountain Pens Under $200 in 2026 — Premium Value Guide",
    description:
      "Gold nibs, piston fillers, and flagship builds — all under $200. Compare live prices across Amazon, JetPens, Goulet Pens, and Goldspot.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fountain Pens Under $200 — 2026 Price Guide",
    description:
      "Premium fountain pens under $200. Lamy 2000, Pilot Custom 823, Sailor Pro Gear, Pelikan M400 — price comparison included.",
  },
};

interface PenRec {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  why: string;
}

const recommendations: PenRec[] = [
  {
    name: "Lamy 2000",
    slug: "2000",
    brandSlug: "lamy",
    priceFrom: 179.99,
    why: "Designed in 1966 and still one of the best fountain pens ever made. Piston filler, 14k gold nib, and a Bauhaus-minimalist design that has aged beautifully. The brushed Makrolon body is lightweight and durable. A forever pen.",
  },
  {
    name: "Pilot Custom 823",
    slug: "custom-823",
    brandSlug: "pilot",
    priceFrom: 289.99,
    why: "Widely considered one of the best fountain pens at any price. The vacuum filler holds a massive amount of ink, and the #15 14k gold nib is springy and full of character. The amber demonstrator body is iconic. If you only buy one pen, make it this one.",
  },
  {
    name: "Sailor Pro Gear",
    slug: "pro-gear",
    brandSlug: "sailor",
    priceFrom: 296.00,
    why: "Sailor's iconic flat-top design with a 21k gold nib that has a distinctive pencil-like feedback. The bicolor nib and anchor logo are hallmarks of quality. Available in dozens of colorways. A grail pen for many enthusiasts.",
  },
  {
    name: "Pelikan M400",
    slug: "m400",
    brandSlug: "pelikan",
    priceFrom: 299.99,
    why: "The entry point to Pelikan's legendary Souverän line. 14k gold nib, piston filler, and the iconic green-striped barrel. The Souverän's build quality and writing experience are peerless at this price.",
  },
  {
    name: "TWSBI Diamond 580",
    slug: "diamond-580",
    brandSlug: "twsbi",
    priceFrom: 62.99,
    why: "The premium TWSBI with a faceted demonstrator body and massive piston-filler ink capacity. The 1.1mm stub nib is excellent for headings. At under $70, it punches well above its weight.",
  },
  {
    name: "Pilot Custom 74",
    slug: "custom-74",
    brandSlug: "pilot",
    priceFrom: 136.99,
    why: "Pilot's gateway to gold nibs. A #5 14k gold nib with a comfortable cigar-shaped body. The Soft Fine and Soft Medium nibs offer line variation without the price of a flex pen. Outstanding value.",
  },
  {
    name: "Sailor 1911 Standard",
    slug: "1911",
    brandSlug: "sailor",
    priceFrom: 192.00,
    why: "A more affordable entry to Sailor's 21k gold nib lineup. The cigar shape is classic and comfortable. The nib's characteristic feedback is unlike any other pen — you either love it or you don't, but you should try it.",
  },
  {
    name: "Kaweco Dia2",
    slug: "dia-2",
    brandSlug: "kaweco",
    priceFrom: 85.00,
    why: "A modern reinterpretation of the 1920s Dia design. Brass body with chrome trim and a snap cap. Compact when capped, full-size when posted. One of the most stylish pens under $100.",
  },
];

export default function BestFountainPensUnder200Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Fountain Pens Under $200 in 2026",
    description:
      "The $200 sweet spot delivers gold nibs, piston fillers, and flagship build quality. Compare prices on the Lamy 2000, Pilot Custom 823, Sailor Pro Gear, Pelikan M400, and more.",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          Best Fountain Pens Under $200
        </span>
      </nav>

      <article>
        <header className="mb-10">
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-900/30 text-amber-400 mb-3 inline-block">
            Buying Guide
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Best Fountain Pens Under $200 in 2026
          </h1>
          <p className="text-lg text-slate-400">
            The $200 mark is where fountain pens get serious. Gold nibs, piston fillers, and flagship build
            quality all become available. Here are the best pens in this range, with live price comparisons
            across major retailers.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Why $200 Is the Sweet Spot
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
            <p>
              Under $50, you&apos;re choosing between excellent steel-nib pens. Over $200, you start paying for
              brand prestige and exotic materials. But right around $100–$200, you get the best value in
              fountain pens: 14k and 21k gold nibs, proven filling mechanisms, and pens that will last
              decades.
            </p>
            <p>
              The pens on this list represent the best of what the fountain pen world has to offer at this
              price point. Whether you want a daily writer, a grail pen, or a gift for someone special,
              any of these will serve you well.
            </p>
          </div>
        </section>

        <section className="space-y-8 mb-12">
          {recommendations.map((pen) => (
            <div
              key={pen.slug}
              className="p-6 rounded-xl border border-slate-700 bg-slate-800/30"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <Link
                    href={`/brands/${pen.brandSlug}/${pen.slug}`}
                    className="text-xl font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {pen.name}
                  </Link>
                  <span className="text-xs text-slate-500 ml-2">
                    by{" "}
                    <Link
                      href={`/brands/${pen.brandSlug}`}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {brands.find((b) => b.slug === pen.brandSlug)?.name}
                    </Link>
                  </span>
                </div>
                <span className="text-lg font-bold text-amber-400 whitespace-nowrap">
                  From ${pen.priceFrom.toFixed(2)}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                {pen.why}
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href={`/brands/${pen.brandSlug}/${pen.slug}`}
                  className="text-sm px-3 py-1.5 rounded-lg bg-amber-600 text-white hover:bg-amber-500 transition-colors"
                >
                  Compare Prices
                </Link>
                <Link
                  href={`/brands/${pen.brandSlug}`}
                  className="text-sm px-3 py-1.5 rounded-lg border border-slate-600 text-slate-300 hover:border-amber-500 hover:text-amber-400 transition-colors"
                >
                  View All {brands.find((b) => b.slug === pen.brandSlug)?.name} Pens
                </Link>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            How to Choose
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/30">
              <h3 className="text-lg font-bold text-white mb-2">
                Want the Best Value?
              </h3>
              <p className="text-slate-400 text-sm">
                The <strong className="text-white">Lamy 2000</strong> ($180) offers a piston filler and 14k gold
                nib in a timeless design. It&apos;s the pen that fountain pen people recommend to other
                fountain pen people.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/30">
              <h3 className="text-lg font-bold text-white mb-2">
                Want the Best Writing Experience?
              </h3>
              <p className="text-slate-400 text-sm">
                The <strong className="text-white">Pilot Custom 823</strong> ($290) has the best nib in this
                price range. Period. The vacuum filler and massive ink capacity make it a true daily writer.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/30">
              <h3 className="text-lg font-bold text-white mb-2">
                Want Something Unique?
              </h3>
              <p className="text-slate-400 text-sm">
                The <strong className="text-white">Sailor Pro Gear</strong> ($296) has a 21k gold nib with
                feedback unlike any other pen. If you like the feel of a pencil, Sailor is your brand.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/30">
              <h3 className="text-lg font-bold text-white mb-2">
                Want Maximum Ink Capacity?
              </h3>
              <p className="text-slate-400 text-sm">
                The <strong className="text-white">TWSBI Diamond 580</strong> ($63) and{" "}
                <strong className="text-white">Pilot Custom 823</strong> ($290) both offer huge ink
                reservoirs. The 580 does it at a fraction of the price.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 p-6 rounded-xl border border-slate-700 bg-slate-800/30">
          <h2 className="text-2xl font-bold text-white mb-4">
            Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/blog/best-fountain-pens-under-100"
              className="p-4 rounded-lg border border-slate-600 hover:border-amber-500 transition-colors"
            >
              <h3 className="font-bold text-white hover:text-amber-400 transition-colors">
                Best Fountain Pens Under $100
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Great gold-nib alternatives at lower prices.
              </p>
            </Link>
            <Link
              href="/blog/best-japanese-fountain-pens"
              className="p-4 rounded-lg border border-slate-600 hover:border-amber-500 transition-colors"
            >
              <h3 className="font-bold text-white hover:text-amber-400 transition-colors">
                Best Japanese Fountain Pens
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Pilot, Sailor, Platinum, and more — Japan&apos;s finest.
              </p>
            </Link>
            <Link
              href="/blog/fountain-pen-nib-sizes-explained"
              className="p-4 rounded-lg border border-slate-600 hover:border-amber-500 transition-colors"
            >
              <h3 className="font-bold text-white hover:text-amber-400 transition-colors">
                Nib Sizes Explained
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Extra Fine to Broad — what each size writes like.
              </p>
            </Link>
            <Link
              href="/blog/best-fountain-pens-for-beginners"
              className="p-4 rounded-lg border border-slate-600 hover:border-amber-500 transition-colors"
            >
              <h3 className="font-bold text-white hover:text-amber-400 transition-colors">
                Best Fountain Pens for Beginners
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                New to fountain pens? Start here.
              </p>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/30">
              <h3 className="font-bold text-white mb-2">
                Are gold nibs worth the extra cost?
              </h3>
              <p className="text-slate-400 text-sm">
                For most people, yes. Gold nibs are softer and more springy than steel, which means
                less hand fatigue during long writing sessions. They also resist corrosion from acidic
                inks. The difference is noticeable but not dramatic — think of it as the difference
                between a good mattress and a great one.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/30">
              <h3 className="font-bold text-white mb-2">
                Should I buy online or from a pen store?
              </h3>
              <p className="text-slate-400 text-sm">
                If you can visit a pen store, do it — holding a pen before buying is invaluable. But
                online retailers like Goulet Pens and JetPens offer excellent customer service and
                competitive prices. Amazon can be cheapest but watch for third-party sellers.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/30">
              <h3 className="font-bold text-white mb-2">
                What about the Pilot Custom 74 vs 823?
              </h3>
              <p className="text-slate-400 text-sm">
                The Custom 74 ($137) is a cartridge/converter pen with a smaller #5 gold nib. The 823
                ($290) is a vacuum filler with a larger #15 gold nib and more ink capacity. If budget
                allows, the 823 is the better pen. But the 74 is outstanding value.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
    </>
  );
}
