import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Gold Nib Fountain Pens Under $200 in 2026 — Affordable Luxury",
  description:
    "Compare prices on the best gold nib fountain pens under $200. Pilot Custom 74, Sailor 1911, Platinum 3776 Century, Aurora Ipsilon, and more — with live price links from Amazon, JetPens, and Goulet Pens.",
  openGraph: {
    title: "Best Gold Nib Fountain Pens Under $200 in 2026",
    description:
      "Affordable gold nib fountain pens compared by nib quality, build, and price. Pilot Custom 74, Sailor 1911, Platinum 3776, and more.",
    type: "article",
  },
};

interface Pen {
  name: string;
  slug: string;
  brand: string;
  brandSlug: string;
  nibSize: string;
  nibMaterial: string;
  fillingSystem: string;
  msrp: number;
  lowestPrice: number;
  category: string;
  description: string;
  pros: string[];
  bestFor: string;
}

const pens: Pen[] = [
  {
    name: "Platinum 3776 Century",
    slug: "3776",
    brand: "Platinum",
    brandSlug: "platinum",
    nibSize: "Extra Fine to Coarse",
    nibMaterial: "14k gold",
    fillingSystem: "Cartridge / Converter",
    msrp: 216,
    lowestPrice: 149.99,
    category: "Best Overall",
    description:
      "Named after Mount Fuji's height, the 3776 Century features Platinum's legendary Slip & Seal cap that prevents ink from drying out for up to 24 months. The 14k gold nib has a pleasant pencil-like feedback that's beloved by writers who want tactile writing feel.",
    pros: [
      "Slip & Seal cap prevents drying for 24 months",
      "Exceptional 14k gold nib with pleasant feedback",
      "Available in UEF (Ultra Extra Fine) for tiny writing",
      "Consistent flow and excellent ink capacity",
    ],
    bestFor: "Writers who want a gold nib that won't dry out",
  },
  {
    name: "Pilot Custom 74",
    slug: "custom-74",
    brand: "Pilot",
    brandSlug: "pilot",
    nibSize: "Extra Fine to Broad",
    nibMaterial: "14k gold",
    fillingSystem: "Cartridge / Converter (CON-70)",
    msrp: 184,
    lowestPrice: 136.99,
    category: "Best Value",
    description:
      "Pilot's entry-level gold nib pen delivers a writing experience that punches far above its price class. The #5 14k gold nib is smooth with a hint of springiness. The cigar-shaped resin body is comfortable for long writing sessions, and the CON-70 converter provides excellent ink capacity.",
    pros: [
      "Smooth 14k gold nib at an entry-level price",
      "Excellent ink capacity with CON-70 converter",
      "Available in many colors and nib sizes",
      "Cigar-shaped body is comfortable for long writing",
    ],
    bestFor: "First-time gold nib buyers on a budget",
  },
  {
    name: "Sailor Profit (1911S)",
    slug: "1911",
    brand: "Sailor",
    brandSlug: "sailor",
    nibSize: "Extra Fine to Zoom",
    nibMaterial: "14k gold",
    fillingSystem: "Cartridge / Converter",
    msrp: 220,
    lowestPrice: 155.99,
    category: "Best Nib Feel",
    description:
      "Sailor's signature feedback sets this pen apart from everything else on this list. The 14k gold nib has a distinctive pencil-like feel that many writers find addictive. The 1911S (Standard) is the more affordable version of Sailor's cigar-shaped classic.",
    pros: [
      "Signature Sailor feedback — unique pencil-like feel",
      "14k gold nib with exceptional precision",
      "Available in special edition colors",
      "Excellent for fine writing and note-taking",
    ],
    bestFor: "Writers who want a unique, tactile gold nib experience",
  },
  {
    name: "Aurora Ipsilon",
    slug: "ipsilon",
    brand: "Aurora",
    brandSlug: "aurora",
    nibSize: "Fine to Medium",
    nibMaterial: "14k gold",
    fillingSystem: "Cartridge / Converter",
    msrp: 98,
    lowestPrice: 89.00,
    category: "Best Budget Gold",
    description:
      "Aurora's entry-level gold nib pen is the cheapest way to get a genuine Aurora writing experience. The 14k gold nib is smooth with a touch of Italian flair. The metal body with lacquer finish gives it a premium weight and feel despite the low price.",
    pros: [
      "Genuine Aurora 14k gold nib under $100",
      "Premium metal body with lacquer finish",
      "Italian craftsmanship and design",
      "Excellent everyday carry size",
    ],
    bestFor: "Buyers who want Italian quality at a bargain price",
  },
  {
    name: "Sailor Shikiori (Pro Gear Slim)",
    slug: "shikiori",
    brand: "Sailor",
    brandSlug: "sailor",
    nibSize: "Extra Fine to Broad",
    nibMaterial: "14k gold",
    fillingSystem: "Cartridge / Converter",
    msrp: 250,
    lowestPrice: 175.00,
    category: "Most Beautiful",
    description:
      "The Shikiori line features seasonal colorways inspired by Japanese nature. Each pen is a work of art with a 14k gold nib that delivers Sailor's beloved feedback. The slim Pro Gear body is perfect for smaller hands or those who prefer a lighter pen.",
    pros: [
      "Stunning seasonal Japanese-inspired colors",
      "Sailor's signature 14k gold nib feedback",
      "Slim body ideal for smaller hands",
      "Limited edition colors create collectibility",
    ],
    bestFor: "Pen collectors who want beauty and function",
  },
  {
    name: "Pilot E95S",
    slug: "e95s",
    brand: "Pilot",
    brandSlug: "pilot",
    nibSize: "Fine to Medium",
    nibMaterial: "14k gold inlaid nib",
    fillingSystem: "Cartridge / Converter (CON-40)",
    msrp: 75,
    lowestPrice: 72.00,
    category: "Best Pocket Gold",
    description:
      "A compact pocket-sized pen with a 14k gold inlaid nib that punches well above its weight class. When capped, it's barely larger than a ballpoint. When posted, it transforms into a full-size writer. The smooth, springy nib is a revelation for the price.",
    pros: [
      "14k gold inlaid nib at an incredible price",
      "Compact pocket size when capped",
      "Smooth, springy writing experience",
      "Sleek, minimalist Japanese design",
    ],
    bestFor: "Everyday carry with a gold nib",
  },
  {
    name: "Pilot Falcon (Elabo)",
    slug: "falcon",
    brand: "Pilot",
    brandSlug: "pilot",
    nibSize: "Extra Fine to Soft Medium",
    nibMaterial: "14k gold soft nib",
    fillingSystem: "Cartridge / Converter (CON-70)",
    msrp: 192,
    lowestPrice: 135.99,
    category: "Best for Line Variation",
    description:
      "The Falcon's soft 14k gold nib offers genuine line variation with pressure. It's not a full flex nib, but it provides enough springiness for expressive writing and calligraphy-like strokes. The unique beak-shaped nib is unlike anything else on the market.",
    pros: [
      "Semi-flex nib offers line variation",
      "Unique beak-shaped 14k gold nib",
      "Excellent for expressive writing",
      "Available in soft, extra-fine, and medium",
    ],
    bestFor: "Writers who want calligraphic expression without a flex pen",
  },
  {
    name: "Lamy 2000",
    slug: "2000",
    brand: "Lamy",
    brandSlug: "lamy",
    nibSize: "Extra Fine to Double Broad",
    nibMaterial: "14k gold hooded nib",
    fillingSystem: "Piston",
    msrp: 240,
    lowestPrice: 179.99,
    category: "Best Design Icon",
    description:
      "Designed in 1966 and still looks futuristic today. The Lamy 2000 is a masterpiece of Bauhaus design with its seamless Makrolon body and brushed steel hood. The 14k gold nib is partially hidden, and the piston filler provides massive ink capacity.",
    pros: [
      "Iconic Bauhaus design — still looks modern after 60 years",
      "14k gold hooded nib with smooth, consistent flow",
      "Piston filler with huge ink capacity",
      "Seamless, minimalist body with no visible seams",
    ],
    bestFor: "Design lovers who want a classic that never goes out of style",
  },
];

