import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fountain Pen Nib Grind Types Explained — Cursive, Architect, Stub & More | PenPrice",
  description:
    "Learn about every fountain pen nib grind type: cursive italic, architect, stub, needlepoint, fude, and more. What each grind writes like, who it's for, and where to get them.",
  openGraph: {
    title: "Fountain Pen Nib Grinds Explained — 2026 Guide",
    description:
      "Cursive italic, architect, stub, needlepoint — what each nib grind does and which is right for you.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fountain Pen Nib Grinds Explained",
    description:
      "Every fountain pen nib grind type explained with writing samples and recommendations.",
  },
};

interface NibGrind {
  name: string;
  description: string;
  writingStyle: string;
  bestFor: string;
  difficulty: string;
  examples: string[];
  priceFrom?: string;
}

const grinds: NibGrind[] = [
  {
    name: "Standard Round",
    description: "The default grind on most fountain pens. A round tip that produces a consistent line width regardless of writing direction. This is what 90% of fountain pen users write with.",
    writingStyle: "Consistent, uniform line",
    bestFor: "Every writing situation",
    difficulty: "Beginner-friendly",
    examples: ["Pilot Metropolitan Fine", "Lamy Safari Medium", "TWSBI ECO Fine"],
  },
  {
    name: "Stub (1.0mm, 1.1mm, 1.5mm)",
    description: "A flat, rectangular tip that produces thick downstrokes and thin cross strokes. Creates natural line variation without any pressure. The most popular specialty grind for everyday use.",
    writingStyle: "Thick verticals, thin horizontals",
    bestFor: "Adding character to everyday writing",
    difficulty: "Easy — most people adapt in 10 minutes",
    examples: ["Lamy 1.1mm Stub", "TWSBI 1.1mm Stub", "Kaweco 1.1mm Stub"],
    priceFrom: "$30 (Lamy Safari with stub nib)",
  },
  {
    name: "Cursive Italic",
    description: "A more refined version of the stub grind with sharper edges. Produces more dramatic line variation and crisper edges. Requires a slight writing angle adjustment but rewards with beautiful script.",
    writingStyle: "Dramatic thick/thin with crisp edges",
    bestFor: "Cursive handwriting, calligraphy",
    difficulty: "Intermediate — needs some practice",
    examples: ["Pilot Parallel 2.4mm", "Custom ground by nibmeisters"],
  },
  {
    name: "Architect",
    description: "A specialty grind that produces thick horizontal strokes and thin verticals — the opposite of a stub. Named because architects use it for drafting lettering. Creates a unique, striking handwriting style.",
    writingStyle: "Thick horizontals, thin verticals",
    bestFor: "Printing, architectural lettering, unique handwriting",
    difficulty: "Intermediate — unusual feel at first",
    examples: ["Custom ground by nibmeisters"],
  },
  {
    name: "Needlepoint / Ultra Extra Fine",
    description: "An extremely fine point that produces a hair-thin line. Popular in Japan where fine writing is the norm. Requires a light hand and smooth paper to avoid scratchiness.",
    writingStyle: "Hair-thin, precise lines",
    bestFor: "Detailed writing, small handwriting, Japanese text",
    difficulty: "Intermediate — requires light pressure",
    examples: ["Pilot Falcon SEF", "Nakaya Ultra Extra Fine", "Platinum UEF"],
  },
  {
    name: "Fude (Brush Nib)",
    description: "A bent nib that mimics a brush pen. By changing the angle you hold the pen, you can vary line width from thin to thick. Extremely versatile for both writing and drawing.",
    writingStyle: "Variable — thin to brush-like thick",
    bestFor: "Chinese/Japanese calligraphy, drawing, expressive writing",
    difficulty: "Intermediate — takes practice to control",
    examples: ["Jinhao X159 Fude", "Sailor Fude de Mannen", "Bent nib conversions"],
    priceFrom: "$8 (Jinhao X159 Fude)",
  },
  {
    name: "Flex / Wet Noodle",
    description: "A nib designed to spread under pressure, producing dramatic line variation similar to a dip pen. True flex nibs are rare and expensive. Many modern \"flex\" nibs are actually just soft nibs.",
    writingStyle: "Copperplate-style thick/thin variation",
    bestFor: "Copperplate calligraphy, Spencerian script",
    difficulty: "Advanced — requires pressure control",
    examples: ["Noodler's Ahab (semi-flex)", "Pilot Custom 912 FA", "Vintage flex pens"],
  },
  {
    name: "Oblique",
    description: "A nib with the tip cut at an angle (usually 15-22 degrees). Designed for people who hold the pen at an unusual angle. Produces line variation similar to a stub but optimized for specific grip styles.",
    writingStyle: "Variable — depends on writing angle",
    bestFor: "Left-handed writers, unusual grip angles",
    difficulty: "Intermediate — needs the right grip angle",
    examples: ["Pelikan M1000 Oblique", "Montblanc Oblique", "Custom ground"],
  },
];

