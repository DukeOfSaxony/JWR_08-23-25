import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import storefrontMain from '@assets/storefront_1759411309106.jpg';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-[#013823]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#8c6f25] mb-6 slide-from-left uppercase">
              About Brooklyn Watch & Jewelry Repair
            </h2>
            
            <p className="font-body text-white mb-6 slide-from-left stagger-delay-1">
              For nearly a decade, Brooklyn Watch & Jewelry Repair has been the trusted destination for expert watch and jewelry care in Carroll Gardens, Cobble Hill, Boerum Hill, Gowanus, and Park Slope. From delicate engagement rings to mechanical luxury watches, we treat every piece with the precision and respect it deserves.
            </p>

            <h3 className="font-heading font-semibold text-2xl text-[#8c6f25] mb-4 slide-from-left stagger-delay-2 uppercase">
              Our Journey
            </h3>
            
            <p className="font-body text-white mb-6 slide-from-left stagger-delay-3">
              Founded 8 years ago with a passion for craftsmanship and a love for preserving memories, our shop has grown through word-of-mouth and dedicated service. What began with simple repairs has evolved into full-scale restoration, custom work, battery replacements, cleaning, polishing, movement overhauls, and more.
            </p>

            <h3 className="font-heading font-semibold text-2xl text-[#8c6f25] mb-4 slide-from-left stagger-delay-4 uppercase">
              What Sets Us Apart
            </h3>
            
            <ul className="space-y-4 mb-6 slide-from-left stagger-delay-5">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#8c6f25] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p className="font-body text-white">
                  <strong className="text-[#8c6f25]">Master-level expertise</strong> — our technicians combine traditional horology techniques with modern tools to bring even the most challenging pieces back to life.
                </p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#8c6f25] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p className="font-body text-white">
                  <strong className="text-[#8c6f25]">Personal touch & integrity</strong> — we believe that jewelry and watches aren't just things — they hold stories, sentiment, and value. You'll always hear honest assessments, clear explanations, and no surprises.
                </p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#8c6f25] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p className="font-body text-white">
                  <strong className="text-[#8c6f25]">Attention to detail</strong> — every job — from a simple clasp fix to a full restoration — is handled with care, using high-quality parts and materials.
                </p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#8c6f25] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p className="font-body text-white">
                  <strong className="text-[#8c6f25]">Local & reliable</strong> — serving Carroll Gardens, Cobble Hill, Boerum Hill, Gowanus, and Park Slope, we pride ourselves on prompt turnaround times and the trust of our Brooklyn neighbors.
                </p>
              </li>
            </ul>

            <h3 className="font-heading font-semibold text-2xl text-[#8c6f25] mb-4 slide-from-left stagger-delay-6 uppercase">
              Our Promise to You
            </h3>
            
            <p className="font-body text-white slide-from-left stagger-delay-7">
              When you bring us your watch or jewelry, you're entrusting us with more than a piece — you're entrusting us with history, emotional value, and precision. We promise to treat it as such, to deliver transparent service, and to walk you through each step from diagnosis to return.
            </p>
          </div>
          
          <div className="lg:w-1/2 slide-from-right">
            <img 
              src={storefrontMain} 
              alt="Brooklyn Watch & Jewelry Repair Storefront" 
              className="rounded-lg shadow-lg w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
