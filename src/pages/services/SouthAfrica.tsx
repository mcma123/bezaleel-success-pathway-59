
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Building, Users, Globe, TrendingUp, Shield, Clock, MapPin, Star, Award, Zap } from 'lucide-react';

const SouthAfrica = () => {
  const registrationSteps = [
    {
      step: 1,
      title: "Choosing an optimum business structure to register company in South Africa",
      description: "Prior to company formation, it is essential to choose the correct type of company. Generally, the most common type of business in South Africa is the private company (\"Pty Ltd\"), which is also known as a company limited by shares.",
      icon: Building,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
    },
    {
      step: 2,
      title: "Reservation of company name",
      description: "Bezaleel Consultants will search and reserve your company name with the CIPC website. Our team will reserve your company's name for up to 6 months. Each application for company name registration allows you to submit up to 4 names.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop"
    },
    {
      step: 3,
      title: "Preparation and submission of relevant documents",
      description: "All companies in South Africa require a Memorandum of Incorporation (MOI) to be registered. Bezaleel Consultants will assist in drafting the documents required to register company in South Africa, which includes certified identity copies, name confirmation certificate (COR9.4) and Power of attorney if applicable.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=800&h=400&fit=crop"
    },
    {
      step: 4,
      title: "Corporate bank account opening",
      description: "Depending on your business structure, the documents required will be slightly different. Bezaleel Consultants will help in consolidating the documents and opening a corporate account with a reputable bank.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
    }
  ];

  const businessStructures = [
    {
      title: 'Private Company ("Pty Ltd")',
      description: "The most common choice for foreigners looking to register company in South Africa, equivalent to a Limited Liability Company (LLC) in other jurisdictions.",
      features: [
        "Separate legal entity from shareholders",
        "Limited liability protection",
        "At least one director and shareholder required",
        "Maximum 50 shareholders",
        "No restrictions on foreign shareholding"
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=300&fit=crop",
      popular: true
    },
    {
      title: 'Personal Liability Companies ("Inc")',
      description: "A separate legal entity held jointly by current and previous directors, mostly used for companies of doctors, lawyers or accountants.",
      features: [
        "Minimum one director required",
        "Directors responsible for contractual liabilities",
        "Shareholders have limited liabilities",
        "Greater flexibility in profit distribution",
        "Lower setup costs than partnerships"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=300&fit=crop"
    },
    {
      title: 'Partnership',
      description: "Comprises 2 or more co-owners running a business together. Not a separate legal entity.",
      features: [
        "Partners liable for all debts and liabilities",
        "No separate taxes required",
        "Three types: General, Anonymous, Commanditarian",
        "No statutory audit requirements",
        "Shared profits and losses"
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=300&fit=crop"
    }
  ];

  const whyChooseSouthAfrica = [
    {
      category: "Political Stability",
      icon: Globe,
      description: "South Africa is part of WTO, IMF, G20, and BRICS. Ranks 32/180 on Press Freedom Index and 79/100 on Global Freedom Scores.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop"
    },
    {
      category: "Social Development", 
      icon: Users,
      description: "Diverse population with 95% literacy rate. National Development Plan aims to eliminate poverty and reduce inequality.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop"
    },
    {
      category: "Technology Hub",
      icon: TrendingUp,
      description: "Undergoing digital reinvention. Opportunity to invest in digital talents ahead of peers due to current talent shortage.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop"
    },
    {
      category: "Economic Growth",
      icon: Building,
      description: "Second-largest economy in Africa. Upper-middle-income emerging market with stock exchange among world's top 20.",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1920&h=1080&fit=crop" 
            alt="South Africa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <Badge className="mb-6 bg-bezaleel-red/90 text-white hover:bg-bezaleel-red border-0">
              <MapPin className="w-4 h-4 mr-2" />
              South Africa Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How to Register Company in South Africa?
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Bezaleel Consultants will complete your South Africa company formation through a seamless and fuss-free procedure.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 mr-2 text-bezaleel-red" />
                <span>3 days completion</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2 text-bezaleel-red" />
                <span>100% Remote process</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 mr-2 text-bezaleel-red" />
                <span>Fully compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red">
              <Zap className="w-4 h-4 mr-2" />
              Step by Step Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Company Registration Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined 4-step process ensures your South African company is registered quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {registrationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={step.step} className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-bezaleel-red text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-bezaleel-dark group-hover:text-bezaleel-red transition-colors">
                      Step {step.step}: {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red">
              <Clock className="w-4 h-4 mr-2" />
              Timeline
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              How Long Does It Take?
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-bezaleel-red/10 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-bezaleel-red to-bezaleel-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="font-bold text-bezaleel-dark mb-2 text-lg">Days</h3>
                  <p className="text-muted-foreground">Company registration & tax number</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-bezaleel-red to-bezaleel-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="font-bold text-bezaleel-dark mb-2 text-lg">Days</h3>
                  <p className="text-muted-foreground">Corporate bank account opening</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-bezaleel-red to-bezaleel-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="font-bold text-bezaleel-dark mb-2 text-lg">Week</h3>
                  <p className="text-muted-foreground">Start operations & issue invoices</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Structures */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red">
              <Building className="w-4 h-4 mr-2" />
              Business Structures
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Types of Business Structures
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right business structure for your South African company registration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessStructures.map((structure, index) => (
              <Card key={index} className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20 overflow-hidden relative">
                {structure.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-bezaleel-red text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={structure.image}
                    alt={structure.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-bezaleel-dark group-hover:text-bezaleel-red transition-colors">
                    {structure.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {structure.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {structure.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-bezaleel-red mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose South Africa */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red">
              <Award className="w-4 h-4 mr-2" />
              Why South Africa
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Why Register a Company in South Africa?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              South Africa offers numerous advantages for business registration and expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseSouthAfrica.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="group hover-lift text-center overflow-hidden border-2 border-transparent hover:border-bezaleel-red/20">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={reason.image}
                      alt={reason.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-bezaleel-dark group-hover:text-bezaleel-red transition-colors">
                      {reason.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bezaleel-red to-bezaleel-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Register Your South African Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let Bezaleel Consultants handle your South African company registration with our seamless, fuss-free process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-bezaleel-red hover:bg-gray-100 font-semibold px-8 py-3 shadow-xl">
              Start Registration
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bezaleel-red font-semibold px-8 py-3 shadow-xl">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SouthAfrica;
