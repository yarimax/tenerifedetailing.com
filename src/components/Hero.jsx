import { Zap, MapPin, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#050505]">
      
      {/* Картинка на тлі */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80" 
          alt="Procar Detailing Tenerife" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/80 to-[#050505]" />
      </div>

      {/* Синій блік */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Локація */}
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-400 px-5 py-2.5 rounded-full mb-8 text-[11px] font-bold uppercase tracking-widest">
            <MapPin size={16} /> Tenerife
          </div>

          {/* Заголовок */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            {t('HERO_T1')} <br /> 
            <span className="text-blue-500">
              {t('HERO_TG')}
            </span> <br /> 
            {t('HERO_T2')}
          </h1>

          {/* Опис */}
          <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl mb-10 uppercase tracking-wide leading-relaxed">
            {t('HERO_SUB')}
          </p>

          {/* Кнопка */}
          <div className="flex flex-col sm:flex-row gap-6 mb-14">
            <a 
              href="https://wa.me/34633260683"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20 hover:scale-105"
            >
              <Zap size={18} /> {t('HERO_CTA')}
            </a>
          </div>

          {/* Переваги */}
          <div className="pt-8 border-t border-white/10 w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300 text-xs font-bold uppercase tracking-wider">
            <div className="flex items-center justify-center gap-2.5 bg-white/5 border border-white/10 py-3.5 px-4 rounded-xl">
              <ShieldCheck size={18} className="text-blue-500 shrink-0" />
              <span>{t('HERO_FEAT_1')}</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 bg-white/5 border border-white/10 py-3.5 px-4 rounded-xl">
              <Sparkles size={18} className="text-blue-500 shrink-0" />
              <span>{t('HERO_FEAT_2')}</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 bg-white/5 border border-white/10 py-3.5 px-4 rounded-xl">
              <Award size={18} className="text-blue-500 shrink-0" />
              <span>{t('HERO_FEAT_3')}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
