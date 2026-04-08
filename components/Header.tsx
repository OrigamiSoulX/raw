'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

function HeaderContent({ onSearch }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('q') || '');

  const handleSearch = (val: string) => {
    setSearchValue(val);
    if (onSearch) {
      onSearch(val);
    } else {
      if (val.trim()) {
        router.push(`/?q=${encodeURIComponent(val)}`);
      }
    }
  };

  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) setSearchValue(q);
  }, [searchParams]);

  return (
    <header className="fixed top-0 w-full z-50 h-16 glass flex items-center px-6 md:px-8">
      <Link href="/" className="font-bold text-2xl text-white tracking-tighter mr-12 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg premium-gradient" />
        RAW
      </Link>

      <div className="flex-1 max-w-2xl hidden md:block">
        <div className="relative flex items-center w-full">
          <span className="material-symbols-outlined absolute left-4 text-on-surface-variant text-xl">search</span>
          <input
            type="text"
            placeholder="Search for transmissions..."
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full bg-surface-high border border-white/5 rounded-full py-2.5 pl-12 pr-6 outline-none focus:border-primary/30 focus:bg-surface-highest transition-all text-sm text-white placeholder-on-surface-variant"
          />
        </div>
      </div>

      <div className="flex items-center gap-6 ml-auto">
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/categories" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors">Categories</Link>
          <Link href="/community" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors">Community</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/profile" className="w-9 h-9 rounded-full bg-surface-high border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-white transition-colors overflow-hidden">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background z-50 lg:hidden flex flex-col p-6 animate-in slide-in-from-top duration-300">
           <nav className="flex flex-col gap-6 pt-8">
              <Link onClick={() => setIsMenuOpen(false)} href="/" className="text-xl font-bold text-white border-b border-white/5 pb-4">Home</Link>
              <Link onClick={() => setIsMenuOpen(false)} href="/categories" className="text-xl font-bold text-white border-b border-white/5 pb-4">Categories</Link>
              <Link onClick={() => setIsMenuOpen(false)} href="/community" className="text-xl font-bold text-white border-b border-white/5 pb-4">Community</Link>
              <Link onClick={() => setIsMenuOpen(false)} href="/studio" className="text-xl font-bold text-primary">Go Pro</Link>
           </nav>
        </div>
      )}
    </header>
  );
}

export default function Header(props: HeaderProps) {
  return (
    <Suspense fallback={<div className="h-16 w-full bg-background border-b border-white/5" />}>
      <HeaderContent {...props} />
    </Suspense>
  );
}
