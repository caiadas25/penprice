import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Everyday Fountain Pens for Writing in 2026 — Daily Driver Guide | PenPrice",
  description:
    "Find the best everyday fountain pens for daily writing. Compare prices on reliable daily drivers from Pilot, Lamy, TWSBI, Sailor, and Pelikan. Durability, ink capacity, and comfort rated.",
  openGraph: {
    title: "Best Everyday Fountain Pens for Writing 2026",
    description: "Reliable daily driver fountain pens compared. Durability, comfort, ink capacity, and price across Amazon, JetPens, and Goulet Pens.",
    type: "article",
  },
};

interface EverydayPen {
  name: string;
  slug: string;
  brandSlug: string;
  priceFrom: number;
  category: string;
  why: string;
}

const everydayPens: EverydayPen[] = [
  {
    name: "Pilot Custom 74",
    slug: "custom-74",
    brandSlug: "pilot",
    priceFrom: 78.00,
    category: "Best Daily Driver",
    why: "Pilot's 14k gold nib at an affordable price. Smooth, slightly springy, and comfortable for hours of writing. The CON-70 converter holds a generous amount of ink.",
  },
  {
    name: "Lamy 2000",
    slug: "2000",
    brandSlug: "lamy",
    priceFrom: 179.99,
    category: "Best Under $200",
    why: "A design icon since 1966. The piston filler holds massive ink capacity, the Makrolon body is virtually indestructible, and the 14k gold nib writes like a dream. A pen for life.",
  },
  {
    name: "TWSBI Diamond 580",
    slug: "diamond-580",
    brandSlug: "twsbi",
    priceFrom: 54.99,
    category: "Best Ink Capacity",
    why: "Piston filler with enormous ink capacity and a demonstrator body that shows your ink level. The Diamond 580 is the workhorse pen for people who write a lot.",
  },
  {
    name: "Sailor Pro Gear",
    slug: "pro-gear",
    brandSlug: "sailor",
    priceFrom: 176.00,
    category: "Best Character",
    why: "Sailor's 21k gold nib has a unique feedback that writers love. The Pro Gear's classic design and smooth writing experience make it a joy for daily journaling and correspondence.",
  },
  {
    name: "Pilot Metropolitan",
    slug: "metropolitan",
    brandSlug: "pilot",
    priceFrom: 18.95,
    category: "Best Value",
    why: "The best value in fountain pens, period. A brass body that feels premium, a smooth steel nib, and a converter included. Many writers use this as their daily driver for years.",
  },
  {
    name: "Pelikan M400",
    slug: "m400",
    brandSlug: "pelikan",
    priceFrom: 199.00,
    category: "Best Piston Filler",
    why: "Pelikan's piston-filling mechanism is the gold standard. The 14k gold nib is buttery smooth, and the striped barrel is instantly recognizable. A comfortable, reliable writer.",
  },
  {
    name: "TWSBI Eco",
    slug: "eco",
    brandSlug: "twsbi",
    priceFrom: 31.99,
    category: "Best Budget Piston",
    why: "The most affordable piston filler with a steel nib that punches well above its price. Massive ink capacity means fewer refills during long writing sessions.",
  },
];

function EverydayPenCard({ pen }: { pen: EverydayPen }) {
  return (
    <div className="border border-slate-700 rounded-xl p-6 bg-slate-800/30 hover:border-amber-600/50 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-900/30 text-amber-400 mb-2 inline-block">
            {pen.category}
          </span>
          <h3 className="text-lg font-bold text-white mt-1">
            <Link href={`/brands/${pen.brandSlug}/${pen.slug}`} className="hover:text-amber-400 transition-colors">
              {pen.name}
            </Link>
          </h3>
        </div>
        <span className="text-amber-400 font-mono text-lg font-bold">from ${pen.priceFrom}</span>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{pen.why}</p>
      <div className="mt-4">
        <Link
          href={`/brands/${pen.brandSlug}/${pen.slug}`}
          className="text-xs px-3 py-1.5 rounded-full bg-amber-900/30 text-amber-400 hover:bg-amber-900/50 transition-colors inline-block"
        >
          Compare Prices →
        </Link>
      </div>
    </div>
  );
}

