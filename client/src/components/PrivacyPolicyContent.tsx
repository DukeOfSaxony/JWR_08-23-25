import React from 'react';

const PrivacyPolicyContent: React.FC = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-[#013823] text-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <button 
          onClick={handleBackClick}
          className="mb-8 flex items-center text-[#8c6f25] hover:text-white transition-colors font-body"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>

        <div className="flex items-center justify-center mb-8">
          <div className="h-16">
            <img src="/assets/logo.png" alt="Brooklyn Timepiece & Jewelry Repair" className="h-full object-contain" />
          </div>
        </div>

        <h1 className="font-heading text-4xl font-bold mb-6 text-[#8c6f25] uppercase text-center">Privacy Policy</h1>
        <p className="mb-8 text-gray-300 text-center">Effective Date: October 2, 2025</p>

        <p className="mb-6 font-body">
          At Brooklyn Timepiece & Jewelry Repair, your privacy is important to us. We're committed to protecting any personal information you provide, whether you're booking a repair, sending a message, or simply browsing our site.
        </p>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">1. Information We Collect</h2>
          <p className="mb-4 font-body">We may collect personal information when you:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 font-body">
            <li>Fill out a contact form</li>
            <li>Request a quote or service</li>
            <li>Subscribe to updates (if available)</li>
          </ul>
          <p className="font-body">This typically includes your name, phone number, email address, and any message you choose to include.</p>
        </div>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">2. How We Use Your Information</h2>
          <p className="mb-4 font-body">We use your information to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 font-body">
            <li>Respond to your inquiries</li>
            <li>Provide services you request</li>
            <li>Improve our communication and customer support</li>
          </ul>
          <p className="font-body">We do not sell or share your personal data with third parties for marketing purposes.</p>
        </div>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">3. Data Storage</h2>
          <p className="font-body">All information submitted through our website is stored securely and used only for the purposes stated above. We take appropriate steps to protect it from unauthorized access.</p>
        </div>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">4. Cookies & Tracking</h2>
          <p className="font-body">Our website may use basic cookies to improve functionality and performance. We do not use cookies for advertising or to track you across other sites.</p>
        </div>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">5. Your Rights</h2>
          <p className="mb-4 font-body">You can contact us at any time to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 font-body">
            <li>See what personal data we hold about you (if any)</li>
            <li>Request corrections or deletions</li>
            <li>Ask us to stop using your data</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">6. Contact</h2>
          <p className="mb-4 font-body">If you have any questions about our privacy practices, contact us at:</p>
          <p className="mt-2 font-heading font-bold text-white">Brooklyn Timepiece & Jewelry Repair</p>
          <p className="font-body">291 Smith St, Brooklyn, NY 11231</p>
          <p className="font-body">(347) 916-0069</p>
          <p className="font-body">jdavydov@gmail.com</p>
        </div>

        <div className="text-center">
          <button 
            onClick={handleBackClick}
            className="mb-12 px-6 py-3 bg-[#8c6f25] hover:bg-opacity-90 transition-colors text-white rounded-md font-body"
          >
            Back to Main Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;