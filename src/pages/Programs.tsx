import React from 'react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const curricula = [
    {
      title: 'Montessori Education',
      icon: 'psychology',
      colorBg: 'bg-secondary-fixed/30',
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
      colorBg: 'bg-primary-fixed/30',
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
      colorBg: 'bg-tertiary-fixed/30',
      tag: 'Holistic & Creative',
      description: "The Waldorf education system, also known as the Steiner education method, emphasizes a holistic approach to education, focusing on nurturing a child's intellectual, artistic, and practical skills in a balanced way. It aims to develop the whole child – cognitive, emotional, physical, and social aspects.",
      areas: [
        'Head — Thinking (Intellectual Skills)',
        'Heart — Feeling (Artistic & Social Skills)',
        'Hands — Doing (Practical & Gross Motor Skills)'
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
      colorBg: 'bg-primary-fixed-dim/20',
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
    <main className="relative pt-40 pb-32 overflow-hidden">
      {/* Glow backgrounds */}
      <div className="watercolor-gradient absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="watercolor-gradient absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-gutter text-center mb-24 relative z-10">
        <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-4 inline-block uppercase tracking-wider">OUR CURRICULA</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
          World-Class Educational Approaches
        </h1>
        <p className="font-body-lg text-body-lg text-tertiary max-w-3xl mx-auto leading-relaxed">
          SASHA School seamlessly blends the world's finest curricula: Montessori, IGCSE, Waldorf Education and Reggio Emilia, systematically imparting the UNESCO endorsed 4C's of 21st century life skills.
        </p>
      </section>

      {/* Program Cards Bento-Style Grid */}
      <section className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-stretch">
        {curricula.map((program, idx) => (
          <div 
            key={idx} 
            className={`glass-card rounded-2xl p-8 md:p-10 flex flex-col justify-between relative border-white/60 shadow-xl transition-all duration-300 bg-white/70 hover:shadow-2xl hover:-translate-y-2`}
          >
            {/* Tag Badges */}
            <span className={`absolute top-0 left-8 -translate-y-1/2 ${
              program.featured ? 'bg-primary text-white' : 'bg-secondary-fixed text-on-secondary-fixed'
            } text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md`}>
              {program.tag}
            </span>
            
            <div className="mb-8">
              {/* Icon Container */}
              <div className={`w-16 h-16 mb-6 ${program.colorBg} rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>{program.icon}</span>
              </div>
              
              {/* Title */}
              <h3 className="font-display-lg text-2xl md:text-3xl text-primary font-bold mb-4">{program.title}</h3>

              {/* Description */}
              <p className="font-body-md text-sm text-tertiary mb-8 leading-relaxed">{program.description}</p>

              {/* Areas list */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-secondary tracking-widest uppercase mb-3 font-mono">
                  {program.title === 'Montessori Education' ? '5 Areas of Learning' : 
                   program.title === 'Waldorf Education' ? 'Waldorf Methodology' :
                   program.title === 'Reggio Emilia' ? 'Key Elements' : 'Key Areas'}
                </h4>
                <ul className="space-y-2.5">
                  {program.areas.map((area, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-sm shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                      <span className="font-label-sm text-sm text-on-surface-variant">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits & Outcomes */}
            <div>
              <div className="h-px w-full bg-primary-fixed/20 mb-6"></div>
              <h4 className="text-xs font-bold text-secondary tracking-widest uppercase mb-3 font-mono">Benefits & Outcomes</h4>
              <ul className="w-full space-y-2.5 mb-8">
                {program.benefits.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container text-sm shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-label-sm text-sm text-on-surface-variant">{b}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact" 
                className="w-full bg-surface-container-highest hover:bg-primary-fixed text-primary hover:text-on-primary-fixed transition-all font-bold py-3.5 rounded-full text-sm block font-mono tracking-wide uppercase text-center border border-primary-fixed/20 hover:scale-102"
              >
                Inquire About {program.title.split(' ')[0]}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Curriculum of Pure Wonder Section (Newly Added Content Enhancement) */}
      <section className="bg-[#FFFBEB]/30 border-y border-[#FDE68A]/20 py-24 my-24 relative z-10">
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Styled classroom image with glowing background */}
          <div className="relative group flex justify-center">
            <div className="absolute -inset-4 bg-primary-fixed/20 rounded-[2.5rem] blur-2xl group-hover:bg-primary-fixed/30 transition-all pointer-events-none"></div>
            <div className="organic-cloud-shape overflow-hidden w-80 h-80 md:w-[460px] md:h-[460px] relative shadow-2xl z-10 border-8 border-white/60 hero-float">
              <img 
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZHb-lJINmm3725DGogwUG7-h_Fv_lDustxfrpjlfDwKb31mnylzSiEU1ECwuGt3jxLH7dloMiLpLcJxnhGUSXCZEmitW11_b4xanAPti5KxgZ-gpGtzfn4r4L7OQN0w_wiSTp91rx4lmEoNY2RDyRJPq2DaNB9lQ6mpW1D7FwKQd-SeWcKKscsiu2w1BxAdWUKM9paWd7E8IKbhSzSz8sMWBT231MxJTVe7vZO4xjegRRm5g3_dpaT8sNAhz81wh5ttStJHEsFfUH" 
                alt="Montessori classroom wonder" 
              />
            </div>
          </div>

          {/* Right Column: Key pedagogical philosophies */}
          <div className="space-y-8">
            <span className="bg-secondary-fixed/40 text-secondary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider inline-block">PHILOSOPHY IN ACTION</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
              A Curriculum of <br/>
              <span className="lavender-text-gradient">Pure Wonder</span>
            </h2>
            <p className="font-body-lg text-body-lg text-tertiary leading-relaxed">
              We design every day around the child's natural drive to learn. Through a thoughtfully prepared environment, learning becomes active discovery.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 flex-shrink-0 bg-secondary-fixed/50 rounded-full flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-base md:text-lg text-primary font-bold mb-1.5">Mindful Discovery</h4>
                  <p className="font-body-md text-sm text-tertiary leading-relaxed">Our unique approach blends academic curiosity with emotional self-regulation and life-readiness tools.</p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 flex-shrink-0 bg-primary-fixed/50 rounded-full flex items-center justify-center text-primary shadow-sm">
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

      {/* Cloud layers bottom dividers */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-1 pointer-events-none">
        <svg className="relative block w-[200%] h-[80px] fill-surface-container-high floating-cloud opacity-40" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,42.7C672,43,768,53,864,58.7C960,64,1056,64,1152,64L1200,64L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
        <svg className="absolute bottom-0 left-[-50%] block w-[200%] h-[100px] fill-white opacity-85" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,42.7C672,43,768,53,864,58.7C960,64,1056,64,1152,64L1200,64L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </main>
  );
}