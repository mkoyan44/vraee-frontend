import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      color: '#3B82F6', // Blue
      details: ['hello@renderagency.com', 'support@renderagency.com'],
      description: 'Send us an email and we will respond within 24 hours.',
    },
    {
      icon: Phone,
      title: 'Phone',
      color: '#10B981', // Green
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Call us for immediate assistance.',
    },
    {
      icon: MapPin,
      title: 'Address',
      color: '#F59E0B', // Amber
      details: ['308 Negra Arroyo Lane', 'Albuquerque, New Mexico 87104'],
      description: 'Visit us at our office location.',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      color: '#8B5CF6', // Purple
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      description: 'We are available during business hours.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {contactItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-rgb(var(--btn-primary-bg)) h-full"
            style={{
              backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))',
              borderColor: 'rgb(var(--color-border))'
            }}
          >
            <CardHeader className="pb-4 text-center">
              <div
                className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                  boxShadow: `0 4px 20px ${item.color}30`
                }}
              >
                <IconComponent
                  className="h-8 w-8 drop-shadow-sm"
                  style={{ color: item.color }}
                />
              </div>
              <CardTitle className="text-xl font-bold" style={{ color: 'rgb(var(--color-title))' }}>
                {item.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-0 text-center">
              <div className="space-y-3 mb-4">
                {item.details.map((detail, detailIndex) => (
                  <p
                    key={detailIndex}
                    className="font-medium"
                    style={{ color: 'rgb(var(--color-text))' }}
                  >
                    {detail}
                  </p>
                ))}
              </div>

              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgb(var(--color-text), 0.8)' }}
              >
                {item.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ContactInfo;
