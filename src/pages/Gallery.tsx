import React from 'react';

export default function Gallery() {
  const images = [
    { src: 'https://www.tinyfingers.co.in/images/tinyfingers-child.jpeg', alt: 'Tiny Fingers child' },
    { src: 'https://i.pinimg.com/736x/33/fd/55/33fd5598bb9eb43c8b49d206c9cf5eca.jpg', alt: 'Montessori classroom' },
    { src: 'https://www.fishtownmontessori.com/wp-content/uploads/2021/03/What-Is-Montessori-10-Principles-For-Parents-.jpeg', alt: 'Montessori principles' },
    { src: 'https://montessori-academy.org/wp-content/uploads/2020/08/onpage_history1.jpg', alt: 'Montessori history' },
    { src: 'https://www.fishtownmontessori.com/wp-content/uploads/2021/10/What-To-Look-For-In-A-Montessori-School.jpeg', alt: 'Montessori school' },
    { src: '/gallery/schlimg.png', alt: 'SASHA School' }
  ];

  return (
    <main className="relative overflow-x-hidden">
      <section className="relative pt-40 pb-24 px-gutter overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-60">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] watercolor-wash rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-3xl"></div>
        </div>

        <span className="material-symbols-outlined floating-doodle absolute top-28 left-10 text-primary-fixed" style={{ fontSize: '40px' }}>auto_awesome</span>
        <span className="material-symbols-outlined floating-doodle absolute top-52 right-8 text-secondary-fixed" style={{ fontSize: '36px', animationDelay: '1s' }}>photo_camera</span>
        <span className="material-symbols-outlined floating-doodle absolute bottom-40 left-1/4 text-tertiary-fixed" style={{ fontSize: '32px', animationDelay: '2s' }}>images</span>
        <div className="max-w-7xl mx-auto text-center">
          <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block">GALLERY</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Moments at SASHA School</h1>
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto">
            A glimpse into the vibrant world of learning, play and discovery at our school.
          </p>
        </div>
      </section>

      <section className="pb-24 px-gutter max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="glass-card rounded-xl overflow-hidden group hover:translate-y-[-4px] transition-all duration-500 shadow-[0_10px_30px_rgba(139,92,246,0.1)]">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="font-body-md text-sm text-tertiary text-center">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}