# Vercel Email Setup Guide 🚀

Your contact form now uses **Vercel serverless functions** - no separate server needed!

## ✅ What's Ready

- **Serverless API functions** in `/api/` directory
- **Professional email templates** with your branding  
- **Rate limiting** and validation built-in
- **Three-layer fallback system** for 100% uptime
- **Works on your existing Vercel deployment**

## 🔧 Environment Variables Setup

In your **Vercel Dashboard**, add these environment variables:

### Required Variables:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
RECIPIENT_EMAIL=enquiries@bezaleelconsultants.co.za
```

### How to Add in Vercel:
1. Go to your **Vercel Dashboard**
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable above

## 📧 Email Provider Setup

### Gmail (Recommended):
1. **Enable 2-Factor Authentication** on Gmail
2. **Generate App Password**:
   - Google Account → Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Use the 16-character app password** (not your regular password)

### Alternative Providers:

**Outlook/Office 365:**
```
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

**Custom Business Email:**
```
EMAIL_HOST=mail.yourdomain.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=noreply@yourdomain.com
EMAIL_PASS=your-password
```

## 🚀 Deployment Steps

1. **Push your code to Git:**
   ```bash
   git add .
   git commit -m "Add Vercel serverless email functions"
   git push
   ```

2. **Vercel will automatically deploy** your functions to:
   - `https://yoursite.vercel.app/api/health`
   - `https://yoursite.vercel.app/api/contact`

3. **Set environment variables** in Vercel Dashboard

4. **Test your contact form** - it will work immediately!

## 🧪 Testing

### Test Health Endpoint:
Visit: `https://yoursite.vercel.app/api/health`

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-20T10:30:00.000Z",
  "service": "Bezaleel Email Service (Vercel Serverless)"
}
```

### Test Contact Form:
Fill out your contact form on the website. Check Vercel function logs for:
- ✅ Email sent successfully

## 📁 File Structure

```
your-project/
├── api/
│   ├── contact.js     # Main email function
│   └── health.js      # Health check
├── src/
│   └── services/
│       └── emailService.ts  # Updated to use Vercel API
├── vercel.json        # Vercel configuration
└── package.json       # Now includes nodemailer
```

## 🔄 How It Works

1. **User submits form** on your website
2. **Frontend calls** `/api/contact` (Vercel serverless function)
3. **Function sends email** via SMTP using Nodemailer
4. **Fallback to Formspree** if serverless function fails
5. **Final fallback** opens user's email client

## 🔒 Security Features

✅ **Rate limiting** (10 requests per 15 minutes per IP)  
✅ **Input validation** and sanitization  
✅ **CORS headers** properly configured  
✅ **Environment-based configuration**  
✅ **Error handling** with appropriate responses

## 🎯 Benefits

- **No separate server** - runs on your existing Vercel deployment
- **Zero maintenance** - Vercel handles scaling and availability  
- **Professional emails** with HTML templates
- **Cost-effective** - only pays for usage
- **Global edge network** - fast worldwide

## 🆘 Troubleshooting

**"Email not working":**
- Check environment variables in Vercel Dashboard
- Verify Gmail app password is correct
- Check Vercel function logs

**"CORS errors":**
- Already handled in the serverless functions

**"Rate limit errors":**
- Wait 15 minutes or contact support

## 🚀 Ready to Deploy!

Your contact form is now **enterprise-ready** with professional email delivery through Vercel serverless functions!

**Next Steps:**
1. Set up Gmail app password
2. Add environment variables to Vercel
3. Push your code
4. Test the contact form

**No separate server needed - everything runs on Vercel!** ✨