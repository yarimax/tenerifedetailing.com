import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'polishing',
      title: t('SERVICES.POLISHING.TITLE'),
      description: t('SERVICES.POLISHING.DESC'),
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ceramic',
      title: t('SERVICES.CERAMIC.TITLE'),
      description: t('SERVICES.CERAMIC.DESC'),
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'interior',
      title: t('SERVICES.INTERIOR.TITLE'),
      description: t('SERVICES.INTERIOR.DESC'),
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'headlights',
      title: t('SERVICES.HEADLIGHTS.TITLE'),
      description: t('SERVICES.HEADLIGHTS.DESC'),
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'leather_repair',
      title: t('SERVICES.LEATHER_REPAIR.TITLE'),
      description: t('SERVICES.LEATHER_REPAIR.DESC'),
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {t('SERVICES_TITLE')}<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">{t('SERVICES_SUBTITLE')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
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
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
