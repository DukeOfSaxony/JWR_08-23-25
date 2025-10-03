import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useAnimationObserver(sectionRef);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        onEnded={(e) => {
          const video = e.currentTarget;
          video.pause();
        }}
      >
        <source src="/Shattered_Watch.mp4" type="video/mp4" />
      </video>
      
      {/* Green overlay to block bottom 20% of video */}
      <div 
        className="absolute left-0 w-full bg-[#013823]"
        style={{
          bottom: 0,
          height: '20%',
          zIndex: 5
        }}
      ></div>
      {/* Content container - positioned in lower quarter */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 z-10" style={{ height: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline, copy and buttons all in lower quarter */}
            <h1 className="font-heading font-bold text-2xl md:text-2xl lg:text-3xl text-[#013823] mb-4 fade-in uppercase">
              Brooklyn's Trusted Watch & Jewelry Repair — Crafting Timeless Precision
            </h1>
            
            <p className="font-body text-lg md:text-xl text-[#013823] mb-6 mx-auto fade-in stagger-delay-1">
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
      </div>
    </section>
  );
};

export default Hero;
