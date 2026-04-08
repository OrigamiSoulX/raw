import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Link from 'next/link';

export default function Error404() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-primary selection:text-black">
      <Header />
      <div className="flex pt-20">
        <Sidebar />
        <main className="flex-1 lg:ml-64 flex flex-col items-center justify-center p-8 text-center min-h-[calc(100vh-80px)]">
          <div className="relative mb-8">
            <h1 className="text-[12rem] font-black tracking-tighter leading-none opacity-10">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="material-symbols-outlined text-8xl text-primary animate-pulse">visibility_off</span>
            </div>
          </div>

          <h2 className="text-4xl font-black uppercase tracking-widest mb-4">Transmission Lost</h2>
          <p className="text-zinc-500 max-w-md mx-auto mb-10 text-lg italic">
            The signal you are seeking has been deconstructed or encrypted beyond reach.
          </p>

          <Link href="/">
            <button className="px-10 py-4 rounded-full bg-primary text-black font-black tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,124,245,0.4)]">
              Return to Source
            </button>
          </Link>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
