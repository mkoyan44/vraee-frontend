'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Hash, Calculator, User, Eye, CheckCircle, Send, Cpu, Zap,
  Shield, Award, Clock, Star, Target, Rocket, Users, Settings,
  Search, FileCheck, Heart, Trophy, Lightbulb, Layers, Gem, Crown,
  Phone, Mail, MessageSquare, ArrowRight, CheckCircle2
} from 'lucide-react';

interface Step {
  stepNumber: number;
  icon: React.ElementType;
  title: string;
  description: string;
  cta: string;
  link?: string;
  details?: string[];
  duration?: string;
  status?: 'completed' | 'current' | 'upcoming';
  expandedDetails?: {
    process: string;
    deliverables: string[];
    qualityChecks: string[];
    clientInvolvement: string;
  };
}

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  avatar?: string;
}

interface Technology {
  name: string;
  category: string;
  description: string;
  icon: React.ElementType;
  proficiency: number;
}

const technologies: Technology[] = [
  { name: "Cinema 4D", category: "3D Modeling", description: "Industry-standard for jewelry CAD modeling", icon: Crown, proficiency: 95 },
  { name: "Rhino 3D", category: "CAD Design", description: "Precision jewelry design and pattern making", icon: Target, proficiency: 100 },
  { name: "ZBrush", category: "Sculpting", description: "Organic forms and detailed surface modeling", icon: Layers, proficiency: 90 },
  { name: "Blender", category: "Rendering", description: "Photorealistic rendering and animation", icon: Zap, proficiency: 85 },
  { name: "Adobe Suite", category: "Post-Production", description: "Image editing and composition", icon: Gem, proficiency: 100 },
];

const team: TeamMember[] = [
  {
    name: "Elena Rodriguez",
    role: "Senior CAD Designer",
    experience: "8+ years",
    specialties: ["Luxury Jewelry CAD", "Goldsmith Precision", "Complex Mechanisms"]
  },
  {
    name: "Marcus Chen",
    role: "Lead Renderer",
    experience: "10+ years",
    specialties: ["Photorealistic Rendering", "Material Science", "Lighting Design"]
  },
  {
    name: "Sarah Williams",
    role: "Quality Assurance Lead",
    experience: "6+ years",
    specialties: ["Technical Validation", "Client Relations", "Process Optimization"]
  },
  {
    name: "David Kumar",
    role: "Animation Specialist",
    experience: "7+ years",
    specialties: ["360° Product Animation", "Motion Graphics", "Interactive Content"]
  }
];

const clientTestimonials = [
  {
    name: "Maria Garcia",
    company: "Luxury Rings Co.",
    testimonial: "The transparency was incredible. We could track our ring design from sketch to finished render in real-time. Every detail was perfect.",
    rating: 5,
    projectType: "Custom Engagement Rings",
    avatar: "MG"
  },
  {
    name: "James Wilson",
    company: "Wilson & Sons Jewelry",
    testimonial: "Their CAD modeling precision is unmatched. The files were production-ready and our casting came out exactly as designed.",
    rating: 5,
    projectType: "Wedding Collection",
    avatar: "JW"
  }
];

