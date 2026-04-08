import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Button from '@/components/Button';
import Image from 'next/image';

export default function CreatorStudio() {
  return (
    <div className="bg-surface-container-lowest min-h-screen text-on-surface">
      <Header />
      <div className="flex pt-20">
        <Sidebar />
        <main className="lg:ml-64 flex-1 pt-8 px-6 md:px-12 pb-20">
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
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-extrabold tracking-widest uppercase flex items-center gap-3 text-white">
                    <span className="w-8 h-[2px] bg-primary"></span> Asset Upload
                  </h2>
                </div>
                <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-12 flex flex-col items-center justify-center bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">cloud_upload</span>
                  <p className="text-lg font-bold text-white">Drag and drop assets here</p>
                  <p className="text-on-surface-variant text-sm mt-2">Maximum file size: 50GB</p>
                  <Button variant="outline" className="mt-8">Browse Files</Button>
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
                    { title: 'Consent Architecture', desc: 'All participants have signed blockchain-verified consent forms.' },
                    { title: 'Equitable Revenue', desc: 'Smart contracts for automatic 50/50 profit splits are active.' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-surface-container p-6 rounded-xl flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <div>
                        <p className="font-bold text-sm uppercase tracking-wider text-white">{item.title}</p>
                        <p className="text-on-surface-variant text-xs mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="bg-surface-container p-8 rounded-xl">
                <h3 className="text-sm font-black tracking-[0.3em] uppercase mb-8 flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-primary">verified</span> Vetting Status
                </h3>
                <div className="space-y-8">
                  <div className="relative pl-8 border-l border-outline-variant">
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_#ff7cf5]"></div>
                    <p className="text-xs font-black tracking-widest uppercase mb-1 text-white">Identity Verified</p>
                    <p className="text-[10px] text-zinc-500 uppercase">Biometric match completed March 2026</p>
                  </div>
                  <div className="relative pl-8 border-l border-outline-variant">
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_#ff7cf5]"></div>
                    <p className="text-xs font-black tracking-widest uppercase mb-1 text-white">Ethics Mesh Status</p>
                    <p className="text-[10px] text-zinc-500 uppercase">AI compliance scan: 100% Alignment</p>
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
