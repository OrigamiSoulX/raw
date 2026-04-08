import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-black/80 backdrop-blur-xl shadow-[0_0_20px_rgba(255,0,255,0.1)]">
      <Link href="/" className="font-extrabold tracking-tighter text-4xl font-black text-pink-500 tracking-[-0.04em] drop-shadow-[0_0_10px_rgba(255,0,255,0.6)]">
        RAW
      </Link>

      <div className="flex items-center gap-6">
        <div className="relative group hidden md:block">
          <input
            type="text"
            placeholder="Search parameters..."
            className="bg-surface-container-low border-b-2 border-outline-variant focus:border-primary px-4 py-2 outline-none text-sm w-64 transition-all duration-300 text-white"
          />
          <span className="material-symbols-outlined absolute right-2 top-2 text-zinc-500">search</span>
        </div>

        <nav className="hidden md:flex gap-8 items-center ml-4">
          <Link href="/" className="text-zinc-500 hover:text-pink-400 transition-all duration-300 font-bold text-sm uppercase tracking-widest scale-95 active:scale-90">Home</Link>
          <Link href="/categories" className="text-zinc-500 hover:text-pink-400 transition-all duration-300 font-bold text-sm uppercase tracking-widest scale-95 active:scale-90">Categories</Link>
          <Link href="/manifesto" className="text-zinc-500 hover:text-pink-400 transition-all duration-300 font-bold text-sm uppercase tracking-widest scale-95 active:scale-90">Manifesto</Link>
        </nav>

        <Link href="/profile" className="text-zinc-500 hover:text-pink-400 transition-all duration-300 scale-95 active:scale-90">
          <span className="material-symbols-outlined text-3xl">account_circle</span>
        </Link>

        <div className="md:hidden">
          <span className="material-symbols-outlined text-white cursor-pointer">menu</span>
        </div>
      </div>
    </header>
  );
}
