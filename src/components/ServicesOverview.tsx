
import { Building, Globe, CreditCard, FileText, Shield, Briefcase, Code, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesOverview = () => {
  const services = [
    {
      icon: Building,
      title: "Company Registration",
      description: "Complete business registration across South Africa, Zambia & Zimbabwe",
      features: ["CIPC/PACRA Registration", "Tax Number Setup", "Banking Assistance"]
    },
    {
      icon: CreditCard,
      title: "Banking & Finance",
      description: "Corporate banking solutions and financial compliance",
      features: ["Account Opening", "Credit Facilities", "Financial Planning"]
    },
    {
      icon: Globe,
      title: "Digital Presence",
      description: "Professional websites and e-commerce solutions",
      features: ["Website Development", "E-commerce Stores", "SEO Optimization"]
    },
    {
      icon: FileText,
      title: "Legal Compliance",
      description: "Business licensing, permits and regulatory compliance",
      features: ["Business Licenses", "Tax Compliance", "Legal Documentation"]
    },
    {
      icon: Shield,
      title: "Business Protection",
      description: "Intellectual property and business insurance solutions",
      features: ["Trademark Registration", "Business Insurance", "IP Protection"]
    },
    {
      icon: Briefcase,
      title: "Virtual Office",
      description: "Professional business address and mail handling services",
      features: ["Business Address", "Mail Forwarding", "Meeting Rooms"]
    },
    {
      icon: Code,
      title: "Systems Development",
      description: "Custom business systems and software solutions",
      features: ["Management Systems", "Custom Software", "API Integration"]
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Strategic consulting and market expansion support",
      features: ["Market Research", "Business Planning", "Growth Strategy"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bezaleel-dark mb-6">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From company registration to digital transformation, we provide end-to-end business services to help you succeed in African markets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-bezaleel-red/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-bezaleel-red group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-bezaleel-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-bezaleel-dark group-hover:text-bezaleel-red transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-bezaleel-red rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-bezaleel-red/10 rounded-full text-bezaleel-red font-medium hover:bg-bezaleel-red hover:text-white transition-all duration-300 cursor-pointer group">
            <span>Explore All Services</span>
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
