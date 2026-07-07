import React from 'react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const programs = [
    {
      title: 'Kindergarten',
      ages: '18 Months - 3 Years',
      ratio: '1:4 Educator Ratio',
      hours: '8:30 AM - 12:30 PM (Half Day) / 3:30 PM (Full Day)',
      icon: 'cloud',
      colorBg: 'bg-secondary-fixed/50',
      description: 'Nurturing the foundational wonder of early childhood. This program focuses heavily on sensory motor integration, self-regulation, early language acquisition, and fine motor skills in a peaceful room designed like a home cozy corner.',
      outcomes: [
        'Tactile & Sensory Motor Coordination',
        'Early Emotional Co-Regulation',
        'Basic Social Cooperation & Sharing',
        'Independent Hand Washing & Eating',
        'Phonetic Sound Association',
        'Creative Self-Expression Play'
      ]
    },
    {
      title: 'Primary (Grades 1 - 2)',
      ages: '4 Years - 6 Years',
      ratio: '1:6 Educator Ratio',
      hours: '8:30 AM - 3:30 PM',
      icon: 'cloudy_filled',
      colorBg: 'bg-primary-fixed/50',
      featured: true,
      description: 'Building bridges between raw imagination and structural academic mastery. Here, child-led Montessori lessons expand into early mathematical beads, biological categorization, world geography puzzles, and phonetic cursive writing.',
      outcomes: [
        'Advanced Phonics & Independent Reading',
        'Tactile Multi-Digit Addition & Subtraction',
        'Botany & Basic Scientific Observation',
        'Conflict Resolution via "Peace Rose"',
        'Introduction to Spanish Language',
        'Clay Hand Sculpting & Creative Drama'
      ]
    },
    {
      title: 'Elementary (Grades 3 - 5)',
      ages: '7 Years - 9 Years',
      ratio: '1:8 Educator Ratio',
      hours: '8:30 AM - 3:30 PM',
      icon: 'filter_drama',
      colorBg: 'bg-tertiary-fixed/50',
      description: 'Empowering independent, globally-conscious critical thinkers. Children engage in cosmic histories, complex ecosystem models, physical geometry, project-based storytelling, and community service operations.',
      outcomes: [
        'Comprehensive Essay & Creative Writing',
        'Geometric Proofs & Practical Division',
        'Climate Science & Agricultural Ecology',
        'Collaborative Project Leadership',
        'Intermediate Spanish & Woodcrafting',
        'Presentation & Peer Mentoring Skills'
      ]
    }
  ];

  const subjects = [
    {
      name: 'Sensory Mathematics',
      desc: 'Instead of abstract worksheets, children hold real wooden beads, golden rods, and geometric cubes, gaining a physical and intuitive sense of decimal values, multiplication, and spatial geometry early on.',
      icon: 'calculate'
    },
    {
      name: 'Cosmic Botanics & Zoology',
      desc: 'Our kids study biology by sowing real seeds, managing active compost boxes, tracking worm micro-habitats, and observing the butterflies in our private outdoor sanctuary.',
      icon: 'yard'
    },
    {
      name: 'Practical Life Skills',
      desc: 'We value hand-eye coordination and real independence. Children slice organic apples with child-safe knives, clean up their tables, water real school houseplants, and weave loom textiles.',
      icon: 'front_hand'
    },
    {
      name: 'Sensory Linguistics & Phonetics',
      desc: 'By tracing sandpaper letters with their index fingers and arranging letters from a movable wooden alphabet, children learn to write beautiful stories before they even learn to hold a pencil.',
      icon: 'spellcheck'
    }
  ];

  return (
    <>
      <div className="watercolor-rainbow pointer-events-none"></div>
      
      <main className="relative pt-40 pb-32 overflow-hidden">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-gutter text-center mb-20">
          <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-4 inline-block uppercase tracking-wider">ACADEMIC JOURNEY</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Where Curious Minds Flourish</h1>
          <p className="font-body-lg text-body-lg text-tertiary max-w-3xl mx-auto">
            Our curriculum organically integrates the rigorous academic standards of child development and premium Montessori education with immersive ecological studies, arts, and emotionally supportive co-regulation.
          </p>
        </section>

        {/* Program Cards Bento Grid-ish Layout */}
        <section className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 items-stretch">
          {programs.map((program, idx) => (
            <div 
              key={idx} 
              className={`glass-card rounded-xl p-8 flex flex-col justify-between text-center relative border-white/60 shadow-lg ${
                program.featured ? 'border-primary/20 ring-2 ring-primary/10 lg:scale-105 bg-white/90' : 'bg-white/70'
              }`}
            >
              {program.featured && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Most Enrolled
                </span>
              )}
              
              <div>
                <div className={`w-20 h-20 mb-6 mx-auto ${program.colorBg} rounded-full flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>{program.icon}</span>
                </div>
                
                <h3 className="font-display-lg text-2xl text-primary font-bold mb-2">{program.title}</h3>
                
                <div className="space-y-1 mb-6 text-xs font-mono text-secondary">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">child_care</span>
                    <span>{program.ages}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">groups</span>
                    <span>{program.ratio}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>{program.hours}</span>
                  </div>
                </div>

                <div className="h-1 w-12 bg-primary/20 rounded-full mb-6 mx-auto"></div>
                <p className="font-body-md text-sm text-tertiary mb-8 leading-relaxed text-left">{program.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-primary tracking-widest uppercase text-left mb-4">Core Learning Outcomes:</h4>
                <ul className="w-full space-y-3 text-left mb-8">
                  {program.outcomes.map((o, oIdx) => (
                    <li key={oIdx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-sm shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                      <span className="font-label-sm text-xs text-on-surface-variant">{o}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/admissions" 
                  className="w-full bg-surface-container-highest hover:bg-primary-fixed text-primary hover:text-on-primary-fixed transition-colors font-semibold py-3 rounded-full text-sm block font-mono tracking-wide uppercase text-center"
                >
                  Start Your Child's Journey
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Cloud Layers Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-1 pointer-events-none">
          <svg className="relative block w-[200%] h-[120px] fill-surface-container-high floating-cloud opacity-40" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,42.7C672,43,768,53,864,58.7C960,64,1056,64,1152,64L1200,64L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
          <svg className="absolute bottom-0 left-[-50%] block w-[200%] h-[150px] fill-white opacity-80" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,42.7C672,43,768,53,864,58.7C960,64,1056,64,1152,64L1200,64L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </main>

      {/* Curriculum Details Block */}
      <section className="bg-surface-container-lowest py-24 border-y border-white/50 relative">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="bg-secondary-fixed/30 text-secondary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">THE CORE SUBJECTS</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-3">An Unrivaled Educational Architecture</h2>
            <p className="font-body-lg text-body-md text-tertiary max-w-2xl mx-auto mt-3">We look at our child development from a multi-dimensional lens, prioritizing practical capability alongside theoretical excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjects.map((sub, idx) => (
              <div key={idx} className="glass-card p-8 rounded-xl border border-white/60 flex gap-5 items-start">
                <div className="w-12 h-12 bg-primary-fixed/40 rounded-full flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">{sub.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-lg text-primary font-bold mb-2">{sub.name}</h3>
                  <p className="font-body-md text-sm text-tertiary leading-relaxed">{sub.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Classroom Design Section */}
      <section className="bg-white py-24 relative">
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-fixed/20 rounded-xl blur-2xl group-hover:bg-primary-fixed/30 transition-all"></div>
            <img 
              className="relative rounded-xl shadow-2xl w-full h-64 md:h-[500px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZHb-lJINmm3725DGogwUG7-h_Fv_lDustxfrpjlfDwKb31mnylzSiEU1ECwuGt3jxLH7dloMiLpLcJxnhGUSXCZEmitW11_b4xanAPti5KxgZ-gpGtzfn4r4L7OQN0w_wiSTp91rx4lmEoNY2RDyRJPq2DaNB9lQ6mpW1D7FwKQd-SeWcKKscsiu2w1BxAdWUKM9paWd7E8IKbhSzSz8sMWBT231MxJTVe7vZO4xjegRRm5g3_dpaT8sNAhz81wh5ttStJHEsFfUH" 
              alt="A serene, sunlit classroom featuring natural wood furniture" 
            />
          </div>
          
          <div>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 leading-tight">A Classroom of <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pure Wonder</span></h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-secondary-fixed rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-lg text-primary font-bold mb-2">Designed for Focus &amp; Peace</h4>
                  <p className="font-body-md text-sm text-tertiary leading-relaxed">Our physical spaces are curated with custom, toxic-free solid wood cabinetry, low-placed child shelves, and cozy sensory reading pods, encouraging deep sustained concentration.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-primary-fixed rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-lg text-primary font-bold mb-2">Artistic and Musical Infusion</h4>
                  <p className="font-body-md text-sm text-tertiary leading-relaxed">Classical harp instruments, premium organic non-toxic paint, clay sculpting materials, and acoustic soundproofing panels are present within the workspace, fostering endless creativity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
