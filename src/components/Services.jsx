import { useTranslation } from 'react-i18next';

export default function Services() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'es').slice(0, 2).toLowerCase();

  const content = {
    es: {
      title: 'NUESTROS SERVICIOS',
      subtitle: 'Cuidado profesional para su vehículo en Tenerife',
      items: [
        {
          title: 'Pulido y Corrección de Pintura',
          desc: 'Eliminación de arañazos y microarañazos, devolviendo un brillo espejo profundo.',
          image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Tratamiento Cerámico',
          desc: 'Protección hidrofóbica y contra rayos UV de larga duración para la carrocería.',
          image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Limpieza Detallada de Interiores',
          desc: 'Limpieza profunda a vapor, eliminación de manchas y acondicionamiento de piel.',
          image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Restauración de Faros',
          desc: 'Devolución de la transparencia y máxima visibilidad para una conducción segura.',
          image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Restauración de Cuero e Interior',
          desc: 'Reparación de volantes, asientos y plásticos desgastados a estado de fábrica.',
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    en: {
      title: 'OUR SERVICES',
      subtitle: 'Professional car care in Tenerife',
      items: [
        {
          title: 'Paint Polishing & Correction',
          desc: 'Removal of scratches, swirls, and restoring deep mirror gloss to your paintwork.',
          image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Ceramic Coating',
          desc: 'Long-term hydrophobic and UV protection to keep your paint looking pristine.',
          image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Deep Interior Detailing',
          desc: 'Comprehensive steam cleaning, stain removal, and leather conditioning.',
          image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Headlight Restoration',
          desc: 'Restoring clarity and maximum light output for safe night driving.',
          image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Leather & Interior Restoration',
          desc: 'Restoring worn leather seats, steering wheels, and trim to factory condition.',
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    de: {
      title: 'UNSERE LEISTUNGEN',
      subtitle: 'Professionelle Fahrzeugpflege auf Teneriffa',
      items: [
        {
          title: 'Lackpolitur & Lackkorrektur',
          desc: 'Entfernung von Kratzern und Swirls für einen tiefen Spiegelglanz Ihres Lackes.',
          image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Keramikversiegelung',
          desc: 'Langzeitiger hydrophober Schutz und UV-Schutz für die Karosserie.',
          image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Detailing Innenraumreinigung',
          desc: 'Tiefenreinigung mit Dampf, Fleckenentfernung und Lederpflege.',
          image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Scheinwerferaufbereitung',
          desc: 'Wiederherstellung von Klarheit und maximaler Leuchtkraft für sicheres Fahren.',
          image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Leder- & Innenraumrestauration',
          desc: 'Reparatur von abgenutzten Sitzen, Lenkrädern und Kunststoffen im Werkszustand.',
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    ru: {
      title: 'НАШИ УСЛУГИ',
      subtitle: 'Профессиональный уход за авто на Тенерифе',
      items: [
        {
          title: 'Полировка и коррекция ЛКП',
          desc: 'Устранение царапин, паутинки и восстановление глубокого зеркального блеска.',
          image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Керамическое покрытие',
          desc: 'Долговечная гидрофобная и УФ-защита кузова от внешних воздействий.',
          image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Детейлинг салона и химчистка',
          desc: 'Глубокая очистка паром, удаление пятен и кондиционирование кожи.',
          image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Восстановление фар',
          desc: 'Возвращение прозрачности и максимального света для безопасной езды.',
          image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Реставрация кожи и интерьера',
          desc: 'Восстановление потертостей руля, сидений и элементов салона до заводского состояния.',
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
        }
      ]
    }
  };

  const t = content[lang] || content.es;

  return (
    <section id="services" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {t.title}<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
