import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-[#013823]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#8c6f25] mb-6 slide-from-left uppercase">
              Master Craftsmanship in Time
            </h2>
            <p className="font-body text-white mb-6 slide-from-left stagger-delay-1">
              For over 35 years, Brooklyn Timepiece & Jewelry Repair has been the trusted guardian of precious timepieces and treasured jewelry in Carroll Gardens. 
              Our master craftsmen combine traditional horological techniques with modern precision tools to restore, repair, and maintain your most valued pieces.
            </p>
            <p className="font-body text-white mb-6 slide-from-left stagger-delay-2">
              What sets us apart is our unwavering dedication to precision and authenticity. Whether it's a vintage Rolex, 
              a family heirloom, or a custom engagement ring, every piece receives the same meticulous care and expert attention. 
              We understand that these aren't just objects – they're memories, investments, and treasures.
            </p>
            <div className="flex items-center slide-from-left stagger-delay-3">
              <img 
                src="/assets/michael.jpg" 
                alt="Michael Davidov" 
                className="w-16 h-16 rounded-full object-cover border-2 border-[#8c6f25]" 
              />
              <div className="ml-4">
                <p className="font-heading font-semibold text-[#8c6f25]">Samuel Cohen</p>
                <p className="text-sm text-gray-200">Master Horologist & Owner</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 slide-from-right">
            <div className="relative">
              <img 
                src="/assets/store.jpg" 
                alt="Brooklyn Timepiece & Jewelry Repair Workshop" 
                className="rounded-lg shadow-lg w-full" 
              />
              <div className="absolute -bottom-6 -left-6 bg-black p-4 rounded shadow-md hidden md:block">
                <p className="font-heading font-bold text-white text-3xl">35+</p>
                <p className="text-white">Years of Precision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
