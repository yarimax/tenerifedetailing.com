import { useEffect, useRef } from 'react';
import { Zap, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.05 });

    sectionRef.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="pt-32 pb-24 bg-[#050505] relative overflow-hidden flex min-h-screen items-center">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/10 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center">

          <div className="fade-up inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 text-blue-500 px-6 py-3 rounded-full mb-10 text-[11px] font-black uppercase tracking-[0.3em]">
            <MapPin size={16} /> Puerto de la Cruz, Tenerife
          </div>

          <h1 className="fade-up fade-up-delay-1 text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-10">
            {t('HERO_TITLE_1')} <br />
            <span className="text-blue-500">{t('HERO_TITLE_2')}</span> <br />
            {t('HERO_TITLE_3')}
          </h1>

          <p className="fade-up fade-up-delay-2 text-gray-500 text-xl font-light max-w-2xl mb-12 uppercase tracking-wide">
            {t('HERO_SUB')}
          </p>

          <a
            href="#contact"
            className="fade-up fade-up-delay-3 inline-flex items-center gap-3 bg-blue-500 text-white px-10 py-5 rounded-full text-[13px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20"
          >
            <Zap size={20} /> {t('HERO_BTN')}
          </a>

        </div>
      </div>
    </section>
  );
}
