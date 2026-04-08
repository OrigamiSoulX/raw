'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Button from '@/components/Button';
import Image from 'next/image';
import { useState } from 'react';

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
    <div className="bg-surface-container-lowest min-h-screen text-on-surface">
      <Header />
      <div className="flex pt-20">
        <Sidebar />
        <main className="lg:ml-64 flex-1 pt-8 px-6 md:px-12 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            <div className="col-span-1 md:col-span-2 bg-surface-container rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-5xl font-black tracking-tighter mb-2 italic text-white uppercase">CREATOR STUDIO</h1>
                <p className="text-on-surface-variant text-sm tracking-wide uppercase">Your Digital Footprint & Ethical Stand</p>
              </div>
              <div className="flex gap-12 mt-8 relative z-10">
                <div>
                  <p className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase mb-1">Reach</p>
                  <p className="text-3xl font-extrabold text-white">2.4M</p>
                </div>
                <div>
                  <p className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase mb-1">Revenue</p>
                  <p className="text-3xl font-extrabold text-white">$14.2K</p>
                </div>
                <div>
                  <p className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase mb-1">Trust Score</p>
                  <p className="text-3xl font-extrabold text-white">98%</p>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
            </div>

            <div className="md:col-span-1 lg:col-span-2 bg-surface-container rounded-xl overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <Image
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAndb_sgUPNlq0bkFfruehRBdoPHjg9MZsoXSSA_GzjKtdmevtV5IxlJm_5hCi99QbxPIPR5BWESGE4Fr1R9hnp3cSWDh7JpRExnlvPF1qdVNj0uuBtzpw8qsEN--im0vfyMbRbQORbtv5qtTIGFyLg3IqZYpjzz-SxLcGE5al6qVwDYcjBBRmQG8LWxfzH1vP-qCtiPoroOIkwT7j8ol_2hhauoDMGlK2jZ1I9vcHqNs_lIQEV0iQUobYDEZCFUOPXRBxfQLaXvdY"
                alt="Creator Spotlight"
              />
              <div className="absolute bottom-0 p-8 z-20 w-full">
                <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 inline-block">Creator Spotlight</span>
                <h3 className="text-2xl font-bold mb-1 text-white">Sienna Volt</h3>
                <p className="text-zinc-400 text-sm italic">&quot;Ethics is the new aesthetic in the RAW era.&quot;</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
            <div className="xl:col-span-2 space-y-8">
              <section>
                <div className="flex items-center justify-between mb-6 text-white">
                  <h2 className="text-xl font-extrabold tracking-widest uppercase flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-primary"></span> Asset Upload
                  </h2>
                  <span className="text-[10px] text-zinc-500 uppercase font-black">Supports RAW-LOG & 8K RED</span>
                </div>

                <div
                  onClick={!isUploading ? handleUpload : undefined}
                  className={`border-2 border-dashed border-outline-variant/30 rounded-3xl p-12 flex flex-col items-center justify-center bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer group relative overflow-hidden ${isUploading && 'cursor-default border-primary/20'}`}
                >
                  {isUploading ? (
                    <div className="w-full text-center relative z-10">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-primary text-4xl animate-bounce">cloud_upload</span>
                      </div>
                      <p className="text-lg font-bold text-white uppercase tracking-widest mb-4">Transmission in progress...</p>
                      <div className="max-w-xs mx-auto h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary shadow-[0_0_10px_#ff7cf5] transition-all duration-300" style={{ width: `${progress}%` }}></div>
                      </div>
                      <p className="text-xs text-primary font-black mt-4 tracking-tighter">{Math.round(progress)}% COMPLETE</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-surface-container-highest flex items-center justify-center mx-auto mb-6 group-hover:shadow-[0_0_20px_rgba(255,124,245,0.4)] transition-all">
                        <span className="material-symbols-outlined text-4xl text-primary">cloud_upload</span>
                      </div>
                      <p className="text-lg font-bold text-white uppercase tracking-widest">Infiltrate Assets</p>
                      <p className="text-on-surface-variant text-sm mt-2">DRAG & DROP OR BROWSE (MAX 50GB)</p>
                      <Button variant="outline" className="mt-8">Select Files</Button>
                    </div>
                  )}
                </div>
              </section>

              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-extrabold tracking-widest uppercase flex items-center gap-3 text-white">
                    <span className="w-8 h-[2px] bg-primary"></span> Ethical Checklist
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Consent Architecture', desc: 'All participants have signed blockchain-verified consent forms.', checked: true },
                    { title: 'Equitable Revenue', desc: 'Smart contracts for automatic 50/50 profit splits are active.', checked: true },
                    { title: 'Post-Production Truth', desc: "Final export contains 'Unedited RAW' metadata stamp.", checked: false },
                    { title: 'Identity Privacy', desc: 'ZKP-encryption applied to all non-public identity data.', checked: false },
                  ].map((item, idx) => (
                    <div key={idx} className={`bg-surface-container p-6 rounded-2xl flex items-start gap-4 border-l-4 transition-colors ${item.checked ? 'border-primary' : 'border-zinc-800 opacity-60'}`}>
                      <span className={`material-symbols-outlined ${item.checked ? 'text-primary' : 'text-zinc-700'}`} style={{ fontVariationSettings: item.checked ? "'FILL' 1" : "'FILL' 0" }}>
                        {item.checked ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                      <div>
                        <p className={`font-bold text-sm uppercase tracking-wider ${item.checked ? 'text-white' : 'text-zinc-500'}`}>{item.title}</p>
                        <p className="text-on-surface-variant text-xs mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="bg-surface-container p-8 rounded-3xl border border-white/5">
                <h3 className="text-sm font-black tracking-[0.3em] uppercase mb-8 flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Vetting Status
                </h3>
                <div className="space-y-8">
                  {[
                    { label: 'Identity Verified', desc: 'Biometric match secured', status: 'SECURE' },
                    { label: 'Ethics Mesh', desc: 'AI compliance scan: 100%', status: 'ACTIVE' },
                    { label: 'Annual Audit', desc: 'Next: Sept 15, 2026', status: 'PENDING', gray: true },
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-8 border-l border-outline-variant">
                      <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full ${item.gray ? 'bg-zinc-700' : 'bg-primary shadow-[0_0_10px_#ff7cf5]'}`}></div>
                      <p className={`text-xs font-black tracking-widest uppercase mb-1 ${item.gray ? 'text-zinc-500' : 'text-white'}`}>{item.label}</p>
                      <p className="text-[10px] text-zinc-600 uppercase font-bold">{item.desc}</p>
                      <div className={`mt-2 text-[10px] font-black tracking-tighter ${item.gray ? 'text-zinc-700' : 'text-primary'}`}>{item.status}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-primary/10">
                <p className="text-[10px] text-primary font-black tracking-[0.3em] uppercase mb-4 text-center">Network Trust Coefficient</p>
                <div className="flex items-end justify-center gap-2 mb-4">
                  <span className="text-6xl font-black text-white">4.9</span>
                  <span className="text-primary text-xl font-bold pb-2">/ 5.0</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-primary w-[98%] h-full shadow-[0_0_10px_#ff7cf5]"></div>
                </div>
                <p className="text-[8px] text-zinc-600 mt-6 text-center leading-relaxed tracking-widest uppercase font-black">Top 2% of Ethical Creators in the RAW Ecosystem</p>
              </div>
            </aside>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
