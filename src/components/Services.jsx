import { useTranslation } from 'react-i18next';
import { Shield, Hammer, Car, Sun, Palette, Zap, Droplets, Wind } from 'lucide-react';

const icons = [<Shield size={32} />, <Hammer size={32} />, <Car size={32} />, <Sun size={32} />, <Palette size={32} />, <Zap size={32} />, <Droplets size={32} />, <Wind size={32} />];

export default function Services() {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-16 text-center">
          {t('S_TITLE')} <span className="text-blue-500">{t('S_TITLE_GLOW')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <div key={id} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col h-full min-h-[420px] group hover:border-blue-500/30 transition-all duration-500">
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">{icons[id - 1]}</div>
              <h3 className="text-white font-black text-2xl uppercase mb-3">{t(`SER_${id}_T`)}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-auto italic">{t(`SER_${id}_D`)}</p>
              <div className="mt-8 pt-6 border-t border-white/5">
                <span className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest italic">{t(`SER_${id}_P`)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}