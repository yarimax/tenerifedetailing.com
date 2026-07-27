import { Zap, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#050505]">
      
      {/* Фонове фото авто з градієнтним затемненням */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(5, 5, 5, 0.6) 0%, rgba(5, 5, 5, 0.95) 100%), url('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Синій світловий блік на тлі */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 blur-[160px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Бейдж локації */}
          <div className="fade-up inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-400 px-6 py-3 rounded-full mb-10 text-[11px] font-black uppercase tracking-[0.3em] shadow-lg shadow-blue-500/10">
            <MapPin size={16} /> Puerto de la Cruz, Tenerife
          </div>

          {/* Головний заголовок із підтримкою перекладів */}
          <h1 className="fade-up fade-up-delay-1 text-6xl sm:text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-10 drop-shadow-2xl">
            {t('HERO_T1')} <br /> 
            <span className="text-blue-500 drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]">
              {t('HERO_TG')}
            </span> <br /> 
            {t('HERO_T2')}
          </h1>

          {/* Підзаголовок */}
          <p className="fade-up fade-up-delay-2 text-gray-300 text-lg sm:text-xl font-light max-w-2xl mb-12 uppercase tracking-wide leading-relaxed">
            {t('HERO_SUB')}
          </p>

          {/* Кнопка запису */}
          <div className="fade-up fade-up-delay-3 flex flex-col sm:flex-row gap-6">
            <a 
              href="https://wa.me/34633260683"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-full text-[13px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-blue-500/25 hover:scale-105"
            >
              <Zap size={20} /> {t('HERO_CTA')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
