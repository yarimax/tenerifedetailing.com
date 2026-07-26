import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16 text-left">
          <div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Auto Detailing <span className="text-blue-500">.</span></h2>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">Puerto de la Cruz, Tenerife</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-gray-500 text-[10px] font-black tracking-[0.4em]">{t('FOLLOW', 'SÍGUENOS')}</span>
            <div className="flex gap-4">
              <a href="https://wa.me/34633260683" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-green-500 hover:scale-110 transition-all"><MessageCircle size={20} /></a>
              <a href="https://instagram.com" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-blue-500 hover:scale-110 transition-all"><Instagram size={20} /></a>
              <a href="https://facebook.com" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-blue-500 hover:scale-110 transition-all"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-[11px] font-medium tracking-wide italic border-t border-white/5 pt-10">
          {t('FOOTER_R')}
        </p>
      </div>
    </footer>
  );
}
