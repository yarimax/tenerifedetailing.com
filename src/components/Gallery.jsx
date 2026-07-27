import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'es').slice(0, 2).toLowerCase();

  const content = {
    es: {
      title: 'NUESTROS PROYECTOS',
      subtitle: 'Ejemplos de trabajos realizados y resultados',
      items: [
        {
          title: 'Porsche 911 GT3',
          desc: 'Corrección de pintura en varias etapas y aplicación de cerámico 9H.',
          image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'BMW M4 Competition',
          desc: 'Limpieza integral de interior, restauración de cuero y pulido de brillo.',
          image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Mercedes-AMG GT',
          desc: 'Servicio completo de detailing y restauración de transparencia de faros.',
          image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    en: {
      title: 'OUR PROJECTS',
      subtitle: 'Examples of completed works and results',
      items: [
        {
          title: 'Porsche 911 GT3',
          desc: 'Multi-stage paint correction and 9H ceramic coating application.',
          image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'BMW M4 Competition',
          desc: 'Complete interior dry cleaning, leather restoration, and gloss polishing.',
          image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Mercedes-AMG GT',
          desc: 'Full detailing package and headlight clarity restoration.',
          image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    de: {
      title: 'UNSERE PROJEKTE',
      subtitle: 'Beispiele unserer Arbeit und Ergebnisse',
      items: [
        {
          title: 'Porsche 911 GT3',
          desc: 'Mehrstufige Lackkorrektur und 9H-Keramikversiegelung.',
          image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'BMW M4 Competition',
          desc: 'Komplette Innenraumreinigung, Lederrestauration und Glanzpolitur.',
          image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Mercedes-AMG GT',
          desc: 'Komplettes Detailing-Paket und Wiederherstellung der Scheinwerferklarheit.',
          image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    ru: {
      title: 'НАШИ ПРОЕКТЫ',
      subtitle: 'Примеры выполненных работ и результаты',
      items: [
        {
          title: 'Porsche 911 GT3',
          desc: 'Многоэтапная коррекция краски и нанесение керамической защиты 9H.',
          image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'BMW M4 Competition',
          desc: 'Полная химчистка салона, реставрация кожи и восстановление блеска.',
          image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Mercedes-AMG GT',
          desc: 'Комплексный детейлинг-пакет и восстановление прозрачности фар.',
          image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80'
        }
      ]
    }
  };

  const t = content[lang] || content.es;

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {t.title}<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
