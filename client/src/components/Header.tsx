import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      id="navbar" 
      className={`fixed w-full ${isScrolled ? 'py-2 bg-black shadow-md' : 'py-3 bg-black/90 backdrop-blur-sm'} z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4">
        {/* Logo - Centered */}
        <div className="flex justify-center items-center py-3">
          <a href="#hero" className="flex items-center">
            <div className="h-7 md:h-8">
              <img src="/logo.png" alt="Watch & Jewelry Repair" className="h-full object-contain" />
            </div>
          </a>
        </div>
        
        {/* Navigation - Below Logo - Always Visible */}
        <nav className="flex justify-center items-center flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 pb-3">
          <a href="#about" className="nav-link font-body text-white hover:text-[#8c6f25] transition-colors text-sm sm:text-base">About</a>
          <a href="#prices" className="nav-link font-body text-white hover:text-[#8c6f25] transition-colors text-sm sm:text-base">Services</a>
          <a href="#gallery" className="nav-link font-body text-white hover:text-[#8c6f25] transition-colors text-sm sm:text-base">Gallery</a>
          <a href="#testimonials" className="nav-link font-body text-white hover:text-[#8c6f25] transition-colors text-sm sm:text-base">Reviews</a>
          <a href="#contact" className="nav-link font-body text-white hover:text-[#8c6f25] transition-colors text-sm sm:text-base">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
