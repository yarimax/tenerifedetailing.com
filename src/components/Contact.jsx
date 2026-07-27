import { useTranslation } from 'react-i18next';
import { Clock, MessageCircle, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Заголовок */}
        <h2 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-16">
          {t('CONT_TITLE')}<span className="text-blue-500">.</span>
        </h2>

        {/* Контакти та графік роботи */}
        <div className="flex flex-col gap-8 max-w-2xl">

          {/* Графік роботи */}
          <div className="flex gap-5 items-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
              <Clock size={24} />
            </div>
            <p className="text-white font-bold text-lg">{t('CONT_HOURS')}</p>
          </div>

          {/* Кнопки зв'язку */}
          <div className="flex flex-wrap gap-4 pt-4">
            
            {/* WhatsApp (З АКТУАЛЬНИМ НОМЕРОМ) */}
            <a
              href="https://wa.me/34633260683"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest transition-all duration-300 hover:bg-[#20ba5a] hover:scale-105 active:scale-95 shadow-xl shadow-[#25D366]/20 text-sm group overflow-hidden"
            >
              <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-md group-hover:opacity-100 opacity-50 transition-opacity animate-pulse -z-10" />
              <MessageCircle size={18} className="animate-bounce" /> 
              {t('CONT_WA', 'WhatsApp')}
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/procar.detailing.tenerife/"
              target="_blank"
              rel="noreferrer noopener"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 shadow-xl shadow-pink-500/20 text-sm"
            >
              <Instagram size={18} /> Instagram
            </a>

            {/* Дзвінок (З АКТУАЛЬНИМ НОМЕРОМ) */}
            <a
              href="tel:+34633260683"
              className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all text-sm"
            >
              <Phone size={18} /> {t('CONT_CALL', 'Call')}
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
