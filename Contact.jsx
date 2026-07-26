import { useTranslation } from 'react-i18next';
import { MapPin, Clock, MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Заголовок — на всю ширину, над усім */}
        <h2 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-16">
          {t('CONT_TITLE')}<span className="text-blue-500">.</span>
        </h2>

        {/* Сітка: ліво — інфо, право — карта */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

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
              <a
                href="https://wa.me/34633260683"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 text-sm"
              >
                <MessageCircle size={18} /> {t('CONT_WHATSAPP')}
              </a>
              <a
                href="tel:+34633260683"
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all text-sm"
              >
                <Phone size={18} /> {t('CONT_CALL')}
              </a>
            </div>
          </div>

          {/* Карта */}
          <div className="h-[420px] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <iframe
              title="Location"
              src="https://maps.google.com/maps?q=C.+de+Valois+33,+Puerto+de+la+Cruz,+Tenerife,+Spain&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
