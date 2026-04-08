'use client';

import Header from '@/components/Header';
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
    <div className="bg-background min-h-screen text-on-surface">
      <Header />
      <main className="pt-24 pb-32 px-4 md:px-8 max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* Main Content (Left) */}
        <div className="lg:col-span-8 space-y-8">

          {/* Enhanced Player */}
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl cursor-pointer group"
          >
            <Image
              fill
              className={`object-cover transition-all duration-700 ${isPlaying ? 'opacity-100 scale-100' : 'opacity-60 scale-105'}`}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLkHWlVcCDuDkh6_c03NwAkeSVwtFMpct40YqXCxEimrEOM-R5m1eB9aNIN5sz06_gFK5qnHhaX-QtN59cT9Yg8xslAUnJov0ToojiSVqQRab053_fduRRdGRF3yA1RBfS5gQgzjMN19F-PbWUdlpD5fy8PKYGtVvVO5jXSren3gET3abWGrtylpQLDIgM-zcJTESz-d7ag-Cvgm0DZ2RKSRuNF4CjLMy9BdCwGyPqzvQ3r2umFCYzbqt2284TJaCNZWN1gfK_l0g"
              alt="Video Thumbnail"
            />

            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                   <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
              </div>
            )}

            {/* Custom Control Bar Overlay (Always Visible on Hover) */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="w-full h-1 bg-white/20 rounded-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-primary" />
               </div>
               <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-6">
                     <span className="material-symbols-outlined cursor-pointer hover:text-primary">{isPlaying ? 'pause' : 'play_arrow'}</span>
                     <span className="material-symbols-outlined cursor-pointer hover:text-primary">skip_next</span>
                     <span className="material-symbols-outlined cursor-pointer hover:text-primary">volume_up</span>
                     <span className="text-xs font-bold tracking-widest uppercase opacity-80">12:44 / 45:00</span>
                  </div>
                  <div className="flex items-center gap-6">
                     <span className="material-symbols-outlined cursor-pointer hover:text-primary">closed_caption</span>
                     <span className="material-symbols-outlined cursor-pointer hover:text-primary">fullscreen</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Video Info Section */}
          <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
              {id.replace(/-/g, ' ')}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full premium-gradient p-0.5">
                   <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <span className="text-primary font-black text-xs">RAW</span>
                   </div>
                </div>
                <div>
                   <h4 className="text-sm font-bold text-white uppercase tracking-widest">RAW Studios</h4>
                   <p className="text-[10px] text-on-surface-variant uppercase font-bold">2.4M Verified Souls</p>
                </div>
                <Button size="sm" variant="secondary" className="ml-4">Subscribe</Button>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-surface-high rounded-full p-1 border border-white/5">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all ${hasLiked ? 'bg-primary text-black' : 'hover:bg-white/5 text-white'}`}
                  >
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: hasLiked ? "'FILL' 1" : "'FILL' 0" }}>thumb_up</span>
                    <span className="text-xs font-black uppercase">{likes}</span>
                  </button>
                  <div className="w-px h-5 bg-white/10 mx-1" />
                  <button
                    onClick={handleDislike}
                    className={`flex items-center px-4 py-2 rounded-full transition-all ${hasDisliked ? 'bg-white text-black' : 'hover:bg-white/5 text-white'}`}
                  >
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: hasDisliked ? "'FILL' 1" : "'FILL' 0" }}>thumb_down</span>
                  </button>
                </div>

                <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-surface-high text-white hover:bg-white/5 transition-all border border-white/5">
                  <span className="material-symbols-outlined text-[20px]">share</span>
                  <span className="text-xs font-black uppercase tracking-widest">Share</span>
                </button>
              </div>
            </div>

            <div className="bg-surface-high rounded-2xl p-6 border border-white/5 space-y-4">
               <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white">
                  <span>142K Views</span>
                  <span>•</span>
                  <span>March 2026</span>
               </div>
               <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl font-medium">
                  Exploring the spatial dynamics and sensory psychological foundations of connection.
                  This transmission investigates the limbic resonance between human entities in a post-digital environment.
               </p>
               <Button variant="ghost" size="sm" className="p-0 h-auto font-black text-white hover:underline">Show More</Button>
            </div>
          </div>

          {/* Sexologist Insights */}
          <section className="bg-surface-high/50 rounded-2xl p-8 border-l-4 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 rounded-full border border-primary/30 overflow-hidden bg-black">
                <Image
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgw4bDccq47rzVIeht2uyowM31dzGKJmT8Ia18iLPtBhCZ2t96w2TKf4hqbUw3fu5q57xaCLqt_FjQHxncmw4seXIIHJDJH6Ob2ZJr7MrIWF1CkqVXFHQTGuoET9ZRImb7xa58Lib_JtF8YMon_y4joungKXYKHfu47pD1_t5aF9RJP9pnEMfl6Diri8pnksYr7uJWRtNg5i0yihtXkNqNO1HvK1cifP82sYXpGckL8JVnZmjdE90ycbCHzvGwuFTdfR5KNbs4kvc"
                  alt="Dr. Aris Thorne"
                />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-widest flex items-center gap-2">
                   Dr. Aris Thorne
                   <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </h4>
                <p className="text-[10px] font-black text-primary uppercase tracking-widest">Clinical Sexologist • Expert Insight</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-white font-medium italic opacity-90">
              &quot;The synthesis of visual cues and somatic response explored here is a breakthrough. RAW has successfully translated clinical frameworks into high-art cinematic experiences.&quot;
            </p>
          </section>

          {/* Comments Section */}
          <section className="space-y-8 pt-10">
            <h2 className="text-xl font-bold uppercase text-white tracking-tight">{comments.length} Contributions</h2>

            <form onSubmit={handlePostComment} className="flex gap-5">
              <div className="w-10 h-10 rounded-full bg-surface-high border border-white/5 flex items-center justify-center font-bold text-on-surface-variant">A</div>
              <div className="flex-1 space-y-4">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-white/10 focus:border-primary focus:ring-0 text-white placeholder-on-surface-variant py-2 px-0 text-base transition-all"
                  placeholder="Add a public contribution..."
                ></textarea>
                <div className="flex justify-end gap-3">
                  <Button type="button" onClick={() => setCommentText('')} variant="ghost" size="sm">Cancel</Button>
                  <Button type="submit" variant="primary" size="sm" disabled={!commentText.trim()}>Post</Button>
                </div>
              </div>
            </form>

            <div className="space-y-8">
              {comments.map((comment, idx) => (
                <div key={idx} className={`flex gap-5 transition-all`}>
                  <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm ${comment.expert ? 'bg-primary text-black' : 'bg-surface-high text-on-surface-variant border border-white/5'}`}>
                    {comment.user[comment.user.startsWith('@') ? 1 : 0]}
                  </div>
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className={`font-bold text-xs uppercase tracking-widest ${comment.expert ? 'text-primary' : 'text-white'}`}>
                        {comment.user} {comment.expert && '• EXPERT'}
                      </span>
                      <span className="text-[10px] text-on-surface-variant font-medium">{comment.time}</span>
                    </div>
                    <p className={`text-sm leading-relaxed font-medium ${comment.expert ? 'text-white italic' : 'text-on-surface-variant'}`}>{comment.content}</p>
                    <div className="flex items-center gap-4 mt-2">
                       <button className="text-on-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">thumb_up</span></button>
                       <button className="text-on-surface-variant hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Reply</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar: Queue (Right) */}
        <aside className="lg:col-span-4 space-y-6">
          <h3 className="text-sm font-black tracking-[0.2em] uppercase text-white mb-2">Next in Series</h3>
          <div className="flex flex-col gap-2">
            <VideoCard
              id="sensory-map"
              title="The Sensory Map: Navigating Physical Response"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBKyv0xemXCV69VVbMNGG5Lu23vJd1N_k0k2JVSVgbnUbiPHveuEh3BS3SPsVI53WLaYftA24UzksQwLhL6vcMlJRQnqZn-9VR-B4EKkzHPQxtyNb1okFGoJ_VJg7HpkThkkHG6emca30L1IiSCal2q_Le0RHLm5Y-JqHUHw5wQZ9iL7Uq6Rv9VVT_ALrYTHfHQ_WsfX-EAwdjH4gYhbj0DUVko7mUUhpYD2DXjEInfTlM-I-NTCOe1DAwp0cPEI9s4DJKPwrnFhrE"
              type="series"
              duration="38:12"
              rating="4.9"
              layout="horizontal"
            />
            <VideoCard
              id="communicative-flow"
              title="Communicative Flow: Beyond Verbality"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB-VMl5xKBE1Tm0Vsw610mJaegE4840F1SQThvs2fciyjQQdIE6zXszcktghuEhgw0ZjsGX1SXBZt-cQ_vvOxhzDMrYgIVd_h5viH1sLzq_M_Gc7tv3eGQZQh0-wmG6OS-G5s4ia4jQ4ow0HOleOG_Sge7HCwGJ3fFKOPsP95hsjlVzoqCz4NHccgB4GszG9YhNs6btDVXPoJMrnxeR6rmbOjq6kAbxajje5jjIkR1AYb1uSfIERnBOfRnF79nZpbH7tcDIFTNMM3g"
              type="series"
              duration="42:45"
              rating="LOCKED"
              layout="horizontal"
            />
            <VideoCard
              id="the-gaze"
              title="The Gaze: Deconstructing Desire"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB2cGCOzAgVM-w6OMoPIPMmdHmpk8QAKkW_khCw3E1jg-XPn_yKhHMO7LW5Ym2zhSQs_3PaxF5-F7y1vEPcjHhprTVQhYjr74zD85Gb5ExInOhw1Ql03RH8BuL6oDqDdf7POPQPtl5vtL7YSbTzJdoOWQMmwLmxvCp8VEZaWbPUj0mqCtKKTLek4-WVD9P6rkoChesFJKumtXZHyCekWY44tlehYbXRBa87YzmoKQq7MZqPATF78p7efXCm4cMOVaEqNHuNKnVayXA"
              type="masterclass"
              duration="58:20"
              layout="horizontal"
            />
          </div>
        </aside>
      </main>
      <MobileNav />
    </div>
  );
}
