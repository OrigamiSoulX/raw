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

  const [isPlaying, setIsPlaying] = useState(false);

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
    <div className="bg-surface-container-lowest min-h-screen text-on-surface">
      <Header />
      <main className="pt-24 pb-20 px-4 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Video Content Area */}
        <div className="lg:col-span-8 space-y-10">
          {/* Cinematic Player */}
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative group aspect-video w-full rounded-xl overflow-hidden bg-black shadow-[0_0_50px_rgba(0,0,0,1)] cursor-pointer"
          >
            <Image
              fill
              className={`object-cover transition-all duration-700 ${isPlaying ? 'opacity-100 scale-100' : 'opacity-60 scale-105'}`}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLkHWlVcCDuDkh6_c03NwAkeSVwtFMpct40YqXCxEimrEOM-R5m1eB9aNIN5sz06_gFK5qnHhaX-QtN59cT9Yg8xslAUnJov0ToojiSVqQRab053_fduRRdGRF3yA1RBfS5gQgzjMN19F-PbWUdlpD5fy8PKYGtVvVO5jXSren3gET3abWGrtylpQLDIgM-zcJTESz-d7ag-Cvgm0DZ2RKSRuNF4CjLMy9BdCwGyPqzvQ3r2umFCYzbqt2284TJaCNZWN1gfK_l0g"
              alt="Video Thumbnail"
            />

            {/* Center Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-24 h-24 rounded-full bg-primary/20 backdrop-blur-md border border-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                   <span className="material-symbols-outlined text-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
              </div>
            )}
            {/* Player Overlays */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white">
                  <span className="text-xs font-bold tracking-widest uppercase">Series: The Art of Intimacy</span>
                </div>
                <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-all text-white">
                  <span className="material-symbols-outlined">settings</span>
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-white/20 rounded-full relative overflow-hidden cursor-pointer">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-primary shadow-[0_0_10px_#ff7cf5] rounded-full"></div>
                </div>
                {/* Controls */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-8">
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
                      className="hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {isPlaying ? 'pause' : 'play_arrow'}
                      </span>
                    </button>
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>skip_next</span></button>
                    <span className="text-sm font-medium tracking-tight text-white/70">12:44 / 45:00</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">closed_caption</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary">fullscreen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter leading-tight mb-2 text-white uppercase">
                {id.replace(/-/g, ' ')}
              </h1>
              <p className="text-on-surface-variant text-lg">Exploring the spatial dynamics and sensory psychological foundations of connection.</p>

              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-2 bg-surface-container-high rounded-full p-1 border border-white/5">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${hasLiked ? 'bg-primary text-black' : 'hover:bg-white/10 text-white'}`}
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: hasLiked ? "'FILL' 1" : "'FILL' 0" }}>thumb_up</span>
                    <span className="text-sm font-bold">{likes}</span>
                  </button>
                  <div className="w-px h-6 bg-white/10"></div>
                  <button
                    onClick={handleDislike}
                    className={`flex items-center px-4 py-2 rounded-full transition-all ${hasDisliked ? 'bg-zinc-700 text-white' : 'hover:bg-white/10 text-white'}`}
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: hasDisliked ? "'FILL' 1" : "'FILL' 0" }}>thumb_down</span>
                  </button>
                </div>

                <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-surface-container-high text-white hover:bg-white/10 transition-all border border-white/5">
                  <span className="material-symbols-outlined">share</span>
                  <span className="text-sm font-bold uppercase tracking-widest">Share</span>
                </button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 px-6 py-4 rounded-xl">
                <span className="material-symbols-outlined text-primary neon-glow-text" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <div>
                  <div className="text-[10px] font-black tracking-widest text-primary uppercase">Expert Endorsed</div>
                  <div className="text-sm font-bold text-white uppercase">Vetted by Experts</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sexologist Insights Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-black tracking-tighter uppercase text-primary">Sexologist Insights</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
            <div className="p-8 rounded-xl bg-surface-container border border-primary/20 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full border-2 border-primary overflow-hidden">
                  <Image
                    fill
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgw4bDccq47rzVIeht2uyowM31dzGKJmT8Ia18iLPtBhCZ2t96w2TKf4hqbUw3fu5q57xaCLqt_FjQHxncmw4seXIIHJDJH6Ob2ZJr7MrIWF1CkqVXFHQTGuoET9ZRImb7xa58Lib_JtF8YMon_y4joungKXYKHfu47pD1_t5aF9RJP9pnEMfl6Diri8pnksYr7uJWRtNg5i0yihtXkNqNO1HvK1cifP82sYXpGckL8JVnZmjdE90ycbCHzvGwuFTdfR5KNbs4kvc"
                    alt="Dr. Aris Thorne"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">Dr. Aris Thorne</h4>
                  <p className="text-xs font-medium text-primary uppercase tracking-widest">Clinical Sexologist • 12 years exp.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-on-surface italic">
                &quot;The synthesis of visual cues and somatic response explored at 08:24 is a breakthrough in digital education. RAW has successfully translated clinical frameworks into high-art cinematic experiences that bypass traditional learning barriers.&quot;
              </p>
            </div>
          </section>

          {/* Comments Section */}
          <section className="space-y-8 pt-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black tracking-tighter uppercase text-white">The Underground Dialogue</h2>
              <span className="text-zinc-500 font-bold text-sm uppercase tracking-widest">{comments.length} Contributions</span>
            </div>

            <form onSubmit={handlePostComment} className="flex gap-4 mb-12">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-500">A</div>
              <div className="flex-1 space-y-4">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-white placeholder-zinc-700 py-3 px-0 text-lg transition-all"
                  placeholder="Contribute to the dialogue..."
                ></textarea>
                <div className="flex justify-end">
                  <Button type="submit" variant="primary" size="sm" disabled={!commentText.trim()}>Post Insight</Button>
                </div>
              </div>
            </form>

            <div className="space-y-10">
              {comments.map((comment, idx) => (
                <div key={idx} className={`flex gap-4 ${comment.expert ? 'bg-primary/5 p-6 rounded-xl border border-primary/20' : ''}`}>
                  <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold ${comment.expert ? 'bg-primary text-black' : 'bg-zinc-800 text-zinc-500'}`}>
                    {comment.user[comment.user.startsWith('@') ? 1 : 4]}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className={`font-bold uppercase text-xs tracking-widest ${comment.expert ? 'text-primary' : 'text-white'}`}>
                        {comment.user} {comment.expert && '• EXPERT'}
                      </span>
                      <span className="text-[10px] text-zinc-600 font-black">{comment.time}</span>
                    </div>
                    <p className={`leading-relaxed ${comment.expert ? 'text-white italic' : 'text-on-surface-variant'}`}>{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar: Next in Series */}
        <aside className="lg:col-span-4 space-y-10">
          <div className="glass-panel p-8 rounded-xl border border-white/5 space-y-8 sticky top-28">
            <h3 className="text-xl font-black tracking-tighter uppercase text-white mb-6">Next in Series</h3>
            <div className="flex flex-col gap-6">
              <VideoCard
                id="sensory-map"
                title="The Sensory Map: Navigating Physical Response"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBKyv0xemXCV69VVbMNGG5Lu23vJd1N_k0k2JVSVgbnUbiPHveuEh3BS3SPsVI53WLaYftA24UzksQwLhL6vcMlJRQnqZn-9VR-B4EKkzHPQxtyNb1okFGoJ_VJg7HpkThkkHG6emca30L1IiSCal2q_Le0RHLm5Y-JqHUHw5wQZ9iL7Uq6Rv9VVT_ALrYTHfHQ_WsfX-EAwdjH4gYhbj0DUVko7mUUhpYD2DXjEInfTlM-I-NTCOe1DAwp0cPEI9s4DJKPwrnFhrE"
                type="series"
                duration="38 MIN"
                rating="4.9"
                layout="horizontal"
              />
              <VideoCard
                id="communicative-flow"
                title="Communicative Flow: Beyond Verbality"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB-VMl5xKBE1Tm0Vsw610mJaegE4840F1SQThvs2fciyjQQdIE6zXszcktghuEhgw0ZjsGX1SXBZt-cQ_vvOxhzDMrYgIVd_h5viH1sLzq_M_Gc7tv3eGQZQh0-wmG6OS-G5s4ia4jQ4ow0HOleOG_Sge7HCwGJ3fFKOPsP95hsjlVzoqCz4NHccgB4GszG9YhNs6btDVXPoJMrnxeR6rmbOjq6kAbxajje5jjIkR1AYb1uSfIERnBOfRnF79nZpbH7tcDIFTNMM3g"
                type="series"
                duration="42 MIN"
                rating="LOCKED"
                layout="horizontal"
              />
            </div>

            <div className="pt-8 border-t border-white/5">
              <Button fullWidth variant="secondary">Upgrade to Pro</Button>
            </div>
          </div>
        </aside>
      </main>
      <MobileNav />
    </div>
  );
}
