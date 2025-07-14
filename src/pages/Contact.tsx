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
import { Mail, Phone, Clock, MessageSquare, ExternalLink, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  // WhatsApp configuration
  const phoneNumber = "263772515272";
  const whatsappMessage = "Hi! I'd like to get in touch with your team.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
                <a href="tel:+27744047218" className="text-primary hover:underline">
                  +27744047218
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone (Zambia)</h3>
                <a href="tel:+260" className="text-primary hover:underline">
                  +260
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
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              You might find immediate answers to common queries in our comprehensive FAQ section:
            </p>
            <Button size="lg" variant="outline" className="inline-flex items-center">
              Visit FAQ Page
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
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
