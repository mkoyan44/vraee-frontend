'use client';

import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { submitContact } from '@/services/api';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import styles from '@/assets/styles/client/components/contact.module.scss';

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
    <form onSubmit={handleSubmit} className={styles.form_inner}>
      <div className={styles.form_row}>
        <div className={styles.form_field}>
          <Label htmlFor="name" className={styles.form_field_label}>
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
            className={styles.form_field_input}
          />
        </div>
        <div className={styles.form_field}>
          <Label htmlFor="email" className={styles.form_field_label}>
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
            className={styles.form_field_input}
          />
        </div>
      </div>

      <div className={styles.form_field}>
        <Label htmlFor="company" className={styles.form_field_label}>
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
          className={styles.form_field_input}
        />
      </div>

      <div className={styles.form_field}>
        <Label htmlFor="message" className={styles.form_field_label}>
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
          className={`${styles.form_field_input} ${styles.form_field_textarea}`}
        />
      </div>

      {submitStatus.message && (
        <div
          className={`${styles.form_status} ${
            submitStatus.type === 'success' ? styles.form_status_success : styles.form_status_error
          }`}
        >
          {submitStatus.type === 'success' ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden />
          )}
          <p className="font-medium text-sm">{submitStatus.message}</p>
        </div>
      )}

      <div className={styles.form_actions}>
        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.form_submit_btn}
        >
          {isSubmitting ? (
            <>
              <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" aria-hidden />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