const clientJourneySteps: Step[] = [
  {
    stepNumber: 1,
    icon: User,
    title: "Account Creation & Profile Setup",
    description: "Create your professional account with our secure client portal. Set up your profile with company details, design preferences, and technical specifications for personalized service.",
    cta: "Create Account",
    duration: "5 minutes",
    details: ["Secure Account Setup", "Profile Customization", "Design Preferences", "Company Information"],
    expandedDetails: {
      process: "Complete registration with business details, design preferences, and technical requirements for a tailored experience.",
      deliverables: ["Personalized Client Portal", "Welcome Package", "Account Manager Assignment", "Initial Consultation Schedule"],
      qualityChecks: ["Profile Completeness", "Information Verification", "Security Setup"],
      clientInvolvement: "Self-service setup with guided assistance"
    }
  },
  {
    stepNumber: 2,
    icon: Hash,
    title: "Dynamic Project Submission",
    description: "Add unlimited projects through our intuitive project dashboard. Upload sketches, technical drawings, reference materials, and detailed specifications with ease.",
    cta: "Create New Project",
    duration: "10-30 minutes",
    details: ["Project Dashboard", "File Upload System", "Specification Forms", "Priority Assignment"],
    expandedDetails: {
      process: "Comprehensive project intake with automated validation and specialist matching.",
      deliverables: ["Project ID & Tracking Number", "Upload Confirmation", "Project Timeline", "Specialist Introduction"],
      qualityChecks: ["File Validation", "Specification Completeness", "Feasibility Check"],
      clientInvolvement: "Complete control with expert-guided submission"
    }
  },
  {
    stepNumber: 3,
    icon: Calculator,
    title: "Instant Quote Generation & Acceptance",
    description: "Receive automated quotes based on project complexity, timeline requirements, and service levels. Compare options and approve quotes instantly through your dashboard.",
    cta: "Get Instant Quote",
    duration: "15 minutes",
    details: ["Automated Pricing", "Timeline Options", "Service Level Comparison", "Instant Approval"],
    expandedDetails: {
      process: "AI-powered pricing with transparent cost breakdown and multiple service options.",
      deliverables: ["Detailed Quote Proposal", "Payment Terms", "Timeline Agreement", "Project Budget Breakdown"],
      qualityChecks: ["Price Accuracy", "Timeline Feasibility", "Service Level Alignment"],
      clientInvolvement: "Self-service quote comparison and approval"
    }
  },
  {
    stepNumber: 4,
    icon: Settings,
    title: "Portal Communication & Updates",
    description: "Receive instant notifications and track all communications. Use our built-in messaging system, file sharing, and collaborative tools for seamless interaction.",
    cta: "Access Communication Hub",
    duration: "Ongoing",
    details: ["Real-time Notifications", "Built-in Chat System", "File Sharing Portal", "Progress Dashboards"],
    expandedDetails: {
      process: "Centralized communication platform with automated updates and milestone tracking.",
      deliverables: ["Communication Dashboard", "Notification Preferences", "File Archive", "Progress Timeline"],
      qualityChecks: ["Communication Clarity", "Timeline Adherence", "Client Satisfaction"],
      clientInvolvement: "Active participation through portal interface"
    }
  },
  {
    stepNumber: 5,
    icon: Eye,
    title: "Live Progress Tracking",
    description: "Monitor every stage of your project in real-time. View 3D model progression, rendering stages, quality checks, and milestone completion with visual progress indicators.",
    cta: "Start Tracking",
    duration: "Ongoing",
    details: ["Live Progress Bars", "3D Model Previews", "Quality Check Status", "Timeline Alerts"],
    expandedDetails: {
      process: "Real-time project monitoring with automated status updates and milestone notifications.",
      deliverables: ["Live Dashboard", "Progress Visualizations", "Milestone Alerts", "Quality Assurance Previews"],
      qualityChecks: ["Progress Accuracy", "Timeline Compliance", "Quality Standards"],
      clientInvolvement: "24/7 access to live project status"
    }
  },
  {
    stepNumber: 6,
    icon: MessageSquare,
    title: "Collaborative Review Process",
    description: "Provide structured feedback through our review system. Comment directly on renders, request modifications, and approve work with our integrated collaboration tools.",
    cta: "Enter Review Mode",
    duration: "2-7 days",
    details: ["Structured Feedback", "Revision Requests", "Approval Workflows", "Change Tracking"],
    expandedDetails: {
      process: "Systematic review process with version control and change tracking for transparent collaboration.",
      deliverables: ["Feedback System", "Revision Tracker", "Approval History", "Final Decision Log"],
      qualityChecks: ["Client Satisfaction", "Requirement Adherence", "Quality Standards"],
      clientInvolvement: "Active feedback and decision-making participation"
    }
  },
  {
    stepNumber: 7,
    icon: Shield,
    title: "Quality Assurance Phase",
    description: "Witness every quality check in action. We provide verification reports, technical validations, and final compliance confirmations before delivery.",
    cta: "View Quality Report",
    duration: "1-2 days",
    details: ["Technical Validation", "Manufacturing Checks", "File Format Testing", "Quality Certifications"],
    expandedDetails: {
      process: "Comprehensive quality assurance with detailed reporting and compliance verification.",
      deliverables: ["Quality Assurance Report", "Technical Specifications", "Compliance Certificate", "Manufacturing Guidelines"],
      qualityChecks: ["File Integrity", "Manufacturing Compatibility", "Technical Accuracy", "Client Requirements"],
      clientInvolvement: "Review and approve all quality validations"
    }
  },
  {
    stepNumber: 8,
    icon: Send,
    title: "Secure File Delivery & Archive",
    description: "Receive all files through secure download links. Access your complete project archive, download history, and organize files with our intelligent file management system.",
    cta: "Download Files",
    duration: "Immediate",
    details: ["Secure Downloads", "File Organization", "Archive Access", "Download History"],
    expandedDetails: {
      process: "Secure file delivery with organized archive system and lifetime access guarantees.",
      deliverables: ["Complete File Package", "Download Links", "Archive Access", "File Organization System"],
      qualityChecks: ["File Integrity", "Download Security", "Access Permissions", "Backup Verification"],
      clientInvolvement: "Secure self-service downloads and archive management"
    }
  },
  {
    stepNumber: 9,
    icon: Trophy,
    title: "Post-Project Analytics & Insights",
    description: "Access detailed project analytics, performance metrics, and success insights. Review timeline data, quality scores, and recommendations for future projects.",
    cta: "View Project Analytics",
    duration: "Available anytime",
    details: ["Performance Metrics", "Timeline Analysis", "Quality Scores", "Future Recommendations"],
    expandedDetails: {
      process: "Post-project analysis with actionable insights and performance optimization recommendations.",
      deliverables: ["Performance Report", "Timeline Analysis", "Quality Metrics", "Future Recommendations"],
      qualityChecks: ["Data Accuracy", "Analysis Completeness", "Insights Value"],
      clientInvolvement: "Access insights for continuous improvement"
    }
  },
  {
    stepNumber: 10,
    icon: Heart,
    title: "Loyalty Program & Future Discounts",
    description: "Earn loyalty points for each completed project. Access priority booking, discounted rates, and exclusive early access to new features as a valued client.",
    cta: "View Loyalty Benefits",
    duration: "Ongoing",
    details: ["Loyalty Points", "Priority Booking", "Discounted Rates", "Exclusive Features"],
    expandedDetails: {
      process: "Automated loyalty program with points accumulation and rewards redemption.",
      deliverables: ["Loyalty Dashboard", "Points Balance", "Available Rewards", "Priority Access"],
      qualityChecks: ["Point Accuracy", "Reward Availability", "Service Improvement"],
      clientInvolvement: "Points accumulation through continued partnership"
    }
  }
];

