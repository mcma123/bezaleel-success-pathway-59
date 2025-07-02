
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const countries = [
    {
      id: 'south-africa',
      name: 'South Africa',
      flag: '🇿🇦',
      description: 'Register your company in Africa\'s most developed economy with seamless CIPC registration',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
      link: '/services/south-africa',
      services: [
        'CIPC Company Registration',
        'SARS Tax Registration',
        'B-BBEE Certification',
        'Business Bank Account Setup'
      ],
      highlights: [
        'Second-largest economy in Africa',
        'Part of BRICS, G20, WTO',
        'Advanced banking system',
        'Strong legal framework'
      ],
      timeline: '14 Business Days'
    },
    {
      id: 'zambia',
      name: 'Zambia',
      flag: '🇿🇲',
      description: 'Establish your business in the heart of Africa with PACRA registration and comprehensive support',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
      link: '/services/zambia',
      services: [
        'PACRA Company Registration',
        'Tax Registration (ZRA)',
        'Business Licensing',
        'Corporate Bank Account Setup'
      ],
      highlights: [
        'Strategic location in Central Africa',
        'Rich in natural resources',
        'Growing economy',
        'Stable political environment'
      ],
      timeline: '14 Business Days'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&h=1080&fit=crop" 
            alt="African Business"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <Badge className="mb-6 bg-bezaleel-red/90 text-white hover:bg-bezaleel-red border-0">
              <Building className="w-4 h-4 mr-2" />
              Business Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Business Registration & Support Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Choose your preferred country for company registration and comprehensive business support across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Country Selection */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Select Your Business Destination
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive business registration and support services in both South Africa and Zambia, 
              each offering unique advantages for your business expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {countries.map((country) => (
              <Card key={country.id} className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                      <MapPin className="w-4 h-4 mr-2" />
                      {country.name}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 text-4xl">
                    {country.flag}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-bezaleel-dark group-hover:text-bezaleel-red transition-colors flex items-center">
                    {country.name}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {country.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Timeline */}
                  <div className="bg-bezaleel-red/5 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-bezaleel-dark">Registration Timeline:</span>
                      <Badge className="bg-bezaleel-red text-white">
                        {country.timeline}
                      </Badge>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to={country.link} className="block">
                    <Button className="w-full bg-bezaleel-red text-white hover:bg-bezaleel-accent font-semibold py-3 group">
                      <span>Explore {country.name} Services</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bezaleel-red to-bezaleel-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your African Business Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you choose the best country for your business expansion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-bezaleel-red hover:bg-gray-100 font-semibold px-8 py-3">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bezaleel-red font-semibold px-8 py-3">
              Compare Countries
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
