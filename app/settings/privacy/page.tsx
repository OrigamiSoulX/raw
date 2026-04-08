import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Button from '@/components/Button';

export default function PrivacySettings() {
  return (
    <div className="bg-background min-h-screen text-on-background flex flex-col">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 lg:ml-60 px-8 md:px-16 py-12 pb-32">
          <header className="mb-12">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">Privacy Control</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-background mb-4">
              Security & <br/> <span className="text-primary">Transparency.</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl text-lg font-medium leading-relaxed">
              Configure your digital presence with ease. At RAW, we prioritize your autonomy and provide the tools to manage your data with absolute precision.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <section className="lg:col-span-8 bg-white rounded-3xl p-8 md:p-10 soft-shadow border border-gray-100 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-on-background">Identity Protection</h3>
                    <p className="text-on-surface-variant text-sm font-medium">Simplified protocols to keep your activity private.</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { title: 'Ghost Mode', desc: 'Prevents session tracking across educational series.', active: true, icon: 'visibility_off' },
                    { title: 'Metadata Stripping', desc: 'Automatically scrubs identity tags from your interactions.', active: false, icon: 'data_loss_prevention' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-white transition-all duration-300">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-primary soft-shadow">
                          <span className="material-symbols-outlined">{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-on-background">{item.title}</h4>
                          <p className="text-xs text-on-surface-variant font-medium">{item.desc}</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={item.active} className="sr-only peer" readOnly />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="lg:col-span-4 bg-primary text-on-primary rounded-3xl p-8 md:p-10 flex flex-col justify-between soft-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">RAW Charter</h3>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 mb-8 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Access Model</span>
                  <p className="text-xl font-extrabold leading-tight">Universal <br/> Free Access</p>
                  <p className="text-xs font-medium opacity-80 leading-relaxed">Supported by our ethical community framework.</p>
                </div>
              </div>
              <Button variant="primary" size="lg" className="w-full !bg-white !text-primary border-none shadow-xl">
                Read Charter
              </Button>
            </section>

            <section className="lg:col-span-5 bg-white rounded-3xl p-8 md:p-10 soft-shadow border border-gray-100">
              <h3 className="text-xl font-bold mb-8 text-on-background">Notification Preferences</h3>
              <div className="space-y-6">
                {[
                  { label: 'New Content Drops', active: true },
                  { label: 'Security Alerts', active: true },
                  { label: 'Community Updates', active: false },
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center justify-between ${!item.active && 'opacity-50'}`}>
                    <span className="text-sm font-semibold text-on-background">{item.label}</span>
                    <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${item.active ? 'bg-primary' : 'bg-gray-200'}`}>
                      <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${item.active ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 soft-shadow border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-on-background">Your Data Rights</h3>
                <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                  Export your history or purge your data with a single click. We prioritize your right to be forgotten.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button variant="outline" size="sm" className="rounded-full font-bold">Export Data</Button>
                  <Button variant="outline" size="sm" className="rounded-full font-bold !text-red-500 !border-red-100 !bg-red-50">Purge Account</Button>
                </div>
              </div>
              <div className="w-32 h-32 rounded-[2rem] bg-gray-50 flex items-center justify-center border border-gray-100 soft-shadow text-primary">
                <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>data_usage</span>
              </div>
            </section>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
