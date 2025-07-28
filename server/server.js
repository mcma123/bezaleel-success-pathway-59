import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:8080',
    'http://localhost:5173',
    process.env.FRONTEND_URL
  ].filter(Boolean),
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/contact', limiter);

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Verify email configuration on startup
const verifyEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email service configuration verified successfully');
    return true;
  } catch (error) {
    console.error('❌ Email service configuration error:', error.message);
    console.log('📧 Please check your .env file configuration');
    return false;
  }
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'Bezaleel Email Service'
  });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
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
      to: process.env.RECIPIENT_EMAIL,
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

    res.json({
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
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
const startServer = async () => {
  // Verify email configuration
  const emailConfigValid = await verifyEmailConfig();
  
  if (!emailConfigValid && process.env.NODE_ENV === 'production') {
    console.error('❌ Cannot start server without valid email configuration');
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Bezaleel Email Server running on port ${PORT}`);
    console.log(`📧 Ready to handle contact form submissions`);
    console.log(`🔒 CORS enabled for: ${corsOptions.origin.join(', ')}`);
    
    if (!emailConfigValid) {
      console.log('⚠️  Warning: Email service not configured properly (development mode)');
    }
  });
};

startServer().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});