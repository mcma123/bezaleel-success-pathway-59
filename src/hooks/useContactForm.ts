import { useState } from 'react';
import { sendContactEmail, ContactFormData } from '@/services/emailService';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendContactEmail(formData);
      
      if (success) {
        setSubmitStatus('success');
        return true;
      } else {
        setSubmitStatus('error');
        return false;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setSubmitStatus('idle');
  };

  return {
    isSubmitting,
    submitStatus,
    submitForm,
    resetStatus
  };
};