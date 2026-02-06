import React from 'react';
import ContactForm from './contact-form';
import ContactInfo from './contact-info';
import styles from '@/assets/styles/client/components/contact.module.scss';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact_section} aria-label="Contact">
      <div className="container">
        <header className={styles.header}>
          <span className={styles.section_label}>Contact</span>
          <h1 className={styles.section_title}>
            Let's Bring Your <span className={styles.section_title_accent}>Vision to Life</span>
          </h1>
          <p className={styles.section_desc}>
            Ready to transform your jewelry designs into stunning 3D visualizations?
            Our expert team is here to discuss your project and deliver exceptional results that elevate your brand.
          </p>
        </header>

        <div className={styles.get_in_touch_wrap}>
          <div className={styles.get_in_touch_header}>
            <h2 className={styles.get_in_touch_title}>Get In Touch</h2>
            <p className={styles.get_in_touch_desc}>
              Multiple ways to reach us. Choose the method that works best for you.
            </p>
          </div>
          <ContactInfo />
        </div>

        <div className={styles.form_section}>
          <div className={styles.form_card}>
            <div className={styles.form_header}>
              <h3 className={styles.form_header_title}>Start Your Project</h3>
              <p className={styles.form_header_desc}>
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
