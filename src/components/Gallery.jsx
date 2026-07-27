import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('PROJECTS.P1.TITLE', 'Porsche 911 GT3'),
      description: t('PROJECTS.P1.DESC', 'Multi-stage paint correction and 9H ceramic coating application.'),
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: t('PROJECTS.P2.TITLE', 'BMW M4 Competition'),
      description: t('PROJECTS.P2.DESC', 'Complete interior dry cleaning, leather restoration, and gloss polishing.'),
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: t('PROJECTS.P3.TITLE', 'Mercedes-AMG GT'),
      description: t('PROJECTS.P3.DESC', 'Full detailing package and headlight clarity restoration.'),
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {t('PROJECTS_TITLE', 'NUESTROS PROYECTOS')}<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            {t('PROJECTS_SUBTITLE', 'Ejemplos de trabajos realizados y resultados')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((item) => (
            <div
              key={item.id}
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
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
