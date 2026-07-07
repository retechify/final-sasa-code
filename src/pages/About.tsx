import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const leadership = [
    {
      name: 'Sasha Valen',
      role: 'Founder & Creative Director',
      bio: 'With over 15 years in alternative education design, Sasha founded the academy to combine standard Montessori models with organic, artistic expression and deep emotional coaching. She holds an advanced degree in Early Childhood Pedagogies from Oxford.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4uHmTKjatm6Nq8ly99Eb3rNO6CKEHCCrDxrwZIlluddt_ha-jtyWaUTwv0vHbhLLbE9NSOe8Ix-sVMOMLshmQT1US8cK2pd3LFggfmLMhpoSbWKhUGXQYJ5m8dmtUJ4M6LFLkqWmu4pVft4NyQPfa8633vU7N-GNJ2BB6b1jIE40ON5G3gkcPIn9HiBF2Efr6T3DKMDopOf-ARg3Hpq1cizt7R3yDbHdbwIOVSDOuoDU78Vcx8tEIlTXKur-4cieIt_lpqDpEkvwk'
    },
    {
      name: 'Dr. Madeline Wu',
      role: 'Head of Child Development',
      bio: 'A clinical child developmental neuropsychologist, Madeline oversees our sensory-friendly spaces and certifies our curriculum to ensure children develop stress-regulation and executive functioning skills through organic play.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDayfCmynx3SjCplQ38FbHThLTqXW-dpWBDcgJhZ_A5QWmU8TDxi6_gGmJl5yKh-5xf9faoGKgAVvtFDdv8UodvAZK-j96ZYpXDURIg0LrBRDtqvlrxPMhhnZN9PF2Qzgd0hfo8C-CMFjPdVZolCEMi3AJUELcStFjvf6QgP3JZhqe0ubrxLhXYwLDl3kvzo8Y5Ojm2Y3snOunAnoVgIx7FF18LfXR1abRfQVFNrmAv20h-K6duLbsG9wcC8zWcbW02Bv6d4iep913T'
    },
    {
      name: 'Julian Gray, M.Ed.',
      role: 'Lead Forest School Ranger',
      bio: 'An expert in ecological education, Julian translates scientific curiosity into outdoor play. He guides daily nature walks, gardening blocks, and bug-identification journeys, teaching biological responsibility first-hand.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBumfTz_FkbbiZJrbvUTAyP3ROMLZSLxQ0e_SSzxFRER3oI1UPR4Rds6NeiWVK81X9g7G6zHzHZVM_LsakyeGZfPwReCRhtmio0TaWwevOu8eimD2UcvWSS3PYAn7Cr-eaC8I3iw4EAvFDoxYMmgK7jEOd7K2EsDjZPOmjet-M6BeKQieWwr91ccOg2xUEo2gmKqvEV_9Vkrho12hQ87jl2JhxaEUqh2oa0KhkOt2o7TvLDTI1jIwKcMsMiuAcexmIw4Y67d5dRn_Uo'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Founding Inspiration', desc: 'Sasha School opens with a small cohort of 12 children in a historic forest cottage, focused entirely on play-based learning and self-regulation.' },
    { year: '2020', title: 'Montessori Accreditation', desc: 'Our curriculum is fully recognized for its unique, high-standard integration of standard Montessori wooden materials with emotional co-regulation methods.' },
    { year: '2022', title: 'Forest Expansion & Butterfly Hub', desc: 'Acquisition of 3 acres of redwood forest boundaries, establishing our organic garden system, bee sanctuaries, and custom mud kitchen labs.' },
    { year: '2024', title: 'The Wellness Standard', desc: 'Introduced medical-grade HEPA purification systems and fully organic chef-prepared meals, achieving national recognition for child wellness.' }
  ];

  return (
    <main className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-gutter overflow-hidden">
        {/* Watercolor/Cloud Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-60">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] watercolor-wash rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block">NURTURING TOMORROW</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
              A Sanctuary for <br/>
              <span className="text-secondary italic">Natural Discovery.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-tertiary max-w-lg mb-8">
              At Sasha School, we believe education is not the filling of a container, but the lighting of a flame. We provide a beautiful, non-competitive early learning dreamscape where children interact with the natural world and unlock physical, emotional, and mathematical mastery at their own organic pace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/programs" className="bg-primary text-on-primary px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-primary/20 transition-all text-center">
                Discover Our Learning Philosophy
              </Link>
              <Link to="/contact" className="border-2 border-outline-variant text-secondary px-8 py-4 rounded-full font-medium hover:bg-white/50 transition-all text-center">
                Schedule a Campus Visit
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Main Cloud Frame Image */}
            <div className="organic-cloud-shape overflow-hidden w-full aspect-square relative shadow-2xl z-20">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBumfTz_FkbbiZJrbvUTAyP3ROMLZSLxQ0e_SSzxFRER3oI1UPR4Rds6NeiWVK81X9g7G6zHzHZVM_LsakyeGZfPwReCRhtmio0TaWwevOu8eimD2UcvWSS3PYAn7Cr-eaC8I3iw4EAvFDoxYMmgK7jEOd7K2EsDjZPOmjet-M6BeKQieWwr91ccOg2xUEo2gmKqvEV_9Vkrho12hQ87jl2JhxaEUqh2oa0KhkOt2o7TvLDTI1jIwKcMsMiuAcexmIw4Y67d5dRn_Uo" 
                alt="Children playing outdoors" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-fixed/40 rounded-full blur-2xl floating-anim -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-tertiary-fixed/30 rounded-full blur-2xl floating-anim -z-10" style={{ animationDelay: '2s' }}></div>
            
            {/* Doodle Star */}
            <svg className="absolute -top-4 right-10 text-primary w-12 h-12 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Editorial Story Section */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden border-y border-white/50">
        <div className="max-w-5xl mx-auto px-gutter">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary text-center mb-16">The Sasha Story</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed first-letter:text-5xl first-letter:font-display-lg first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                Our story began with a simple but radical question: what if school felt less like a production line and more like an organic forest garden? We wanted to eliminate the rush, the standardized comparisons, and the sensory noise that often overwhelm little hearts.
              </p>
              <p className="font-body-lg text-body-lg text-tertiary">
                We set out to curate a boutique physical environment designed purely to foster focus. By removing bright primary plastic toys and replacing them with hand-polished olivewood blocks, organic fiber textiles, and real scientific glass pipettes, children treat their learning space with natural awe and immense reverence.
              </p>
            </div>
            
            <div className="relative pt-6">
              <div className="bg-secondary-fixed/20 p-8 rounded-xl relative">
                <span className="material-symbols-outlined text-primary text-5xl absolute -top-6 -left-4">format_quote</span>
                <p className="font-body-lg italic text-on-secondary-container text-lg leading-relaxed">
                  "The greatest test of educational success is not a score, but the deep tranquility and intrinsic motivation of the child who works on their craft as if the guide did not exist."
                </p>
                <cite className="block mt-6 font-bold text-secondary">— Sasha Valen, Founder</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Heartbeat Section */}
      <section className="py-24 px-gutter relative">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="bg-secondary-fixed/30 text-secondary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">GUIDING LIGHTS</span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mt-3 mb-4">Our Heartbeat &amp; Pillars</h2>
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto">We operate under meticulous guidelines to protect and nurture early human growth.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Philosophy Card 1 */}
          <div className="glass-card p-8 rounded-lg relative overflow-hidden group">
            <div className="w-14 h-14 bg-primary-fixed rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Self-Direction</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Children select their work based on inner interest, allowing them to deeply concentrate for hours without artificial bell interruptions.</p>
          </div>

          {/* Philosophy Card 2 */}
          <div className="glass-card p-8 rounded-lg relative overflow-hidden group bg-secondary-fixed/10">
            <div className="w-14 h-14 bg-secondary-fixed rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary text-3xl">favorite</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Co-Regulation</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">We teach children how to recognize, validate, and express their feelings safely, replacing disciplinary systems with real relational healing.</p>
          </div>

          {/* Philosophy Card 3 */}
          <div className="glass-card p-8 rounded-lg relative overflow-hidden group bg-tertiary-fixed/10">
            <div className="w-14 h-14 bg-tertiary-fixed rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-tertiary text-3xl">palette</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Artistic Inquiry</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Fine arts, woodcarving, clay sculpting, and classic acoustics are not electives—they are core languages of discovery.</p>
          </div>

          {/* Philosophy Card 4 */}
          <div className="glass-card p-8 rounded-lg relative overflow-hidden group">
            <div className="w-14 h-14 bg-surface-container-highest rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-surface-variant text-3xl">forest</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Earth Custodianship</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">By planting, harvesting, and taking care of bees, our students gain an intimate relationship with natural cycles.</p>
          </div>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="py-24 bg-gradient-to-b from-white to-[#FAF5FF] relative border-t border-white/50">
        <div className="max-w-5xl mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="bg-primary-fixed/30 text-primary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">OUR EVOLUTION</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-3">School Milestones</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="glass-card p-8 rounded-xl border border-white/60 flex gap-4">
                <div className="text-display-lg-mobile md:text-3xl font-black text-secondary-fixed-dim shrink-0">{m.year}</div>
                <div>
                  <h3 className="font-headline-md text-lg text-primary font-bold mb-2">{m.title}</h3>
                  <p className="font-body-md text-sm text-tertiary">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 max-w-7xl mx-auto px-gutter">
        <div className="text-center mb-16">
          <span className="bg-tertiary-fixed/30 text-tertiary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">PEDAGOGICAL LEADERSHIP</span>
          <h2 className="font-display-lg text-headline-lg text-primary mt-3">The Nurturers</h2>
          <p className="font-body-lg text-body-md text-tertiary max-w-xl mx-auto mt-2">Our world-class educators are accredited specialists with deep backgrounds in child development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((person, idx) => (
            <div key={idx} className="glass-card p-6 rounded-xl border border-white/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-md">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-headline-md text-lg text-primary text-center font-bold mb-1">{person.name}</h3>
                <p className="text-label-sm text-secondary text-center uppercase tracking-widest font-semibold mb-4">{person.role}</p>
                <p className="font-body-md text-sm text-tertiary text-center leading-relaxed">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-gutter">
        <div className="max-w-7xl mx-auto rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#C4B5FD] p-12 lg:p-24 relative overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
              <circle cx="10%" cy="20%" r="40" fill="white"></circle>
              <circle cx="90%" cy="80%" r="60" fill="white"></circle>
            </svg>
          </div>
          
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8">Begin Your Child's <br/> Extraordinary Learning Journey</h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto mb-12">
              We look forward to introducing you to our beautiful, peaceful early learning ecosystem. Schedule a campus visit with us today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block">
                Schedule a Campus Visit
              </Link>
              <Link to="/admissions" className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all inline-block">
                Start Your Child's Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
