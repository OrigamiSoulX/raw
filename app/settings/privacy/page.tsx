import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';

export default function PrivacySettings() {
  return (
    <div className="bg-surface-container-lowest min-h-screen text-on-surface">
      <Header />
      <div className="flex pt-20">
        <Sidebar />
        <main className="flex-1 lg:ml-64 px-6 md:px-20 py-12 pb-32">
          <header className="mb-16">
            <span className="text-primary text-xs font-black tracking-[0.3em] uppercase mb-4 block">System / Core</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight text-white mb-6">
              Security & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Anonymity.</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
              Configure your digital footprint. At RAW, privacy isn&apos;t a feature; it&apos;s the foundation. Manage your identity protection and data rights with absolute precision.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <section className="lg:col-span-8 bg-surface-container rounded-xl p-10 relative overflow-hidden border border-outline-variant/10">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Identity Protection</h3>
                    <p className="text-on-surface-variant text-sm">Advanced protocols to keep your activity untraceable.</p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                </div>

                <div className="space-y-8">
                  {[
                    { title: 'Ghost Mode', desc: 'Prevents session tracking across educational series.', active: true, icon: 'visibility_off' },
                    { title: 'Metadata Stripping', desc: 'Automatically scrubs EXIF and identity tags from uploads.', active: false, icon: 'data_loss_prevention' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-6 bg-surface-container-low rounded-lg group hover:bg-surface-container-high transition-colors">
                      <div className="flex items-center gap-6 text-white">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined">{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-bold">{item.title}</h4>
                          <p className="text-xs text-on-surface-variant uppercase">{item.desc}</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={item.active} className="sr-only peer" readOnly />
                        <div className="w-14 h-7 bg-zinc-800 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-full"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="lg:col-span-4 bg-gradient-to-b from-surface-container-high to-surface-container rounded-xl p-10 flex flex-col justify-between border border-primary/20">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">RAW Access</h3>
                <div className="bg-black/40 p-4 rounded-lg border-l-4 border-primary mb-8">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Active Model</span>
                  <p className="text-lg font-bold text-white uppercase">Totally Free Access</p>
                  <p className="text-xs text-on-surface-variant mt-1 uppercase">Ethical studio model supported by community.</p>
                </div>
              </div>
              <button className="w-full py-4 border-2 border-primary text-primary font-black rounded-full hover:bg-primary hover:text-black transition-all text-xs tracking-widest uppercase">
                View Ethical Charter
              </button>
            </section>

            {/* Notifications */}
            <section className="lg:col-span-5 bg-surface-container rounded-xl p-10 border border-outline-variant/10">
              <h3 className="text-xl font-bold mb-8 text-white">Neon Notifications</h3>
              <div className="space-y-6">
                {[
                  { label: 'New Series Drops', active: true },
                  { label: 'Security Alerts', active: true },
                  { label: 'Marketing Pulse', active: false },
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center justify-between ${!item.active && 'opacity-50'}`}>
                    <span className="text-sm font-medium text-white">{item.label}</span>
                    <div className={`w-12 h-6 rounded-full flex items-center px-1 ${item.active ? 'bg-primary/20' : 'bg-zinc-800'}`}>
                      <div className={`w-4 h-4 rounded-full ${item.active ? 'bg-primary shadow-[0_0_8px_#FF7CF5]' : 'bg-zinc-600'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Rights */}
            <section className="lg:col-span-7 bg-surface-container rounded-xl p-10 border border-outline-variant/10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4 text-white">Your Data Rights</h3>
                <p className="text-sm text-on-surface-variant mb-6">
                  Download your entire interaction history or purge your existence from our nodes with a single click. We store zero persistent identifiers.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-surface-container-highest rounded-full text-[10px] font-black uppercase text-white hover:bg-zinc-800 transition-colors">Export Data</button>
                  <button className="px-6 py-2 bg-red-900/20 text-red-500 rounded-full text-[10px] font-black uppercase hover:bg-red-900/40 transition-colors">Purge Account</button>
                </div>
              </div>
              <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center border border-primary/30">
                <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>shuffle</span>
              </div>
            </section>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
