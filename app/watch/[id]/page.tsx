import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Button from '@/components/Button';
import Image from 'next/image';
import { use } from 'react';

export default function VideoPlayer({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <div className="bg-surface-container-lowest min-h-screen text-on-surface">
      <Header />
      <main className="pt-24 pb-20 px-4 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Video Content Area */}
        <div className="lg:col-span-8 space-y-10">
          {/* Cinematic Player */}
          <div className="relative group aspect-video w-full rounded-xl overflow-hidden bg-black shadow-[0_0_50px_rgba(0,0,0,1)]">
            <Image
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLkHWlVcCDuDkh6_c03NwAkeSVwtFMpct40YqXCxEimrEOM-R5m1eB9aNIN5sz06_gFK5qnHhaX-QtN59cT9Yg8xslAUnJov0ToojiSVqQRab053_fduRRdGRF3yA1RBfS5gQgzjMN19F-PbWUdlpD5fy8PKYGtVvVO5jXSren3gET3abWGrtylpQLDIgM-zcJTESz-d7ag-Cvgm0DZ2RKSRuNF4CjLMy9BdCwGyPqzvQ3r2umFCYzbqt2284TJaCNZWN1gfK_l0g"
              alt="Video Thumbnail"
            />
            {/* Player Overlays */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="text-xs font-bold tracking-widest uppercase text-white">Series: The Art of Intimacy</span>
                </div>
                <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-all text-white">
                  <span className="material-symbols-outlined">settings</span>
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-white/20 rounded-full relative overflow-hidden cursor-pointer">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-primary shadow-[0_0_10px_#ff7cf5] rounded-full"></div>
                </div>
                {/* Controls */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-8">
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-4xl">play_arrow</span></button>
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">skip_next</span></button>
                    <span className="text-sm font-medium tracking-tight text-white/70">12:44 / 45:00</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">closed_caption</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">fullscreen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-2 text-white uppercase">
                {id.replace(/-/g, ' ')}
              </h1>
              <p className="text-on-surface-variant text-lg">Exploring the spatial dynamics and sensory psychological foundations of connection.</p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 px-6 py-4 rounded-xl">
                <span className="material-symbols-outlined text-primary neon-glow-text">verified</span>
                <div>
                  <div className="text-[10px] font-black tracking-widest text-primary uppercase">Expert Endorsed</div>
                  <div className="text-sm font-bold text-white">Vetted by Experts</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sexologist Insights Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-black tracking-tighter uppercase text-primary">Sexologist Insights</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
            <div className="p-8 rounded-xl bg-surface-container border border-primary/20 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full border-2 border-primary overflow-hidden">
                  <Image
                    fill
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgw4bDccq47rzVIeht2uyowM31dzGKJmT8Ia18iLPtBhCZ2t96w2TKf4hqbUw3fu5q57xaCLqt_FjQHxncmw4seXIIHJDJH6Ob2ZJr7MrIWF1CkqVXFHQTGuoET9ZRImb7xa58Lib_JtF8YMon_y4joungKXYKHfu47pD1_t5aF9RJP9pnEMfl6Diri8pnksYr7uJWRtNg5i0yihtXkNqNO1HvK1cifP82sYXpGckL8JVnZmjdE90ycbCHzvGwuFTdfR5KNbs4kvc"
                    alt="Dr. Aris Thorne"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">Dr. Aris Thorne</h4>
                  <p className="text-xs font-medium text-primary uppercase tracking-widest">Clinical Sexologist • 12 years exp.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-on-surface italic">
                &quot;The synthesis of visual cues and somatic response explored at 08:24 is a breakthrough in digital education. RAW has successfully translated clinical frameworks into high-art cinematic experiences that bypass traditional learning barriers.&quot;
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar: Next in Series */}
        <aside className="lg:col-span-4 space-y-10">
          <div className="glass-panel p-8 rounded-xl border border-white/5 space-y-8 sticky top-28">
            <h3 className="text-xl font-black tracking-tighter uppercase text-white mb-6">Next in Series</h3>
            <div className="space-y-6">
              {[
                { title: 'The Sensory Map: Navigating Physical Response', part: 'Part 02', time: '38 MIN', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKyv0xemXCV69VVbMNGG5Lu23vJd1N_k0k2JVSVgbnUbiPHveuEh3BS3SPsVI53WLaYftA24UzksQwLhL6vcMlJRQnqZn-9VR-B4EKkzHPQxtyNb1okFGoJ_VJg7HpkThkkHG6emca30L1IiSCal2q_Le0RHLm5Y-JqHUHw5wQZ9iL7Uq6Rv9VVT_ALrYTHfHQ_WsfX-EAwdjH4gYhbj0DUVko7mUUhpYD2DXjEInfTlM-I-NTCOe1DAwp0cPEI9s4DJKPwrnFhrE' },
                { title: 'Communicative Flow: Beyond Verbality', part: 'Part 03', time: '42 MIN', locked: true, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-VMl5xKBE1Tm0Vsw610mJaegE4840F1SQThvs2fciyjQQdIE6zXszcktghuEhgw0ZjsGX1SXBZt-cQ_vvOxhzDMrYgIVd_h5viH1sLzq_M_Gc7tv3eGQZQh0-wmG6OS-G5s4ia4jQ4ow0HOleOG_Sge7HCwGJ3fFKOPsP95hsjlVzoqCz4NHccgB4GszG9YhNs6btDVXPoJMrnxeR6rmbOjq6kAbxajje5jjIkR1AYb1uSfIERnBOfRnF79nZpbH7tcDIFTNMM3g' },
              ].map((video, idx) => (
                <div key={idx} className="group flex gap-4 items-start cursor-pointer">
                  <div className="w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-900 relative">
                    <Image fill src={video.image} alt={video.title} className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                  <div>
                    <div className={`text-[10px] font-black tracking-widest uppercase ${video.locked ? 'text-zinc-600' : 'text-primary'}`}>{video.part}</div>
                    <h4 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors text-white">{video.title}</h4>
                    <div className="text-[10px] text-zinc-500">{video.time} {video.locked ? '• LOCKED' : ''}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5">
              <Button fullWidth variant="secondary">Upgrade to Pro</Button>
            </div>
          </div>
        </aside>
      </main>
      <MobileNav />
    </div>
  );
}
