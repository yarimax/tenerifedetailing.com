import { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 h-20' : 'bg-transparent h-24'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
            <Droplets size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black uppercase tracking-tighter text-xl leading-none">AutoDetailing</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Puerto de la Cruz</span>
          </div>
        </a>

        {/* Desktop links - Збільшений шрифт */}
        <div className="hidden md:flex items-center gap-10">
          {['HOME', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] font-bold text-gray-400 hover:text-white uppercase tracking-[0.15em] transition-colors">
              {t(`NAV_${item}`)}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex gap-3 ml-4 border-l border-white/10 pl-8">
            {['es', 'en', 'de', 'ru'].map((lng) => (
              <button
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                className={`text-[12px] font-black uppercase transition-all ${i18n.language.startsWith(lng) ? 'text-blue-500 scale-110' : 'text-gray-600 hover:text-gray-300'}`}
              >
                {lng}
              </button>
            ))}
          </div>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {['HOME', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="text-white font-black uppercase text-xl tracking-tight">
              {t(`NAV_${item}`)}
            </a>
          ))}
          <div className="flex gap-6 pt-6 border-t border-white/5">
            {['es', 'en', 'de', 'ru'].map((lng) => (
              <button key={lng} onClick={() => { i18n.changeLanguage(lng); setMobileOpen(false); }} className={`uppercase font-black text-lg ${i18n.language.startsWith(lng) ? 'text-blue-500' : 'text-gray-600'}`}>{lng}</button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}