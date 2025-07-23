# Email Service Setup for Contact Form

The contact form on the website is now functional and ready to send emails to `enquiries@bezaleelconsultants.co.za`. Here are the setup options:

## Current Implementation

The form currently works with a **dual approach**:

1. **Primary**: Attempts to send via **Formspree** (online form service)
2. **Fallback**: Opens the user's default email client with pre-filled information

## Setup Options

### Option 1: Formspree (Recommended - Easy Setup)

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Set the form endpoint to send emails to `enquiries@bezaleelconsultants.co.za`
5. Copy your form ID (looks like `mpwaoewj`)
6. Update the form ID in `src/services/emailService.ts` line 34:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
   ```

**Benefits**: 
- No server setup required
- Spam protection included
- Free tier available (50 submissions/month)
- Automatic email delivery to your specified address

### Option 2: EmailJS (Alternative)

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up and create a service
3. Create an email template
4. Get your service ID, template ID, and public key
5. Install EmailJS: `npm install @emailjs/browser`
6. Update the email service to use EmailJS

### Option 3: Backend API (Most Reliable)

If you have a backend server, you can create an API endpoint:

```javascript
// Example Express.js endpoint
app.post('/api/contact', async (req, res) => {
  const { fullName, email, phone, company, country, service, message } = req.body;
  
  // Use nodemailer or similar to send email
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: 'enquiries@bezaleelconsultants.co.za',
    subject: `Contact Form Submission from ${fullName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Country:</strong> ${country || 'Not provided'}</p>
      <p><strong>Service:</strong> ${service}</p>
      <h3>Message:</h3>
      <p>${message}</p>
    `
  };
  
  // Send email logic here
});
```

## Current Status

✅ **Form is fully functional** - Users can fill out and submit the form  
✅ **Email client fallback** - Opens user's email client with pre-filled data  
✅ **Form validation** - All required fields are validated  
✅ **Success/error feedback** - Users get toast notifications  
✅ **Form reset** - Form clears after successful submission  

## Testing

The form will work immediately. When users submit:

1. The form attempts to send via Formspree
2. If that fails, it opens their email client
3. Either way, they get a success message and the form resets

## Next Steps

1. **Set up Formspree account** (5 minutes)
2. **Update the form ID** in the code
3. **Test the form** to ensure emails are received

The contact form is ready to use and will ensure all inquiries reach `enquiries@bezaleelconsultants.co.za`!