import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Manifesto() {
  return (
    <div className="bg-surface-container-lowest min-h-screen">
      <Header />
      <div className="flex pt-20">
        <Sidebar />
        <main className="flex-1 xl:ml-64">
          {/* Hero Section */}
          <section className="relative h-[921px] flex items-end px-8 md:px-20 pb-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                fill
                priority
                className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR7xqPN7QkwEDSmz5_g6hkJkkOWBGoKDHElbuIVvtLgcZRV3yK90Q3vs-Vbej5-BEmsb6Zv7WLrEXGkeptC8RzrX1C3Rd_OwcXcZS8Sc1tX-M9GF2CQBVNQNNp4-8pXKOtRncLWPwm_d9LRC-69qwqxS_iz855b57kJuP3RzRnfdYKnfUx_hdU_XwSn8PdJmE4_z2zkOn4opIVMSblRmv9w1jUHgLWjHncwoZzC9yGonRzIEtrZkrwjiioh7gt9yqW4unCCJnrCCk"
                alt="Manifesto Background"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-5xl">
              <span className="uppercase tracking-[0.3em] text-primary font-bold text-xs mb-4 block">Manifesto 2026</span>
              <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.85] neon-glow-text mb-8 text-white">
                DECONSTRUCTING <br/> THE GAZE.
              </h1>
              <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
                We are the rebellion against the standardized, the industrial, and the unethical. RAW is the definitive shift toward a cinema of authentic pleasure.
              </p>
            </div>
          </section>

          {/* What is RAW? Section */}
          <section className="py-32 px-8 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 bg-surface-container-lowest">
            <div className="md:col-span-5">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 border-l-8 border-primary pl-6">What is RAW?</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                RAW is not just a platform; it is an intervention. In an era where human intimacy has been commodified into pixels of violence and performance, we return to the source.
              </p>
              <p className="text-on-surface text-lg leading-relaxed italic border-t border-outline-variant pt-6">
            &quot;We believe pleasure is a human right, but it should never come at the cost of human dignity.&quot;
              </p>
            </div>
            <div className="md:col-span-7 flex flex-col gap-6">
              <div className="bg-surface-container p-12 rounded-xl flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
                <Image fill className="object-cover opacity-30 group-hover:opacity-50 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB31fREfGT_cEsM4BTj_NDa6y5K4_JUl9_4FJ0KTLThLMHvrDSFmcqchSALgUIBzfbzp8I2dXvu3mxKrXjZ1e8Ymr-cvc7d5P6l0dPYUlYkp52PwhbUkl-GSfz6pOfzoEaO3fDVpmOseRtvvaT2PqUqF7-q0o4_AO4n1o2H0fdpFjWDQXYDVw5y2JqQzEEjqFXt9ctnsWtIwOhTD4xkjwcCW-H8mMZoSyLx9h1piGEbemBQAK2wWXA9ns0G9GkXM4dH1PEKZIguZ9w" alt=" Narrative Shift" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-4">A Shift in Narrative</h3>
                  <p className="text-zinc-400">Moving away from the &apos;industry standard&apos; toward creator-led, high-fidelity storytelling that prioritizes the artist and the audience equally.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Ethical Pillars */}
          <section className="py-32 px-8 md:px-20">
            <div className="mb-20">
              <span className="text-primary font-bold uppercase tracking-widest text-xs">The Foundation</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white">THE ETHICAL PILLARS.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-surface-container p-12 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8">
                  <span className="text-6xl font-black text-white/5 group-hover:text-primary/20 transition-colors">01</span>
                </div>
                <span className="material-symbols-outlined text-primary text-5xl mb-8">handshake</span>
                <h3 className="text-4xl font-extrabold text-white mb-6">Consent</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                  Beyond the checkbox. We enforce radical transparency in every production. Enthusiastic, ongoing, and revocable consent is the baseline of every frame we capture.
                </p>
              </div>
              <div className="bg-surface-container-high p-12 rounded-xl group">
                <span className="material-symbols-outlined text-primary text-5xl mb-8">payments</span>
                <h3 className="text-3xl font-extrabold text-white mb-6">Fair Pay</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Eliminating the middle-man. 85% of all revenue goes directly to the performers and directors. We operate on a model of financial equity.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-40 px-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 text-white">CHOOSE THE <br/> <span className="text-primary italic">ELECTRIC PULSE.</span></h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <Link href="/categories">
                  <Button size="xl" variant="primary">JOIN THE REVOLUTION</Button>
                </Link>
                <Link href="/studio">
                  <Button size="xl" variant="outline">EXPLORE THE STUDIO</Button>
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
