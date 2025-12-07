import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Hash, Calculator, User, Eye, CheckCircle, Send, Cpu } from 'lucide-react';
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
    icon: Hash,
    title: "Share Your Jewelry Vision",
    description: "Upload your jewelry sketches, technical drawings, or reference photos. Describe your design vision, metal type, gemstones, and any specific requirements. Our expert team understands jewelry nuances.",
    cta: "Start Your Quote",
    link: "/pricing",
    details: ["Sketch Upload", "Design Consultation", "Confidentiality Guarantee", "Jewelry Expertise"]
  },
  {
    stepNumber: 2,
    icon: Calculator,
    title: "Custom Jewelry Pricing & Timeline",
    description: "Receive instant pricing based on jewelry complexity, metal finish accuracy, and rendering requirements. Our transparent calculator shows exactly what you pay for jewelry CAD and 3D visualization.",
    cta: "Get Instant Quote",
    details: ["Jewelry-Specific Calculator", "Metal & Gemstone Pricing", "Fixed Price Guarantee", "No Hidden Costs"]
  },
  {
    stepNumber: 3,
    icon: User,
    title: "Dedicated Jewelry CAD Specialist",
    description: "Your project gets assigned to a dedicated jewelry 3D expert. You gain immediate access to your personal Client Portal with real-time tracking of your CAD modeling and rendering progress.",
    cta: "Access Portal",
    details: ["Jewelry CAD Expert", "Personal Portal Access", "24/7 Project Tracking", "Secure File Management"]
  },
  {
    stepNumber: 4,
    icon: Eye,
    title: "Live Jewelry 3D Modeling Process",
    description: "Watch your jewelry come to life! Track ring modeling, bracelet fabrication, necklace design, or pendant creation in real-time. We provide milestone previews for your feedback.",
    cta: "Track Your Ring",
    details: ["Live CAD Progress", "Milestone Previews", "Jewelry Design Tracking", "Quality Assurance Check"]
  },
  {
    stepNumber: 5,
    icon: CheckCircle,
    title: "Jewelry Client Collaboration",
    description: "Comment directly on 3D renders using our embedded review system. Adjust metal finishes, gemstone placements, or request customizations. Our jewelry experts respond within 2 hours.",
    cta: "Provide Feedback",
    details: ["Embedded Jewelry Reviews", "Material Customization", "Expert Consultations", "Quick Revisions"]
  },
  {
    stepNumber: 6,
    icon: Send,
    title: "E-commerce Jewelry Delivery",
    description: "Receive production-ready jewelry CAD files optimized for manufacturing, plus photorealistic renderings perfect for online stores. All files delivered with lifetime support guarantee.",
    cta: "View Our Jewelry",
    link: "/portfolio",
    details: ["Production CAD Files", "E-commerce Ready Images", "Manufacturing Optimized", "Lifetime Support"]
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
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{
                        backgroundColor: index === 0 ? '#10B981' : index === 1 ? '#F59E0B' : index === 2 ? '#8B5CF6' : index === 3 ? '#3B82F6' : index === 4 ? '#EF4444' : '#EC4899'
                      }}>
                        <IconComponent className="h-6 w-6 text-white" />
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
