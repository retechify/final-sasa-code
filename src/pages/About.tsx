import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="relative overflow-x-hidden">
      <section className="relative pt-40 pb-24 px-gutter overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-60">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] watercolor-wash rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-3xl"></div>
        </div>

        <span className="material-symbols-outlined floating-doodle absolute top-20 left-8 text-primary-fixed" style={{ fontSize: '40px' }}>auto_stories</span>
        <span className="material-symbols-outlined floating-doodle absolute top-40 right-12 text-secondary-fixed" style={{ fontSize: '36px', animationDelay: '1s' }}>favorite</span>
        <span className="material-symbols-outlined floating-doodle absolute bottom-20 left-1/3 text-tertiary-fixed" style={{ fontSize: '32px', animationDelay: '2s' }}>groups</span>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block">ABOUT SASHA</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
              There is more in <span className="text-secondary italic">LIFE than ACADEMICS</span>
            </h1>
            <p className="font-body-lg text-body-lg text-tertiary max-w-lg mb-8">
              Motivated by our deep commitment and extensive research in education, we establish this school exclusively for the sake of our cherished daughter. As fellow parents, we understand the profound impact a nurturing educational environment can have on a child. This school is founded by parents, for parents, with the shared goal of positively influencing the educational experience of every child entrusted to our care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-primary/20 transition-all text-center">
                Schedule a Campus Visit
              </Link>
              <Link to="/programs" className="border-2 border-outline-variant text-secondary px-8 py-4 rounded-full font-medium hover:bg-white/50 transition-all text-center">
                Explore Our Curricula
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="organic-cloud-shape overflow-hidden w-full aspect-square relative shadow-2xl z-20">
              <img 
                src="/hero%20image/hero%20image.png" 
                alt="SASHA School" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-fixed/40 rounded-full blur-2xl floating-anim -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-tertiary-fixed/30 rounded-full blur-2xl floating-anim -z-10" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest relative overflow-hidden border-y border-white/50">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="bg-secondary-fixed/30 text-secondary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">FOUNDERS</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mt-3">Our Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-xl text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-md">
                <img src="/gallery/erer.png" alt="Dr. Sashi Kumaar Samraj" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-2">Dr. Sashi Kumaar Samraj</h3>
              <p className="text-label-sm text-secondary uppercase tracking-widest font-semibold mb-4">Founder Chairman</p>
              <p className="font-body-md text-sm text-tertiary mb-6">
                Dr.Sashi Kumaar Samraj has two decades of educational experience in the capacity as Managing Trustee, Chairman and Mentor to CBSE, Montessori and Matric Schools. He holds Doctorate in Education, MBA & Edu Leadership Program from IIM, Kolkatta.
              </p>
              <div className="text-left space-y-2 text-sm text-tertiary">
                <p className="font-semibold text-primary">Founder Chairman</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>The Western Ghats International School, Coimbatore</li>
                  <li>Dora Montessori Schools, Coimbatore</li>
                  <li>SASHA School for Life, Coimbatore</li>
                </ul>
                <p className="font-semibold text-primary mt-4">Managing Trustee</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>SASHA Charitable Trust, Coimbatore</li>
                </ul>
                <p className="font-semibold text-primary mt-4">Managing Director</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Winfinity Educare Consultancy</li>
                </ul>
                <p className="font-semibold text-primary mt-4">President</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>EducationKnot, Coimbatore (Headquatered at Bangalore)</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-md">
                <img src="/gallery/56.png" alt="Smt. Hemalatha Sashi Kumaar" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-2">Smt. Hemalatha Sashi Kumaar</h3>
              <p className="text-label-sm text-secondary uppercase tracking-widest font-semibold mb-4">Founder Correspondent</p>
              <p className="font-body-md text-sm text-tertiary mb-6">
                Smt. Hemalatha Sashi Kumaar has 18 years of Academic and Administrative experience in the capacity as Correspondent and Trustee for CBSE, Montessori and Matric Schools, and 15 years of exclusive Montessori experience in the capacity as Montessori Directress.
              </p>
              <div className="text-left space-y-2 text-sm text-tertiary">
                <p className="font-semibold text-primary">Founder Correspondent</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>The Western Ghats International School, Coimbatore</li>
                  <li>Dora Montessori Schools, Coimbatore</li>
                  <li>SASHA School for Life, Coimbatore</li>
                </ul>
                <p className="font-semibold text-primary mt-4">Secretary</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>SASHA Charitable Trust</li>
                </ul>
                <p className="font-semibold text-primary mt-4">Centre Co-ordinator</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>International Montessori Teacher Training Institute (IMTTI), Bangalore</li>
                </ul>
                <p className="font-semibold text-primary mt-4">Curriculum Advisor</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Indian Airforce School, Sulur, Coimbatore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-gutter relative">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-xl relative">
            <span className="material-symbols-outlined text-primary text-5xl absolute -top-6 -left-4">format_quote</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary text-center mb-8">Message from the Management</h2>
            <div className="space-y-6 font-body-lg text-body-lg text-tertiary leading-relaxed">
              <p>Dear Parents,</p>
              <p>
                We wanted to share with you the heartfelt foundation upon which our institution stands. Motivated by our deep commitment and extensive research in education, we establish this school exclusively for the sake of our cherished daughter. As fellow parents, we understand the profound impact a nurturing educational environment can have on a child.
              </p>
              <p>
                We are excited to inform you that every aspect of your child's schooling journey here is crafted with the same care and dedication that we envisioned for our own daughter. This school is founded by parents, for parents, with the shared goal of positively influencing the educational experience of every child entrusted to our care.
              </p>
              <p>
                Let's partner in making your child's educational experience truly exceptional! We firmly focus to nurture our children not only for UNIVERSITY, but also for UNIVERSE.
              </p>
              <div className="pt-4">
                <p>Personal wishes,</p>
                <p className="font-bold text-primary">Dr. Sashi Kumaar Samraj</p>
                <p className="font-bold text-primary">Smt. Hemalatha Sashi Kumaar</p>
              </div>
            </div>
          </div>
        </div>
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
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8">Nurturing Children Not Only for UNIVERSITY, <br/>But Also for UNIVERSE</h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto mb-12">
              We firmly focus on nurturing your child's educational experience truly exceptional. Let's partner in making your child's educational journey remarkable!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block">
                Schedule a Campus Visit
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