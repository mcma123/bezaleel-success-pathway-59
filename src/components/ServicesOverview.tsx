
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      title: "Company Incorporation",
      description: "We assist our clients to set up businesses in South Africa and Zambia",
      features: ["Company Registration", "Legal Documentation", "Business Setup"],
      link: "/services/company-incorporation"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "Banking & Finance",
      description: "Corporate banking solutions and financial compliance",
      features: ["Account Opening", "Credit Facilities", "Financial Planning"],
      link: "/services/banking-finance"
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      title: "Digital Presence",
      description: "Professional websites and e-commerce solutions",
      features: ["Website Development", "E-commerce Stores", "SEO Optimization"],
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      title: "Legal Compliance",
      description: "Business licensing, permits and regulatory compliance",
      features: ["Business Licenses", "Tax Compliance", "Legal Documentation"],
      link: "/services/legal-compliance"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bezaleel-dark mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock your business potential with our team of experts: fast, efficient, and transparent.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const ServiceCard = (
              <Card 
                key={service.title} 
                className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20 transition-all duration-300 overflow-hidden cursor-pointer"
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

            // Wrap first three cards (Company Incorporation, Banking & Finance, and Legal Compliance) with Link
            if (index === 0 || index === 1 || index === 3) {
              return (
                <Link key={service.title} to={service.link}>
                  {ServiceCard}
                </Link>
              );
            }

            return ServiceCard;
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/services">
            <div className="inline-flex items-center px-6 py-3 bg-bezaleel-red/10 rounded-full text-bezaleel-red font-medium hover:bg-bezaleel-red hover:text-white transition-all duration-300 cursor-pointer group">
              <span>Explore All Services</span>
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
