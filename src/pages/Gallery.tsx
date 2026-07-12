import React, { useState } from 'react';

export default function Gallery() {
  const categories = ['All', 'Campus', 'Activities', 'Curriculum'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);

  const images = [
    { src: '/gallery/schlimg.png', alt: 'SASHA School Campus Environment', category: 'Campus' },
    { src: '/campus life/1.jpeg', alt: 'Campus Life at SASHA School', category: 'Campus' },
    { src: '/campus life/2.jpeg', alt: 'School Campus Scenery', category: 'Campus' },
    { src: '/curiculat images/c 1.jpeg', alt: 'Curriculum Activities', category: 'Curriculum' },
    { src: '/curiculat images/c 2.jpeg', alt: 'Learning Through Play', category: 'Activities' },
    { src: '/curiculat images/c3.jpeg', alt: 'Hands-on Learning', category: 'Curriculum' },
    { src: '/curiculat images/c4.jpeg', alt: 'Creative Classroom Sessions', category: 'Activities' }
  ];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <main className="relative pt-32 pb-24 overflow-x-hidden">
      {/* Background radial watercolor gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-60 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] watercolor-wash rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header section */}
      <section className="relative max-w-7xl mx-auto px-gutter py-12 md:py-20 text-center">
        <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block uppercase tracking-wider">GALLERY</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
          Moments at SASHA School
        </h1>
        <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto leading-relaxed">
          A glimpse into the vibrant, sun-drenched world of self-directed learning, play, and organic discovery at our campus.
        </p>
      </section>

      {/* Interactive Category Filters */}
      <section className="max-w-7xl mx-auto px-gutter mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 text-sm shadow-sm hover:scale-102 ${
              activeCategory === cat 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white border border-outline-variant/40 text-tertiary hover:bg-surface-container'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Masonry / Grid Gallery */}
      <section className="pb-24 px-gutter max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setLightboxImg(img)}
              className="glass-card rounded-2xl overflow-hidden group hover:translate-y-[-6px] transition-all duration-500 shadow-md bg-white/70 border border-white/40 cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl bg-primary/80 p-4 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform duration-500">
                    zoom_in
                  </span>
                </div>
                {/* Category tag */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase px-3 py-1 rounded-full shadow-sm font-mono tracking-wider">
                  {img.category}
                </span>
              </div>
              
              {/* Caption */}
              <div className="p-5 border-t border-primary-fixed/10">
                <p className="font-headline-md text-sm text-primary font-bold text-center leading-relaxed">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImg(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors flex items-center justify-center shadow-lg"
            onClick={() => setLightboxImg(null)}
            aria-label="Close Lightbox"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Lightbox Content */}
          <div 
            className="relative max-w-4xl max-h-[80vh] w-full flex justify-center items-center rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black/40"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImg.src} 
              alt={lightboxImg.alt} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            {/* Overlay Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-center text-white">
              <p className="font-display-lg text-lg md:text-xl font-bold tracking-wide">
                {lightboxImg.alt}
              </p>
              <span className="text-xs uppercase tracking-widest opacity-80 mt-1 block font-mono">
                Category: {lightboxImg.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}