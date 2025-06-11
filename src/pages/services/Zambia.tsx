
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Globe, TrendingUp, Building, Shield, Smartphone, Zap } from 'lucide-react';

const Zambia = () => {
  const keyHighlights = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Stable Democracy",
      description: "Multi-party democracy with peaceful transitions since 1991",
      color: "bg-green-50 border-green-200 text-green-700"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Young Population",
      description: "19+ million people with median age of 16.8 years",
      color: "bg-blue-50 border-blue-200 text-blue-700"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Strategic Location",
      description: "Gateway between Southern, Eastern, and Central Africa",
      color: "bg-purple-50 border-purple-200 text-purple-700"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Digital Innovation",
      description: "100%+ mobile penetration, Smart Zambia initiative",
      color: "bg-orange-50 border-orange-200 text-orange-700"
    }
  ];

  const businessSectors = [
    {
      title: "Mining & Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
      items: [
        "Copper mining and processing",
        "Gemstone extraction and cutting",
        "Manufacturing for regional export",
        "Mining equipment and services"
      ]
    },
    {
      title: "Agriculture & Agribusiness",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800",
      items: [
        "Commercial farming",
        "Food processing and packaging",
        "Agricultural inputs and machinery",
        "Export of agricultural products"
      ]
    },
    {
      title: "Tourism & Hospitality",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800",
      items: [
        "Victoria Falls tourism",
        "Safari and wildlife tourism",
        "Hospitality services",
        "Tour operations"
      ]
    },
    {
      title: "Energy & Utilities",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800",
      items: [
        "Renewable energy projects",
        "Power generation and distribution",
        "Water and sanitation services",
        "Energy-efficient technologies"
      ]
    },
    {
      title: "Services Sector",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
      items: [
        "Financial services",
        "Logistics and transportation",
        "Professional services",
        "Education and training"
      ]
    }
  ];

  const registrationSteps = [
    {
      step: "1",
      title: "Business Structure Selection",
      description: "Choose optimal business structure for your Zambian company. Most register as Private Limited Companies with PACRA (Patents and Companies Registration Agency).",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800"
    },
    {
      step: "2", 
      title: "Company Name Reservation",
      description: "Reserve your company name with PACRA and ensure compliance with Zambian naming requirements.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
    },
    {
      step: "3",
      title: "Document Preparation & Submission",
      description: "Prepare Articles of Association, company forms, and director details. Foreign documents must be notarized and authenticated.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800"
    },
    {
      step: "4",
      title: "Tax Registration & Banking",
      description: "Register with Zambia Revenue Authority (ZRA) for tax purposes and open corporate bank accounts with leading Zambian banks.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300D4AA" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="text-6xl mr-4">🇿🇲</div>
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 text-lg px-4 py-2">
                Zambia Services
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-bezaleel-dark mb-8">
              Register Your Company in 
              <span className="block text-emerald-600">Zambia</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              Establish your business in Zambia's growing economy with our comprehensive company registration services.
            </p>
            <Button size="lg" className="bezaleel-gradient text-white hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
              Start Registration Process
            </Button>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Why Choose Zambia for Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the advantages of establishing your business in one of Africa's most stable economies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyHighlights.map((highlight, index) => (
              <Card key={index} className={`${highlight.color} border-2 hover-lift group transition-all duration-300`}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <CardTitle className="text-lg font-bold mb-2">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Demographics */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Governance & Demographics
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
                Stable Democracy with Growing Population
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-bezaleel-dark mb-2">Political Stability</h3>
                    <p className="text-muted-foreground">
                      Zambia maintains a stable multi-party democracy with peaceful transitions of power since 1991. Member of AU, SADC, COMESA, and Commonwealth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-bezaleel-dark mb-2">Dynamic Workforce</h3>
                    <p className="text-muted-foreground">
                      Young population of 19+ million with median age of 16.8 years. English as official language facilitates international business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-bezaleel-dark mb-2">Vision 2030</h3>
                    <p className="text-muted-foreground">
                      Government focus on becoming prosperous middle-income nation through economic diversification and infrastructure development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800"
                alt="Zambia landscape"
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-emerald-600">19M+</div>
                <div className="text-sm text-muted-foreground">Population</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Innovation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800"
                alt="Digital technology"
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%+</div>
                <div className="text-sm">Mobile Penetration</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
                Digital Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
                Rapidly Advancing Digital Landscape
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Smartphone className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-bezaleel-dark mb-2">Mobile & Internet Growth</h3>
                    <p className="text-muted-foreground">
                      Over 100% mobile phone penetration with rapidly growing internet connectivity across the country.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-bezaleel-dark mb-2">Smart Zambia Initiative</h3>
                    <p className="text-muted-foreground">
                      Government's Smart Zambia initiative promotes ICT development and e-governance solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-bezaleel-dark mb-2">Tech Startup Potential</h3>
                    <p className="text-muted-foreground">
                      Significant opportunities in fintech, agritech, and digital services with supportive policies for innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              How to Register a Company in Zambia
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expert team will guide you through Zambia's business registration process
            </p>
          </div>

          <div className="space-y-16">
            {registrationSteps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-bezaleel-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-2xl shadow-xl hover-lift w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Sectors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Key Business Sectors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore thriving sectors and opportunities across Zambia's diverse economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessSectors.map((sector, index) => (
              <Card key={index} className="group hover-lift border-2 border-transparent hover:border-emerald-200 transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-bezaleel-dark group-hover:text-emerald-600 transition-colors duration-300">
                    {sector.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sector.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Zambian Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for expert guidance on company registration and business setup in Zambia.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-3">
            Get Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Zambia;
