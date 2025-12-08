'use client';

import React, { useState, useRef, useEffect } from 'react';
import { submitContact } from '@/services/api';
import Icon from '@/components/icon/icon';
import Image from 'next/image';

const programs = [
  { name: "Blender", value: "blender", icon: "/software/blender.svg", category: "3D Modeling & Rendering" },
  { name: "Cinema 4D", value: "cinema-4d", icon: "/software/cinema-4d.svg", category: "Motion Graphics" },
  { name: "ZBrush", value: "zbrush", icon: "/software/zbrush.svg", category: "Digital Sculpting" },
  { name: "After Effects", value: "after-effects", icon: "/software/after-effects.svg", category: "Visual Effects" },
  { name: "Rhino", value: "rhino", icon: "/software/rhino.svg", category: "Technical Modeling" },
  { name: "Matrix (Proprietary)", value: "matrix", icon: "/software/matrix.svg", category: "Orchestration Platform" },
];

const budgetRanges = [
  { label: "Under $500", value: "under-500" },
  { label: "$500 - $1,000", value: "500-1000" },
  { label: "$1,000 - $2,500", value: "1000-2500" },
  { label: "$2,500 - $5,000", value: "2500-5000" },
  { label: "$5,000 - $10,000", value: "5000-10000" },
  { label: "Over $10,000", value: "over-10000" },
];

const timelineOptions = [
  { label: "ASAP", value: "asap" },
  { label: "1-2 weeks", value: "1-2-weeks" },
  { label: "2-4 weeks", value: "2-4-weeks" },
  { label: "1-2 months", value: "1-2-months" },
  { label: "Flexible", value: "flexible" },
];

const CustomProjectForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Project Type
    projectTypes: [] as string[],
    complexity: '',

    // Step 2: Software & Details
    software: [] as string[],
    budget: '',
    timeline: '',

    // Step 3: Contact Info
    name: '',
    email: '',
    phone: '',

    // Step 4: Project Details
    projectDescription: '',
    references: '',
    specialRequirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const totalSteps = 4;
  const progressPercent = (currentStep / totalSteps) * 100;

  // Validation for each step
  const getStepValidation = (step: number) => {
    switch (step) {
      case 1:
        return formData.projectTypes.length > 0 && formData.complexity;
      case 2:
        return formData.software.length > 0 && formData.budget && formData.timeline;
      case 3:
        return formData.name.trim() && formData.email.trim();
      case 4:
        return formData.projectDescription.trim();
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (getStepValidation(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear status message when user starts typing again
    if (submitStatus.message) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleMultiSelection = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? prev[field as keyof typeof prev].filter((item: string) => item !== value)
        : [...prev[field as keyof typeof prev], value],
    }));
  };

  const handleSelection = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation
    if (!getStepValidation(4)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete all required fields.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Format project types
      const selectedProjectTypes = formData.projectTypes.map(typeValue => {
        const typeMap: Record<string, string> = {
          '3d-modeling': '3D Modeling',
          'animation': 'Animation',
          'rendering': 'Rendering',
          'post-production': 'Post-Production',
        };
        return typeMap[typeValue] || typeValue;
      }).join(', ');

      // Format software selection
      const selectedSoftware = formData.software.map(softwareValue => {
        const selectedProgram = programs.find(p => p.value === softwareValue);
        return selectedProgram?.name || softwareValue;
      }).join(', ');

      const message = `🎯 CUSTOM PROJECT REQUEST - STEP BY STEP DETAILS

📋 PROJECT OVERVIEW:
• Types: ${selectedProjectTypes}
• Complexity: ${formData.complexity}

🛠️ TECHNICAL REQUIREMENTS:
• Preferred Software: ${selectedSoftware}
• Budget Range: ${budgetRanges.find(b => b.value === formData.budget)?.label || 'Not specified'}
• Timeline: ${timelineOptions.find(t => t.value === formData.timeline)?.label || 'Not specified'}

👤 CONTACT INFORMATION:
• Name: ${formData.name.trim()}
• Email: ${formData.email.trim()}
• Phone: ${formData.phone || 'Not provided'}

📝 PROJECT DESCRIPTION:
${formData.projectDescription.trim()}

🎨 REFERENCES & INSPIRATION:
${formData.references.trim() || 'No references provided'}

⚡ SPECIAL REQUIREMENTS:
${formData.specialRequirements.trim() || 'No special requirements'}

---
This request was submitted through the advanced multi-step form on the Programs & Technology page.`;

      await submitContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message,
      });

      setSubmitStatus({
        type: 'success',
        message: '🎉 Thank you! We\'ve received your detailed project request. Our technical team will review your requirements and provide a comprehensive proposal within 24 hours.',
      });

      // Reset form on success
      setFormData({
        projectTypes: [],
        complexity: '',
        software: [],
        budget: '',
        timeline: '',
        name: '',
        email: '',
        phone: '',
        projectDescription: '',
        references: '',
        specialRequirements: '',
      });

      setCurrentStep(1);
    } catch (error) {
      console.error('Error submitting custom project form:', error);
      setSubmitStatus({
        type: 'error',
        message: '❌ There was an error submitting your request. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1" style={{ color: 'rgb(var(--color-title))' }}>
                Project Types
              </h3>
              <p className="text-sm opacity-70" style={{ color: 'rgb(var(--color-text))' }}>
                Select all that apply
              </p>
            </div>

            {/* Project Type Selection - Multi-Select with Colorful Icons */}
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { value: '3d-modeling', label: '3D Modeling', icon: 'plus', color: 'bg-blue-500' },
                { value: 'animation', label: 'Animation', icon: 'play', color: 'bg-purple-500' },
                { value: 'rendering', label: 'Rendering', icon: 'star', color: 'bg-pink-500' },
                { value: 'post-production', label: 'Post-Production', icon: 'arrow_right', color: 'bg-green-500' },
              ].map((type) => {
                const isSelected = formData.projectTypes.includes(type.value);
                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => handleMultiSelection('projectTypes', type.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left relative overflow-hidden ${
                      isSelected
                        ? 'border-primary bg-primary/10 shadow-xl shadow-primary/20'
                        : 'border-gray-300 hover:border-primary/50 hover:bg-white/5 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center relative text-white shadow-lg ${
                        isSelected
                          ? 'bg-primary scale-110'
                          : `${type.color} hover:scale-105`
                      } transition-transform duration-200`}>
                        <Icon icon={type.icon as any} />
                        {isSelected && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                            <Icon icon="star" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-base" style={{ color: 'rgb(var(--color-title))' }}>
                          {type.label}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Project Types Summary */}
            {formData.projectTypes.length > 0 && (
              <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <div className="text-sm font-bold text-primary mb-2">Selected Project Types ({formData.projectTypes.length})</div>
                <div className="flex flex-wrap gap-2">
                  {formData.projectTypes.map((typeValue) => {
                    const type = [
                      { value: '3d-modeling', label: '3D Modeling' },
                      { value: 'animation', label: 'Animation' },
                      { value: 'rendering', label: 'Rendering' },
                      { value: 'post-production', label: 'Post-Production' },
                    ].find(t => t.value === typeValue);
                    return (
                      <span key={typeValue} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {type?.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Complexity Level */}
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4 text-center" style={{ color: 'rgb(var(--color-title))' }}>
                Project Complexity
              </h4>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { value: 'simple', label: 'Simple' },
                  { value: 'moderate', label: 'Moderate' },
                  { value: 'complex', label: 'Complex' },
                ].map((complexity) => (
                  <button
                    key={complexity.value}
                    type="button"
                    onClick={() => handleSelection('complexity', complexity.value)}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                      formData.complexity === complexity.value
                        ? 'border-secondary bg-secondary/10'
                        : 'border-gray-300 hover:border-secondary/50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-bold" style={{ color: 'rgb(var(--color-title))' }}>
                        {complexity.label}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1" style={{ color: 'rgb(var(--color-title))' }}>
                Software Selection
              </h3>
              <p className="text-sm opacity-70" style={{ color: 'rgb(var(--color-text))' }}>
                Select multiple tools for your project
              </p>
            </div>

            {/* Software Selection - Multi-Select */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {programs.map((program) => {
                const isSelected = formData.software.includes(program.value);
                return (
                  <button
                    key={program.value}
                    type="button"
                    onClick={() => handleMultiSelection('software', program.value)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 relative ${
                      isSelected
                        ? 'border-primary bg-primary/10 shadow-lg'
                        : 'border-gray-300 hover:border-primary/50 hover:bg-white/5'
                    }`}
                  >
                    <div className="text-center">
                      <Image
                        src={program.icon}
                        alt={program.name}
                        width={40}
                        height={40}
                        className="mx-auto mb-2 opacity-80"
                      />
                      <div className="font-bold text-sm mb-1" style={{ color: 'rgb(var(--color-title))' }}>
                        {program.name}
                      </div>
                      <div className="text-xs opacity-50">{program.category}</div>
                      {isSelected && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <Icon icon="star" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Software Summary */}
            {formData.software.length > 0 && (
              <div className="mt-3 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="text-sm font-bold text-primary mb-2">Selected ({formData.software.length})</div>
                <div className="flex flex-wrap gap-1.5">
                  {formData.software.map((softwareValue) => {
                    const software = programs.find(p => p.value === softwareValue);
                    return (
                      <span key={softwareValue} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {software?.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Budget & Timeline */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-base font-bold mb-3" style={{ color: 'rgb(var(--color-title))' }}>
                  Budget Range
                </h4>
                <div className="space-y-1.5">
                  {budgetRanges.map((range) => (
                    <button
                      key={range.value}
                      type="button"
                      onClick={() => handleSelection('budget', range.value)}
                      className={`w-full p-2.5 rounded border text-left transition-all duration-200 text-sm ${
                        formData.budget === range.value
                          ? 'border-green-400 bg-green-50 text-green-800'
                          : 'border-gray-300 hover:border-green-300'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold mb-3" style={{ color: 'rgb(var(--color-title))' }}>
                  Timeline
                </h4>
                <div className="space-y-1.5">
                  {timelineOptions.map((timeline) => (
                    <button
                      key={timeline.value}
                      type="button"
                      onClick={() => handleSelection('timeline', timeline.value)}
                      className={`w-full p-2.5 rounded border text-left transition-all duration-200 text-sm ${
                        formData.timeline === timeline.value
                          ? 'border-blue-400 bg-blue-50 text-blue-800'
                          : 'border-gray-300 hover:border-blue-300'
                      }`}
                    >
                      {timeline.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1" style={{ color: 'rgb(var(--color-title))' }}>
                Contact Info
              </h3>
            </div>

            {/* Contact Form */}
            <div className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1" style={{ color: 'rgb(var(--color-title))' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="Your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1" style={{ color: 'rgb(var(--color-title))' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="your@email.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1" style={{ color: 'rgb(var(--color-title))' }}>
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="+1 (555) 123-4567"
                  disabled={isSubmitting}
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1" style={{ color: 'rgb(var(--color-title))' }}>
                Project Details
              </h3>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-base font-bold mb-2" style={{ color: 'rgb(var(--color-title))' }}>
                Description *
              </label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                rows={4}
                placeholder="Describe your project, deliverables, style, and requirements."
                required
                disabled={isSubmitting}
              />
            </div>

            {/* References */}
            <div>
              <label className="block text-base font-bold mb-2" style={{ color: 'rgb(var(--color-title))' }}>
                References (Optional)
              </label>
              <textarea
                name="references"
                value={formData.references}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                rows={3}
                placeholder="Links to inspiration, mood boards, or reference projects."
                disabled={isSubmitting}
              />
            </div>

            {/* Special Requirements */}
            <div>
              <label className="block text-base font-bold mb-2" style={{ color: 'rgb(var(--color-title))' }}>
                Special Notes
              </label>
              <textarea
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                rows={2}
                placeholder="Additional requirements, file formats, deadlines, etc."
                disabled={isSubmitting}
              />
            </div>

            {/* Compact Summary */}
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="text-center mb-3">
                <strong className="text-primary text-sm">Project Summary</strong>
              </div>
              <div className="grid grid-cols-1 gap-2 text-xs">
                <div><span className="font-bold">Types:</span> {formData.projectTypes.length > 0 ?
                  formData.projectTypes.map(typeValue => {
                    const typeMap: Record<string, string> = {
                      '3d-modeling': '3D Modeling',
                      'animation': 'Animation',
                      'rendering': 'Rendering',
                      'post-production': 'Post-Production',
                    };
                    return typeMap[typeValue] || typeValue;
                  }).join(', ') : 'None'} | <span className="font-bold">Complexity:</span> {formData.complexity || 'Not specified'}</div>
                <div><span className="font-bold">Software:</span> {formData.software.length > 0 ?
                  formData.software.map(softwareValue => {
                    const selectedProgram = programs.find(p => p.value === softwareValue);
                    return selectedProgram?.name || softwareValue;
                  }).join(', ') : 'None'}</div>
                <div>
                  <span className="font-bold">Budget:</span> {budgetRanges.find(b => b.value === formData.budget)?.label || 'Not specified'} |
                  <span className="font-bold"> Timeline:</span> {timelineOptions.find(t => t.value === formData.timeline)?.label || 'Not specified'}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {/* Minimal Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-48 h-48 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Ultra Compact Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-xs font-bold shadow-md">
            <Icon icon="star" />
            <span>REQUEST</span>
          </div>

          <h2 className="text-xl md:text-2xl font-black mb-1" style={{ color: 'rgb(var(--color-title))' }}>
            Custom Project
          </h2>

          <p className="text-sm max-w-lg mx-auto opacity-70" style={{ color: 'rgb(var(--color-text))' }}>
            Multi-step project intake form
          </p>
        </div>

        {/* Multi-Step Form */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-white/5 px-8 pt-8 pb-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold" style={{ color: 'rgb(var(--color-title))' }}>
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm opacity-75">{Math.round(progressPercent)}% Complete</span>
            </div>

            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex justify-between mt-3">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    i + 1 <= currentStep
                      ? 'bg-primary text-white shadow-lg shadow-primary/50'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="px-6 py-8">
            {renderStepContent()}

            {/* Compact Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all duration-200 flex items-center gap-2 text-sm"
              >
                <Icon icon="arrow_left" />
                Previous
              </button>

              <div className="text-center">
                <div className="text-xs opacity-75 mb-1">
                  Step {currentStep}/{totalSteps}
                </div>
                <div className="w-24 bg-gray-300 rounded-full h-1">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-1 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!getStepValidation(currentStep)}
                  className="px-4 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200 flex items-center gap-2 shadow-md text-sm"
                >
                  Next
                  <Icon icon="arrow_right" />
                </button>
              ) : (
                <form onSubmit={handleSubmit} className="flex">
                  <button
                    type="submit"
                    disabled={isSubmitting || !getStepValidation(currentStep)}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg font-bold text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Icon icon="star" />
                        Submit Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Success/Error Messages */}
        {submitStatus.message && (
          <div className={`mt-8 p-8 rounded-2xl border-2 backdrop-blur-xl ${submitStatus.type === 'success' ? 'bg-green-500/10 border-green-500/30 text-green-100' : 'bg-red-500/10 border-red-500/30 text-red-100'}`}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                {submitStatus.type === 'success' ? (
                  <Icon icon="star" />
                ) : (
                  <Icon icon="close" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {submitStatus.type === 'success' ? '🎉 Request Submitted Successfully!' : '❌ Submission Error'}
                </h3>
                <p className="text-lg leading-relaxed">{submitStatus.message}</p>
                {submitStatus.type === 'success' && (
                  <div className="mt-4 p-4 bg-white/10 rounded-lg">
                    <p className="text-sm">
                      📧 <strong>What happens next?</strong><br />
                      • Our technical team reviews your requirements (within 24 hours)<br />
                      • We prepare a detailed project proposal with timeline and cost<br />
                      • You receive a personalized consultation to discuss the project<br />
                      • We begin work once you're satisfied with the proposal
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default CustomProjectForm;
