import React, { useEffect } from 'react';

export default function CampusLife() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const doodles = document.querySelectorAll<HTMLElement>('.floating-doodle');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      doodles.forEach((doodle, index) => {
        const factor = (index + 1) * 20;
        const x = (mouseX - 0.5) * factor;
        const y = (mouseY - 0.5) * factor;
        doodle.style.transform = `translate(${x}px, ${y}px) rotate(${x / 10}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const facilities = [
    { title: 'State-of-the-Art Architecture', icon: 'apartment', desc: 'Modern infrastructure designed to inspire learning and creativity.' },
    { title: 'Sophisticated Classrooms', icon: 'class', desc: 'Well-equipped, child-friendly classrooms with imported Montessori materials.' },
    { title: 'Imported Montessori Materials', icon: 'toys', desc: 'Premium quality Montessori teaching aids from around the world.' },
    { title: 'Nutritious Snacks', icon: 'restaurant', desc: 'Healthy and balanced meals to support growing minds and bodies.' },
    { title: 'Multi Sports Turf Ground', icon: 'sports_soccer', desc: 'Spacious outdoor area for sports and physical activities.' },
    { title: 'Well-Stacked Library', icon: 'menu_book', desc: 'Child-friendly library with a rich collection of books and resources.' },
    { title: 'CCTV Surveillance', icon: 'videocam', desc: '24/7 security monitoring for complete safety and peace of mind.' },
    { title: 'RFID Attendance', icon: 'badge', desc: 'Advanced attendance tracking system for student safety.' },
    { title: 'Exclusive Parents App', icon: 'phone_android', desc: 'Stay connected with your child\'s progress through our dedicated app.' },
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
      lifeSkills: 'Character formation'
    },
    {
      program: 'Lifeskill and Leadership',
      activities: '• Exclusive Class',
      lifeSkills: 'To groom every Learner'
    },
    {
      program: 'Brain Gym',
      activities: '• Every session commences with Whole brain exercises and activities',
      lifeSkills: 'Whole Brain development'
    },
    {
      program: 'Neuro Linguistic Programming',
      activities: '• Ambidextrous activity (using two hands simultaneously)',
      lifeSkills: 'To quit gadgets and engage in productive activities'
    },
    {
      program: 'British Council',
      activities: "• World's No.1 UK based international organization for English communication.",
      lifeSkills: 'Language, Communication and Public Speaking Skill'
    },
    {
      program: 'EduSports',
      activities: "• India's No.1 Sports education organization.\n• Structured physical activities.",
      lifeSkills: 'Physical, Social and Mental Fitness'
    },
    {
      program: 'Kinder Dance International',
      activities: '• USA based Edu Organisation for Education through dance and movement.',
      lifeSkills: 'No stage fear\nEnhances Gross Motor skills'
    }
  ];

  return (
    <>
      <div className="watercolor-bg fixed inset-0 -z-10 pointer-events-none"></div>

      <div className="floating-doodle fixed top-40 left-10 text-primary-fixed-dim pointer-events-none" style={{ animationDelay: '1s' }}>
        <span className="material-symbols-outlined text-[48px]">star</span>
      </div>
      <div className="floating-doodle fixed top-80 right-20 text-secondary-fixed pointer-events-none" style={{ animationDelay: '2s' }}>
        <span className="material-symbols-outlined text-[64px]">sunny</span>
      </div>
      <div className="floating-doodle fixed bottom-40 left-20 text-tertiary-fixed-dim pointer-events-none" style={{ animationDelay: '3s' }}>
        <span className="material-symbols-outlined text-[56px]">spa</span>
      </div>
      <div className="floating-doodle fixed bottom-20 right-10 text-primary-fixed pointer-events-none" style={{ animationDelay: '0.5s' }}>
        <span className="material-symbols-outlined text-[40px]">park</span>
      </div>
      <div className="floating-doodle fixed top-1/2 left-1/2 text-secondary-fixed-dim pointer-events-none" style={{ animationDelay: '1.8s' }}>
        <span className="material-symbols-outlined text-[48px]">butterfly</span>
      </div>

      <main className="pt-40 pb-20 px-gutter max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full font-label-sm uppercase tracking-widest text-xs font-semibold">FEATURES & ACTIVITIES</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mt-6 mb-4">Life at SASHA School</h1>
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto">
            Leaders groomed for Life – our promise to Parents! We offer a comprehensive educational experience with world-class facilities and a gamut of curated activities.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="font-display-lg text-headline-lg text-primary text-center mb-10">Programs Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl glass-card p-4 hover:translate-y-[-4px] transition-transform duration-500 shadow-[0_10px_30px_rgba(139,92,246,0.1)] bg-white/80">
              <div className="relative h-72 w-full rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://media.istockphoto.com/id/1296235446/photo/building-together.jpg?s=612x612&w=0&k=20&c=cRwmNJ6rYBhOFkJfeGpvDjcdgsZQQPTQVh_4Kkjbj50=" 
                  alt="Students building together" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 left-4 bg-tertiary-fixed/90 backdrop-blur-sm text-on-tertiary-fixed-variant px-4 py-1.5 rounded-full font-label-sm text-xs font-bold uppercase">CO-CURRICULAR</div>
              </div>
              <div className="px-2">
                <h3 className="font-display-lg text-xl text-primary font-bold">Holistic Development Programme</h3>
                <p className="font-body-md text-sm text-tertiary mt-2 leading-relaxed">
                  Our structured co-curricular and extra-curricular activities ensure that every child develops not just academically, but also physically, socially and emotionally.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl glass-card p-4 hover:translate-y-[-4px] transition-transform duration-500 shadow-[0_10px_30px_rgba(139,92,246,0.1)] bg-white/80">
              <div className="relative h-72 w-full rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://media.istockphoto.com/id/599867640/photo/school-kids-meditating-during-yoga-class.jpg?s=612x612&w=0&k=20&c=zxrgvowNFb3KKGEcFE-1zNQULL3xNNUPo4kM5HiTFJU=" 
                  alt="Students meditating" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 left-4 bg-secondary-fixed/90 backdrop-blur-sm text-on-secondary-fixed-variant px-4 py-1.5 rounded-full font-label-sm text-xs font-bold uppercase">WELLNESS</div>
              </div>
              <div className="px-2">
                <h3 className="font-display-lg text-xl text-primary font-bold">Mind & Body Wellness</h3>
                <p className="font-body-md text-sm text-tertiary mt-2 leading-relaxed">
                  Yoga, Karate, Silambam, Skating, Dance and Brain Gym - a comprehensive wellness programme for physical and mental development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="bg-primary-fixed/30 text-primary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">OUR FACILITIES</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-3">World-Class Infrastructure</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {facilities.map((feat, idx) => (
              <div key={idx} className="glass-card p-5 rounded-lg text-center border-white/60 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <div className="w-11 h-11 bg-secondary-fixed/50 rounded-full flex items-center justify-center text-primary mx-auto mb-3">
                    <span className="material-symbols-outlined text-xl">{feat.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-sm text-primary font-bold mb-1.5">{feat.title}</h3>
                  <p className="font-body-md text-xs text-tertiary leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="bg-secondary-fixed/30 text-secondary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">ACTIVITIES</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-3">Co-curricular & Extra-Curricular</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {activities.map((cat, idx) => (
              <div key={idx} className="glass-card rounded-xl p-8 text-center">
                <h3 className="font-headline-md text-lg text-primary font-bold mb-6">{cat.title}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {cat.items.map((item, iIdx) => (
                    <span key={iIdx} className="bg-primary-fixed/30 text-primary px-4 py-2 rounded-full text-sm font-medium">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="font-display-lg text-headline-lg text-primary mt-3">Our Co-curricular Activities</h2>
            <p className="font-body-lg text-tertiary mt-2">Developing life skills through structured programs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {detailedActivities.map((act, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 flex flex-col h-full border border-white/40 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary-fixed/30 rounded-full flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-2xl">star</span>
                </div>
                <h3 className="font-headline-md text-lg text-primary font-bold mb-4">{act.program}</h3>
                <div className="mb-4 flex-grow">
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Activities</h4>
                  <p className="text-sm text-tertiary whitespace-pre-line leading-relaxed">{act.activities}</p>
                </div>
                <div className="pt-4 border-t border-primary-fixed/20">
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Life Skills</h4>
                  <p className="text-sm text-primary font-medium whitespace-pre-line">{act.lifeSkills}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="glass-card rounded-xl p-12 text-center relative overflow-hidden bg-white/75">
          <div className="floating-doodle absolute -left-10 -top-10 text-secondary opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">format_quote</span>
          </div>
          <p className="font-display-lg text-lg md:text-xl text-secondary italic relative z-20">"One of the Pioneers in implementing authentic Montessori at primary level in South India. We have a school system supported by a battalion of professionals."</p>
          <p className="mt-6 font-label-sm text-primary uppercase tracking-widest text-xs font-bold">— SASHA School of Life</p>
        </div>
      </main>
    </>
  );
}