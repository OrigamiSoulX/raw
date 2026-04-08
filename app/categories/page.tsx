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
      desc: 'Finding authentic human resonance and consensual vulnerability in a digital world.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL6sZprFjxSC-K2h7mzGSlkvdhaW67CKmvlVJ1Cp79t5SX5ItnrPfwxkH8VhyHEYCkrAdgdSrbdX2z85mR_6_jgMhqy76jjXP46P943uKPUnA8LAVzsEza-ld1W-fmQbDEsmdaro1P_-8WdPBA3zkCpngDz7zFxj6H-43Q74sDlqZUJgJm-viRCfWBypJ0Q1buZjtJDJ37AkywhHjynQ-VeZppFL3EMtCa3U-q8Vld14J9B82Bg1bv1am9mNN7n9ToiwCG-aa-vlY',
      icon: 'favorite'
    },
    {
      id: 'body-truths',
      title: 'Body Truths',
      tag: 'Deep Dive',
      desc: 'An unedited exploration of human form, celebrating diversity and anatomical reality.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9A_fZM5RmziroanF57dnrPmFIQqD9dsGJoqMYc4j4l48XSs5iiNL2ZqeXfckICy1ZA_X3YyuZ2Tp04XUXnk-VwNGhm1Y6_B1jn0GoapA4QY5Nv2zy_16Gum21sNpaq18s8nXRsW3-qKAQvT1P6nt2g_GmkLEaPoZsnmFbPFIIDn0oWKxApHY2KvuHWSPYtDkDBPX9aZAOzQCWEootjIRsam0FW18kDdme3L3VMI700qeAzirNjW5JIBeC6yh4NOy_8vRfOrcTXFs',
      icon: 'accessibility_new'
    },
    {
      id: 'solo-rituals',
      title: 'Solo Rituals',
      tag: 'Self Care',
      desc: 'Dedicated to the personal journey of self-discovery and individual pleasure spaces.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCILDQOTtkW3SS7R9Yf8-j94d6TuOz1miQqoPCutmGY9p2qhlxIwZrlZJtH7bgUPTKVm3unMMN6sn7HlEotowy8OQqjY22fPUs_6NKpqvNnN_wEyair0RYiuXXOuMLtdO2F1ejpN-whz16NZesbZsBydbKJbj8_u6urv1vYKhMUsCZfbOrrMkqBjrpIKsgGnXJR83nvChjfoK5rNAvVfQeMXfaLf8lV7DKR_XAE1Xgp-Y62W1knAnGjQ_3Kys66rJoKLyhTw7Nkw7A',
      icon: 'nights_stay'
    },
    {
      id: 'shared-pleasures',
      title: 'Shared Pleasures',
      tag: 'Community',
      desc: 'Exploring the dynamics of multi-partner consensus and collective energy.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaumyNVe8jIS8NkIHTttdIKO6M3jUoEf08UxmGWyNlFIKutRbuxXIRm4KedHl9aiUXiLZprpqWBfXWm_jVasX4ltHpRkE4dO-4Hnio4fpNwpXRsgXV0EHFLta-dsc_5T7Z0ZnIGlEzNtAWQYUtQ_dblqzOM_Fr70FP75DspoOcMp6ITv59x8HqHux4cJj9AoVuCE-mto7AESi6ZD6Jdhpmz-vmaon5UnXJzA6VIFLOJ90Hp8wvqshqfZ_oJsrJxrmPuaF7jseSuEY',
      icon: 'diversity_3'
    },
    {
      id: 'slow-presence',
      title: 'Slow Presence',
      tag: 'Mindful',
      desc: 'Focusing on the art of deceleration, sensual mindfulness, and beauty.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrzqTtMolAxx84QKYYbqBuVk4CUbeNHT1hGW9yP7bjYIlzobkwdAYjjI74ypmQhhjZ10s7DOwqgg3Jjp2AD2G6wC-d4zfHLw-m_s-fGOelvJMwPY3dBmj-wJZuCrtMJXnbSpoG_IoZnEB_1eKOyx7QoYERyHD4lzrJhmezzhAs71NnnKBjtFpcUUSpcecBcBq_CCyS43s5HTHCexmU-XFus6uSY9ErLzA0wKcnQyIWXHwE_aw-AQIKcAysdi_e8SH5thz5JO1Q6H4',
      icon: 'spa'
    },
    {
      id: 'deconstruction-notes',
      title: 'Deconstruction Notes',
      tag: 'Critical',
      desc: 'Intellectual and philosophical critiques of media, dismantling tropes for a better industry.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgia7ZUujmDlYYvjl8BknClixTqA_8oCMoZPlr_zb1VOxihjGzX-_tZuleAZYGaDRbjRPxVTIwnEchIgpk63wYznoPRa44iRK3fujphBsHEL9_MnJAangKHlEX5WDkg6SoOeaUL8zhZ6a39bghyy3jVY38XQVjI5yMkKESest9o-NIoqcN9ph2z3pjC1YgG_W11WKyEKgXw6Ef3EfggFFqsBtLUWHa9DFia_ton3XufSZP3xHaF-ztl2-0oWjPbo6kM0nS273o1ns',
      icon: 'architecture'
    },
  ];

  return (
    <div className="bg-background min-h-screen text-on-background flex flex-col">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="lg:ml-60 flex-1 pt-12 pb-32 px-6 md:px-12">
          <header className="mb-16">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">Archive Directory</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-background mb-4">
               Explore <span className="text-primary">Categories</span>
            </h1>
            <p className="max-w-xl text-on-surface-variant font-medium text-lg leading-relaxed">
              Discover our curated definitive archetypes. Each transmission is vetted for ethical integrity and cinematic excellence.
            </p>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <Link
                href={`/watch/${cat.id}`}
                key={idx}
                className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white soft-shadow border-4 border-white transition-all duration-500 hover:-translate-y-2"
              >
                <Image fill src={cat.image} alt={cat.title} className="object-cover opacity-70 group-hover:opacity-90 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center soft-shadow">
                        <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{cat.icon}</span>
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{cat.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-on-background mb-3 tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm font-medium leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {cat.desc}
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Collective <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
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
