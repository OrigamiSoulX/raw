'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import VideoCard from '@/components/VideoCard';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo, Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const ALL_VIDEOS = [
  {
    id: "anatomy-of-touch",
    title: "The Anatomy of Touch",
    subtitle: "A deep dive into the architecture of physical connection.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCFARUCFOQjbkOPACYd0tL-TXTVrb7j6ltmq6S3I3ksXCG0hk43QDN7NBBY7QacBjvc10oKlVfcvQe_fw4ygFNL5_kn_3IjHL1kDj7_PJ1KEojzgK9kW-FAXrEwrs1h8HEkacIwR_gNJ9-RTM1SvLH5O9Se3uFbDQwAkpVxRh7d48AlYN8X7bUljbB2rp4KIhkXMGU6gRV3dzDmyQ6MjYLHnugq7panRJ5iw3OjXB7LYMOzazpWIDa3OTOhNeKlMLIPQ513D9HFPg",
    type: "series",
    episodes: "12 Episodes",
    layout: "wide" as const
  },
  {
    id: "radical-vulnerability",
    title: "Radical Vulnerability",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5r_UdWp7bjbrq_OlLxzgkQxcXnZMNCnmBPByN0aP0EH7u7qK_YdHFV2ckhrWk6jZMUCsJtUuk85dODgS0ucdsF08tfrOmSQhb0GY1LrWCCceRNqYuK7ns0XeQGBy73oWysjH0PQlFJYt9lpK8HT4vDU2pLPD_IIo4mTsIwZceJI7u6ClvQ6cFYmS_NtuszxBNc2DmJPEQKE8uYHBGqTMJJRgooD6icYGLdIemozHeDMO6sE3jo3umO3GK69DkhPrL08E3oDAt1zc",
    type: "dialogue"
  },
  {
    id: "motion-flow",
    title: "Motion & Flow",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3H4wAnwaChikNQUefXGs-m-BKPbylvPsCv11Lx1wOo-Ztw4dpfDBvofXVZdeTHctNdYIp8ewNXsQaoZFpJGJGvM8VSxSoHUnLBn0LowQtfVg7AaLO9NNqd4lKvehn0wBaGBTCJt91SKa44EzI-btY340oVyy1YOMXJm0BQPTfNO_zN2MOZvBHuoLdKCM-hzfwbwTfBQgbnXmifmQc7IPuKnAfkYU8BuY9nsZsbHmdwRKOsFYQZO-WF1mfOck7XugTF_sJ71Ld8xY",
    type: "studio"
  },
  {
    id: "the-gaze",
    title: "The Gaze: Deconstructing Desire",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2cGCOzAgVM-w6OMoPIPMmdHmpk8QAKkW_khCw3E1jg-XPn_yKhHMO7LW5Ym2zhSQs_3PaxF5-F7y1vEPcjHhprTVQhYjr74zD85Gb5ExInOhw1Ql03RH8BuL6oDqDdf7POPQPtl5vtL7YSbTzJdoOWQMmwLmxvCp8VEZaWbPUj0mqCtKKTLek4-WVD9P6rkoChesFJKumtXZHyCekWY44tlehYbXRBa87YzmoKQq7MZqPATF78p7efXCm4cMOVaEqNHuNKnVayXA",
    type: "masterclass"
  },
  {
    id: "solo-presence",
    title: "Solo Presence",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDabeFn_29-LTWMfwWSC6CDcxQSLtm40vChiJ7JrKH3XQbRxGLxXviGVTluZox7QQwV8rRH3PzsrqP60PaTGhDefHRIQGOehnxCu1Ik-AxsTrJpPTLGDfKa9c4efTQZclsG4spb7SjDNFA1WR4G2GdV0s5wnWRO1-QEQBhxxnpWBPFw3xiTzQ1JTuYqNd0hEsPSSF1bfpXiFk7EHY_AT3ex0TLmoeHz2GjgJDommHoFPwVhORn7a4inN7mgx-XQqLUkXK15ogLJqmk",
    type: "ritual"
  },
  {
    id: "framing-reality",
    title: "Framing Reality",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4eFkkZCNazAqD8WsaFB84Eou_qigIL2cIXMYOZE2Nwl0DokzEfLjmdCV3YOYtm61uAgZ8DHipbTqvyw-X6_Mez4iBowws7LglJFPXKyACyuuFy6u4bqoBKRihWKsZwyl0td8ldND8lZakUqkDqkt7rK6qKnw_vfriKNmGekfsazyn9KTF2PvzLltkCAR50NekUbPmYcpL9RXpoElb0boVrVAI5MbnpCFmXhfPEJFT-cCaw4ZWkGG1swmfWQtZwbX1RASf7s0bc2c",
    type: "notes"
  },
  {
    id: "sensory-landscapes",
    title: "Sensory Landscapes",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkiMH2ng-PfAzedBN2Q33GblqQcN9WJmevbhLGchU6a7WQPFLSkUAK3_y8COJGdFw5aRwR1NgM7cZ_blkYilbS3itGYIh3XMjx0uHnM3CFaKrFEL0nlyJaZUetu9cJSDIhPnnd-PwHCrGVcWTanHGfUbUcWaju0wiegpJhCeZKLNTi2yHERtqU9EsIlX6Q0G0xmwbMFBROkSd73BztbfcAQWfRZxKWDvetQ4RwDBzI99g1QWY421IvftJ_gwRl-yVrw38MRgdeyYI",
    type: "series",
    episodes: "08 Episodes"
  },
  {
    id: "tactile-ethics",
    title: "Tactile Ethics",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG8OdIoORJwnjqGj2bT6oqcQHl-CTJNRlr3mfo4Og-lbHgLCQnyJPbGEGnKXkHvnc_SgJyMDTlTrEbip-nmpxq53fu6MAGXM-I1ok1qSQgVgojiUR_v79B58qTgdmnCJRQSSAC4G6CwrB_-T9rIKpmLHp10uV2WEb6qWDKIGFIc3coeV0T-z83u6_IieisWFQLXeI06cUY3N_76HbD0xBUzCVqkbi0h3kjqxTKFBrSqRoEg7n9cjYfGL1viBNsxx4qOcrjAmvlkTA",
    type: "studio"
  }
];

function HomeContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) setSearchQuery(q);
  }, [searchParams]);

  const filteredVideos = useMemo(() => {
    return ALL_VIDEOS.filter(video => {
      const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || video.type === activeCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="flex-1 lg:ml-64 px-4 md:px-8 py-8 pb-32">
      <Header onSearch={setSearchQuery} />

      {!searchQuery && activeCategory === 'All' && (
        <section className="relative h-[500px] flex items-center px-8 md:px-16 overflow-hidden rounded-3xl mb-12 group">
          <div className="absolute inset-0 z-0">
            <Image
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfC9iCyNHa5zpoe3aIioU9QSySkGo3FBL2wHUH3Nu4A7rZue6N8NEXHTEdc_yAlr9CIPl33-2oznYdpcWq5rOQBP4Pu410nPSIY3kXp2oDnoWyN9G3sV6LTYuAAW0iAX57Ez1AD49Kn4x-hANB6uJ1nogOVKktOAGmS1CdgdBI9nAv8t4xAVystud7Mrx3poOfb_KRlOf8n_2FpWVruK3SyYinR5pZYzm-YgaAiuulJjrkxPOFhKabTQin70zp-VnVDrnNErytnYg"
              alt="RAW Background"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Manifesto 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white uppercase">
              DECONSTRUCTING <br/> THE GAZE.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md font-medium">
              A cinematic rebellion against standardized industry norms. Enter a new era of authentic human connection.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/categories">
                <Button size="lg" variant="primary">Start Watching</Button>
              </Link>
              <Link href="/manifesto">
                <Button size="lg" variant="secondary">The Manifesto</Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <nav className="flex overflow-x-auto no-scrollbar gap-2 mb-10">
        {['All', 'Series', 'Dialogue', 'Studio', 'Ritual', 'Masterclass', 'Notes'].map((label) => (
          <button
            key={label}
            onClick={() => setActiveCategory(label)}
            className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
              activeCategory === label
                ? 'bg-white text-black border-white'
                : 'bg-surface-high text-on-surface-variant border-white/5 hover:bg-surface-highest hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      <section>
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-xl font-bold text-white uppercase tracking-tight">
             {searchQuery ? `Search Results for "${searchQuery}"` : activeCategory === 'All' ? 'Trending Now' : activeCategory}
           </h2>
        </div>

        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                {...video}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-16 h-16 rounded-full bg-surface-high flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-surface-variant">search_off</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No transmissions found</h3>
            <p className="text-on-surface-variant max-w-xs">Adjust your search or category filters to find more content.</p>
            <Button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} variant="ghost" className="mt-4 underline">Clear all filters</Button>
          </div>
        )}
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-on-surface flex flex-col">
      <Suspense fallback={<div className="bg-background min-h-screen" />}>
        <Header />
        <div className="flex pt-16">
          <Sidebar />
          <HomeContent />
        </div>
      </Suspense>
      <MobileNav />
    </div>
  );
}
