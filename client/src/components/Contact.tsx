import React, { useRef, useState } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    image: null as File | null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    const formEl = e.currentTarget as HTMLFormElement;
    const fd = new FormData(formEl);
    fd.set("form-name", "contact");
    
    try {
      const res = await fetch("/", { method: "POST", body: fd });
      if (!res.ok) throw new Error(String(res.status));
      
      toast({ 
        title: "Message Sent", 
        description: `Thank you, ${formData.name}! Your message has been sent successfully.` 
      });
      
      formEl.reset();
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        image: null
      });
      setFormSubmitted(true);
    } catch (err) {
      toast({ 
        title: "Error", 
        description: "Failed to send message. Please try again.", 
        variant: "destructive" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-[#013823]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#8c6f25] mb-4 fade-in uppercase">
            Contact Our Craftsmen
          </h2>
          <p className="font-body text-gray-200 max-w-2xl mx-auto fade-in stagger-delay-1">
            Ready to restore your treasured timepieces and jewelry? Contact our expert craftsmen for a consultation and estimate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#024a2f] rounded-lg shadow-md p-8 fade-in stagger-delay-2">
            <h3 className="font-heading font-semibold text-2xl text-[#8c6f25] mb-6 uppercase">Send Us a Message</h3>
            
            <form 
              id="contact-form" 
              className="space-y-6" 
              onSubmit={handleSubmit}
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              action="/"
              encType="multipart/form-data"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>Don't fill this out: <input name="bot-field" onChange={handleChange} /></label>
              </p>
              
              <div className="form-input">
                <label htmlFor="name" className="block font-body text-white mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="focus:ring-[#8c6f25]"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-input">
                <label htmlFor="email" className="block font-body text-white mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="focus:ring-[#8c6f25]"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-input">
                <label htmlFor="phone" className="block font-body text-white mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="focus:ring-[#8c6f25]"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-input">
                <label htmlFor="service" className="block font-body text-white mb-2">Service Needed</label>
                <select 
                  id="service" 
                  name="service" 
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c6f25] focus:border-[#8c6f25]"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a Service</option>
                  <option value="watch-repair">Watch Repair</option>
                  <option value="jewelry-repair">Jewelry Repair</option>
                  <option value="watch-service">Watch Service & Maintenance</option>
                  <option value="ring-sizing">Ring Sizing</option>
                  <option value="chain-repair">Chain Repair</option>
                  <option value="battery-replacement">Watch Battery</option>
                  <option value="band-replacement">Watch Band Replacement</option>
                  <option value="appraisal">Jewelry Appraisal</option>
                  <option value="restoration">Antique Restoration</option>
                  <option value="other">Other (Please Specify)</option>
                </select>
              </div>
              
              <div className="form-input">
                <label htmlFor="message" className="block font-body text-white mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  className="focus:ring-[#8c6f25]"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div className="form-input">
                <label htmlFor="image" className="block font-body text-white mb-2">Upload Image (Optional)</label>
                <input 
                  type="file" 
                  id="image" 
                  name="image" 
                  accept="image/*"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  onChange={handleFileChange} 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-[#8c6f25] text-white font-heading font-semibold py-3 px-6 rounded hover:bg-[#6d5a1e] transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'pulse-animation'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="fade-in stagger-delay-3">
            <div className="bg-black text-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="font-heading font-semibold text-2xl text-[#8c6f25] mb-6 uppercase">Our Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 mr-4 text-[#8c6f25]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1 uppercase">Address</h4>
                    <a 
                      href="https://maps.google.com/?q=291+Smith+Street+Brooklyn+NY+11231" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-body text-gray-300 hover:text-white transition-colors"
                    >
                      291 Smith St<br/>Brooklyn, NY 11231
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 mr-4 text-[#8c6f25]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1 uppercase">Business Hours</h4>
                    <p className="font-body text-gray-300">Monday - Saturday: 11:00 AM - 6:00 PM<br/>Sunday: 12:00 PM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 mr-4 text-[#8c6f25]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1 uppercase">Phone</h4>
                    <a 
                      href="tel:+13479160069" 
                      className="font-body text-gray-300 hover:text-white transition-colors"
                    >
                      (347) 916-0069
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 mr-4 text-[#8c6f25]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1 uppercase">Email</h4>
                    <a 
                      href="mailto:diddleysquatter@gmail.com?subject=Repair%20Inquiry" 
                      className="font-body text-gray-300 hover:text-white transition-colors"
                    >
                      info@brooklyntimepiece.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-lg shadow-md overflow-hidden h-64 fade-in stagger-delay-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.0899!2d-73.9963!3d40.6783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a57a1a5e5e5%3A0x1234567890abcdef!2s291%20Smith%20St%2C%20Brooklyn%2C%20NY%2011231!5e0!3m2!1sen!2sus!4v1687789430851!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Brooklyn Timepiece & Jewelry Repair Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;