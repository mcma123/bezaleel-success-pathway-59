import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, Clock, MessageSquare, ExternalLink, Facebook, Instagram, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  // WhatsApp configuration
  const phoneNumber = "263772515272";
  const whatsappMessage = "Hi! I'd like to get in touch with your team.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // FAQ state
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // FAQ data
  const faqData = [
    {
      question: "What services does Bezaleel Consultants offer?",
      answer: "Bezaleel Consultants provides comprehensive business solutions including company registration, corporate bank account opening, and ongoing regulatory and tax compliance services for businesses operating in the markets we serve."
    },
    {
      question: "Who can benefit from Bezaleel Consultants' services?",
      answer: "We assist a diverse range of clients, from international and local entrepreneurs to established businesses of all sizes, all seeking efficient and compliant business setup and management in their chosen markets."
    },
    {
      question: "Why should I choose Bezaleel Consultants?",
      answer: "Clients choose us for our expert guidance, highly efficient and streamlined processes, unwavering commitment to full compliance, and personalized service. Our deep local knowledge ensures a seamless and reliable experience tailored to your business needs."
    },
    {
      question: "What is the first step to establishing my company with your help?",
      answer: "The initial step typically involves understanding your business goals, advising on the optimal legal structure, and verifying your proposed company name. We guide you through this foundational phase from the outset."
    },
    {
      question: "How long does the company registration process usually take?",
      answer: "Timelines can vary based on the specific market's regulations and the efficiency of local registration authorities. We provide estimated timelines for your particular case and work diligently to expedite the process."
    },
    {
      question: "Do I need to be physically present for the setup process?",
      answer: "Your physical presence is not required. We efficiently manage the entire process on your behalf by leveraging our established local relationships and streamlined digital workflows."
    },
    {
      question: "How do you assist with corporate bank account opening?",
      answer: "We streamline the entire corporate bank account opening process, facilitating it through our established banking relationships in relevant markets. We act as your liaison, assisting with all necessary documentation."
    },
    {
      question: "What does \"ongoing compliance\" entail, and why is it important?",
      answer: "Ongoing compliance refers to the continuous fulfillment of legal and tax obligations, such as submitting annual returns, preparing financial statements, and adhering to tax requirements. It's crucial for maintaining your company's good standing and avoiding penalties."
    },
    {
      question: "Do you provide tax compliance services?",
      answer: "Yes, we offer comprehensive tax compliance support. This includes assisting with necessary tax registrations, accurate calculation, timely payment of taxes, and professional submission of all required tax returns to the relevant authorities."
    },
    {
      question: "Can you help with preparing and submitting financial statements?",
      answer: "Absolutely. We provide expert assistance in preparing your company's financial statements and ensuring their timely and accurate submission to the relevant statutory bodies."
    },
    {
      question: "How do you ensure the security and confidentiality of my data and information?",
      answer: "Data security and client confidentiality are paramount to us. We employ robust security protocols, including encrypted communication, secure data storage, and strict internal policies, to ensure your sensitive business and personal information is always protected and handled with the utmost discretion."
    },
    {
      question: "What are your primary communication channels, and how can I reach you?",
      answer: "You can easily reach us via email, phone, or through our dedicated online inquiry form on our website. We prioritize clear and timely communication to ensure you're always informed."
    },
    {
      question: "What kind of client support can I expect once I'm engaged with Bezaleel Consultants?",
      answer: "We offer dedicated, ongoing client support. Our team is readily available to answer your queries, address any issues, and provide timely advice as your business evolves. You'll have direct access to experienced professionals committed to your success."
    },
    {
      question: "Can I see testimonials or references from your previous clients?",
      answer: "Yes, we're proud of the positive impact we've had on our clients' businesses. We feature client feedback and testimonials on our Facebook page. We can also provide specific references upon request, with client consent."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/bezaleelconsultants?igsh=MXBzbWJueTdkZzRuNQ==&utm_source=ig_contact_invite", 
      label: "Instagram",
      color: "hover:text-pink-600"
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/share/1AYZoFXgc7/", 
      label: "Facebook",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Your Success Starts Here: Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're ready to launch your business, need expert guidance, or simply have a question, our dedicated team is here to help. We're committed to providing you with fast, efficient, and transparent support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Get in Touch with Our Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Please fill out the form below, and one of our consultants will get back to you promptly. We aim to respond to all enquiries within 24 hours.
              </p>
            </div>

            <Card className="shadow-lg border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Contact Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="Include country code, e.g., +27..." required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name (Optional)</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country of Origin/Residence (Optional)</Label>
                  <Input id="country" placeholder="Enter your country" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">How can we help you? *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="company-registration">Company Registration</SelectItem>
                      <SelectItem value="bank-account">Bank Account Opening</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="other">Other (please specify in message)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please tell us how we can help you..." 
                    className="min-h-[120px]"
                    required 
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="privacy" required />
                  <Label htmlFor="privacy" className="text-sm">
                    I agree to the{' '}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                    *
                  </Label>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Submit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Direct Contact Options */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Direct Contact Options
            </h2>
            <p className="text-xl text-muted-foreground">
              Prefer to speak directly? Reach out to us via phone or email during our business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone (South Africa)</h3>
                <a href="tel:+27651522302" className="text-primary hover:underline">
                  +27651522302
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone (Zimbabwe)</h3>
                <a href="tel:+263772515272" className="text-primary hover:underline">
                  +263772515272
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:enquiries@bezaleelconsultants.co.za" className="text-primary hover:underline">
                  enquiries@bezaleelconsultants.co.za
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Chat with us
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Business Hours
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We are available to assist you during the following hours:
            </p>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM SAST (UTC+2)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Saturday - Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions about our services and processes:
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="mb-4"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left hover:bg-muted/30 transition-colors duration-200"
                      aria-expanded={openFAQ === index}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-foreground pr-4">
                          {index + 1}. {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: openFAQ === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        </motion.div>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="px-6 pb-6 border-t border-muted/20"
                          >
                            <p className="text-muted-foreground leading-relaxed pt-4">
                              {faq.answer}
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Connect with Us on Social Media
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Follow us for updates, insights, and more:
            </p>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 p-4 rounded-lg border-2 border-transparent hover:border-primary/30 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="font-semibold">{social.label}</span>
                  </a>
                );
              })}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-4 rounded-lg border-2 border-transparent hover:border-primary/30 transition-all duration-300 hover:text-green-600"
                aria-label="WhatsApp Channel"
              >
                <MessageSquare className="h-6 w-6" />
                <span className="font-semibold">WhatsApp Channel</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
