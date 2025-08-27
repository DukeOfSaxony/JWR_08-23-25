import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';

const PriceItem: React.FC<{ service: string; price: string }> = ({ service, price }) => (
  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
    <span className="font-body">{service}</span>
    <span className="font-heading font-semibold text-black">{price}</span>
  </div>
);

const Prices: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);


  const watchRepair = [
    { service: "Battery Replacement", price: "$16 - $24" },
    { service: "Watchband Replacement", price: "$20 - $38" },
    { service: "Stem and Crown Replacement", price: "$28 - $65" },
    { service: "Crown Replacement", price: "$39 - $70" },
    { service: "Cleaning and Polishing", price: "$70 - $160" }
  ];

  const jewelryRepair = [
    { service: "Chain Repair", price: "$16 - $34" },
    { service: "Ring Sizing", price: "$28 - $75" },
    { service: "Replanting in Gold or White Gold", price: "$25 - $60" },
    { service: "Engraving", price: "$15 - $60" },
    { service: "Polish", price: "$15 - $55" },
    { service: "Cleaning", price: "$10 - $30" },
    { service: "Stone Sitting", price: "$10 - $85" },
    { service: "Laser Welding", price: "$18 - $65" },
    { service: "Pearl Restring", price: "$40 - $85" },
    { service: "Glasses Repair", price: "$16 - $65" }
  ];

  return (
    <section id="prices" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-black mb-4 fade-in">Service Pricing</h2>
          <p className="font-body text-gray-700 max-w-2xl mx-auto fade-in stagger-delay-1">
            Our transparent pricing ensures you know exactly what to expect. All prices may vary depending on the condition and material of your items.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Watch Repair */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 scale-in">
            <h3 className="font-heading font-semibold text-2xl text-black mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Repair
            </h3>
            
            <div className="space-y-4">
              {watchRepair.map((item, index) => (
                <PriceItem key={index} service={item.service} price={item.price} />
              ))}
            </div>
          </div>
          
          {/* Jewelry Repair */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 scale-in stagger-delay-1">
            <h3 className="font-heading font-semibold text-2xl text-black mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Jewelry Repair
            </h3>
            
            <div className="space-y-4">
              {jewelryRepair.map((item, index) => (
                <PriceItem key={index} service={item.service} price={item.price} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Specialized Services */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 scale-in stagger-delay-2">
            <h3 className="font-heading font-semibold text-2xl text-black mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Specialized Services
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="font-body">Watch Movement Service</span>
                <span className="font-heading font-semibold text-black">$150 - $300</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="font-body">Antique Restoration</span>
                <span className="font-heading font-semibold text-black">$85 - $250</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="font-body">Custom Jewelry Design</span>
                <span className="font-heading font-semibold text-black">Quote Required</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="font-body">Insurance Appraisals</span>
                <span className="font-heading font-semibold text-black">$85 - $150</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="font-body">Emergency Rush Service</span>
                <span className="font-heading font-semibold text-black">+50% Standard Rate</span>
              </div>
            </div>
          </div>
          
          {/* Free Estimates */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 scale-in stagger-delay-3">
            <h3 className="font-heading font-semibold text-2xl text-black mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Free Estimates
            </h3>
            
            <p className="font-body text-gray-700 mb-6">
              We provide complimentary evaluations and detailed price quotes for all jewelry and watch repair services. Expert assessment with no obligation.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-heading font-semibold text-xl text-black mb-3">Our Guarantee</h4>
              <p className="font-body text-gray-700 mb-4">
                All repairs come with a 90-day warranty. Your satisfaction is our commitment to excellence in craftsmanship.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-black text-white font-heading font-semibold px-6 py-2 rounded hover:bg-gray-800 transition-colors"
              >
                Get Your Free Estimate
              </a>
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 italic">
            We are not responsible for any items left for more than 30 days after completion of the work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prices;
