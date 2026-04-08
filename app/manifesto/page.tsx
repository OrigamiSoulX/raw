import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Manifesto() {
  return (
    <div className="bg-background min-h-screen text-on-background flex flex-col">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 lg:ml-60 pb-32">

          <section className="relative h-[400px] flex items-center px-8 md:px-16 overflow-hidden rounded-b-[3rem] mb-16 bg-blue-50">
            <div className="absolute inset-0 z-0">
              <Image
                fill
                priority
                className="object-cover opacity-20 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR7xqPN7QkwEDSmz5_g6hkJkkOWBGoKDHElbuIVvtLgcZRV3yK90Q3vs-Vbej5-BEmsb6Zv7WLrEXGkeptC8RzrX1C3Rd_OwcXcZS8Sc1tX-M9GF2CQBVNQNNp4-8pXKOtRncLWPwm_d9LRC-69qwqxS_iz855b57kJuP3RzRnfdYKnfUx_hdU_XwSn8PdJmE4_z2zkOn4opIVMSblRmv9w1jUHgLWjHncwoZzC9yGonRzIEtrZkrwjiioh7gt9yqW4unCCJnrCCk"
                alt="Mission Background"
              />
            </div>
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="uppercase tracking-widest text-primary font-bold text-xs bg-white px-3 py-1 rounded-full soft-shadow">Ethical Principles</span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-on-background leading-tight">
                Our commitment to <br/> <span className="text-primary">Human Dignity.</span>
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl font-medium leading-relaxed">
                We believe in a digital space that respects autonomy, celebrates diversity, and prioritizes well-being.
              </p>
            </div>
          </section>

          <div className="px-8 md:px-16 max-w-6xl mx-auto space-y-24">

            <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-on-background">A Positive Future</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  RAW is an initiative to reclaim human intimacy from industrial standards. We focus on ethical production where every voice is heard and every boundary is respected.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 italic font-medium text-on-surface">
                   &quot;Pleasure is a fundamental part of the human experience, and it should always be grounded in mutual respect and safety.&quot;
                </div>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden soft-shadow border-4 border-white bg-gray-100">
                <Image
                   fill
                   className="object-cover"
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuB31fREfGT_cEsM4BTj_NDa6y5K4_JUl9_4FJ0KTLThLMHvrDSFmcqchSALgUIBzfbzp8I2dXvu3mxKrXjZ1e8Ymr-cvc7d5P6l0dPYUlYkp52PwhbUkl-GSfz6pOfzoEaO3fDVpmOseRtvvaT2PqUqF7-q0o4_AO4n1o2H0fdpFjWDQXYDVw5y2JqQzEEjqFXt9ctnsWtIwOhTD4xkjwcCW-H8mMZoSyLx9h1piGEbemBQAK2wWXA9ns0G9GkXM4dH1PEKZIguZ9w"
                   alt="Mission"
                />
              </div>
            </section>

            <section className="space-y-12 pb-12">
               <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-on-background">Our Core Pillars</h2>
                  <p className="text-on-surface-variant max-w-lg mx-auto font-medium">The foundation of every interaction on our platform.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: 'Full Consent', icon: 'volunteer_activism', desc: 'Active, enthusiastic, and revocable consent is the baseline for everything we build.' },
                    { title: 'Financial Equity', icon: 'payments', desc: '85% of revenue goes directly to creators and performers, supporting sustainable careers.' },
                    { title: 'Authentic Joy', icon: 'favorite', desc: 'We prioritize real human connection over performance standards or harmful tropes.' }
                  ].map((pillar, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[2rem] soft-shadow space-y-5 flex flex-col items-center text-center">
                       <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{pillar.icon}</span>
                       </div>
                       <h3 className="text-xl font-bold text-on-background">{pillar.title}</h3>
                       <p className="text-on-surface-variant text-sm font-medium leading-relaxed">{pillar.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            <section className="bg-primary/5 rounded-[3rem] p-12 md:p-20 text-center space-y-8">
               <h2 className="text-4xl md:text-5xl font-extrabold text-on-background tracking-tight leading-tight">
                  Ready to join a <br/> <span className="text-primary">healthier community?</span>
               </h2>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/categories">
                    <Button size="lg" variant="primary">Browse Library</Button>
                  </Link>
                  <Link href="/studio">
                    <Button size="lg" variant="outline">Learn More</Button>
                  </Link>
               </div>
            </section>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
