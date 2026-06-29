import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Fountain Pen Paper in 2026 — Paper That Won\u2019t Feather or Bleed | PenPrice",
  description:
    "Find the best paper for fountain pens. We test Rhodia, Clairefontaine, Tomoe River, Leuchtturm1917, Midori, and more. No feathering, no bleed-through, minimal ghosting.",
  openGraph: {
    title: "Best Fountain Pen Paper in 2026 — No Feathering, No Bleed",
    description: "Top paper picks for fountain pen writing compared by weight, smoothness, and ink handling.",
    type: "article",
  },
};

interface Paper {
  name: string;
  weight: string;
  surface: string;
  priceRange: string;
  bestFor: string;
  feathering: string;
  bleedThrough: string;
  ghosting: string;
  dryTime: string;
  why: string;
  url: string;
}

const papers: Paper[] = [
  {
    name: "Rhodia Premium",
    weight: "90 gsm",
    surface: "Satin smooth",
    priceRange: "$8-20",
    bestFor: "Everyday writing",
    feathering: "None",
    bleedThrough: "None",
    ghosting: "Minimal",
    dryTime: "Moderate (8-12s)",
    why: "The gold standard for fountain pen paper. Silky-smooth surface, excellent ink handling, and widely available in pads, notebooks, and notepads. Works with every ink and nib combination.",
    url: "https://www.amazon.com/s?k=Rhodia+fountain+pen+paper",
  },
  {
    name: "Clairefontaine Triomphe",
    weight: "90 gsm",
    surface: "Ultra smooth",
    priceRange: "$10-22",
    bestFor: "Formal correspondence",
    feathering: "None",
    bleedThrough: "None",
    ghosting: "Minimal",
    dryTime: "Slow (10-15s)",
    why: "The smoothest paper on the market. Ink glides across the surface with almost zero friction. Slightly wetter writing experience. Best for letters, calligraphy, and slow writing sessions.",
    url: "https://www.amazon.com/s?k=Clairefontaine+Triomphe+paper",
  },
  {
    name: "Tomoe River (Sanzen)",
    weight: "52 gsm",
    surface: "Smooth, thin",
    priceRange: "$15-35",
    bestFor: "Journaling & ink sampling",
    feathering: "None",
    bleedThrough: "Rare (with very wet pens)",
    ghosting: "Moderate (paper is thin)",
    dryTime: "Very slow (15-30s)",
    why: "Legendary among fountain pen users. Paper is incredibly thin but handles ink beautifully. Shimmer and sheen inks show their full range on Tomoe River. The slow dry time is a trade-off for unmatched ink presentation.",
    url: "https://www.amazon.com/s?k=Tomoe+River+paper",
  },
  {
    name: "Leuchtturm1917",
    weight: "80 gsm",
    surface: "Smooth matte",
    priceRange: "$15-25",
    bestFor: "Bullet journaling",
    feathering: "Minimal",
    bleedThrough: "None",
    ghosting: "Moderate",
    dryTime: "Fast (5-8s)",
    why: "The bullet journaler\u2019s favorite. Pre-numbered pages, table of contents, and pocket in the back. Handles fountain pen ink well, though very wet inks may show through slightly. Dries faster than Rhodia.",
    url: "https://www.amazon.com/s?k=Leuchtturm1917+notebook",
  },
  {
    name: "Midori MD",
    weight: "81 gsm",
    surface: "Lightly textured",
    priceRange: "$12-25",
    bestFor: "Japanese inks & fine nibs",
    feathering: "None",
    bleedThrough: "None",
    ghosting: "Minimal",
    dryTime: "Moderate (8-12s)",
    why: "Midori\u2019s cotton-blend paper has a subtle texture that gives fine-nib writing beautiful character. Especially good with Pilot Iroshizuku and Sailor Jentle inks. Available in A5, A6, and passport sizes.",
    url: "https://www.amazon.com/s?k=Midori+MD+notebook",
  },
  {
    name: "Maruman Mnemosyne",
    weight: "80 gsm",
    surface: "Smooth",
    priceRange: "$10-20",
    bestFor: "Note-taking & meetings",
    feathering: "None",
    bleedThrough: "None",
    ghosting: "Minimal",
    dryTime: "Moderate (7-10s)",
    why: "Japanese engineering at its finest. Mnemosyne notebooks have lay-flat binding, a pocket, and a pen loop. The paper is smooth and handles fountain pen ink without feathering. A hidden gem among pen users.",
    url: "https://www.amazon.com/s?k=Maruman+Mnemosyne+notebook",
  },
  {
    name: "Cosmo Air Light",
    weight: "75 gsm",
    surface: "Slightly rough",
    priceRange: "$12-20",
    bestFor: "Sheen & shimmer inks",
    feathering: "None",
    bleedThrough: "None",
    ghosting: "Minimal",
    dryTime: "Moderate (8-12s)",
    why: "The paper that\u2019s taken the fountain pen world by storm. Cosmo Air Light shows ink sheen like Tomoe River but with more body and faster dry times. Excellent for showcasing ink properties.",
    url: "https://www.amazon.com/s?k=Cosmo+Air+Light+paper",
  },
  {
    name: "Hammermill Premium Laser",
    weight: "28 lb (105 gsm)",
    surface: "Smooth, bright white",
    priceRange: "$10-15 (ream)",
    bestFor: "Budget everyday writing",
    feathering: "None",
    bleedThrough: "None",
    ghosting: "Minimal",
    dryTime: "Fast (4-6s)",
    why: "The budget pick that punches above its weight. A ream of 500 sheets costs less than a single Rhodia pad. Surprisingly good with fountain pens. Best with fine and medium nibs on the drier side.",
    url: "https://www.amazon.com/s?k=Hammermill+Premium+Laser+paper",
  },
];

