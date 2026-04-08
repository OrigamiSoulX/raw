import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image';
import Button from '@/components/Button';

export default function Profile() {
  return (
    <div className="bg-background min-h-screen text-on-surface flex flex-col">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="lg:ml-64 flex-1 pt-8 px-6 md:px-12 pb-32">

          <header className="relative mb-12 rounded-3xl overflow-hidden border border-white/5">
             <div className="h-48 relative overflow-hidden">
                <Image
                   fill
                   className="object-cover opacity-40 grayscale"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9n0csR7jJIdO_xKhcYw8NKLick36trk2XoNNIawun9vunDK_rUAKd0FBCXUpTV45-o6sxUaM1gse0XGirAvXz-ERMg1TxlfirqF92JwQBUpD85szimeL5NSW598SPv8z02yh9mu70JkLDauOr4_V8ZeHr7h4uL3-mhqLRSMm6zcxc2Vc2Fm27MtaPq1-DAWk8PKgCKeoAKHchjmMBcpp6MkJqpklwd7npZXd9jBm57yRH_CKPwykRwkevKSuA8HhkAeNOXG_ENSE"
                   alt="Cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
             </div>

             <div className="px-8 pb-8 -mt-16 relative z-10 flex flex-col md:flex-row items-end gap-6">
                <div className="w-32 h-32 rounded-3xl premium-gradient p-1 shadow-2xl">
                   <div className="w-full h-full rounded-2xl bg-surface relative overflow-hidden">
                      <Image
                         fill
                         className="object-cover"
                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmVtsDWiH_bjOWsFAKU8EjoNUuevhonkrVYKolsYNXk1zTS5bSTNTuhAgN9SiLl1gqJbyztvl2oC_MCzSQmwF3ofX9LrEaZ2cK9dsdncYrTdatVseE3XCmqx3CsMLLR_JeiP9mtOzuzy2-2ZDEhrIi5fas3ob8tol3NTSlcl6G712eHxFX-f17oTNt86ax2dbj972W48n8OtSt2A4xKjRmwvNbFl_6JbQ_MW4Dq4W_4C7le3rSBHqYQIk-3J87FlXh9VidetwkyyA"
                         alt="Avatar"
                      />
                   </div>
                </div>
                <div className="flex-1 space-y-2 text-center md:text-left">
                   <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-1">
                      <span className="bg-primary/20 text-primary text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-lg border border-primary/20">Underground Elite</span>
                      <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                         <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Verified Identity
                      </span>
                   </div>
                   <h1 className="text-4xl font-bold text-white uppercase tracking-tight">My Sanctuary</h1>
                   <p className="text-on-surface-variant text-sm font-medium">Transmissions encrypted. Neural patterns synchronized.</p>
                </div>
                <div className="flex gap-3">
                   <Button variant="secondary" size="md">Edit Vault</Button>
                   <Button variant="primary" size="md">Go Pro</Button>
                </div>
             </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

             <section className="lg:col-span-8 space-y-8">
                <div className="glass p-8 rounded-3xl space-y-8">
                   <div className="flex items-center justify-between">
                      <h2 className="text-lg font-bold text-white uppercase tracking-tight">Education Track</h2>
                      <span className="text-primary font-black text-sm">84% COMPLETE</span>
                   </div>

                   <div className="space-y-6">
                      <div className="bg-surface-high p-6 rounded-2xl border border-white/5">
                         <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-white text-base">Advanced Sensory Aesthetics</h3>
                            <span className="material-symbols-outlined text-on-surface-variant">school</span>
                         </div>
                         <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-6">
                            <div className="h-full premium-gradient w-[84%] rounded-full shadow-[0_0_12px_rgba(255,124,245,0.4)]" />
                         </div>
                         <div className="flex items-center justify-between">
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Current: Limbic Resonance & Color Theory</p>
                            <Button size="sm" variant="ghost" className="p-0 underline">Resume</Button>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="glass p-8 rounded-3xl">
                   <h2 className="text-lg font-bold text-white uppercase tracking-tight mb-8">Viewing Archive</h2>
                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="space-y-3 group cursor-pointer">
                           <div className="aspect-[3/4] rounded-2xl bg-surface-high relative overflow-hidden">
                              <Image
                                 fill
                                 className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                 src={`https://lh3.googleusercontent.com/aida-public/AB6AXu${i === 1 ? 'AUKQndt' : i === 2 ? 'BiEASvf' : i === 3 ? 'DkfR5D8' : 'C8BepyY'}`}
                                 alt="Archive"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                           </div>
                           <div className="px-1">
                              <p className="text-xs font-bold text-white truncate group-hover:text-primary transition-colors uppercase tracking-tight">Transmission_0{i}</p>
                              <p className="text-[9px] font-bold text-on-surface-variant uppercase mt-1">2 days ago</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </section>

             <aside className="lg:col-span-4 space-y-8">
                <div className="glass p-8 rounded-3xl space-y-8">
                   <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                      <h2 className="text-sm font-black text-white uppercase tracking-[0.2em]">Security Shell</h2>
                   </div>

                   <div className="space-y-6">
                      {[
                        { label: 'Discrete Mode', desc: 'Hide vault from global search', active: true },
                        { label: 'Neural Lock', desc: 'FaceID pattern required', active: false },
                        { label: 'Ghost Transmissions', desc: 'Auto-wipe history after 24h', active: false }
                      ].map((pref, idx) => (
                        <div key={idx} className="flex items-center justify-between group cursor-pointer">
                           <div className="min-w-0">
                              <p className="text-xs font-bold text-white uppercase tracking-tight truncate">{pref.label}</p>
                              <p className="text-[10px] text-on-surface-variant font-medium truncate">{pref.desc}</p>
                           </div>
                           <div className={`w-10 h-5 rounded-full flex items-center px-1 transition-colors ${pref.active ? 'bg-primary' : 'bg-zinc-800'}`}>
                              <div className={`w-3 h-3 rounded-full bg-white transition-transform ${pref.active ? 'translate-x-5' : 'translate-x-0'}`} />
                           </div>
                        </div>
                      ))}
                      <div className="pt-4 mt-2 border-t border-white/5">
                        <Button size="sm" variant="outline" className="w-full text-[10px] border-red-500/20 text-red-500 hover:bg-red-500/5">Wipe Local Nodes</Button>
                      </div>
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
