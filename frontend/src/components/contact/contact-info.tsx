import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@renderagency.com', 'support@renderagency.com'],
      description: 'Send us an email and we will respond within 24 hours.',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Call us for immediate assistance.',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Creative Street', 'Design District, CA 90210'],
      description: 'Visit us at our office location.',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      description: 'We are available during business hours.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {contactItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <Card
            key={index}
            style={{ backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))', borderColor: 'rgb(var(--color-border))' }}
          >
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(var(--btn-primary-bg), 0.1)' }}>
                  <IconComponent
                    className="h-5 w-5"
                    style={{ color: 'rgb(var(--btn-primary-bg))' }}
                  />
                </div>
                <span style={{ color: 'rgb(var(--color-title))' }}>{item.title}</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3">
                {item.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                      style={{ backgroundColor: 'rgb(var(--color-border))' }}
                    ></div>
                    <p style={{ color: 'rgb(var(--color-text))' }} className="text-sm">
                      {detail}
                    </p>
                  </div>
                ))}

                <p
                  className="text-xs mt-3"
                  style={{ color: 'rgb(var(--color-text), 0.7)' }}
                >
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ContactInfo;