const HowItWorksDetailed: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [progressPercentage, setProgressPercentage] = useState(0);

  // Animate progress bar
  useEffect(() => {
    const timer = setInterval(() => {
      setProgressPercentage(prev => {
        if (prev >= 85) return prev;
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const toggleStepExpansion = (stepNumber: number) => {
    setActiveStep(activeStep === stepNumber ? null : stepNumber);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 btn-primary text-white rounded-full text-sm font-medium mb-6">
              <Trophy className="h-5 w-5" />
              Complete Client Experience & Order Tracking
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Project Journey Made Transparent
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{color: 'rgb(var(--color-text))'}}>
              Experience our professional client portal where progress is transparent, communication is instant, and every project detail is tracked in real-time.
              From account creation to final delivery - complete control and full visibility.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-1">5000+</div>
                <div className="text-sm" style={{color: 'rgb(var(--color-text))'}}>Active Projects</div>
                <div className="text-xs mt-1 opacity-75">Tracked in Real-Time</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-1">99.8%</div>
                <div className="text-sm" style={{color: 'rgb(var(--color-text))'}}>On-Time Delivery</div>
                <div className="text-xs mt-1 opacity-75">Satisfaction Rate</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
                <div className="text-sm" style={{color: 'rgb(var(--color-text))'}}>Portal Access</div>
                <div className="text-xs mt-1 opacity-75">Track Any Time</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-1">∞</div>
                <div className="text-sm" style={{color: 'rgb(var(--color-text))'}}>Updates</div>
                <div className="text-xs mt-1 opacity-75">Real-Time Notifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 px-4 background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'rgb(var(--color-title))'}}>
              Our 12-Step Excellence Process
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: 'rgb(var(--color-text))'}}>
              Every project follows our proven methodology, ensuring consistent quality and predictable results.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium" style={{color: 'rgb(var(--color-text))'}}>Process Mastery</span>
              <span className="text-sm font-medium" style={{color: 'rgb(var(--color-text))'}}>{progressPercentage}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 px-4 background">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {clientJourneySteps.map((step, index) => {
              const IconComponent = step.icon;
              const isExpanded = activeStep === step.stepNumber;

              return (
                <Card key={step.stepNumber} className="hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => toggleStepExpansion(step.stepNumber)}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-2">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold" style={{color: 'rgb(var(--color-title))'}}>{step.stepNumber}</div>
                          <div className="text-xs" style={{color: 'rgb(var(--color-text))'}}>{step.duration}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2" style={{color: 'rgb(var(--color-title))'}}>
                            {step.title}
                          </h3>
                          <p className="leading-relaxed" style={{color: 'rgb(var(--color-text))'}}>
                            {step.description}
                          </p>
                        </div>

                        {/* Quick Details */}
                        {step.details && (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-sm" style={{color: 'rgb(var(--color-text))'}}>{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* CTA */}
                        <div className="pt-2">
                          <button className="btn-simple text-sm">
                            {step.cta}
                          </button>
                        </div>

                        {/* Expanded Details */}
                        {isExpanded && step.expandedDetails && (
                          <div className="mt-6 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                            <h4 className="font-semibold mb-3" style={{color: 'rgb(var(--color-title))'}}>Detailed Process:</h4>
                            <p className="text-sm mb-4" style={{color: 'rgb(var(--color-text))'}}>{step.expandedDetails.process}</p>

                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                              <div>
                                <h5 className="font-medium text-sm mb-2">Deliverables</h5>
                                <ul className="text-xs space-y-1">
                                  {step.expandedDetails.deliverables.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                      <CheckCircle className="h-3 w-3 text-green-500" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium text-sm mb-2">Quality Checks</h5>
                                <ul className="text-xs space-y-1">
                                  {step.expandedDetails.qualityChecks.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                      <Shield className="h-3 w-3 text-blue-500" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium text-sm mb-2">Client Involvement</h5>
                                <p className="text-xs" style={{color: 'rgb(var(--color-text))'}}>
                                  {step.expandedDetails.clientInvolvement}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Expand Indicator */}
                      <div className="flex-shrink-0 self-start mt-2">
                        <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology & Expertise */}
      <section className="py-16 px-4 background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'rgb(var(--color-title))'}}>
              Technology & Mastery
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: 'rgb(var(--color-text))'}}>
              Our team combines cutting-edge technology with decades of jewelry industry expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <Card key={tech.name} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-1" style={{color: 'rgb(var(--color-title))'}}>{tech.name}</h3>
                        <p className="text-sm text-blue-600 mb-2">{tech.category}</p>
                        <p className="text-sm mb-3" style={{color: 'rgb(var(--color-text))'}}>{tech.description}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                            style={{ width: `${tech.proficiency}%` }}
                          ></div>
                        </div>
                        <p className="text-xs mt-1 text-right">{tech.proficiency}% Proficiency</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'rgb(var(--color-title))'}}>
              Meet the Masters Behind Your Jewelry
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: 'rgb(var(--color-text))'}}>
              Our specialists bring deep jewelry industry knowledge combined with artistic vision and technical precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1" style={{color: 'rgb(var(--color-title))'}}>{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                      <p className="text-sm text-gray-600 mb-3">{member.experience} Experience</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty) => (
                          <span key={specialty} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-4 background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'rgb(var(--color-title))'}}>
              Client Experiences & Success Stories
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: 'rgb(var(--color-text))'}}>
              Real feedback from jewelry designers and manufacturers who've experienced our process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clientTestimonials.map((testimonial) => (
              <Card key={testimonial.name} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold" style={{color: 'rgb(var(--color-title))'}}>{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                      <p className="text-xs text-blue-600">{testimonial.projectType}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="italic" style={{color: 'rgb(var(--color-text))'}}>
                    "{testimonial.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 px-4 background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'rgb(var(--color-title))'}}>
              Quality Assurance Excellence
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: 'rgb(var(--color-text))'}}>
              Every project goes through rigorous quality control to ensure perfection in every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Shield className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{color: 'rgb(var(--color-title))'}}>Technical Validation</h3>
                <p style={{color: 'rgb(var(--color-text))'}}>
                  Every file undergoes technical checks for manufacturing compatibility, dimension accuracy, and material specifications.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Eye className="h-16 w-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{color: 'rgb(var(--color-title))'}}>Visual Perfection</h3>
                <p style={{color: 'rgb(var(--color-text))'}}>
                  Professional review of lighting, materials, composition, and overall visual impact before client delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{color: 'rgb(var(--color-title))'}}>Final Compliance</h3>
                <p style={{color: 'rgb(var(--color-text))'}}>
                  Verification against original requirements, quality standards, and delivery specifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process FAQ */}
      <section className="py-16 px-4 background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'rgb(var(--color-title))'}}>
              Process Questions & Answers
            </h2>
            <p className="text-lg" style={{color: 'rgb(var(--color-text))'}}>
              Everything you need to know about our workflow and collaboration.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does the entire process typically take?",
                answer: "Most projects complete in 3-5 business days from consultation to delivery. Simple pieces can be done in 2 days, complex collections may take up to 10 days."
              },
              {
                question: "What file formats do you deliver?",
                answer: "We provide CAD files in native formats (.3dm, .c4d), production-ready formats (.obj, .stl, .iges), and high-resolution renders (PSD, PNG, JPEG)."
              },
              {
                question: "Can I make changes during the process?",
                answer: "Absolutely! We encourage and welcome feedback throughout. Changes are unlimited during the review phase, with no additional cost for reasonable adjustments."
              },
              {
                question: "Do you provide manufacturing support?",
                answer: "Yes, our CAD files are optimized for 3D printing, CNC machining, and lost-wax casting. We can consult on manufacturability and material choices."
              },
              {
                question: "What if I'm not satisfied with the final result?",
                answer: "Your satisfaction is guaranteed. We'll work with you until everything is perfect, or provide a full refund if we cannot meet your requirements."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2" style={{color: 'rgb(var(--color-title))'}}>{faq.question}</h3>
                  <p style={{color: 'rgb(var(--color-text))'}}>{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'rgb(var(--color-title))'}}>
              Why Choose Render Agency for Your 3D Jewelry Needs
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: 'rgb(var(--color-text))'}}>
              What sets us apart from other 3D rendering services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Jewelry Industry Specialists",
                description: "14+ years of exclusive focus on jewelry 3D modeling and rendering."
              },
              {
                icon: Clock,
                title: "Lightning-Fast Turnaround",
                description: "Average 3.5-day delivery with 99.8% on-time performance record."
              },
              {
                icon: Heart,
                title: "Client-Centric Approach",
                description: "Your success is our priority. We work until you're completely satisfied."
              },
              {
                icon: Lightbulb,
                title: "Innovation Leaders",
                description: "Continuous investment in latest technology and techniques."
              },
              {
                icon: Shield,
                title: "Quality Guaranteed",
                description: "Every file validated for manufacturing compatibility and precision."
              },
              {
                icon: Users,
                title: "Dedicated Support Team",
                description: "Direct access to specialists who understand your specific needs."
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <IconComponent className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2" style={{color: 'rgb(var(--color-title))'}}>{item.title}</h3>
                    <p className="text-sm" style={{color: 'rgb(var(--color-text))'}}>{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Call to Action for Detailed Page */}
      <section className="py-20 px-4 background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'rgb(var(--color-title))'}}>
              Ready to Experience Our Process?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8" style={{color: 'rgb(var(--color-text))'}}>
              Join thousands of jewelry professionals who've discovered the difference our expertise makes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-sm mb-4" style={{color: 'rgb(var(--color-text))'}}>Speak directly with our specialists</p>
                <button className="btn-simple w-full">
                  +1 (555) 123-4567
                </button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-sm mb-4" style={{color: 'rgb(var(--color-text))'}}>Get detailed project consultation</p>
                <button className="btn-simple w-full">
                  hello@renderagency.com
                </button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <MessageSquare className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Live Chat</h3>
                <p className="text-sm mb-4" style={{color: 'rgb(var(--color-text))'}}>Instant answers to your questions</p>
                <button className="btn-simple w-full">
                  Start Chat
                </button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-4" style={{color: 'rgb(var(--color-title))'}}>
              Get Your Free Process Consultation
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{color: 'rgb(var(--color-text))'}}>
              Discover how our 12-step process can transform your jewelry designs into stunning visuals that drive sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Start Free Consultation
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                View Sample Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksDetailed;
