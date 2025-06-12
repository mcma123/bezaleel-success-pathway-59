import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Clock, MessageCircle, Users, Globe, Zap } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      description: "Send us a message anytime",
      contact: "info@bezaleelconsultants.co.za",
      action: "mailto:info@bezaleelconsultants.co.za",
      color: "bg-blue-50 border-blue-200 text-blue-700"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call South Africa",
      description: "Speak with our SA team",
      contact: "+27 74 404 7218",
      action: "tel:+27744047218",
      color: "bg-green-50 border-green-200 text-green-700"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Zimbabwe",
      description: "Connect with our ZW office",
      contact: "+263 77 272 4288",
      action: "tel:+263772724288",
      color: "bg-purple-50 border-purple-200 text-purple-700"
    }
  ];

  const services = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Company Registration",
      description: "South Africa & Zambia business setup"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website Development",
      description: "Professional web solutions"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Digital Marketing",
      description: "Grow your online presence"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Custom Systems",
      description: "Tailored business solutions"
    }
  ];

  const offices = [
    {
      country: "South Africa",
      flag: "🇿🇦",
      description: "Our primary office serving the Southern African region",
      phone: "+27 74 404 7218",
      services: ["Company Registration", "Banking Setup", "Tax Registration", "Digital Services"]
    },
    {
      country: "Zimbabwe", 
      flag: "🇿🇼",
      description: "Regional office providing comprehensive business services",
      phone: "+263 77 272 4288",
      services: ["Business Setup", "Consultation", "Local Compliance", "Support Services"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-bezaleel-gray via-white to-bezaleel-red/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-bezaleel-accent/10 text-bezaleel-accent hover:bg-bezaleel-accent hover:text-white">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bezaleel-dark mb-6">
              Ready to Start Your
              <span className="block text-bezaleel-red">Business Journey?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact our expert team today for personalized guidance on company registration, digital solutions, and business growth strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Contact Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us across Southern Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`${method.color} border-2 hover-lift group transition-all duration-300 cursor-pointer`}>
                <a href={method.action} className="block">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-sm mb-4">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-semibold text-lg group-hover:underline">
                      {method.contact}
                    </p>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Our Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Serving clients across Southern Africa with local expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="hover-lift border-2 border-transparent hover:border-bezaleel-red/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{office.flag}</div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-bezaleel-dark">
                        {office.country}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {office.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-bezaleel-red" />
                    <span className="font-semibold">{office.phone}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-bezaleel-dark mb-2">Services Available:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {office.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-2"></div>
                          <span className="text-sm text-muted-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              How Can We Help You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive services cover all aspects of business setup and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover-lift border-2 border-transparent hover:border-bezaleel-red/30 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-bezaleel-red/10 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-bezaleel-dark mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Response Time */}
      <section className="py-20 bg-gradient-to-r from-bezaleel-red to-bezaleel-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Business Hours & Response Time
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Monday - Friday</p>
                    <p className="text-white/80">8:00 AM - 5:00 PM (SAST)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Email Response</p>
                    <p className="text-white/80">Within 2-4 hours during business days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Phone Support</p>
                    <p className="text-white/80">Immediate assistance during business hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-white/90 mb-6">
                  Contact us today for a free consultation and discover how we can help your business succeed.
                </p>
                <div className="space-y-3">
                  <Button size="lg" className="w-full bg-white text-bezaleel-red hover:bg-gray-100 font-semibold">
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                  </Button>
                  <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-bezaleel-red">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
