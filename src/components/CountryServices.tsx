
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveMap from './InteractiveMap';

const CountryServices = () => {
  const countries = [
    {
      name: "South Africa",
      flag: "🇿🇦",
      description: "Complete business setup and digital transformation services",
      stats: {
        companies: "2500+",
        satisfaction: "98%",
        timeToSetup: "14 days"
      },
      color: "from-green-500 to-yellow-500"
    },
    {
      name: "Zambia",
      flag: "🇿🇲",
      description: "Professional business registration and compliance services",
      stats: {
        companies: "2000+",
        satisfaction: "96%",
        timeToSetup: "14 days"
      },
      color: "from-blue-500 to-green-500"
    }
  ];

  // WhatsApp configuration
  const phoneNumber = "26377251527"; // WhatsApp API number without + and spaces
  const requestMessage = "Hello! I'm interested in requesting services for a new country not currently listed.";
  const consultationMessage = "Hello! I'd like to schedule a consultation for business setup services.";
  const requestWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(requestMessage)}`;
  const consultationWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(consultationMessage)}`;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-bezaleel-accent/10 text-bezaleel-accent hover:bg-bezaleel-accent hover:text-white">
            Jurisdictions
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bezaleel-dark mb-6">
            Business Setup Across Africa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Establish your business confidently in South Africa or Zambia with our expert team. We provide the strategies and support to move beyond struggle to significant growth.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-bezaleel-dark mb-4">Interactive Service Map</h3>
            <p className="text-gray-600">Explore our services by country with detailed Google Maps integration</p>
          </div>
          <InteractiveMap />
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {countries.map((country, index) => (
            <Card 
              key={country.name}
              className="hover-lift border-2 border-transparent hover:border-bezaleel-red/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${country.color} opacity-10`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-4xl">{country.flag}</span>
                      <div>
                        <CardTitle className="text-2xl font-bold text-bezaleel-dark">
                          {country.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {country.description}
                        </CardDescription>
                      </div>
                    </div>
                    <MapPin className="w-8 h-8 text-bezaleel-red" />
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="w-5 h-5 text-bezaleel-red mr-1" />
                      </div>
                      <div className="text-lg font-bold text-bezaleel-dark">{country.stats.companies}</div>
                      <div className="text-xs text-gray-500">Companies</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Award className="w-5 h-5 text-bezaleel-red mr-1" />
                      </div>
                      <div className="text-lg font-bold text-bezaleel-dark">{country.stats.satisfaction}</div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="w-5 h-5 text-bezaleel-red mr-1" />
                      </div>
                      <div className="text-lg font-bold text-bezaleel-dark">{country.stats.timeToSetup}</div>
                      <div className="text-xs text-gray-500">Setup Time</div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to={country.name === "South Africa" ? "/services/south-africa" : "/services/zambia"}
                    className="flex-1"
                  >
                    <Button className="w-full bezaleel-gradient text-white hover:scale-105 transition-transform duration-300">
                      Get Started
                    </Button>
                  </Link>
                  <Link 
                    to={country.name === "South Africa" ? "/services/south-africa" : "/services/zambia"}
                    className="flex-1"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full border-bezaleel-red text-bezaleel-red hover:bg-bezaleel-red hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-bezaleel-red to-bezaleel-accent text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Expanding to More African Countries
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We're constantly expanding our services to cover more African markets. 
                Contact us to discuss your business setup needs in other countries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={requestWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    variant="secondary" 
                    className="bg-white text-bezaleel-red hover:bg-white/90"
                  >
                    Request New Country
                  </Button>
                </a>
                <a 
                  href={consultationWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-bezaleel-red"
                  >
                    Schedule Consultation
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CountryServices;
