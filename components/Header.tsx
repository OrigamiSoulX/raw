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
    <header className="fixed top-0 w-full z-50 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center px-4 md:px-8">
      {/* Left: Search Bar (Desktop) or Menu Trigger (Mobile) */}
      <div className="flex-1 flex items-center gap-4">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-on-background">
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>

        <div className="max-w-xs w-full hidden md:block">
          <div className="relative flex items-center w-full">
            <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-base">search</span>
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 rounded-xl py-1.5 pl-9 pr-3 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all text-sm text-on-background placeholder-on-surface-variant"
            />
          </div>
        </div>
      </div>

      {/* Center: Centered Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
        <Link href="/" className="font-bold text-xl text-primary tracking-tight flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
          <span className="hidden sm:inline">RAW</span>
        </Link>
      </div>

      {/* Right: Navigation */}
      <div className="flex-1 flex items-center justify-end gap-2 sm:gap-4">
        <nav className="hidden lg:flex items-center gap-6 mr-4">
          <Link href="/categories" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Browse</Link>
          <Link href="/community" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Community</Link>
        </nav>

        <Link href="/profile" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors overflow-hidden border border-gray-100">
          <span className="material-symbols-outlined text-xl">account_circle</span>
        </Link>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-50 lg:hidden flex flex-col p-6 animate-in fade-in slide-in-from-top-4 duration-200">
           <nav className="flex flex-col gap-5 pt-4">
              <Link onClick={() => setIsMenuOpen(false)} href="/" className="text-lg font-bold text-on-background py-2">Home</Link>
              <Link onClick={() => setIsMenuOpen(false)} href="/categories" className="text-lg font-bold text-on-background py-2">Browse</Link>
              <Link onClick={() => setIsMenuOpen(false)} href="/community" className="text-lg font-bold text-on-background py-2">Community</Link>
              <Link onClick={() => setIsMenuOpen(false)} href="/studio" className="text-lg font-bold text-primary py-2">Creator Studio</Link>
           </nav>
        </div>
      )}
    </header>
  );
}

export default function Header(props: HeaderProps) {
  return (
    <Suspense fallback={<div className="h-16 w-full bg-white border-b border-gray-100" />}>
      <HeaderContent {...props} />
    </Suspense>
  );
}
