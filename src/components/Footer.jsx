import { Droplets, Instagram, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Оновлений логотип PROCAR Detailing TENERIFE */}
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

          {/* Блок соцмереж з підтримкою мов */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {t('FOLLOW')}
            </span>
            <div className="flex gap-3">
              <a 
                href="https://wa.me/34633260683" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/40 transition-all"
              >
                <MessageCircle size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/40 transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Копірайт */}
        <div className="pt-8 text-center text-xs text-gray-500 font-medium">
          © 2026 PROCAR Detailing Tenerife. {t('FOOTER_R')}
        </div>
      </div>
    </footer>
  );
}
