
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessServices = () => {
  const countries = [
    {
      id: 'south-africa',
      name: 'South Africa',
      flag: '🇿🇦',
      description: 'Unlock growth potential with expert support: seamless company registration, corporate bank account opening, and tailored accounting & tax services.',
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
      timeline: '10 days'
    },
    {
      id: 'zambia',
      name: 'Zambia',
      flag: '🇿🇲',
      description: 'Seamlessly establish your business. Bezaleel Consultants provides full support for company registration, corporate bank account setup, and reliable accounting & tax solutions',
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
              Select Your Market
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Business Setup Simplified
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Our expert services provide a seamless foundation for businesses entering the South African and Zambian markets. From company registration to tax compliance and corporate banking setup, we offer comprehensive support to get your business up and running efficiently.
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

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-bezaleel-red/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-bezaleel-accent/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-bezaleel-red/5 to-bezaleel-accent/5 rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6 animate-bounce-in">
              Unlocking Potential, Driving Success. Empowering Businesses
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our vision is to empower businesses to thrive in the vibrant markets of South Africa 🇿🇦 and Zambia 🇿🇲, 
                unlocking their full potential and driving growth across the African continent.
              </p>
            </div>
          </div>

          {/* Animated Visual Elements */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-bezaleel-red to-bezaleel-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-bezaleel-dark">Growth</h3>
            </div>
            
            <div className="text-6xl animate-bounce text-bezaleel-red">→</div>
            
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-bezaleel-accent to-bezaleel-red rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-bezaleel-dark">Success</h3>
            </div>
            
            <div className="text-6xl animate-bounce text-bezaleel-red" style={{ animationDelay: '0.2s' }}>→</div>
            
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-bezaleel-red to-bezaleel-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-bezaleel-dark">Empowerment</h3>
            </div>
          </div>

          {/* Flag Animation */}
          <div className="flex justify-center space-x-12 mb-8">
            <div className="text-center animate-fade-in-up hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.8s' }}>
              <div className="text-6xl mb-2 animate-bounce">🇿🇦</div>
              <p className="text-bezaleel-dark font-semibold">South Africa</p>
            </div>
            <div className="text-center animate-fade-in-up hover:scale-110 transition-transform duration-300" style={{ animationDelay: '1s' }}>
              <div className="text-6xl mb-2 animate-bounce" style={{ animationDelay: '0.3s' }}>🇿🇲</div>
              <p className="text-bezaleel-dark font-semibold">Zambia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bezaleel-red to-bezaleel-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Confidently Launch Your Business in South Africa or Zambia?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get in touch with us today to explore tailored solutions and expert guidance. Our dedicated team will help you confidently navigate these vibrant markets, ensuring your business thrives.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessServices;
