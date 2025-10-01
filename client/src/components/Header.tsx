import React, { useEffect, useState, useRef } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header 
      id="navbar" 
      className={`fixed w-full ${isScrolled ? 'py-2 bg-black shadow-md' : 'py-3 md:py-4 bg-black/90 backdrop-blur-sm'} z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4">
        {/* Logo - Full Width with Mobile Menu Button */}
        <div className="flex justify-center items-center py-4 relative">
          <a href="#hero" className="flex items-center">
            <div className="h-7 md:h-8">
              <img src="/assets/logo.png" alt="Watch & Jewelry Repair" className="h-full object-contain" />
            </div>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-button" 
            ref={buttonRef}
            className={`md:hidden absolute right-0 p-2 rounded-md ${isMenuOpen ? 'bg-[#8c6f25] text-white' : 'bg-white shadow-sm border border-gray-200 text-black'} transition-all duration-300 focus:outline-none`}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        </div>
        
        {/* Desktop Navigation - Below Logo */}
        <nav className="hidden md:flex justify-center items-center space-x-8 pb-3">
          <a href="#about" className="nav-link font-body text-white hover:text-[#8c6f25] transition-colors">About</a>
          <a href="#prices" className="nav-link font-body text-white hover:text-[#8c6f25] transition-colors">Services</a>
          <a href="#gallery" className="nav-link font-body text-white hover:text-[#8c6f25] transition-colors">Gallery</a>
          <a href="#testimonials" className="nav-link font-body text-white hover:text-[#8c6f25] transition-colors">Reviews</a>
          <a href="#contact" className="nav-link font-body text-white hover:text-[#8c6f25] transition-colors">Contact</a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div id="mobile-menu" ref={menuRef} className="absolute top-full left-0 w-full bg-black shadow-lg md:hidden z-50">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <a 
              href="#about" 
              className="font-body text-white hover:bg-[#013823] hover:text-[#8c6f25] transition-all py-4 px-3 border-b border-gray-700 text-lg font-medium flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="w-1.5 h-1.5 bg-[#8c6f25] rounded-full mr-3"></span>
              About
            </a>
            <a 
              href="#prices" 
              className="font-body text-white hover:bg-[#013823] hover:text-[#8c6f25] transition-all py-4 px-3 border-b border-gray-700 text-lg font-medium flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#prices")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="w-1.5 h-1.5 bg-[#8c6f25] rounded-full mr-3"></span>
              Services
            </a>
            <a 
              href="#gallery" 
              className="font-body text-white hover:bg-[#013823] hover:text-[#8c6f25] transition-all py-4 px-3 border-b border-gray-700 text-lg font-medium flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="w-1.5 h-1.5 bg-[#8c6f25] rounded-full mr-3"></span>
              Gallery
            </a>
            <a 
              href="#testimonials" 
              className="font-body text-white hover:bg-[#013823] hover:text-[#8c6f25] transition-all py-4 px-3 border-b border-gray-700 text-lg font-medium flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#testimonials")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="w-1.5 h-1.5 bg-[#8c6f25] rounded-full mr-3"></span>
              Reviews
            </a>
            <a 
              href="#contact" 
              className="font-body text-white hover:bg-[#013823] hover:text-[#8c6f25] transition-all py-4 px-3 border-b border-gray-700 text-lg font-medium flex items-center" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              <span className="w-1.5 h-1.5 bg-[#8c6f25] rounded-full mr-3"></span>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
