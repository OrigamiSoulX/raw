import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image';
import Button from '@/components/Button';

export default function Profile() {
  return (
    <div className="bg-background min-h-screen text-on-background flex flex-col">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="lg:ml-60 flex-1 pt-8 px-6 md:px-12 pb-32">

          <header className="relative mb-12 rounded-[3rem] overflow-hidden border-4 border-white soft-shadow bg-blue-50">
             <div className="h-56 relative overflow-hidden">
                <Image
                   fill
                   priority
                   className="object-cover opacity-30 transition-all duration-1000"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9n0csR7jJIdO_xKhcYw8NKLick36trk2XoNNIawun9vunDK_rUAKd0FBCXUpTV45-o6sxUaM1gse0XGirAvXz-ERMg1TxlfirqF92JwQBUpD85szimeL5NSW598SPv8z02yh9mu70JkLDauOr4_V8ZeHr7h4uL3-mhqLRSMm6zcxc2Vc2Fm27MtaPq1-DAWk8PKgCKeoAKHchjmMBcpp6MkJqpklwd7npZXd9jBm57yRH_CKPwykRwkevKSuA8HhkAeNOXG_ENSE"
                   alt="Profile Cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
             </div>

             <div className="px-10 pb-10 -mt-20 relative z-10 flex flex-col md:flex-row items-end gap-8">
                <div className="w-40 h-40 rounded-[2.5rem] bg-white border-4 border-white soft-shadow p-1 group">
                   <div className="w-full h-full rounded-[2rem] bg-blue-50 relative overflow-hidden transition-transform group-hover:scale-105">
                      <Image
                         fill
                         className="object-cover"
                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmVtsDWiH_bjOWsFAKU8EjoNUuevhonkrVYKolsYNXk1zTS5bSTNTuhAgN9SiLl1gqJbyztvl2oC_MCzSQmwF3ofX9LrEaZ2cK9dsdncYrTdatVseE3XCmqx3CsMLLR_JeiP9mtOzuzy2-2ZDEhrIi5fas3ob8tol3NTSlcl6G712eHxFX-f17oTNt86ax2dbj972W48n8OtSt2A4xKjRmwvNbFl_6JbQ_MW4Dq4W_4C7le3rSBHqYQIk-3J87FlXh9VidetwkyyA"
                         alt="User Avatar"
                      />
                   </div>
                </div>
                <div className="flex-1 space-y-3 text-center md:text-left mb-2">
                   <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                      <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-primary/20">Underground Elite</span>
                      <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 bg-white/60 backdrop-blur-md px-3 py-1 rounded-full border border-gray-100">
                         <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Verified Guide
                      </span>
                   </div>
                   <h1 className="text-4xl md:text-5xl font-extrabold text-on-background tracking-tight leading-none uppercase">My Sanctuary</h1>
                   <p className="text-on-surface-variant text-lg font-medium max-w-lg leading-relaxed italic">Welcome back to your private vault. Transmissions encrypted. Neural patterns synchronized.</p>
                </div>
                <div className="flex gap-4 mb-2">
                   <Button variant="outline" size="md" className="rounded-full px-8 font-bold">Edit Vault</Button>
                   <Button variant="primary" size="md" className="rounded-full px-8 font-bold soft-shadow">Go Pro</Button>
                </div>
             </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

             <section className="lg:col-span-8 space-y-10">
                <div className="bg-white p-8 md:p-10 rounded-[3rem] space-y-8 soft-shadow border border-gray-50">
                   <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-on-background tracking-tight">Education Track</h2>
                      <span className="text-primary font-bold text-base tracking-widest uppercase">84% Mastery</span>
                   </div>

                   <div className="space-y-8">
                      <div className="bg-blue-50/50 p-8 rounded-[2rem] border border-primary/10 relative group transition-all duration-300 hover:bg-white hover:border-primary/30">
                         <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-on-background text-xl">Advanced Sensory Aesthetics</h3>
                            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-primary soft-shadow">
                               <span className="material-symbols-outlined text-xl">school</span>
                            </div>
                         </div>
                         <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden mb-8 soft-shadow">
                            <div className="h-full bg-primary w-[84%] rounded-full shadow-[0_0_12px_rgba(45,156,219,0.3)]" />
                         </div>
                         <div className="flex items-center justify-between">
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Current: Limbic Resonance & Color Theory</p>
                            <Button size="sm" variant="ghost" className="text-xs font-bold underline hover:no-underline px-0 h-auto">Resume Session</Button>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-white p-8 md:p-10 rounded-[3rem] soft-shadow border border-gray-50">
                   <div className="flex items-center justify-between mb-10">
                      <h2 className="text-2xl font-bold text-on-background tracking-tight">Viewing Archive</h2>
                      <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest underline px-0 h-auto">See All</Button>
                   </div>
                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="space-y-4 group cursor-pointer">
                           <div className="aspect-[3/4] rounded-[1.5rem] bg-gray-50 relative overflow-hidden soft-shadow border-4 border-white transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary/10">
                              <Image
                                 fill
                                 className="object-cover transition-all duration-700 group-hover:scale-105"
                                 src={`https://lh3.googleusercontent.com/aida-public/AB6AXu${i === 1 ? 'AUKQndt' : i === 2 ? 'BiEASvf' : i === 3 ? 'DkfR5D8' : 'C8BepyY'}`}
                                 alt="Archive Item"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                           </div>
                           <div className="px-1">
                              <p className="text-sm font-bold text-on-background truncate group-hover:text-primary transition-colors uppercase tracking-tight leading-tight">Transmission_0{i}</p>
                              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">2 days ago</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </section>

             <aside className="lg:col-span-4 space-y-10">
                <div className="bg-white p-8 md:p-10 rounded-[3rem] space-y-10 soft-shadow border border-gray-50">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary soft-shadow">
                        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                      </div>
                      <h2 className="text-sm font-bold text-on-background uppercase tracking-[0.2em]">Security Shell</h2>
                   </div>

                   <div className="space-y-8">
                      {[
                        { label: 'Discrete Mode', desc: 'Hide vault from global search', active: true },
                        { label: 'Biometric Lock', desc: 'Neural pattern verification required', active: false },
                        { label: 'Ghost Transmissions', desc: 'Auto-wipe history after 24h', active: false }
                      ].map((pref, idx) => (
                        <div key={idx} className="flex items-center justify-between group cursor-pointer transition-all">
                           <div className="min-w-0 flex-1">
                              <p className="text-xs font-bold text-on-background uppercase tracking-tight truncate group-hover:text-primary transition-colors">{pref.label}</p>
                              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest truncate mt-0.5">{pref.desc}</p>
                           </div>
                           <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ml-4 ${pref.active ? 'bg-primary shadow-lg shadow-primary/30' : 'bg-gray-100'}`}>
                              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${pref.active ? 'translate-x-6' : 'translate-x-0'}`} />
                           </div>
                        </div>
                      ))}
                      <div className="pt-8 mt-2 border-t border-gray-50">
                        <Button size="sm" variant="outline" className="w-full text-[10px] font-bold tracking-widest uppercase border-red-50 text-red-400 hover:bg-red-50 hover:border-red-100 rounded-full py-4 transition-all">
                           Wipe Local Archive
                        </Button>
                      </div>
                   </div>
                </div>

                <div className="bg-primary p-10 rounded-[3rem] text-white space-y-6 soft-shadow relative overflow-hidden group">
                   <div className="relative z-10">
                      <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-2">RAW Pro</h3>
                      <p className="text-white/90 text-sm font-medium leading-relaxed mb-8">Access the complete curated library, exclusive masterclasses, and private guides.</p>
                      <Button className="w-full !bg-white !text-primary border-none shadow-xl rounded-full py-6 font-bold uppercase tracking-widest">
                         Upgrade Now
                      </Button>
                   </div>
                   <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 blur-2xl rounded-full" />
                </div>
             </aside>

          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
