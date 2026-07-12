import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const pillars = [
    { title: 'Montessori Philosophy', desc: 'Self-directed learning in a curated environment that respects each child\'s natural pace and rhythm.', icon: 'psychology', accent: 'from-[#E9DDFF] to-[#F5F3FF]', iconColor: 'text-primary' },
    { title: 'Holistic Development', desc: 'Nurturing the head, heart, and hands equally to ensure emotional resilience and academic brilliance.', icon: 'favorite', accent: 'from-[#FEF9C3] to-[#FEFCE8]', iconColor: 'text-[#854D0E]' },
    { title: 'Creative Education', desc: 'Fostering divergent thinking through arts, music, and storytelling as central elements of the curriculum.', icon: 'palette', accent: 'from-[#D3E5F6] to-[#F0F7FF]', iconColor: 'text-tertiary' },
    { title: 'Nature Friendly', desc: 'Deep connection with the natural world through outdoor co-play, gardening, and environmental curiosity.', icon: 'forest', accent: 'from-[#D1FAE5] to-[#ECFDF5]', iconColor: 'text-[#065F46]' }
  ];

  return (
    <main className="relative overflow-x-hidden pt-32 pb-20">
      {/* Background washes */}
      <div className="watercolor-gradient absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="watercolor-gradient absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#FEF9C3]/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* ─── HERO SECTION ─── */}
      <section className="relative max-w-7xl mx-auto px-gutter py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative z-10">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block uppercase tracking-wider">Our Origin</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
              There is More in <span className="text-[#F59E0B]">LIFE</span> than Academics
            </h1>
            <p className="font-body-lg text-body-lg text-tertiary max-w-lg mb-8 leading-relaxed">
              Motivated by our deep commitment and extensive research in education, we established this school exclusively for the sake of our cherished daughter. As fellow parents, we understand the profound impact a nurturing educational environment can have on a child. This school is founded by parents, for parents, with the shared goal of positively influencing the educational experience of every child entrusted to our care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="primary-pill px-8 py-4 rounded-full text-white font-bold transition-transform hover:scale-105 shadow-lg text-center">
                Schedule a Campus Visit
              </Link>
              <Link to="/programs" className="golden-pill px-8 py-4 rounded-full font-bold transition-all hover:scale-105 text-center">
                Explore Our Curricula
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              <div className="organic-cloud-shape overflow-hidden w-72 h-72 md:w-[440px] md:h-[440px] relative shadow-2xl z-10 border-8 border-white/60 hero-float">
                <img src="/about%20hero/campus.png" alt="SASHA School Campus" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 md:w-28 md:h-28 bg-[#FEF9C3]/60 rounded-full border-4 border-[#FEF08A]/40 flex items-center justify-center z-20 doodle-float-1">
                <span className="material-symbols-outlined text-[#F59E0B] text-2xl md:text-3xl">auto_awesome</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-br from-primary-fixed/20 via-[#FEF9C3]/15 to-secondary-fixed/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDERS SECTION ─── */}
      <section className="py-24 bg-[#FEFCE8]/15 border-y border-[#FEF08A]/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-fixed/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-gutter relative z-10">
          <div className="text-center mb-20">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">FOUNDERS & MENTORS</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mt-4">Our Visionary Founders</h2>
            <p className="font-body-lg text-tertiary max-w-2xl mx-auto mt-4">Combining decades of academic experience and active leadership to build progressive Montessori systems.</p>
          </div>

          {/* Founder 1 */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl hero-float relative z-10">
                    <img src="/gallery/erer.png" alt="Dr. Sashi Kumaar Samraj" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#FEF9C3] to-[#FEFCE8] rounded-2xl border border-white/50 flex items-center justify-center z-20 shadow-lg">
                    <span className="material-symbols-outlined text-[#F59E0B] text-xl">school</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#E9DDFF] to-[#F5F3FF] rounded-full blur-3xl -z-10 opacity-50 pointer-events-none"></div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h3 className="font-display-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold mb-2">Dr. Sashi Kumaar Samraj</h3>
                  <span className="golden-badge px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">Founder Chairman</span>
                </div>
                <p className="font-body-lg text-base md:text-lg text-tertiary leading-relaxed max-w-2xl">
                  Dr. Sashi Kumaar Samraj has two decades of educational experience in the capacity as Managing Trustee, Chairman and Mentor to CBSE, Montessori and Matric Schools. He holds a Doctorate in Education, an MBA & Educational Leadership Program from IIM, Calcutta.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-gradient-to-br from-[#E9DDFF] to-[#F5F3FF] rounded-2xl p-6 border border-white/50 shadow-md">
                    <h4 className="font-headline-md text-sm text-primary font-bold mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#F59E0B] text-sm">school</span>
                      Founder Chairman
                    </h4>
                    <ul className="space-y-2">
                      {['The Western Ghats International School', 'Dora Montessori Schools, Coimbatore', 'SASHA School for Life, Coimbatore'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-tertiary"><span className="material-symbols-outlined text-[#F59E0B] text-xs shrink-0 mt-0.5">check_circle</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-[#FEF9C3] to-[#FEFCE8] rounded-2xl p-6 border border-white/50 shadow-md">
                    <h4 className="font-headline-md text-sm text-primary font-bold mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#F59E0B] text-sm">corporate_fare</span>
                      Executive Roles
                    </h4>
                    <ul className="space-y-2">
                      {['Managing Trustee— SASHA Charitable Trust', 'Managing Director— Winfinity Educare', 'President— EducationKnot (HQ Bangalore)'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-tertiary"><span className="material-symbols-outlined text-[#F59E0B] text-xs shrink-0 mt-0.5">check_circle</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder 2 */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl hero-float relative z-10 bg-white/50" style={{ animationDelay: '1.5s' }}>
                    <img src="/gallery/56.png" alt="Smt. Hemalatha Sashi Kumaar" className="w-full h-full object-contain hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#FFD8ED] to-[#FFF5FA] rounded-2xl border border-white/50 flex items-center justify-center z-20 shadow-lg">
                    <span className="material-symbols-outlined text-secondary text-xl">workspace_premium</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#FFD8ED] to-[#FFF5FA] rounded-full blur-3xl -z-10 opacity-50 pointer-events-none"></div>
                </div>
              </div>

              <div className="lg:col-span-8 lg:order-1 space-y-6">
                <div>
                  <h3 className="font-display-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold mb-2">Smt. Hemalatha Sashi Kumaar</h3>
                  <span className="golden-badge px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">Founder Correspondent</span>
                </div>
                <p className="font-body-lg text-base md:text-lg text-tertiary leading-relaxed max-w-2xl">
                  Smt. Hemalatha Sashi Kumaar has 18 years of Academic and Administrative experience in the capacity as Correspondent and Trustee for CBSE, Montessori and Matric Schools, and 15 years of exclusive Montessori experience in the capacity as Montessori Directress.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-gradient-to-br from-[#FFD8ED] to-[#FFF5FA] rounded-2xl p-6 border border-white/50 shadow-md">
                    <h4 className="font-headline-md text-sm text-primary font-bold mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#F59E0B] text-sm">workspace_premium</span>
                      Founder Correspondent
                    </h4>
                    <ul className="space-y-2">
                      {['The Western Ghats International School', 'Dora Montessori Schools, Coimbatore', 'SASHA School for Life, Coimbatore'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-tertiary"><span className="material-symbols-outlined text-[#F59E0B] text-xs shrink-0 mt-0.5">check_circle</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-[#D3E5F6] to-[#F0F7FF] rounded-2xl p-6 border border-white/50 shadow-md">
                    <h4 className="font-headline-md text-sm text-primary font-bold mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#F59E0B] text-sm">auto_fix_high</span>
                      Montessori Leadership
                    </h4>
                    <ul className="space-y-2">
                      {['Secretary— SASHA Charitable Trust', 'Centre Coordinator— IMTTI, Bangalore', 'Curriculum Advisor— Indian Airforce School, Sulur'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-tertiary"><span className="material-symbols-outlined text-[#F59E0B] text-xs shrink-0 mt-0.5">check_circle</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE PILLARS ─── */}
      <section className="py-24 px-gutter relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">Our Core Pillars</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-4">The Heartbeat of SASHA</h2>
            <p className="font-body-lg text-tertiary max-w-2xl mx-auto mt-4">Cultivating the essential qualities of a thriving human soul through four foundational pillars.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${pillar.accent} rounded-[2rem] p-8 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/50`}>
                <div className={`w-14 h-14 bg-white/70 rounded-2xl flex items-center justify-center mb-6 ${pillar.iconColor} shadow-sm group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                </div>
                <h3 className="font-headline-md text-lg text-primary font-bold mb-3">{pillar.title}</h3>
                <p className="font-body-md text-sm text-tertiary leading-relaxed">{pillar.desc}</p>
                <div className="absolute -bottom-6 -right-6 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                  <span className="material-symbols-outlined text-[120px]">{pillar.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MESSAGE FROM MANAGEMENT ─── */}
      <section className="py-24 px-gutter relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white/90 backdrop-blur-md p-8 md:p-14 rounded-[2.5rem] relative overflow-hidden shadow-xl border border-white/60">
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-[#E9DDFF] to-[#F5F3FF] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#FEF9C3]/40 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E9DDFF] to-[#D3E5F6] rounded-xl flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>quick_phrases</span>
              </div>
              <h2 className="font-display-lg text-headline-lg text-primary">Message from the Management</h2>
            </div>
            
            <div className="space-y-5 font-body-lg text-body-lg text-primary leading-[1.8] relative z-10">
              <span className="material-symbols-outlined text-[#F59E0B] text-5xl block -mb-4 opacity-60">format_quote</span>
              <p className="text-primary font-medium text-lg">Dear Parents,</p>
              <p className="text-tertiary">
                We wanted to share with you the heartfelt foundation upon which our institution stands. Motivated by our deep commitment and extensive research in education, we established this school exclusively for the sake of our cherished daughter. As fellow parents, we understand the profound impact a nurturing educational environment can have on a child.
              </p>
              <p className="text-tertiary">
                We are excited to inform you that every aspect of your child's schooling journey here is crafted with the same care and dedication that we envisioned for our own daughter. This school is founded by parents, for parents, with the shared goal of positively influencing the educational experience of every child entrusted to our care.
              </p>
              <div className="bg-gradient-to-br from-[#E9DDFF]/30 to-[#F5F3FF]/30 p-6 md:p-8 rounded-2xl border border-white/60 my-6">
                <p className="font-headline-md text-headline-md text-primary text-center leading-relaxed">
                  "Let's partner in making your child's educational experience truly exceptional! We firmly focus to nurture our children not only for <span className="text-[#F59E0B] font-bold">UNIVERSITY</span>, but also for <span className="text-[#F59E0B] font-bold">UNIVERSE</span>."
                </p>
              </div>
              <div className="pt-6 border-t border-[#FEF08A]/30 mt-8 flex flex-col sm:flex-row justify-between items-start gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E9DDFF] to-[#D3E5F6] rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-tertiary font-mono font-semibold">Warm Regards,</p>
                    <p className="font-bold text-primary text-base mt-0.5">Dr. Sashi Kumaar Samraj</p>
                    <p className="text-xs text-tertiary">Founder Chairman</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FEF9C3] to-[#FEFCE8] rounded-full flex items-center justify-center text-[#854D0E] shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-tertiary font-mono font-semibold">Co-signed,</p>
                    <p className="font-bold text-primary text-base mt-0.5">Smt. Hemalatha Sashi Kumaar</p>
                    <p className="text-xs text-tertiary">Founder Correspondent</p>
                  </div>
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
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 leading-tight">
              Nurturing Children Not Only for <span className="text-[#FEF08A]">UNIVERSITY</span>, <br/>But Also for <span className="text-[#FEF08A]">UNIVERSE</span>
            </h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto mb-12 leading-relaxed">
              We firmly focus on nurturing your child's educational experience truly exceptional. Let's partner in making your child's educational journey remarkable!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block">
                Schedule a School Tour
              </Link>
              <Link to="/programs" className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all inline-block">
                Explore Our Curricula
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
