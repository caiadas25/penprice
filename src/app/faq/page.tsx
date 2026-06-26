import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fountain Pen FAQ — Common Questions Answered | PenPrice",
  description:
    "Got questions about fountain pens? Find answers about nib sizes, ink, filling systems, maintenance, and more in our comprehensive FAQ.",
  openGraph: {
    title: "Fountain Pen FAQ — Everything You Need to Know",
    description: "Answers to the most common questions about fountain pens for beginners and enthusiasts.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is a fountain pen?",
    answer: "A fountain pen is a writing instrument that uses a metal nib and liquid ink from a reservoir. Unlike ballpoint pens that use thick paste ink, fountain pens use water-based ink that flows through a feed system to the nib. They offer a smoother, more expressive writing experience.",
  },
  {
    question: "Are fountain pens hard to use?",
    answer: "Not at all. Modern fountain pens are designed to be beginner-friendly. You don't need to apply pressure like a ballpoint. Simply hold the pen at a slight angle and let the ink flow. The biggest learning curve is choosing the right nib size for your handwriting.",
  },
  {
    question: "What nib size should I start with?",
    answer: "For most beginners, a Fine or Medium nib is ideal. Japanese Fine nibs (Pilot, Platinum, Sailor) are finer than Western Fine nibs (Lamy, Pelikan). If you have small handwriting, start with Japanese Fine. If you write large, go Western Medium.",
  },
  {
    question: "What is the difference between cartridge and bottled ink?",
    answer: "Cartridges are pre-filled, disposable ink containers that snap into your pen. Bottled ink comes in a bottle and requires a converter or piston filler to use. Bottled ink is cheaper per fill and offers more color choices, but cartridges are more convenient for beginners.",
  },
  {
    question: "Do fountain pens leak?",
    answer: "Modern fountain pens are designed not to leak when used correctly. Keep the nib pointing up when not in use, don't overfill the ink reservoir, and store the pen horizontally or nib-up. Temperature changes and air pressure (like on airplanes) can cause minor leakage, but it's rare with quality pens.",
  },
  {
    question: "How do I clean a fountain pen?",
    answer: "Flush the pen with cool water until the water runs clear. For cartridge pens, remove the cartridge and run water through the section. For piston fillers, repeatedly draw and expel clean water through the filling mechanism. Clean your pen every time you change ink colors or every 4-6 weeks if using the same ink.",
  },
  {
    question: "What paper works best with fountain pens?",
    answer: "Fountain pen friendly paper has a smooth, coated surface that prevents feathering and bleeding. Popular choices include Rhodia, Clairefontaine, Midori MD, Leuchtturm1917, and Tomoe River. Avoid cheap copy paper, which causes ink to spread and bleed through.",
  },
  {
    question: "How much should I spend on my first fountain pen?",
    answer: "You can get an excellent beginner fountain pen for $5-30. The Platinum Preppy ($6), Pilot Metropolitan ($19), and Lamy Safari ($30) are all fantastic starting points. There's no need to spend more than $50 for your first pen.",
  },
  {
    question: "Can I use fountain pens for everyday writing?",
    answer: "Absolutely. Fountain pens are designed for everyday use. Many people use them for journaling, note-taking, correspondence, and even grocery lists. The key is choosing a pen with a durable nib and using it on reasonably good paper.",
  },
  {
    question: "What is the best fountain pen brand for beginners?",
    answer: "Pilot, Lamy, and Platinum are the most recommended beginner brands. Pilot offers exceptional nib quality at all price points. Lamy's Safari is iconic and easy to hold. Platinum's Preppy is the best value in fountain pens. All three have large aftermarket support and ink availability.",
  },
  {
    question: "How long do fountain pen nibs last?",
    answer: "A steel nib can last decades with proper care. Gold nibs can last a lifetime. Nibs do wear down over time, especially if you write with heavy pressure or on rough paper. Most nibs can be replaced or professionally tuned if needed.",
  },
  {
    question: "Are fountain pens worth it?",
    answer: "For most people, yes. Fountain pens offer a smoother writing experience, reduce hand fatigue, and make writing more enjoyable. They're also more sustainable than disposable pens since you only replace the ink. The initial learning curve is small, and the payoff in writing quality is significant.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">FAQ</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Fountain Pen FAQ
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Answers to the most common questions about fountain pens. Whether you&apos;re a
          complete beginner or looking to upgrade, we&apos;ve got you covered.
        </p>
      </header>

      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="border-b border-slate-700 pb-6 last:border-0">
            <h2 className="text-lg font-bold text-white mb-2">{faq.question}</h2>
            <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Internal Links */}
      <section className="mt-12 border-t border-slate-700 pt-8">
        <h2 className="text-lg font-bold text-white mb-4">Ready to Buy?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/blog/best-fountain-pens-for-beginners" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
            <span className="text-white font-semibold">Beginner&apos;s Guide →</span>
            <span className="block text-slate-500 mt-1">Our top 10 picks for first-time buyers</span>
          </Link>
          <Link href="/blog/best-fountain-pens-under-50" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
            <span className="text-white font-semibold">Best Pens Under $50 →</span>
            <span className="block text-slate-500 mt-1">Budget-friendly options with price comparisons</span>
          </Link>
          <Link href="/brands/pilot" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
            <span className="text-white font-semibold">Browse Pilot Pens →</span>
            <span className="block text-slate-500 mt-1">Metropolitan, Custom 823, Vanishing Point</span>
          </Link>
          <Link href="/" className="p-4 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-all text-sm">
            <span className="text-white font-semibold">Compare All Prices →</span>
            <span className="block text-slate-500 mt-1">11 brands, 39+ models tracked</span>
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
