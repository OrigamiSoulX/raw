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
    subtitle: "A thoughtful exploration of empathy and physical presence.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCFARUCFOQjbkOPACYd0tL-TXTVrb7j6ltmq6S3I3ksXCG0hk43QDN7NBBY7QacBjvc10oKlVfcvQe_fw4ygFNL5_kn_3IjHL1kDj7_PJ1KEojzgK9kW-FAXrEwrs1h8HEkacIwR_gNJ9-RTM1SvLH5O9Se3uFbDQwAkpVxRh7d48AlYN8X7bUljbB2rp4KIhkXMGU6gRV3dzDmyQ6MjYLHnugq7panRJ5iw3OjXB7LYMOzazpWIDa3OTOhNeKlMLIPQ513D9HFPg",
    type: "Real Connections",
    episodes: "Series",
    duration: "42:15"
  },
  {
    id: "radical-vulnerability",
    title: "Radical Vulnerability",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5r_UdWp7bjbrq_OlLxzgkQxcXnZMNCnmBPByN0aP0EH7u7qK_YdHFV2ckhrWk6jZMUCsJtUuk85dODgS0ucdsF08tfrOmSQhb0GY1LrWCCceRNqYuK7ns0XeQGBy73oWysjH0PQlFJYt9lpK8HT4vDU2pLPD_IIo4mTsIwZceJI7u6ClvQ6cFYmS_NtuszxBNc2DmJPEQKE8uYHBGqTMJJRgooD6icYGLdIemozHeDMO6sE3jo3umO3GK69DkhPrL08E3oDAt1zc",
    type: "Shared Pleasures",
    duration: "18:40"
  },
  {
    id: "motion-flow",
    title: "Motion & Flow",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3H4wAnwaChikNQUefXGs-m-BKPbylvPsCv11Lx1wOo-Ztw4dpfDBvofXVZdeTHctNdYIp8ewNXsQaoZFpJGJGvM8VSxSoHUnLBn0LowQtfVg7AaLO9NNqd4lKvehn0wBaGBTCJt91SKa44EzI-btY340oVyy1YOMXJm0BQPTfNO_zN2MOZvBHuoLdKCM-hzfwbwTfBQgbnXmifmQc7IPuKnAfkYU8BuY9nsZsbHmdwRKOsFYQZO-WF1mfOck7XugTF_sJ71Ld8xY",
    type: "Body Truths",
    duration: "12:05"
  },
  {
    id: "the-gaze",
    title: "The Gaze: Deconstructing Desire",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2cGCOzAgVM-w6OMoPIPMmdHmpk8QAKkW_khCw3E1jg-XPn_yKhHMO7LW5Ym2zhSQs_3PaxF5-F7y1vEPcjHhprTVQhYjr74zD85Gb5ExInOhw1Ql03RH8BuL6oDqDdf7POPQPtl5vtL7YSbTzJdoOWQMmwLmxvCp8VEZaWbPUj0mqCtKKTLek4-WVD9P6rkoChesFJKumtXZHyCekWY44tlehYbXRBa87YzmoKQq7MZqPATF78p7efXCm4cMOVaEqNHuNKnVayXA",
    type: "Slow Presence",
    duration: "58:30"
  },
  {
    id: "solo-presence",
    title: "Solo Presence",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDabeFn_29-LTWMfwWSC6CDcxQSLtm40vChiJ7JrKH3XQbRxGLxXviGVTluZox7QQwV8rRH3PzsrqP60PaTGhDefHRIQGOehnxCu1Ik-AxsTrJpPTLGDfKa9c4efTQZclsG4spb7SjDNFA1WR4G2GdV0s5wnWRO1-QEQBhxxnpWBPFw3xiTzQ1JTuYqNd0hEsPSSF1bfpXiFk7EHY_AT3ex0TLmoeHz2GjgJDommHoFPwVhORn7a4inN7mgx-XQqLUkXK15ogLJqmk",
    type: "Solo Rituals",
    duration: "25:10"
  },
  {
    id: "framing-reality",
    title: "Framing Reality",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4eFkkZCNazAqD8WsaFB84Eou_qigIL2cIXMYOZE2Nwl0DokzEfLjmdCV3YOYtm61uAgZ8DHipbTqvyw-X6_Mez4iBowws7LglJFPXKyACyuuFy6u4bqoBKRihWKsZwyl0td8ldND8lZakUqkDqkt7rK6qKnw_vfriKNmGekfsazyn9KTF2PvzLltkCAR50NekUbPmYcpL9RXpoElb0boVrVAI5MbnpCFmXhfPEJFT-cCaw4ZWkGG1swmfWQtZwbX1RASf7s0bc2c",
    type: "Deconstruction Notes",
    duration: "14:20"
  }
];