function PaperCard({ paper }: { paper: Paper }) {
  return (
    <div className="border border-stone-200 rounded p-6 bg-white">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-stone-900">{paper.name}</h3>
          <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-800">
            {paper.bestFor}
          </span>
        </div>
        <span className="text-blue-800 font-mono text-sm font-bold">{paper.priceRange}</span>
      </div>
      <p className="text-stone-500 text-sm leading-relaxed mb-4">{paper.why}</p>
      <div className="grid grid-cols-2 gap-2 text-xs mb-4">
        <div className="flex justify-between text-stone-400">
          <span>Weight:</span>
          <span className="text-stone-700">{paper.weight}</span>
        </div>
        <div className="flex justify-between text-stone-400">
          <span>Surface:</span>
          <span className="text-stone-700">{paper.surface}</span>
        </div>
        <div className="flex justify-between text-stone-400">
          <span>Feathering:</span>
          <span className="text-stone-700">{paper.feathering}</span>
        </div>
        <div className="flex justify-between text-stone-400">
          <span>Bleed-through:</span>
          <span className="text-stone-700">{paper.bleedThrough}</span>
        </div>
        <div className="flex justify-between text-stone-400">
          <span>Ghosting:</span>
          <span className="text-stone-700">{paper.ghosting}</span>
        </div>
        <div className="flex justify-between text-stone-400">
          <span>Dry time:</span>
          <span className="text-stone-700">{paper.dryTime}</span>
        </div>
      </div>
      <a
        href={paper.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs px-3 py-1.5 rounded bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors inline-block"
      >
        Check Price on Amazon →
      </a>
    </div>
  );
}

export default function BestFountainPenPaperPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Best Fountain Pen Paper</span>
      </nav>

      <article>
        <header className="mb-10">
          <p className="text-blue-800 text-sm font-medium mb-2">Paper Guide — Updated June 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Best Fountain Pen Paper in 2026
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            The paper you write on matters as much as the pen in your hand. The right paper eliminates
            feathering, prevents bleed-through, and lets your ink\u2019s true color and character shine.
            Here are the 8 best papers for fountain pen writing.
          </p>
        </header>

        {/* Quick Start */}
        <div className="bg-white border border-stone-200 rounded p-6 mb-10">
          <h2 className="text-lg font-bold text-stone-900 mb-3">Quick Start: What to Look For</h2>
          <ul className="space-y-3 text-sm text-stone-700">
            <li>
              <span className="text-blue-800 font-semibold">1. Weight (gsm) matters less than you think.</span>{" "}
              A 52 gsm Tomoe River sheet handles ink better than many 100+ gsm copy papers.
              What matters is coating and fiber quality, not raw thickness.
            </li>
            <li>
              <span className="text-blue-800 font-semibold">2. Smooth doesn&apos;t always mean better.</span>{" "}
              Some writers prefer the slight tooth of Midori or Cosmo Air Light for the tactile feedback it gives
              fine nibs. Ultra-smooth Clairefontaine is better for flex and broad nibs.
            </li>
            <li>
              <span className="text-blue-800 font-semibold">3. Dry time is the trade-off.</span>{" "}
              Papers that handle ink best (Tomoe River, Clairefontaine) also take longest to dry.
              If you&apos;re a lefty or write quickly, opt for Leuchtturm or Hammermill.
            </li>
          </ul>
        </div>

        {/* Paper Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Top 8 Fountain Pen Papers</h2>
          <div className="grid gap-4">
            {papers.map((paper) => (
              <PaperCard key={paper.name} paper={paper} />
            ))}
          </div>
        </section>

        {/* Paper Types Explained */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Understanding Paper for Fountain Pens</h2>
          <div className="grid gap-4 text-sm">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Coated vs Uncoated</h3>
              <p className="text-stone-500">Coated papers (Rhodia, Clairefontaine, Tomoe River) have a surface treatment that prevents ink from absorbing into the fibers. This eliminates feathering and shows ink colors vividly. Uncoated papers (Leuchtturm, generic notebooks) absorb ink faster, reducing dry time but potentially causing feathering with wet inks.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Fountain Pen Friendly vs Regular Paper</h3>
              <p className="text-stone-500">Regular copy paper and cheap notebook paper are designed for ballpoints and laser printers. The fibers are loose and uncoated, causing fountain pen ink to feather and bleed. Fountain pen papers use tighter fibers and coatings to contain ink on the surface.</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 mb-2">Sheen and Shimmer</h3>
              <p className="text-stone-500">Some inks produce a metallic sheen or shimmer particles that are only visible on specific papers. Tomoe River and Cosmo Air Light are best for showing sheen. Shimmer inks (with glitter particles) work on most papers but look best on smooth, coated surfaces.</p>
            </div>
          </div>
        </section>

        {/* Inks that pair well */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Best Inks for Fountain Pen Paper</h2>
          <p className="text-sm text-stone-500 mb-4">
            The right ink-pair can make good paper great. Here are our top picks:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 text-sm">Pilot Iroshizuku</h3>
              <p className="text-stone-400 text-xs mt-1">Balanced flow, gorgeous colors, works on every paper</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 text-sm">Diamine</h3>
              <p className="text-stone-400 text-xs mt-1">100+ colors, budget-friendly, dries fast on most papers</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 text-sm">Sailor Jentle</h3>
              <p className="text-stone-400 text-xs mt-1">Rich sheen on Tomoe River, beautiful shading</p>
            </div>
            <div className="p-4 rounded border border-stone-200 bg-white">
              <h3 className="font-bold text-stone-900 text-sm">Waterman Serenity Blue</h3>
              <p className="text-stone-400 text-xs mt-1">The safe choice, works on every paper without issues</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/best-fountain-pen-inks" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Fountain Pen Inks →</span>
              <span className="block text-stone-400 mt-1">Compare inks by color, brand, and properties</span>
            </Link>
            <Link href="/blog/fountain-pen-maintenance-guide" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Pen Maintenance Guide →</span>
              <span className="block text-stone-400 mt-1">How to clean and care for your fountain pen</span>
            </Link>
            <Link href="/blog/fountain-pen-ink-comparison-guide" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Ink Comparison Guide →</span>
              <span className="block text-stone-400 mt-1">Dye-based, pigmented, iron gall, and shimmer inks</span>
            </Link>
            <Link href="/blog/best-fountain-pens-for-beginners" className="p-4 rounded border border-stone-200 hover:border-blue-300 transition-all text-sm">
              <span className="text-stone-900 font-semibold">Best Beginner Pens →</span>
              <span className="block text-stone-400 mt-1">Start your fountain pen journey right</span>
            </Link>
          </div>
        </section>
      </article>

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best Fountain Pen Paper in 2026",
            description: "Find the best paper for fountain pens. We test Rhodia, Clairefontaine, Tomoe River, Leuchtturm1917, Midori, and more. No feathering, no bleed-through.",
            author: { "@type": "Organization", name: "PenPrice" },
            publisher: { "@type": "Organization", name: "PenPrice" },
            datePublished: "2026-06-29",
            dateModified: "2026-06-29",
            mainEntityOfPage: "https://penprice.vercel.app/blog/best-fountain-pen-paper",
          }),
        }}
      />
      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What paper is best for fountain pens?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rhodia Premium is the best all-around fountain pen paper. It has 90 gsm coated paper that prevents feathering and bleed-through. For ink presentation, Tomoe River shows sheen and shimmer best. For fast drying, Leuchtturm1917 and Hammermill are better choices.",
                },
              },
              {
                "@type": "Question",
                name: "Can fountain pens write on regular paper?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fountain pens can write on regular paper, but you will likely experience feathering (ink spreading along paper fibers) and bleed-through (ink soaking to the other side). Fine nibs with drier inks work better on regular paper than broad nibs with wet inks.",
                },
              },
              {
                "@type": "Question",
                name: "Is Tomoe River paper still good after the factory change?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Tomoe River paper moved from the original Tomoegawa factory to Sanzen in 2021. Sanzen Tomoe River is slightly thicker and smoother than the original, but still excellent for fountain pen use. Many users prefer it for the improved writing experience.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
