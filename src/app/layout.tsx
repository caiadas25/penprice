import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PenPrice — Fountain Pen Price Comparison & Aggregator",
  description:
    "Compare fountain pen prices across Amazon, eBay, JetPens, Goulet Pens, and more. Find the best price on Lamy, Pilot, Pelikan, Montblanc, Sailor, TWSBI, and 50+ models. Built for fountain pen enthusiasts.",
  openGraph: {
    title: "PenPrice — Find the Best Price on Fountain Pens",
    description:
      "Compare prices across top retailers. Lamy Safari, Pilot Custom 823, Pelikan M800, Montblanc 149, and more.",
    siteName: "PenPrice",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PenPrice — Fountain Pen Price Comparison",
    description:
      "Find the best price on your next fountain pen. Compare Amazon, eBay, JetPens, Goulet Pens, and more.",
  },
  metadataBase: new URL("https://penprice.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
        <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🖊️</span>
              <span className="text-xl font-bold">
                Pen<span className="text-amber-400">Price</span>
              </span>
            </Link>
            <nav className="ml-auto flex items-center gap-4 text-sm text-slate-400">
              <Link href="/" className="hover:text-amber-400 transition-colors">
                Brands
              </Link>
              <Link href="/blog" className="hover:text-amber-400 transition-colors">
                Guides
              </Link>
              <Link href="/faq" className="hover:text-amber-400 transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
        </nav>
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}