export default function NibGrindTypesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-8">
        <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-500">Nib Grind Types</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-2.5 py-0.5 rounded bg-blue-50 text-blue-800">Technical Guide</span>
          <span className="text-xs text-stone-400">2026-06-30</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Fountain Pen Nib Grind Types Explained — Cursive, Architect, Stub & More
        </h1>
        <p className="text-lg text-stone-500">
          Beyond the standard round nib, there are dozens of specialty grinds that transform how your fountain pen writes. Here&apos;s every nib grind type, what it does, and which is right for you.
        </p>
      </header>

      <div className="prose prose-stone max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">What Is a Nib Grind?</h2>
          <p className="text-stone-600 mb-4">
            A nib grind is the shape of the tipping material at the very end of your fountain pen nib. The standard grind is round, which produces a consistent line. But by reshaping that tip, nibmeisters (nib specialists) can create grinds that produce different line widths depending on the direction of the stroke.
          </p>
          <p className="text-stone-600">
            Specialty grinds add character and expression to your writing without requiring calligraphy training. The most popular — stub grinds — are available factory-installed on many pens for under $40.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">All Nib Grind Types</h2>
          <div className="space-y-6">
            {grinds.map((grind) => (
              <div key={grind.name} className="p-6 rounded border border-stone-200 bg-white">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-stone-900">{grind.name}</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded bg-stone-100 text-stone-600">{grind.difficulty}</span>
                </div>
                <p className="text-stone-600 text-sm mb-3">{grind.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-2 bg-stone-50 rounded">
                    <span className="font-bold text-stone-700">Writing Style: </span>
                    <span className="text-stone-600">{grind.writingStyle}</span>
                  </div>
                  <div className="p-2 bg-stone-50 rounded">
                    <span className="font-bold text-stone-700">Best For: </span>
                    <span className="text-stone-600">{grind.bestFor}</span>
                  </div>
                  {grind.priceFrom && (
                    <div className="p-2 bg-green-50 rounded">
                      <span className="font-bold text-green-700">From: </span>
                      <span className="text-green-600">{grind.priceFrom}</span>
                    </div>
                  )}
                </div>
                <div className="mt-3 text-xs text-stone-500">
                  <span className="font-medium">Examples: </span>
                  {grind.examples.join(" · ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Which Grind Should You Choose?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded bg-stone-50 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">If you want more character...</h3>
              <p className="text-stone-600 text-sm">
                Start with a <strong>stub grind</strong>. It&apos;s the easiest specialty grind, requires zero learning curve, and adds instant elegance to your handwriting. Most major brands offer stub nib options.
              </p>
            </div>
            <div className="p-4 rounded bg-stone-50 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">If you want something unique...</h3>
              <p className="text-stone-600 text-sm">
                Try an <strong>architect grind</strong> or <strong>cursive italic</strong>. These require more practice but produce writing that&apos;s unmistakably yours. Send your pen to a nibmeister for custom grinding.
              </p>
            </div>
            <div className="p-4 rounded bg-stone-50 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">If you draw with your pen...</h3>
              <p className="text-stone-600 text-sm">
                A <strong>fude nib</strong> gives you the most versatility. Change your grip angle to go from thin lines to brush-like strokes. Jinhao makes excellent affordable fude pens.
              </p>
            </div>
            <div className="p-4 rounded bg-stone-50 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">If you want the finest lines...</h3>
              <p className="text-stone-600 text-sm">
                A <strong>needlepoint</strong> or ultra-extra-fine nib is for you. Japanese brands like Pilot, Platinum, and Nakaya make the finest nibs in the world. Pair with smooth paper for best results.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Related Guides</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/blog/fountain-pen-nib-sizes-explained" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-bold text-stone-900">Nib Sizes Explained</h3>
              <p className="text-sm text-stone-500">Extra Fine to Broad — what each nib size writes like and which to choose.</p>
            </Link>
            <Link href="/blog/best-fountain-pens-for-calligraphy" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-bold text-stone-900">Best Fountain Pens for Calligraphy</h3>
              <p className="text-sm text-stone-500">Flex nibs, stub nibs, and italic nibs for calligraphy writing.</p>
            </Link>
            <Link href="/blog/best-fountain-pens-for-beginners" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-bold text-stone-900">Best Fountain Pens for Beginners</h3>
              <p className="text-sm text-stone-500">Start with a standard round nib, then explore specialty grinds.</p>
            </Link>
            <Link href="/blog/best-fountain-pens-for-drawing" className="block p-4 rounded border border-stone-200 bg-white hover:border-blue-300 transition-all">
              <h3 className="font-bold text-stone-900">Best Fountain Pens for Drawing</h3>
              <p className="text-sm text-stone-500">Fude nibs and specialty grinds for artists and sketchers.</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
