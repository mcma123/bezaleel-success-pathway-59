import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Globe, TrendingUp, Building, Shield, Smartphone, Zap, Clock, FileText, Calculator, CheckCircle, HelpCircle, CreditCard } from 'lucide-react';

const Zambia = () => {
  const keyHighlights = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "100% Foreign Ownership",
      description: "No restrictions on foreign equity ownership in Zambian companies",
      color: "bg-green-50 border-green-200 text-green-700"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Flexible Structure", 
      description: "Private Limited Company by Shares - most recommended structure",
      color: "bg-blue-50 border-blue-200 text-blue-700"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Strategic Gateway",
      description: "Access to Southern African market through Zambian base",
      color: "bg-purple-50 border-purple-200 text-purple-700"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Registration",
      description: "Complete setup in 1-2 weeks with expert assistance",
      color: "bg-orange-50 border-orange-200 text-orange-700"
    }
  ];

  const businessTypes = [
    {
      title: "Private Limited Company by Shares (LLC)",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
      items: [
        "Most common and flexible option",
        "Limited liability protection",
        "100% foreign ownership allowed",
        "Suitable for commercial activities"
      ]
    },
    {
      title: "Public Limited Company (PLC)",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800",
      items: [
        "For larger ventures",
        "Can raise capital from public",
        "Higher capital requirements",
        "Stringent regulations"
      ]
    },
    {
      title: "Company Limited by Guarantee",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800",
      items: [
        "Non-profit organizations",
        "Associations and clubs",
        "Members guarantee certain amount",
        "Community-focused entities"
      ]
    },
    {
      title: "Branch Office",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25abb?w=800",
      items: [
        "Extension of foreign company",
        "Subject to Zambian tax laws",
        "Requires resident director/manager",
        "Direct foreign presence"
      ]
    },
    {
      title: "Representative Office",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
      items: [
        "Non-commercial activities",
        "Market research purposes",
        "Promotion of parent company",
        "No income generation"
      ]
    }
  ];

  const registrationSteps = [
    {
      step: "1",
      title: "Company Name Reservation",
      description: "We conduct thorough name searches and secure your preferred company name with PACRA (Patents and Companies Registration Agency). Completed within 48 hours.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800"
    },
    {
      step: "2",
      title: "Document Preparation & Drafting",
      description: "Our experts draft all necessary incorporation documents including Memorandum and Articles of Association, ensuring full compliance with Zambian law.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
    },
    {
      step: "3",
      title: "PACRA Registration & Submission",
      description: "We handle the entire submission process, overseeing registration until Certificate of Incorporation and Certificate of Share Capital are issued.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800"
    },
    {
      step: "4",
      title: "Corporate Bank Account Opening",
      description: "We facilitate opening of corporate bank account with reputable local banks, handling all documentation and liaison processes.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25abb?w=800"
    }
  ];

  const requirements = [
    {
      title: "Minimum Requirements",
      items: [
        "Two shareholders minimum (individuals or corporate entities)",
        "Two directors minimum (no nationality restrictions)",
        "Qualified company secretary (mandatory)",
        "Registered office address in Zambia",
        "No minimum share capital requirement"
      ]
    },
    {
      title: "Key Documents Required",
      items: [
        "Valid passports of directors and shareholders",
        "Proof of residential address",
        "Memorandum and Articles of Association",
        "Board resolution for bank account opening",
        "Business profile and projections"
      ]
    },
    {
      title: "Tax Registration",
      items: [
        "Taxpayer Identification Number (TPIN) - mandatory",
        "Automatic generation upon PACRA registration",
        "VAT and PAYE registration as applicable",
        "Tax clearance certificate from ZRA"
      ]
    }
  ];

  const timeline = [
    {
      phase: "Name Reservation",
      duration: "48 Hours",
      description: "Company name search and reservation with PACRA"
    },
    {
      phase: "Incorporation",
      duration: "1-3 Days",
      description: "Certificate of Incorporation issued by PACRA"
    },
    {
      phase: "Tax Registration",
      duration: "Few Days",
      description: "TPIN generation and other tax registrations"
    },
    {
      phase: "Bank Account",
      duration: "7 Days",
      description: "Corporate bank account opening process"
    }
  ];

  const bankAccountRequirements = [
    {
      title: "Company Documents",
      items: [
        "Certified copies of Certificate of Incorporation",
        "Certificate of Share Capital",
        "Articles of Association",
        "Relevant PACRA forms (Form 5 for directors, Form 3 for shareholders)"
      ]
    },
    {
      title: "Legal & Tax Documents",
      items: [
        "Board Resolution authorizing account opening",
        "Taxpayer Identification Number (TPIN) proof",
        "Tax Clearance Certificate from ZRA",
        "Ultimate Beneficial Owner (UBO) Declaration"
      ]
    },
    {
      title: "Identity & Business Information",
      items: [
        "Valid passports/NRCs of signatories and directors",
        "Passport-sized photos of authorized signatories",
        "Proof of residential address (utility bill within 3 months)",
        "Business profile/plan overview",
        "Proof of business address (utility bill or lease agreement)"
      ]
    }
  ];

  const faqs = [
    {
      question: "Can a foreigner own 100% of a company in Zambia?",
      answer: "Yes, 100% foreign ownership is generally allowed for companies incorporated in Zambia. There are typically no restrictions on the percentage of equity a foreign investor can hold in a Zambian-registered company."
    },
    {
      question: "How long does it take to register a company in Zambia?",
      answer: "The core registration process takes 1-3 business days with PACRA. For complete setup including tax registration and bank account opening, the entire process typically ranges from 1 to 2 weeks with Bezaleel Consultants' assistance."
    },
    {
      question: "What is the minimum number of directors and shareholders required?",
      answer: "A minimum of two directors and two shareholders are required for a Private Limited Company. At least one director must be resident in Zambia. Shareholders can be of any nationality with no residency requirements."
    },
    {
      question: "Is tax registration required for all businesses?",
      answer: "Yes, Tax Identification Number (TPIN) registration is mandatory for all businesses in Zambia. It's essential for opening bank accounts, obtaining tax clearances, filing returns, and participating in government tenders."
    },
    {
      question: "Can a Zambian company access double tax treaties?",
      answer: "Yes, companies incorporated in Zambia can access Zambia's network of Double Taxation Treaties with numerous countries, providing benefits like reduced withholding tax rates on dividends, interest, and royalties."
    },
    {
      question: "Can a Zambian company bid for government contracts?",
      answer: "Yes, legally registered companies in Zambia can bid for government contracts. However, public procurement laws often include preferences for local participation, making strategic partnerships beneficial."
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
                Zambia Company Registration
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-bezaleel-dark mb-8">
              Register Company in 
              <span className="block text-emerald-600">Zambia</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              Your Seamless Path to Company Registration in Zambia
            </p>
            <Button size="lg" className="bezaleel-gradient text-white hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
              Start Registration Process
            </Button>
          </div>
        </div>
      </section>

      {/* Comprehensive Guide Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
              <Building className="w-4 h-4 mr-2" />
              Company Registration Guide
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6 text-center">
              Starting a Business in Zambia
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Embarking on your entrepreneurial journey in Zambia? The first crucial step is registering your company – and Bezaleel Consultants is here to make it seamless. With expert guidance for entrepreneurs and investors, we'll navigate Zambia's business landscape together. We'll walk you through the entire company registration process, from choosing the right business structure and securing your company name to expertly filing the necessary documents. Our team manages the complexities, providing knowledge and resources for a smooth and efficient registration. We'll ensure full compliance with relevant regulations, securing your strong start. Let's dive in and get you started!
            </p>
          </div>

          <div className="max-w-6xl mx-auto">

            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-bezaleel-dark mb-4">
                  1. Company Incorporation in Zambia
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground mb-6">
                  The most common and recommended legal entity for foreign investors in Zambia is the{' '}
                  <strong>Private Limited Company by Shares (Limited Liability Company - LLC)</strong>. 
                  This structure provides flexibility and limits liability for its shareholders. All company registrations 
                  are overseen by the <strong>Patents and Companies Registration Agency (PACRA)</strong>.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-bezaleel-dark mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mr-2" />
                    Key Features & Requirements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-emerald-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-bezaleel-dark">Minimum Shareholders</h5>
                          <p className="text-sm text-muted-foreground">
                            A minimum of <strong>two shareholders</strong> is generally required. Both individuals and 
                            corporate entities can act as shareholders, allowing for versatile ownership structures. 
                            100% foreign ownership is permitted.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Building className="w-5 h-5 text-emerald-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-bezaleel-dark">Minimum Directors</h5>
                          <p className="text-sm text-muted-foreground">
                            A minimum of <strong>two directors</strong> are typically required. There are no nationality 
                            restrictions for directors, offering flexibility for international businesses.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <FileText className="w-5 h-5 text-emerald-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-bezaleel-dark">Company Secretary</h5>
                          <p className="text-sm text-muted-foreground">
                            The appointment of a <strong>qualified company secretary is a mandatory requirement</strong> 
                            under Zambian company law. This individual plays a crucial role in ensuring corporate 
                            governance and regulatory compliance.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-emerald-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-bezaleel-dark">Registered Office</h5>
                          <p className="text-sm text-muted-foreground">
                            All companies must maintain a <strong>registered office address within Zambia</strong>. 
                            This address serves as the official point of contact for all legal and official communications.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="w-5 h-5 text-emerald-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-bezaleel-dark">Share Capital</h5>
                          <p className="text-sm text-muted-foreground">
                            While a minimum share capital was previously a common requirement, current information 
                            suggests that for a Private Limited Company by Shares, there may be{' '}
                            <strong>no statutory minimum share capital requirement</strong> in Zambia. We will confirm 
                            the latest specific requirements during your consultation.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-emerald-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-bezaleel-dark">Memorandum and Articles of Association (MAA)</h5>
                          <p className="text-sm text-muted-foreground">
                            These fundamental documents define the company's objectives, internal regulations, and 
                            operational framework.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                  <h4 className="text-xl font-bold text-bezaleel-dark mb-4 flex items-center">
                    <Zap className="w-6 h-6 text-emerald-600 mr-2" />
                    How Bezaleel Consultants Can Help with Incorporation
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-1" />
                        <div>
                          <h5 className="font-semibold text-bezaleel-dark">Name Reservation</h5>
                          <p className="text-sm text-muted-foreground">
                            We conduct thorough name searches and secure your preferred company name with PACRA.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-1" />
                        <div>
                          <h5 className="font-semibold text-bezaleel-dark">Document Drafting & Filing</h5>
                          <p className="text-sm text-muted-foreground">
                            Our experts draft and meticulously prepare all necessary incorporation documents, including 
                            the Memorandum and Articles of Association, ensuring full compliance with Zambian law.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-1" />
                        <div>
                          <h5 className="font-semibold text-bezaleel-dark">PACRA Registration</h5>
                          <p className="text-sm text-muted-foreground">
                            We handle the entire submission process with PACRA, overseeing the registration until your 
                            Certificate of Incorporation and Certificate of Share Capital are issued.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-1" />
                        <div>
                          <h5 className="font-semibold text-bezaleel-dark">Director & Secretary Appointment</h5>
                          <p className="text-sm text-muted-foreground">
                            We assist with the formal appointment processes for your directors and mandatory company 
                            secretary, ensuring all legal stipulations are met.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Bank Account Opening Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <CreditCard className="w-4 h-4 mr-2" />
              Banking Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              2. Corporate Bank Account Opening Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              A fully operational corporate bank account is crucial for managing business finances, 
              facilitating transactions, and adhering to financial regulations in Zambia. Bezaleel Consultants 
              streamlines the process, ensuring a compliant and efficient setup despite complex KYC requirements and specific documentation.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-bezaleel-dark mb-4 flex items-center">
                  <Zap className="w-8 h-8 text-blue-600 mr-3" />
                  How Bezaleel Consultants Ensures a Seamless Bank Account Opening:
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h5 className="font-semibold text-bezaleel-dark">Strategic Bank Liaison</h5>
                        <p className="text-sm text-muted-foreground">
                          Primary point of contact with our partner bank in Zambia, leveraging established relationships.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h5 className="font-semibold text-bezaleel-dark">Expert Document Preparation & Vetting</h5>
                        <p className="text-sm text-muted-foreground">
                          Precise guidance, meticulous preparation, and compliance with Zambian banking regulations to minimize delays and rejections.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h5 className="font-semibold text-bezaleel-dark">Navigating Complex KYC</h5>
                        <p className="text-sm text-muted-foreground">
                          Simplifying "Know Your Customer" and Anti-Money Laundering processes, ensuring effortless compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h5 className="font-semibold text-bezaleel-dark">Proactive Application Facilitation</h5>
                        <p className="text-sm text-muted-foreground">
                          Diligent follow-up and active navigation of bank queries, keeping the process moving forward.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h5 className="font-semibold text-bezaleel-dark">Remote Process</h5>
                        <p className="text-sm text-muted-foreground">
                          We handle the entire application process remotely, saving you time and hassle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Updated Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
              <Clock className="w-4 h-4 mr-2" />
              Business Setup Timeline
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              3. Timeline for Business Setup in Zambia
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              While specific timelines can vary based on governmental efficiency and the completeness of submitted 
              documentation, Bezaleel Consultants strives to make the process as swift as possible.
            </p>
            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200 max-w-3xl mx-auto">
              <h3 className="text-lg font-bold text-bezaleel-dark mb-2">
                Total Estimated Setup Time with Bezaleel Consultants' Support:
              </h3>
              <p className="text-muted-foreground">
                While individual steps are quick, a complete setup from initial consultation to a fully operational 
                company with a bank account can range from <strong>1-2 weeks</strong>, depending on the promptness 
                of client document submission and regulatory processing queues. We keep you informed at every stage.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift border-2 border-transparent hover:border-emerald-200 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-lg">
                  1
                </div>
                <CardTitle className="text-lg font-bold text-bezaleel-dark">
                  Company Name Reservation
                </CardTitle>
                <div className="text-2xl font-bold text-emerald-600">
                  48 Hours
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Typically completed within 48 hours with PACRA
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-2 border-transparent hover:border-emerald-200 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-lg">
                  2
                </div>
                <CardTitle className="text-lg font-bold text-bezaleel-dark">
                  Company Incorporation
                </CardTitle>
                <div className="text-2xl font-bold text-emerald-600">
                  1-3 Days
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Once all documentation is correctly prepared and submitted, the registration process can take approximately 1-3 business days** to receive the Certificate of Incorporation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-2 border-transparent hover:border-emerald-200 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-lg">
                  3
                </div>
                <CardTitle className="text-lg font-bold text-bezaleel-dark">
                  Tax Registration (TPIN)
                </CardTitle>
                <div className="text-2xl font-bold text-emerald-600">
                  7 Days
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Your TPIN is often automatically generated by ZRA upon PACRA registration. Formalizing other tax types (VAT, PAYE) usually follows immediately and can take a few additional days to a week.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-2 border-transparent hover:border-emerald-200 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-lg">
                  4
                </div>
                <CardTitle className="text-lg font-bold text-bezaleel-dark">
                  Corporate Bank Account
                </CardTitle>
                <div className="text-2xl font-bold text-emerald-600">
                  3 Days
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  After incorporation and TPIN acquisition, opening a bank account typically takes *3 days*, depending on the bank's internal KYC (Know Your Customer) and compliance procedures.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Regulatory Compliance */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Shield className="w-4 h-4 mr-2" />
              Ongoing Compliance
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Regulatory Compliance in Zambia
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Maintain good standing with ongoing support for regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-bezaleel-dark mb-6">
                Ongoing Compliance Services
              </h3>
              <div className="space-y-6">
                <p className="text-muted-foreground mb-6">
                  Maintaining compliance with statutory requirements is crucial for businesses in Zambia. Bezaleel Consultants provides comprehensive support to ensure your company meets all regulatory obligations, including:
                </p>
                
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-emerald-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-bezaleel-dark mb-2">Annual Returns</h4>
                    <p className="text-muted-foreground">
                      We'll prepare and submit annual returns to the Patents and Companies Registration Agency (PACRA).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-emerald-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-bezaleel-dark mb-2">Financial Statements</h4>
                    <p className="text-muted-foreground">
                      We'll prepare and submit financial statements to PACRA.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Calculator className="h-6 w-6 text-emerald-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-bezaleel-dark mb-2">Tax Compliance</h4>
                    <p className="text-muted-foreground">
                      We'll ensure your business meets all tax requirements, including payment of taxes and submission of tax returns to the Zambia Revenue Authority (ZRA).
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mt-6">
                  Our expertise ensures your business remains compliant, avoiding potential penalties and reputational risks. Let us handle the complexities, so you can focus on growing your business.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800"
                alt="Compliance support"
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-emerald-600">24/7</div>
                <div className="text-sm text-muted-foreground">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="group hover-lift border-2 border-transparent hover:border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-bezaleel-dark group-hover:text-emerald-600 transition-colors">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Bezaleel */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Why Choose Bezaleel Consultants?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift border-2 border-transparent hover:border-emerald-200 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-bezaleel-dark">
                  Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Extensive knowledge of Zambia's regulatory environment and business processes
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-2 border-transparent hover:border-emerald-200 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-bezaleel-dark">
                  Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Timely and efficient processing of company incorporation and bank account opening
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-2 border-transparent hover:border-emerald-200 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-bezaleel-dark">
                  Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Ongoing support to ensure your business remains compliant with all regulations
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Zambian Business Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let Bezaleel Consultants guide you through every step of setting up and running your business in Zambia. From registration to compliance, we've got you covered. Focus on growing your business while we handle the rest.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Zambia;
