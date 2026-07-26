import { useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "CERÁMICA PREMIUM",
    span: 'md:col-span-2',
    // Це твоє фото нанесення кераміки, яке я згенерував
    url: 'https://images.pexels.com/photos/19121908/pexels-photo-19121908.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 2,
    title: "REPARACIÓN PDR",
    span: 'md:col-span-1',
    url: 'https://images.pexels.com/photos/8924376/pexels-photo-8924376.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: "DETALLADO DE SALÓN",
    span: 'md:col-span-1',
    url: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: "PROTECCIÓN DE FAROS",
    span: 'md:col-span-2',
    url: 'https://images.pexels.com/photos/19121910/pexels-photo-19121910.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
];

export default function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    sectionRef.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Заголовок (прописаний текстом) */}
        <div className="mb-16">
          <h2 className="fade-up text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            NUESTROS <span className="text-blue-500">PROYECTOS</span>
          </h2>
          <p className="fade-up fade-up-delay-1 text-gray-500 text-[12px] font-black uppercase tracking-[0.4em]">
            Vea ejemplos de nuestro cuidado profesional
          </p>
        </div>

        {/* СІТКА 2/1 та 1/2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className={`fade-up fade-up-delay-${index} relative h-[450px] ${proj.span} rounded-[2.5rem] overflow-hidden group border border-white/5 transition-all duration-700 hover:border-blue-500/40`}
            >
              {/* Зображення */}
              <img
                src={proj.url}
                alt="Detailing project"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Градієнт */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" />

              {/* Текст та ефекти */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">

                {/* Сині рисочки /// */}
                <div className="flex gap-1 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0">
                  <span className="text-blue-500 font-black text-3xl tracking-tighter italic">///</span>
                </div>

                {/* Назва (прописана текстом у масиві projects) */}
                <h3 className="text-white font-black text-3xl md:text-4xl uppercase tracking-tighter leading-none mb-2 transition-transform duration-500 group-hover:-translate-y-2">
                  {proj.title}
                </h3>

                {/* Посилання під назвою */}
                <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-in-out">
                  <p className="text-blue-500 text-sm font-black uppercase tracking-[0.2em]">
                    Ver proyecto →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}