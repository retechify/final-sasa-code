import React from 'react';
import { Link } from 'react-router-dom';

export default function Admissions() {
  const process = [
    {
      title: '1. Enquiry',
      icon: 'mail',
      desc: 'Tell us about your little one via our inquiry portal. We will share detailed prospectus information about our school within 24 hours.'
    },
    {
      title: '2. Campus Visit',
      icon: 'map',
      desc: 'Take a personal tour of our campus. Experience our sun-drenched Montessori classrooms, facilities and meet our educator team.'
    },
    {
      title: '3. Enrollment Intake',
      icon: 'edit_document',
      desc: 'Submit the required documents and complete the registration. Children participate in a playful, stress-free interaction.'
    },
    {
      title: '4. Welcome Home',
      icon: 'verified',
      desc: 'Your family is welcomed into the SASHA community. Your child meets their classmates and guides before starting.'
    }
  ];

  const features = [
    'One of the Pioneers in implementing authentic Montessori at primary level in South India',
    'Exclusive Life Skills and Leadership Programme systematically integrated into weekly learning',
    'Direct management by Correspondent cum Montessori Directress with 18 years of active experience',
    'Choicest of the chosen International curricula (Montessori, IGCSE, Waldorf, Reggio Emilia)',
    'School system supported by a battalion of professionals and subject matter experts',
    'Structured physical education and fitness program by specialized coaches',
    'A gamut of curated co-curricular and extra-curricular activities for whole child growth',
    'Parents as Partners — active parental collaboration in character formation'
  ];

  const criteria = [
    {
      title: 'Age Eligibility',
      desc: 'Nurturing children from 2.5 to 6 years of age in our primary cycles.',
      icon: 'child_care',
      bg: 'bg-secondary-container',
      text: 'text-on-secondary-container'
    },
    {
      title: 'Intake Periods',
      desc: 'Main intake in June & August; rolling admissions based on availability.',
      icon: 'calendar_today',
      bg: 'bg-primary-fixed',
      text: 'text-on-primary-fixed'
    },
    {
      title: 'Inclusivity',
      desc: 'We celebrate diverse neurotypes, backgrounds, and learning styles.',
      icon: 'diversity_3',
      bg: 'bg-tertiary-fixed',
      text: 'text-on-tertiary-fixed'
    },
    {
      title: 'Parent Alignment',
      desc: 'Families who resonate with the Montessori philosophy and value emotional growth.',
      icon: 'favorite',
      bg: 'bg-secondary-fixed',
      text: 'text-on-secondary-fixed'
    }
  ];

  return (
    <main className="relative pt-32 overflow-x-hidden">
      {/* Background gradients */}
      <div className="watercolor-gradient absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"></div>
      <div className="watercolor-gradient absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"></div>
      
      {/* Hero Section */}
      <section className="relative px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto py-16 md:py-24 flex flex-col items-center text-center">
        {/* Whimsical image frame */}
        <div className="relative w-full max-w-2xl aspect-[4/3] mb-12 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary-fixed via-primary-fixed to-tertiary-fixed rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none"></div>
          <div className="organic-cloud-shape overflow-hidden w-80 h-80 md:w-[460px] md:h-[460px] relative shadow-2xl z-10 border-8 border-white/50 hero-float">
            <img 
              className="w-full h-full object-cover" 
              src="/hero%20image/hero%20image.png" 
              alt="SASHA School smiling kids" 
            />
          </div>
        </div>
        
        <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block uppercase tracking-wider">ADMISSIONS OPEN</span>

        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 max-w-4xl leading-tight">
          Leaders Groomed for Life – Our Promise to Parents!
        </h1>
        
        <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mb-10 leading-relaxed">
          We firmly focus to nurture our children not only for UNIVERSITY, but also for UNIVERSE. Let's partner in making your child's educational experience truly exceptional!
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="primary-pill px-10 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg text-center inline-block">
            Start Registration / Enquiry
          </Link>
          <Link to="/programs" className="golden-pill px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 text-center inline-block">
            Explore Our Curricula
          </Link>
        </div>
      </section>

      {/* Promise / Why Choose SASHA Section */}
      <section className="py-24 bg-surface-container-low/50 relative overflow-hidden border-y border-white/50">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">OUR PROMISE</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-4">Why Choose SASHA School?</h2>
            <p className="font-body-lg text-tertiary max-w-2xl mx-auto mt-4">Pioneering progressive primary education with world-class frameworks.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="glass-card p-6 md:p-8 rounded-2xl flex items-start gap-4 bg-white/70 hover:shadow-xl transition-all duration-300">
                <div className="bg-primary-fixed/40 p-2.5 rounded-full flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div className="space-y-1">
                  <span className="font-body-lg text-base text-tertiary leading-relaxed block">{feat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Process Section */}
      <section className="py-24 max-w-7xl mx-auto px-gutter relative">
        <div className="text-center mb-20">
          <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">ADMISSIONS PROCESS</span>
          <h2 className="font-display-lg text-headline-lg text-primary mt-4">Begin Your Child's Journey</h2>
          <p className="font-body-md text-tertiary mt-2">Four gentle steps to becoming part of our family.</p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-stretch gap-8">
          {/* Curved Connector (SVG) - Visible on Desktop */}
          <svg className="absolute top-[28%] left-0 w-full hidden md:block h-24 pointer-events-none" fill="none" viewBox="0 0 1000 100">
            <path className="text-primary/20" d="M50 50 C 250 10, 350 90, 500 50 C 650 10, 750 90, 950 50" stroke="currentColor" strokeDasharray="8 8" strokeWidth="2.5"></path>
          </svg>
          
          {process.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center flex-1 group glass-card p-6 md:p-8 rounded-2xl bg-white/75 border border-white/50 shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform border border-primary/30 relative mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-secondary-fixed rounded-full flex items-center justify-center font-bold text-primary text-xs shadow-sm">{idx + 1}</span>
              </div>
              <h3 className="font-display-lg text-lg text-primary font-bold mb-3">{step.title.split('. ')[1] || step.title}</h3>
              <p className="font-body-md text-xs text-tertiary leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Criteria & Resources Section (Newly Added Content Enhancement) */}
      <section className="py-24 px-gutter max-w-7xl mx-auto border-t border-primary-fixed/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Criteria Column */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="bg-primary-fixed/30 text-primary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">ELIGIBILITY</span>
              <h2 className="font-display-lg text-headline-lg text-primary mt-4 mb-6">Admissions Criteria</h2>
              <p className="font-body-lg text-tertiary leading-relaxed">
                We believe in partnering with parents who resonate with our progressive approach. Our admissions are simple and centered around the child.
              </p>
            </div>

            <div className="space-y-8">
              {criteria.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 ${item.text} shadow-sm`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-base md:text-lg text-primary font-bold mb-1.5">{item.title}</h4>
                    <p className="font-body-md text-sm text-tertiary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-5 purple-glass p-8 md:p-10 rounded-[2rem] relative overflow-hidden shadow-xl bg-white/70 border border-white/40">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="font-display-lg text-2xl text-primary font-bold mb-6">Admissions Resources</h3>
            <p className="font-body-md text-sm text-tertiary mb-8 leading-relaxed">Everything you need to make an informed decision for your child's future.</p>
            
            <div className="space-y-4">
              <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center justify-between p-4 bg-white/60 hover:bg-white/95 transition-all rounded-xl group border border-primary-fixed/10 hover:scale-102">
                <span className="font-headline-md text-sm text-primary font-bold">Fee Structure 2024-25</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-y-[-2px] transition-transform">download</span>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center justify-between p-4 bg-white/60 hover:bg-white/95 transition-all rounded-xl group border border-primary-fixed/10 hover:scale-102">
                <span className="font-headline-md text-sm text-primary font-bold">Parent Handbook</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">menu_book</span>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center justify-between p-4 bg-white/60 hover:bg-white/95 transition-all rounded-xl group border border-primary-fixed/10 hover:scale-102">
                <span className="font-headline-md text-sm text-primary font-bold">Financial Aid Policy</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-y-[-2px] transition-transform">account_balance_wallet</span>
              </a>
            </div>

            <div className="mt-8 p-5 border border-primary-fixed/30 rounded-xl bg-primary-fixed/10">
              <p className="font-label-sm text-xs text-primary font-bold uppercase tracking-widest mb-1.5">Admissions Office</p>
              <p className="font-body-md text-xs text-tertiary font-medium">Monday – Friday: 9:00 AM – 4:00 PM</p>
              <p className="font-body-md text-sm text-primary font-bold mt-2 font-mono">admissions@sashaschool.edu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-styled CTA */}
      <section className="py-24 bg-white relative text-center px-margin-mobile border-t border-primary-fixed/20">
        <div className="max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-primary-fixed-dim text-6xl mb-4 sparkle-anim pointer-events-none">stars</span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 font-bold">Happy Schooling!</h2>
          <p className="font-body-lg text-body-lg text-tertiary mb-10 leading-relaxed">Let's partner in making your child's educational experience truly exceptional!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="primary-pill px-12 py-4 rounded-full text-white font-bold hover:scale-105 transition-transform shadow-xl">
              Contact Us Today
            </Link>
            <Link to="/about" className="bg-white border-2 border-outline-variant text-tertiary px-12 py-4 rounded-full font-bold hover:bg-surface-container transition-colors">
              Meet Our Founders
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}