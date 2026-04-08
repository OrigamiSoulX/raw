import Link from 'next/link';

export default function Sidebar() {
  const sections = [
    {
      items: [
        { label: 'Home', href: '/', icon: 'home' },
        { label: 'Trending', href: '/categories', icon: 'trending_up' },
        { label: 'History', href: '/profile', icon: 'history' },
      ]
    },
    {
      title: 'Explore',
      items: [
        { label: 'Guidelines', href: '/manifesto', icon: 'verified_user' },
        { label: 'Topics', href: '/categories', icon: 'dashboard' },
        { label: 'Community', href: '/community', icon: 'groups' },
      ]
    },
    {
      title: 'Creator',
      items: [
        { label: 'Studio', href: '/studio', icon: 'analytics' },
        { label: 'Privacy', href: '/settings/privacy', icon: 'shield_lock' },
      ]
    }
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-60 bg-white border-r border-gray-100 hidden lg:flex flex-col py-6 px-3 z-40 overflow-y-auto no-scrollbar">
      <div className="flex-1 space-y-7">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-1">
            {section.title && (
              <h3 className="px-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 opacity-50">
                {section.title}
              </h3>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-semibold text-on-surface hover:text-primary hover:bg-primary/5 transition-all group"
                >
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant group-hover:text-primary transition-colors">
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 px-3">
        <Link href="/studio" className="block p-4 rounded-2xl bg-primary/5 border border-primary/10 relative overflow-hidden group">
           <div className="relative z-10 text-center">
              <p className="text-primary font-bold text-xs mb-1 uppercase">Upgrade</p>
              <p className="text-on-surface-variant text-[10px] leading-tight mb-3">Join our community of ethical creators.</p>
              <button className="w-full bg-primary text-white text-[11px] font-bold py-2 rounded-lg transition-transform group-hover:scale-[1.02]">
                Become Pro
              </button>
           </div>
        </Link>
      </div>
    </aside>
  );
}
