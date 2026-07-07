import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
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

  const curricula = [
    {
      title: 'Montessori',
      link: '/programs',
      desc: 'Authentic Montessori at primary level with 5 areas: Exercises of Practical Life, Sensorial, Language, Logic and Culture.',
      img: 'https://www.simplypsychology.org/wp-content/uploads/Montessori-School.jpeg'
    },
    {
      title: 'IGCSE',
      link: '/programs',
      desc: 'International General Certificate of Secondary Education - a globally recognized curriculum.',
      img: 'https://kindlekids.sg/wp-content/uploads/2022/09/classmates-holding-folders-1024x683.jpg'
    },
    {
      title: 'Waldorf Education',
      link: '/programs',
      desc: 'Holistic approach nurturing Head (Thinking), Heart (Feeling) and Hands (Doing) - Body, Mind and Spirit.',
      img: 'https://cdn.cdnparenting.com/articles/2020/03/28235256/1466938811-1024x700.webp'
    },
    {
      title: 'Reggio Emilio',
      link: '/programs',
      desc: 'Creative expression through art, music and imaginative play with the Atelier corner fostering creativity.',
      img: 'https://www.weareteachers.com/wp-content/uploads/reggio-emilia-2-800x533.jpeg'
    }
  ];

  const activities = [
    'Yoga', 'Karate', 'Silambam', 'Skating', 'Dance', 'Brain Gym'
  ];

  const features = [
    { value: '18+', label: 'Years of Educational Experience', desc: 'Direct management by trained Montessori Directress with decades of expertise.' },
    { value: '4', label: 'World-Class Curricula', desc: 'Montessori, IGCSE, Waldorf and Reggio Emilio blended for whole child development.' },
    { value: '1:', label: 'Low Educator Ratio', desc: 'Personalized attention ensuring every child thrives at their own pace.' },
    { value: '100%', label: 'Life Skills Focus', desc: 'UNESCO endorsed 4C\'s of 21st century skills - Communication, Collaboration, Critical Thinking, Creativity.' }
  ];

  const faqs = [
    {
      question: "What curricula does SASHA School offer?",
      answer: "SASHA School offers a unique blend of the world's finest curricula: Montessori, IGCSE, Waldorf Education and Reggio Emilio. This carefully crafted approach systematically imparts the UNESCO endorsed 4C's of 21st century life skills, ensuring whole child development."
    },
    {
      question: "What age groups do you accept?",
      answer: "We welcome children from Toddler Pre-KG to Grade V. Our stress-free Montessori learning classrooms follow the philosophy of Dr. Maria Montessori to CELEBRATE LEARNING where children can 'learn to explore' and 'explore to learn'."
    },
    {
      question: "What extra-curricular activities are available?",
      answer: "We offer a wide range of extra-curricular activities including Yoga, Karate, Silambam (traditional stick martial art), Skating, Dance, and Brain Gym to ensure holistic physical and mental development."
    },
    {
      question: "What makes SASHA School different?",
      answer: "We are one of the pioneers in implementing authentic Montessori at primary level in South India. Our exclusive Life Skills and Leadership Programme, direct management by a trained Montessori Directress, and a battalion of professionals supporting the school system make us unique."
    }
  ];

  return (
    <main className="relative pt-32 overflow-x-hidden">
      <div className="watercolor-gradient absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"></div>
      <div className="watercolor-gradient absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"></div>
      
      <section className="relative max-w-7xl mx-auto px-gutter py-12 md:py-20 flex flex-col items-center text-center overflow-visible">
        <span className="material-symbols-outlined doodle-element absolute top-10 left-10 text-primary-fixed" style={{ fontSize: '48px' }}>star_rate</span>
        <span className="material-symbols-outlined doodle-element absolute bottom-20 right-20 text-secondary-fixed" style={{ fontSize: '64px' }}>flight_takeoff</span>
        <span className="material-symbols-outlined doodle-element absolute top-1/4 right-10 text-tertiary-fixed" style={{ fontSize: '32px' }}>auto_awesome</span>
        <span className="material-symbols-outlined floating-doodle absolute bottom-40 left-5 text-primary-container" style={{ fontSize: '40px', animationDelay: '0.5s' }}>auto_stories</span>
        <span className="material-symbols-outlined floating-doodle absolute top-1/3 left-1/3 text-secondary-fixed-dim" style={{ fontSize: '36px', animationDelay: '1.5s' }}>psychology</span>
        <span className="material-symbols-outlined floating-doodle absolute bottom-10 right-1/4 text-tertiary-fixed" style={{ fontSize: '28px', animationDelay: '2.5s' }}>spa</span>
        
        <div className="relative w-full max-w-4xl mb-12">
          <div className="hero-rainbow absolute -top-12 left-1/2 -translate-x-1/2 w-[120%] aspect-square opacity-20 rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 mx-auto w-80 h-80 md:w-[560px] md:h-[560px] rounded-full overflow-hidden border-8 border-white shadow-2xl hero-float">
            <img 
              className="w-full h-full object-cover" 
              src="/hero%20image/hero%20image.png" 
              alt="SASHA School"
            />
          </div>
        </div>
        
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-3xl mb-6 leading-tight">
          Premium Primary School for <span className="lavender-text-gradient">Progressive Parents</span>
        </h1>
        
        <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mb-6">
          Admission Open - Toddler Pre-KG to Grade V
        </p>

        <p className="font-headline-md text-headline-md text-secondary mb-10">
          For Happy Schooling
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="primary-pill px-10 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg text-center inline-block">
            Contact Us
          </Link>
          <Link to="/about" className="bg-white border-[1.5px] border-outline-variant/50 px-10 py-4 rounded-full text-primary font-bold text-lg transition-transform hover:scale-105 active:scale-95 text-center inline-block">
            +91 97501 70007
          </Link>
        </div>
      </section>

      <section className="py-16 bg-surface-container-lowest/80 backdrop-blur-md border-y border-white/50 relative">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-12">
            <span className="bg-primary-fixed/30 text-primary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">ABOUT SASHA</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-3">"There is more in LIFE than ACADEMICS, but we are good at that too"</h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-body-lg text-body-lg text-tertiary leading-relaxed mb-8">
              Embark on an educational journey where success goes beyond exams, preparing children for the grander challenge – LIFE itself. To nurture essential life skills, we have seamlessly blended the world's finest curricula: IGCSE, Montessori, Waldorf and Reggio Emilio. This carefully crafted approach systematically imparts the UNESCO endorsed 4C's of 21st century life skills, ensuring WHOLE CHILD development.
            </p>
            <Link to="/about" className="bg-primary text-on-primary px-8 py-3 rounded-full font-medium shadow-md hover:scale-105 transition-transform inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter py-20 relative">
        <div className="text-center mb-16">
          <span className="bg-secondary-fixed/30 text-secondary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">OUR CURRICULA</span>
          <h2 className="font-display-lg text-headline-lg text-primary mt-3">World-Class Educational Approaches</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {curricula.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-lg flex flex-col gap-4 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-full h-40 rounded-lg overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">{item.title}</h3>
              <p className="font-body-md text-body-md text-tertiary">{item.desc}</p>
              <Link to={item.link} className="text-primary font-bold text-sm mt-auto">Learn More →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="bg-tertiary-fixed/30 text-tertiary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">EXTRA-CURRICULAR ACTIVITIES</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-3">Beyond the Classroom</h2>
            <p className="font-body-lg text-body-md text-tertiary max-w-xl mx-auto mt-4">A gamut of curated co-curricular activities for holistic development.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {activities.map((activity, idx) => (
              <div key={idx} className="glass-card p-6 rounded-lg text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">stars</span>
                </div>
                <h3 className="font-headline-md text-base text-primary font-bold">{activity}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FAF5FF] relative text-center px-gutter overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[140%] aspect-square opacity-10 rounded-full bg-gradient-to-b from-primary to-secondary pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="bg-primary-fixed/30 text-primary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider inline-block mb-4">HAPPY SCHOOLING!</span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Leaders Groomed for Life – <br/>Our Promise to Parents!</h2>
          <p className="font-body-lg text-body-lg text-tertiary max-w-xl mx-auto mb-10">
            One of the Pioneers in implementing authentic Montessori at primary level in South India. Exclusive Life Skills and Leadership Programme with a school system supported by a battalion of professionals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="primary-pill px-10 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg text-center inline-block">
              Schedule a Campus Visit
            </Link>
            <Link to="/programs" className="bg-white border-[1.5px] border-outline-variant/50 px-10 py-4 rounded-full text-primary font-bold text-lg transition-transform hover:scale-105 active:scale-95 text-center inline-block">
              Explore Our Curricula
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}