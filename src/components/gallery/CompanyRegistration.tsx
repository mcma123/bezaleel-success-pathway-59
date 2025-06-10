
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Users, Shield, Clock, Award, MapPin, CreditCard, Calculator } from 'lucide-react';

const CompanyRegistration = () => {
  const registrationSteps = [
    {
      step: 1,
      title: "Name Search & Documentation",
      description: "Company name availability check and collection of due diligence documents",
      icon: FileText,
      duration: "Same day"
    },
    {
      step: 2,
      title: "Remote Registration Process",
      description: "Complete company formation without requiring travel to South Africa",
      icon: Shield,
      duration: "3 days"
    },
    {
      step: 3,
      title: "Corporate Bank Account",
      description: "Assistance with opening local bank account for foreign companies",
      icon: CreditCard,
      duration: "3 days"
    },
    {
      step: 4,
      title: "Operations Ready",
      description: "Start operations and issue invoices with your new company",
      icon: Award,
      duration: "1 week total"
    }
  ];

  const documents = [
    "Company Registration Certificate",
    "Notice of Incorporation", 
    "Memorandum of Incorporation (MOI)",
    "South Africa Company Tax Number",
    "Digital copies of all documents"
  ];

  const services = [
    "Company Registration",
    "Business License Application",
    "Tax Registration (SARS)",
    "VAT Registration", 
    "Corporate Bank Account Opening",
    "Monthly Bookkeeping Services",
    "Financial Statements Preparation",
    "Annual Tax Return Filings"
  ];

  const ongoingSupport = [
    "Monthly bookkeeping by Chartered Accountants",
    "SARS regulatory compliance monitoring",
    "Financial statements preparation",
    "Annual tax return filings",
    "Ongoing legal compliance consultation"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-bezaleel-accent/10 text-bezaleel-accent hover:bg-bezaleel-accent hover:text-white">
            Company Registration
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bezaleel-dark mb-6">
            South Africa Company Registration Made Simple
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete your South Africa company formation through our seamless and fuss-free procedure. 
            Start operations within 1 week without traveling to South Africa.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center hover-lift">
            <CardContent className="p-6">
              <MapPin className="w-12 h-12 text-bezaleel-red mx-auto mb-4" />
              <h3 className="font-bold text-bezaleel-dark mb-2">100% Remote Process</h3>
              <p className="text-sm text-muted-foreground">No travel required to South Africa during registration</p>
            </CardContent>
          </Card>
          <Card className="text-center hover-lift">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-bezaleel-red mx-auto mb-4" />
              <h3 className="font-bold text-bezaleel-dark mb-2">3-Day Registration</h3>
              <p className="text-sm text-muted-foreground">Receive company documents and tax number within 3 days</p>
            </CardContent>
          </Card>
          <Card className="text-center hover-lift">
            <CardContent className="p-6">
              <CreditCard className="w-12 h-12 text-bezaleel-red mx-auto mb-4" />
              <h3 className="font-bold text-bezaleel-dark mb-2">Bank Account Setup</h3>
              <p className="text-sm text-muted-foreground">Corporate bank account opened within 3 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Registration Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-bezaleel-dark mb-12 text-center">
            Our Streamlined Registration Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationSteps.map((step, index) => (
              <Card 
                key={step.step} 
                className="relative hover-lift group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-bezaleel-red text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-bezaleel-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-bezaleel-red group-hover:text-white transition-all duration-300">
                    <step.icon className="w-8 h-8 text-bezaleel-red group-hover:text-white" />
                  </div>
                  
                  <h4 className="font-bold text-bezaleel-dark mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  
                  <Badge variant="secondary" className="bg-bezaleel-gray text-bezaleel-dark">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Documents You'll Receive */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-bezaleel-dark mb-4">
                  Documents You'll Receive Within 3 Days
                </h3>
                <p className="text-muted-foreground">
                  All documents are provided digitally for immediate use
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((document, index) => (
                  <div key={document} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-bezaleel-red flex-shrink-0" />
                    <span className="text-sm font-medium">{document}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-bezaleel-dark mb-6">
              Complete Registration Services
            </h3>
            <p className="text-muted-foreground mb-8">
              Our comprehensive registration services cover all aspects of South African business formation 
              and ensure full compliance with SARS regulations.
            </p>
            
            <div className="grid grid-cols-1 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={service} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-bezaleel-red flex-shrink-0" />
                  <span className="text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>

            <Button className="bezaleel-gradient text-white ripple-effect">
              Start Registration Process
            </Button>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-bezaleel-dark mb-6">
              Ongoing Compliance Support
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team of Chartered Accountants ensures your company continues to meet all 
              regulatory requirements set by the South African Revenue Service (SARS).
            </p>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Calculator className="w-8 h-8 text-bezaleel-red" />
                  <div>
                    <h4 className="font-bold text-bezaleel-dark">Chartered Accountants</h4>
                    <p className="text-sm text-muted-foreground">Professional ongoing support</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {ongoingSupport.map((support, index) => (
                    <div key={support} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-bezaleel-red flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{support}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-bezaleel-red to-bezaleel-accent text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Register Your South African Company?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Complete registration in 3 days, bank account in 3 days, operations ready in 1 week.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="px-8 py-4 bg-white text-bezaleel-red rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 cursor-pointer">
                    Start Registration Now
                  </div>
                  <div className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-bezaleel-red transition-colors duration-300 cursor-pointer">
                    Free Consultation
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompanyRegistration;
