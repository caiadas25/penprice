import { brands } from "./brands";

export interface BrandVisual {
  color: string;
  emoji: string;
  gradient: string;
  flag: string;
}

export const brandVisual: Record<string, BrandVisual> = {
  lamy:          { color: "from-cyan-500 to-blue-600",     emoji: "✒️", gradient: "hover:border-cyan-500/50",     flag: "🇩🇪" },
  pilot:         { color: "from-red-500 to-rose-600",      emoji: "🖊️", gradient: "hover:border-red-500/50",      flag: "🇯🇵" },
  pelikan:       { color: "from-emerald-500 to-green-600", emoji: "🦜", gradient: "hover:border-emerald-500/50",  flag: "🇩🇪" },
  montblanc:     { color: "from-zinc-400 to-stone-500",    emoji: "⭐", gradient: "hover:border-zinc-400/50",     flag: "🇩🇪" },
  sailor:        { color: "from-violet-500 to-purple-600", emoji: "⚓", gradient: "hover:border-violet-500/50",    flag: "🇯🇵" },
  twsbi:         { color: "from-orange-500 to-amber-600",  emoji: "🔬", gradient: "hover:border-orange-500/50",    flag: "🇹🇼" },
  platinum:      { color: "from-blue-500 to-indigo-600",   emoji: "💎", gradient: "hover:border-blue-500/50",      flag: "🇯🇵" },
  kaweco:        { color: "from-orange-600 to-red-600",    emoji: "🏀", gradient: "hover:border-orange-600/50",    flag: "🇩🇪" },
  "faber-castell": { color: "from-green-600 to-teal-600",  emoji: "✏️", gradient: "hover:border-green-600/50",    flag: "🇩🇪" },
  noodlers:      { color: "from-red-600 to-pink-600",      emoji: "🦑", gradient: "hover:border-red-600/50",      flag: "🇺🇸" },
  aurora:        { color: "from-indigo-600 to-blue-800",   emoji: "🌅", gradient: "hover:border-indigo-600/50",    flag: "🇮🇹" },
  visconti:      { color: "from-rose-700 to-pink-800",     emoji: "🏛️", gradient: "hover:border-rose-700/50",     flag: "🇮🇹" },
  taccia:        { color: "from-purple-600 to-fuchsia-700",emoji: "🏯", gradient: "hover:border-purple-600/50",    flag: "🇯🇵" },
  nakaya:        { color: "from-amber-700 to-yellow-800",  emoji: "🎋", gradient: "hover:border-amber-700/50",     flag: "🇯🇵" },
};

export function getBrandVisual(slug: string): BrandVisual {
  return brandVisual[slug] ?? { color: "from-slate-500 to-slate-600", emoji: "🖊️", gradient: "hover:border-slate-500/50", flag: "" };
}