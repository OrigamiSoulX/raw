import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image';
import Link from 'next/link';

export default function Categories() {
  const categories = [
    {
      id: 'real-connections',
      title: 'Real Connections',
      tag: 'Primary Filter',
      desc: 'Stripping away the algorithmic facade to find authentic human friction.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL6sZprFjxSC-K2h7mzGSlkvdhaW67CKmvlVJ1Cp79t5SX5ItnrPfwxkH8VhyHEYCkrAdgdSrbdX2z85mR_6_jgMhqy76jjXP46P943uKPUnA8LAVzsEza-ld1W-fmQbDEsmdaro1P_-8WdPBA3zkCpngDz7zFxj6H-43Q74sDlqZUJgJm-viRCfWBypJ0Q1buZjtJDJ37AkywhHjynQ-VeZppFL3EMtCa3U-q8Vld14J9B82Bg1bv1am9mNN7n9ToiwCG-aa-vlY',
      icon: 'bolt'
    },
    {
      id: 'body-truths',
      title: 'Body Truths',
      tag: 'Deep Dive',
      desc: 'Radical acceptance of the physical vessel. Decoding daily sensations.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9A_fZM5RmziroanF57dnrPmFIQqD9dsGJoqMYc4j4l48XSs5iiNL2ZqeXfckICy1ZA_X3YyuZ2Tp04XUXnk-VwNGhm1Y6_B1jn0GoapA4QY5Nv2zy_16Gum21sNpaq18s8nXRsW3-qKAQvT1P6nt2g_GmkLEaPoZsnmFbPFIIDn0oWKxApHY2KvuHWSPYtDkDBPX9aZAOzQCWEootjIRsam0FW18kDdme3L3VMI700qeAzirNjW5JIBeC6yh4NOy_8vRfOrcTXFs',
      icon: 'accessibility_new'
    },
    {
      id: 'solo-rituals',
      title: 'Solo Rituals',
      tag: 'Self Care',
      desc: 'Finding the sacred in the mundane. Private ceremonies of the self.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCILDQOTtkW3SS7R9Yf8-j94d6TuOz1miQqoPCutmGY9p2qhlxIwZrlZJtH7bgUPTKVm3unMMN6sn7HlEotowy8OQqjY22fPUs_6NKpqvNnN_wEyair0RYiuXXOuMLtdO2F1ejpN-whz16NZesbZsBydbKJbj8_u6urv1vYKhMUsCZfbOrrMkqBjrpIKsgGnXJR83nvChjfoK5rNAvVfQeMXfaLf8lV7DKR_XAE1Xgp-Y62W1knAnGjQ_3Kys66rJoKLyhTw7Nkw7A',
      icon: 'nights_stay'
    },
    {
      id: 'shared-pleasures',
      title: 'Shared Pleasures',
      tag: 'Community',
      desc: 'Collective joy as an act of rebellion. Communal high of togetherness.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaumyNVe8jIS8NkIHTttdIKO6M3jUoEf08UxmGWyNlFIKutRbuxXIRm4KedHl9aiUXiLZprpqWBfXWm_jVasX4ltHpRkE4dO-4Hnio4fpNwpXRsgXV0EHFLta-dsc_5T7Z0ZnIGlEzNtAWQYUtQ_dblqzOM_Fr70FP75DspoOcMp6ITv59x8HqHux4cJj9AoVuCE-mto7AESi6ZD6Jdhpmz-vmaon5UnXJzA6VIFLOJ90Hp8wvqshqfZ_oJsrJxrmPuaF7jseSuEY',
      icon: 'diversity_3'
    },
    {
      id: 'slow-presence',
      title: 'Slow Presence',
      tag: 'Mindful',
      desc: 'The art of the long exhale. Reclaiming time from modern speed.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrzqTtMolAxx84QKYYbqBuVk4CUbeNHT1hGW9yP7bjYIlzobkwdAYjjI74ypmQhhjZ10s7DOwqgg3Jjp2AD2G6wC-d4zfHLw-m_s-fGOelvJMwPY3dBmj-wJZuCrtMJXnbSpoG_IoZnEB_1eKOyx7QoYERyHD4lzrJhmezzhAs71NnnKBjtFpcUUSpcecBcBq_CCyS43s5HTHCexmU-XFus6uSY9ErLzA0wKcnQyIWXHwE_aw-AQIKcAysdi_e8SH5thz5JO1Q6H4',
      icon: 'spa'
    },
    {
      id: 'deconstruction-notes',
      title: 'Deconstruction Notes',
      tag: 'Critical',
      desc: 'Intellectual arson. Tearing down structures that no longer serve us.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgia7ZUujmDlYYvjl8BknClixTqA_8oCMoZPlr_zb1VOxihjGzX-_tZuleAZYGaDRbjRPxVTIwnEchIgpk63wYznoPRa44iRK3fujphBsHEL9_MnJAangKHlEX5WDkg6SoOeaUL8zhZ6a39bghyy3jVY38XQVjI5yMkKESest9o-NIoqcN9ph2z3pjC1YgG_W11WKyEKgXw6Ef3EfggFFqsBtLUWHa9DFia_ton3XufSZP3xHaF-ztl2-0oWjPbo6kM0nS273o1ns',
      icon: 'architecture'
    },
  ];

  return (
    <div className="bg-background min-h-screen text-on-surface flex flex-col">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="lg:ml-64 flex-1 pt-12 pb-32 px-6 md:px-12">
          <header className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight text-white tracking-tighter mb-4">
               Explore <span className="text-primary italic">Categories</span>
            </h1>
            <p className="max-w-xl text-on-surface-variant font-medium text-lg italic leading-relaxed">
              Curated definitive archetypes for the digital underground. Unfiltered, and intentionally loud.
            </p>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <Link
                href={`/watch/${cat.id}`}
                key={idx}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass hover-lift"
              >
                <Image fill src={cat.image} alt={cat.title} className="object-cover opacity-50 group-hover:opacity-80 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-3 mb-4">
                     <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-md">
                        <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{cat.icon}</span>
                     </span>
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{cat.tag}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm font-medium leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            ))}
          </section>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
