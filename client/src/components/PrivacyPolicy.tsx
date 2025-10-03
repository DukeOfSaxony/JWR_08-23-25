import React from 'react';

const TermsOfService: React.FC = () => {
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
            <img src="/logo.png" alt="Brooklyn Timepiece & Jewelry Repair" className="h-full object-contain" />
          </div>
        </div>

        <h1 className="font-heading text-4xl font-bold mb-6 text-[#8c6f25] uppercase text-center">Terms of Service</h1>
        <p className="mb-8 text-gray-300 text-center">Effective Date: October 2, 2025</p>

        <p className="mb-6 font-body">
          Welcome to Brooklyn Timepiece & Jewelry Repair. By using our services, you agree to the following terms. Please read them carefully.
        </p>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">1. Services Offered</h2>
          <p className="mb-4 font-body">We provide repair and restoration services for:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 font-body">
            <li>Watches (battery replacement, movement repair, band adjustments, cleaning)</li>
            <li>Jewelry (clasp repair, resizing, stone setting, polishing, chain repair)</li>
          </ul>
          <p className="font-body">All work is performed by experienced technicians using high-quality materials. We aim to restore items as closely as possible to their original condition.</p>
        </div>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">2. Estimates & Approvals</h2>
          <p className="font-body">Upon inspection, we will provide an estimate for the repair. No work will commence without your approval. If additional issues are discovered during the repair process, we will contact you for authorization before proceeding.</p>
        </div>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">3. Payment Terms</h2>
          <p className="font-body">Payment is due upon completion of the repair. We accept cash, major credit cards, and other agreed-upon payment methods. For items mailed in, payment must be received before return shipping.</p>
        </div>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">4. Turnaround Time</h2>
          <p className="font-body">Repair times vary based on the complexity of the work and availability of parts. We will provide an estimated completion date at the time of drop-off or upon receiving your item. While we strive to meet these estimates, delays may occur.</p>
        </div>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">5. Shipping & Handling</h2>
          <p className="mb-4 font-body">If you choose to mail your item to us:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 font-body">
            <li>You are responsible for shipping costs to our facility.</li>
            <li>We recommend using a trackable and insured shipping method.</li>
            <li>We are not responsible for items lost or damaged during transit to our facility.</li>
            <li>Return shipping costs will be included in your final invoice.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">6. Risk of Loss</h2>
          <p className="font-body">Items left with us are handled with care. However, we are not liable for loss or damage due to unforeseen events such as theft, fire, or natural disasters. We recommend that valuable items be insured.</p>
        </div>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">7. Unclaimed Items</h2>
          <p className="font-body">Items not claimed within 90 days of the completion date may be considered abandoned. We will make reasonable efforts to contact you before taking further action, which may include disposal or donation of the item.</p>
        </div>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">8. Warranty & Limitations</h2>
          <p className="mb-4 font-body">We stand behind our workmanship. If you experience issues related to the repair within 30 days, please return the item with your receipt, and we will assess and address the problem. This warranty does not cover:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 font-body">
            <li>Normal wear and tear</li>
            <li>Damage due to misuse or accidents</li>
            <li>Issues unrelated to the original repair</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">9. Limitation of Liability</h2>
          <p className="font-body">Our liability is limited to the cost of the repair service provided. We are not responsible for any indirect, incidental, or consequential damages arising from the use of our services.</p>
        </div>

        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">10. Modifications to Terms</h2>
          <p className="font-body">We reserve the right to update these Terms of Service at any time. Changes will be posted on our website with the effective date. Continued use of our services constitutes acceptance of the revised terms.</p>
        </div>

        <div className="mb-12">
          <h2 className="font-heading text-2xl font-semibold mb-3 text-[#8c6f25] uppercase">11. Contact Information</h2>
          <p className="font-body">If you have questions or concerns about these terms, please contact us:</p>
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

export default TermsOfService;