'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  User, Shield, Settings, Hash, Eye, Trophy, Clock, 
  MessageSquare, Send, FileText, CheckCircle2, ArrowRight,
  TrendingUp, Search, Package
} from 'lucide-react';
import Icon from "@/components/icon/icon";
import styles from "@/assets/styles/client/components/faq.module.scss";

interface Step {
  stepNumber: number;
  icon: React.ElementType;
  title: string;
  description: string;
  cta: string;
  link?: string;
  details?: string[];
}

// Map step icons to their colors
const getStepIconColor = (stepNumber: number): { bg: string; icon: string } => {
  const colorMap: Record<number, { bg: string; icon: string }> = {
    1: { bg: 'rgba(16, 185, 129, 0.25)', icon: '#047857' },      // Green - User (darker for contrast)
    2: { bg: 'rgba(59, 130, 246, 0.25)', icon: '#1E40AF' },      // Blue - Shield (darker for contrast)
    3: { bg: 'rgba(139, 92, 246, 0.25)', icon: '#6D28D9' },      // Purple - Settings (darker for contrast)
    4: { bg: 'rgba(245, 158, 11, 0.25)', icon: '#B45309' },      // Amber - Hash (darker for contrast)
    5: { bg: 'rgba(236, 72, 153, 0.25)', icon: '#BE185D' },      // Pink - Eye (darker for contrast)
    6: { bg: 'rgba(239, 68, 68, 0.25)', icon: '#B91C1C' },       // Red - Trophy (darker for contrast)
    7: { bg: 'rgba(99, 102, 241, 0.25)', icon: '#4338CA' },      // Indigo - Clock (darker for contrast)
    8: { bg: 'rgba(251, 146, 60, 0.25)', icon: '#C2410C' },      // Orange - MessageSquare (darker for contrast)
    9: { bg: 'rgba(34, 197, 94, 0.25)', icon: '#047857' },       // Green - Send (darker for contrast)
    10: { bg: 'rgba(168, 85, 247, 0.25)', icon: '#6D28D9' },     // Purple - FileText (darker for contrast)
  };
  
  return colorMap[stepNumber] || { bg: 'rgba(var(--btn-primary-bg), 0.2)', icon: 'rgb(var(--btn-primary-bg))' };
};

