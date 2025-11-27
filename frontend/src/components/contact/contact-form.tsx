'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { submitContact } from '@/services/api';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
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
      await submitContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || undefined,
        message: formData.message.trim(),
      });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <Label
              htmlFor="name"
              className="text-lg font-semibold"
              style={{ color: 'rgb(var(--color-title))' }}
            >
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              disabled={isSubmitting}
              className="h-12 text-lg border-2 focus:border-rgb(var(--btn-primary-bg)) transition-colors"
              style={{
                backgroundColor: 'rgba(var(--color-bg), 0.8)',
                borderColor: 'rgb(var(--color-border))',
                color: 'rgb(var(--color-text))'
              }}
            />
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="email"
              className="text-lg font-semibold"
              style={{ color: 'rgb(var(--color-title))' }}
            >
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              disabled={isSubmitting}
              className="h-12 text-lg border-2 focus:border-rgb(var(--btn-primary-bg)) transition-colors"
              style={{
                backgroundColor: 'rgba(var(--color-bg), 0.8)',
                borderColor: 'rgb(var(--color-border))',
                color: 'rgb(var(--color-text))'
              }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label
            htmlFor="company"
            className="text-lg font-semibold"
            style={{ color: 'rgb(var(--color-title))' }}
          >
            Company Name
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company or organization (optional)"
            disabled={isSubmitting}
            className="h-12 text-lg border-2 focus:border-rgb(var(--btn-primary-bg)) transition-colors"
            style={{
              backgroundColor: 'rgba(var(--color-bg), 0.8)',
              borderColor: 'rgb(var(--color-border))',
              color: 'rgb(var(--color-text))'
            }}
          />
        </div>

        <div className="space-y-3">
          <Label
            htmlFor="message"
            className="text-lg font-semibold"
            style={{ color: 'rgb(var(--color-title))' }}
          >
            Project Details *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
            rows={6}
            required
            disabled={isSubmitting}
            className="text-lg border-2 focus:border-rgb(var(--btn-primary-bg)) transition-colors resize-none"
            style={{
              backgroundColor: 'rgba(var(--color-bg), 0.8)',
              borderColor: 'rgb(var(--color-border))',
              color: 'rgb(var(--color-text))'
            }}
          />
        </div>

        {/* Status Message */}
        {submitStatus.message && (
          <div
            className={`p-6 rounded-xl border-2 flex items-center gap-4 shadow-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-50 border-green-200'
                : 'bg-red-50 border-red-200'
            }`}
          >
            <div className={`p-2 rounded-full ${
              submitStatus.type === 'success' ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {submitStatus.type === 'success' ? (
                <CheckCircle className="h-6 w-6 text-green-600" />
              ) : (
                <AlertCircle className="h-6 w-6 text-red-600" />
              )}
            </div>
            <p
              className={`text-lg font-medium ${
                submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
              }`}
            >
              {submitStatus.message}
            </p>
          </div>
        )}

        <div className="text-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-12 py-4 text-lg font-semibold btn-primary hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending Message...</span>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
