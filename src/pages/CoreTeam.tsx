import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function CoreTeam() {
  const team = [
    {
      name: 'Mrs. Sumathi Ravichander',
      role: 'Founder Principal',
      image: '/gallery/sumathi.JPG',
      bio: 'With 30 years of educational experience, she has worked as Advisor, Management Consultant and Principal to CBSE, ICSE and IGCSE Schools in South India.',
      accent: 'from-[#E9DDFF] to-[#F5F3FF]',
      iconBg: 'bg-primary-fixed/40',
      roles: [
        { title: 'Founder Principal Roles', items: ['Pranav The School, Hyderabad', 'Vagdevi Volas School, Bangalore', 'Birla Open Minds International School, Bangalore'] },
        { title: 'Management Consultant Projects', items: ['Established CBSE Schools in Malaysia and Singapore', 'Meridian Group of Schools, Hyderabad', 'Vibgyor High School, Hyderabad', 'Sri Sri Academy, Hyderabad', 'Om Shree Public School, Bangalore', 'Smt. Kamalabai Institute, Bangalore', 'Paradise International School, Bangalore', 'Maharishi Vidya Mandir, Mogappair, Chennai'] }
      ]
    },
    {
      name: 'Ms. Komal Goenka',
      role: 'Founder - Phonic World',
      image: '/gallery/3232.png',
      bio: "The founder of Phonic World, a learning center that aims at improving children's life through the power of quality education. Being a UK Certified Jolly Phonics and Grammar Trainer, she has witnessed the potential of tremendous transformation in her student's speaking, reading and writing skills, when taught using the right methods under this programme.",
      accent: 'from-[#FEF9C3] to-[#FEFCE8]',
      iconBg: 'bg-[#FEF9C3]',
      details: [
        'Certified storyteller from Kathalaya, affiliated to the International Storytelling Center',
        'Certified Soft Skills and Corporate Trainer from ILA',
        'Voice Coach and Certified Visual Thinking Facilitator from The Netherlands',
        'Trained and empowered more than 5000 people through certified workshops',
        'Implemented early literacy Phonics Programme in 500 Government Schools of Assam'
      ]
    },
    {
      name: 'Pavithra Suresh',
      role: 'Montessori Educational Consultant',
      image: '/gallery/pavithra.jpeg',
      bio: 'Ms. Pavithra Suresh is the Educational Consultant for Montessori in Coimbatore. She is working as a faculty for the prestigious Indian Montessori Centre, Bangalore.',
      accent: 'from-[#D3E5F6] to-[#F0F7FF]',
      iconBg: 'bg-tertiary-fixed/40',
      details: [
        'Running an activity centre called "Learning Tree Montessori Centre" in Coimbatore',
        'Associated with Montessori for the past 8 years in Coimbatore, Bangalore and Chennai',
        'Masters in Home Science from Bangalore',
        'Undergone professional Pre Primary Montessori Course and rigorous Elementary Montessori Course through Indian Montessori Centre, Bangalore'
      ]
    },
    {
      name: 'Sandhiya Venkatesan',
      role: 'AMI Montessori & Waldorf Educator',
      image: '/gallery/15.png',
      bio: 'She was graduated with a Masters in English Literature and also a Masters in Education. Trained under Ms. Rukmani Ramachandran and Ms. Ruby Lau, she gained her Association of Montessori International (AMI) Pre Primary Montessori Diploma in 2008.',
      accent: 'from-[#FFD8ED] to-[#FFF5FA]',
      iconBg: 'bg-secondary-fixed/40',
      details: [
        'Trained under Dr. Jean K Miller from the US and Carla Foster from Norway - Diploma in Elementary Montessori 2010 (AMI, Amsterdam)',
        'Working with primary and elementary children since 2006',
        'Waldorf Kindergarten training under Ms. Latha from Bangalore and Ms. Sucheta Garud from Mumbai (2014)',
        'Waldorf Grade training under Ms Anandi from Hyderabad (2016)',
        'Ran own Montessori and Waldorf Schools for 5 years',
        'Attended conferences led by international experts - Carla Foster, Alison Awes, Greg Mc Donald, Jenny Marie Hoglund, Ann Dunne'
      ]
    }
  ];

  return (
    <main className="relative pt-32 pb-20 overflow-x-hidden">
      <SEO 
        title="Our Core Team | SASHA School Leadership"
        description="Meet the dedicated educational leaders and Montessori consultants at SASHA School of Life. Over 30 years of combined experience in holistic education."
        url="/core-team"
      />
      {/* Background washes */}
      <div className="watercolor-gradient absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="watercolor-gradient absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#FEF9C3]/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* ─── HERO SECTION ─── */}
      <section className="relative max-w-7xl mx-auto px-gutter py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block uppercase tracking-wider">OUR CORE TEAM</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
            The People Behind <span className="text-[#F59E0B]">SASHA</span>
          </h1>
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto leading-relaxed">
            Our school system is supported by a battalion of world-class educational professionals dedicated to nurturing your child's journey.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 justify-center mt-12 pt-8 border-t border-[#FEF08A]/40">
            <div className="text-center">
              <span className="font-display-lg text-3xl font-bold text-primary">30+</span>
              <p className="text-xs text-tertiary font-medium mt-1">Years Combined</p>
            </div>
            <div className="text-center">
              <span className="font-display-lg text-3xl font-bold text-[#F59E0B]">4</span>
              <p className="text-xs text-tertiary font-medium mt-1">Expert Mentors</p>
            </div>
            <div className="text-center">
              <span className="font-display-lg text-3xl font-bold text-secondary">AMI</span>
              <p className="text-xs text-tertiary font-medium mt-1">Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM MEMBERS— Alternating Editorial ─── */}
      <section className="relative z-10 reveal">
        {team.map((member, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`py-16 ${isEven ? 'bg-[#FEFCE8]/15' : 'bg-surface-container-low/20'} border-y border-white/30`}>
              <div className="max-w-7xl mx-auto px-gutter">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}>
                  {/* Profile Image Column */}
                  <div className={`lg:col-span-4 flex justify-center ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative">
                      <div className={`w-56 h-56 md:w-72 md:h-72 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl hero-float relative z-10`} style={{ animationDelay: `${idx * 0.5}s` }}>
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
                      </div>
                      {/* Decorative accent */}
                      <div className={`absolute -bottom-4 ${isEven ? '-right-4' : '-left-4'} w-20 h-20 bg-gradient-to-br ${member.accent} rounded-2xl border border-white/50 flex items-center justify-center z-20 shadow-lg`}>
                        <span className="material-symbols-outlined text-primary text-2xl">workspace_premium</span>
                      </div>
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br ${member.accent} rounded-full blur-3xl -z-10 opacity-50 pointer-events-none`}></div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-8 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="mb-6">
                      <h2 className="font-display-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold mb-2">{member.name}</h2>
                      <span className="golden-badge px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">{member.role}</span>
                    </div>

                    <p className="font-body-lg text-base text-tertiary leading-relaxed mb-8 max-w-2xl">
                      {member.bio}
                    </p>

                    {/* Credentials */}
                    {'roles' in member && member.roles ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {member.roles.map((role, rIdx) => (
                          <div key={rIdx} className={`bg-gradient-to-br ${member.accent} rounded-2xl p-6 border border-white/50 shadow-md`}>
                            <h4 className="font-headline-md text-sm text-primary font-bold mb-4 flex items-center gap-2">
                              <span className="material-symbols-outlined text-[#F59E0B] text-sm">verified</span>
                              {role.title}
                            </h4>
                            <ul className="space-y-2">
                              {role.items.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-start gap-2.5 text-xs text-tertiary leading-relaxed">
                                  <span className="material-symbols-outlined text-[#F59E0B] text-xs shrink-0 mt-0.5">check_circle</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={`bg-gradient-to-br ${member.accent} rounded-2xl p-6 border border-white/50 shadow-md`}>
                        <h4 className="font-headline-md text-sm text-primary font-bold mb-4 flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#F59E0B] text-sm">workspace_premium</span>
                          Professional Expertise
                        </h4>
                        <ul className="space-y-3">
                          {member.details?.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-3 text-sm text-tertiary leading-relaxed">
                              <span className="material-symbols-outlined text-[#F59E0B] text-sm shrink-0 mt-0.5">check_circle</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ─── CLOSING CTA ─── */}
      <section className="py-24 px-gutter relative overflow-hidden reveal">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#8B5CF6] to-[#C4B5FD] p-12 lg:p-24 relative overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-8 left-8 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-white/30 text-7xl block mb-4">format_quote</span>
            <p className="font-display-lg text-lg md:text-2xl italic leading-relaxed mb-8 opacity-90">
              "We have a school system supported by a battalion of professionals— each one passionate about nurturing the whole child."
            </p>
            <p className="text-sm uppercase tracking-widest text-[#FEF08A] font-bold mb-12">— SASHA School of Life</p>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
              Meet Our Educators <span className="text-[#FEF08A]">in Person</span>
            </h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto mb-12 leading-relaxed">
              We invite you to visit our campus, observe a Montessori session, and interact with our dedicated mentors.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block text-lg">
                Schedule a Campus Tour
              </Link>
              <Link to="/about" className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all inline-block text-lg backdrop-blur-sm">
                About Our Founders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
