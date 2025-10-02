import { useEffect, useState, useRef } from 'react';

interface CardData {
  frontTitle: string;
  frontSubtitle: string;
  backTitle: string;
  backSubtitle: string;
  frontImage: string;
  backImage: string;
}

interface FlipCardStackProps {
  cardData: CardData[];
  autoFlip?: boolean;
  flipInterval?: number;
  className?: string;
  animationDelay?: number;
  style?: React.CSSProperties;
}

export default function FlipCardStack({
  cardData,
  autoFlip = true,
  flipInterval = 3000,
  className = '',
  animationDelay = 0,
  style
}: FlipCardStackProps) {
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const isFlipping = useRef(false);
  const flipCycleRef = useRef<NodeJS.Timeout | null>(null);

  const handleFlip = () => {
    if (!isFlipping.current) {
      isFlipping.current = true;
      setRotationDegrees(prev => prev + 180);
      
      setTimeout(() => {
        isFlipping.current = false;
      }, 750);
    }
  };

  const handleCardClick = () => {
    // Clear auto-flip timer if running
    if (flipCycleRef.current) {
      clearTimeout(flipCycleRef.current);
      flipCycleRef.current = null;
    }
    handleFlip();
  };

  useEffect(() => {
    if (autoFlip && cardData.length > 0) {
      const initialTimer = setTimeout(() => {
        const flipCycle = () => {
          if (!isFlipping.current) {
            handleFlip();
            flipCycleRef.current = setTimeout(flipCycle, 2250); // 1.5s rest + 0.75s flip
          }
        };
        
        flipCycle();
      }, animationDelay);

      return () => {
        clearTimeout(initialTimer);
        if (flipCycleRef.current) {
          clearTimeout(flipCycleRef.current);
        }
      };
    }
  }, [autoFlip, flipInterval, animationDelay, cardData.length]);

  if (!cardData.length) return null;

  const currentCard = cardData[0]; // Use first card only

  return (
    <div 
      className={`flip-card-container ${className} cursor-pointer`} 
      style={{ aspectRatio: '2/3', ...style }}
      onClick={handleCardClick}
    >
      <div 
        className="flip-card-inner"
        style={{ 
          transform: `rotateY(${rotationDegrees}deg)`, 
          transition: `transform 0.75s ease-in-out`
        }}
      >
        {/* Front Face */}
        <div 
          className="flip-card-front"
          style={{ backgroundImage: `url(${currentCard.frontImage})` }}
        >
          <div className="flip-card-content">
            <p className="flip-card-title">
              {currentCard.frontTitle}
            </p>
            <span className="flip-card-subtitle">
              {currentCard.frontSubtitle}
            </span>
          </div>
        </div>
        
        {/* Back Face */}
        <div 
          className="flip-card-back"
          style={{ backgroundImage: `url(${currentCard.backImage})` }}
        >
          <div className="flip-card-content">
            <p className="flip-card-title">
              {currentCard.backTitle}
            </p>
            <span className="flip-card-subtitle">
              {currentCard.backSubtitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
