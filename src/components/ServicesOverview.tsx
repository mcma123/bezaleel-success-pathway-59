
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      title: "Company Incorporation",
      description: "At Bezaleel Consultants, we specialize in guiding businesses through the company incorporation process in South Africa and Zambia. Our expert team ensures a seamless and efficient experience, helping you establish a strong foundation for growth and success.",
      link: "/services"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "Corporate Bank Account Services",
      description: "Streamline your financial operations with our expert corporate bank account opening services in South Africa and Zambia. Our team will guide you through the process, ensuring a smooth and efficient experience.",
      link: "/services"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      title: "Compliance Services",
      description: "Compliance made easy. Our team of experts will guide you through regulatory requirements, ensuring your business operates smoothly and within the law.",
      link: "/services/legal-compliance"
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      title: "Digital Presence",
      description: "At Bezaleel Consultants, we deliver smart digital solutions—from web development and e-commerce to accounting, HR, and ERP systems and all types of business systems designed to streamline operations and drive business growth.",
      link: "#"
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
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );

            // Wrap cards with Link except for Digital Presence which has no link
            if (service.link !== "#") {
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
              <span>Jurisdictions</span>
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