const clientJourneySteps: Step[] = [
  {
    stepNumber: 1,
    icon: User,
    title: "Request Account Access",
    description: "Fill out our comprehensive registration form with your business details, company information, and service preferences. All information is collected upfront for a streamlined experience.",
    cta: "Request Access",
    link: "/register",
    details: ["Business Information", "Company Details", "Service Preferences", "Project Volume"]
  },
  {
    stepNumber: 2,
    icon: Shield,
    title: "Admin Review & Approval",
    description: "Our team reviews your application to ensure quality service delivery. You'll receive an email notification once your account is approved, typically within 24 hours.",
    cta: "Check Status",
    link: "/login",
    details: ["Application Review", "Quality Check", "Account Approval", "Email Notification"]
  },
  {
    stepNumber: 3,
    icon: Settings,
    title: "Access Your Client Portal",
    description: "Log in to your personalized dashboard where you can view all your projects, track progress, analyze performance metrics, and manage your account settings.",
    cta: "Sign In",
    link: "/login",
    details: ["Dashboard Overview", "Project List", "Analytics View", "Account Settings"]
  },
  {
    stepNumber: 4,
    icon: Hash,
    title: "Create Your First Project",
    description: "Click 'Create Project' to start a new service request. Select your service type (3D CAD Modeling or 3D Rendering & Animation), choose specific service details, add project name and description, and upload reference files.",
    cta: "Create Project",
    link: "/app/projects",
    details: ["Service Type Selection", "Service Detail Choice", "Project Information", "File Upload"]
  },
  {
    stepNumber: 5,
    icon: Eye,
    title: "Track Project Status & Progress",
    description: "Monitor your project's real-time status through 27 different stages. View progress percentages, status badges, and detailed project information in your dashboard or profile page.",
    cta: "View Projects",
    link: "/app/profile#projects",
    details: ["Status Tracking", "Progress Bars", "Project Categories", "Timeline View"]
  },
  {
    stepNumber: 6,
    icon: Trophy,
    title: "Analyze Project Data & Performance",
    description: "Use your dashboard analytics to view total projects, completed vs active projects, average delivery times, quality scores, and project history. Filter and search projects by status or service type.",
    cta: "View Analytics",
    link: "/app/projects",
    details: ["Project Statistics", "Performance Metrics", "Filter & Search", "Project History"]
  },
  {
    stepNumber: 7,
    icon: Clock,
    title: "Monitor Progress & Milestones",
    description: "Watch your project progress through each stage with visual progress bars. Receive updates when projects reach key milestones like CAD_MODEL_AWAITING_APPROVAL or DRAFT_RENDER_AWAITING_APPROVAL.",
    cta: "Track Progress",
    link: "/app/profile#projects",
    details: ["Progress Bars", "Milestone Alerts", "Status Notifications", "Timeline Tracking"]
  },
  {
    stepNumber: 8,
    icon: MessageSquare,
    title: "Review & Provide Feedback",
    description: "When your project reaches approval stages (CAD_MODEL_AWAITING_APPROVAL or DRAFT_RENDER_AWAITING_APPROVAL), review the work and provide feedback through the portal. Approve to continue or request revisions.",
    cta: "Review Project",
    link: "/app/profile#projects",
    details: ["Model Review", "Render Approval", "Feedback System", "Revision Requests"]
  },
  {
    stepNumber: 9,
    icon: Send,
    title: "Download Completed Files",
    description: "When your project status reaches READY_FOR_DOWNLOAD or COMPLETED, access and download all project files securely through your project page. Files remain available in your archive.",
    cta: "Download Files",
    link: "/app/profile#projects",
    details: ["Secure Downloads", "File Archive", "Project Files", "Download History"]
  },
  {
    stepNumber: 10,
    icon: FileText,
    title: "Access Project Archive & History",
    description: "View all your completed projects in one place. Access project history, download previous files, and reference past projects for future work. All projects remain accessible in your archive.",
    cta: "View Archive",
    link: "/app/profile#projects",
    details: ["Project Archive", "Download History", "Project References", "Historical Data"]
  }
];

