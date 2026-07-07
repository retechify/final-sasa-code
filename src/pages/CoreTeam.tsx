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
        { title: 'Founder Principal', items: ['Pranav The School, Hyderabad', 'Vagdevi Volas School, Bangalore', 'Birla Open Minds International School, Bangalore'] },
        { title: 'Management Consultant', items: ['Established CBSE Schools in Malaysia and Singapore', 'Meridian Group of Schools, Hyderabad', 'Vibgyor High School, Hyderabad', 'Sri Sri Academy, Hyderabad', 'Om Shree Public School, Bangalore', 'Smt. Kamalabai Institute, Bangalore', 'Paradise International School, Bangalore', 'Maharishi Vidya Mandir, Mogappair, Chennai'] }
      ]
    },
    {
      name: 'Ms. Komal Goenka',
      role: 'Founder - Phonic World',
      image: '/gallery/3232.png',
      bio: 'The founder of Phonic World, a learning center that aims at improving children\'s life through the power of quality education. Being a UK Certified Jolly Phonics and Grammar Trainer, she has witnessed the potential of tremendous transformation in her student\'s speaking, reading and writing skills, when taught using the right methods under this programme.',
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
    <main className="relative overflow-x-hidden">
      <section className="relative pt-40 pb-24 px-gutter overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-60">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] watercolor-wash rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-3xl"></div>
        </div>

        <span className="material-symbols-outlined floating-doodle absolute top-32 left-8 text-primary-fixed-dim" style={{ fontSize: '40px' }}>star</span>
        <span className="material-symbols-outlined floating-doodle absolute top-48 right-16 text-secondary-fixed-dim" style={{ fontSize: '44px', animationDelay: '1s' }}>diversity</span>
        <span className="material-symbols-outlined floating-doodle absolute bottom-32 left-1/3 text-tertiary-fixed-dim" style={{ fontSize: '36px', animationDelay: '2s' }}>school</span>
        <span className="material-symbols-outlined floating-doodle absolute top-1/2 right-8 text-primary-container" style={{ fontSize: '32px', animationDelay: '1.5s' }}>groups</span>
        <div className="max-w-7xl mx-auto text-center">
          <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block">OUR CORE TEAM</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">The People Behind SASHA</h1>
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto">
            Our school system is supported by a battalion of professionals dedicated to nurturing your child's educational journey.
          </p>
        </div>
      </section>

      <section className="pb-24 px-gutter max-w-7xl mx-auto">
        {team.map((member, idx) => (
          <div key={idx} className={`glass-card p-8 md:p-12 rounded-xl mb-12 ${idx % 2 === 1 ? 'bg-secondary-fixed/10' : ''}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-md">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">{member.name}</h3>
                <p className="text-label-sm text-secondary uppercase tracking-widest font-semibold mt-1">{member.role}</p>
              </div>
              <div className="md:col-span-2">
                <p className="font-body-lg text-body-md text-tertiary mb-6 leading-relaxed">{member.bio}</p>
                
                {'roles' in member && member.roles ? (
                  member.roles.map((role, rIdx) => (
                    <div key={rIdx} className="mb-4">
                      <h4 className="font-headline-md text-base text-primary font-bold mb-2">{role.title}</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-tertiary">
                        {role.items.map((item, iIdx) => (
                          <li key={iIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <ul className="list-disc list-inside space-y-2 text-sm text-tertiary">
                    {member.details?.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-24 px-gutter">
        <div className="max-w-7xl mx-auto rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#C4B5FD] p-12 lg:p-24 relative overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
              <circle cx="10%" cy="20%" r="40" fill="white"></circle>
              <circle cx="90%" cy="80%" r="60" fill="white"></circle>
            </svg>
          </div>
          
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8">Meet Our Team in Person</h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto mb-12">
              We invite you to visit our campus and meet our dedicated team of educators and professionals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block">
                Schedule a Campus Visit
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