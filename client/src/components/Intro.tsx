import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';

const Intro: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-[#013823] relative z-20 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 fade-in uppercase">
            Brooklyn's Trusted Watch & Jewelry Repair — Crafting Timeless Precision
          </h1>
          
          <p className="font-body text-lg md:text-xl lg:text-2xl text-white fade-in stagger-delay-1">
            For 8 years, we've restored cherished heirlooms and fine timepieces in Carroll Gardens and beyond. Get a free quote today — because your pieces deserve expert care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
