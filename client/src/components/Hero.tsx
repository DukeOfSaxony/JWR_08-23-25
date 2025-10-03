import React, { useRef, useEffect, useState } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);
  useAnimationObserver(sectionRef);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen flex items-center relative overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="fixed left-0 w-full h-screen object-cover"
        style={{
          top: `${96 - scrollY * 0.5}px`
        }}
        onEnded={(e) => {
          const video = e.currentTarget;
          video.pause();
        }}
      >
        <source src="/Shattered_Watch.mp4" type="video/mp4" />
      </video>
      <div className="container mx-auto px-4 relative z-10">
        {/* Headline right below navbar */}
        <div className="pt-6 max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-2xl md:text-2xl lg:text-3xl text-[#013823] fade-in uppercase">
            Brooklyn's Trusted Watch & Jewelry Repair — Crafting Timeless Precision
          </h1>
        </div>
        
        {/* Copy and buttons moved way down */}
        <div className="max-w-4xl mx-auto text-center" style={{ marginTop: '100rem' }}>
          <p className="font-body text-lg md:text-xl text-[#013823] mb-8 mx-auto fade-in stagger-delay-1">
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
