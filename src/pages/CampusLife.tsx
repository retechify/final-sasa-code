import React from 'react';
import { Link } from 'react-router-dom';

export default function CampusLife() {
  const facilities = [
    { title: 'State-of-the-Art Architecture', icon: 'apartment', desc: 'Modern infrastructure designed to inspire learning and creativity.' },
    { title: 'Sophisticated Classrooms', icon: 'class', desc: 'Well-equipped, child-friendly classrooms with imported Montessori materials.' },
    { title: 'Imported Montessori Materials', icon: 'toys', desc: 'Premium quality Montessori teaching aids from around the world.' },
    { title: 'Nutritious Snacks', icon: 'restaurant', desc: 'Healthy and balanced meals to support growing minds and bodies.' },
    { title: 'Multi Sports Turf Ground', icon: 'sports_soccer', desc: 'Spacious outdoor area for sports and physical activities.' },
    { title: 'Well-Stacked Library', icon: 'menu_book', desc: 'Child-friendly library with a rich collection of books and resources.' },
    { title: 'CCTV Surveillance', icon: 'videocam', desc: '24/7 security monitoring for complete safety and peace of mind.' },
    { title: 'RFID Attendance', icon: 'badge', desc: 'Advanced attendance tracking system for student safety.' },
    { title: 'Exclusive Parents App', icon: 'phone_android', desc: "Stay connected with your child's progress through our dedicated app." },
    { title: 'Parents Helpline Number', icon: 'support_agent', desc: 'Dedicated helpline for parent queries and support.' }
  ];

  const activities = [
    { title: 'Co-curricular Activities', items: ['Music & Rhythm', 'Art & Craft', 'Drama & Theatre', 'Public Speaking', 'Storytelling'] },
    { title: 'Extra-Curricular Activities', items: ['Yoga', 'Karate', 'Silambam', 'Skating', 'Dance', 'Brain Gym'] }
  ];

  const detailedActivities = [
    {
      program: 'Value Inculcation Program',
      activities: '• Learning invaluable Indian Values\n• Social Manners & Etiquette\n• Involved by Parents',
      lifeSkills: 'Character formation',
      icon: 'diversity_1',
      accent: 'from-[#E9DDFF] to-[#F5F3FF]',
      iconBg: 'bg-primary-fixed/40',
      iconColor: 'text-primary'
    },
    {
      program: 'Lifeskill and Leadership',
      activities: '• Exclusive Class for Personal Grooming\n• Public Presentation Skills\n• Confidence coaching',
      lifeSkills: 'To groom every Learner',
      icon: 'stars',
      accent: 'from-[#FEF3C7] to-[#FFFBEB]',
      iconBg: 'bg-[#FEF3C7]',
      iconColor: 'text-[#92400E]'
    },
    {
      program: 'Brain Gym',
      activities: '• Every session commences with Whole brain exercises and activities\n• Integration movements',
      lifeSkills: 'Whole Brain development',
      icon: 'psychology',
      accent: 'from-[#D3E5F6] to-[#F0F7FF]',
      iconBg: 'bg-tertiary-fixed/40',
      iconColor: 'text-tertiary'
    },
    {
      program: 'Neuro Linguistic Programming',
      activities: '• Ambidextrous activity (using two hands simultaneously)\n• Sensory refinement exercises',
      lifeSkills: 'To quit gadgets and engage in productive activities',
      icon: 'mindfulness',
      accent: 'from-[#FFD8ED] to-[#FFF5FA]',
      iconBg: 'bg-secondary-fixed/40',
      iconColor: 'text-secondary'
    },
    {
      program: 'British Council',
      activities: "• World's No.1 UK based international organization for English communication\n• Interactive speaking tools",
      lifeSkills: 'Language, Communication and Public Speaking Skill',
      icon: 'language',
      accent: 'from-[#E9DDFF] to-[#F5F3FF]',
      iconBg: 'bg-primary-fixed-dim/30',
      iconColor: 'text-primary'
    },
    {
      program: 'EduSports',
      activities: "• India's No.1 Sports education organization\n• Structured age-appropriate physical activities",
      lifeSkills: 'Physical, Social and Mental Fitness',
      icon: 'sports_tennis',
      accent: 'from-[#D1FAE5] to-[#ECFDF5]',
      iconBg: 'bg-[#D1FAE5]',
      iconColor: 'text-[#065F46]'
    },
    {
      program: 'Kinder Dance International',
      activities: '• USA based Edu Organisation for Education through dance and movement\n• Kinesthetic development',
      lifeSkills: 'No stage fear & gross motor skills development',
      icon: 'music_note',
      accent: 'from-[#FEF3C7] to-[#FFFBEB]',
      iconBg: 'bg-[#FEF3C7]',
      iconColor: 'text-[#92400E]'
    }
  ];

  // Split facilities into featured (first 2) and rest for bento layout
  const featuredFacilities = facilities.slice(0, 2);
  const restFacilities = facilities.slice(2);

  return (
    <main className="relative pt-32 pb-20 overflow-x-hidden">
      {/* Background washes */}
      <div className="watercolor-gradient absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="watercolor-gradient absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#FEF3C7]/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* ─── HERO SECTION ─── */}
      <section className="relative max-w-7xl mx-auto px-gutter py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="relative z-10 order-2 lg:order-1">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider mb-6 inline-block">
              FEATURES & ACTIVITIES
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
              Life at <span className="text-[#F59E0B]">SASHA</span> School
            </h1>
            <p className="font-body-lg text-body-lg text-tertiary max-w-lg mb-8 leading-relaxed">
              Leaders groomed for Life – our promise to Parents! We offer a comprehensive educational experience with world-class facilities and a gamut of curated activities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="primary-pill px-8 py-4 rounded-full text-white font-bold transition-transform hover:scale-105 shadow-lg text-center">
                Book a Campus Tour
              </Link>
              <Link to="/programs" className="golden-pill px-8 py-4 rounded-full font-bold transition-all hover:scale-105 text-center">
                Explore Curricula
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-[#FDE68A]/40">
              <div>
                <span className="font-display-lg text-3xl font-bold text-primary">10+</span>
                <p className="text-xs text-tertiary font-medium mt-1">Facilities</p>
              </div>
              <div>
                <span className="font-display-lg text-3xl font-bold text-[#F59E0B]">7</span>
                <p className="text-xs text-tertiary font-medium mt-1">Curated Programs</p>
              </div>
              <div>
                <span className="font-display-lg text-3xl font-bold text-secondary">11+</span>
                <p className="text-xs text-tertiary font-medium mt-1">Activities</p>
              </div>
            </div>
          </div>

          {/* Right: Stacked Image Composition */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Main Image */}
              <div className="w-72 h-72 md:w-[420px] md:h-[420px] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl hero-float z-10 relative">
                <img
                  src="/campus life/1.jpeg"
                  alt="Holistic Development Programme"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlapping Smaller Image */}
              <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-40 h-40 md:w-56 md:h-56 rounded-[2rem] overflow-hidden border-6 border-white shadow-xl z-20 hero-float" style={{ animationDelay: '1.5s' }}>
                <img
                  src="/campus life/2.jpeg"
                  alt="Mind & Body Wellness"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Golden Circle */}
              <div className="absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-[#FEF3C7]/60 rounded-full border-4 border-[#FDE68A]/40 flex items-center justify-center z-30 doodle-float-1">
                <span className="material-symbols-outlined text-[#F59E0B] text-3xl md:text-4xl">stars</span>
              </div>
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-br from-primary-fixed/20 via-[#FEF3C7]/15 to-secondary-fixed/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROGRAMS OVERVIEW — Overlapping Editorial Cards ─── */}
      <section className="py-24 bg-[#FFFBEB]/25 border-y border-[#FDE68A]/20 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-fixed/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="bg-secondary-fixed/30 text-secondary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">Programs Overview</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-4">Two Pillars of Holistic Growth</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Co-curricular Card */}
            <div className="group relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src="/campus life/1.jpeg"
                    alt="Holistic Development Programme"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <span className="bg-[#E0F2FE]/90 backdrop-blur-sm text-[#0369A1] px-4 py-1.5 rounded-full font-label-sm text-xs font-bold uppercase tracking-wider shadow-sm">
                      CO-CURRICULAR
                    </span>
                    <h3 className="font-display-lg text-2xl md:text-3xl text-white font-bold mt-3 drop-shadow-lg">Holistic Development Programme</h3>
                  </div>
                </div>
                {/* Content */}
                <div className="bg-white/90 backdrop-blur-md p-8 border-t border-[#FDE68A]/30">
                  <p className="font-body-md text-sm text-tertiary leading-relaxed mb-6">
                    Our structured co-curricular and extra-curricular activities ensure that every child develops not just academically, but also physically, socially and emotionally.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activities[0].items.map((item, i) => (
                      <span key={i} className="bg-primary-fixed/20 text-primary px-4 py-2 rounded-full text-xs font-bold">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Wellness Card */}
            <div className="group relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src="/campus life/2.jpeg"
                    alt="Mind & Body Wellness"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <span className="golden-badge px-4 py-1.5 rounded-full font-label-sm text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
                      WELLNESS
                    </span>
                    <h3 className="font-display-lg text-2xl md:text-3xl text-white font-bold mt-3 drop-shadow-lg">Mind & Body Wellness</h3>
                  </div>
                </div>
                {/* Content */}
                <div className="bg-white/90 backdrop-blur-md p-8 border-t border-[#FDE68A]/30">
                  <p className="font-body-md text-sm text-tertiary leading-relaxed mb-6">
                    Yoga, Karate, Silambam, Skating, Dance and Brain Gym – a comprehensive wellness programme for physical and mental development.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activities[1].items.map((item, i) => (
                      <span key={i} className="golden-badge px-4 py-2 rounded-full text-xs font-bold">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FACILITIES — Bento Grid Layout ─── */}
      <section className="py-24 max-w-7xl mx-auto px-gutter relative">
        <div className="text-center mb-16">
          <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">OUR FACILITIES</span>
          <h2 className="font-display-lg text-headline-lg text-primary mt-4">World-Class Infrastructure</h2>
          <p className="font-body-lg text-tertiary max-w-2xl mx-auto mt-4">Every detail of the campus is structured to invoke emotional safety and biological curiosity.</p>
        </div>

        {/* Bento Grid — 2 featured tall + 8 compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Featured Card 1 — spans 2 rows */}
          <div className="lg:row-span-2 golden-glass-card rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[140px] text-[#F59E0B]">{featuredFacilities[0].icon}</span>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#FEF3C7] rounded-2xl flex items-center justify-center text-[#F59E0B] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">{featuredFacilities[0].icon}</span>
              </div>
              <h3 className="font-display-lg text-xl text-primary font-bold mb-3">{featuredFacilities[0].title}</h3>
              <p className="font-body-md text-sm text-tertiary leading-relaxed">{featuredFacilities[0].desc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#FDE68A]/30">
              <span className="text-xs font-bold text-[#92400E] uppercase tracking-wider font-mono flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span> Premium Standard
              </span>
            </div>
          </div>

          {/* Featured Card 2 — spans 2 rows */}
          <div className="lg:row-span-2 glass-card rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 bg-primary-fixed/10">
            <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[140px] text-primary">{featuredFacilities[1].icon}</span>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary-fixed/40 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">{featuredFacilities[1].icon}</span>
              </div>
              <h3 className="font-display-lg text-xl text-primary font-bold mb-3">{featuredFacilities[1].title}</h3>
              <p className="font-body-md text-sm text-tertiary leading-relaxed">{featuredFacilities[1].desc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-primary-fixed/20">
              <span className="text-xs font-bold text-primary uppercase tracking-wider font-mono flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span> Montessori Certified
              </span>
            </div>
          </div>

          {/* Rest of the facilities — compact cards */}
          {restFacilities.map((feat, idx) => {
            const isGolden = idx % 3 === 0;
            return (
              <div
                key={idx}
                className={`${isGolden ? 'golden-glass-card' : 'glass-card bg-white/70'} rounded-2xl p-6 flex items-start gap-4 group hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-11 h-11 shrink-0 rounded-xl ${isGolden ? 'bg-[#FEF3C7]' : 'bg-primary-fixed/30'} flex items-center justify-center ${isGolden ? 'text-[#F59E0B]' : 'text-primary'} group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-xl">{feat.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-sm text-primary font-bold mb-1 leading-snug">{feat.title}</h3>
                  <p className="font-body-md text-xs text-tertiary leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── CURATED PROGRAMS — Alternating Timeline ─── */}
      <section className="py-24 bg-surface-container-low/30 border-y border-white/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FEF3C7]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-gutter relative z-10">
          <div className="text-center mb-20">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">PROGRAM DETAILS</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-4">Curated Leadership & Skill Courses</h2>
            <p className="font-body-lg text-tertiary mt-2 max-w-2xl mx-auto">Nurturing holistic development through strategic partnerships with top platforms.</p>
          </div>

          {/* Timeline Grid */}
          <div className="relative">
            {/* Center Line (desktop only) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FDE68A]/60 via-primary-fixed/30 to-[#FDE68A]/60"></div>

            <div className="space-y-8 lg:space-y-12">
              {detailedActivities.map((act, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Card */}
                    <div className={`w-full lg:w-[calc(50%-2rem)] ${isLeft ? 'lg:pr-0' : 'lg:pl-0'}`}>
                      <div className={`relative rounded-[2rem] overflow-hidden bg-gradient-to-br ${act.accent} border border-white/60 p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}>
                        {/* Background watermark */}
                        <div className="absolute -bottom-6 -right-6 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                          <span className="material-symbols-outlined text-[120px]">{act.icon}</span>
                        </div>

                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-14 h-14 ${act.iconBg} rounded-2xl flex items-center justify-center ${act.iconColor} shadow-sm group-hover:scale-110 transition-transform`}>
                              <span className="material-symbols-outlined text-2xl">{act.icon}</span>
                            </div>
                            <div>
                              <h3 className="font-display-lg text-lg md:text-xl text-primary font-bold">{act.program}</h3>
                              <span className="text-xs font-mono font-bold text-[#92400E] uppercase tracking-wider flex items-center gap-1 mt-1">
                                <span className="material-symbols-outlined text-xs">bolt</span>
                                {act.lifeSkills}
                              </span>
                            </div>
                          </div>

                          {/* Activities */}
                          <div className="space-y-2">
                            {act.activities.split('\n').map((line, lIdx) => (
                              <div key={lIdx} className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#F59E0B] text-base mt-0.5 shrink-0">check_circle</span>
                                <p className="text-sm text-tertiary leading-relaxed">{line.replace('• ', '')}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden lg:flex w-16 shrink-0 items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-[#FEF3C7] border-4 border-[#F59E0B] shadow-md z-10"></div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden lg:block w-[calc(50%-2rem)]"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLOSING — Quote + CTA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-gutter relative z-10">
          {/* Quote Card */}
          <div className="golden-glass-card rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-xl mb-16">
            <span className="material-symbols-outlined text-[#F59E0B] text-7xl absolute -top-4 left-6 opacity-15">format_quote</span>
            <p className="font-display-lg text-lg md:text-2xl text-secondary italic relative z-20 leading-relaxed max-w-3xl mx-auto">
              "One of the Pioneers in implementing authentic Montessori at primary level in South India. We have a school system supported by a battalion of professionals."
            </p>
            <p className="mt-8 font-label-sm text-[#92400E] uppercase tracking-widest text-xs font-bold">— SASHA School of Life</p>
          </div>

          {/* CTA Block */}
          <div className="text-center">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
              Ready to <span className="text-[#F59E0B]">Experience</span> SASHA?
            </h2>
            <p className="font-body-lg text-tertiary max-w-xl mx-auto mb-10 leading-relaxed">
              Schedule a personal campus tour to explore our facilities, meet our educators, and see why parents choose SASHA.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="primary-pill px-10 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg text-center inline-block">
                Schedule a Campus Visit
              </Link>
              <a href="tel:+919750170007" className="golden-pill px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 text-center inline-block">
                +91 97501 70007
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}