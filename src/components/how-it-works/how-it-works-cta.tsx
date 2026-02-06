'use client';

import React from 'react';
import { Rocket } from 'lucide-react';
import styles from '@/assets/styles/client/components/how-it-works.module.scss';

const HowItWorksCTA: React.FC = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.cta_wrap}>
      <div className={styles.cta_card}>
        <h3 className={styles.cta_title}>Ready to start your project?</h3>
        <p className={styles.cta_desc}>
          Average completion time: <strong>8–15 days</strong> · 24/7 support · 100% quality guarantee
        </p>
        <button
          type="button"
          onClick={handleScrollToContact}
          className={styles.cta_btn}
        >
          Let's talk
          <Rocket className="w-4 h-4" aria-hidden />
        </button>
      </div>
    </div>
  );
};

export default HowItWorksCTA;
