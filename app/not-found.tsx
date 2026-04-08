import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Error404() {
  return (
    <div className="bg-background min-h-screen text-on-background flex flex-col">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 lg:ml-60 flex flex-col items-center justify-center p-8 text-center min-h-[calc(100vh-128px)]">
          <div className="relative mb-12">
            <h1 className="text-[12rem] font-extrabold tracking-tighter leading-none opacity-5 text-on-background">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="material-symbols-outlined text-9xl text-primary/40 soft-glow">visibility_off</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-background mb-4">Content Not Found</h2>
          <p className="text-on-surface-variant max-w-md mx-auto mb-12 text-lg font-medium leading-relaxed">
            We couldn&apos;t find the signal you are seeking. It may have been relocated or is currently restricted.
          </p>

          <Link href="/">
            <Button size="lg" variant="primary">Return Home</Button>
          </Link>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
