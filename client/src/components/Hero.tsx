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
      className="relative w-full overflow-hidden"
      style={{ 
        paddingTop: '96px',
        height: '100vh'
      }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute left-0 w-full object-cover"
        style={{
          top: '96px',
          height: 'calc(100vh - 96px)'
        }}
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
          height: 'calc((100vh - 96px) * 0.2)',
          zIndex: 5
        }}
      ></div>
      {/* CTA Buttons container - positioned in lower quarter */}
      <div className="absolute left-0 right-0 z-10 px-6 pb-8 sm:pb-12" style={{ bottom: 0, height: 'calc((100vh - 96px) * 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 fade-in">
          <a 
            href="#prices" 
            className="bg-[#8c6f25] text-white font-heading font-semibold px-8 md:px-10 py-3 md:py-4 rounded text-center hover:bg-[#a68434] transition-colors text-base md:text-lg"
          >
            View Services
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-[#8c6f25] text-white font-heading font-semibold px-8 md:px-10 py-3 md:py-4 rounded text-center hover:bg-[#8c6f25] transition-colors text-base md:text-lg"
          >
            Get Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
