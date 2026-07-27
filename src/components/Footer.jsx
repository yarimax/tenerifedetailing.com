import { useTranslation } from 'react-i18next';
import { MessageCircle, Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Верхній блок футера */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          {/* Логотип та брендинг (ОНОВЛЕНО) */}
          <div className="flex items-center gap-4">
            {/* Оновлений логотип */}
            <img src="/path-to-your-logo/logo-td-lab-footer.svg" alt="Tenerife Detailing Lab Logo" className="h-12 w-auto" />
            
            <div className="flex flex-col">
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                  Tenerife <span className="text-blue-500">Detailing</span>
                </h3>
                <p className="text-xs text-gray-400 font-bold tracking-[0.4em] uppercase mt-1">
                  LAB
                </p>
            </div>
          </div>

          {/* Соціальні мережі (З правильними посиланнями) */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              {t('FOOTER_SOCIALS', 'МЫ В СЕТЯХ')}
            </span>
            
            <div className="flex gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/34614397963"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>

              {/* Instagram (Правильний акаунт) */}
              <a
                href="https://www.instagram.com/procar.detailing.tenerife/"
                target="_blank"
                rel="noreferrer noopener"
                referrerPolicy="no-referrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-[#833ab4] hover:via-[#fd1d1d] to-[#fcb045] hover:border-transparent hover:scale-110 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Копірайт (ОНОВЛЕНО) */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-gray-600 font-medium italic">
            © {currentYear} Tenerife Detailing Lab. {t('FOOTER_RIGHTS', 'Все права защищены.')}
          </p>
        </div>

      </div>
    </footer>
  );
}
