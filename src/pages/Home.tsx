import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const curricula = [
    {
      title: 'Montessori',
      link: '/programs',
      desc: 'Authentic Montessori at primary level with 5 areas: Exercises of Practical Life, Sensorial, Language, Logic and Culture.',
      img: '/curiculat images/c 1.jpeg',
      accent: 'from-[#E9DDFF] to-[#F5F3FF]',
      icon: 'psychology',
      tag: 'Child-Centered'
    },
    {
      title: 'IGCSE',
      link: '/programs',
      desc: 'International General Certificate of Secondary Education - a globally recognized curriculum.',
      img: '/curiculat images/c 2.jpeg',
      accent: 'from-[#FEF9C3] to-[#FEFCE8]',
      icon: 'school',
      tag: 'Global Standard'
    },
    {
      title: 'Waldorf Education',
      link: '/programs',
      desc: 'Holistic approach nurturing Head (Thinking), Heart (Feeling) and Hands (Doing) - Body, Mind and Spirit.',
      img: '/curiculat images/c3.jpeg',
      accent: 'from-[#D3E5F6] to-[#F0F7FF]',
      icon: 'filter_drama',
      tag: 'Holistic'
    },
    {
      title: 'Reggio Emilia',
      link: '/programs',
      desc: 'Creative expression through art, music and imaginative play with the Atelier corner fostering creativity.',
      img: '/curiculat images/c4.jpeg',
      accent: 'from-[#FFD8ED] to-[#FFF5FA]',
      icon: 'palette',
      tag: 'Creative'
    }
  ];

  const activities = [
    { name: 'Yoga', icon: 'self_improvement', desc: 'Building mindfulness, balance, and inner calm through age-appropriate practice.', accent: 'from-[#E9DDFF] to-[#F5F3FF]', img: '/images/IMG-20260620-WA0044.jpg.jpeg' },
    { name: 'Karate', icon: 'sports_kabaddi', desc: 'Developing discipline, focus, and physical strength through martial arts.', accent: 'from-[#FEF9C3] to-[#FEFCE8]', img: '/images/IMG-20260620-WA0045.jpg.jpeg' },
    { name: 'Silambam', icon: 'sports_martial_arts', desc: 'Traditional stick martial art fostering coordination and cultural roots.', accent: 'from-[#D3E5F6] to-[#F0F7FF]', img: '/images/IMG-20260620-WA0043.jpg.jpeg' },
    { name: 'Skating', icon: 'downhill_skiing', desc: 'Nurturing confidence and motor skills through fun physical movement.', accent: 'from-[#FFD8ED] to-[#FFF5FA]', img: '/images/IMG-20260620-WA0042.jpg.jpeg' },
    { name: 'Dance', icon: 'music_note', desc: 'Rhythmic expression that builds creativity and social connection.', accent: 'from-[#D1FAE5] to-[#ECFDF5]', img: '/images/IMG-20260620-WA0041.jpg.jpeg' },
    { name: 'Brain Gym', icon: 'psychology', desc: 'Whole-brain exercises enhancing focus, memory and learning readiness.', accent: 'from-[#FEF9C3] to-[#FEFCE8]', img: '/images/IMG-20260620-WA0040.jpg.jpeg' }
  ];

  const features = [
    { value: '18+', label: 'Years of Experience', desc: 'Direct management by trained Montessori Directress with decades of expertise.', icon: 'psychology', accent: 'from-[#E9DDFF] to-[#F5F3FF]' },
    { value: '4', label: 'World-Class Curricula', desc: 'Montessori, IGCSE, Waldorf and Reggio Emilia blended for whole child development.', icon: 'auto_fix_high', accent: 'from-[#FEF9C3] to-[#FEFCE8]' },
    { value: '1:10', label: 'Low Educator Ratio', desc: 'Personalized attention ensuring every child thrives at their own pace.', icon: 'health_and_safety', accent: 'from-[#D3E5F6] to-[#F0F7FF]' },
    { value: '100%', label: 'Life Skills Focus', desc: "UNESCO endorsed 4C's of 21st century skills - Communication, Collaboration, Critical Thinking, Creativity.", icon: 'forest', accent: 'from-[#D1FAE5] to-[#ECFDF5]' }
  ];

  const faqs = [
    {
      question: "What curricula does SASHA School offer?",
      answer: "SASHA School offers a unique blend of the world's finest curricula: Montessori, IGCSE, Waldorf Education and Reggio Emilia. This carefully crafted approach systematically imparts the UNESCO endorsed 4C's of 21st century life skills, ensuring whole child development."
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
      {/* â•â•â•â•â•â•â•â•â•â•â• BACKGROUND WASHES â•â•â•â•â•â•â•â•â•â•â• */}
      <div className="watercolor-gradient absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="watercolor-gradient absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#FEF9C3]/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* â•â•â•â•â•â•â•â•â•â•â• HERO SECTION â€” SPLIT LAYOUT â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="relative max-w-7xl mx-auto px-gutter py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left â€” Content */}
          <div className="relative z-10 order-2 lg:order-1">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block uppercase tracking-wider">ABOUT SASHA</span>
            
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-2xl mb-6 leading-tight text-primary">
              There is More in <span className="text-[#EAB308]">LIFE</span> than Academics
            </h1>
            
            <p className="font-body-lg text-body-lg text-tertiary max-w-lg mb-3 leading-relaxed">
              Premium Primary School for Progressive Parents
            </p>

            <p className="font-headline-md text-headline-md text-secondary mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#EAB308] text-lg">school</span>
              Admission Open â€” Toddler Pre-KG to Grade V
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact" className="primary-pill px-10 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg text-center inline-block">
                Book a Campus Visit
              </Link>
            </div>

            {/* Quick Stats Row */}
            <div className="flex gap-8 pt-8 border-t border-[#FEF08A]/40">
              <div className="text-center">
                <span className="font-display-lg text-3xl font-bold text-primary">18+</span>
                <p className="text-xs text-tertiary font-medium mt-1">Years Exp.</p>
              </div>
              <div className="text-center">
                <span className="font-display-lg text-3xl font-bold text-[#EAB308]">4</span>
                <p className="text-xs text-tertiary font-medium mt-1">Curricula</p>
              </div>
              <div className="text-center">
                <span className="font-display-lg text-3xl font-bold text-secondary">1:10</span>
                <p className="text-xs text-tertiary font-medium mt-1">Edu. Ratio</p>
              </div>
              <div className="text-center">
                <span className="font-display-lg text-3xl font-bold text-primary">4C's</span>
                <p className="text-xs text-tertiary font-medium mt-1">Life Skills</p>
              </div>
            </div>
          </div>

          {/* Right â€” Hero Image Composition */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Main Hero Circle */}
              <div className="relative z-10 w-72 h-96 md:w-[480px] md:h-[580px] lg:w-[540px] lg:h-[620px] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl hero-float">
                <img 
                  className="w-full h-full object-cover" 
                  src="/hero%20image/hero%20image.png" 
                  alt="SASHA School Happy Kids"
                />
              </div>

              {/* Overlapping Dora Logo */}
              <div className="absolute bottom-2 -right-2 md:bottom-4 md:-right-4 lg:bottom-6 lg:-right-6 z-20 w-24 h-24 md:w-40 md:h-40 rounded-full bg-white border-4 md:border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <img 
                  src="/dora logo/dora.jpeg" 
                  alt="Dora Montessori School" 
                  className="w-full h-full object-contain p-1.5"
                />
              </div>

              {/* Floating Doodle Accent */}
              <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 z-20 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] rounded-full border-4 md:border-8 border-white flex items-center justify-center shadow-xl doodle-float-1 rotate-[-15deg] group hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-[#0284C7] text-5xl md:text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>toys</span>
              </div>

              {/* Golden Accent Badge */}
              <div className="absolute top-1/3 -right-6 md:-right-10 z-20 w-14 h-14 md:w-20 md:h-20 bg-[#FEF9C3]/80 backdrop-blur-sm rounded-2xl border-4 border-[#FEF08A]/40 flex items-center justify-center shadow-lg doodle-float-2">
                <span className="material-symbols-outlined text-[#EAB308] text-2xl md:text-3xl">auto_awesome</span>
              </div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-br from-primary-fixed/20 via-[#FEF9C3]/10 to-secondary-fixed/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â• ABOUT SASHA â€” EDITORIAL SPLIT â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-24 bg-[#FEFCE8]/25 border-y border-[#FEF08A]/20 relative overflow-hidden">
        <div className="absolute -bottom-20 left-10 w-64 h-64 bg-[#FEF08A]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-gutter relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-72 h-56 md:w-[440px] md:h-[300px] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl z-10 relative">
                  <img src="/campus life/2.jpeg" alt="SASHA Campus" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                {/* Accent */}
                <div className="absolute -bottom-5 -right-5 w-28 h-28 md:w-40 md:h-40 bg-gradient-to-br from-[#E9DDFF] to-[#F5F3FF] rounded-[2rem] border border-white/60 shadow-lg z-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl md:text-5xl opacity-20">format_quote</span>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-fixed/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider inline-block">ABOUT SASHA</span>
              <h2 className="font-display-lg text-headline-lg md:text-display-lg-mobile text-primary leading-tight">
                "There is More in <span className="text-[#EAB308]">LIFE</span> than Academics"
              </h2>
              <p className="font-body-lg text-body-lg text-tertiary leading-relaxed">
                Embark on an educational journey where success goes beyond exams, preparing children for the grander challenge â€“ LIFE itself. To nurture essential life skills, we have seamlessly blended the world's finest curricula: IGCSE, Montessori, Waldorf and Reggio Emilia.
              </p>
              <p className="font-body-md text-sm text-tertiary leading-relaxed">
                This carefully crafted approach systematically imparts the UNESCO endorsed 4C's of 21st century life skills, ensuring WHOLE CHILD development.
              </p>
              <Link to="/about" className="primary-pill px-8 py-3.5 rounded-full text-white font-bold transition-transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
                Learn Our Philosophy
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â• CURRICULA â€” EDITORIAL CARDS â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-24 bg-surface-container-low/30 border-y border-white/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-fixed/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-gutter relative z-10">
          <div className="text-center mb-16">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">OUR CURRICULA</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-4">World-Class Educational <span className="text-[#EAB308]">Approaches</span></h2>
            <p className="font-body-lg text-tertiary max-w-2xl mx-auto mt-4">A balanced mix of international methodologies tailored for child growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curricula.map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${item.accent} rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/50 relative`}>
                {/* Image */}
                <div className="w-full h-56 md:h-64 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  {/* Tag */}
                  <span className="absolute top-4 left-4 golden-badge px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">{item.tag}</span>
                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-8">
                  <h3 className="font-display-lg text-xl md:text-2xl text-primary font-bold mb-3">{item.title}</h3>
                  <p className="font-body-md text-sm text-tertiary leading-relaxed mb-5">{item.desc}</p>
                  <Link to={item.link} className="text-primary font-bold text-sm flex items-center gap-1.5 group-hover:gap-3 transition-all">
                    Learn Details 
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â• KEY PILLARS â€” BENTO GRID â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="max-w-7xl mx-auto px-gutter py-24 relative">
        <div className="text-center mb-16">
          <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">Key Pillars</span>
          <h2 className="font-display-lg text-headline-lg text-primary mt-4">Nurtured For the <span className="text-[#EAB308]">Universe</span></h2>
          <p className="font-body-lg text-tertiary max-w-xl mx-auto mt-4">The foundation that makes SASHA an extraordinary place to grow.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${feat.accent} rounded-[2rem] p-8 flex flex-col gap-5 group hover:-translate-y-2 transition-all duration-300 border border-white/60 shadow-lg hover:shadow-xl relative overflow-hidden ${idx % 2 !== 0 ? 'lg:mt-8' : ''}`}>
              {/* Watermark */}
              <div className="absolute -bottom-6 -right-6 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity pointer-events-none">
                <span className="material-symbols-outlined text-[100px]">{feat.icon}</span>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white/70 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">{feat.icon}</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-display-lg text-4xl font-bold text-primary">{feat.value}</span>
              </div>
              <h3 className="font-headline-md text-lg text-primary font-bold -mt-2">{feat.label}</h3>
              <p className="font-body-md text-sm text-tertiary leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â• BEYOND THE CLASSROOM â€” PREMIUM EDITORIAL â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-24 bg-gradient-to-b from-[#F5F3FF]/40 via-white/20 to-[#FEFCE8]/30 border-y border-white/30 relative overflow-hidden">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-primary-fixed/8 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FEF9C3]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-gutter relative z-10">
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16">
            <div>
              <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider inline-block mb-4">BEYOND THE CLASSROOM</span>
              <h2 className="font-display-lg text-headline-lg md:text-display-lg-mobile text-primary leading-tight">
                A Gamut of <span className="text-[#EAB308]">Co-Curricular</span> Activities
              </h2>
              <p className="font-body-lg text-tertiary mt-4 max-w-lg leading-relaxed">
                We cultivate multiple intelligences through customized movement, arts, and mindful practices â€” preparing confident, well-rounded individuals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-end">
              <Link to="/campus-life" className="primary-pill px-8 py-4 rounded-full text-white font-bold text-base transition-transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
                Explore Campus Life
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link to="/programs" className="golden-pill px-8 py-4 rounded-full font-bold text-base transition-transform hover:scale-105 inline-flex items-center gap-2">
                Our Programs
              </Link>
            </div>
          </div>

          {/* Activity Cards â€” 3Ã—2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${activity.accent} rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-white/50 shadow-lg hover:shadow-2xl relative`}>
                {/* Image */}
                <div className="w-full h-44 overflow-hidden relative">
                  <img src={activity.img} alt={activity.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  {/* Icon Badge */}
                  <div className="absolute bottom-3 right-3 w-11 h-11 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{activity.icon}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display-lg text-lg text-primary font-bold mb-2">{activity.name}</h3>
                  <p className="font-body-md text-xs text-tertiary leading-relaxed">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom quote strip */}
          <div className="mt-12 golden-glass-card rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#FACC15] to-[#D97706] rounded-2xl flex items-center justify-center shadow-lg shrink-0">
              <span className="material-symbols-outlined text-white text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_objects</span>
            </div>
            <div className="text-center md:text-left">
              <p className="font-headline-md text-base md:text-lg text-primary font-bold mb-1">"There is more in LIFE than ACADEMICS, but we are good at that too."</p>
              <p className="font-body-md text-xs text-tertiary">Every activity is designed to nurture UNESCO's 4C's â€” Communication, Collaboration, Critical Thinking & Creativity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â• GALLERY PREVIEW â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-24 bg-[#FEFCE8]/15 border-y border-[#FEF08A]/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-fixed/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-gutter relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider inline-block mb-4">GALLERY</span>
              <h2 className="font-display-lg text-headline-lg text-primary leading-tight">Life at <span className="text-[#EAB308]">SASHA</span> School</h2>
              <p className="font-body-md text-sm text-tertiary mt-2 max-w-md">A glimpse into joyful learning, outdoor discovery, and creative expression.</p>
            </div>
            <Link to="/gallery" className="golden-pill px-8 py-3.5 rounded-full font-bold transition-transform hover:scale-105 inline-flex items-center gap-2 shrink-0">
              View Full Gallery
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/IMG-20260620-WA0040.jpg.jpeg', alt: 'Joyful Student' },
              { src: '/images/IMG-20260620-WA0056.jpg.jpeg', alt: 'Watering Plants' },
              { src: '/images/IMG-20260620-WA0022.jpg.jpeg', alt: 'Sensorial Play' },
              { src: '/images/IMG-20260620-WA0062.jpg.jpeg', alt: 'Campus Event' },
              { src: '/images/IMG-20260620-WA0035.jpg.jpeg', alt: 'Montessori Letters' },
              { src: '/images/IMG-20260620-WA0051.jpg.jpeg', alt: 'Playground Fun' },
              { src: '/images/IMG-20260205-WA0022.jpg.jpeg', alt: 'Active Play' },
              { src: '/images/IMG-20260620-WA0053.jpg.jpeg', alt: 'Celebration' },
            ].map((img, idx) => (
              <Link 
                to="/gallery" 
                key={idx} 
                className={`rounded-[1.5rem] overflow-hidden group cursor-pointer relative shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${idx === 0 || idx === 7 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <div className={`${idx === 0 || idx === 7 ? 'h-64 md:h-full' : 'h-48 md:h-52'} w-full`}>
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
                  <span className="text-white font-bold text-sm drop-shadow-lg">{img.alt}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â• TESTIMONIALS â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-secondary-fixed/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-tertiary-fixed/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-gutter relative z-10">
          <div className="text-center mb-16">
            <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider inline-block mb-4">PARENT VOICES</span>
            <h2 className="font-display-lg text-headline-lg text-primary leading-tight">
              Trusted by Families in <span className="text-[#EAB308]">Coimbatore</span>
            </h2>
            <p className="font-body-md text-sm text-tertiary mt-4 max-w-xl mx-auto">Hear from our local community about their children's transformative journey at SASHA School.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="glass-card p-8 rounded-[2rem] relative group hover:-translate-y-2 transition-all duration-300">
              <span className="material-symbols-outlined absolute -top-4 -left-4 text-6xl text-[#FEF9C3] opacity-80 z-0 rotate-180" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <div className="relative z-10">
                <div className="flex text-[#EAB308] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body-lg text-sm text-tertiary italic mb-6 leading-relaxed">
                  "Finding an authentic Montessori environment in Coimbatore was a challenge until we found SASHA. The dedication of the teachers and the serene campus have done wonders for my daughter's confidence."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E9DDFF] to-[#F5F3FF] flex items-center justify-center text-primary font-bold text-lg shrink-0">
                    S
                  </div>
                  <div>
                    <h4 className="font-headline-md text-sm text-primary font-bold">Saravanan M.</h4>
                    <p className="font-body-md text-xs text-tertiary">Parent of Grade II Student</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="golden-glass-card p-8 rounded-[2rem] relative group hover:-translate-y-2 transition-all duration-300 md:-translate-y-4 shadow-xl">
              <span className="material-symbols-outlined absolute -top-4 -left-4 text-6xl text-white/40 opacity-80 z-0 rotate-180" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <div className="relative z-10">
                <div className="flex text-[#EAB308] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body-lg text-sm text-tertiary italic mb-6 leading-relaxed">
                  "The blend of Waldorf and IGCSE is unique. My son looks forward to the Brain Gym sessions every morning. SASHA truly focuses on the holistic development of the child, preparing them for life."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                    P
                  </div>
                  <div>
                    <h4 className="font-headline-md text-sm text-primary font-bold">Priya R.</h4>
                    <p className="font-body-md text-xs text-tertiary">Parent of Grade IV Student</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="glass-card p-8 rounded-[2rem] relative group hover:-translate-y-2 transition-all duration-300">
              <span className="material-symbols-outlined absolute -top-4 -left-4 text-6xl text-[#FEF9C3] opacity-80 z-0 rotate-180" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <div className="relative z-10">
                <div className="flex text-[#EAB308] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body-lg text-sm text-tertiary italic mb-6 leading-relaxed">
                  "We moved to Coimbatore recently and SASHA made the transition so smooth for our little one. The outdoor play areas and the focus on nature are absolutely brilliant. Highly recommended!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D1FAE5] to-[#ECFDF5] flex items-center justify-center text-[#059669] font-bold text-lg shrink-0">
                    K
                  </div>
                  <div>
                    <h4 className="font-headline-md text-sm text-primary font-bold">Karthikeyan & Deepa</h4>
                    <p className="font-body-md text-xs text-tertiary">Parents of UKG Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â• FAQ â€” EDITORIAL ACCORDION â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-24 bg-[#FEFCE8]/20 border-y border-[#FEF08A]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-fixed/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-gutter relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: Header */}
            <div className="lg:col-span-2 lg:sticky lg:top-32">
              <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider inline-block mb-4">FAQ</span>
              <h2 className="font-display-lg text-headline-lg text-primary leading-tight">Frequently Asked <span className="text-[#EAB308]">Questions</span></h2>
              <p className="font-body-md text-sm text-tertiary mt-4 leading-relaxed">Everything parents need to know about SASHA School.</p>
              <Link to="/contact" className="primary-pill px-6 py-3 rounded-full text-white font-bold text-sm transition-transform hover:scale-105 shadow-lg mt-6 inline-flex items-center gap-2">
                Still have questions?
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Right: Accordion */}
            <div className="lg:col-span-3 space-y-4">
              {faqs.map((faq, idx) => {
                const accents = ['from-[#E9DDFF] to-[#F5F3FF]', 'from-[#FEF9C3] to-[#FEFCE8]', 'from-[#D3E5F6] to-[#F0F7FF]', 'from-[#FFD8ED] to-[#FFF5FA]'];
                return (
                  <div key={idx} className={`rounded-2xl overflow-hidden transition-all duration-300 border border-white/50 shadow-sm hover:shadow-md ${activeFaq === idx ? `bg-gradient-to-br ${accents[idx]}` : 'bg-white/60'}`}>
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-white/30 transition-colors"
                    >
                      <span className="font-headline-md text-base md:text-lg text-primary font-bold flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${activeFaq === idx ? 'bg-[#FACC15] text-white' : 'bg-[#FEF9C3] text-[#854D0E]'} transition-colors shadow-sm`}>
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        {faq.question}
                      </span>
                      <span className={`material-symbols-outlined text-[#EAB308] transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}>
                        keyboard_arrow_down
                      </span>
                    </button>
                    <div 
                      className={`transition-all duration-300 ease-in-out ${
                        activeFaq === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      <p className="px-6 pb-6 pt-0 font-body-md text-sm text-tertiary leading-relaxed ml-11">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â• CLOSING CTA â€” GRADIENT BANNER â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-24 px-gutter relative overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#8B5CF6] to-[#C4B5FD] p-12 lg:p-24 relative overflow-hidden text-center text-white shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-8 left-8 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider inline-block mb-6 backdrop-blur-sm">HAPPY SCHOOLING!</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 leading-tight">
              Leaders Groomed for Life â€“ <br/>Our Promise to <span className="text-[#FEF08A]">Parents!</span>
            </h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto mb-12 leading-relaxed">
              One of the Pioneers in implementing authentic Montessori at primary level in South India. Exclusive Life Skills and Leadership Programme with a school system supported by a battalion of professionals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block text-lg">
                Schedule a Campus Visit
              </Link>
              <Link to="/programs" className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all inline-block text-lg backdrop-blur-sm">
                Explore Our Curricula
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
