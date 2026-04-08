import Link from 'next/link';

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full h-16 bg-white border-t border-gray-100 z-50 flex justify-around items-center px-4">
      <Link href="/" className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors">
        <span className="material-symbols-outlined text-[20px]">home</span>
        <span className="text-[9px] font-bold uppercase tracking-tight">Home</span>
      </Link>
      <Link href="/categories" className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors">
        <span className="material-symbols-outlined text-[20px]">explore</span>
        <span className="text-[9px] font-bold uppercase tracking-tight">Explore</span>
      </Link>
      <Link href="/community" className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors">
        <span className="material-symbols-outlined text-[20px]">groups</span>
        <span className="text-[9px] font-bold uppercase tracking-tight">Social</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center gap-1 text-primary">
        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
        <span className="text-[9px] font-bold uppercase tracking-tight">Vault</span>
      </Link>
    </nav>
  );
}
