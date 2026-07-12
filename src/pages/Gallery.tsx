import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const categories = ['All', 'Campus', 'Activities', 'Learning', 'Outdoor Play', 'Nature', 'Events'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const images = [
    // Campus
    { src: '/gallery/schlimg.png', alt: 'SASHA School Campus', category: 'Campus' },
    { src: '/campus life/1.jpeg', alt: 'Campus Life', category: 'Campus' },
    { src: '/campus life/2.jpeg', alt: 'School Grounds', category: 'Campus' },
    { src: '/images/IMG-20260620-WA0062.jpg.jpeg', alt: 'School Festival Grounds', category: 'Campus' },
    
    // Activities
    { src: '/images/IMG-20260620-WA0051.jpg.jpeg', alt: 'Playground Adventure', category: 'Activities' },
    { src: '/images/IMG-20260205-WA0020.jpg.jpeg', alt: 'Balance Bridge Challenge', category: 'Activities' },
    { src: '/images/IMG-20260205-WA0019.jpg.jpeg', alt: 'Sand Play Exploration', category: 'Activities' },
    { src: '/images/IMG-20260620-WA0022.jpg.jpeg', alt: 'Sensorial Tyre Walking', category: 'Activities' },
    { src: '/images/IMG-20260620-WA0021.jpg.jpeg', alt: 'Outdoor Fun Activities', category: 'Activities' },
    { src: '/images/IMG-20260205-WA0025.jpg.jpeg', alt: 'Adventure Play', category: 'Activities' },

    // Learning
    { src: '/curricular images/c 1.jpeg', alt: 'Montessori Learning', category: 'Learning' },
    { src: '/curricular images/c 2.jpeg', alt: 'Hands-on Discovery', category: 'Learning' },
    { src: '/curricular images/c3.jpeg', alt: 'Creative Classroom', category: 'Learning' },
    { src: '/curricular images/c4.jpeg', alt: 'Art & Expression', category: 'Learning' },
    { src: '/images/IMG-20260620-WA0035.jpg.jpeg', alt: 'Montessori Letter Work', category: 'Learning' },
    { src: '/images/IMG-20260620-WA0036.jpg.jpeg', alt: 'Classroom Activity', category: 'Learning' },
    { src: '/images/IMG-20260620-WA0037.jpg.jpeg', alt: 'Guided Learning', category: 'Learning' },
    { src: '/images/IMG-20260620-WA0038.jpg.jpeg', alt: 'Self-Directed Study', category: 'Learning' },
    { src: '/images/IMG-20260620-WA0034.jpg.jpeg', alt: 'Student Discovery', category: 'Learning' },

    // Outdoor Play
    { src: '/images/IMG-20260620-WA0040.jpg.jpeg', alt: 'Joyful Student', category: 'Outdoor Play' },
    { src: '/images/IMG-20260620-WA0041.jpg.jpeg', alt: 'Campus Play Time', category: 'Outdoor Play' },
    { src: '/images/IMG-20260620-WA0042.jpg.jpeg', alt: 'Outdoor Exploration', category: 'Outdoor Play' },
    { src: '/images/IMG-20260620-WA0043.jpg.jpeg', alt: 'Creative Outdoor Play', category: 'Outdoor Play' },
    { src: '/images/IMG-20260620-WA0044.jpg.jpeg', alt: 'Physical Development', category: 'Outdoor Play' },
    { src: '/images/IMG-20260620-WA0045.jpg.jpeg', alt: 'Free Play Session', category: 'Outdoor Play' },
    { src: '/images/IMG-20260205-WA0022.jpg.jpeg', alt: 'Active Play', category: 'Outdoor Play' },

    // Nature
    { src: '/images/IMG-20260620-WA0056.jpg.jpeg', alt: 'Watering Plants', category: 'Nature' },
    { src: '/images/IMG-20260620-WA0057.jpg.jpeg', alt: 'Garden Exploration', category: 'Nature' },
    { src: '/images/IMG-20260620-WA0058.jpg.jpeg', alt: 'Nature Connection', category: 'Nature' },
    { src: '/images/IMG-20260620-WA0055.jpg.jpeg', alt: 'Green Campus Walk', category: 'Nature' },

    // Events
    { src: '/images/IMG-20260620-WA0053.jpg.jpeg', alt: 'School Celebration', category: 'Events' },
    { src: '/images/IMG-20260620-WA0054.jpg.jpeg', alt: 'Campus Event', category: 'Events' },
    { src: '/images/IMG-20260620-WA0052.jpg.jpeg', alt: 'Community Gathering', category: 'Events' },
    { src: '/images/IMG-20260620-WA0059.jpg.jpeg', alt: 'Cultural Programme', category: 'Events' },
    { src: '/images/IMG-20260620-WA0048.jpg.jpeg', alt: 'Student Performance', category: 'Events' },
    { src: '/images/IMG-20260620-WA0049.jpg.jpeg', alt: 'Annual Day', category: 'Events' },
  ];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  // Masonry-like sizing pattern
  const getSizeClass = (idx: number) => {
    const pattern = [
      'md:col-span-2 md:row-span-2',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-2',
      'md:col-span-1 md:row-span-1',
      'md:col-span-2 md:row-span-1',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
      'md:col-span-2 md:row-span-2',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
    ];
    return pattern[idx % pattern.length];
  };

  const navigateLightbox = (dir: 1 | -1) => {
    if (lightboxIdx === null) return;
    const newIdx = lightboxIdx + dir;
    if (newIdx >= 0 && newIdx < filteredImages.length) {
      setLightboxIdx(newIdx);
    }
  };

  return (
    <main className="relative pt-32 pb-20 overflow-x-hidden">
      {/* Background washes */}
      <div className="watercolor-gradient absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="watercolor-gradient absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#FEF9C3]/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* ─── HERO SECTION ─── */}
      <section className="relative max-w-7xl mx-auto px-gutter py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-8">
          {/* Left: Content */}
          <div className="relative z-10">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block uppercase tracking-wider">GALLERY</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
              Moments at <span className="text-[#F59E0B]">SASHA</span> School
            </h1>
            <p className="font-body-lg text-body-lg text-tertiary max-w-lg mb-8 leading-relaxed">
              A glimpse into the vibrant, sun-drenched world of self-directed learning, play, and organic discovery at our campus.
            </p>

            {/* Category Count */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-[#FEF08A]/40">
              <div className="text-center">
                <span className="font-display-lg text-2xl font-bold text-[#F59E0B]">{images.length}</span>
                <p className="text-xs text-tertiary font-medium mt-1">Total Photos</p>
              </div>
              {categories.slice(1, 5).map(cat => (
                <div key={cat} className="text-center">
                  <span className="font-display-lg text-2xl font-bold text-primary">{images.filter(i => i.category === cat).length}</span>
                  <p className="text-xs text-tertiary font-medium mt-1">{cat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Preview Collage */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl z-10 relative">
                <img src="/images/IMG-20260620-WA0062.jpg.jpeg" alt="Campus" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-36 h-36 md:w-48 md:h-48 rounded-[2rem] overflow-hidden border-6 border-white shadow-xl z-20 hero-float" style={{ animationDelay: '1s' }}>
                <img src="/images/IMG-20260620-WA0040.jpg.jpeg" alt="Student" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden border-4 border-white shadow-lg z-20 doodle-float-1">
                <img src="/images/IMG-20260620-WA0056.jpg.jpeg" alt="Nature" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-br from-primary-fixed/15 via-[#FEF9C3]/10 to-secondary-fixed/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FILTER TABS ─── */}
      <section className="max-w-7xl mx-auto px-gutter mb-12">
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-white/40 backdrop-blur-sm rounded-full border border-white/50 shadow-sm max-w-fit mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-bold transition-all duration-300 text-sm ${
                activeCategory === cat 
                  ? 'bg-gradient-to-r from-[#FACC15] to-[#D97706] text-white shadow-md' 
                  : 'text-tertiary hover:bg-white/60'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-1 text-xs opacity-70">({images.filter(i => i.category === cat).length})</span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ─── MASONRY GALLERY ─── */}
      <section className="pb-24 px-gutter max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[220px] gap-4">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setLightboxIdx(idx)}
              className={`${getSizeClass(idx)} rounded-[1.5rem] overflow-hidden group cursor-pointer relative shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
            >
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-white font-bold text-base drop-shadow-lg">{img.alt}</span>
                <span className="text-white/70 text-xs font-mono uppercase tracking-wider mt-1">{img.category}</span>
              </div>
              {/* Category Tag */}
              <span className="absolute top-3 left-3 golden-badge px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm opacity-90">
                {img.category}
              </span>
              {/* Zoom Icon */}
              <div className="absolute top-3 right-3 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <span className="material-symbols-outlined text-white text-base">zoom_in</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-gutter relative overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#8B5CF6] to-[#C4B5FD] p-12 lg:p-24 relative overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-8 left-8 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider inline-block mb-6 backdrop-blur-sm">GALLERY</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 leading-tight">
              See Our Campus <span className="text-[#FEF08A]">in Person</span>
            </h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto mb-12 leading-relaxed">
              Photos can only capture so much. Schedule a visit to experience the warmth and wonder of SASHA School firsthand.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block text-lg">
                Book a Campus Tour
              </Link>
              <Link to="/campus-life" className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all inline-block text-lg backdrop-blur-sm">
                Explore Campus Life
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LIGHTBOX MODAL ─── */}
      {lightboxIdx !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          {/* Close */}
          <button 
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            onClick={() => setLightboxIdx(null)}
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Nav: Previous */}
          {lightboxIdx > 0 && (
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              aria-label="Previous"
            >
              <span className="material-symbols-outlined text-2xl">chevron_left</span>
            </button>
          )}

          {/* Nav: Next */}
          {lightboxIdx < filteredImages.length - 1 && (
            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              aria-label="Next"
            >
              <span className="material-symbols-outlined text-2xl">chevron_right</span>
            </button>
          )}

          {/* Image */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full flex justify-center items-center rounded-[2rem] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={filteredImages[lightboxIdx].src} 
              alt={filteredImages[lightboxIdx].alt} 
              className="max-w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 text-center">
              <p className="font-display-lg text-xl md:text-2xl text-white font-bold drop-shadow-lg">{filteredImages[lightboxIdx].alt}</p>
              <div className="flex items-center justify-center gap-4 mt-3">
                <span className="golden-badge px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{filteredImages[lightboxIdx].category}</span>
                <span className="text-white/50 text-xs font-mono">{lightboxIdx + 1} / {filteredImages.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
