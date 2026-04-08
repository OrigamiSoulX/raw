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
    <div className="bg-background min-h-screen text-on-background flex flex-col">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="lg:ml-60 flex-1 pt-8 px-6 md:px-12 pb-32">

          <header className="mb-10">
             <span className="text-primary text-[10px] font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-primary/10">Creator Control</span>
             <h1 className="text-3xl font-extrabold text-on-background uppercase tracking-tight mt-4">Creator Studio</h1>
             <p className="text-on-surface-variant text-sm font-bold tracking-widest mt-1">Manage your ethical impact & creative reach</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {[
               { label: 'Total Reach', value: '2.4M', trend: '+12%', icon: 'visibility' },
               { label: 'Ethical Revenue', value: '$14.2K', trend: 'Secure', icon: 'payments' },
               { label: 'Trust Score', value: '4.9/5.0', trend: 'AAA Tier', icon: 'verified' }
            ].map((stat, idx) => (
               <div key={idx} className="bg-white p-8 rounded-[2.5rem] soft-shadow border border-gray-50 flex flex-col justify-between h-48 group hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between">
                     <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-primary soft-shadow">
                        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                     </div>
                     <span className="text-[10px] font-bold uppercase text-primary tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/10">{stat.trend}</span>
                  </div>
                  <div>
                     <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</p>
                     <p className="text-3xl font-extrabold text-on-background mt-1 tracking-tight">{stat.value}</p>
                  </div>
               </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">

            <section className="xl:col-span-8 space-y-10">
                <div className="bg-blue-50 border-4 border-white p-12 rounded-[3rem] soft-shadow relative overflow-hidden group">
                   <div className="relative z-10 text-center max-w-sm mx-auto space-y-6">
                      <div className="w-20 h-20 rounded-[2rem] bg-white flex items-center justify-center mx-auto soft-shadow transition-transform group-hover:scale-110">
                         <span className="material-symbols-outlined text-primary text-4xl">{isUploading ? 'sync' : 'cloud_upload'}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-on-background uppercase mb-2">
                           {isUploading ? 'Transfer in progress' : 'Upload Content'}
                        </h3>
                        <p className="text-on-surface-variant text-sm font-medium leading-relaxed">
                           {isUploading ? 'Encrypting assets and distributing to the local network...' : 'Add 4K RAW footage or high-fidelity audio (Max 50GB)'}
                        </p>
                      </div>

                      {isUploading ? (
                         <div className="space-y-4">
                            <div className="w-full h-2.5 bg-white rounded-full overflow-hidden soft-shadow">
                               <div className="h-full bg-primary soft-glow transition-all duration-300 rounded-full" style={{ width: `${progress}%` }} />
                            </div>
                            <span className="text-[10px] font-bold text-primary tracking-widest uppercase">{Math.round(progress)}% Verified</span>
                         </div>
                      ) : (
                         <Button onClick={handleUpload} size="lg" variant="primary" className="w-full rounded-full shadow-xl shadow-primary/20">Select Assets</Button>
                      )}
                   </div>
                </div>

                <div className="bg-white p-10 rounded-[3rem] soft-shadow border border-gray-50">
                   <h3 className="text-xl font-bold text-on-background mb-8 tracking-tight">Vetting Checklist</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { title: 'Consent Forms', desc: 'Blockchain verified signatures', checked: true },
                        { title: 'Revenue Share', desc: 'Auto 50/50 smart contracts', checked: true },
                        { title: 'Metadata Verification', desc: 'Unedited RAW integrity tag', checked: false },
                        { title: 'Privacy Filter', desc: 'Zero-knowledge encryption', checked: false },
                      ].map((item, idx) => (
                        <div key={idx} className={`p-6 rounded-3xl border transition-all ${item.checked ? 'border-primary/20 bg-blue-50/50' : 'border-gray-100 bg-gray-50/30 opacity-60'}`}>
                           <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-bold text-on-background uppercase tracking-tight">{item.title}</span>
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center soft-shadow ${item.checked ? 'bg-primary text-white' : 'bg-white text-gray-200'}`}>
                                 <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: item.checked ? "'FILL' 1" : "'FILL' 0" }}>
                                    {item.checked ? 'check' : 'circle'}
                                 </span>
                              </div>
                           </div>
                           <p className="text-[11px] text-on-surface-variant font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
            </section>

            <aside className="xl:col-span-4 space-y-10">
               <div className="bg-white p-8 md:p-10 rounded-[3rem] soft-shadow border border-gray-50">
                  <h3 className="text-[10px] font-bold uppercase text-on-surface-variant tracking-widest mb-10">Vetting Status</h3>
                  <div className="space-y-10">
                     {[
                        { label: 'Identity Check', status: 'AUTHENTICATED', active: true },
                        { label: 'Ethical Mesh', status: 'ACTIVE', active: true },
                        { label: 'Annual Audit', status: 'PENDING Q4', active: false }
                     ].map((step, idx) => (
                        <div key={idx} className="flex gap-6 relative">
                           <div className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 relative z-10 border-2 border-white soft-shadow transition-colors ${step.active ? 'bg-primary' : 'bg-gray-100'}`} />
                           {idx !== 2 && <div className="absolute left-[7.5px] top-5 w-[1px] h-12 bg-gray-100" />}
                           <div>
                              <p className={`text-xs font-bold uppercase tracking-widest ${step.active ? 'text-on-background' : 'text-gray-400'}`}>{step.label}</p>
                              <p className={`text-[10px] font-bold mt-1 tracking-widest ${step.active ? 'text-primary' : 'text-gray-300'}`}>{step.status}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="bg-primary p-10 rounded-[3rem] text-white soft-shadow relative overflow-hidden group">
                  <div className="relative z-10">
                     <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-6">Expert Network</p>
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-white soft-shadow p-1 border border-white/20">
                           <div className="w-full h-full rounded-xl bg-primary/10 overflow-hidden relative">
                              <Image fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgw4bDccq47rzVIeht2uyowM31dzGKJmT8Ia18iLPtBhCZ2t96w2TKf4hqbUw3fu5q57xaCLqt_FjQHxncmw4seXIIHJDJH6Ob2ZJr7MrIWF1CkqVXFHQTGuoET9ZRImb7xa58Lib_JtF8YMon_y4joungKXYKHfu47pD1_t5aF9RJP9pnEMfl6Diri8pnksYr7uJWRtNg5i0yihtXkNqNO1HvK1cifP82sYXpGckL8JVnZmjdE90ycbCHzvGwuFTdfR5KNbs4kvc" alt="Expert" />
                           </div>
                        </div>
                        <div>
                           <p className="text-sm font-bold">Dr. Aris Thorne</p>
                           <p className="text-[10px] font-bold opacity-80 uppercase tracking-tight leading-tight">Official Guide <br/> Consultation</p>
                        </div>
                     </div>
                     <Button size="sm" variant="outline" className="w-full !bg-white !text-primary !border-none !rounded-full !py-4 font-bold uppercase tracking-widest shadow-xl">Schedule Audit</Button>
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
