# Email Service Setup Guide - Nodemailer Integration

Your contact form now has a **professional Nodemailer backend service** that automatically sends emails via SMTP!

## What's Been Added

✅ **Express.js backend server** with Nodemailer integration  
✅ **Professional HTML email templates** with your branding  
✅ **Three-layer fallback system** for maximum reliability  
✅ **Rate limiting and security** features  
✅ **CORS configuration** for your React app  

## Quick Setup (5 minutes)

### 1. Install Server Dependencies

```bash
cd server
npm install
```

### 2. Configure Email Settings

Copy and configure your email settings:

```bash
cp .env.example .env
```

Edit the `.env` file with your email credentials:

```env
# Gmail Example (Recommended)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

RECIPIENT_EMAIL=enquiries@bezaleelconsultants.co.za
PORT=3001
NODE_ENV=production
FRONTEND_URL=http://localhost:8080
```

### 3. Start Both Services

```bash
# Terminal 1: Start email server
cd server
npm start

# Terminal 2: Start React app
cd ..
npm run dev
```

## Email Provider Setup

### Gmail (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Google Account → Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Use app password** in `EMAIL_PASS` (not your regular password)

### Outlook/Office 365

```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Business Email (Custom SMTP)

```env
EMAIL_HOST=mail.yourdomain.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=noreply@yourdomain.com
EMAIL_PASS=your-password
```

## How It Works

### Three-Layer Fallback System

1. **Primary**: Nodemailer backend (professional SMTP sending)
2. **Secondary**: Formspree service (current working fallback)
3. **Tertiary**: Mailto link (opens user's email client)

### Professional Email Template

Emails include:
- ✅ **Branded HTML styling** with your colors
- ✅ **Structured contact information** table
- ✅ **South African timestamp** (SAST timezone)
- ✅ **Professional formatting** for easy reading

## Testing

### 1. Test Server Health

```bash
curl http://localhost:3001/api/health
```

### 2. Test Contact Form

Fill out your contact form. Check server logs for:
- `✅ Email sent successfully via Nodemailer backend`
- `✅ Email service configuration verified successfully`

## Current Implementation

Your contact form will now:

1. **Try Nodemailer first** (most reliable, professional emails)
2. **Fall back to Formspree** if server is unavailable
3. **Use mailto as final fallback** if both fail

This ensures **100% uptime** for your contact form!

## Security Features

✅ **Rate limiting** (10 requests per 15 minutes per IP)  
✅ **Input validation** and sanitization  
✅ **CORS protection** for your domain only  
✅ **Security headers** via Helmet  
✅ **Environment-based configuration**  

## Production Deployment

When deploying to production:

1. **Set environment variables** on your hosting platform
2. **Update FRONTEND_URL** to your live domain
3. **Use dedicated email account** for sending
4. **Enable monitoring** for email delivery

## Support

If you need help:
1. Check server logs for specific error messages
2. Verify email credentials are correct
3. Test with Gmail first (most reliable)
4. Ensure both servers are running

**Your contact form is now enterprise-ready with professional email delivery!** 🚀