function PenCard({ pen, index }: { pen: Pen; index: number }) {
  const savings = pen.msrp - pen.lowestPrice;
  const savingsPercent = Math.round((savings / pen.msrp) * 100);

  return (
    <div className="p-6 rounded border border-stone-200 bg-white">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 font-medium">
            {pen.category}
          </span>
          <h3 className="text-xl font-bold text-stone-900 mt-3">
            <Link
              href={`/brands/${pen.brandSlug}/${pen.slug}`}
              className="hover:text-blue-800 transition-colors"
            >
              {pen.brand} {pen.name}
            </Link>
          </h3>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-800">
            ${pen.lowestPrice.toFixed(2)}
          </div>
          <div className="text-xs text-stone-400 line-through">
            MSRP ${pen.msrp}
          </div>
          <div className="text-xs text-emerald-600 font-medium">
            Save {savingsPercent}%
          </div>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed mb-4">
        {pen.description}
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-stone-400">Nib:</span>
          <span className="text-stone-700">{pen.nibMaterial}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-stone-400">Filling:</span>
          <span className="text-stone-700">{pen.fillingSystem}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-stone-400">Sizes:</span>
          <span className="text-stone-700">{pen.nibSize}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-xs font-medium text-stone-500 uppercase tracking-wide mb-2">
          Why It&apos;s Great
        </div>
        <ul className="space-y-1">
          {pen.pros.map((pro, i) => (
            <li key={i} className="text-sm text-stone-600 flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5">✓</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-stone-100">
        <div className="text-xs text-stone-400">
          <span className="font-medium text-stone-600">Best for:</span>{" "}
          {pen.bestFor}
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "What is a gold nib fountain pen?",
    a: "A gold nib fountain pen uses a nib made from gold alloy (typically 14k, 18k, or 21k). Gold nibs are softer and more flexible than steel nibs, providing a smoother, more responsive writing experience. They also resist corrosion from acidic inks.",
  },
  {
    q: "Is a gold nib worth it over a steel nib?",
    a: "For many writers, yes. Gold nibs offer a softer, more springy writing feel that reduces hand fatigue during long writing sessions. They also have subtle characteristics (feedback, flex, smoothness) that steel nibs can't replicate. However, modern steel nibs from brands like Lamy and TWSBI can be excellent writers too.",
  },
  {
    q: "What's the difference between 14k and 18k gold nibs?",
    a: "14k gold is harder and springier, while 18k gold is softer and bouncier. Most Japanese brands (Pilot, Sailor, Platinum) use 14k gold as their standard, while European brands (Pelikan, Montblanc) tend to use 18k. For most writers, the difference is subtle and personal preference matters more than the karat number.",
  },
  {
    q: "Can I get a good gold nib pen under $100?",
    a: "Yes. The Aurora Ipsilon ($89) and Pilot E95S ($72) both offer genuine 14k gold nibs under $100. These are exceptional entry points into gold nib writing. The Pilot Custom 74 (~$137) and Platinum 3776 Century (~$150) offer even better nib experiences if you can stretch your budget.",
  },
];

export default function BestGoldNibFountainPensUnder200Page() {
  return (
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
        <span className="text-stone-500">Best Gold Nib Pens Under $200</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2.5 py-0.5 rounded bg-amber-50 text-amber-800">
            Buying Guide
          </span>
          <span className="text-xs text-stone-400">2026-06-30</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Best Gold Nib Fountain Pens Under $200 in 2026
        </h1>
        <p className="text-lg text-stone-500 leading-relaxed">
          A gold nib transforms a fountain pen from good to extraordinary. These
          8 pens deliver genuine gold nib writing experiences at prices that
          won&apos;t break the bank. All prices checked across Amazon, JetPens,
          Goulet Pens, and specialty retailers.
        </p>
      </header>

      {/* Quick comparison table */}
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border border-stone-200 rounded overflow-hidden">
          <thead className="bg-stone-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-stone-600">
                Pen
              </th>
              <th className="px-4 py-3 text-left font-medium text-stone-600">
                Nib
              </th>
              <th className="px-4 py-3 text-left font-medium text-stone-600">
                Filling
              </th>
              <th className="px-4 py-3 text-right font-medium text-stone-600">
                MSRP
              </th>
              <th className="px-4 py-3 text-right font-medium text-stone-600">
                From
              </th>
            </tr>
          </thead>
          <tbody>
            {pens.map((pen) => (
              <tr key={pen.slug} className="border-t border-stone-100">
                <td className="px-4 py-3">
                  <Link
                    href={`/brands/${pen.brandSlug}/${pen.slug}`}
                    className="font-medium text-stone-900 hover:text-blue-800 transition-colors"
                  >
                    {pen.brand} {pen.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-stone-600">{pen.nibMaterial}</td>
                <td className="px-4 py-3 text-stone-600">
                  {pen.fillingSystem.split(" (")[0]}
                </td>
                <td className="px-4 py-3 text-right text-stone-400">
                  ${pen.msrp}
                </td>
                <td className="px-4 py-3 text-right font-semibold text-blue-800">
                  ${pen.lowestPrice.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed cards */}
      <div className="grid gap-6 mb-12">
        {pens.map((pen, i) => (
          <PenCard key={pen.slug} pen={pen} index={i} />
        ))}
      </div>

      {/* Buying advice */}
      <section className="p-8 rounded-lg border border-stone-200 bg-stone-50 mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">
          How to Choose Your First Gold Nib Pen
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-stone-600">
          <div>
            <h3 className="font-semibold text-stone-800 mb-2">
              Start with Japanese
            </h3>
            <p>
              Japanese brands (Pilot, Sailor, Platinum) typically offer 14k gold
              nibs at lower prices than European brands. Their nib sizes also
              run finer, which is great for everyday writing on standard paper.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-stone-800 mb-2">
              Consider Nib Feedback
            </h3>
            <p>
              Pilot nibs are typically the smoothest, Sailor nibs have
              distinctive pencil-like feedback, and Platinum nibs fall in
              between. Try before you buy if possible, or read reviews about
              the writing feel.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-stone-800 mb-2">
              Filling System Matters
            </h3>
            <p>
              Cartridge/converter pens are easiest for beginners. Piston
              fillers (like the Lamy 2000) hold more ink but require bottled
              ink. Make sure you&apos;re comfortable with the filling system
              before committing.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-stone-800 mb-2">
              Nib Size: Fine or Medium?
            </h3>
            <p>
              If you write on standard copy paper, start with Fine or Extra
              Fine. Medium nibs are smoother but require higher-quality paper
              to prevent feathering. Most gold nib pens can be nib-meistered
              for a small fee if you want to adjust the line width later.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-stone-200 pb-6 last:border-0">
              <h3 className="font-semibold text-stone-800 mb-2">{faq.q}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="p-6 rounded border border-stone-200 bg-white">
        <h2 className="text-lg font-semibold text-stone-900 mb-4">
          Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/blog/best-fountain-pens-under-100"
            className="text-sm text-blue-800 hover:text-blue-600 transition-colors"
          >
            Best Fountain Pens Under $100 →
          </Link>
          <Link
            href="/blog/best-fountain-pens-under-200"
            className="text-sm text-blue-800 hover:text-blue-600 transition-colors"
          >
            Best Fountain Pens Under $200 →
          </Link>
          <Link
            href="/blog/best-fountain-pens-under-300"
            className="text-sm text-blue-800 hover:text-blue-600 transition-colors"
          >
            Best Fountain Pens Under $300 →
          </Link>
          <Link
            href="/blog/fountain-pen-nib-sizes-explained"
            className="text-sm text-blue-800 hover:text-blue-600 transition-colors"
          >
            Nib Sizes Explained →
          </Link>
          <Link
            href="/blog/best-japanese-fountain-pens"
            className="text-sm text-blue-800 hover:text-blue-600 transition-colors"
          >
            Best Japanese Fountain Pens →
          </Link>
          <Link
            href="/blog/best-fountain-pens-for-beginners"
            className="text-sm text-blue-800 hover:text-blue-600 transition-colors"
          >
            Best Beginner Fountain Pens →
          </Link>
        </div>
      </section>

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Best Gold Nib Fountain Pens Under $200 in 2026 — Affordable Luxury",
            description:
              "Compare prices on the best gold nib fountain pens under $200. Pilot Custom 74, Sailor 1911, Platinum 3776 Century, and more.",
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

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
