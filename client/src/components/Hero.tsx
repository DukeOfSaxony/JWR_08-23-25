import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import hikingImage from '@assets/hiking.jpg';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-cover bg-center min-h-screen flex items-center" 
      style={{
        backgroundImage: `url(${hikingImage})`,
        backgroundColor: 'rgba(0,0,0,0.75)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-4 mt-36">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 fade-in uppercase">
            Brooklyn's Trusted Watch & Jewelry Repair — Crafting Timeless Precision
          </h1>
          
          <p className="font-body text-lg md:text-xl text-gray-200 mb-8 mx-auto fade-in stagger-delay-1">
            For 8 years, we've restored cherished heirlooms and fine timepieces in Carroll Gardens and beyond. Get a free quote today — because your pieces deserve expert care.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 fade-in stagger-delay-2 justify-center">
            <a 
              href="#prices" 
              className="bg-[#8c6f25] text-white font-heading font-semibold px-8 py-3 rounded text-center hover:bg-[#a68434] transition-colors"
            >
              View Services
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-[#8c6f25] text-white font-heading font-semibold px-8 py-3 rounded text-center hover:bg-[#8c6f25] transition-colors"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
