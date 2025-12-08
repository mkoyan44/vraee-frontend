'use client';

import React from 'react';
import { Rocket } from 'lucide-react';

const HowItWorksCTA: React.FC = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-center mt-16">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-4">
          Ready to start your project?
        </h3>
        <p className="text-gray-600 mb-6">
          Average completion time: <span className="font-semibold">8-15 days</span> • 24/7 support • 100% quality guarantee
        </p>
        <button
          onClick={handleScrollToContact}
          className="btn-primary inline-flex items-center gap-2 px-8 py-3"
        >
          Contact Us
          <Rocket className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default HowItWorksCTA;
