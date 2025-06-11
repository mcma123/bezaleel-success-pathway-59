
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Settings, Users, Globe, Zap, Shield, Code, Database, Smartphone } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$100",
      description: "Perfect for starting your business journey",
      popular: false,
      features: [
        "Company Registration",
        "Bank Account Opening",
        "Basic Tax Setup",
        "Business License Assistance",
        "Email Support",
        "Document Preparation"
      ],
      buttonText: "Get Started",
      color: "border-gray-200 hover:border-bezaleel-red/30"
    },
    {
      name: "Advanced Plan",
      price: "$385",
      description: "Complete business setup with digital presence",
      popular: true,
      features: [
        "Everything in Basic",
        "Professional Website + Domain",
        "1 Year Hosting Included",
        "Social Media Setup",
        "Custom Landing Page",
        "3 Months Maintenance",
        "SEO Optimization",
        "Priority Support"
      ],
      buttonText: "Most Popular",
      color: "border-bezaleel-red bg-bezaleel-red/5"
    },
    {
      name: "Premium Plan",
      price: "$670",
      description: "Full e-commerce solution with advanced features",
      popular: false,
      features: [
        "Everything in Advanced",
        "E-Commerce Store (50 products)",
        "Secure Payment Integration",
        "Admin Dashboard",
        "User Management System",
        "Performance Optimization",
        "Priority Email Support",
        "Monthly Analytics Reports"
      ],
      buttonText: "Go Premium",
      color: "border-gray-200 hover:border-bezaleel-accent/30"
    }
  ];

  const customServices = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom CRM",
      description: "Tailored customer relationship management systems"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "HR Solutions",
      description: "Complete human resources management platforms"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Accounting Systems",
      description: "Advanced financial management and reporting tools"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "LMS Platforms",
      description: "Learning management systems for education"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Project Management",
      description: "Comprehensive project tracking and collaboration tools"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "AI Chatbots",
      description: "Intelligent automation and customer support bots"
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
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bezaleel-dark mb-6">
              Choose Your Perfect
              <span className="block text-bezaleel-red">Business Package</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From basic company registration to custom enterprise solutions, we have the right package for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative ${plan.color} hover-lift transition-all duration-300 ${plan.popular ? 'scale-105 ring-2 ring-bezaleel-red' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-bezaleel-red text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-bezaleel-dark mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-bezaleel-red">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">USD</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="flex-shrink-0 w-5 h-5 bg-bezaleel-red/10 rounded-full flex items-center justify-center mr-3">
                          <Check className="w-3 h-3 text-bezaleel-red" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full py-6 text-lg font-semibold ripple-effect ${
                      plan.popular 
                        ? 'bezaleel-gradient text-white hover:scale-105' 
                        : 'border-2 border-bezaleel-red text-bezaleel-red hover:bg-bezaleel-red hover:text-white'
                    } transition-all duration-300`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-bezaleel-gray/50 to-white border-2 border-bezaleel-red/20">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-bezaleel-dark mb-2">
                  30-Day Money Back Guarantee
                </h3>
                <p className="text-muted-foreground">
                  Not satisfied with our service? Get a full refund within 30 days, no questions asked.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-bezaleel-red to-bezaleel-accent text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white hover:text-bezaleel-red">
              On Scope
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Custom Solutions
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We offer tailored solutions for businesses with unique requirements. From enterprise-grade systems to specialized applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {customServices.map((service, index) => (
              <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-white/20 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white text-lg mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-white/10 border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Need Something Unique?
                </h3>
                <p className="text-white/90 mb-6">
                  Contact us for a personalized quote on custom development projects, enterprise solutions, and specialized business systems.
                </p>
                <Button size="lg" className="bg-white text-bezaleel-red hover:bg-gray-100 font-semibold px-8 py-3">
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
