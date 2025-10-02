import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import FlipCardStack from './FlipCard';
import before01 from '@assets/Before01_1759439992853.jpg';
import after01 from '@assets/after01_1759439992853.jpg';
import before02 from '@assets/before02_1759439992851.jpg';
import after02 from '@assets/after02_1759439992853.jpg';
import before03 from '@assets/Before03_1759439992852.jpg';
import after03 from '@assets/after03_1759439992852.jpg';

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useAnimationObserver(sectionRef);

  return (
    <section id="gallery" ref={sectionRef} className="py-16 md:py-24 bg-[#013823]">
      <div className="container mx-auto px-4">
        {/* Before & After Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="fade-in stagger-delay-1">
            <FlipCardStack
              cardData={[
                {
                  frontTitle: "Before",
                  frontSubtitle: "Click to see transformation",
                  backTitle: "After",
                  backSubtitle: "Crystal Repair",
                  frontImage: before01,
                  backImage: after01
                }
              ]}
              autoFlip={true}
              animationDelay={500}
            />
          </div>
          
          <div className="fade-in stagger-delay-2">
            <FlipCardStack
              cardData={[
                {
                  frontTitle: "Before",
                  frontSubtitle: "Click to see transformation",
                  backTitle: "After",
                  backSubtitle: "Pearl Restringing",
                  frontImage: before02,
                  backImage: after02
                }
              ]}
              autoFlip={true}
              animationDelay={1000}
            />
          </div>

          <div className="fade-in stagger-delay-3">
            <FlipCardStack
              cardData={[
                {
                  frontTitle: "Before",
                  frontSubtitle: "Click to see transformation",
                  backTitle: "After",
                  backSubtitle: "Watchface Repair",
                  frontImage: before03,
                  backImage: after03
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
