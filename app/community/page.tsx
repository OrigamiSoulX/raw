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
    <div className="bg-background min-h-screen text-on-background flex flex-col">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="lg:ml-60 flex-1 pt-8 px-6 md:px-12 pb-32">

          <header className="relative h-[300px] rounded-[3rem] overflow-hidden mb-12 flex items-center px-12 group bg-blue-50 border-4 border-white soft-shadow">
             <Image
                fill
                priority
                className="object-cover opacity-20 transition-transform duration-1000 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOFtgkQPFpLdGhh3QL533X5HGNdSlGw-7JS4I1MI6nAPV3vDbUOJGXK_ruAQRVNqm9aGki5sHwgAvN5CcSH5ivQUtfFY4yGXjTPV_EME5j69Xe4uBMQoyZ6JtzjFd5uszeUSuUC5NUPXmv5Vpz9IQ6aYOa-MnxuvXrEICkx-Iw0pSG-jvtvasXJaBm1xUKhClw1UKp_8rzNQtoim1SE7FtOdvjw-lOyHUWNZKxMvcoMc3hGXuG-NbcrAOTzZBTaL9pb_X6plhC-sw"
                alt="Community Background"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
             <div className="relative z-10 max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3 block">Underground Pulse</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-on-background uppercase tracking-tight mb-4 leading-tight">Community <br/><span className="text-primary">Hub</span></h1>
                <p className="text-on-surface-variant font-medium text-lg leading-relaxed">A sanctuary for curated dialogue, where curiosity is celebrated and boundaries are sacred.</p>
             </div>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">

             <div className="xl:col-span-8 space-y-12">
                <section>
                   <div className="flex items-center justify-between mb-8">
                      <h2 className="text-xl font-bold text-on-background uppercase tracking-tight">Active Dialogue</h2>
                      <div className="flex gap-2">
                         <Button size="sm" variant="secondary" className="rounded-full px-6">Recent</Button>
                         <Button size="sm" variant="ghost" className="rounded-full px-6">Top</Button>
                      </div>
                   </div>

                   <div className="space-y-6">
                      {dialogue.map((post, idx) => (post.expert ? (
                        <div key={idx} className="bg-blue-50 border border-primary/10 rounded-[2.5rem] p-8 space-y-6 soft-shadow">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                 <div className="w-14 h-14 rounded-2xl bg-white border border-primary/20 soft-shadow p-1">
                                    <div className="w-full h-full rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden relative">
                                       <Image fill src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgw4bDccq47rzVIeht2uyowM31dzGKJmT8Ia18iLPtBhCZ2t96w2TKf4hqbUw3fu5q57xaCLqt_FjQHxncmw4seXIIHJDJH6Ob2ZJr7MrIWF1CkqVXFHQTGuoET9ZRImb7xa58Lib_JtF8YMon_y4joungKXYKHfu47pD1_t5aF9RJP9pnEMfl6Diri8pnksYr7uJWRtNg5i0yihtXkNqNO1HvK1cifP82sYXpGckL8JVnZmjdE90ycbCHzvGwuFTdfR5KNbs4kvc" alt="Expert" />
                                    </div>
                                 </div>
                                 <div>
                                    <div className="flex items-center gap-2">
                                       <h4 className="font-bold text-on-background text-sm uppercase tracking-widest">{post.user}</h4>
                                       <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    </div>
                                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{post.time} • VERIFIED EXPERT</p>
                                 </div>
                              </div>
                           </div>
                           <p className="text-lg leading-relaxed text-on-background font-medium italic">&quot;{post.content.split(', ')[1] || post.content}&quot;</p>
                           <div className="flex items-center gap-6 pt-2">
                              <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                                 <span className="material-symbols-outlined text-[20px]">thumb_up</span>
                                 <span className="text-[10px] font-bold uppercase tracking-widest">Agree</span>
                              </button>
                              <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                                 <span className="material-symbols-outlined text-[20px]">reply</span>
                                 <span className="text-[10px] font-bold uppercase tracking-widest">Deepen</span>
                              </button>
                           </div>
                        </div>
                      ) : (
                        <div key={idx} className="bg-white border border-gray-100 p-8 rounded-3xl space-y-4 soft-shadow">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center font-bold text-xs text-on-surface-variant soft-shadow">
                                 {post.user[1]}
                              </div>
                              <div>
                                 <h4 className="font-bold text-on-background text-xs uppercase tracking-widest">{post.user}</h4>
                                 <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">{post.time}</p>
                              </div>
                           </div>
                           <p className="text-base leading-relaxed text-on-surface-variant font-medium">{post.content}</p>
                           <div className="flex items-center gap-6 pt-2">
                              <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                                 <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                              </button>
                              <button className="text-[10px] font-bold text-on-surface-variant hover:text-primary uppercase tracking-widest">Reply</button>
                           </div>
                        </div>
                      )))}
                   </div>
                </section>
             </div>

             <aside className="xl:col-span-4 space-y-8">
                <section className="bg-white p-8 rounded-[2.5rem] space-y-8 soft-shadow border border-gray-50">
                   <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">Discussion Nodes</h3>
                   <div className="space-y-6">
                      {threads.map((thread, idx) => (
                        <div key={idx} className="group cursor-pointer">
                           <div className="flex items-center gap-2 mb-2">
                              {thread.hot && <span className="text-[9px] font-bold text-primary uppercase tracking-widest px-2 py-0.5 bg-primary/5 rounded">Hot Signal</span>}
                              <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">{thread.posts} Posts</span>
                           </div>
                           <h4 className="text-sm font-bold text-on-background group-hover:text-primary transition-colors line-clamp-2 leading-tight uppercase tracking-tight">
                              {thread.title}
                           </h4>
                           <div className="w-full h-px bg-gray-50 mt-6" />
                        </div>
                      ))}
                   </div>
                   <Button variant="outline" size="sm" className="w-full rounded-full font-bold">Create New Node</Button>
                </section>

                <div className="p-10 rounded-[3rem] bg-primary text-white relative overflow-hidden group soft-shadow">
                   <div className="relative z-10 space-y-6">
                      <h3 className="text-2xl font-extrabold uppercase tracking-tight">Safe Space</h3>
                      <p className="text-white/90 text-sm font-medium leading-relaxed">Our community is moderated by verified guides to ensure the highest standard of ethical interaction.</p>
                      <button className="bg-white text-primary text-xs font-bold px-8 py-3.5 rounded-full uppercase transition-all hover:scale-105 soft-shadow">
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
