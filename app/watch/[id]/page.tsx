'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Button from '@/components/Button';
import VideoCard from '@/components/VideoCard';
import Image from 'next/image';
import { use, useState } from 'react';

interface Comment {
  user: string;
  time: string;
  content: string;
  expert?: boolean;
}

export default function VideoPlayer({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [likes, setLikes] = useState(1242);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [comments, setComments] = useState<Comment[]>([
    {
      user: 'Dr. Julianne Voss',
      time: '2H AGO',
      content: "This video perfectly captures the 'resonance gap' we often see in modern couples. Highly recommend looking at the 4:12 mark for the specific exercise on eye contact.",
      expert: true
    },
    {
      user: '@RetroVibe_99',
      time: '5H AGO',
      content: "The production quality of this series is insane. RAW really is doing something different."
    }
  ]);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
      if (hasDisliked) setHasDisliked(false);
    }
  };

  const handleDislike = () => {
    if (hasDisliked) {
      setHasDisliked(false);
    } else {
      setHasDisliked(true);
      if (hasLiked) {
        setLikes(likes - 1);
        setHasLiked(false);
      }
    }
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: Comment = {
      user: '@Anonymous_Soul',
      time: 'JUST NOW',
      content: commentText
    };

    setComments([newComment, ...comments]);
    setCommentText('');
  };

  return (
    <div className="bg-background min-h-screen text-on-background flex flex-col">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 lg:ml-60 px-4 md:px-8 py-8 pb-32 max-w-[1800px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8">

          {/* Main Video Area */}
          <div className="xl:col-span-8 space-y-8">

            {/* Minimalist Player */}
            <div
              onClick={() => setIsPlaying(!isPlaying)}
              className="relative aspect-video w-full rounded-3xl overflow-hidden bg-gray-100 soft-shadow cursor-pointer group border-4 border-white"
            >
              <Image
                fill
                priority
                className={`object-cover transition-all duration-700 ${isPlaying ? 'opacity-100 scale-100' : 'opacity-80 scale-105'}`}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLkHWlVcCDuDkh6_c03NwAkeSVwtFMpct40YqXCxEimrEOM-R5m1eB9aNIN5sz06_gFK5qnHhaX-QtN59cT9Yg8xslAUnJov0ToojiSVqQRab053_fduRRdGRF3yA1RBfS5gQgzjMN19F-PbWUdlpD5fy8PKYGtVvVO5jXSren3gET3abWGrtylpQLDIgM-zcJTESz-d7ag-Cvgm0DZ2RKSRuNF4CjLMy9BdCwGyPqzvQ3r2umFCYzbqt2284TJaCNZWN1gfK_l0g"
                alt="Cinema Content"
              />

              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center transition-transform group-hover:scale-110 soft-shadow">
                     <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
              )}

              {/* Minimal Controls */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/40 to-transparent flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="w-full h-1.5 bg-white/20 rounded-full relative overflow-hidden cursor-pointer">
                    <div className="absolute top-0 left-0 h-full w-1/3 bg-primary soft-glow" />
                 </div>
                 <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-6">
                       <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">{isPlaying ? 'pause' : 'play_arrow'}</span>
                       <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">volume_up</span>
                       <span className="text-xs font-bold tracking-widest uppercase">12:44 / 45:00</span>
                    </div>
                    <div className="flex items-center gap-6">
                       <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">closed_caption</span>
                       <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">fullscreen</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Video Header */}
            <div className="space-y-6 bg-white p-8 rounded-[2rem] soft-shadow border border-gray-50">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-2">
                  <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-background">
                    {id.replace(/-/g, ' ').toUpperCase()}
                  </h1>
                  <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                    <span>142K Views</span>
                    <span>•</span>
                    <span>March 2026</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-gray-50 rounded-full p-1 border border-gray-100">
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all ${hasLiked ? 'bg-primary text-white soft-shadow' : 'hover:bg-gray-200 text-on-surface-variant'}`}
                    >
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: hasLiked ? "'FILL' 1" : "'FILL' 0" }}>thumb_up</span>
                      <span className="text-xs font-bold">{likes}</span>
                    </button>
                    <div className="w-px h-5 bg-gray-200 mx-1" />
                    <button
                      onClick={handleDislike}
                      className={`flex items-center px-4 py-2.5 rounded-full transition-all ${hasDisliked ? 'bg-on-background text-white' : 'hover:bg-gray-200 text-on-surface-variant'}`}
                    >
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: hasDisliked ? "'FILL' 1" : "'FILL' 0" }}>thumb_down</span>
                    </button>
                  </div>

                  <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-50 text-on-background hover:bg-gray-200 transition-all border border-gray-100 font-bold text-xs uppercase tracking-widest">
                    <span className="material-symbols-outlined text-[18px]">share</span>
                    Share
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary font-black border border-primary/10">
                    RAW
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-background uppercase tracking-widest">RAW Studio</h4>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase">2.4M Souls Verified</p>
                  </div>
                  <Button size="sm" variant="outline" className="ml-4 rounded-full px-8">Subscribe</Button>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-on-surface-variant text-base leading-relaxed max-w-4xl font-medium">
                  Exploring the spatial dynamics and sensory psychological foundations of connection.
                  This transmission investigates the limbic resonance between human entities in a post-digital environment.
                </p>
              </div>
            </div>

            {/* Expert Insight Card */}
            <section className="bg-blue-50/50 rounded-[2rem] p-8 border border-primary/10 relative overflow-hidden group">
              <div className="relative z-10 flex items-center gap-6 mb-6">
                <div className="relative w-16 h-16 rounded-2xl border-2 border-white overflow-hidden bg-white soft-shadow">
                  <Image
                    fill
                    className="object-cover transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgw4bDccq47rzVIeht2uyowM31dzGKJmT8Ia18iLPtBhCZ2t96w2TKf4hqbUw3fu5q57xaCLqt_FjQHxncmw4seXIIHJDJH6Ob2ZJr7MrIWF1CkqVXFHQTGuoET9ZRImb7xa58Lib_JtF8YMon_y4joungKXYKHfu47pD1_t5aF9RJP9pnEMfl6Diri8pnksYr7uJWRtNg5i0yihtXkNqNO1HvK1cifP82sYXpGckL8JVnZmjdE90ycbCHzvGwuFTdfR5KNbs4kvc"
                    alt="Expert"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-on-background flex items-center gap-2">
                     Dr. Aris Thorne
                     <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </h4>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Clinical Sexologist • Approved Guide</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-on-background font-medium italic opacity-90">
                &quot;The synthesis of visual cues and somatic response explored here is a breakthrough. RAW has successfully translated clinical frameworks into high-art cinematic experiences.&quot;
              </p>
            </section>

            {/* Dialogue / Comments */}
            <section className="space-y-8 pt-6">
              <h2 className="text-xl font-bold text-on-background tracking-tight">{comments.length} Contributions</h2>

              <form onSubmit={handlePostComment} className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center font-bold text-on-surface-variant flex-shrink-0">A</div>
                <div className="flex-1 space-y-4">
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full bg-white border border-gray-100 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary/20 text-on-background placeholder-on-surface-variant py-4 px-6 text-base transition-all soft-shadow min-h-[120px]"
                    placeholder="Contribute your thoughts to the dialogue..."
                  ></textarea>
                  <div className="flex justify-end gap-3">
                    <Button type="button" onClick={() => setCommentText('')} variant="ghost" size="sm">Cancel</Button>
                    <Button type="submit" variant="primary" size="md" disabled={!commentText.trim()} className="rounded-full px-8">Post Insight</Button>
                  </div>
                </div>
              </form>

              <div className="space-y-8">
                {comments.map((comment, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-sm soft-shadow transition-transform group-hover:scale-105 ${comment.expert ? 'bg-primary text-white' : 'bg-white text-on-surface-variant border border-gray-100'}`}>
                      {comment.user[comment.user.startsWith('@') ? 1 : 0]}
                    </div>
                    <div className="space-y-2 flex-1 min-w-0 bg-white p-6 rounded-3xl soft-shadow border border-gray-50">
                      <div className="flex items-center gap-3">
                        <span className={`font-bold text-xs uppercase tracking-widest ${comment.expert ? 'text-primary' : 'text-on-background'}`}>
                          {comment.user}
                        </span>
                        <span className="text-[10px] text-on-surface-variant font-bold uppercase">{comment.time}</span>
                      </div>
                      <p className={`text-base leading-relaxed font-medium ${comment.expert ? 'text-on-background italic' : 'text-on-surface-variant'}`}>{comment.content}</p>
                      <div className="flex items-center gap-6 pt-2">
                         <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
                           <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                           <span className="text-[10px] font-bold">12</span>
                         </button>
                         <button className="text-on-surface-variant hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Up Next Sidebar */}
          <aside className="xl:col-span-4 space-y-6">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-4 px-2">Next in Series</h3>
            <div className="flex flex-col gap-4">
              <VideoCard
                id="sensory-map"
                title="The Sensory Map: Navigating Physical Response"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBKyv0xemXCV69VVbMNGG5Lu23vJd1N_k0k2JVSVgbnUbiPHveuEh3BS3SPsVI53WLaYftA24UzksQwLhL6vcMlJRQnqZn-9VR-B4EKkzHPQxtyNb1okFGoJ_VJg7HpkThkkHG6emca30L1IiSCal2q_Le0RHLm5Y-JqHUHw5wQZ9iL7Uq6Rv9VVT_ALrYTHfHQ_WsfX-EAwdjH4gYhbj0DUVko7mUUhpYD2DXjEInfTlM-I-NTCOe1DAwp0cPEI9s4DJKPwrnFhrE"
                type="Educational"
                duration="38:12"
                layout="horizontal"
              />
              <VideoCard
                id="communicative-flow"
                title="Communicative Flow: Beyond Verbality"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB-VMl5xKBE1Tm0Vsw610mJaegE4840F1SQThvs2fciyjQQdIE6zXszcktghuEhgw0ZjsGX1SXBZt-cQ_vvOxhzDMrYgIVd_h5viH1sLzq_M_Gc7tv3eGQZQh0-wmG6OS-G5s4ia4jQ4ow0HOleOG_Sge7HCwGJ3fFKOPsP95hsjlVzoqCz4NHccgB4GszG9YhNs6btDVXPoJMrnxeR6rmbOjq6kAbxajje5jjIkR1AYb1uSfIERnBOfRnF79nZpbH7tcDIFTNMM3g"
                type="Educational"
                duration="42:45"
                layout="horizontal"
              />
              <VideoCard
                id="the-gaze"
                title="The Gaze: Deconstructing Desire"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB2cGCOzAgVM-w6OMoPIPMmdHmpk8QAKkW_khCw3E1jg-XPn_yKhHMO7LW5Ym2zhSQs_3PaxF5-F7y1vEPcjHhprTVQhYjr74zD85Gb5ExInOhw1Ql03RH8BuL6oDqDdf7POPQPtl5vtL7YSbTzJdoOWQMmwLmxvCp8VEZaWbPUj0mqCtKKTLek4-WVD9P6rkoChesFJKumtXZHyCekWY44tlehYbXRBa87YzmoKQq7MZqPATF78p7efXCm4cMOVaEqNHuNKnVayXA"
                type="Masterclass"
                duration="58:20"
                layout="horizontal"
              />
            </div>

            <div className="bg-primary rounded-3xl p-8 text-white space-y-4 soft-shadow mt-8">
               <h4 className="text-xl font-bold leading-tight">Deepen your exploration?</h4>
               <p className="text-sm font-medium opacity-90 leading-relaxed">Join RAW Pro to access the full curriculum and private community dialogue.</p>
               <Button className="w-full !bg-white !text-primary border-none shadow-xl">Join Now</Button>
            </div>
          </aside>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
