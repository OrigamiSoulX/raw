'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/Button';

export default function CreatorStudio() {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    setIsUploading(true);
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 15;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setIsUploading(false), 1000);
      }
      setProgress(current);
    }, 300);
  };

  return (
    <div className="bg-background min-h-screen text-on-surface flex flex-col">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="lg:ml-64 flex-1 pt-8 px-6 md:px-12 pb-32">

          <header className="mb-12">
             <h1 className="text-3xl font-bold text-white uppercase tracking-tight">Creator Dashboard</h1>
             <p className="text-on-surface-variant text-sm mt-1 uppercase font-bold tracking-widest">Manage your digital footprint & ethical impact</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
               { label: 'Total Reach', value: '2.4M', trend: '+12%', icon: 'visibility' },
               { label: 'Ethical Revenue', value: '$14.2K', trend: 'Secure', icon: 'payments' },
               { label: 'Trust Coefficient', value: '4.9/5.0', trend: 'AAA Tier', icon: 'verified' }
            ].map((stat, idx) => (
               <div key={idx} className="glass p-8 rounded-3xl space-y-4">
                  <div className="flex items-center justify-between">
                     <span className="material-symbols-outlined text-primary">{stat.icon}</span>
                     <span className="text-[10px] font-black uppercase text-primary tracking-widest bg-primary/10 px-2 py-1 rounded-lg">{stat.trend}</span>
                  </div>
                  <div>
                     <p className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">{stat.label}</p>
                     <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
               </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

            <section className="xl:col-span-8 space-y-8">
                <div className="glass p-10 rounded-3xl relative overflow-hidden border border-primary/10">
                   <div className="relative z-10 text-center max-w-sm mx-auto">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                         <span className="material-symbols-outlined text-primary text-4xl">{isUploading ? 'sync' : 'cloud_upload'}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white uppercase mb-2">
                         {isUploading ? 'Transmission in progress' : 'Infiltrate Assets'}
                      </h3>
                      <p className="text-on-surface-variant text-sm mb-8 font-medium">
                         {isUploading ? 'Encrypting and distributing nodes across the network...' : 'Drag and drop 4K RAW or high-fidelity audio (Max 50GB)'}
                      </p>

                      {isUploading ? (
                         <div className="space-y-4">
                            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                               <div className="h-full bg-primary premium-gradient transition-all duration-300" style={{ width: `${progress}%` }} />
                            </div>
                            <span className="text-[10px] font-black text-primary tracking-widest">{Math.round(progress)}% ENCRYPTED</span>
                         </div>
                      ) : (
                         <Button onClick={handleUpload} size="lg" variant="primary" className="w-full">Select Source Files</Button>
                      )}
                   </div>
                </div>

                <div className="glass p-8 rounded-3xl">
                   <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-tight">Vetting Checklist</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Consent Node', desc: 'Blockchain verified signatures', checked: true },
                        { title: 'Financial Split', desc: 'Auto 50/50 smart contract', checked: true },
                        { title: 'Metadata Stamp', desc: 'Unedited RAW integrity tag', checked: false },
                        { title: 'ZKP Anonymity', desc: 'Zero-knowledge encryption', checked: false },
                      ].map((item, idx) => (
                        <div key={idx} className={`p-5 rounded-2xl border transition-all ${item.checked ? 'border-primary/20 bg-primary/5' : 'border-white/5 opacity-50'}`}>
                           <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-white uppercase">{item.title}</span>
                              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: item.checked ? "'FILL' 1" : "'FILL' 0" }}>
                                 {item.checked ? 'check_circle' : 'circle'}
                              </span>
                           </div>
                           <p className="text-[10px] text-on-surface-variant font-medium">{item.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
            </section>

            <aside className="xl:col-span-4 space-y-8">
               <div className="glass p-8 rounded-3xl">
                  <h3 className="text-xs font-black uppercase text-on-surface-variant tracking-[0.2em] mb-8">Vetting Timeline</h3>
                  <div className="space-y-8">
                     {[
                        { label: 'Identity Node', status: 'AUTHENTICATED', active: true },
                        { label: 'Ethics Mesh', status: 'ACTIVE', active: true },
                        { label: 'Annual Audit', status: 'PENDING Q4', active: false }
                     ].map((step, idx) => (
                        <div key={idx} className="flex gap-6 relative">
                           <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 relative z-10 ${step.active ? 'bg-primary neon-glow' : 'bg-zinc-800'}`} />
                           {idx !== 2 && <div className="absolute left-[5.5px] top-4 w-[1px] h-12 bg-white/10" />}
                           <div>
                              <p className={`text-xs font-bold uppercase tracking-tight ${step.active ? 'text-white' : 'text-zinc-600'}`}>{step.label}</p>
                              <p className={`text-[10px] font-black ${step.active ? 'text-primary' : 'text-zinc-800'}`}>{step.status}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="p-8 rounded-3xl bg-surface-high border border-white/5 relative overflow-hidden group">
                  <div className="relative z-10">
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">Expert Community</p>
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full premium-gradient p-0.5">
                           <Image width={48} height={48} className="rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgw4bDccq47rzVIeht2uyowM31dzGKJmT8Ia18iLPtBhCZ2t96w2TKf4hqbUw3fu5q57xaCLqt_FjQHxncmw4seXIIHJDJH6Ob2ZJr7MrIWF1CkqVXFHQTGuoET9ZRImb7xa58Lib_JtF8YMon_y4joungKXYKHfu47pD1_t5aF9RJP9pnEMfl6Diri8pnksYr7uJWRtNg5i0yihtXkNqNO1HvK1cifP82sYXpGckL8JVnZmjdE90ycbCHzvGwuFTdfR5KNbs4kvc" alt="Dr Aris" />
                        </div>
                        <div>
                           <p className="text-sm font-bold text-white">Connect with Dr. Thorne</p>
                           <p className="text-[10px] text-on-surface-variant font-bold">Official Sexologist Consultation</p>
                        </div>
                     </div>
                     <Button size="sm" variant="secondary" className="w-full">Schedule Audit</Button>
                  </div>
               </div>
            </aside>

          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
