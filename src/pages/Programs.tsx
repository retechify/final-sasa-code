import React from 'react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const curricula = [
    {
      title: 'Montessori Education',
      icon: 'psychology',
      accent: 'from-[#E9DDFF] to-[#F5F3FF]',
      iconBg: 'bg-primary-fixed/40',
      iconColor: 'text-primary',
      description: "Children grow like butterflies; the needs from the stage of pupa to butterfly don't remain the same. Like the colourful butterflies, each and every child is unique, and the needs of the children differ at different stages. SASHA School offers stress-free Montessori learning classrooms which follow the philosophy of Dr. Maria Montessori to CELEBRATE LEARNING where children can 'learn to explore' and 'explore to learn'.",
      tag: 'Child-Centered',
      areas: [
        'Exercises of Practical Life',
        'Sensorial development',
        'Language skills',
        'Logic & Mathematics',
        'Culture & Exploration'
      ],
      benefits: [
        'Individualized, self-paced setup',
        'Social skills & peace education',
        'Natural discipline & order',
        'Practical life skills training',
        'Creative & independent thinking',
        'Self-guided exploration'
      ]
    },
    {
      title: 'Cambridge IGCSE',
      icon: 'school',
      accent: 'from-[#FEF9C3] to-[#FEFCE8]',
      iconBg: 'bg-[#FEF9C3]',
      iconColor: 'text-[#854D0E]',
      featured: true,
      tag: 'Globally Recognized',
      description: 'The International General Certificate of Secondary Education (IGCSE) is a globally recognized curriculum that prepares students for further academic success. It systematically develops critical thinking, analytical problem-solving, and international communication skills.',
      areas: [
        'Comprehensive Subject Coverage',
        'Global Perspectives & Understanding',
        'Critical Thinking Development',
        'Research & Inquiry Skills'
      ],
      benefits: [
        'Internationally recognized standard',
        'Strong academic foundation',
        'Skill-based active learning',
        'Preparation for global education'
      ]
    },
    {
      title: 'Waldorf Education',
      icon: 'filter_drama',
      accent: 'from-[#D3E5F6] to-[#F0F7FF]',
      iconBg: 'bg-tertiary-fixed/40',
      iconColor: 'text-tertiary',
      tag: 'Holistic & Creative',
      description: "The Waldorf education system, also known as the Steiner education method, emphasizes a holistic approach to education, focusing on nurturing a child's intellectual, artistic, and practical skills in a balanced way. It aims to develop the whole child 2013 cognitive, emotional, physical, and social aspects.",
      areas: [
        'Head— Thinking (Intellectual Skills)',
        'Heart— Feeling (Artistic & Social Skills)',
        'Hands— Doing (Practical & Gross Motor Skills)'
      ],
      benefits: [
        'Balanced, holistic development',
        'Nurtures creativity & imagination',
        'Cultivates lifelong love for learning',
        'Non-competitive, stress-free environment',
        'Emotional resilience & empathy'
      ]
    },
    {
      title: 'Reggio Emilia',
      icon: 'palette',
      accent: 'from-[#FFD8ED] to-[#FFF5FA]',
      iconBg: 'bg-secondary-fixed/40',
      iconColor: 'text-secondary',
      tag: 'Artistic Expression',
      description: "Reggio Emilia pedagogy celebrates creative expression as a fundamental tool for children's exploration and understanding. Through art, music, and imaginative play, this approach cultivates curiosity, collaboration, and communication, empowering children to express themselves and construct knowledge in unique, meaningful ways.",
      areas: [
        'Creative Expression via Arts & Music',
        'Reggio-inspired Imaginative Play',
        'Collaborative Project Work',
        'The Atelier (Art Studio Corner) Integration'
      ],
      benefits: [
        'Fosters deep-rooted creativity',
        'Encourages student-led exploration',
        'Develops collaborative problem-solving',
        'Nurtures gross & fine motor arts',
        'Autonomy & self-expression'
      ]
    }
  ];

  return (
    <main className="relative pt-32 pb-32 overflow-hidden">
      {/* Background washes */}
      <div className="watercolor-gradient absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="watercolor-gradient absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#FEF9C3]/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* ─── HERO SECTION ─── */}
      <section className="max-w-7xl mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Left: Content */}
          <div className="relative z-10">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block uppercase tracking-wider">OUR CURRICULA</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
              World-Class <span className="text-[#F59E0B]">Educational</span> Approaches
            </h1>
            <p className="font-body-lg text-body-lg text-tertiary max-w-lg mb-8 leading-relaxed">
              SASHA School seamlessly blends the world's finest curricula: Montessori, IGCSE, Waldorf Education and Reggio Emilia, systematically imparting the UNESCO endorsed 4C's of 21st century life skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="primary-pill px-8 py-4 rounded-full text-white font-bold transition-transform hover:scale-105 shadow-lg text-center">
                Inquire Now
              </Link>
              <Link to="/campus-life" className="golden-pill px-8 py-4 rounded-full font-bold transition-all hover:scale-105 text-center">
                Campus Life
              </Link>
            </div>
          </div>

          {/* Right: Visual— 4 curricula icons grid */}
          <div className="relative flex justify-center">
            <div className="grid grid-cols-2 gap-5 max-w-sm">
              {curricula.map((c, i) => (
                <div key={i} className={`bg-gradient-to-br ${c.accent} rounded-[2rem] p-6 flex flex-col items-center text-center border border-white/60 shadow-lg hover:-translate-y-2 transition-all duration-300 group`}>
                  <div className={`w-14 h-14 ${c.iconBg} rounded-2xl flex items-center justify-center ${c.iconColor} mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                    <span className="material-symbols-outlined text-2xl">{c.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-sm text-primary font-bold leading-snug">{c.title}</h3>
                  <span className="text-[10px] text-tertiary mt-1 font-mono uppercase tracking-wider">{c.tag}</span>
                </div>
              ))}
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-br from-primary-fixed/15 via-[#FEF9C3]/10 to-secondary-fixed/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* ─── PROGRAM DETAILS— Alternating Editorial Cards ─── */}
      <section className="relative z-10">
        <div className="space-y-8">
          {curricula.map((program, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`py-16 ${isEven ? 'bg-[#FEFCE8]/20' : 'bg-surface-container-low/30'} border-y border-white/30`}>
                <div className="max-w-7xl mx-auto px-gutter">
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start ${isEven ? '' : 'direction-rtl'}`}>
                    {/* Left Column— Main Info */}
                    <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
                      {/* Tag */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 ${program.iconBg} rounded-2xl flex items-center justify-center ${program.iconColor} shadow-sm`}>
                          <span className="material-symbols-outlined text-xl">{program.icon}</span>
                        </div>
                        <span className={`${program.featured ? 'golden-badge' : 'bg-primary-fixed/20 text-primary'} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider`}>
                          {program.tag}
                        </span>
                      </div>

                      <h2 className="font-display-lg text-2xl md:text-4xl text-primary font-bold mb-6 leading-tight">{program.title}</h2>
                      <p className="font-body-lg text-base text-tertiary leading-relaxed mb-8">{program.description}</p>

                      {/* Areas */}
                      <div className="mb-8">
                        <h4 className="text-xs font-bold text-[#854D0E] tracking-widest uppercase mb-4 font-mono flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-[#F59E0B]">auto_awesome</span>
                          {program.title === 'Montessori Education' ? '5 Areas of Learning' : 
                           program.title === 'Waldorf Education' ? 'Waldorf Methodology' :
                           program.title === 'Reggio Emilia' ? 'Key Elements' : 'Key Areas'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {program.areas.map((area, aIdx) => (
                            <span key={aIdx} className={`bg-gradient-to-r ${program.accent} border border-white/50 px-4 py-2 rounded-full text-sm font-medium text-primary shadow-sm`}>
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link 
                        to="/contact" 
                        className="primary-pill px-8 py-3.5 rounded-full text-white font-bold transition-transform hover:scale-105 shadow-lg text-center inline-flex items-center gap-2"
                      >
                        Inquire About {program.title.split(' ')[0]}
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </Link>
                    </div>

                    {/* Right Column— Benefits Card */}
                    <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                      <div className={`bg-gradient-to-br ${program.accent} rounded-[2rem] p-8 md:p-10 border border-white/60 shadow-xl relative overflow-hidden`}>
                        {/* Watermark */}
                        <div className="absolute -bottom-8 -right-8 opacity-[0.06] pointer-events-none">
                          <span className="material-symbols-outlined text-[140px]">{program.icon}</span>
                        </div>

                        <h4 className="text-xs font-bold text-secondary tracking-widest uppercase mb-6 font-mono flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-[#F59E0B]">verified</span>
                          Benefits & Outcomes
                        </h4>
                        <div className="space-y-4 relative z-10">
                          {program.benefits.map((b, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-3 group">
                              <div className="w-6 h-6 bg-white/70 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[#F59E0B] text-sm">check</span>
                              </div>
                              <span className="text-sm text-tertiary leading-relaxed font-medium">{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── PHILOSOPHY IN ACTION ─── */}
      <section className="bg-gradient-to-br from-[#F5F3FF]/45 to-[#E0F2FE]/45 border-y border-[#C4B5FD]/20 py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Styled classroom image */}
          <div className="relative group flex justify-center">
            <div className="absolute -inset-4 bg-primary-fixed/20 rounded-[2.5rem] blur-2xl group-hover:bg-primary-fixed/30 transition-all pointer-events-none"></div>
            <div className="organic-cloud-shape overflow-hidden w-80 h-80 md:w-[460px] md:h-[460px] relative shadow-2xl z-10 border-8 border-white/60 hero-float">
              <img 
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-700" 
                src="/images/IMG-20260620-WA0035.jpg.jpeg" 
                alt="Montessori classroom wonder" 
              />
            </div>
          </div>

          {/* Right Column: Key pedagogical philosophies */}
          <div className="space-y-8">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider inline-block">PHILOSOPHY IN ACTION</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
              A Curriculum of <br/>
              <span className="lavender-text-gradient">Pure Wonder</span>
            </h2>
            <p className="font-body-lg text-body-lg text-tertiary leading-relaxed">
              We design every day around the child's natural drive to learn. Through a thoughtfully prepared environment, learning becomes active discovery.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-5 items-start group">
                <div className="w-14 h-14 flex-shrink-0 bg-[#FEF9C3] rounded-2xl flex items-center justify-center text-[#F59E0B] shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-base md:text-lg text-primary font-bold mb-1.5">Mindful Discovery</h4>
                  <p className="font-body-md text-sm text-tertiary leading-relaxed">Our unique approach blends academic curiosity with emotional self-regulation and life-readiness tools.</p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-14 h-14 flex-shrink-0 bg-primary-fixed/40 rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-base md:text-lg text-primary font-bold mb-1.5">Artistic Expression</h4>
                  <p className="font-body-md text-sm text-tertiary leading-relaxed">Every co-curricular activity integrates creative arts as a primary language for cognitive communication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ─── */}
      <section className="py-24 px-gutter relative overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#8B5CF6] to-[#C4B5FD] p-12 lg:p-24 relative overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-8 left-8 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 leading-tight">
              Ready to Explore <span className="text-[#FEF08A]">Our Curricula?</span>
            </h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto mb-12 leading-relaxed">
              Schedule a campus tour to see our curricula in action and meet our educator team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block text-lg">
                Schedule a Campus Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
