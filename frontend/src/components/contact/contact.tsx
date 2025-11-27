import React from 'react';
import ContactForm from './contact-form';
import ContactInfo from './contact-info';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 btn-primary text-white rounded-full text-sm font-medium mb-8 shadow-lg">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span style={{ color: 'rgb(var(--color-title))' }}>
              Let's Bring Your
            </span>
            <br />
            <span style={{ color: 'rgb(var(--btn-primary-bg))' }}>
              Vision to Life
            </span>
          </h1>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgb(var(--color-text))' }}>
            Ready to transform your jewelry designs into stunning 3D visualizations?
            Our expert team is here to discuss your project and deliver exceptional results that elevate your brand.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'rgb(var(--color-title))' }}>
              Get In Touch
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgb(var(--color-text))' }}>
              Multiple ways to reach us. Choose the method that works best for you.
            </p>
          </div>
          <ContactInfo />
        </div>

        {/* Contact Form Section */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rgba(var(--btn-primary-bg), 0.05) to-transparent rounded-3xl"></div>

          <div className="relative bg-rgba(var(--color-bg), 0.8) backdrop-blur-sm rounded-3xl border border-rgb(var(--color-border)) p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'rgb(var(--color-title))' }}>
                Start Your Project
              </h3>
              <p className="text-lg" style={{ color: 'rgb(var(--color-text))' }}>
                Tell us about your vision and let's create something amazing together.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
