// EmailJS service for sending contact form emails
export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  country?: string;
  service: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Method 1: Try Vercel serverless function first (most reliable)
    try {
      // Use relative path for Vercel deployment, localhost for development
      const apiUrl = import.meta.env.VITE_API_URL || (
        window.location.hostname === 'localhost' 
          ? 'http://localhost:3001/api' 
          : '/api'
      );
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Email sent successfully via Vercel serverless function:', result.messageId);
        return true;
      } else {
        const errorData = await response.json();
        console.log('Vercel email service failed:', errorData.error);
      }
    } catch (error) {
      console.log('Vercel serverless function failed, trying Formspree fallback:', error.message);
    }

    // Method 2: Fallback to Formspree service
    const subject = `Contact Form Submission from ${formData.fullName}`;
    
    try {
      const response = await fetch('https://formspree.io/f/mpwaoewj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.fullName,
          phone: formData.phone,
          company: formData.company,
          country: formData.country,
          service: formData.service,
          message: formData.message,
          _to: 'enquiries@bezaleelconsultants.co.za',
          _subject: subject
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully via Formspree fallback');
        return true;
      }
    } catch (error) {
      console.log('Formspree also failed, using mailto fallback');
    }

    // Method 3: Final fallback - mailto link
    const body = `
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'Not provided'}
Country: ${formData.country || 'Not provided'}
Service: ${formData.service}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:enquiries@bezaleelconsultants.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open user's email client
    if (typeof window !== 'undefined') {
      window.location.href = mailtoLink;
    }
    
    // Simulate successful sending for UI feedback
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log('Contact form submission processed via mailto fallback:', {
      to: 'enquiries@bezaleelconsultants.co.za',
      from: formData.email,
      subject,
      data: formData
    });

    return true;
    
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Alternative method using a simple POST request to a backend service
export const sendContactEmailViaBackend = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        to: 'enquiries@bezaleelconsultants.co.za'
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending email via backend:', error);
    return false;
  }
};