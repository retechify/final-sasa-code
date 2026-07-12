import React from 'react';
import { Link } from 'react-router-dom';

export default function Admissions() {
  const process = [
    {
      title: 'Enquiry',
      icon: 'mail',
      desc: 'Tell us about your little one via our inquiry portal. We will share detailed prospectus information about our school within 24 hours.',
      accent: 'from-[#E9DDFF] to-[#F5F3FF]',
      num: '01'
    },
    {
      title: 'Campus Visit',
      icon: 'map',
      desc: 'Take a personal tour of our campus. Experience our sun-drenched Montessori classrooms, facilities and meet our educator team.',
      accent: 'from-[#FEF9C3] to-[#FEFCE8]',
      num: '02'
    },
    {
      title: 'Enrollment Intake',
      icon: 'edit_document',
      desc: 'Submit the required documents and complete the registration. Children participate in a playful, stress-free interaction.',
      accent: 'from-[#D3E5F6] to-[#F0F7FF]',
      num: '03'
    },
    {
      title: 'Welcome Home',
      icon: 'verified',
      desc: 'Your family is welcomed into the SASHA community. Your child meets their classmates and guides before starting.',
      accent: 'from-[#FFD8ED] to-[#FFF5FA]',
      num: '04'
    }
  ];

  const features = [
    { text: 'One of the Pioneers in implementing authentic Montessori at primary level in South India', icon: 'psychology' },
    { text: 'Exclusive Life Skills and Leadership Programme systematically integrated into weekly learning', icon: 'stars' },
    { text: 'Direct management by Correspondent cum Montessori Directress with 18 years of active experience', icon: 'school' },
    { text: 'Choicest of the chosen International curricula (Montessori, IGCSE, Waldorf, Reggio Emilia)', icon: 'auto_fix_high' },
    { text: 'School system supported by a battalion of professionals and subject matter experts', icon: 'groups' },
    { text: 'Structured physical education and fitness program by specialized coaches', icon: 'sports_tennis' },
    { text: 'A gamut of curated co-curricular and extra-curricular activities for whole child growth', icon: 'palette' },
    { text: 'Parents as Partners— active parental collaboration in character formation', icon: 'favorite' }
  ];

  const criteria = [
    {
      title: 'Age Eligibility',
      desc: 'Nurturing children from 2.5 to 6 years of age in our primary cycles.',
      icon: 'child_care',
      accent: 'from-[#FFD8ED] to-[#FFF5FA]'
    },
    {
      title: 'Intake Periods',
      desc: 'Main intake in June & August; rolling admissions based on availability.',
      icon: 'calendar_today',
      accent: 'from-[#E9DDFF] to-[#F5F3FF]'
    },
    {
      title: 'Inclusivity',
      desc: 'We celebrate diverse neurotypes, backgrounds, and learning styles.',
      icon: 'diversity_3',
      accent: 'from-[#D3E5F6] to-[#F0F7FF]'
    },
    {
      title: 'Parent Alignment',
      desc: 'Families who resonate with the Montessori philosophy and value emotional growth.',
      icon: 'favorite',
      accent: 'from-[#FEF9C3] to-[#FEFCE8]'
    }
  ];

  return (
    <main className="relative pt-32 pb-20 overflow-x-hidden">
      {/* Background washes */}
      <div className="watercolor-gradient absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="watercolor-gradient absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#FEF9C3]/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* ─── HERO SECTION ─── */}
      <section className="relative max-w-7xl mx-auto px-gutter py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="relative z-10 order-2 lg:order-1">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider mb-6 inline-block">ADMISSIONS OPEN</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
              Leaders Groomed for <span className="text-[#F59E0B]">Life</span> 2013 Our Promise!
            </h1>
            <p className="font-body-lg text-body-lg text-tertiary max-w-lg mb-8 leading-relaxed">
              We firmly focus to nurture our children not only for UNIVERSITY, but also for UNIVERSE. Let's partner in making your child's educational experience truly exceptional!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="primary-pill px-8 py-4 rounded-full text-white font-bold transition-transform hover:scale-105 shadow-lg text-center">
                Start Registration / Enquiry
              </Link>
              <Link to="/programs" className="golden-pill px-8 py-4 rounded-full font-bold transition-all hover:scale-105 text-center">
                Explore Our Curricula
              </Link>
            </div>

            {/* Quick Info */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-[#FEF08A]/40">
              <div>
                <span className="font-display-lg text-2xl font-bold text-primary">Pre-KG</span>
                <p className="text-xs text-tertiary font-medium mt-1">to Grade V</p>
              </div>
              <div>
                <span className="font-display-lg text-2xl font-bold text-[#F59E0B]">4</span>
                <p className="text-xs text-tertiary font-medium mt-1">Simple Steps</p>
              </div>
              <div>
                <span className="font-display-lg text-2xl font-bold text-secondary">24hr</span>
                <p className="text-xs text-tertiary font-medium mt-1">Response Time</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="organic-cloud-shape overflow-hidden w-72 h-72 md:w-[420px] md:h-[420px] relative shadow-2xl z-10 border-8 border-white/50 hero-float">
                <img className="w-full h-full object-cover" src="/hero%20image/hero%20image.png" alt="SASHA School smiling kids" />
              </div>
              {/* Decorative Golden Circle */}
              <div className="absolute -top-4 -right-4 w-20 h-20 md:w-28 md:h-28 bg-[#FEF9C3]/60 rounded-full border-4 border-[#FEF08A]/40 flex items-center justify-center z-20 doodle-float-1">
                <span className="material-symbols-outlined text-[#F59E0B] text-2xl md:text-3xl">school</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-br from-primary-fixed/20 via-[#FEF9C3]/15 to-secondary-fixed/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADMISSIONS PROCESS— Timeline Steps ─── */}
      <section className="py-24 bg-gradient-to-br from-[#F5F3FF]/45 to-[#E0F2FE]/45 border-y border-[#C4B5FD]/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C4B5FD]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-gutter relative z-10">
          <div className="text-center mb-16">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">ADMISSIONS PROCESS</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-4">Begin Your Child's Journey</h2>
            <p className="font-body-lg text-tertiary mt-2">Four gentle steps to becoming part of our family.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Connector line (desktop) */}
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-px border-t-2 border-dashed border-[#FEF08A]/50 z-0"></div>
                )}
                <div className={`bg-gradient-to-br ${step.accent} rounded-[2rem] p-8 border border-white/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative z-10 h-full flex flex-col`}>
                  {/* Step Number */}
                  <span className="absolute -top-3 -right-3 w-10 h-10 bg-[#FACC15] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">{step.num}</span>
                  
                  <div className="w-14 h-14 bg-white/70 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="font-display-lg text-xl text-primary font-bold mb-3">{step.title}</h3>
                  <p className="font-body-md text-sm text-tertiary leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE SASHA ─── */}
      <section className="py-24 max-w-7xl mx-auto px-gutter relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Features */}
          <div>
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider mb-6 inline-block">OUR PROMISE</span>
            <h2 className="font-display-lg text-headline-lg text-primary mb-4">Why Choose SASHA School?</h2>
            <p className="font-body-lg text-tertiary mb-10 leading-relaxed">Pioneering progressive primary education with world-class frameworks.</p>

            <div className="space-y-4">
              {features.map((feat, idx) => {
                const isGolden = idx % 3 === 0;
                return (
                  <div key={idx} className={`${isGolden ? 'golden-glass-card' : 'bg-white/60 border border-white/50'} p-5 rounded-2xl flex items-start gap-4 group hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md`}>
                    <div className={`w-10 h-10 shrink-0 ${isGolden ? 'bg-[#FEF9C3]' : 'bg-primary-fixed/30'} rounded-xl flex items-center justify-center ${isGolden ? 'text-[#F59E0B]' : 'text-primary'} group-hover:scale-110 transition-transform`}>
                      <span className="material-symbols-outlined text-lg">{feat.icon}</span>
                    </div>
                    <span className="font-body-md text-sm text-tertiary leading-relaxed">{feat.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Criteria + Resources */}
          <div className="space-y-8">
            {/* Criteria Cards */}
            <div className="space-y-5">
              <h3 className="font-display-lg text-xl text-primary font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-[#F59E0B]">checklist</span>
                Admissions Criteria
              </h3>
              <p className="font-body-md text-sm text-tertiary leading-relaxed mb-4">
                We believe in partnering with parents who resonate with our progressive approach.
              </p>
              {criteria.map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-r ${item.accent} rounded-2xl p-5 border border-white/50 shadow-sm flex items-start gap-4 hover:-translate-y-0.5 transition-all duration-300`}>
                  <div className="w-11 h-11 bg-white/70 rounded-xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-base text-primary font-bold mb-1">{item.title}</h4>
                    <p className="font-body-md text-sm text-tertiary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resources Card */}
            <div className="golden-glass-card rounded-[2rem] p-8 relative overflow-hidden shadow-xl">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FACC15]/5 rounded-full blur-3xl pointer-events-none"></div>
              <h3 className="font-display-lg text-xl text-primary font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#F59E0B]">folder_open</span>
                Admissions Resources
              </h3>
              <p className="font-body-md text-sm text-tertiary mb-6 leading-relaxed">Everything you need to make an informed decision for your child's future.</p>
              
              <div className="space-y-3">
                {[
                  { label: 'Fee Structure 2024-25', icon: 'download' },
                  { label: 'Parent Handbook', icon: 'menu_book' },
                  { label: 'Financial Aid Policy', icon: 'account_balance_wallet' }
                ].map((res, idx) => (
                  <a key={idx} href="#" onClick={(e) => e.preventDefault()} className="flex items-center justify-between p-4 bg-white/60 hover:bg-white/90 transition-all rounded-xl group border border-[#FEF08A]/20 hover:shadow-md">
                    <span className="font-headline-md text-sm text-primary font-bold">{res.label}</span>
                    <span className="material-symbols-outlined text-[#F59E0B] group-hover:translate-y-[-2px] transition-transform">{res.icon}</span>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#FEF08A]/30">
                <p className="font-label-sm text-xs text-[#854D0E] font-bold uppercase tracking-widest mb-1.5">Admissions Office</p>
                <p className="font-body-md text-xs text-tertiary font-medium">Monday 2013 Friday: 9:00 AM 2013 4:00 PM</p>
                <p className="font-body-md text-sm text-primary font-bold mt-2 font-mono">admissions@sashaschool.edu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-gutter rounded-[2.5rem] bg-gradient-to-br from-[#8B5CF6] to-[#C4B5FD] p-12 lg:p-24 relative overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-8 left-8 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-white rounded-full"></div>
          </div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-white/30 text-6xl mb-4 inline-block">stars</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
              Happy <span className="text-[#FEF08A]">Schooling!</span>
            </h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto mb-10 leading-relaxed">Let's partner in making your child's educational experience truly exceptional!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-primary px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                Contact Us Today
              </Link>
              <Link to="/about" className="border-2 border-white/30 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Meet Our Founders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
