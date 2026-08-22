import { Droplets, Instagram, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Логотип TENERIFE Detailing LAB */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shrink-0">
              <Droplets size={22} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-black uppercase text-xl leading-none tracking-tight">
                TENERIFE
              </span>
              <span className="text-blue-500 font-bold uppercase text-[10px] leading-tight tracking-widest">
                Detailing
              </span>
              <span className="text-gray-400 font-medium uppercase text-[8px] leading-tight tracking-widest">
                LAB
              </span>
            </div>
          </a>

          {/* Блок соцмереж у стилі макета */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {t('FOLLOW')}
            </span>
            <div className="flex gap-4">
              {/* WhatsApp (Фірмовий зелений стиль) */}
              <a 
                href="https://wa.me/34633260683" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <MessageCircle size={15} />
              </a>

              {/* Instagram (Фірмовий градієнтний стиль) */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

        </div>

        {/* Копірайт */}
  

        <div className="pt-6 text-center text-xs text-gray-500 font-medium tracking-wide">
          © 2026 Tenerife Detailing LAB. {t('FOOTER_R')}
        </div>
      </div>
    </footer>
  );
}
