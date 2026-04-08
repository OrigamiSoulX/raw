import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image';

export default function Profile() {
  return (
    <div className="bg-surface-container-lowest min-h-screen text-on-surface">
      <Header />
      <div className="flex pt-20">
        <Sidebar />
        <main className="pt-8 lg:pl-72 pb-32 px-4 md:px-8 max-w-7xl mx-auto flex-1">
          <header className="relative mb-12 flex flex-col md:flex-row items-end gap-8 p-8 bg-surface-container rounded-xl overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-30">
            <Image
              fill
              className="object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9n0csR7jJIdO_xKhcYw8NKLick36trk2XoNNIawun9vunDK_rUAKd0FBCXUpTV45-o6sxUaM1gse0XGirAvXz-ERMg1TxlfirqF92JwQBUpD85szimeL5NSW598SPv8z02yh9mu70JkLDauOr4_V8ZeHr7h4uL3-mhqLRSMm6zcxc2Vc2Fm27MtaPq1-DAWk8PKgCKeoAKHchjmMBcpp6MkJqpklwd7npZXd9jBm57yRH_CKPwykRwkevKSuA8HhkAeNOXG_ENSE"
                alt="Background"
              />
            </div>
            <div className="relative z-10 w-40 h-40 rounded-full border-4 border-primary p-1 bg-surface shadow-[0_0_30px_rgba(255,124,245,0.4)]">
            <Image
              fill
              className="object-cover rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmVtsDWiH_bjOWsFAKU8EjoNUuevhonkrVYKolsYNXk1zTS5bSTNTuhAgN9SiLl1gqJbyztvl2oC_MCzSQmwF3ofX9LrEaZ2cK9dsdncYrTdatVseE3XCmqx3CsMLLR_JeiP9mtOzuzy2-2ZDEhrIi5fas3ob8tol3NTSlcl6G712eHxFX-f17oTNt86ax2dbj972W48n8OtSt2A4xKjRmwvNbFl_6JbQ_MW4Dq4W_4C7le3rSBHqYQIk-3J87FlXh9VidetwkyyA"
                alt="User Profile"
              />
            </div>
            <div className="relative z-10 flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="bg-surface-container-high text-primary px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Identity Verified
                </span>
                <span className="bg-primary text-on-primary px-4 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(255,124,245,0.5)]">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span> Underground Elite
                </span>
              </div>
              <h1 className="text-6xl font-black text-white leading-none mb-2 italic uppercase">My Sanctuary</h1>
              <p className="text-on-surface-variant max-w-lg">Welcome back to your private vault. All transmissions are encrypted end-to-end. Your progress in Sensory Aesthetics is exceptional.</p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <section className="md:col-span-8 bg-surface-container rounded-xl p-8 flex flex-col justify-between min-h-[400px]">
              <div>
                <h2 className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] mb-6">Education Track</h2>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-3xl font-black text-white uppercase">Advanced Sensory Aesthetics</h3>
                  <span className="text-primary font-black text-2xl">84%</span>
                </div>
                <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden mb-8">
                  <div className="h-full bg-primary w-[84%] shadow-[0_0_10px_rgba(255,124,245,1)]"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-surface-container-high rounded-lg border-l-4 border-primary">
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Current Module</div>
                  <div className="text-on-surface font-bold text-lg mb-4 text-white">Limbic Resonance & Color Theory</div>
                </div>
              </div>
            </section>

            <section className="md:col-span-4 bg-surface-container-low rounded-xl p-8 border border-white/5">
              <h2 className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">security</span> Security Shell
              </h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-on-surface font-bold text-sm text-white">Discrete Mode</div>
                    <div className="text-zinc-600 text-xs">Hide profile from global search</div>
                  </div>
                  <div className="w-12 h-6 bg-primary rounded-full relative flex items-center px-1">
                    <div className="w-4 h-4 bg-on-primary rounded-full ml-auto"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
