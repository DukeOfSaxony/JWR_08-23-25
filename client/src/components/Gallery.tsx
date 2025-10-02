import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import FlipCardStack from './FlipCard';
import blImage from '@assets/bl.jpg';
import brImage from '@assets/br.jpg';
import slImage from '@assets/sl.jpg';
import srImage from '@assets/sr.jpg';

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useAnimationObserver(sectionRef);

  return (
    <section id="gallery" ref={sectionRef} className="py-16 md:py-24 bg-[#013823]">
      <div className="container mx-auto px-4">
        {/* Before & After Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="fade-in stagger-delay-3">
            <h4 className="font-heading font-semibold text-lg text-[#8c6f25] text-center uppercase mb-4">Boot Restoration</h4>
            <FlipCardStack
              cardData={[
                {
                  frontTitle: "Before",
                  frontSubtitle: "Click to see transformation",
                  backTitle: "After",
                  backSubtitle: "Restored to perfection",
                  frontImage: blImage,
                  backImage: brImage
                }
              ]}
              autoFlip={true}
              animationDelay={500}
            />
          </div>
          
          <div className="fade-in stagger-delay-4">
            <h4 className="font-heading font-semibold text-lg text-[#8c6f25] text-center uppercase mb-4">Sneaker Restoration</h4>
            <FlipCardStack
              cardData={[
                {
                  frontTitle: "Before",
                  frontSubtitle: "Click to see transformation",
                  backTitle: "After",
                  backSubtitle: "Like new again",
                  frontImage: srImage,
                  backImage: slImage
                }
              ]}
              autoFlip={true}
              animationDelay={1500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
