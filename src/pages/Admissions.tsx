import React from 'react';
import { Link } from 'react-router-dom';

export default function Admissions() {
  const process = [
    {
      title: '1. Enquiry',
      icon: 'mail',
      desc: 'Tell us about your little one via our inquiry portal. We will share information about our school within 24 hours.'
    },
    {
      title: '2. Campus Visit',
      icon: 'map',
      desc: 'Take a personal tour of our campus. Experience our Montessori classrooms, facilities and meet our team.'
    },
    {
      title: '3. Enrollment Intake',
      icon: 'edit_document',
      desc: 'Submit the required documents and complete the enrollment process. Children participate in a playful interaction.'
    },
    {
      title: '4. Welcome Home',
      icon: 'verified',
      desc: 'Your family is welcomed into the SASHA community. Your child meets their classmates and guide before starting.'
    }
  ];

  const features = [
    'One of the Pioneers in implementing authentic Montessori at primary level in South India',
    'Exclusive Life Skills and Leadership Programme',
    'Direct management by Correspondent cum Montessori Directress with 18 years of experience',
    'Choicest of the chosen International curricula',
    'School system supported by a battalion of professionals',
    'Structured physical education and fitness program',
    'A gamut of curated Co-curricular activities',
    'Parents as Partners'
  ];

  return (
    <>
      <main className="pt-32">
        <section className="relative px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto py-16 flex flex-col items-center text-center">
          <span className="material-symbols-outlined absolute top-10 left-10 text-primary-fixed-dim text-6xl opacity-40 floating pointer-events-none" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
          <span className="material-symbols-outlined absolute top-20 right-20 text-secondary-fixed text-4xl opacity-50 sparkle-anim pointer-events-none">auto_awesome</span>
          <span className="material-symbols-outlined absolute bottom-10 left-1/4 text-primary opacity-30 floating pointer-events-none" style={{ animationDelay: '2s' }}>star</span>
          <span className="material-symbols-outlined absolute bottom-20 right-1/4 text-secondary-fixed opacity-40 floating pointer-events-none" style={{ animationDelay: '1.2s', fontSize: '48px' }}>rocket_launch</span>
          <span className="material-symbols-outlined absolute top-1/2 left-1/2 text-tertiary-fixed opacity-35 floating pointer-events-none" style={{ animationDelay: '2.8s', fontSize: '40px' }}>celebration</span>
          
          <div className="relative w-full max-w-2xl aspect-[4/3] mb-12">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary-fixed via-primary-fixed to-tertiary-fixed rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img 
              className="w-full h-full object-cover rounded-[5rem] shadow-2xl relative z-10 border-8 border-white/50" 
              src="/hero%20image/hero%20image.png" 
              alt="SASHA School" 
            />
          </div>
          
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 max-w-3xl leading-tight">
            Leaders Groomed for Life – Our Promise to Parents!
          </h1>
          
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mb-10 leading-relaxed">
            We firmly focus to nurture our children not only for UNIVERSITY, but also for UNIVERSE. Let's partner in making your child's educational experience truly exceptional!
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform text-center inline-block">
              Schedule a Campus Visit
            </Link>
            <Link to="/programs" className="bg-white border-2 border-primary/20 text-primary px-10 py-4 rounded-full font-bold hover:bg-surface transition-colors text-center inline-block">
              Explore Our Curricula
            </Link>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low/50 relative overflow-hidden border-y border-white/50">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">OUR PROMISE</span>
              <h2 className="font-display-lg text-headline-lg text-primary mt-3">Why Choose SASHA School?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="glass-card p-6 rounded-xl flex items-start gap-4 bg-white/70">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="font-body-md text-sm text-tertiary">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">ADMISSIONS PROCESS</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-3">Begin Your Child's Journey</h2>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-stretch gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center flex-1 group glass-card p-6 rounded-xl bg-white/70">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform border border-primary-fixed relative mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-secondary-fixed rounded-full flex items-center justify-center font-bold text-primary text-xs">{idx + 1}</span>
                </div>
                <h3 className="font-headline-md text-base text-primary font-bold mb-3">{step.title}</h3>
                <p className="font-body-md text-xs text-tertiary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-white relative text-center px-margin-mobile">
          <div className="max-w-2xl mx-auto">
            <span className="material-symbols-outlined text-primary-fixed-dim text-5xl mb-4 sparkle-anim pointer-events-none">stars</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 font-bold">Happy Schooling!</h2>
            <p className="font-body-lg text-body-md text-tertiary mb-10 leading-relaxed">Let's partner in making your child's educational experience truly exceptional!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-primary to-primary-container text-white px-12 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
                Contact Us Today
              </Link>
              <Link to="/about" className="bg-white border-2 border-outline-variant text-tertiary px-12 py-4 rounded-full font-bold hover:bg-surface-container transition-colors">
                Meet Our Founders
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}