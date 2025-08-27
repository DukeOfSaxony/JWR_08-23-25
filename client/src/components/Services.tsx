import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';

const ServiceCard: React.FC<{
  image: string;
  title: string;
  description: string;
  price: string;
  delay: string;
}> = ({ image, title, description, price, delay }) => (
  <div className={`service-card bg-white rounded-lg shadow-md overflow-hidden fade-in ${delay}`}>
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="font-heading font-semibold text-xl text-black mb-3">{title}</h3>
      <p className="font-body text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-black font-heading font-semibold">{price}</span>
        <a href="#contact" className="text-black font-semibold hover:text-gray-600 transition-colors">Inquire →</a>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  const services = [
    {
      image: "https://images.unsplash.com/photo-1509048191080-d2e2a26b6845?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Watch Repair & Service",
      description: "Complete mechanical and quartz watch servicing, from battery replacement to full movement restoration.",
      price: "Starting at $45",
      delay: "stagger-delay-1"
    },
    {
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Jewelry Repair",
      description: "Expert restoration of broken chains, bent prongs, loose stones, and damaged clasps with precision craftsmanship.",
      price: "Starting at $35",
      delay: "stagger-delay-2"
    },
    {
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Ring Resizing",
      description: "Professional ring sizing up or down while maintaining the integrity and beauty of your precious jewelry.",
      price: "Starting at $55",
      delay: "stagger-delay-3"
    },
    {
      image: "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Battery Replacement",
      description: "Quick and reliable battery replacement for all watch brands, with water resistance testing included.",
      price: "Starting at $15",
      delay: "stagger-delay-1"
    },
    {
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Watch Band Replacement",
      description: "Wide selection of leather, metal, and specialty watch bands with professional installation service.",
      price: "Starting at $25",
      delay: "stagger-delay-2"
    },
    {
      image: "https://images.unsplash.com/photo-1549739760-b99a9564cf0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Jewelry Appraisal",
      description: "Certified appraisals for insurance, estate planning, or personal knowledge with detailed documentation.",
      price: "Starting at $85",
      delay: "stagger-delay-3"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              price={service.price}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
