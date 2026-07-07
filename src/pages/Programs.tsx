import React from 'react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const curricula = [
    {
      title: 'Montessori Education',
      icon: 'psychology',
      colorBg: 'bg-secondary-fixed/50',
      description: 'Children grow like butterflies, the needs from the stage of pupa to butterfly doesn\'t remain the same. Like the colourful butterflies, each and every child is unique, the needs of the children differ at different stages. SASHA School offers stress-free Montessori learning classrooms which follows the philosophy of Dr. Maria Montessori to CELEBRATE LEARNING where children can \'learn to explore\' and \'explore to learn\'.',
      areas: [
        'Exercises of Practical Life',
        'Sensorial',
        'Language',
        'Logic',
        'Culture'
      ],
      benefits: [
        'Individualized Setup',
        'Social Skills and Peace Education',
        'Discipline & Order',
        'Practical Life Skills',
        'Child Centered Learning',
        'Creative Thinking',
        'Self Discipline'
      ]
    },
    {
      title: 'IGCSE',
      icon: 'school',
      colorBg: 'bg-primary-fixed/50',
      featured: true,
      description: 'The International General Certificate of Secondary Education (IGCSE) is a globally recognized curriculum that prepares students for further academic success. It develops critical thinking, problem-solving and communication skills.',
      areas: [
        'Comprehensive Subject Coverage',
        'Global Perspective',
        'Critical Thinking Development',
        'Research Skills'
      ],
      benefits: [
        'Internationally Recognized',
        'Strong Academic Foundation',
        'Skill-Based Learning',
        'Preparation for Higher Education'
      ]
    },
    {
      title: 'Waldorf Education',
      icon: 'filter_drama',
      colorBg: 'bg-tertiary-fixed/50',
      description: 'The Waldorf education system, also known as the Steiner education method, emphasizes a holistic approach to education, focusing on nurturing a child\'s intellectual, artistic, and practical skills in a balanced way. Body, Mind and Spirit: Waldorf education aims to develop the whole child – cognitive, emotional, physical, and social aspects.',
      areas: [
        'Head - Thinking: Intellectual Skills',
        'Heart - Feeling: Artistic Skills',
        'Hands - Doing: Practical Skills'
      ],
      benefits: [
        'Holistic Development',
        'Creativity and Imagination',
        'Love for Learning',
        'Non-Competitive Environment',
        'Emotional and Social Growth'
      ]
    },
    {
      title: 'Reggio Emilio',
      icon: 'palette',
      colorBg: 'bg-primary-fixed-dim/30',
      description: 'Reggio Emilia pedagogy celebrates creative expression as a fundamental tool for children\'s exploration and understanding. Through art, music, and imaginative play, this approach cultivates curiosity, collaboration, and communication, empowering children to express themselves and construct knowledge in unique, meaningful ways.',
      areas: [
        'Creative Expression',
        'Art and Music Integration',
        'Imaginative Play',
        'Atelier Corner'
      ],
      benefits: [
        'Fosters Creativity',
        'Encourages Exploration',
        'Develops Problem-Solving Skills',
        'Cultivates Autonomy',
        'Nurtures Lifelong Passion for Learning'
      ]
    }
  ];

  return (
    <>
      <div className="watercolor-rainbow pointer-events-none"></div>
      
      <main className="relative pt-40 pb-32 overflow-hidden">
        <span className="material-symbols-outlined floating-doodle absolute top-32 left-8 text-primary-fixed-dim" style={{ fontSize: '40px' }}>auto_stories</span>
        <span className="material-symbols-outlined floating-doodle absolute top-48 right-12 text-secondary-fixed-dim" style={{ fontSize: '36px', animationDelay: '1s' }}>palette</span>
        <span className="material-symbols-outlined floating-doodle absolute bottom-40 left-1/4 text-tertiary-fixed-dim" style={{ fontSize: '32px', animationDelay: '2s' }}>lightbulb</span>
        <span className="material-symbols-outlined floating-doodle absolute top-1/3 right-1/3 text-primary-container" style={{ fontSize: '44px', animationDelay: '0.8s' }}>diversity</span>
        <section className="max-w-7xl mx-auto px-gutter text-center mb-20">
          <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-4 inline-block uppercase tracking-wider">OUR CURRICULA</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">World-Class Educational Approaches</h1>
          <p className="font-body-lg text-body-lg text-tertiary max-w-3xl mx-auto">
            SASHA School seamlessly blends the world's finest curricula: Montessori, IGCSE, Waldorf Education and Reggio Emilio, systematically imparting the UNESCO endorsed 4C's of 21st century life skills.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-stretch">
          {curricula.map((program, idx) => (
            <div 
              key={idx} 
              className={`glass-card rounded-xl p-8 flex flex-col justify-between relative border-white/60 shadow-lg ${
                program.featured ? 'border-primary/20 ring-2 ring-primary/10 bg-white/90' : 'bg-white/70'
              }`}
            >
              {program.featured && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Globally Recognized
                </span>
              )}
              
              <div>
                <div className={`w-20 h-20 mb-6 mx-auto ${program.colorBg} rounded-full flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>{program.icon}</span>
                </div>
                
                <h3 className="font-display-lg text-2xl text-primary font-bold mb-4 text-center">{program.title}</h3>

                <p className="font-body-md text-sm text-tertiary mb-6 leading-relaxed">{program.description}</p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-primary tracking-widest uppercase mb-3">
                    {program.title === 'Montessori Education' ? '5 Areas of Learning' : 
                     program.title === 'Waldorf Education' ? 'Waldorf Methodology' :
                     program.title === 'Reggio Emilio' ? 'Key Elements' : 'Key Areas'}
                  </h4>
                  <ul className="space-y-2">
                    {program.areas.map((area, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary text-sm shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                        <span className="font-label-sm text-xs text-on-surface-variant">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="h-px w-full bg-primary/10 mb-6"></div>
                <h4 className="text-xs font-bold text-primary tracking-widest uppercase mb-3">Benefits & Outcomes</h4>
                <ul className="w-full space-y-2 mb-6">
                  {program.benefits.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary-fixed-dim text-sm shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="font-label-sm text-xs text-on-surface-variant">{b}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="w-full bg-surface-container-highest hover:bg-primary-fixed text-primary hover:text-on-primary-fixed transition-colors font-semibold py-3 rounded-full text-sm block font-mono tracking-wide uppercase text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </section>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-1 pointer-events-none">
          <svg className="relative block w-[200%] h-[120px] fill-surface-container-high floating-cloud opacity-40" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,42.7C672,43,768,53,864,58.7C960,64,1056,64,1152,64L1200,64L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
          <svg className="absolute bottom-0 left-[-50%] block w-[200%] h-[150px] fill-white opacity-80" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,42.7C672,43,768,53,864,58.7C960,64,1056,64,1152,64L1200,64L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </main>
    </>
  );
}