import Link from 'next/link';

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full h-16 glass z-50 flex justify-around items-center px-4">
      <Link href="/" className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-white transition-colors">
        <span className="material-symbols-outlined text-[22px]">home</span>
        <span className="text-[9px] font-bold uppercase tracking-widest">Home</span>
      </Link>
      <Link href="/categories" className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-white transition-colors">
        <span className="material-symbols-outlined text-[22px]">grid_view</span>
        <span className="text-[9px] font-bold uppercase tracking-widest">Explore</span>
      </Link>
      <Link href="/community" className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-white transition-colors">
        <span className="material-symbols-outlined text-[22px]">groups</span>
        <span className="text-[9px] font-bold uppercase tracking-widest">Social</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center gap-1 text-primary">
        <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
        <span className="text-[9px] font-bold uppercase tracking-widest">Vault</span>
      </Link>
    </nav>
  );
}
