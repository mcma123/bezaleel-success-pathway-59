
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Users, Shield, Clock, Award } from 'lucide-react';

const CompanyRegistration = () => {
  const registrationSteps = [
    {
      step: 1,
      title: "Name Reservation",
      description: "We help you reserve your company name with the relevant authorities",
      icon: FileText,
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Documentation Preparation",
      description: "Our experts prepare all required legal documents and forms",
      icon: Shield,
      duration: "2-3 days"
    },
    {
      step: 3,
      title: "Submission & Processing",
      description: "We submit your application and track progress with authorities",
      icon: Clock,
      duration: "7-14 days"
    },
    {
      step: 4,
      title: "Certificate Issuance",
      description: "Receive your official company registration certificate",
      icon: Award,
      duration: "1 day"
    }
  ];

  const services = [
    "Company Registration",
    "Business License Application",
    "Tax Registration (TIN)",
    "VAT Registration", 
    "Social Security Registration",
    "Workers Compensation",
    "Legal Compliance Consultation",
    "Post-Registration Support"
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
            Your Business Registration Made Simple
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We handle the entire company registration process across multiple African countries, 
            ensuring legal compliance and fast processing times.
          </p>
        </div>

        {/* Registration Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-bezaleel-dark mb-12 text-center">
            Our Registration Process
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-bezaleel-dark mb-6">
              Complete Registration Services
            </h3>
            <p className="text-muted-foreground mb-8">
              Our comprehensive registration services cover all aspects of business formation 
              and legal compliance across multiple African jurisdictions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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

          <div className="relative">
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                alt="Business registration consultation"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Users className="w-8 h-8 text-bezaleel-red" />
                  <div>
                    <h4 className="font-bold text-bezaleel-dark">Expert Consultation</h4>
                    <p className="text-sm text-muted-foreground">Free initial consultation</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get personalized advice on the best business structure for your needs 
                  and jurisdiction-specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyRegistration;
