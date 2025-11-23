import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, PenTool, Cpu, Eye, CheckCircle, Rocket } from 'lucide-react';
import HowItWorksCTA from './how-it-works-cta';

interface Step {
  stepNumber: number;
  icon: React.ElementType;
  title: string;
  description: string;
  cta: string;
  link?: string;
  details?: string[];
}

const steps: Step[] = [
  {
    stepNumber: 1,
    icon: MessageCircle,
    title: "Submit Your Project",
    description: "Start by selecting your required service (CAD, Rendering, or Animation) or upload your sketch/reference file for a custom quote. We guarantee the confidentiality of your designs.",
    cta: "Start Your Project",
    link: "/pricing"
  },
  {
    stepNumber: 2,
    icon: PenTool,
    title: "Transparent Pricing & Quote",
    description: "Our system calculates the exact cost and timeline based on complexity and volume. You receive a fixed price with no hidden fees, ensuring budget certainty.",
    cta: "View Pricing",
    details: ["Interactive Calculator", "Clear Pricing Table", "Fixed Price Guarantee", "No Hidden Fees"]
  },
  {
    stepNumber: 3,
    icon: Cpu,
    title: "Order Confirmation & Access",
    description: "Once the quote is approved, we begin work immediately. You receive unique access to your dedicated Client Portal for all project management.",
    cta: "Go to Client Portal",
    details: ["Immediate Work Start", "Dedicated Portal", "Project Management", "Secure Access"]
  },
  {
    stepNumber: 4,
    icon: Eye,
    title: "Dynamic Status Tracking",
    description: "Track your order's progress in real-time, 24/7. You always know the exact stage of your CAD model creation or rendering process.",
    cta: "Track Progress",
    details: ["Real-Time Updates", "24/7 Access", "Progress Timeline", "Status Notifications"]
  },
  {
    stepNumber: 5,
    icon: CheckCircle,
    title: "Direct Communication & Revisions",
    description: "Provide feedback and request revisions directly within the Client Portal. Our dedicated specialist is always on hand for fast, operational communication.",
    cta: "Request Revision",
    details: ["Embedded Chat", "Image Commenting", "Dedicated Specialist", "Fast Communication"]
  },
  {
    stepNumber: 6,
    icon: Rocket,
    title: "Final Delivery & Guarantee",
    description: "Download your final, e-commerce optimized visuals and production-ready CAD files in high resolution, delivered within our guaranteed timeframe.",
    cta: "Download Final Files",
    link: "/portfolio",
    details: ["High-Resolution Files", "E-commerce Optimized", "Guaranteed Delivery", "Production Ready"]
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 px-4 background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 btn-primary text-white rounded-full text-sm font-medium mb-4">
            <Cpu className="h-4 w-4" />
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'rgb(var(--color-title))'}}>
            Our Transparent Workflow: From Concept to E-commerce Visuals
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: 'rgb(var(--color-text))'}}>
            Jewelry 3D rendering workflow, custom jewelry CAD service process, e-commerce rendering process featuring transparent pricing, real-time tracking, and guaranteed delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Timeline for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.stepNumber} className="relative z-10">
                <Card className="group hover:shadow-xl transition-all duration-300 h-full" style={{backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))', borderColor: 'rgb(var(--color-border))'}}>
                  <CardContent className="p-6">
                    {/* Step Number */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 btn-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{step.stepNumber}</span>
                        </div>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300" style={{backgroundColor: 'rgba(var(--color-bg), 0.5)'}}>
                          <IconComponent className="h-5 w-5" style={{color: 'rgb(var(--color-text))'}} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold group-hover:text-current transition-colors duration-300" style={{color: 'rgb(var(--color-title))'}}>
                        {step.title}
                      </h3>
                      <p style={{color: 'rgb(var(--color-text))'}} className="leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details List */}
                      {step.details && (
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{backgroundColor: 'rgb(var(--color-border))'}}></div>
                              <span className="text-sm" style={{color: 'rgb(var(--color-text))'}}>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* CTA Button */}
                      <div className="pt-4">
                        {step.link ? (
                          <a href={step.link} className="btn-simple inline-block">
                            {step.cta}
                          </a>
                        ) : (
                          <button type="button" className="btn-simple">
                            {step.cta}
                          </button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline connector for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8">
                    <div className="w-0.5 h-8 bg-gray-300"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <HowItWorksCTA />
      </div>
    </section>
  );
};

export default HowItWorks;
