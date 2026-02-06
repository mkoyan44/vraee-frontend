import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import styles from '@/assets/styles/client/components/contact.module.scss';

const ContactInfo: React.FC = () => {
  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      color: '#2563eb',
      bg: 'rgba(37, 99, 235, 0.12)',
      border: 'rgba(37, 99, 235, 0.35)',
      details: ['hello@renderagency.com', 'support@renderagency.com'],
      description: 'Send us an email and we will respond within 24 hours.',
    },
    {
      icon: Phone,
      title: 'Phone',
      color: '#059669',
      bg: 'rgba(5, 150, 105, 0.12)',
      border: 'rgba(5, 150, 105, 0.35)',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Call us for immediate assistance.',
    },
    {
      icon: MapPin,
      title: 'Address',
      color: '#d97706',
      bg: 'rgba(217, 119, 6, 0.12)',
      border: 'rgba(217, 119, 6, 0.35)',
      details: ['308 Negra Arroyo Lane', 'Albuquerque, New Mexico 87104'],
      description: 'Visit us at our office location.',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      color: '#7c3aed',
      bg: 'rgba(124, 58, 237, 0.12)',
      border: 'rgba(124, 58, 237, 0.35)',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      description: 'We are available during business hours.',
    },
  ];

  return (
    <div className={styles.contact_info_grid}>
      {contactItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div key={index} className={styles.contact_info_card}>
            <div
              className={styles.contact_info_icon_wrap}
              style={{
                color: item.color,
                background: item.bg,
                borderColor: item.border,
              }}
            >
              <IconComponent className="w-5 h-5" aria-hidden />
            </div>
            <h3 className={styles.contact_info_title}>{item.title}</h3>
            <ul className={styles.contact_info_details}>
              {item.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <p className={styles.contact_info_description}>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
