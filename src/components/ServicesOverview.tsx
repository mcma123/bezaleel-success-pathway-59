
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesOverview = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      title: "Company Registration",
      description: "Complete business registration across South Africa, Zambia & Zimbabwe",
      features: ["CIPC/PACRA Registration", "Tax Number Setup", "Banking Assistance"]
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "Banking & Finance",
      description: "Corporate banking solutions and financial compliance",
      features: ["Account Opening", "Credit Facilities", "Financial Planning"]
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      title: "Digital Presence",
      description: "Professional websites and e-commerce solutions",
      features: ["Website Development", "E-commerce Stores", "SEO Optimization"]
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      title: "Legal Compliance",
      description: "Business licensing, permits and regulatory compliance",
      features: ["Business Licenses", "Tax Compliance", "Legal Documentation"]
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      title: "Business Protection",
      description: "Intellectual property and business insurance solutions",
      features: ["Trademark Registration", "Business Insurance", "IP Protection"]
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      title: "Virtual Office",
      description: "Professional business address and mail handling services",
      features: ["Business Address", "Mail Forwarding", "Meeting Rooms"]
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      title: "Systems Development",
      description: "Custom business systems and software solutions",
      features: ["Management Systems", "Custom Software", "API Integration"]
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
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
            return (
              <Card 
                key={service.title} 
                className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
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
