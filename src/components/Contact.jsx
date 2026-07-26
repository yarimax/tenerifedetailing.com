import { useTranslation } from 'react-i18next';
import { MapPin, Clock, MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <h2 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
              {t('CONT_TITLE')}<span className="text-blue-500">.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0"><MapPin size={24} /></div>
                <p className="text-white font-bold text-lg leading-tight">{t('CONT_ADDR')}</p>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0"><Clock size={24} /></div>
                <p className="text-white font-bold text-lg">{t('CONT_HOURS')}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://wa.me/34614397963" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-blue-500 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20">
                <MessageCircle size={20} /> {t('CONT_WHATSAPP')}
              </a>
              <a href="tel:+34614397963" className="inline-flex items-center gap-4 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <Phone size={20} /> CALL
              </a>
            </div>
          </div>
          <div className="h-[500px] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
            <iframe src="http://googleusercontent.com/maps.google.com/4" width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) invert(0.9)' }} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}