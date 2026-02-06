"use client"
import React, { useState, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icon/icon";

// Service data
const services = [
  {
    id: 1,
    title: "Precision 3D CAD Modeling for Manufacturing",
    description: "We transform sketches into production-ready 3D files with perfect stone setting tolerances and shrinkage compensation.",
    techStack: ["MatrixGold", "Rhino 7", "Magics"],
    image: "/portfolio/rendring/White_Top_02323230000.jpg",
    cta: "Learn More About Precision 3D CAD Modeling",
    ctaLink: "/services/modeling",
    serviceLink: "/services/modeling"
  },
  {
    id: 2,
    title: "Organic Sculpting & High-Detail Artistry",
    description: "Digital sculpting for intricate organic forms, realistic figures, and bas-reliefs that traditional CAD cannot achieve.",
    techStack: ["ZBrush", "Blender"],
    image: "/portfolio/rendring/White_Side_00000.jpg",
    cta: "Learn More About Organic Sculpting",
    ctaLink: "/services/sculpting",
    serviceLink: "/services/sculpting"
  },
  {
    id: 3,
    title: "Photorealistic Rendering & Visualization",
    description: "Ultra-realistic 4K renders with physically accurate diamond dispersion and metal textures for e-commerce.",
    techStack: ["Cinema 4D", "After Effects", "Blender", "Octane"],
    image: "/portfolio/rendring/Yellow_Top_0000678860.jpg",
    cta: "Learn More About Photorealistic Rendering",
    ctaLink: "/services/rendering",
    serviceLink: "/services/rendering"
  }
];

// FAQ data
const faqs = [
  {
    id: 1,
    question: "Do you provide .3dm files?",
    answer: "Yes, we provide production-ready files in all major 3D formats including .3dm (Rhino), STL, OBJ, FBX, and GLTF. For jewelry manufacturing, we provide specialized CAD formats compatible with CNC machines, 3D printers, and casting systems."
  },
  {
    id: 2,
    question: "What is the turnaround time?",
    answer: "Simple ring or pendant models are completed within 24-48 hours. Complex pieces with intricate settings or multiple gemstones take 3-5 business days. We provide milestone previews and your dedicated CAD specialist keeps you updated throughout the process."
  },
  {
    id: 3,
    question: "Do you handle rendering and photorealistic visualization?",
    answer: "Yes! We specialize in high-quality e-commerce jewelry photography and photorealistic renderings. Using advanced materials simulation, studio lighting setups, and professional camera angles, we create marketplace-ready images that convert browsers to buyers. Each product comes with 3-8 angle views."
  },
  {
    id: 4,
    question: "What if I need revisions to my jewelry model?",
    answer: "We offer unlimited revisions during the design approval phase. Our collaborative platform allows you to provide detailed feedback directly on the 3D model. Each round of revisions is included in our transparent pricing, and our jewelry experts typically respond within 2 hours."
  },
  {
    id: 5,
    question: "Do you provide custom jewelry design services?",
    answer: "Absolutely! Our expert jewelry CAD specialists not only create 3D models from your sketches but also provide creative design consultation. We can develop unique concepts, optimize designs for manufacturing, and suggest improvements. Every project includes professional design advice at no extra cost."
  }
];

// Map technology names to their route paths
const getTechRoute = (techName: string): string | null => {
  const routeMap: Record<string, string> = {
    "Blender": "/blender",
    "ZBrush": "/zbrush",
    "Rhino 7": "/programs-we-use#cad-engineering",
    "MatrixGold": "/programs-we-use#cad-engineering",
    "Cinema 4D": "/programs-we-use#high-end-visualization",
    "After Effects": "/programs-we-use#high-end-visualization",
    "Magics": "/magics",
  };
  
  return routeMap[techName] || null;
};

// Map technology names to their colors
const getTechColor = (techName: string): { bg: string; text: string; border: string; hoverBg: string } => {
  const colorMap: Record<string, { bg: string; text: string; border: string; hoverBg: string }> = {
    "MatrixGold": {
      bg: "rgba(245, 158, 11, 0.25)", // Gold/Amber - increased opacity for better contrast
      text: "#B45309", // Darker amber for better contrast
      border: "rgba(245, 158, 11, 0.4)",
      hoverBg: "rgba(245, 158, 11, 0.35)"
    },
    "Rhino 7": {
      bg: "rgba(59, 130, 246, 0.25)", // Blue - increased opacity
      text: "#1E40AF", // Darker blue for better contrast
      border: "rgba(59, 130, 246, 0.4)",
      hoverBg: "rgba(59, 130, 246, 0.35)"
    },
    "Magics": {
      bg: "rgba(139, 92, 246, 0.25)", // Purple - increased opacity
      text: "#6D28D9", // Darker purple for better contrast
      border: "rgba(139, 92, 246, 0.4)",
      hoverBg: "rgba(139, 92, 246, 0.35)"
    },
    "ZBrush": {
      bg: "rgba(236, 72, 153, 0.25)", // Pink - increased opacity
      text: "#BE185D", // Darker pink for better contrast
      border: "rgba(236, 72, 153, 0.4)",
      hoverBg: "rgba(236, 72, 153, 0.35)"
    },
    "Blender": {
      bg: "rgba(16, 185, 129, 0.25)", // Green - increased opacity
      text: "#047857", // Darker green for better contrast
      border: "rgba(16, 185, 129, 0.4)",
      hoverBg: "rgba(16, 185, 129, 0.35)"
    },
    "Cinema 4D": {
      bg: "rgba(239, 68, 68, 0.25)", // Red - increased opacity
      text: "#B91C1C", // Darker red for better contrast
      border: "rgba(239, 68, 68, 0.4)",
      hoverBg: "rgba(239, 68, 68, 0.35)"
    },
    "After Effects": {
      bg: "rgba(99, 102, 241, 0.25)", // Indigo - increased opacity
      text: "#4338CA", // Darker indigo for better contrast
      border: "rgba(99, 102, 241, 0.4)",
      hoverBg: "rgba(99, 102, 241, 0.35)"
    },
    "Octane": {
      bg: "rgba(251, 146, 60, 0.25)", // Orange - increased opacity
      text: "#C2410C", // Darker orange for better contrast
      border: "rgba(251, 146, 60, 0.4)",
      hoverBg: "rgba(251, 146, 60, 0.35)"
    }
  };
  
  return colorMap[techName] || {
    bg: "rgba(var(--btn-primary-bg), 0.2)",
    text: "rgb(var(--btn-primary-bg))",
    border: "rgba(var(--btn-primary-bg), 0.3)",
    hoverBg: "rgba(var(--btn-primary-bg), 0.25)"
  };
};

const ServicesPage: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const refs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  const toggleFaq = (id: number) => {
    if (openFaqId === id) {
      const el = refs.current.get(id);
      if (el) {
        el.classList.remove('active');
      }
      setOpenFaqId(null);
    } else {
      if (openFaqId !== null) {
        const prevEl = refs.current.get(openFaqId);
        if (prevEl) {
          prevEl.classList.remove('active');
        }
      }
      setOpenFaqId(id);
      const el = refs.current.get(id);
      if (el) {
        requestAnimationFrame(() => {
          el.classList.add('active');
        });
      }
    }
  };

  return (
    <div className="background min-h-screen">
      {/* Header Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: 'rgb(var(--color-title))' }}
          >
            Professional 3D Jewelry Design, CAD Modeling & Rendering Services
          </h1>
          <p 
            className="text-lg sm:text-xl max-w-3xl mx-auto"
            style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
          >
            Your partner for manufacturing-ready files and high-end marketing visuals.
          </p>
        </div>
      </section>

      {/* Services Section - Alternating Grid Layout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 1; // Row 2, 4, etc. have image on left
            
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Link 
                    href={service.serviceLink || service.ctaLink}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <h2 
                      className="text-3xl sm:text-4xl font-serif font-bold mb-4 transition-all duration-200 hover:opacity-80 cursor-pointer"
                      style={{ color: 'rgb(var(--color-title))' }}
                    >
                      {service.title}
                    </h2>
                  </Link>
                  <p 
                    className="text-base sm:text-lg mb-6 leading-relaxed"
                    style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                  >
                    {service.description}
                  </p>
                  
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {service.techStack.map((tech, techIndex) => {
                        const techRoute = getTechRoute(tech);
                        const techColor = getTechColor(tech);
                        
                        const badgeStyle = {
                          backgroundColor: techColor.bg,
                          color: techColor.text,
                          border: `1px solid ${techColor.border}`,
                        };

                        if (techRoute) {
                          return (
                            <Link 
                              key={techIndex} 
                              href={techRoute}
                              className="inline-block transition-all duration-200 hover:scale-105"
                              aria-label={`Learn more about ${tech} software`}
                            >
                              <span
                                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium block"
                                style={badgeStyle}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = techColor.hoverBg;
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = techColor.bg;
                                }}
                              >
                                {tech}
                              </span>
                            </Link>
                          );
                        }

                        return (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium"
                            style={badgeStyle}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>

                  {/* CTA Button */}
                  <Link href={service.ctaLink} className="btn-primary inline-block">
                    {service.cta}
                  </Link>
                </div>

                {/* Image */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ 
              color: 'rgb(var(--color-title))',
              position: 'relative',
            }}
          >
            Frequently Asked Questions
            <span 
              className="block w-20 h-1 mx-auto mt-6 rounded"
              style={{
                background: 'linear-gradient(135deg, rgb(var(--btn-primary-bg)), rgba(var(--btn-primary-bg), 0.6))'
              }}
            />
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'rgba(var(--color-bg), 0.95)',
                  borderColor: openFaqId === faq.id 
                    ? 'rgba(var(--btn-primary-bg), 0.3)' 
                    : 'rgba(var(--color-border), 0.2)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  if (openFaqId !== faq.id) {
                    e.currentTarget.style.borderColor = 'rgba(var(--btn-primary-bg), 0.3)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openFaqId !== faq.id) {
                    e.currentTarget.style.borderColor = 'rgba(var(--color-border), 0.2)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                  }
                }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left p-8 transition-all duration-300"
                  style={{
                    color: 'rgb(var(--color-title))',
                    backgroundColor: openFaqId === faq.id 
                      ? 'rgba(var(--btn-primary-bg), 0.03)' 
                      : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (openFaqId !== faq.id) {
                      e.currentTarget.style.backgroundColor = 'rgba(var(--btn-primary-bg), 0.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (openFaqId !== faq.id) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  <Icon 
                    icon="arrow_right"
                    fill="rgb(var(--btn-primary-bg))"
                    className={`transition-all duration-400 flex-shrink-0 ${
                      openFaqId === faq.id ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <div
                  ref={(el) => {
                    refs.current.set(faq.id, el);
                  }}
                  className="overflow-hidden transition-all duration-600"
                  style={{
                    maxHeight: openFaqId === faq.id ? '800px' : '0',
                    opacity: openFaqId === faq.id ? 1 : 0,
                    padding: openFaqId === faq.id ? '0 2rem 2rem' : '0 2rem 0',
                    transform: openFaqId === faq.id ? 'translateY(0)' : 'translateY(-10px)',
                  }}
                >
                  <p 
                    className="leading-relaxed text-base"
                    style={{ 
                      color: 'rgb(var(--color-text))',
                      opacity: openFaqId === faq.id ? 0.9 : 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
