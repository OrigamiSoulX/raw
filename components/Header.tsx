'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link href="/community" className="text-zinc-500 hover:text-pink-400 transition-all duration-300 font-bold text-sm uppercase tracking-widest scale-95 active:scale-90">Community</Link>
        </nav>

        <Link href="/profile" className="text-zinc-500 hover:text-pink-400 transition-all duration-300 scale-95 active:scale-90">
          <span className="material-symbols-outlined text-3xl">account_circle</span>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white flex items-center">
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 bg-black/95 backdrop-blur-3xl z-40 md:hidden flex flex-col items-center justify-center gap-8 p-8">
          <Link onClick={() => setIsMenuOpen(false)} href="/" className="text-2xl font-bold text-white uppercase tracking-[0.2em]">Home</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/categories" className="text-2xl font-bold text-zinc-500 uppercase tracking-[0.2em]">Categories</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/manifesto" className="text-2xl font-bold text-zinc-500 uppercase tracking-[0.2em]">Manifesto</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/community" className="text-2xl font-bold text-zinc-500 uppercase tracking-[0.2em]">Community</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/studio" className="w-full">
            <button className="w-full py-4 rounded-full bg-primary text-on-primary font-black tracking-widest uppercase shadow-[0_0_20px_rgba(255,124,245,0.4)]">Go Pro</button>
          </Link>
        </div>
      )}
    </header>
  );
}
