import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Manifesto() {
  return (
    <div className="bg-background min-h-screen text-on-surface flex flex-col">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 lg:ml-64 pb-32">
          {/* Hero Section */}
          <section className="relative h-[85vh] flex items-end px-8 md:px-20 pb-24 overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image
                fill
                priority
                className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR7xqPN7QkwEDSmz5_g6hkJkkOWBGoKDHElbuIVvtLgcZRV3yK90Q3vs-Vbej5-BEmsb6Zv7WLrEXGkeptC8RzrX1C3Rd_OwcXcZS8Sc1tX-M9GF2CQBVNQNNp4-8pXKOtRncLWPwm_d9LRC-69qwqxS_iz855b57kJuP3RzRnfdYKnfUx_hdU_XwSn8PdJmE4_z2zkOn4opIVMSblRmv9w1jUHgLWjHncwoZzC9yGonRzIEtrZkrwjiioh7gt9yqW4unCCJnrCCk"
                alt="Manifesto Background"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-5xl space-y-6">
              <span className="uppercase tracking-[0.4em] text-primary font-black text-xs block opacity-80">Manifesto 2026</span>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-white uppercase">
                DECONSTRUCTING <br/> THE GAZE.
              </h1>
              <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl font-medium leading-relaxed italic">
                We are the rebellion against the standardized, the industrial, and the unethical. RAW is the definitive shift toward a cinema of authentic pleasure.
              </p>
            </div>
          </section>

          {/* Core Philosophy Section */}
          <section className="py-32 px-8 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-16 bg-surface/30">
            <div className="md:col-span-5 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-tight">What is <span className="text-primary italic">RAW?</span></h2>
              <p className="text-on-surface-variant text-lg leading-relaxed font-medium">
                RAW is not just a platform; it is an intervention. In an era where human intimacy has been commodified into pixels of performance, we return to the source.
              </p>
              <div className="p-8 border-l-2 border-primary bg-primary/5 rounded-r-2xl">
                 <p className="text-white text-xl leading-relaxed italic font-medium opacity-90">
                    &quot;We believe pleasure is a human right, but it should never come at the cost of human dignity.&quot;
                 </p>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass group">
                <Image
                   fill
                   className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuB31fREfGT_cEsM4BTj_NDa6y5K4_JUl9_4FJ0KTLThLMHvrDSFmcqchSALgUIBzfbzp8I2dXvu3mxKrXjZ1e8Ymr-cvc7d5P6l0dPYUlYkp52PwhbUkl-GSfz6pOfzoEaO3fDVpmOseRtvvaT2PqUqF7-q0o4_AO4n1o2H0fdpFjWDQXYDVw5y2JqQzEEjqFXt9ctnsWtIwOhTD4xkjwcCW-H8mMZoSyLx9h1piGEbemBQAK2wWXA9ns0G9GkXM4dH1PEKZIguZ9w"
                   alt="Shift"
                />
                <div className="absolute bottom-0 left-0 p-10 z-10">
                   <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-tight">A Shift in Narrative</h3>
                   <p className="text-on-surface-variant font-medium">Moving away from the industry standard toward creator-led, high-fidelity storytelling.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Ethical Pillars */}
          <section className="py-32 px-8 md:px-20 space-y-16">
            <div className="max-w-3xl">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">The Foundation</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white uppercase">THE ETHICAL PILLARS.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 glass p-12 rounded-3xl space-y-6 relative overflow-hidden group">
                <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
                <h3 className="text-4xl font-bold text-white uppercase tracking-tight">Consent</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md font-medium">
                  Beyond the checkbox. We enforce radical transparency in every production. Enthusiastic, ongoing, and revocable consent is the baseline of every frame we capture.
                </p>
                <div className="absolute top-8 right-8 text-8xl font-black text-white/5 group-hover:text-primary/10 transition-colors">01</div>
              </div>

              <div className="glass p-12 rounded-3xl space-y-6 group">
                <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Fair Pay</h3>
                <p className="text-on-surface-variant leading-relaxed font-medium">
                  85% of all revenue goes directly to the performers and directors. We operate on a model of absolute financial equity.
                </p>
              </div>
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="py-40 px-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
            </div>
            <div className="relative z-10 space-y-12">
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-none">
                CHOOSE THE <br/> <span className="text-primary italic">ELECTRIC PULSE.</span>
              </h2>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Link href="/categories">
                  <Button size="xl" variant="primary" className="px-16">JOIN THE REVOLUTION</Button>
                </Link>
                <Link href="/studio">
                  <Button size="xl" variant="outline" className="px-16">EXPLORE THE STUDIO</Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