const HowItWorksDetailed: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const faqRefs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  const toggleFaq = (id: number) => {
    if (openFaqId === id) {
      const el = faqRefs.current.get(id);
      if (el) {
        el.classList.remove(styles.active);
      }
      setOpenFaqId(null);
    } else {
      if (openFaqId !== null) {
        const prevEl = faqRefs.current.get(openFaqId);
        if (prevEl) {
          prevEl.classList.remove(styles.active);
        }
      }
      setOpenFaqId(id);
      const el = faqRefs.current.get(id);
      if (el) {
        requestAnimationFrame(() => {
          el.classList.add(styles.active);
        });
      }
    }
  };

  const faqs = [
    {
      id: 1,
      question: "How long does account approval take?",
      answer: "Our team reviews applications within 24 hours. You'll receive an email notification once your account is approved and can immediately start creating projects."
    },
    {
      id: 2,
      question: "How do I track my project progress?",
      answer: "Log in to your dashboard or profile page to see all projects. Each project shows a status badge, progress percentage, and is organized by category (Ready, In Progress, Pending, Completed). Click on any project to see detailed information."
    },
    {
      id: 3,
      question: "What project statuses should I know about?",
      answer: "Projects start as QUOTE_PENDING, then move through stages like AWAITING_PAYMENT, PREPARATION, CAD_MODEL_CREATION, CAD_MODEL_AWAITING_APPROVAL, and finally COMPLETED. Status badges are color-coded for easy identification."
    },
    {
      id: 4,
      question: "How can I analyze my project performance?",
      answer: "Your dashboard shows analytics including total projects, completed vs active breakdown, average delivery times, and quality scores. Use the filter and search features to find specific projects or analyze by service type."
    },
    {
      id: 5,
      question: "When can I download my project files?",
      answer: "Files become available for download when your project status reaches READY_FOR_DOWNLOAD or COMPLETED. Access downloads through your project page, and all files remain available in your archive."
    },
    {
      id: 6,
      question: "Can I create multiple projects?",
      answer: "Yes! You can create unlimited projects. Each project is tracked independently with its own status, progress, and timeline. Use the dashboard to manage all your projects in one place."
    }
  ];

  return (
    <div className="background min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: 'rgb(var(--color-title))' }}
          >
            Your Complete Client Journey
          </h1>
          <p 
            className="text-lg sm:text-xl max-w-3xl mx-auto"
            style={{ color: 'rgb(var(--color-text))', opacity: 0.9 }}
          >
            From requesting account access to tracking project completion - understand every step of working with Vraee Jewelry Studio.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {clientJourneySteps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div
                key={step.stepNumber}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    {(() => {
                      const iconColor = getStepIconColor(step.stepNumber);
                      return (
                        <div 
                          className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: iconColor.bg }}
                        >
                          <IconComponent 
                            className="w-8 h-8" 
                            style={{ color: iconColor.icon }} 
                          />
                        </div>
                      );
                    })()}
                    {(() => {
                      const iconColor = getStepIconColor(step.stepNumber);
                      return (
                        <div 
                          className="text-sm font-medium px-3 py-1 rounded"
                          style={{ 
                            backgroundColor: iconColor.bg,
                            color: iconColor.icon
                          }}
                        >
                          Step {step.stepNumber} of {clientJourneySteps.length}
                        </div>
                      );
                    })()}
                  </div>
                  
                  <h2 
                    className="text-3xl sm:text-4xl font-serif font-bold mb-4"
                    style={{ color: 'rgb(var(--color-title))' }}
                  >
                    {step.title}
                  </h2>
                  
                  <p 
                    className="text-base sm:text-lg mb-6 leading-relaxed"
                    style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                  >
                    {step.description}
                  </p>
                  
                  {/* Details List */}
                  {step.details && (
                    <div className="space-y-2 mb-6">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <CheckCircle2 
                            className="w-5 h-5 flex-shrink-0" 
                            style={{ color: 'rgb(var(--btn-primary-bg))' }} 
                          />
                          <span 
                            className="text-sm"
                            style={{ color: 'rgb(var(--color-text))' }}
                          >
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA Button */}
                  {step.link ? (
                    <Link 
                      href={step.link} 
                      className="btn-primary inline-block"
                      aria-label={`${step.cta} - ${step.title}`}
                    >
                      {step.cta}
                    </Link>
                  ) : (
                    <button className="btn-primary">
                      {step.cta}
                    </button>
                  )}
                </div>

                {/* Visual/Icon Section */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {(() => {
                    const iconColor = getStepIconColor(step.stepNumber);
                    return (
                      <div 
                        className="w-full h-64 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: iconColor.bg }}
                      >
                        <IconComponent 
                          className="w-32 h-32 opacity-30" 
                          style={{ color: iconColor.icon }} 
                        />
                      </div>
                    );
                  })()}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How to Analyze Projects Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(var(--color-bg), 0.5)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: 'rgb(var(--color-title))' }}
            >
              How to Analyze & Track Your Projects
            </h2>
            <p 
              className="text-lg sm:text-xl max-w-3xl mx-auto"
              style={{ color: 'rgb(var(--color-text))', opacity: 0.9 }}
            >
              Your dashboard provides comprehensive tools to monitor, analyze, and manage all your projects in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              className="p-6 rounded-lg"
              style={{ backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))' }}
            >
              <TrendingUp 
                className="w-10 h-10 mb-4" 
                style={{ color: '#10B981' }} 
              />
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: 'rgb(var(--color-title))' }}
              >
                Dashboard Analytics
              </h3>
              <p 
                className="text-sm mb-4 leading-relaxed"
                style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
              >
                View comprehensive analytics including total projects, completed vs active breakdown, average delivery times, quality scores, and loyalty points.
              </p>
              <ul className="text-sm space-y-2" style={{ color: 'rgb(var(--color-text))' }}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Project statistics overview
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Performance metrics tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Quality score monitoring
                </li>
              </ul>
            </div>

            <div 
              className="p-6 rounded-lg"
              style={{ backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))' }}
            >
              <Search 
                className="w-10 h-10 mb-4" 
                style={{ color: '#3B82F6' }} 
              />
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: 'rgb(var(--color-title))' }}
              >
                Filter & Search
              </h3>
              <p 
                className="text-sm mb-4 leading-relaxed"
                style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
              >
                Quickly find projects using search by name or filter by status (Ready, In Progress, Pending, Completed) or service type.
              </p>
              <ul className="text-sm space-y-2" style={{ color: 'rgb(var(--color-text))' }}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Search by project name
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Filter by status category
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Filter by service type
                </li>
              </ul>
            </div>

            <div 
              className="p-6 rounded-lg"
              style={{ backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))' }}
            >
              <Package 
                className="w-10 h-10 mb-4" 
                style={{ color: '#8B5CF6' }} 
              />
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: 'rgb(var(--color-title))' }}
              >
                Project Categories
              </h3>
              <p 
                className="text-sm mb-4 leading-relaxed"
                style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
              >
                Projects are automatically organized into categories: Ready for Download, In Progress, Pending Approval, Completed, and Cancelled.
              </p>
              <ul className="text-sm space-y-2" style={{ color: 'rgb(var(--color-text))' }}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Automatic categorization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Status-based organization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Quick status overview
                </li>
              </ul>
            </div>

            <div 
              className="p-6 rounded-lg"
              style={{ backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))' }}
            >
              <Clock 
                className="w-10 h-10 mb-4" 
                style={{ color: '#F59E0B' }} 
              />
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: 'rgb(var(--color-title))' }}
              >
                Progress Tracking
              </h3>
              <p 
                className="text-sm mb-4 leading-relaxed"
                style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
              >
                Monitor real-time progress with visual progress bars showing completion percentage (0-100%) and current project status.
              </p>
              <ul className="text-sm space-y-2" style={{ color: 'rgb(var(--color-text))' }}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Visual progress bars
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Percentage completion
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Status updates
                </li>
              </ul>
            </div>

            <div 
              className="p-6 rounded-lg"
              style={{ backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))' }}
            >
              <Hash 
                className="w-10 h-10 mb-4" 
                style={{ color: '#EC4899' }} 
              />
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: 'rgb(var(--color-title))' }}
              >
                Status System
              </h3>
              <p 
                className="text-sm mb-4 leading-relaxed"
                style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
              >
                Projects move through 27 different status stages from QUOTE_PENDING to COMPLETED, with color-coded badges for easy identification.
              </p>
              <ul className="text-sm space-y-2" style={{ color: 'rgb(var(--color-text))' }}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  27 status stages
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Color-coded badges
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Clear status labels
                </li>
              </ul>
            </div>

            <div 
              className="p-6 rounded-lg"
              style={{ backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))' }}
            >
              <FileText 
                className="w-10 h-10 mb-4" 
                style={{ color: '#EF4444' }} 
              />
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: 'rgb(var(--color-title))' }}
              >
                Project Details
              </h3>
              <p 
                className="text-sm mb-4 leading-relaxed"
                style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
              >
                Access comprehensive project information including service type, project name, description, files, creation date, and estimated delivery.
              </p>
              <ul className="text-sm space-y-2" style={{ color: 'rgb(var(--color-text))' }}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Complete project info
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  File attachments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Timeline tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className="container">
          <h2 className={styles.title}>Process Questions & Answers</h2>
          <div className={styles.wrapper}>
            {faqs.map((faq) => (
              <div key={faq.id} className={`${styles.item} scheme-light-2 background`}>
                <h3
                  className={`${styles.item_title} h3 ${openFaqId === faq.id ? styles.active : ''}`}
                  onClick={() => toggleFaq(faq.id)}
                  style={{cursor: 'pointer'}}
                >
                  <span>{faq.question}</span>
                  <Icon icon="arrow_right"/>
                </h3>
                <div
                  ref={(el) => {
                    faqRefs.current.set(faq.id, el);
                  }}
                  className={styles.item_description}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksDetailed;
