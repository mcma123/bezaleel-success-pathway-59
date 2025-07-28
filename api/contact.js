// Vercel serverless function for contact form
import nodemailer from 'nodemailer';

// Rate limiting storage (in-memory for simplicity)
const rateLimitStore = new Map();

// Rate limiting function
const rateLimit = (ip, maxRequests = 10, windowMs = 15 * 60 * 1000) => {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, []);
  }
  
  const requests = rateLimitStore.get(ip).filter(time => time > windowStart);
  
  if (requests.length >= maxRequests) {
    return false;
  }
  
  requests.push(now);
  rateLimitStore.set(ip, requests);
  return true;
};

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    
    // Apply rate limiting
    if (!rateLimit(clientIP)) {
      return res.status(429).json({
        success: false,
        error: 'Too many requests from this IP, please try again later.'
      });
    }

    const {
      fullName,
      email,
      phone,
      company,
      country,
      service,
      message
    } = req.body;

    // Validation
    if (!fullName || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields. Please fill in all required fields.'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format.'
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Email content
    const emailContent = {
      from: {
        name: 'Bezaleel Consultants Website',
        address: process.env.EMAIL_USER
      },
      to: process.env.RECIPIENT_EMAIL || 'enquiries@bezaleelconsultants.co.za',
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8f9f0; padding: 20px; border-radius: 8px;">
            <h1 style="color: #2c5530; margin-bottom: 20px;">New Contact Form Submission</h1>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #2c5530; border-bottom: 2px solid #8ba538; padding-bottom: 10px;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #2c5530; width: 120px;">Full Name:</td>
                  <td style="padding: 8px 0;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #2c5530;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #8ba538;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #2c5530;">Phone:</td>
                  <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #8ba538;">${phone}</a></td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #2c5530;">Company:</td>
                  <td style="padding: 8px 0;">${company}</td>
                </tr>
                ` : ''}
                ${country ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #2c5530;">Country:</td>
                  <td style="padding: 8px 0;">${country}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #2c5530;">Service:</td>
                  <td style="padding: 8px 0;">${service}</td>
                </tr>
              </table>
            </div>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #2c5530; border-bottom: 2px solid #8ba538; padding-bottom: 10px;">Message</h2>
              <p style="line-height: 1.6; color: #333; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="background-color: #8ba538; color: white; padding: 15px; border-radius: 8px; text-align: center;">
              <p style="margin: 0;">
                <strong>Received:</strong> ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })} SAST
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Information:
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
${company ? `Company: ${company}` : ''}
${country ? `Country: ${country}` : ''}
Service: ${service}

Message:
${message}

Received: ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })} SAST
      `
    };

    // Send email
    const info = await transporter.sendMail(emailContent);
    
    console.log('✅ Email sent successfully:', {
      messageId: info.messageId,
      from: email,
      service: service,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later or contact us directly.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}