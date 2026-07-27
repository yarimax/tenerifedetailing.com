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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 h-20' : 'bg-transparent h-24'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Логотип PROCAR / Detailing / TENERIFE */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shrink-0">
            <Droplets size={22} />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-white font-black uppercase text-xl leading-none tracking-tight">
              PROCAR
            </span>
            <span className="text-blue-500 font-bold uppercase text-[10px] leading-tight tracking-widest">
              Detailing
            </span>
            <span className="text-gray-400 font-medium uppercase text-[8px] leading-tight tracking-widest">
              TENERIFE
            </span>
          </div>
        </a>

        {/* Десктоп Меню */}
        <div className="hidden md:flex items-center gap-8">
          {['HOME', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
              {t(`NAV_${item}`)}
            </a>
          ))}

          {/* Перемикач мов */}
          <div className="flex gap-2 ml-4 border-l border-white/10 pl-6">
            {['es', 'en', 'de', 'ru'].map((lng) => (
              <button
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                className={`text-xs font-black uppercase transition-all ${i18n.language.startsWith(lng) ? 'text-blue-500' : 'text-gray-600 hover:text-gray-300'}`}
              >
                {lng}
              </button>
            ))}
          </div>
        </div>

        {/* Кнопка мобільного меню */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Мобільне меню */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4">
          {['HOME', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="text-white font-bold uppercase text-lg">
              {t(`NAV_${item}`)}
            </a>
          ))}
          <div className="flex gap-4 pt-4 border-t border-white/10">
            {['es', 'en', 'de', 'ru'].map((lng) => (
              <button key={lng} onClick={() => { i18n.changeLanguage(lng); setMobileOpen(false); }} className={`uppercase font-black text-sm ${i18n.language.startsWith(lng) ? 'text-blue-500' : 'text-gray-500'}`}>{lng}</button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
