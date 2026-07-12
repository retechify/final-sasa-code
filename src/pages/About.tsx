import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="relative overflow-x-hidden pt-32">
      {/* Background radial watercolor gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-60 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] watercolor-wash rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-3xl"></div>
      </div>
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-gutter py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block uppercase tracking-wider">Our Origin</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
              There is More in <span className="text-secondary italic">LIFE than Academics</span>
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
            {/* Organic Cloud Frame Image */}
            <div className="organic-cloud-shape overflow-hidden w-80 h-80 md:w-[460px] md:h-[460px] relative shadow-2xl z-20 border-8 border-white/60 hero-float">
              <img 
                src="/hero%20image/hero%20image.png" 
                alt="SASHA School Children playing" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-fixed/40 rounded-full blur-2xl floating-anim -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-tertiary-fixed/30 rounded-full blur-2xl floating-anim -z-10" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </section>

      {/* Leadership / Visionary Founders Section (Bigger Pictures, Editorial Design) */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden border-b border-white/50">
        {/* Glow behind section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] watercolor-wash rounded-full blur-3xl opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-gutter relative z-10">
          <div className="text-center mb-20">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">FOUNDERS & MENTORS</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mt-4">Our Visionary Founders</h2>
            <p className="font-body-lg text-tertiary max-w-2xl mx-auto mt-4">Combining decades of academic experience and active leadership to build progressive Montessori systems.</p>
          </div>

          <div className="space-y-16">
            {/* Founder 1 - Dr. Sashi Kumaar Samraj */}
            <div className="glass-card p-8 md:p-12 rounded-[2.5rem] flex flex-col lg:flex-row gap-8 lg:gap-16 items-center hover:shadow-2xl transition-all duration-500 bg-white/85 border border-white/50 relative overflow-hidden group">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-fixed/20 rounded-full blur-3xl group-hover:bg-primary-fixed/30 transition-colors pointer-events-none"></div>
              
              {/* Large Image container with organic shadow highlight */}
              <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative hero-float z-10">
                <img 
                  src="/gallery/erer.png" 
                  alt="Dr. Sashi Kumaar Samraj" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Founder content */}
              <div className="flex-grow z-10 space-y-6">
                <div>
                  <h3 className="font-display-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold mb-2">Dr. Sashi Kumaar Samraj</h3>
                  <p className="text-label-sm text-secondary uppercase tracking-widest font-bold text-sm">Founder Chairman</p>
                </div>
                
                <p className="font-body-lg text-base md:text-lg text-tertiary leading-relaxed">
                  Dr. Sashi Kumaar Samraj has two decades of educational experience in the capacity as Managing Trustee, Chairman and Mentor to CBSE, Montessori and Matric Schools. He holds a Doctorate in Education, an MBA & Educational Leadership Program from IIM, Calcutta.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-primary-fixed/30">
                  <div className="space-y-2">
                    <h4 className="font-headline-md text-sm text-primary font-bold uppercase tracking-wider flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">school</span>
                      Founder Chairman
                    </h4>
                    <ul className="space-y-1.5 text-xs text-tertiary font-medium">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        The Western Ghats International School
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        Dora Montessori Schools, Coimbatore
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        SASHA School for Life, Coimbatore
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-headline-md text-sm text-primary font-bold uppercase tracking-wider flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">corporate_fare</span>
                      Executive Roles
                    </h4>
                    <ul className="space-y-1.5 text-xs text-tertiary font-medium">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        Managing Trustee — SASHA Charitable Trust
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        Managing Director — Winfinity Educare
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        President — EducationKnot (HQ Bangalore)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder 2 - Smt. Hemalatha Sashi Kumaar */}
            <div className="glass-card p-8 md:p-12 rounded-[2.5rem] flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center hover:shadow-2xl transition-all duration-500 bg-white/85 border border-white/50 relative overflow-hidden group">
              <div className="absolute -left-20 -top-20 w-80 h-80 bg-secondary-fixed/20 rounded-full blur-3xl group-hover:bg-secondary-fixed/30 transition-colors pointer-events-none"></div>
              
              {/* Large Image container with organic shadow highlight */}
              <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative hero-float z-10 bg-white/50" style={{ animationDelay: '1.5s' }}>
                <img 
                  src="/gallery/56.png" 
                  alt="Smt. Hemalatha Sashi Kumaar" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Founder content */}
              <div className="flex-grow z-10 space-y-6">
                <div>
                  <h3 className="font-display-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold mb-2">Smt. Hemalatha Sashi Kumaar</h3>
                  <p className="text-label-sm text-secondary uppercase tracking-widest font-bold text-sm">Founder Correspondent</p>
                </div>
                
                <p className="font-body-lg text-base md:text-lg text-tertiary leading-relaxed">
                  Smt. Hemalatha Sashi Kumaar has 18 years of Academic and Administrative experience in the capacity as Correspondent and Trustee for CBSE, Montessori and Matric Schools, and 15 years of exclusive Montessori experience in the capacity as Montessori Directress.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-primary-fixed/30">
                  <div className="space-y-2">
                    <h4 className="font-headline-md text-sm text-primary font-bold uppercase tracking-wider flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">workspace_premium</span>
                      Founder Correspondent
                    </h4>
                    <ul className="space-y-1.5 text-xs text-tertiary font-medium">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        The Western Ghats International School
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        Dora Montessori Schools, Coimbatore
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        SASHA School for Life, Coimbatore
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-headline-md text-sm text-primary font-bold uppercase tracking-wider flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">auto_fix_high</span>
                      Montessori Leadership
                    </h4>
                    <ul className="space-y-1.5 text-xs text-tertiary font-medium">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        Secretary — SASHA Charitable Trust
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        Centre Coordinator — IMTTI, Bangalore
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        Curriculum Advisor — Indian Airforce School, Sulur
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Heartbeat Section */}
      <section className="py-24 px-gutter relative bg-surface-container-low/30 border-y border-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-secondary-fixed/30 text-secondary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">Our Core Pillars</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-4">The Heartbeat of SASHA</h2>
            <p className="font-body-lg text-tertiary max-w-2xl mx-auto mt-4">Cultivating the essential qualities of a thriving human soul through four foundational pillars.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 bg-white/70">
              <div className="w-14 h-14 bg-primary-fixed rounded-full flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">Montessori Philosophy</h3>
              <p className="font-body-md text-sm text-tertiary leading-relaxed">Self-directed learning in a curated environment that respects each child's natural pace and rhythm.</p>
              <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[100px]">auto_awesome</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="golden-glass-card p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-14 h-14 bg-[#FEF3C7] rounded-full flex items-center justify-center mb-6 text-[#92400E]">
                <span className="material-symbols-outlined text-3xl">favorite</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-[#92400E] font-bold mb-3">Holistic Development</h3>
              <p className="font-body-md text-sm text-tertiary leading-relaxed">Nurturing the head, heart, and hands equally to ensure emotional resilience and academic brilliance.</p>
              <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[100px]">volunteer_activism</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 bg-tertiary-fixed/10">
              <div className="w-14 h-14 bg-tertiary-fixed rounded-full flex items-center justify-center mb-6 text-tertiary">
                <span className="material-symbols-outlined text-3xl">palette</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-tertiary font-bold mb-3">Creative Education</h3>
              <p className="font-body-md text-sm text-tertiary leading-relaxed">Fostering divergent thinking through arts, music, and storytelling as central elements of the curriculum.</p>
              <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[100px]">auto_fix_high</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 bg-white/70">
              <div className="w-14 h-14 bg-primary-fixed-dim/30 rounded-full flex items-center justify-center mb-6 text-primary-container">
                <span className="material-symbols-outlined text-3xl">forest</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">Nature Friendly</h3>
              <p className="font-body-md text-sm text-tertiary leading-relaxed">Deep connection with the natural world through outdoor co-play, gardening, and environmental curiosity.</p>
              <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[100px]">wb_sunny</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from the Management Section */}
      <section className="py-24 px-gutter relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="glass-card p-8 md:p-12 rounded-2xl relative bg-white/70 border border-[#FDE68A]/50 shadow-2xl">
            <span className="material-symbols-outlined text-primary text-6xl absolute -top-8 -left-4 opacity-20">format_quote</span>
            <h2 className="font-display-lg text-headline-lg text-primary text-center mb-10">Message from the Management</h2>
            
            <div className="space-y-6 font-body-lg text-body-lg text-tertiary leading-relaxed">
              <p>Dear Parents,</p>
              <p>
                We wanted to share with you the heartfelt foundation upon which our institution stands. Motivated by our deep commitment and extensive research in education, we established this school exclusively for the sake of our cherished daughter. As fellow parents, we understand the profound impact a nurturing educational environment can have on a child.
              </p>
              <p>
                We are excited to inform you that every aspect of your child's schooling journey here is crafted with the same care and dedication that we envisioned for our own daughter. This school is founded by parents, for parents, with the shared goal of positively influencing the educational experience of every child entrusted to our care.
              </p>
              <p className="font-medium text-secondary">
                Let's partner in making your child's educational experience truly exceptional! We firmly focus to nurture our children not only for UNIVERSITY, but also for UNIVERSE.
              </p>
              <div className="pt-6 border-t border-primary-fixed/30 mt-8 flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-tertiary">Warm Regards,</p>
                  <p className="font-bold text-primary mt-1">Dr. Sashi Kumaar Samraj</p>
                  <p className="text-xs text-tertiary">Founder Chairman</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-tertiary">Co-signed,</p>
                  <p className="font-bold text-primary mt-1">Smt. Hemalatha Sashi Kumaar</p>
                  <p className="text-xs text-tertiary">Founder Correspondent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 right-10 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Call To Action Block */}
      <section className="py-24 px-gutter">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#8B5CF6] to-[#C4B5FD] p-12 lg:p-24 relative overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
              <circle cx="10%" cy="20%" r="40" fill="white"></circle>
              <circle cx="90%" cy="80%" r="60" fill="white"></circle>
            </svg>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 leading-tight">
              Nurturing Children Not Only for UNIVERSITY, <br/>But Also for UNIVERSE
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