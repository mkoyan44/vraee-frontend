import React from 'react';
import ContactForm from './contact-form';
import ContactInfo from './contact-info';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 btn-primary text-white rounded-full text-sm font-medium mb-6">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </div>

          <h1
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: 'rgb(var(--color-title))' }}
          >
            Contact Us
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'rgb(var(--color-text))' }}
          >
            Let's discuss your project. We'll help you bring your ideas to life with professional 3D visualization and rendering services.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-16">
          <h2
            className="text-2xl font-bold text-center mb-8"
            style={{ color: 'rgb(var(--color-title))' }}
          >
            Get In Touch
          </h2>
          <ContactInfo />
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
