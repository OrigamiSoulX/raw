'use client';

import { useState, useEffect } from 'react';
import Button from './Button';
import Image from 'next/image';

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

  if (isVerified === null) return <div className="bg-white min-h-screen" />;

  if (!isVerified) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            fill
            className="object-cover transition-all duration-1000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo2D93R0wND7HdFhKXCkODLRomq2Elkl0xX2T8oAR_DSm2H5dCF5JGsaHt_L02hYwc-Bn10GaLYZ7eKPoqtSpnvSZlH3hFszARohtuU6Gpa5-0kACYEJ2IEnbWszZFcfUYdSwpybPJnSUKz3qg3-uKuj1kn5vnBpOFWTHtA0-2R6q-SX-zhuQuUqH9K-YCACQoQSCBcTqYUCuj09PpZxd8lmicBFvAlqKmoBzj2BC8P90vDs9m1SUuFXjLgQyX_8WHkPcIW5VbHIQ"
            alt="Welcome Background"
          />
        </div>

        <div className="relative z-10 max-w-md w-full bg-white/80 backdrop-blur-xl border border-gray-100 p-12 rounded-[3rem] soft-shadow">
          <h1 className="text-5xl font-extrabold text-primary tracking-tighter mb-4 soft-glow">RAW</h1>
          <h2 className="text-xl font-bold text-on-background mb-8 tracking-tight">Age Verification Required</h2>
          <p className="text-on-surface-variant mb-10 leading-relaxed font-medium">
            The RAW community is restricted to individuals aged 18 and older.
            By entering, you confirm your age and agree to our ethical and privacy standards.
          </p>

          <div className="flex flex-col gap-6">
            <Button onClick={handleVerify} size="lg" variant="primary" className="w-full text-lg shadow-xl shadow-primary/20">
              I am 18 or older
            </Button>
            <button className="text-on-surface-variant hover:text-primary text-xs font-bold uppercase tracking-widest transition-all">
              Exit Site
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
