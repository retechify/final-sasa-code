import React from 'react';
import { Link } from 'react-router-dom';

export default function CoreTeam() {
  const team = [
    {
      name: 'Mrs. Sumathi Ravichander',
      role: 'Founder Principal',
      image: '/gallery/sumathi.JPG',
      bio: 'With 30 years of educational experience, she has worked as Advisor, Management Consultant and Principal to CBSE, ICSE and IGCSE Schools in South India.',
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
    <main className="relative pt-32 overflow-x-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-60 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] watercolor-wash rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header section */}
      <section className="relative max-w-7xl mx-auto px-gutter py-12 md:py-20 text-center">
        <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block uppercase tracking-wider">OUR CORE TEAM</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
          The People Behind SASHA
        </h1>
        <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto leading-relaxed">
          Our school system is supported by a battalion of world-class educational professionals dedicated to nurturing your child's journey.
        </p>
      </section>

      {/* Team cards section */}
      <section className="pb-24 px-gutter max-w-7xl mx-auto space-y-12 z-10 relative">
        {team.map((member, idx) => (
          <div 
            key={idx} 
            className={`glass-card p-8 md:p-12 rounded-2xl border border-white/50 bg-white/70 shadow-lg hover:shadow-2xl transition-all duration-500`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Profile Col */}
              <div className="lg:col-span-4 text-center lg:border-r lg:border-primary-fixed/20 lg:pr-8">
                <div className="w-44 h-44 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-xl relative hero-float">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display-lg text-xl md:text-2xl text-primary font-bold leading-snug">{member.name}</h3>
                <p className="text-label-sm text-secondary uppercase tracking-widest font-semibold mt-2 text-xs">{member.role}</p>
              </div>

              {/* Bio & Credentials Col */}
              <div className="lg:col-span-8 flex flex-col justify-center h-full">
                <p className="font-body-md text-base text-tertiary mb-6 leading-relaxed italic">
                  "{member.bio}"
                </p>
                
                {'roles' in member && member.roles ? (
                  <div className="space-y-4">
                    {member.roles.map((role, rIdx) => (
                      <div key={rIdx} className="bg-white/40 p-4 rounded-xl border border-white/30">
                        <h4 className="font-headline-md text-sm text-primary font-bold mb-2 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">verified</span>
                          {role.title}
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-xs text-tertiary leading-relaxed">
                          {role.items.map((item, iIdx) => (
                            <li key={iIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white/40 p-5 rounded-xl border border-white/30">
                    <h4 className="font-headline-md text-sm text-primary font-bold mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">workspace_premium</span>
                      Professional Expertise
                    </h4>
                    <ul className="space-y-2">
                      {member.details?.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-tertiary leading-relaxed">
                          <span className="material-symbols-outlined text-secondary text-sm shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Footer Block */}
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
              Meet Our Educator Team in Person
            </h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto mb-12 leading-relaxed">
              We invite you to visit our campus, observe a Montessori session, and interact with our dedicated mentors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block">
                Schedule a Campus Tour
              </Link>
              <Link to="/about" className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all inline-block">
                About Our Founders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}