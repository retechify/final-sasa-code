import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const curricula = [
    {
      title: 'Montessori',
      link: '/programs',
      desc: 'Authentic Montessori at primary level with 5 areas: Exercises of Practical Life, Sensorial, Language, Logic and Culture.',
      img: '/curiculat images/c 1.jpeg',
      colorBg: 'bg-primary-fixed/20'
    },
    {
      title: 'IGCSE',
      link: '/programs',
      desc: 'International General Certificate of Secondary Education - a globally recognized curriculum.',
      img: '/curiculat images/c 2.jpeg',
      colorBg: 'bg-secondary-fixed/20'
    },
    {
      title: 'Waldorf Education',
      link: '/programs',
      desc: 'Holistic approach nurturing Head (Thinking), Heart (Feeling) and Hands (Doing) - Body, Mind and Spirit.',
      img: '/curiculat images/c3.jpeg',
      colorBg: 'bg-tertiary-fixed/20'
    },
    {
      title: 'Reggio Emilio',
      link: '/programs',
      desc: 'Creative expression through art, music and imaginative play with the Atelier corner fostering creativity.',
      img: '/curiculat images/c4.jpeg',
      colorBg: 'bg-primary-fixed-dim/20'
    }
  ];

  const activities = [
    { name: 'Yoga', icon: 'self_improvement', colorBg: 'bg-primary-fixed/20' },
    { name: 'Karate', icon: 'sports_kabaddi', colorBg: 'bg-secondary-fixed/20' },
    { name: 'Silambam', icon: 'sports_martial_arts', colorBg: 'bg-tertiary-fixed/20' },
    { name: 'Skating', icon: 'downhill_skiing', colorBg: 'bg-primary-fixed-dim/20' },
    { name: 'Dance', icon: 'music_note', colorBg: 'bg-secondary-fixed-dim/20' },
    { name: 'Brain Gym', icon: 'psychology', colorBg: 'bg-tertiary-fixed-dim/20' }
  ];

  const features = [
    { value: '18+', label: 'Years of Experience', desc: 'Direct management by trained Montessori Directress with decades of expertise.', icon: 'psychology', bg: 'bg-primary-fixed/30', text: 'text-primary' },
    { value: '4', label: 'World-Class Curricula', desc: 'Montessori, IGCSE, Waldorf and Reggio Emilio blended for whole child development.', icon: 'auto_fix_high', bg: 'bg-[#FEF3C7]/60', text: 'text-[#92400E]', delay: 'md:mt-8', golden: true },
    { value: '1:10', label: 'Low Educator Ratio', desc: 'Personalized attention ensuring every child thrives at their own pace.', icon: 'health_and_safety', bg: 'bg-tertiary-fixed/30', text: 'text-tertiary' },
    { value: '100%', label: 'Life Skills Focus', desc: 'UNESCO endorsed 4C\'s of 21st century skills - Communication, Collaboration, Critical Thinking, Creativity.', icon: 'forest', bg: 'bg-[#FEF3C7]/60', text: 'text-[#92400E]', delay: 'md:mt-8', golden: true }
  ];

  const faqs = [
    {
      question: "What curricula does SASHA School offer?",
      answer: "SASHA School offers a unique blend of the world's finest curricula: Montessori, IGCSE, Waldorf Education and Reggio Emilio. This carefully crafted approach systematically imparts the UNESCO endorsed 4C's of 21st century life skills, ensuring whole child development."
    },
    {
      question: "What age groups do you accept?",
      answer: "We welcome children from Toddler Pre-KG to Grade V. Our stress-free Montessori learning classrooms follow the philosophy of Dr. Maria Montessori to CELEBRATE LEARNING where children can 'learn to explore' and 'explore to learn'."
    },
    {
      question: "What extra-curricular activities are available?",
      answer: "We offer a wide range of extra-curricular activities including Yoga, Karate, Silambam (traditional stick martial art), Skating, Dance, and Brain Gym to ensure holistic physical and mental development."
    },
    {
      question: "What makes SASHA School different?",
      answer: "We are one of the pioneers in implementing authentic Montessori at primary level in South India. Our exclusive Life Skills and Leadership Programme, direct management by a trained Montessori Directress, and a battalion of professionals supporting the school system make us unique."
    }
  ];

  return (
    <main className="relative pt-32 overflow-x-hidden">
      {/* Background Ornaments */}
      <div className="watercolor-gradient absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"></div>
      <div className="watercolor-gradient absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"></div>
      
      <section className="relative max-w-7xl mx-auto px-gutter py-12 md:py-24 flex flex-col items-center text-center overflow-visible">
        
        <div className="relative w-full max-w-5xl mb-20 flex justify-center">
          {/* Rainbow Arc */}
          <div className="hero-rainbow absolute -top-20 left-1/2 -translate-x-1/2 w-[120%] aspect-square opacity-20 rounded-full pointer-events-none"></div>
          
          <div className="relative">
            {/* Main Hero Circle */}
            <div className="relative z-10 mx-auto w-80 h-80 md:w-[560px] md:h-[560px] lg:w-[620px] lg:h-[620px] rounded-full overflow-hidden border-8 border-white shadow-2xl hero-float">
              <img 
                className="w-full h-full object-cover" 
                src="/hero%20image/hero%20image.png" 
                alt="SASHA School Happy Kids"
              />
            </div>

            {/* Overlapping Dora Montessori Logo Circle */}
            <div className="absolute bottom-2 -right-2 md:bottom-4 md:-right-4 lg:bottom-6 lg:-right-6 z-20 w-28 h-28 md:w-44 md:h-44 rounded-full bg-white border-4 md:border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img 
                src="/dora logo/dora.jpeg" 
                alt="Dora Montessori School" 
                className="w-full h-full object-contain p-2"
              />
            </div>
          </div>
        </div>
        
        <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block uppercase tracking-wider">Happy Schooling</span>
        
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-3xl mb-6 leading-tight">
          Where Little Minds <span className="lavender-text-gradient">Bloom Beautifully</span>
        </h1>
        
        <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mb-4 leading-relaxed">
          Premium Primary School for Progressive Parents
        </p>

        <p className="font-headline-md text-headline-md text-secondary mb-10">
          Admission Open — Toddler Pre-KG to Grade V
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="primary-pill px-10 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg text-center inline-block">
            Book a Campus Visit
          </Link>
          <a href="tel:+919750170007" className="golden-pill px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 text-center inline-block">
            +91 97501 70007
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#FFFBEB]/40 backdrop-blur-md border-y border-[#FDE68A]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-gutter relative z-10">
          <div className="text-center mb-16">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">ABOUT SASHA</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-4 max-w-4xl mx-auto leading-tight">
              "There is more in LIFE than ACADEMICS, but we are good at that too"
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-body-lg text-body-lg text-tertiary leading-relaxed mb-10">
              Embark on an educational journey where success goes beyond exams, preparing children for the grander challenge – LIFE itself. To nurture essential life skills, we have seamlessly blended the world's finest curricula: IGCSE, Montessori, Waldorf and Reggio Emilio. This carefully crafted approach systematically imparts the UNESCO endorsed 4C's of 21st century life skills, ensuring WHOLE CHILD development.
            </p>
            <Link to="/about" className="primary-pill px-8 py-3.5 rounded-full text-white font-bold transition-transform hover:scale-105 inline-block">
              Learn Our Philosophy
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-10 left-10 w-48 h-48 bg-[#FDE68A]/25 rounded-full blur-2xl floating-anim"></div>
      </section>

      {/* Bento Features Grid */}
      <section className="max-w-7xl mx-auto px-gutter py-24 relative">
        <div className="text-center mb-16">
          <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">Key Pillars</span>
          <h2 className="font-display-lg text-headline-lg text-primary mt-4">Nurtured For the Universe</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const badgeDoodles = [
              { icon: 'star', color: 'text-[#FBBF24] bg-[#FEF3C7] border-[#FDE68A]' },
              { icon: 'cloud', color: 'text-[#38BDF8] bg-[#E0F2FE] border-[#BAE6FD]' },
              { icon: 'favorite', color: 'text-[#F472B6] bg-[#FCE7F3] border-[#FBCFE8]' },
              { icon: 'spa', color: 'text-[#34D399] bg-[#D1FAE5] border-[#A7F3D0]' }
            ];
            const badge = badgeDoodles[idx % badgeDoodles.length];
            return (
              <div key={idx} className={`${(feat as any).golden ? 'golden-glass-card' : 'glass-card'} p-8 rounded-lg flex flex-col gap-4 group hover:-translate-y-2 transition-all duration-300 relative ${feat.delay || ''}`}>
                {/* Attached Doodle Badge */}
                <div className={`absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full border-2 ${badge.color} flex items-center justify-center shadow-md scale-90 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <span className="material-symbols-outlined text-base font-bold">{badge.icon}</span>
                </div>
                <div className={`w-12 h-12 rounded-full ${feat.bg} flex items-center justify-center ${feat.text}`}>
                  <span className="material-symbols-outlined">{feat.icon}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display-lg text-3xl font-bold text-primary">{feat.value}</span>
                  <h3 className="font-headline-md text-base text-on-surface font-semibold">{feat.label}</h3>
                </div>
                <p className="font-body-md text-sm text-tertiary leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Curricula Section */}
      <section className="py-24 bg-surface-container-low/40 border-y border-white/40 relative">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="bg-secondary-fixed/30 text-secondary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">OUR CURRICULA</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-4">World-Class Educational Approaches</h2>
            <p className="font-body-lg text-tertiary max-w-2xl mx-auto mt-4">A balanced mix of international methodologies tailored for child growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curricula.map((item, idx) => {
              const curriculaBadges = [
                { icon: 'menu_book', color: 'text-[#A78BFA] bg-[#F5F3FF] border-[#DDD6FE]' },
                { icon: 'school', color: 'text-[#FB923C] bg-[#FFF7ED] border-[#FFEDD5]' },
                { icon: 'palette', color: 'text-[#F87171] bg-[#FEF2F2] border-[#FEE2E2]' },
                { icon: 'emoji_emotions', color: 'text-[#34D399] bg-[#ECFDF5] border-[#D1FAE5]' }
              ];
              const badge = curriculaBadges[idx % curriculaBadges.length];
              return (
                <div key={idx} className="glass-card p-6 rounded-xl flex flex-col gap-5 group hover:-translate-y-2 transition-all duration-300 bg-white/60 relative">
                  {/* Attached Curricula Badge */}
                  <div className={`absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full border-2 ${badge.color} flex items-center justify-center shadow-md scale-95 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <span className="material-symbols-outlined text-lg">{badge.icon}</span>
                  </div>
                  <div className="w-full h-48 rounded-xl overflow-hidden relative shadow-md">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="flex flex-col gap-3 flex-grow">
                    <h3 className="font-display-lg text-xl text-primary font-bold">{item.title}</h3>
                    <p className="font-body-md text-xs text-tertiary leading-relaxed">{item.desc}</p>
                  </div>
                  <Link to={item.link} className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                    Learn Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Extra-Curricular Activities Section */}
      <section className="py-24 max-w-7xl mx-auto px-gutter relative overflow-hidden">
        <div className="text-center mb-16">
          <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">BEYOND THE CLASSROOM</span>
          <h2 className="font-display-lg text-headline-lg text-primary mt-4">Gamut of Co-Curricular Activities</h2>
          <p className="font-body-lg text-body-md text-tertiary max-w-xl mx-auto mt-4">Cultivating multiple intelligences through customized movement and arts.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {activities.map((activity, idx) => (
            <div key={idx} className={`${idx % 3 === 1 ? 'golden-glass-card' : 'glass-card'} p-6 rounded-xl text-center group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center h-full ${idx % 3 === 1 ? '' : 'bg-white/70'}`}>
              <div className={`w-14 h-14 rounded-full ${activity.colorBg} flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-2xl">{activity.icon}</span>
              </div>
              <h3 className="font-headline-md text-base text-primary font-bold">{activity.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-24 bg-surface-container-low/30 border-t border-white/40">
        <div className="max-w-4xl mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="bg-primary-fixed/30 text-primary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">QUESTIONS & ANSWERS</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-card rounded-xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-white/40 transition-colors"
                >
                  <span className="font-headline-md text-base md:text-lg text-primary font-bold">{faq.question}</span>
                  <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}>
                    keyboard_arrow_down
                  </span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    activeFaq === idx ? 'max-h-60 opacity-100 border-t border-primary-fixed/20' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="px-6 py-5 font-body-md text-sm text-tertiary leading-relaxed bg-white/30">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-[#FAF5FF] relative text-center px-gutter overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[140%] aspect-square opacity-10 rounded-full bg-gradient-to-b from-primary to-secondary pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="bg-primary-fixed/30 text-primary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider inline-block mb-4">HAPPY SCHOOLING!</span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
            Leaders Groomed for Life – <br/>Our Promise to Parents!
          </h2>
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto mb-10 leading-relaxed">
            One of the Pioneers in implementing authentic Montessori at primary level in South India. Exclusive Life Skills and Leadership Programme with a school system supported by a battalion of professionals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="primary-pill px-10 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg text-center inline-block">
              Schedule a Campus Visit
            </Link>
            <Link to="/programs" className="golden-pill px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 text-center inline-block">
              Explore Our Curricula
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}