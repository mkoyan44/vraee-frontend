import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, PenTool, Cpu, Eye, CheckCircle, Rocket } from 'lucide-react';
import HowItWorksCTA from './how-it-works-cta';

interface Step {
  stepNumber: number;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  duration: string;
}

const steps: Step[] = [
  {
    stepNumber: 1,
    icon: MessageCircle,
    title: "Consultation and brief",
    description: "Discuss ideas, requirements and budget",
    details: ["Free consultation", "Technical specification", "Cost calculation", "Timeline planning"],
    duration: "1-2 days"
  },
  {
    stepNumber: 2,
    icon: PenTool,
    title: "Sketch creation",
    description: "Develop detailed sketches and concepts",
    details: ["Multiple variants", "Detailed development", "Client approval", "Corrections"],
    duration: "2-3 days"
  },
  {
    stepNumber: 3,
    icon: Cpu,
    title: "3D Modeling",
    description: "Create precise 3D model with accurate dimensions",
    details: ["High detail", "Precise dimensions", "All materials", "Technical verification"],
    duration: "3-5 days"
  },
  {
    stepNumber: 4,
    icon: Eye,
    title: "Rendering and visualization",
    description: "Create photorealistic images with professional lighting",
    details: ["Photorealism", "Multiple angles", "Studio quality", "4K resolution"],
    duration: "1-2 days"
  },
  {
    stepNumber: 5,
    icon: CheckCircle,
    title: "Approval and revisions",
    description: "Present results and make necessary corrections",
    details: ["Work presentation", "Feedback", "Corrections", "Final approval"],
    duration: "1-2 days"
  },
  {
    stepNumber: 6,
    icon: Rocket,
    title: "File delivery",
    description: "Deliver all files and provide technical support",
    details: ["All file formats", "High quality", "Technical support", "Quality guarantee"],
    duration: "1 day"
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
            How It Works
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: 'rgb(var(--color-text))'}}>
            Transparent creative process from idea to final result with quality guarantee at every stage
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
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 btn-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{step.stepNumber}</span>
                        </div>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300" style={{backgroundColor: 'rgba(var(--color-bg), 0.5)'}}>
                          <IconComponent className="h-5 w-5" style={{color: 'rgb(var(--color-text))'}} />
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium" style={{color: 'rgb(var(--color-text))'}}>{step.duration}</span>
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
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{backgroundColor: 'rgb(var(--color-border))'}}></div>
                            <span className="text-sm" style={{color: 'rgb(var(--color-text))'}}>{detail}</span>
                          </li>
                        ))}
                      </ul>
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
