'use client';

import React, { useRef, useState } from 'react';
import Icon from '@/components/icon/icon';
import styles from '@/assets/styles/client/components/faq.module.scss';

export interface FaqItem {
  id: number;
  q: string;
  a: string;
}

interface ServiceCadFaqProps {
  faqs: FaqItem[];
  title?: string;
}

const ServiceCadFaq: React.FC<ServiceCadFaqProps> = ({
  faqs,
  title = 'Frequently asked questions',
}) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const refs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  const toggleFaq = (id: number) => {
    if (openFaqId === id) {
      const el = refs.current.get(id);
      if (el) el.classList.remove(styles.active);
      setOpenFaqId(null);
    } else {
      if (openFaqId !== null) {
        const prevEl = refs.current.get(openFaqId);
        if (prevEl) prevEl.classList.remove(styles.active);
      }
      setOpenFaqId(id);
      const el = refs.current.get(id);
      if (el) {
        requestAnimationFrame(() => el.classList.add(styles.active));
      }
    }
  };

  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.wrapper}>
        {faqs.map((faq) => (
            <div key={faq.id} className={styles.item}>
              <h3
                className={`${styles.item_title} ${openFaqId === faq.id ? styles.active : ''}`}
                onClick={() => toggleFaq(faq.id)}
                style={{ cursor: 'pointer' }}
              >
                <span>{faq.q}</span>
                <Icon icon="arrow_right" />
              </h3>
              <div
                ref={(el) => {
                  refs.current.set(faq.id, el);
                }}
                className={styles.item_description}
              >
                <div className={styles.item_description_inner}>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ServiceCadFaq;
