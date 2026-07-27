import { useTranslation } from 'react-i18next';
import { MapPin, Clock, MessageCircle, Phone, ExternalLink } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Заголовок */}
        <h2 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-16">
          {t('CONT_TITLE')}<span className="text-blue-500">.</span>
        </h2>

        {/* Сітка: Інфо + Локація */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Інфо */}
          <div className="flex flex-col gap-8">
            <div className="flex gap-5 items-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <MapPin size={24} />
              </div>
              <p className="text-white font-bold text-lg leading-tight">{t('CONT_ADDR')}</p>
            </div>

            <div className="flex gap-5 items-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <Clock size={24} />
              </div>
              <p className="text-white font-bold text-lg">{t('CONT_HOURS')}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/34633260683"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 text-sm"
              >
                <MessageCircle size={18} /> {t('CONT_WA', 'WhatsApp')}
              </a>

              {/* Дзвінок */}
              <a
                href="tel:+34633260683"
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all text-sm"
              >
                <Phone size={18} /> {t('CONT_CALL', 'Call')}
              </a>
            </div>
          </div>

          {/* Плашка замість iframe картування */}
          <div className="h-[320px] rounded-[2rem] border border-white/10 bg-white/5 p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-50" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-500 mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t('CONT_ADDR')}</h3>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href="https://maps.google.com/?q=C.+de+Valois+33,+Puerto+de+la+Cruz,+Tenerife,+Spain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-blue-500 hover:text-white transition-all shadow-lg"
              >
                <ExternalLink size={16} /> Open in Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
