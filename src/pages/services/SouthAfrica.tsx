
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Building, Users, Globe, TrendingUp, Shield, Clock, MapPin } from 'lucide-react';

const SouthAfrica = () => {
  const registrationSteps = [
    {
      step: 1,
      title: "Choosing an optimum business structure to register company in South Africa",
      description: "Prior to company formation, it is essential to choose the correct type of company. Generally, the most common type of business in South Africa is the private company (\"Pty Ltd\"), which is also known as a company limited by shares.",
      icon: Building
    },
    {
      step: 2,
      title: "Reservation of company name",
      description: "Bezaleel Consultants will search and reserve your company name with the CIPC website. Our team will reserve your company's name for up to 6 months. Each application for company name registration allows you to submit up to 4 names.",
      icon: Shield
    },
    {
      step: 3,
      title: "Preparation and submission of relevant documents",
      description: "All companies in South Africa require a Memorandum of Incorporation (MOI) to be registered. Bezaleel Consultants will assist in drafting the documents required to register company in South Africa, which includes certified identity copies, name confirmation certificate (COR9.4) and Power of attorney if applicable.",
      icon: Users
    },
    {
      step: 4,
      title: "Corporate bank account opening",
      description: "Depending on your business structure, the documents required will be slightly different. Bezaleel Consultants will help in consolidating the documents and opening a corporate account with a reputable bank.",
      icon: TrendingUp
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
      ]
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
      ]
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
      ]
    }
  ];

  const whyChooseSouthAfrica = [
    {
      category: "Political",
      icon: Globe,
      description: "South Africa is part of WTO, IMF, G20, and BRICS. Ranks 32/180 on Press Freedom Index and 79/100 on Global Freedom Scores."
    },
    {
      category: "Social", 
      icon: Users,
      description: "Diverse population with 95% literacy rate. National Development Plan aims to eliminate poverty and reduce inequality."
    },
    {
      category: "Technological",
      icon: TrendingUp,
      description: "Undergoing digital reinvention. Opportunity to invest in digital talents ahead of peers due to current talent shortage."
    },
    {
      category: "Economic",
      icon: Building,
      description: "Second-largest economy in Africa. Upper-middle-income emerging market with stock exchange among world's top 20."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-bezaleel-red/10 text-bezaleel-red hover:bg-bezaleel-red hover:text-white">
              <MapPin className="w-4 h-4 mr-2" />
              South Africa Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bezaleel-dark mb-6">
              How to Register Company in South Africa?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Bezaleel Consultants will complete your South Africa company formation through a seamless and fuss-free procedure.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-bezaleel-red" />
                <span>3 days completion</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-bezaleel-red" />
                <span>100% Remote process</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-bezaleel-red" />
                <span>Fully compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Company Registration Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined 4-step process ensures your South African company is registered quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {registrationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={step.step} className="hover-lift border-2 border-transparent hover:border-bezaleel-red/20">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-bezaleel-red text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <Icon className="w-8 h-8 text-bezaleel-red" />
                    </div>
                    <CardTitle className="text-xl font-bold text-bezaleel-dark mt-4">
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
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              How Long Does It Take?
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-bezaleel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-bezaleel-red">3</span>
                  </div>
                  <h3 className="font-bold text-bezaleel-dark mb-2">Days</h3>
                  <p className="text-muted-foreground text-sm">Company registration & tax number</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-bezaleel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-bezaleel-red">3</span>
                  </div>
                  <h3 className="font-bold text-bezaleel-dark mb-2">Days</h3>
                  <p className="text-muted-foreground text-sm">Corporate bank account opening</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-bezaleel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-bezaleel-red">1</span>
                  </div>
                  <h3 className="font-bold text-bezaleel-dark mb-2">Week</h3>
                  <p className="text-muted-foreground text-sm">Start operations & issue invoices</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Structures */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Types of Business Structures
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right business structure for your South African company registration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessStructures.map((structure, index) => (
              <Card key={index} className="hover-lift border-2 border-transparent hover:border-bezaleel-red/20">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-bezaleel-dark">
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
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
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
                <Card key={index} className="hover-lift text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-bezaleel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-bezaleel-red" />
                    </div>
                    <CardTitle className="text-lg font-bold text-bezaleel-dark">
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
      <section className="py-20 bg-gradient-to-r from-bezaleel-red to-bezaleel-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Register Your South African Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let Bezaleel Consultants handle your South African company registration with our seamless, fuss-free process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-bezaleel-red hover:bg-gray-100 font-semibold px-8 py-3">
              Start Registration
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bezaleel-red font-semibold px-8 py-3">
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
