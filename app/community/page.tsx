import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image';

export default function CommunityHub() {
  return (
    <div className="bg-surface-container-lowest min-h-screen text-on-surface">
      <Header />
      <div className="flex pt-20">
        <Sidebar />
        <main className="lg:ml-64 flex-1 pt-8 px-6 md:px-12 pb-20">
          <section className="mb-16">
            <div className="relative overflow-hidden rounded-xl h-[400px] flex items-end p-12 bg-surface-container shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              <Image
                fill
                className="object-cover opacity-40 mix-blend-luminosity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOFtgkQPFpLdGhh3QL533X5HGNdSlGw-7JS4I1MI6nAPV3vDbUOJGXK_ruAQRVNqm9aGki5sHwgAvN5CcSH5ivQUtfFY4yGXjTPV_EME5j69Xe4uBMQoyZ6JtzjFd5uszeUSuUC5NUPXmv5Vpz9IQ6aYOa-MnxuvXrEICkx-Iw0pSG-jvtvasXJaBm1xUKhClw1UKp_8rzNQtoim1SE7FtOdvjw-lOyHUWNZKxMvcoMc3hGXuG-NbcrAOTzZBTaL9pb_X6plhC-sw"
                alt="Community Header"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="relative z-10 max-w-2xl text-white">
                <span className="uppercase tracking-[0.2em] text-primary font-bold text-xs mb-4 block">Vibrant & Inclusive</span>
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-6">COMMUNITY <br/><span className="text-outline-variant text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">HUB</span></h1>
                <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">A sanctuary for dialogue, where boundaries are respected and curiosity is celebrated. Join the pulse.</p>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-4 bg-surface-container rounded-xl p-8 flex flex-col justify-between border-l-4 border-primary shadow-lg">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                  <h3 className="text-xl font-bold tracking-tight text-white">Safe Space Policy</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Radical inclusivity and zero tolerance for harassment.',
                    'Anonymity protected, verified sexologists moderated.',
                    'Consent-driven interaction at every touchpoint.',
                  ].map((rule, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-on-surface-variant">
                      <span className="text-primary font-bold">0{idx + 1}.</span> {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Queer Cinema', souls: '1.2k', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPDDs_Mcj1BusN38NpJFPUZf8Uf027lb24k8UR88SF7WWcu8jIGk8HFu-tqp6iu__KKGvOZc1b8dCYMnErS49uXr45R-ohJjM2jDN5khqXYmMpLosbL7c3jSy2_nl_7e8Ap4bmDy1--e9CAitHPj-n8LkBVUY9MIJwEa_4tJwsBlrJTD_fy49N7KBl3GZtDddkHcMt7eVcaSkoRBQc3w1rAS8qhEeTnGn-gYHEj3xh6NJUmX440Oss1HN-QzKWRagSdhSx7xSkm-I' },
                { title: 'Ethical Theory', souls: '890', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJDLBlZm8ZNktiyb7hYUFLenzVI0_1aqhs6eOb0XOPXfhhLHVvJBy-B6JoIsQ16AZZvynYrlARvF50DB99M2E0KpoLUcnY2S9PoHEcvZ3WF2LaKewHmQGiseT8_lIP7Vj8AlLV1fX3PLRgJLen1UJ4Pw38_MeCF139pFWl_OwFAVcKT162kyiisqb-CSeMcJhcuoRF84_Sgk9iC717HY-2KLDKSalN8T1reytpOYcnpWf6gecSiJ3GZxurFkbbQxIgppRjd1gZow4' },
                { title: 'Sensory Practice', souls: '2.4k', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVRBy-TZa3Iqvm8ABQhlctyTxHMgcD5wjusF2X7zIK-WQ-Df8n0z3_MkoXYWxmEpeQ6UaVTwkmZl7ShbA6z8Pt2lAfHqm-F5JJKMOBOh9YpiLypRiWWpZa4j5XDagQIlpI2tmsmFRc9bgGU7NrOAYlkalCicfLqXtUVCfszbYI6tPOTDOEU_aY4oN9JhSWrFC9YmyVLHwYvkXdapbO3X7FvX-mLk2PQhyJ2jfLYCioaCgNd_mU2-xUesyg5Vb7p5hlOKszPYlHXEE' },
              ].map((group, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-xl bg-surface-container-high h-64 flex items-end p-6 hover:shadow-[0_0_20px_rgba(255,124,245,0.3)] transition-all cursor-pointer">
                  <Image fill src={group.image} alt={group.title} className="object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-white">{group.title}</h4>
                    <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">{group.souls} active souls</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
