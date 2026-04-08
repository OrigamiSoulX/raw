'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  useEffect(() => {
    const verified = localStorage.getItem('age-verified');
    setIsVerified(verified === 'true');
  }, []);

  const handleVerify = () => {
    localStorage.setItem('age-verified', 'true');
    setIsVerified(true);
  };

  if (isVerified === null) return <div className="bg-black min-h-screen" />;

  if (!isVerified) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-md w-full bg-zinc-900/50 backdrop-blur-3xl border border-white/10 p-12 rounded-[3rem] shadow-2xl">
          <h1 className="text-5xl font-black text-pink-500 tracking-tighter mb-4 drop-shadow-[0_0_10px_rgba(255,0,255,0.6)]">RAW</h1>
          <h2 className="text-xl font-bold text-white mb-8 uppercase tracking-widest">Entry Restricted</h2>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            You must be at least 18 years of age to enter the RAW underground.
            By entering, you agree to our ethical charter and privacy protocols.
          </p>

          <div className="flex flex-col gap-4">
            <Button onClick={handleVerify} size="lg" variant="primary" className="w-full">
              I am 18 or older - Enter
            </Button>
            <button className="text-zinc-600 hover:text-zinc-400 text-xs font-bold uppercase tracking-widest transition-colors">
              Exit Site
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
