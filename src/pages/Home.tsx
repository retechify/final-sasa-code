import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    // Atmospheric effect: gentle floating of doodles
    const doodles = document.querySelectorAll<HTMLElement>('.doodle-element');
    const intervals = Array.from(doodles).map((doodle, index) => {
      doodle.style.transition = 'transform 3s ease-in-out';
      return setInterval(() => {
        const x = Math.random() * 20 - 10;
        const y = Math.random() * 20 - 10;
        doodle.style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
      }, 3000 + (index * 500));
    });
    
    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  const stats = [
    { value: '1:6', label: 'Educator-to-Child Ratio', desc: 'Allowing deeply personalized attention, nurturing care, and safety.' },
    { value: '100%', label: 'Organic & Whole Food Meals', desc: 'Fresh chef-prepared lunches and morning/afternoon snacks daily.' },
    { value: '3 Acres', label: 'Ethereal Forest & Garden Space', desc: 'Fully secure nature classroom, butterfly habitat, and farming patches.' },
    { value: '4 Bilingual', label: 'Language & Art Offerings', desc: 'Early Spanish, Mandarin, sensory rhythm music, and clay sculpting.' }
  ];

  const timeline = [
    { time: '8:30 AM - 9:00 AM', activity: 'Soft Arrival & Morning Dew Gathering', desc: 'Children are welcomed into our tranquil lobby where they practice mindfulness, change into soft indoor shoes, and engage in gentle self-directed sensory play.' },
    { time: '9:00 AM - 10:15 AM', activity: 'The Master Montessori Work Cycle', desc: 'Uninterrupted work time using specialized wooden materials. Educators guide children individually in numeracy, practical life skills, botany, and creative linguistics.' },
    { time: '10:15 AM - 11:30 AM', activity: 'Outdoor Forest Discovery & Soil Exploration', desc: 'Mud kitchen exploration, organic vegetable gardening, insect observation, and physical balance play in our private redwood-fenced backyard.' },
    { time: '11:30 AM - 12:30 PM', activity: 'Chef-Led Family Style Organic Luncheon', desc: 'Children wash hands, lay out visual table settings, serve each other organic plant-forward meals, and learn social manners and gratitude.' },
    { time: '12:30 PM - 2:00 PM', activity: 'Dream State Rest & Sensory Storytelling', desc: 'Cozy floor futons with lavender eye cushions. Soft harp music or live soft storytelling leads into a peaceful nap and rest window.' },
    { time: '2:00 PM - 3:30 PM', activity: 'Creative Workshop & Ethereal Art Integration', desc: 'Clay modeling, watercolor painting, theater roleplay, or violin-and-rhythm workshops, concluding with a light organic snack.' }
  ];

  const faqs = [
    {
      question: "What age groups do you accept, and what is your admissions process?",
      answer: "We welcome children from 18 months to 8 years old. Our admissions process is designed to be highly consultative. It begins with a personalized private tour, followed by an informal classroom playdate session to ensure our beautiful child-centric environment aligns with your family’s dreams."
    },
    {
      question: "How do you integrate play with academic readiness for elementary schools?",
      answer: "We believe academic brilliance is a natural consequence of early joy. Our curriculum integrates mathematical concepts through tactile beads, geography through beautiful wooden map puzzles, and language through phonics sandboxes. Our students transition into traditional or alternative elementary schools with superior reading levels and high emotional competence."
    },
    {
      question: "What is your approach to discipline and emotional conflict resolution?",
      answer: "We do not utilize time-outs or visual behavior charts. Instead, we practice the 'Peace Rose' conflict resolution method. Guided by specialized non-violent communication protocols, children learn to voice their feelings, listen to their peers, and co-create collaborative solutions in a supportive and respectful atmosphere."
    },
    {
      question: "How secure is the campus and what are your hygiene protocols?",
      answer: "The safety of our community is paramount. Our campus features secure biometric single-point access gates, continuous security staffing, and strict visitor verification. Classrooms are sanitized using high-grade organic and baby-safe essential oil solutions daily, backed by medical-grade HEPA air filtration systems."
    }
  ];

  return (
    <main className="relative pt-32 overflow-x-hidden">
      {/* Background Ornaments */}
      <div className="watercolor-gradient absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"></div>
      <div className="watercolor-gradient absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"></div>
      
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-gutter py-12 md:py-20 flex flex-col items-center text-center overflow-visible">
        {/* Decorative Doodles */}
        <span className="material-symbols-outlined doodle-element absolute top-10 left-10 text-primary-fixed" style={{ fontSize: '48px' }}>star_rate</span>
        <span className="material-symbols-outlined doodle-element absolute bottom-20 right-20 text-secondary-fixed" style={{ fontSize: '64px' }}>flight_takeoff</span>
        <span className="material-symbols-outlined doodle-element absolute top-1/4 right-10 text-tertiary-fixed" style={{ fontSize: '32px' }}>auto_awesome</span>
        
        <div className="relative w-full max-w-4xl mb-12">
          {/* Rainbow Arc */}
          <div className="hero-rainbow absolute -top-12 left-1/2 -translate-x-1/2 w-[120%] aspect-square opacity-20 rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 mx-auto w-72 h-72 md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-8 border-white shadow-xl">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDayfCmynx3SjCplQ38FbHThLTqXW-dpWBDcgJhZ_A5QWmU8TDxi6_gGmJl5yKh-5xf9faoGKgAVvtFDdv8UodvAZK-j96ZYpXDURIg0LrBRDtqvlrxPMhhnZN9PF2Qzgd0hfo8C-CMFjPdVZolCEMi3AJUELcStFjvf6QgP3JZhqe0ubrxLhXYwLDl3kvzo8Y5Ojm2Y3snOunAnoVgIx7FF18LfXR1abRfQVFNrmAv20h-K6duLbsG9wcC8zWcbW02Bv6d4iep913T" 
              alt="Two diverse children sitting together sharing a large picture book"
            />
          </div>
        </div>
        
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-3xl mb-6 leading-tight">
          Where Curious Minds <span className="lavender-text-gradient">Grow Into Confident Learners</span>
        </h1>
        
        <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mb-10">
          Welcome to Sasha School. We are a premium, nurturing early learning academy designed to bridge child-led Montessori education with modern emotional intelligence, sensory development, and organic nature-based exploration.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="primary-pill px-10 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg text-center inline-block">
            Schedule a Campus Visit
          </Link>
          <Link to="/admissions" className="bg-white border-[1.5px] border-outline-variant/50 px-10 py-4 rounded-full text-primary font-bold text-lg transition-transform hover:scale-105 active:scale-95 text-center inline-block">
            Start Your Child's Journey
          </Link>
        </div>
      </section>

      {/* Stats Board Section */}
      <section className="py-16 bg-surface-container-lowest/80 backdrop-blur-md border-y border-white/50 relative">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-12">
            <span className="bg-primary-fixed/30 text-primary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">SASHA BY THE NUMBERS</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-3">Exceptional Standards of Care</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card p-6 rounded-lg text-center border-white/60 shadow-[0_4px_20px_rgba(139,92,246,0.03)] flex flex-col justify-between">
                <div>
                  <div className="text-display-lg-mobile md:text-4xl lg:text-5xl font-black text-secondary mb-2">{stat.value}</div>
                  <div className="font-headline-md text-headline-sm text-primary mb-3 font-semibold">{stat.label}</div>
                  <p className="font-body-md text-sm text-tertiary">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Features Grid */}
      <section className="max-w-7xl mx-auto px-gutter py-20 relative">
        <div className="text-center mb-16">
          <span className="bg-secondary-fixed/30 text-secondary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">FOUR FOUNDATIONAL PILLARS</span>
          <h2 className="font-display-lg text-headline-lg text-primary mt-3">A Dreamscape Designed for Early Discovery</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="glass-card p-8 rounded-lg flex flex-col gap-4 group hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Montessori Approach</h3>
            <p className="font-body-md text-body-md text-tertiary">Self-directed growth in a carefully curated environment that honors every child's pace, sparking early intrinsic drive and curiosity.</p>
          </div>
          
          {/* Card 2 */}
          <div className="glass-card p-8 rounded-lg flex flex-col gap-4 group hover:-translate-y-1 transition-all duration-300 md:mt-8">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">auto_fix_high</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Holistic Learning</h3>
            <p className="font-body-md text-body-md text-tertiary">Nurturing the heart, hand, and mind through creative expression, cosmic scientific exploration, and elegant sensory art play.</p>
          </div>
          
          {/* Card 3 */}
          <div className="glass-card p-8 rounded-lg flex flex-col gap-4 group hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined">health_and_safety</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Safe &amp; Nurturing</h3>
            <p className="font-body-md text-body-md text-tertiary">A secure home-like haven designed to evoke peace, clean breathing, emotional balance, and physical tranquility for every explorer.</p>
          </div>
          
          {/* Card 4 */}
          <div className="glass-card p-8 rounded-lg flex flex-col gap-4 group hover:-translate-y-1 transition-all duration-300 md:mt-8">
            <div className="w-12 h-12 rounded-full bg-primary-fixed-dim/30 flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined">forest</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Nature Friendly</h3>
            <p className="font-body-md text-body-md text-tertiary">Organic integration with outdoor garden beds, butterfly sanctuaries, and biological sensory exploration at every single turn.</p>
          </div>
        </div>
      </section>

      {/* Day in the Life Section */}
      <section className="py-20 bg-gradient-to-b from-[#FAF5FF] to-white relative">
        <div className="max-w-5xl mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="bg-tertiary-fixed/30 text-tertiary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">A FLOWING HARMONY</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-3">A Day in the Life of a Sasha Student</h2>
            <p className="font-body-lg text-body-md text-tertiary max-w-xl mx-auto mt-4">We structure our day to breathe in and breathe out, balancing intense physical exploration with quiet reflection and academic wonder.</p>
          </div>

          <div className="relative border-l-2 border-primary/20 pl-6 md:pl-10 ml-4 md:ml-10 space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Visual marker dot */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
                </div>
                
                <div className="glass-card p-6 md:p-8 rounded-xl shadow-[0_10px_30px_rgba(139,92,246,0.02)] border border-white hover:border-primary/20 transition-all duration-300">
                  <div className="text-sm font-bold text-secondary tracking-widest mb-1 font-mono uppercase">{item.time}</div>
                  <h3 className="font-headline-md text-headline-sm text-primary mb-3 font-semibold">{item.activity}</h3>
                  <p className="font-body-md text-body-sm text-tertiary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonial Highlight */}
      <section className="py-20 px-gutter bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="material-symbols-outlined text-secondary text-5xl opacity-40 mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <p className="font-display-lg text-lg md:text-2xl italic text-primary leading-relaxed mb-8">
            "Sasha is not just a school, it is a spiritual extension of our home. Our daughter has developed a profound sense of self-direction, an organic understanding of mathematics, and an emotional vocabulary that continues to astound our pediatrician."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold font-mono">
              E.M
            </div>
            <div className="text-left">
              <div className="font-headline-md text-sm font-bold text-primary">Dr. Evelyn Martinez</div>
              <div className="font-body-md text-xs text-tertiary">Mother of Clara (Age 4.5) &amp; Clinical Child Psychologist</div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-gutter relative">
        <div className="text-center mb-16">
          <span className="bg-primary-fixed/30 text-primary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">QUESTIONS &amp; CLARITY</span>
          <h2 className="font-display-lg text-headline-lg text-primary mt-3">Frequently Asked Questions</h2>
          <p className="font-body-lg text-body-md text-tertiary mt-2">Every detail of Sasha is designed with transparency and parent collaboration in mind.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-xl border border-white/60 overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-white/40 transition-colors focus:outline-none"
              >
                <span className="font-headline-md text-base md:text-lg text-primary font-bold">{faq.question}</span>
                <span className="material-symbols-outlined text-primary font-black transition-transform duration-300 transform" style={{ transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  expand_more
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeFaq === idx ? 'max-h-[300px] border-t border-white/50' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-white/30 font-body-md text-body-md text-tertiary leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Elegant Closing CTA */}
      <section className="py-24 bg-[#FAF5FF] relative text-center px-gutter overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[140%] aspect-square opacity-10 rounded-full bg-gradient-to-b from-primary to-secondary pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Begin Your Child's <br/> Extraordinary Learning Journey</h2>
          <p className="font-body-lg text-body-lg text-tertiary max-w-xl mx-auto mb-10">
            Priority admissions are rolling. Meet our world-class educators, experience our clean-air classrooms, and discover our pristine forest campus.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="primary-pill px-10 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg text-center inline-block">
              Schedule a Campus Visit
            </Link>
            <Link to="/programs" className="bg-white border-[1.5px] border-outline-variant/50 px-10 py-4 rounded-full text-primary font-bold text-lg transition-transform hover:scale-105 active:scale-95 text-center inline-block">
              Discover Our Learning Philosophy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
