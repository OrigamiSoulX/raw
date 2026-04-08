import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import VideoCard from '@/components/VideoCard';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-surface-container-lowest min-h-screen text-on-surface selection:bg-primary selection:text-on-primary">
      <Header />

      <div className="flex pt-20">
        <Sidebar />

        <main className="flex-1 xl:ml-64 px-6 md:px-12 py-12 pb-32">
          {/* Hero Section */}
          <section className="relative h-[600px] flex items-center justify-center px-8 overflow-hidden rounded-3xl mb-16">
            <div className="absolute inset-0 z-0">
              <Image
                fill
                className="object-cover opacity-40 mix-blend-screen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfC9iCyNHa5zpoe3aIioU9QSySkGo3FBL2wHUH3Nu4A7rZue6N8NEXHTEdc_yAlr9CIPl33-2oznYdpcWq5rOQBP4Pu410nPSIY3kXp2oDnoWyN9G3sV6LTYuAAW0iAX57Ez1AD49Kn4x-hANB6uJ1nogOVKktOAGmS1CdgdBI9nAv8t4xAVystud7Mrx3poOfb_KRlOf8n_2FpWVruK3SyYinR5pZYzm-YgaAiuulJjrkxPOFhKabTQin70zp-VnVDrnNErytnYg"
                alt="RAW Background"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl space-y-12">
              <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter drop-shadow-2xl text-white">
                Raw. Deconstructed. Real. <br/>
                <span className="text-primary italic">Pleasure without the patriarchy.</span>
              </h1>
              <div className="flex flex-col items-center gap-6">
                <Link href="/categories">
                  <Button size="xl" variant="secondary">
                    Enter the Work - 18+
                  </Button>
                </Link>
                <p className="text-on-surface-variant tracking-[0.2em] uppercase text-xs font-medium">
                  Authentic human education for the modern era
                </p>
              </div>
            </div>
          </section>

          {/* Bubble Navigation */}
          <nav className="flex overflow-x-auto no-scrollbar gap-4 py-8 items-center justify-start md:justify-center mb-12">
            {[
              { icon: 'favorite', label: 'Real Connections', active: true },
              { icon: 'accessibility_new', label: 'Body Truths' },
              { icon: 'self_improvement', label: 'Solo Rituals' },
              { icon: 'groups', label: 'Shared Pleasures' },
              { icon: 'hourglass_empty', label: 'Slow Presence' },
              { icon: 'edit_note', label: 'Deconstruction Notes' },
            ].map((item, idx) => (
              <button
                key={idx}
                className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-full font-bold text-sm tracking-tight transition-all ${
                  item.active
                    ? 'bg-primary text-on-primary shadow-[0_0_20px_rgba(255,124,245,0.3)]'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
              >
                <span className="material-symbols-outlined text-lg" style={item.active ? { fontVariationSettings: "'FILL' 1" } : {}}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <VideoCard
              id="anatomy-of-touch"
              title="The Anatomy of Touch"
              subtitle="A deep dive into the nervous system and the architecture of physical connection."
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCCFARUCFOQjbkOPACYd0tL-TXTVrb7j6ltmq6S3I3ksXCG0hk43QDN7NBBY7QacBjvc10oKlVfcvQe_fw4ygFNL5_kn_3IjHL1kDj7_PJ1KEojzgK9kW-FAXrEwrs1h8HEkacIwR_gNJ9-RTM1SvLH5O9Se3uFbDQwAkpVxRh7d48AlYN8X7bUljbB2rp4KIhkXMGU6gRV3dzDmyQ6MjYLHnugq7panRJ5iw3OjXB7LYMOzazpWIDa3OTOhNeKlMLIPQ513D9HFPg"
              type="series"
              episodes="12 EPISODES"
              layout="vertical"
            />

            <VideoCard
              id="radical-vulnerability"
              title="Radical Vulnerability"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD5r_UdWp7bjbrq_OlLxzgkQxcXnZMNCnmBPByN0aP0EH7u7qK_YdHFV2ckhrWk6jZMUCsJtUuk85dODgS0ucdsF08tfrOmSQhb0GY1LrWCCceRNqYuK7ns0XeQGBy73oWysjH0PQlFJYt9lpK8HT4vDU2pLPD_IIo4mTsIwZceJI7u6ClvQ6cFYmS_NtuszxBNc2DmJPEQKE8uYHBGqTMJJRgooD6icYGLdIemozHeDMO6sE3jo3umO3GK69DkhPrL08E3oDAt1zc"
              type="dialogue"
              layout="wide"
            />

            <VideoCard
              id="motion-flow"
              title="Motion & Flow"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD3H4wAnwaChikNQUefXGs-m-BKPbylvPsCv11Lx1wOo-Ztw4dpfDBvofXVZdeTHctNdYIp8ewNXsQaoZFpJGJGvM8VSxSoHUnLBn0LowQtfVg7AaLO9NNqd4lKvehn0wBaGBTCJt91SKa44EzI-btY340oVyy1YOMXJm0BQPTfNO_zN2MOZvBHuoLdKCM-hzfwbwTfBQgbnXmifmQc7IPuKnAfkYU8BuY9nsZsbHmdwRKOsFYQZO-WF1mfOck7XugTF_sJ71Ld8xY"
              type="studio"
            />

            <VideoCard
              id="the-gaze"
              title="The Gaze: Deconstructing Desire"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB2cGCOzAgVM-w6OMoPIPMmdHmpk8QAKkW_khCw3E1jg-XPn_yKhHMO7LW5Ym2zhSQs_3PaxF5-F7y1vEPcjHhprTVQhYjr74zD85Gb5ExInOhw1Ql03RH8BuL6oDqDdf7POPQPtl5vtL7YSbTzJdoOWQMmwLmxvCp8VEZaWbPUj0mqCtKKTLek4-WVD9P6rkoChesFJKumtXZHyCekWY44tlehYbXRBa87YzmoKQq7MZqPATF78p7efXCm4cMOVaEqNHuNKnVayXA"
              type="masterclass"
              layout="wide"
            />

            <VideoCard
              id="solo-presence"
              title="Solo Presence"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDabeFn_29-LTWMfwWSC6CDcxQSLtm40vChiJ7JrKH3XQbRxGLxXviGVTluZox7QQwV8rRH3PzsrqP60PaTGhDefHRIQGOehnxCu1Ik-AxsTrJpPTLGDfKa9c4efTQZclsG4spb7SjDNFA1WR4G2GdV0s5wnWRO1-QEQBhxxnpWBPFw3xiTzQ1JTuYqNd0hEsPSSF1bfpXiFk7EHY_AT3ex0TLmoeHz2GjgJDommHoFPwVhORn7a4inN7mgx-XQqLUkXK15ogLJqmk"
              type="ritual"
            />

            <VideoCard
              id="framing-reality"
              title="Framing Reality"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuC4eFkkZCNazAqD8WsaFB84Eou_qigIL2cIXMYOZE2Nwl0DokzEfLjmdCV3YOYtm61uAgZ8DHipbTqvyw-X6_Mez4iBowws7LglJFPXKyACyuuFy6u4bqoBKRihWKsZwyl0td8ldND8lZakUqkDqkt7rK6qKnw_vfriKNmGekfsazyn9KTF2PvzLltkCAR50NekUbPmYcpL9RXpoElb0boVrVAI5MbnpCFmXhfPEJFT-cCaw4ZWkGG1swmfWQtZwbX1RASf7s0bc2c"
              type="notes"
            />
          </div>
        </main>
      </div>

      <MobileNav />

      <footer className="w-full py-12 px-20 flex flex-col items-center gap-6 bg-black rounded-t-[3rem] mt-20 border-t border-zinc-900">
        <div className="text-pink-500 font-black text-lg tracking-tighter">RAW CINEMA</div>
        <div className="flex gap-10 flex-wrap justify-center">
          {[
            { label: 'Ethics', href: '/manifesto' },
            { label: 'Privacy', href: '/settings/privacy' },
            { label: 'Terms', href: '#' },
            { label: 'Studio Access', href: '/studio' }
          ].map((link) => (
            <Link key={link.label} href={link.href} className="text-zinc-700 hover:text-white transition-colors font-medium text-[10px] tracking-widest uppercase">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="font-medium text-[10px] tracking-widest text-zinc-700 mt-8">© 2026 RAW CINEMA. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
