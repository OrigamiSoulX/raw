import Link from 'next/link';

export default function Sidebar() {
  const sections = [
    {
      items: [
        { label: 'Home', href: '/', icon: 'home' },
        { label: 'Trending', href: '/categories', icon: 'local_fire_department' },
        { label: 'Library', href: '/profile', icon: 'video_library' },
      ]
    },
    {
      title: 'Ethical Cinema',
      items: [
        { label: 'Manifesto', href: '/manifesto', icon: 'auto_awesome' },
        { label: 'Categories', href: '/categories', icon: 'grid_view' },
        { label: 'Community', href: '/community', icon: 'groups' },
      ]
    },
    {
      title: 'Creator',
      items: [
        { label: 'Dashboard', href: '/studio', icon: 'dashboard' },
        { label: 'Settings', href: '/settings/privacy', icon: 'settings' },
      ]
    }
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 border-r border-white/5 bg-background hidden lg:flex flex-col py-6 px-4 z-40 overflow-y-auto no-scrollbar">
      <div className="flex-1 space-y-8">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-2">
            {section.title && (
              <h3 className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 mb-3">
                {section.title}
              </h3>
            )}
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 px-4 py-2.5 rounded-xl text-sm font-medium text-on-surface-variant hover:text-white hover:bg-surface-high transition-all group"
                >
                  <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 px-4">
        <Link href="/studio" className="block p-4 rounded-2xl premium-gradient relative overflow-hidden group">
           <div className="relative z-10">
              <p className="text-black font-black text-xs uppercase tracking-widest mb-1">RAW Premium</p>
              <p className="text-black/70 text-[10px] font-bold uppercase leading-tight mb-3">Unlock the Vault</p>
              <button className="bg-black text-white text-[10px] font-black px-4 py-2 rounded-full uppercase transition-transform group-hover:scale-105">
                Go Pro
              </button>
           </div>
           <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/20 blur-2xl rounded-full transition-transform group-hover:scale-150" />
        </Link>
      </div>
    </aside>
  );
}
