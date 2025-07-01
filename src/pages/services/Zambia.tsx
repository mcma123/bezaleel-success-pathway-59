
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Globe, TrendingUp, Building, Shield, Smartphone, Zap, Clock, FileText, Bank, CheckCircle } from 'lucide-react';

const Zambia = () => {
  const keyHighlights = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100% Foreign Ownership",
      description: "No restrictions on foreign equity holdings in Zambian companies",
      color: "bg-green-50 border-green-200 text-green-700"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Minimum 2 Directors", 
      description: "At least one director must be resident in Zambia",
      color: "bg-blue-50 border-blue-200 text-blue-700"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Strategic Location",
      description: "Gateway to Southern African markets with excellent access",
      color: "bg-purple-50 border-purple-200 text-purple-700"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Registration",
      description: "Company incorporation in 1-3 business days with PACRA",
      color: "bg-orange-50 border-orange-200 text-orange-700"
    }
  ];

  const companyTypes = [
    {
      title: "Private Limited Company (LLC)",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
      items: [
        "Most common and flexible option",
        "Limited liability for shareholders",
        "Minimum 2 shareholders required",
        "100% foreign ownership allowed"
      ]
    },
    {
      title: "Public Limited Company (PLC)",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800",
      items: [
        "For larger ventures seeking public capital",
        "Can offer shares to the public",
        "Higher capital requirements",
        "More stringent regulations"
      ]
    },
    {
      title: "Branch Office",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800",
      items: [
        "Extension of foreign parent company",
        "Subject to Zambian tax laws",
        "Must appoint resident director/manager",
        "Suitable for established foreign entities"
      ]
    },
    {
      title: "Company Limited by Guarantee",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800",
      items: [
        "Typically for non-profit organizations",
        "Members guarantee specific amount",
        "Used for associations and clubs",
        "No share capital requirements"
      ]
    },
    {
      title: "Representative Office",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
      items: [
        "Non-commercial activities only",
        "Market research and promotion",
        "Cannot generate income in Zambia",
        "Liaison office for parent company"
      ]
    }
  ];

  const registrationSteps = [
    {
      step: "1",
      title: "Company Name Reservation",
      description: "We conduct thorough name searches and secure your preferred company name with PACRA (Patents and Companies Registration Agency). This process typically takes 1-2 working days.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800"
    },
    {
      step: "2",
      title: "Document Preparation & Filing",
      description: "Our experts draft and prepare all necessary incorporation documents, including Memorandum and Articles of Association, ensuring full compliance with Zambian law.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
    },
    {
      step: "3",
      title: "PACRA Registration & Certificate",
      description: "We handle the entire submission process with PACRA, overseeing registration until your Certificate of Incorporation and Certificate of Share Capital are issued (1-3 business days).",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800"
    },
    {
      step: "4",
      title: "Tax Registration & Bank Account",
      description: "Obtain your Tax Identification Number (TPIN) from ZRA and open corporate bank account with required documentation and compliance procedures (typically 7 days).",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800"
    }
  ];

  const requirements = [
    {
      title: "Minimum Shareholders",
      description: "At least 2 shareholders required",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Minimum Directors", 
      description: "At least 2 directors, one must be Zambia resident",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Company Secretary",
      description: "Qualified company secretary appointment mandatory",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Registered Office",
      description: "Must maintain registered office address in Zambia",
      icon: <MapPin className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: "Can a Foreigner Own the Company 100%?",
      answer: "Yes, 100% foreign ownership is generally allowed for companies incorporated in Zambia. There are typically no restrictions on the percentage of equity a foreign investor can hold."
    },
    {
      question: "How long does it take to register a company?",
      answer: "Name reservation takes 1-2 days, incorporation takes 1-3 business days with PACRA. Complete setup including tax registration and bank account readiness typically takes 1-2 weeks with our assistance."
    },
    {
      question: "Is Tax Registration required?",
      answer: "Yes, Tax Identification Number (TPIN) registration is mandatory for all businesses. It's essential for opening bank accounts, obtaining tax clearance, and participating in government tenders."
    },
    {
      question: "Can registered companies bid for Government Contracts?",
      answer: "Yes, companies legally registered in Zambia can bid for government contracts. Zambia's procurement laws often include preferences for local participation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4AA' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="text-6xl mr-4">🇿🇲</div>
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 text-lg px-4 py-2">
                Company Registration Services
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-bezaleel-dark mb-8">
              Register Your Company in 
              <span className="block text-emerald-600">Zambia</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              Your comprehensive guide to company registration in Zambia. From choosing the right business structure to obtaining all required licenses - we'll get you started efficiently.
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
              Why Register Your Business in Zambia?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Zambia offers an attractive business environment with strategic advantages for entrepreneurs and investors
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

      {/* Requirements Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Registration Requirements
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
                Key Requirements for Company Registration
              </h2>
              <div className="space-y-6">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      {req.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-bezaleel-dark mb-2">{req.title}</h3>
                      <p className="text-muted-foreground">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800"
                alt="Business registration in Zambia"
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-emerald-600">1-2</div>
                <div className="text-sm text-muted-foreground">Weeks Setup</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800"
                alt="Fast business registration"
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">1-3</div>
                <div className="text-sm">Business Days</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
                Registration Timeline
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
                Fast & Efficient Registration Process
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-bezaleel-dark mb-2">Name Reservation: 1-2 Days</h3>
                    <p className="text-muted-foreground">
                      Quick company name search and reservation with PACRA.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-bezaleel-dark mb-2">Incorporation: 1-3 Days</h3>
                    <p className="text-muted-foreground">
                      Document submission and certificate issuance by PACRA.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Bank className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-bezaleel-dark mb-2">Bank Account: ~7 Days</h3>
                    <p className="text-muted-foreground">
                      Corporate bank account opening after tax registration completion.
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
              Our Company Registration Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We guide you through every step of the registration process with expert support
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

      {/* Company Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Types of Business Entities in Zambia
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right business structure for your needs and objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyTypes.map((type, index) => (
              <Card key={index} className="group hover-lift border-2 border-transparent hover:border-emerald-200 transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-bezaleel-dark group-hover:text-emerald-600 transition-colors duration-300">
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about company registration in Zambia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover-lift">
                <h3 className="text-lg font-bold text-bezaleel-dark mb-4">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Register Your Company in Zambia?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Bezaleel Consultants today for expert guidance and end-to-end support for your business registration in Zambia.
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
