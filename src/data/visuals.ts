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
  delta:         { color: "from-red-500 to-orange-500",    emoji: "🎭", gradient: "hover:border-red-500/50",      flag: "🇮🇹" },
  omas:          { color: "from-yellow-600 to-amber-600",  emoji: "🏛️", gradient: "hover:border-yellow-600/50",    flag: "🇮🇹" },
  leonardo:      { color: "from-teal-500 to-cyan-600",     emoji: "🇮🇹", gradient: "hover:border-teal-500/50",    flag: "🇮🇹" },
  waterman:      { color: "from-blue-700 to-indigo-700",   emoji: "💧", gradient: "hover:border-blue-700/50",     flag: "🇫🇷" },
  parker:        { color: "from-emerald-700 to-green-800", emoji: "✒️", gradient: "hover:border-emerald-700/50",   flag: "🇬🇧" },
  sheaffer:      { color: "from-sky-600 to-blue-600",      emoji: "🛡️", gradient: "hover:border-sky-600/50",      flag: "🇺🇸" },
  diplomat:      { color: "from-rose-500 to-pink-600",     emoji: "🇩🇪", gradient: "hover:border-rose-500/50",     flag: "🇩🇪" },
  cross:         { color: "from-slate-600 to-zinc-700",    emoji: "✅", gradient: "hover:border-slate-600/50",     flag: "🇺🇸" },
  "franklin-christoph": { color: "from-fuchsia-500 to-purple-600", emoji: "💎", gradient: "hover:border-fuchsia-500/50", flag: "🇺🇸" },
  jinhao:        { color: "from-red-700 to-rose-800",      emoji: "🐉", gradient: "hover:border-red-700/50",      flag: "🇨🇳" },
  hongdian:      { color: "from-green-700 to-emerald-800", emoji: "🌲", gradient: "hover:border-green-700/50",    flag: "🇨🇳" },
  montegrappa:   { color: "from-amber-500 to-yellow-600",  emoji: "🏔️", gradient: "hover:border-amber-500/50",    flag: "🇮🇹" },
  conklin:       { color: "from-amber-600 to-orange-600",  emoji: "🇺🇸", gradient: "hover:border-amber-600/50",    flag: "🇺🇸" },
  monteverde:    { color: "from-green-500 to-emerald-600", emoji: "🌿", gradient: "hover:border-green-500/50",    flag: "🇺🇸" },
  esterbrook:    { color: "from-amber-500 to-yellow-500",  emoji: "✒️", gradient: "hover:border-amber-500/50",    flag: "🇺🇸" },
  benu:          { color: "from-pink-500 to-fuchsia-600",  emoji: "💎", gradient: "hover:border-pink-500/50",     flag: "🇺🇸" },
  nahvalur:      { color: "from-cyan-500 to-teal-600",    emoji: "🐳", gradient: "hover:border-cyan-500/50",     flag: "🇨🇳" },
  "opus-88":     { color: "from-violet-500 to-purple-600", emoji: "🎨", gradient: "hover:border-violet-500/50",  flag: "🇹🇼" },
  pineider:      { color: "from-rose-400 to-pink-500",     emoji: "🏛️", gradient: "hover:border-rose-400/50",  flag: "🇮🇹" },
  gravitas:      { color: "from-slate-500 to-zinc-600",   emoji: "⚡", gradient: "hover:border-slate-500/50", flag: "🇮🇪" },
  ensso:         { color: "from-indigo-400 to-violet-500", emoji: "✏️", gradient: "hover:border-indigo-400/50", flag: "🇯🇵" },
  namiki:        { color: "from-yellow-500 to-red-600",    emoji: "🎎", gradient: "hover:border-yellow-500/50",    flag: "🇯🇵" },
  stipula:       { color: "from-teal-600 to-emerald-700",  emoji: "🏛️", gradient: "hover:border-teal-600/50",    flag: "🇮🇹" },
  "caran-dache":  { color: "from-rose-600 to-red-700",     emoji: "🎨", gradient: "hover:border-rose-600/50",    flag: "🇨🇭" },
  rotring:       { color: "from-red-600 to-stone-700",     emoji: "📐", gradient: "hover:border-red-600/50",     flag: "🇩🇪" },
  asvine:        { color: "from-emerald-500 to-teal-600",  emoji: "✒️", gradient: "hover:border-emerald-500/50", flag: "🇨🇳" },
  penbbs:        { color: "from-purple-500 to-indigo-600", emoji: "📝", gradient: "hover:border-purple-500/50",  flag: "🇨🇳" },
  wancher:       { color: "from-amber-500 to-yellow-600", emoji: "🌊", gradient: "hover:border-amber-500/50", flag: "🇯🇵" },
  bexley:        { color: "from-sky-600 to-blue-700",     emoji: "🇺🇸", gradient: "hover:border-sky-600/50",  flag: "🇺🇸" },
};

export function getBrandVisual(slug: string): BrandVisual {
  return brandVisual[slug] ?? { color: "from-slate-500 to-slate-600", emoji: "🖊️", gradient: "hover:border-slate-500/50", flag: "" };
}