interface HomeContentProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

function HomeContent({ searchQuery, setSearchQuery }: HomeContentProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVideos = useMemo(() => {
    return ALL_VIDEOS.filter(video => {
      const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || video.type === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="flex-1 lg:ml-60 px-4 md:px-8 py-6 pb-32">
      {!searchQuery && activeCategory === 'All' && (
        <section className="relative h-[400px] flex items-center px-8 md:px-12 overflow-hidden rounded-3xl mb-10 bg-gray-50 border border-gray-100 group">
          <div className="absolute inset-0 z-0">
            <Image
              fill
              className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfC9iCyNHa5zpoe3aIioU9QSySkGo3FBL2wHUH3Nu4A7rZue6N8NEXHTEdc_yAlr9CIPl33-2oznYdpcWq5rOQBP4Pu410nPSIY3kXp2oDnoWyN9G3sV6LTYuAAW0iAX57Ez1AD49Kn4x-hANB6uJ1nogOVKktOAGmS1CdgdBI9nAv8t4xAVystud7Mrx3poOfb_KRlOf8n_2FpWVruK3SyYinR5pZYzm-YgaAiuulJjrkxPOFhKabTQin70zp-VnVDrnNErytnYg"
              alt="Friendly Background"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
          </div>

          <div className="relative z-10 max-w-xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/10">
               <span className="text-[10px] font-bold uppercase tracking-widest text-primary">New Collective Experience</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-on-background">
              Welcome to the <br/> friendly side of cinema.
            </h1>
            <p className="text-on-surface-variant text-base max-w-sm font-medium leading-relaxed">
              Curated, ethical, and high-quality storytelling for a conscious community.
            </p>
            <div className="flex gap-3 pt-2">
              <Link href="/categories">
                <Button size="md" variant="primary">Start Exploring</Button>
              </Link>
              <Link href="/manifesto">
                <Button size="md" variant="secondary">Our Mission</Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <nav className="flex overflow-x-auto no-scrollbar gap-2 mb-8">
        {['All', 'Real Connections', 'Body Truths', 'Solo Rituals', 'Shared Pleasures', 'Slow Presence', 'Deconstruction Notes'].map((label) => (
          <button
            key={label}
            onClick={() => setActiveCategory(label)}
            className={`flex-shrink-0 px-5 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeCategory === label
                ? 'bg-primary text-white border-primary soft-shadow'
                : 'bg-white text-on-surface-variant border-gray-100 hover:border-gray-200 hover:text-on-surface'
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      <section>
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-lg font-bold text-on-background tracking-tight">
             {searchQuery ? `Searching for "${searchQuery}"` : activeCategory === 'All' ? 'Discover Transmissions' : `Topic: ${activeCategory}`}
           </h2>
        </div>

        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                {...video}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
              <span className="material-symbols-outlined text-on-surface-variant">search_off</span>
            </div>
            <h3 className="text-lg font-bold text-on-background mb-1">No results found</h3>
            <p className="text-on-surface-variant text-sm max-w-xs">We couldn&apos;t find any transmissions matching your parameters.</p>
            <Button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} variant="ghost" className="mt-4 text-xs underline">Clear filters</Button>
          </div>
        )}
      </section>
    </div>
  );
}

function HomeWrapper() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const q = searchParams.get('q') || '';
    setSearchQuery(q);
  }, [searchParams]);

  return (
    <div className="bg-background min-h-screen text-on-background flex flex-col">
      <Header onSearch={setSearchQuery} />
      <div className="flex pt-16">
        <Sidebar />
        <HomeContent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <MobileNav />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="bg-background min-h-screen" />}>
      <HomeWrapper />
    </Suspense>
  );
}
