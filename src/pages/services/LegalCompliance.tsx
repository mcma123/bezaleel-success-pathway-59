
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Globe, BookOpen, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalCompliance = () => {
  const complianceServices = [
    {
      icon: CheckCircle,
      title: "Regulatory Gap Analysis",
      description: "Comprehensive assessment of your current compliance status and identification of potential risk areas."
    },
    {
      icon: Users,
      title: "Compliance Training",
      description: "Staff training programs to ensure your team understands and implements compliance requirements."
    },
    {
      icon: Globe,
      title: "Multi-Jurisdictional Support",
      description: "Expert guidance across different countries and regulatory frameworks."
    },
    {
      icon: BookOpen,
      title: "Policy Development",
      description: "Creation of comprehensive compliance policies and procedures tailored to your business."
    }
  ];

  const countryGuides = [
    {
      country: "South Africa",
      image: "https://images.unsplash.com/photo-1484318571209-661cf29a69ea?w=600&h=400&fit=crop",
      description: "Navigate CIPC regulations, tax compliance, and business licensing requirements.",
      link: "/services/south-africa"
    },
    {
      country: "Zambia",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      description: "PACRA registration, regulatory compliance, and business operation guidelines.",
      link: "/services/zambia"
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
              Compliance Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bezaleel-dark mb-6">
              Legal Compliance
              <span className="block text-bezaleel-red">Made Simple</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We provide the clear guidance and practical solutions you need to ensure your business always meets its legal and regulatory duties.
            </p>
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="Legal compliance consulting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-8 text-center">
              Regulatory Compliance Consulting
            </h2>
            <div className="bg-gradient-to-r from-bezaleel-gray/50 to-white p-8 rounded-2xl border border-bezaleel-red/20 mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Our expert team helps businesses like yours navigate complex regulatory landscapes. We identify gaps, provide tailored solutions, and ensure your business remains fully compliant with all local regulations, allowing you to operate confidently and legally.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {complianceServices.map((service, index) => (
                <Card key={index} className="border border-gray-200 hover:border-bezaleel-red/30 hover:shadow-lg transition-all duration-300 hover-lift">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-bezaleel-red/10 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-bezaleel-red" />
                    </div>
                    <CardTitle className="text-xl text-bezaleel-dark">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Country-Specific Guides Section */}
      <section className="py-20 bg-gradient-to-br from-bezaleel-gray/30 via-white to-bezaleel-red/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Country-Specific Compliance Guides
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Detailed guidance tailored to specific regulatory environments and business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {countryGuides.map((guide, index) => (
              <Card key={index} className="overflow-hidden border border-gray-200 hover:border-bezaleel-red/30 hover:shadow-xl transition-all duration-300 hover-lift">
                <CardHeader className="p-0">
                  <div className="w-full h-48 overflow-hidden">
                    <img 
                      src={guide.image}
                      alt={`${guide.country} compliance guide`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <CardTitle className="text-2xl text-bezaleel-dark mb-2">
                      {guide.country}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-4">
                      {guide.description}
                    </CardDescription>
                    <Link to={guide.link}>
                      <Button variant="outline" className="border-bezaleel-red text-bezaleel-red hover:bg-bezaleel-red hover:text-white transition-all duration-300">
                        View Compliance Guide
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-bezaleel-red/20 bg-gradient-to-r from-bezaleel-gray/50 to-white overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-bezaleel-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10 text-bezaleel-red" />
                </div>
                <h3 className="text-3xl font-bold text-bezaleel-dark mb-4">
                  Find out more!
                </h3>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Contact us to find out more about our regulatory compliance consulting services. Our team of experts will revert within the next 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bezaleel-gradient text-white font-semibold px-8 py-4 hover:scale-105 transition-transform duration-300">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-bezaleel-red text-bezaleel-red hover:bg-bezaleel-red hover:text-white px-8 py-4 transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2" />
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

export default LegalCompliance;