export default function EverydayFountainPensPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">Best Everyday Fountain Pens</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-amber-400 text-sm font-medium mb-2">Daily Driver Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Best Everyday Fountain Pens for Writing in 2026
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            An everyday fountain pen needs to be reliable, comfortable for extended writing,
            easy to maintain, and not so expensive that you panic if you lose it at a coffee shop.
            Here are the 7 best daily drivers for 2026.
          </p>
        </header>

        {/* What Makes a Good Daily Driver */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-white mb-3">What Makes a Good Daily Driver?</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <span className="text-amber-400 font-semibold">Comfort.</span>{" "}
              You&apos;ll hold this pen for hours. It needs to be the right weight, the right diameter,
              and the grip section can&apos;t cause fatigue.
            </li>
            <li>
              <span className="text-amber-400 font-semibold">Ink capacity.</span>{" "}
              A pen you have to refill twice a day isn&apos;t a daily driver. Piston fillers and
              vacuum fillers win here. Cartridge/converter pens need large converters.
            </li>
            <li>
              <span className="text-amber-400 font-semibold">Durability.</span>{" "}
              Daily carry means bumps, drops, and being tossed in a bag. Metal and polycarbonate
              bodies survive better than delicate resins.
            </li>
            <li>
              <span className="text-amber-400 font-semibold">Nib reliability.</span>{" "}
              The nib needs to start writing immediately, every time. No hard starts, no skipping.
              Steel nibs are often more reliable than gold for this reason.
            </li>
            <li>
              <span className="text-amber-400 font-semibold">Price-to-replace.</span>{" "}
              The sweet spot for a daily driver is $30-$200. Expensive enough to write well,
              affordable enough that you won&apos;t cry if it gets damaged.
            </li>
          </ul>
        </div>

        {/* Top 7 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Top 7 Everyday Fountain Pens</h2>
          <div className="grid gap-4">
            {everydayPens.map((pen) => (
              <EverydayPenCard key={pen.slug} pen={pen} />
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Daily Driver Tips</h2>
          <div className="grid gap-4 text-sm">
            <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/30">
              <h3 className="font-bold text-white mb-2">Keep a Backup</h3>
              <p className="text-slate-400">Always have a second pen ready. Even the best daily driver can run out of ink at the worst moment. The Pilot Metropolitan is a perfect $19 backup.</p>
            </div>
            <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/30">
              <h3 className="font-bold text-white mb-2">Choose Waterproof Ink for Documents</h3>
              <p className="text-slate-400">If you sign documents or write in a journal that might get wet, use a waterproof or water-resistant ink like Pilot Iroshizuku Take-sumi or Noodler&apos;s Heart of Darkness.</p>
            </div>
            <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/30">
              <h3 className="font-bold text-white mb-2">Clean Monthly</h3>
              <p className="text-slate-400">Flush your daily driver with clean water once a month. This prevents ink buildup and keeps the nib writing smoothly. Takes 5 minutes.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-slate-700 pt-8">
          <h2 className="text-lg font-bold text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/best-fountain-pens-for-beginners" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Best Beginner Fountain Pens →</span>
              <span className="block text-slate-500 mt-1">New to fountain pens? Start here</span>
            </Link>
            <Link href="/blog/best-japanese-fountain-pens" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Best Japanese Fountain Pens →</span>
              <span className="block text-slate-500 mt-1">Pilot, Sailor, Platinum, and Taccia</span>
            </Link>
            <Link href="/blog/fountain-pen-maintenance-guide" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Fountain Pen Maintenance Guide →</span>
              <span className="block text-slate-500 mt-1">Keep your daily driver running smooth</span>
            </Link>
            <Link href="/blog/best-fountain-pens-under-100" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
              <span className="text-white font-semibold">Best Pens Under $100 →</span>
              <span className="block text-slate-500 mt-1">Affordable daily drivers with gold nibs</span>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group border border-slate-700 rounded-xl overflow-hidden">
              <summary className="p-5 cursor-pointer text-white font-semibold hover:bg-slate-800/50 transition-colors">
                What is the best everyday fountain pen under $50?
              </summary>
              <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                The TWSBI Eco ($32) and Pilot Metropolitan ($19) are the two best daily drivers under $50. The Eco has a piston filler with massive ink capacity, while the Metropolitan has a brass body and smooth steel nib at half the price.
              </div>
            </details>
            <details className="group border border-slate-700 rounded-xl overflow-hidden">
              <summary className="p-5 cursor-pointer text-white font-semibold hover:bg-slate-800/50 transition-colors">
                How often should I clean my everyday fountain pen?
              </summary>
              <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                Clean your daily driver with fresh water once a month, or whenever you change ink colors. If the nib starts skipping or hard-starting, flush it immediately. Full cleaning takes about 5 minutes.
              </div>
            </details>
            <details className="group border border-slate-700 rounded-xl overflow-hidden">
              <summary className="p-5 cursor-pointer text-white font-semibold hover:bg-slate-800/50 transition-colors">
                Should I use cartridges or bottled ink for daily writing?
              </summary>
              <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                Bottled ink is cheaper per fill and gives you more color choices, but cartridges are more convenient. For a daily driver, we recommend bottled ink with a converter or piston filler. The cost savings add up over hundreds of refills.
              </div>
            </details>
            <details className="group border border-slate-700 rounded-xl overflow-hidden">
              <summary className="p-5 cursor-pointer text-white font-semibold hover:bg-slate-800/50 transition-colors">
                Are gold nibs worth it for daily writing?
              </summary>
              <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                Gold nibs are softer and more characterful, but steel nibs are more durable for everyday carry. The Pilot Custom 74 ($78) gives you a 14k gold nib at a reasonable price. If durability matters more than feel, stick with steel.
              </div>
            </details>
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
            headline: "Best Everyday Fountain Pens for Writing in 2026",
            description: "Guide to the 7 best daily driver fountain pens. Durability, ink capacity, comfort, and price compared across Pilot, Lamy, TWSBI, Sailor, and Pelikan.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-06-27",
            dateModified: "2026-06-27",
            mainEntityOfPage: "https://penprice.vercel.app/blog/best-everyday-fountain-pens",
          }),
        }}
      />
    </div>
  );
}
