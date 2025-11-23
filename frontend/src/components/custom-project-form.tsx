'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { submitContact } from '@/services/api';
import { CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

const programs = [
  { name: "Blender", value: "blender" },
  { name: "Autodesk Maya", value: "maya" },
  { name: "Autodesk 3ds Max", value: "3ds-max" },
  { name: "ZBrush", value: "zbrush" },
  { name: "Cinema 4D", value: "cinema-4d" },
  { name: "Adobe Photoshop", value: "photoshop" },
  { name: "Adobe After Effects", value: "after-effects" },
  { name: "SketchUp", value: "sketchup" },
];

const CustomProjectForm: React.FC = () => {
  const [formData, setFormData] = useState({
    software: '',
    name: '',
    email: '',
    projectDescription: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.software || !formData.name.trim() || !formData.email.trim() || !formData.projectDescription.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
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
      const selectedProgram = programs.find(p => p.value === formData.software);
      const message = `Custom Project Request for ${selectedProgram?.name || 'Unknown Software'}:

Project Description: ${formData.projectDescription.trim()}

Preferred Software: ${selectedProgram?.name || 'Not specified'}`;

      await submitContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message,
      });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We\'ve received your custom project request. Our team will review it and get back to you within 24 hours.',
      });

      // Reset form on success
      setFormData({
        software: '',
        name: '',
        email: '',
        projectDescription: '',
      });
    } catch (error) {
      console.error('Error submitting custom project form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      className="w-full max-w-2xl mx-auto"
      style={{ backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))', borderColor: 'rgb(var(--color-border))' }}
    >
      <CardHeader className="text-center">
        <CardTitle
          className="text-2xl font-bold flex items-center justify-center gap-3"
          style={{ color: 'rgb(var(--color-title))' }}
        >
          <Sparkles className="h-6 w-6" />
          Order a Custom Project
        </CardTitle>
        <p style={{ color: 'rgb(var(--color-text))' }}>
          Have a specific vision? Request a custom project using your preferred software tool.
          We'll discuss your requirements and provide a tailored solution.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="software">Preferred Software *</Label>
            <Select
              id="software"
              name="software"
              value={formData.software}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            >
              <option value="">Select a software...</option>
              {programs.map((program) => (
                <option key={program.value} value={program.value}>
                  {program.name}
                </option>
              ))}
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectDescription">Project Description *</Label>
            <Textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Describe your project requirements, objectives, timeline, and any specific features you need..."
              rows={6}
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Status Message */}
          {submitStatus.message && (
            <div
              className={`p-4 rounded-lg flex items-center gap-3 ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              {submitStatus.type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600" />
              )}
              <p
                className={`text-sm ${
                  submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}
              >
                {submitStatus.message}
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting Request...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Request Custom Project
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CustomProjectForm;
