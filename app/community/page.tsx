'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image';
import Button from '@/components/Button';

export default function CommunityHub() {
  const threads = [
    { title: 'The Narrative of Desire in Post-Digital Cinema', posts: 156, likes: 422, hot: true },
    { title: 'Defining Boundaries in Virtual Intimacy', posts: 89, likes: 128, hot: false },
    { title: 'Tactile Ethics: A Workshop Discussion', posts: 214, likes: 560, hot: false },
  ];

  const dialogue = [
    {
      user: '@Velvet_Void',
      time: 'JUST NOW',
      content: "Just finished the 'Sensory Landscapes' module. The way it explores the connection between texture and psychological comfort is honestly life-changing. Anyone else feel this way?",
      expert: false
    },
    {
      user: 'Dr. Aris Thorne',
      time: '2H AGO',
      content: "@Velvet_Void, that connection is rooted in somatic grounding. When we engage with specific textures, we're essentially bypassing the critical mind to speak directly to the nervous system. It's a key pillar of our Ethics of Touch framework.",
      expert: true
    },
    {
      user: '@Neon_Ethics',
      time: '5H AGO',
      content: "The new Series on 'Digital Intimacy' just dropped. Let's start a sub-thread here for the first episode's discussion on ethical studio production.",
      expert: false
    },
  ];

  return (
    <div className="bg-background min-h-screen text-on-surface flex flex-col">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="lg:ml-64 flex-1 pt-8 px-6 md:px-12 pb-32">

          <header className="relative h-[300px] rounded-3xl overflow-hidden mb-12 flex items-center px-12 group">
             <Image
                fill
                className="object-cover opacity-30 transition-transform duration-1000 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOFtgkQPFpLdGhh3QL533X5HGNdSlGw-7JS4I1MI6nAPV3vDbUOJGXK_ruAQRVNqm9aGki5sHwgAvN5CcSH5ivQUtfFY4yGXjTPV_EME5j69Xe4uBMQoyZ6JtzjFd5uszeUSuUC5NUPXmv5Vpz9IQ6aYOa-MnxuvXrEICkx-Iw0pSG-jvtvasXJaBm1xUKhClw1UKp_8rzNQtoim1SE7FtOdvjw-lOyHUWNZKxMvcoMc3hGXuG-NbcrAOTzZBTaL9pb_X6plhC-sw"
                alt="Hub"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
             <div className="relative z-10 max-w-xl">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3 block">Underground Pulse</span>
                <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-4">Community <span className="text-primary italic">Hub</span></h1>
                <p className="text-on-surface-variant font-medium text-lg">A sanctuary for curated dialogue, where curiosity is celebrated and boundaries are sacred.</p>
             </div>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">

             <div className="xl:col-span-8 space-y-12">
                <section>
                   <div className="flex items-center justify-between mb-8">
                      <h2 className="text-xl font-bold text-white uppercase tracking-tight">Active Dialogue</h2>
                      <div className="flex gap-2">
                         <Button size="sm" variant="secondary">Recent</Button>
                         <Button size="sm" variant="ghost">Top</Button>
                      </div>
                   </div>

                   <div className="space-y-6">
                      {dialogue.map((post, idx) => (post.expert ? (
                        <div key={idx} className="bg-primary/5 border border-primary/20 rounded-3xl p-8 space-y-6">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-full premium-gradient p-0.5">
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden relative">
                                       <Image fill src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgw4bDccq47rzVIeht2uyowM31dzGKJmT8Ia18iLPtBhCZ2t96w2TKf4hqbUw3fu5q57xaCLqt_FjQHxncmw4seXIIHJDJH6Ob2ZJr7MrIWF1CkqVXFHQTGuoET9ZRImb7xa58Lib_JtF8YMon_y4joungKXYKHfu47pD1_t5aF9RJP9pnEMfl6Diri8pnksYr7uJWRtNg5i0yihtXkNqNO1HvK1cifP82sYXpGckL8JVnZmjdE90ycbCHzvGwuFTdfR5KNbs4kvc" alt="Dr Aris" />
                                    </div>
                                 </div>
                                 <div>
                                    <div className="flex items-center gap-2">
                                       <h4 className="font-bold text-white text-sm uppercase tracking-widest">{post.user}</h4>
                                       <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    </div>
                                    <p className="text-[10px] font-black text-primary uppercase">{post.time} • VERIFIED EXPERT</p>
                                 </div>
                              </div>
                           </div>
                           <p className="text-lg leading-relaxed text-white font-medium italic">&quot;{post.content.split(', ')[1] || post.content}&quot;</p>
                           <div className="flex items-center gap-6 pt-2">
                              <button className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors">
                                 <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                                 <span className="text-[10px] font-black uppercase">Agree</span>
                              </button>
                              <button className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors">
                                 <span className="material-symbols-outlined text-[18px]">reply</span>
                                 <span className="text-[10px] font-black uppercase">Deepen</span>
                              </button>
                           </div>
                        </div>
                      ) : (
                        <div key={idx} className="glass p-6 rounded-2xl space-y-4">
                           <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-surface-high border border-white/5 flex items-center justify-center font-bold text-xs text-on-surface-variant">
                                 {post.user[1]}
                              </div>
                              <div>
                                 <h4 className="font-bold text-white text-xs uppercase tracking-widest">{post.user}</h4>
                                 <p className="text-[9px] font-bold text-on-surface-variant uppercase">{post.time}</p>
                              </div>
                           </div>
                           <p className="text-sm leading-relaxed text-on-surface-variant font-medium">{post.content}</p>
                        </div>
                      )))}
                   </div>
                </section>
             </div>

             <aside className="xl:col-span-4 space-y-8">
                <section className="glass p-8 rounded-3xl space-y-6">
                   <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Discussion Nodes</h3>
                   <div className="space-y-4">
                      {threads.map((thread, idx) => (
                        <div key={idx} className="group cursor-pointer">
                           <div className="flex items-center gap-2 mb-2">
                              {thread.hot && <span className="text-[9px] font-black text-primary uppercase tracking-widest">Hot Signal</span>}
                              <span className="text-[9px] font-bold text-on-surface-variant uppercase">{thread.posts} Posts</span>
                           </div>
                           <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-2 leading-tight uppercase tracking-tight">
                              {thread.title}
                           </h4>
                           <div className="w-full h-px bg-white/5 mt-4" />
                        </div>
                      ))}
                   </div>
                   <Button variant="outline" size="sm" className="w-full">Create New Node</Button>
                </section>

                <div className="p-8 rounded-3xl premium-gradient relative overflow-hidden group">
                   <div className="relative z-10">
                      <h3 className="text-xl font-black text-black uppercase tracking-tight mb-2">Safe Space</h3>
                      <p className="text-black/80 text-xs font-bold leading-relaxed mb-6">Our community is moderated by verified clinical experts to ensure the highest standard of ethical interaction.</p>
                      <button className="bg-black text-white text-xs font-black px-6 py-3 rounded-full uppercase transition-transform group-hover:scale-105">
                         Read Policy
                      </button>
                   </div>
                   <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/20 blur-2xl rounded-full" />
                </div>
             </aside>

          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
