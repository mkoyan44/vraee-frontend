import React from 'react';
import { Hash, Calculator, User, Eye, CheckCircle, Send } from 'lucide-react';
import styles from '@/assets/styles/client/components/how-it-works.module.scss';
import HowItWorksCTA from './how-it-works-cta';

interface Step {
  stepNumber: number;
  icon: React.ElementType;
  iconColor: string;
  title: string;
  description: string;
  details?: string[];
}

const steps: Step[] = [
  {
    stepNumber: 1,
    icon: Hash,
    iconColor: '#0d9488',
    title: "Share Your Jewelry Vision",
    description: "Upload your jewelry sketches, technical drawings, or reference photos. Describe your design vision, metal type, gemstones, and any specific requirements. Our expert team understands jewelry nuances.",
    details: ["Sketch Upload", "Design Consultation", "Confidentiality Guarantee", "Jewelry Expertise"]
  },
  {
    stepNumber: 2,
    icon: Calculator,
    iconColor: '#6366f1',
    title: "Custom Jewelry Pricing & Timeline",
    description: "Receive instant pricing based on jewelry complexity, metal finish accuracy, and rendering requirements. Our transparent calculator shows exactly what you pay for jewelry CAD and 3D visualization.",
    details: ["Jewelry-Specific Calculator", "Metal & Gemstone Pricing", "Fixed Price Guarantee", "No Hidden Costs"]
  },
  {
    stepNumber: 3,
    icon: User,
    iconColor: '#2563eb',
    title: "Dedicated Jewelry CAD Specialist",
    description: "Your project gets assigned to a dedicated jewelry 3D expert. You gain immediate access to your personal Client Portal with real-time tracking of your CAD modeling and rendering progress.",
    details: ["Jewelry CAD Expert", "Personal Portal Access", "24/7 Project Tracking", "Secure File Management"]
  },
  {
    stepNumber: 4,
    icon: Eye,
    iconColor: '#7c3aed',
    title: "Live Jewelry 3D Modeling Process",
    description: "Watch your jewelry come to life! Track ring modeling, bracelet fabrication, necklace design, or pendant creation in real-time. We provide milestone previews for your feedback.",
    details: ["Live CAD Progress", "Milestone Previews", "Jewelry Design Tracking", "Quality Assurance Check"]
  },
  {
    stepNumber: 5,
    icon: CheckCircle,
    iconColor: '#059669',
    title: "Jewelry Client Collaboration",
    description: "Comment directly on 3D renders using our embedded review system. Adjust metal finishes, gemstone placements, or request customizations. Our jewelry experts respond within 2 hours.",
    details: ["Embedded Jewelry Reviews", "Material Customization", "Expert Consultations", "Quick Revisions"]
  },
  {
    stepNumber: 6,
    icon: Send,
    iconColor: '#d97706',
    title: "E-commerce Jewelry Delivery",
    description: "Receive production-ready jewelry CAD files optimized for manufacturing, plus photorealistic renderings perfect for online stores. All files delivered with lifetime support guarantee.",
    details: ["Production CAD Files", "E-commerce Ready Images", "Manufacturing Optimized", "Lifetime Support"]
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className={styles.how_it_works} aria-label="How it works">
      <div className="container">
        <header className={styles.header}>
          <span className={styles.section_label}>How it works</span>
          <h2 className={styles.section_title}>
            Our Transparent Workflow: From Concept to E-commerce Visuals
          </h2>
          <p className={styles.section_desc}>
            Jewelry 3D rendering workflow, custom jewelry CAD service process, e-commerce rendering process featuring transparent pricing, real-time tracking, and guaranteed delivery.
          </p>
        </header>

        <div className={styles.steps_wrap}>
          <div className={styles.timeline_line} aria-hidden="true" />

          <div className={styles.steps_grid}>
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <React.Fragment key={step.stepNumber}>
                  <div className={styles.step_card}>
                    <div
                      className={styles.step_badge}
                      style={{
                        color: step.iconColor,
                        backgroundColor: `${step.iconColor}12`,
                        borderColor: `${step.iconColor}35`,
                      }}
                    >
                      <IconComponent className={styles.step_icon} aria-hidden />
                    </div>
                    <h3 className={styles.step_title}>{step.title}</h3>
                    <p className={styles.step_description}>{step.description}</p>
                    {step.details && step.details.length > 0 && (
                      <ul className={styles.step_details}>
                        {step.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={styles.step_connector} aria-hidden="true" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <HowItWorksCTA />
      </div>
    </section>
  );
};

export default HowItWorks;
