import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col py-10 gap-8 bg-zinc-950 shadow-[10px_0_30px_rgba(0,0,0,0.5)] w-64 rounded-r-[3rem] z-40 hidden xl:flex mt-20">
      <div className="px-8 mb-4">
        <h2 className="font-bold text-sm uppercase tracking-widest text-pink-500">RAW Premium</h2>
        <p className="text-zinc-500 text-[10px] tracking-tighter uppercase">The Electric Pulse</p>
      </div>

      <nav className="flex flex-col gap-1">
        <Link href="/" className="flex items-center gap-4 text-zinc-600 px-6 py-4 hover:bg-zinc-900 hover:text-white transition-all group">
          <span className="material-symbols-outlined">home_max</span>
          <span className="font-bold text-sm uppercase tracking-widest">Home</span>
        </Link>
        <Link href="/categories" className="flex items-center gap-4 text-zinc-600 px-6 py-4 hover:bg-zinc-900 hover:text-white transition-all group">
          <span className="material-symbols-outlined">local_fire_department</span>
          <span className="font-bold text-sm uppercase tracking-widest">Trending</span>
        </Link>
        <Link href="/watch/featured" className="flex items-center gap-4 text-zinc-600 px-6 py-4 hover:bg-zinc-900 hover:text-white transition-all group">
          <span className="material-symbols-outlined">movie_filter</span>
          <span className="font-bold text-sm uppercase tracking-widest">Series</span>
        </Link>

        <div className="my-4 border-t border-white/5 mx-6"></div>

        <Link href="/profile" className="flex items-center gap-4 text-zinc-600 px-6 py-4 hover:bg-zinc-900 hover:text-white transition-all group">
          <span className="material-symbols-outlined">history</span>
          <span className="font-bold text-sm uppercase tracking-widest">History</span>
        </Link>
        <Link href="/profile" className="flex items-center gap-4 text-zinc-600 px-6 py-4 hover:bg-zinc-900 hover:text-white transition-all group">
          <span className="material-symbols-outlined">video_library</span>
          <span className="font-bold text-sm uppercase tracking-widest">Library</span>
        </Link>

        <div className="my-4 border-t border-white/5 mx-6"></div>

        <Link href="/studio" className="flex items-center gap-4 text-pink-500 font-black drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] border-r-4 border-pink-500 px-6 py-4 bg-zinc-900/50">
          <span className="material-symbols-outlined">verified_user</span>
          <span className="font-bold text-sm uppercase tracking-widest">Ethical Studio</span>
        </Link>
      </nav>

      <div className="mt-auto px-6">
        <Link href="/studio">
          <button className="w-full py-4 rounded-full bg-gradient-to-br from-primary to-secondary text-on-primary font-black tracking-widest text-xs shadow-[0_0_20px_rgba(255,124,245,0.3)] hover:scale-105 transition-transform uppercase">
            GO PRO
          </button>
        </Link>
      </div>
    </aside>
  );
}
