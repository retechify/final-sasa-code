import React from 'react';
import { Link } from 'react-router-dom';

export default function Admissions() {
  const fees = [
    {
      program: 'Kindergarten',
      duration: 'Half Day (8:30 AM - 12:30 PM)',
      tuition: '$1,250 / month',
      materials: '$250 annual supply fee',
      meals: 'Included (Organic snacks & beverages)'
    },
    {
      program: 'Kindergarten',
      duration: 'Full Day (8:30 AM - 3:30 PM)',
      tuition: '$1,650 / month',
      materials: '$300 annual supply fee',
      meals: 'Included (Chef-cooked organic lunch & snacks)'
    },
    {
      program: 'Primary (Grades 1 - 2)',
      duration: 'Full Day (8:30 AM - 3:30 PM)',
      tuition: '$1,800 / month',
      materials: '$350 annual supply fee',
      meals: 'Included (Chef-cooked organic lunch & snacks)'
    },
    {
      program: 'Elementary (Grades 3 - 5)',
      duration: 'Full Day (8:30 AM - 3:30 PM)',
      tuition: '$1,950 / month',
      materials: '$400 annual supply fee',
      meals: 'Included (Chef-cooked organic lunch & snacks)'
    }
  ];

  const requirements = [
    {
      title: 'Online Expression of Interest',
      desc: 'Complete our primary digital interest form detailing your child\'s physical/emotional history and developmental journey.'
    },
    {
      title: 'Certified Birth Certificate',
      desc: 'Copy of official birth records indicating the child meets our age parameters by August 31st.'
    },
    {
      title: 'Pediatric Health & Immunization Records',
      desc: 'Up-to-date state immunization records signed by a certified California pediatric physician.'
    },
    {
      title: 'Parent Statement of Alignment',
      desc: 'A short 300-word statement outlining your family\'s educational philosophy, values, and alignment with the Montessori framework.'
    }
  ];

  return (
    <>
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto py-16 flex flex-col items-center text-center">
          {/* Decorative Doodles */}
          <span className="material-symbols-outlined absolute top-10 left-10 text-primary-fixed-dim text-6xl opacity-40 floating pointer-events-none" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
          <span className="material-symbols-outlined absolute top-20 right-20 text-secondary-fixed text-4xl opacity-50 sparkle-anim pointer-events-none">auto_awesome</span>
          <span className="material-symbols-outlined absolute bottom-10 left-1/4 text-primary opacity-30 floating pointer-events-none" style={{ animationDelay: '2s' }}>star</span>
          
          <div className="relative w-full max-w-2xl aspect-[4/3] mb-12">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary-fixed via-primary-fixed to-tertiary-fixed rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img 
              className="w-full h-full object-cover rounded-[5rem] shadow-2xl relative z-10 border-8 border-white/50" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIGT1TUUdUSxnfzuBvoaueoZDkMW4ZT5sSrN63DXqKHCNswB0WXPPdP1-BJ2EckADeaFr7OO13K7JjSJvB4jLT4vA5jAKbdV6tEWRo6gHZvJXSJxG5Hr8Ngfs8lRLHjLpuX6Vm-TjkoAA2YFV1FnpTHUysQawk69WynCA3SqP0LiTZexLBsHqxYf4lyUVGeGgzjEjak-FYYzVlwfnORqYoBP7FerxZqqBq-UZFBXCd_K4nKESodxwNnBSphs8HkJQkgsO6STLd93Kk" 
              alt="Portrait of a young child playing" 
            />
          </div>
          
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 max-w-3xl leading-tight">
            Begin Their Beautiful Learning Journey
          </h1>
          
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mb-10 leading-relaxed">
            We operate a highly consultative, low-stress admissions process. Our goal is to partner with families who value organic nature-based education, child-led exploration, and dedicated emotional scaffolding.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform text-center inline-block">
              Schedule Tour
            </Link>
            <a href="#tuition" className="bg-white border-2 border-primary/20 text-primary px-10 py-4 rounded-full font-bold hover:bg-surface transition-colors text-center inline-block">
              View Tuition Fees
            </a>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-24 bg-surface-container-low/50 relative overflow-hidden border-y border-white/50">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-20">
              <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">THE MILESTONES</span>
              <h2 className="font-display-lg text-headline-lg text-primary mt-3">Our Gentle Admissions Path</h2>
              <p className="font-body-md text-sm text-tertiary mt-2">Four simple steps designed to build mutual confidence and understanding.</p>
            </div>
            
            <div className="relative flex flex-col md:flex-row justify-between items-stretch gap-12">
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center flex-1 group glass-card p-6 rounded-xl bg-white/70">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform border border-primary-fixed relative mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-secondary-fixed rounded-full flex items-center justify-center font-bold text-primary text-xs">1</span>
                </div>
                <h3 className="font-headline-md text-base text-primary font-bold mb-3">1. Enquiry</h3>
                <p className="font-body-md text-xs text-tertiary leading-relaxed">Tell us about your little one via our digital inquiry portal. We will email our physical guidebook within 24 hours.</p>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center flex-1 group glass-card p-6 rounded-xl bg-white/70">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform border border-primary-fixed relative mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">map</span>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-secondary-fixed rounded-full flex items-center justify-center font-bold text-primary text-xs">2</span>
                </div>
                <h3 className="font-headline-md text-base text-primary font-bold mb-3">2. Campus Visit</h3>
                <p className="font-body-md text-xs text-tertiary leading-relaxed">Take a private tour on a Tuesday or Thursday morning. Experience our clean air classrooms and blooming outdoor forests.</p>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center flex-1 group glass-card p-6 rounded-xl bg-white/70">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform border border-primary-fixed relative mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">edit_document</span>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-secondary-fixed rounded-full flex items-center justify-center font-bold text-primary text-xs">3</span>
                </div>
                <h3 className="font-headline-md text-base text-primary font-bold mb-3">3. Enrollment Intake</h3>
                <p className="font-body-md text-xs text-tertiary leading-relaxed">Submit the pediatric records, intent statement, and application checklist. Children participate in a playful group meet.</p>
              </div>
              
              {/* Step 4 */}
              <div className="relative z-10 flex flex-col items-center text-center flex-1 group glass-card p-6 rounded-xl bg-white/70">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform border border-primary-fixed relative mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-secondary-fixed rounded-full flex items-center justify-center font-bold text-primary text-xs">4</span>
                </div>
                <h3 className="font-headline-md text-base text-primary font-bold mb-3">4. Welcome Home</h3>
                <p className="font-body-md text-xs text-tertiary leading-relaxed">Your family is offered a placement, receives our customized intake box, and meets the class guide before the fall term begins.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tuition & Investment Section */}
        <section id="tuition" className="py-24 max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">FINANCIAL OVERVIEW</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-3">Tuition &amp; Wellness Investment</h2>
            <p className="font-body-lg text-body-md text-tertiary max-w-2xl mx-auto mt-2">Our tuition covers comprehensive child care, high educator ratios, and premium organic wellness standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
            {fees.map((fee, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl border border-white/60 shadow-sm flex flex-col justify-between bg-white/60">
                <div>
                  <h3 className="font-headline-md text-lg text-primary font-bold mb-1">{fee.program}</h3>
                  <p className="text-xs font-mono text-secondary mb-4 uppercase tracking-wider font-semibold">{fee.duration}</p>
                  <div className="text-display-lg-mobile md:text-3xl font-black text-secondary mb-3">{fee.tuition}</div>
                  <p className="font-body-md text-xs text-tertiary leading-relaxed mb-4">{fee.materials}</p>
                </div>
                <div className="pt-4 border-t border-white/40">
                  <span className="text-xs font-semibold text-primary block uppercase tracking-widest mb-1">Nutrition:</span>
                  <p className="font-body-md text-xs text-tertiary">{fee.meals}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs font-mono text-tertiary max-w-2xl mx-auto leading-relaxed">
            * Note: A one-time non-refundable application evaluation fee of $150 applies to all prospective applicants. Sibling tuition discounts of 10% are applied automatically to secondary enrolled siblings.
          </p>
        </section>

        {/* Criteria & Resources Checklist */}
        <section className="py-24 bg-surface-container-low/50 border-t border-white/50">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Documentation Required */}
            <div>
              <h2 className="font-display-lg text-headline-lg text-primary mb-8">Required Enrollment Files</h2>
              <p className="font-body-lg text-body-md text-tertiary mb-8">Please gather and upload these documents through our secure portal during Step 3 of your enrollment cycle:</p>
              
              <div className="space-y-6">
                {requirements.map((req, idx) => (
                  <div key={idx} className="flex gap-5 items-start">
                    <div className="w-10 h-10 bg-primary-fixed text-primary rounded-full flex items-center justify-center shrink-0 font-mono font-bold text-sm shadow-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-headline-md text-base text-primary font-bold mb-1">{req.title}</h4>
                      <p className="font-body-md text-xs text-tertiary leading-relaxed">{req.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources Resources Panel */}
            <div className="purple-glass p-8 md:p-12 rounded-xl relative overflow-hidden bg-white/70 border border-white">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              <h2 className="font-display-lg text-headline-lg text-primary mb-4">Admissions Resources</h2>
              <p className="font-body-md text-sm text-tertiary mb-8 leading-relaxed">Download our detailed resource packets to understand our parent policies and school infrastructure regulations.</p>
              
              <div className="space-y-4">
                <a href="#" className="flex items-center justify-between p-4 bg-white/60 hover:bg-white/80 transition-colors rounded-lg group border border-white">
                  <span className="font-body-md text-sm text-primary font-bold">2024-25 Full Prospectus PDF</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">download</span>
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-white/60 hover:bg-white/80 transition-colors rounded-lg group border border-white">
                  <span className="font-body-md text-sm text-primary font-bold">Parent Community Handbook</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">menu_book</span>
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-white/60 hover:bg-white/80 transition-colors rounded-lg group border border-white">
                  <span className="font-body-md text-sm text-primary font-bold">Organic Nutrition Charter</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">restaurant</span>
                </a>
              </div>
              
              <div className="mt-8 p-6 border border-primary/20 rounded-lg bg-primary/5">
                <p className="text-xs font-bold text-primary mb-2 uppercase tracking-widest font-mono">Admissions Office Hours</p>
                <p className="font-body-md text-xs text-tertiary">Monday – Friday: 9:00 AM – 4:30 PM PST</p>
                <p className="font-body-md text-sm text-primary font-bold mt-2 font-mono">admissions@sashaschool.edu</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">COMMON QUESTIONS</span>
              <h2 className="font-display-lg text-headline-lg text-primary mt-3">Admissions Frequently Asked</h2>
            </div>
            
            <div className="space-y-4">
              <details className="group border border-outline-variant/30 rounded-lg overflow-hidden glass-card transition-all" open>
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none focus:outline-none">
                  <span className="font-headline-md text-base text-primary font-bold">When should we submit our intake folder?</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-6 pb-6 font-body-md text-sm text-tertiary leading-relaxed">
                  Priority admissions close on March 31st for the upcoming fall term. We review applications and conduct child classroom plays on a rolling basis. If seats are filled, applicants are placed on our prioritized waitlist.
                </div>
              </details>
              
              <details className="group border border-outline-variant/30 rounded-lg overflow-hidden glass-card transition-all">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none focus:outline-none">
                  <span className="font-headline-md text-base text-primary font-bold">What is your child-readiness evaluation?</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-6 pb-6 font-body-md text-sm text-tertiary leading-relaxed">
                  We do not execute academic testing. Our child plays evaluate social co-regulation capability, curiosity with wooden materials, and gross-motor movement safety, ensuring the school environment is a healthy, safe match for them.
                </div>
              </details>
              
              <details className="group border border-outline-variant/30 rounded-lg overflow-hidden glass-card transition-all">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none focus:outline-none">
                  <span className="font-headline-md text-base text-primary font-bold">Do you offer financial assistance packages?</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-6 pb-6 font-body-md text-sm text-tertiary leading-relaxed">
                  Yes, we allocate a specific percentage of our annual operational budget toward need-based financial assistances. Families can apply during Step 3 of the admissions process with absolute confidentiality.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Visit Our Campus Map Info */}
        <section className="relative h-[550px] w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-surface-dim z-0 overflow-hidden pointer-events-none">
            <img 
              className="w-full h-full object-cover opacity-20 grayscale contrast-125" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9cTSRjL1v_IbQCWG_gQbK3XS5OpklcVNdR46ze0yXtUKfEzlb5NuNJ9DmkFXYGDAjVyxx5Wr5bkYhqxfwQF-uu1WWwVqUq-Asgc5KhCJ9hJphmNL-tyfOrL3xUfFXtK59D22M50jxiVECkr-Qs3EH1Zql3pbKoFW164qTGC9vSBjpXsKbtctFHKQYCzIufwI7f7UeuOBFP_XJMu7EKHzwOM4m3Opkgt-p7UG3IuENDkCJPAdS1ir17o9wO5eyAIrXPdJ3omqFudvR" 
              alt="Map background representation" 
            />
          </div>
          <div className="relative z-10 glass-card p-10 md:p-14 rounded-[3rem] shadow-2xl max-w-2xl w-[90%] text-center bg-white/90">
            <h2 className="font-display-lg text-2xl text-primary mb-6 font-bold">Experience Sasha In Person</h2>
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex items-center gap-3 text-tertiary">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="font-body-md text-sm font-semibold">123 Ethereal Lane, Serenity Valley, CA 90210</span>
              </div>
              <div className="flex items-center gap-3 text-tertiary">
                <span className="material-symbols-outlined text-primary">call</span>
                <span className="font-body-md text-sm font-semibold">(555) 123-4567</span>
              </div>
            </div>
            <Link to="/contact" className="bg-primary text-white px-12 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20 inline-block">
              Schedule Private Visit
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-b from-white to-surface-container-low text-center px-margin-mobile">
          <div className="max-w-2xl mx-auto">
            <span className="material-symbols-outlined text-primary-fixed-dim text-5xl mb-4 sparkle-anim pointer-events-none">stars</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 font-bold">Ready to Join Our Family?</h2>
            <p className="font-body-lg text-body-md text-tertiary mb-10 leading-relaxed">Spaces are kept small to preserve our low educator-to-child ratios. Start your enrollment file or speak with our Registrar today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-primary to-primary-container text-white px-12 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
                Nurture Connection
              </Link>
              <Link to="/contact" className="bg-white border-2 border-outline-variant text-tertiary px-12 py-4 rounded-full font-bold hover:bg-surface-container transition-colors">
                Request a Callback
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
