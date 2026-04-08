import Link from 'next/link';

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full h-16 bg-black/90 backdrop-blur-md flex justify-around items-center z-50 border-t border-zinc-800">
      <Link href="/" className="text-zinc-500 hover:text-white transition-colors">
        <span className="material-symbols-outlined">home_max</span>
      </Link>
      <Link href="/categories" className="text-zinc-500 hover:text-white transition-colors">
        <span className="material-symbols-outlined">school</span>
      </Link>
      <Link href="/watch/featured" className="text-zinc-500 hover:text-white transition-colors">
        <span className="material-symbols-outlined">movie_filter</span>
      </Link>
      <Link href="/studio" className="text-pink-500 shadow-[0_0_10px_rgba(255,124,245,0.5)]">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
      </Link>
    </nav>
  );
}
