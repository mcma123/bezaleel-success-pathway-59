import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Building, Users, Globe, TrendingUp, Shield, Clock, MapPin, Star, Award, Zap, FileCheck, Calculator, PiggyBank, HelpCircle, CreditCard } from 'lucide-react';

const SouthAfrica = () => {
  const registrationSteps = [
    {
      step: 1,
      title: "Selecting Your Ideal Business Structure",
      description: "Before formalizing your company, it's essential to choose the right legal structure for your business needs. While various options exist, the Private Company (\"Pty Ltd\") – or a company limited by shares – is generally the most common and versatile choice for businesses in South Africa. Our team will guide you through this critical decision to ensure it perfectly aligns with your operational goals.",
      icon: Building,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
    },
    {
      step: 2,
      title: "Company Name Reservation",
      description: "Once your business structure is determined, Bezaleel Consultants efficiently handles the next crucial step: reserving your preferred company name with the Companies and Intellectual Property Commission (CIPC). We will submit up to four potential names on your behalf, and your chosen name will be secured for up to 6 months, giving you ample time for the full registration process to unfold.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop"
    },
    {
      step: 3,
      title: "Document Preparation and Submission",
      description: "Once your name is reserved, we'll move on to preparing all the necessary documents for your company's registration in South Africa. Every company requires a Memorandum of Incorporation (MOI), and Bezaleel Consultants will expertly draft this, along with other essential paperwork. This typically includes certified copies of the applicant's ID, certified IDs for all directors and incorporators, your name confirmation certificate (COR9.4), and a Power of Attorney if needed.",
      icon: FileCheck,
      image: "https://images.unsplash.com/photo-1570929057588-6952f7dd2305?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      step: 4,
      title: "Seamless Corporate Bank Account Opening",
      description: "With your company officially registered in South Africa, the next crucial step is opening a corporate bank account. The exact documents required can vary slightly depending on your specific business structure. Regardless, Bezaleel Consultants will simplify this process by helping you consolidate all necessary documents and facilitating the opening of your corporate account with a reputable local bank.",
      icon: PiggyBank,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
    }
  ];

  const taxObligations = [
    {
      title: "Corporate Income Tax (CIT)",
      description: "Standard rate of 27% for resident companies on worldwide income, while non-resident companies pay tax only on South African-sourced income.",
      features: [
        "27% standard rate for companies",
        "Small Business Corporation rates: 0% on first ZAR 95,750",
        "7% on income ZAR 95,750 - ZAR 365,000",
        "21% on income ZAR 365,000 - ZAR 550,000",
        "27% on income above ZAR 550,000"
      ],
      icon: Calculator,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Value-Added Tax (VAT)",
      description: "15% VAT rate applies to companies conducting business activities in South Africa.",
      features: [
        "Mandatory registration if turnover exceeds ZAR 1 million",
        "Voluntary registration if income exceeds ZAR 50,000",
        "Standard 15% VAT rate",
        "Monthly or bi-monthly returns required"
      ],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Audit Requirements",
      description: "Audit requirements vary based on company type and public interest score.",
      features: [
        "All public companies require audit",
        "Private companies with Public Interest Score > 350",
        "Companies holding > ZAR 5 million in fiduciary assets",
        "Most private companies exempt from mandatory audit"
      ],
      icon: FileCheck,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const complianceSteps = [
    {
      title: "CIPC Compliance & Maintenance",
      description: "Maintaining accurate records with the Companies and Intellectual Property Commission (CIPC) is fundamental to your company's good standing.",
      icon: Shield
    },
    {
      title: "SARS Tax Registration",
      description: "We ensure your business is properly registered for all applicable taxes, including VAT and Corporate Income Tax.",
      icon: Calculator
    },
    {
      title: "Ongoing Support",
      description: "Our expert professionals provide timely advice on tax submissions and payments, helping you avoid penalties.",
      icon: Users
    }
  ];

  const faqs = [
    {
      question: "Is a company secretary necessary to incorporate in South Africa?",
      answer: "No, a company secretary is only mandatory for public companies. A private company is not required to appoint a company secretary. However, all companies in South Africa must appoint a public officer, who must be a local resident in South Africa."
    },
    {
      question: "Can a foreigner register a business in South Africa?",
      answer: "Yes, absolutely. Foreigners can register a business in South Africa without any restrictions on foreign ownership or nationality for directors and shareholders. The primary requirement is a valid passport issued by your country of residence."
    },
    {
      question: "Can I register a Close Corporation (CC) in South Africa?",
      answer: "Under the New Companies Act 2008, new Close Corporations (CCs) can no longer be registered in South Africa. However, existing Close Corporations remain valid legal entities."
    },
    {
      question: "Do I need to register my business for tax?",
      answer: "No, if your business is registered with the CIPC, you typically do not need to take separate action for initial income tax registration. Upon successful company registration, SARS will automatically generate an Income Tax reference number for your company."
    },
    {
      question: "What is a public officer?",
      answer: "A public officer serves as the primary representative for all tax-related matters of the company. This individual is responsible for submitting all necessary returns and communicating with SARS on behalf of the company. A public officer must be a registered taxpayer with SARS and reside in South Africa."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
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
              Complete South Africa Company Registration Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Bezaleel Consultants provides complete support for clients looking to legally start a business in South Africa. Our all-inclusive service package ensures a seamless setup, covering company registration, corporate bank account opening, and expertly managing your accounting and tax obligations.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red">
              <Zap className="w-4 h-4 mr-2" />
              Company Incorporation Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              How to Register Your Company in South Africa?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Bezaleel Consultants, we make establishing your company in South Africa a truly seamless and fuss-free process.
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

      {/* Setup Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red">
              <Clock className="w-4 h-4 mr-2" />
              Setup Timeline
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Setup Timeline
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card className="p-6 border-2 border-bezaleel-red/10 shadow-xl hover-lift">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-bezaleel-red text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-bezaleel-dark mb-2">Document submission</h3>
                    <p className="text-muted-foreground">You provide necessary documents to Bezaleel Consultants.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-bezaleel-red/10 shadow-xl hover-lift">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-bezaleel-red text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-bezaleel-dark mb-2">Company registration: 7 days to receive</h3>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Company tax number</li>
                      <li>• Digital copies of core company documents (e.g., Company Registration Certificate, Notice of Incorporation, MOI)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-bezaleel-red/10 shadow-xl hover-lift">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-bezaleel-red text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-bezaleel-dark mb-2">Bank account opening</h3>
                    <p className="text-muted-foreground">3 additional days (approx.)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-bezaleel-red/10 shadow-xl hover-lift bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-bezaleel-red text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-bezaleel-dark mb-2">Total setup time</h3>
                    <p className="text-muted-foreground">Approximately 2 weeks</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Bank Account Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red">
              <CreditCard className="w-4 h-4 mr-2" />
              Corporate Bank Account
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Opening Your Corporate Bank Account
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A dedicated corporate bank account is essential for transparent financial management and compliance of your South African business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-bezaleel-red/10 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-bezaleel-dark mb-4">Expert Assistance</h3>
                  <p className="text-muted-foreground mb-6">
                    Bezaleel Consultants provides expert assistance to make this crucial step effortless. We help you prepare all required documentation and liaise directly with leading local banks on your behalf.
                  </p>
                  <div className="flex items-center text-bezaleel-red mb-4">
                    <Clock className="w-5 h-5 mr-3" />
                    <span className="font-semibold">For non-resident directors, this vital process is often concluded in as little as 3 days</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-bezaleel-dark mb-4">Why Choose Us to Open Your Corporate Account?</h3>
                  <p className="text-muted-foreground mb-4">
                    At Bezaleel Consultants, we're passionate about empowering entrepreneurs like you. We've already helped thousands of businesses thrive in South Africa by providing them with brand new, fully functional business accounts.
                  </p>
                  <p className="text-muted-foreground">
                    Our team of dedicated experts is committed to not only delivering top-tier solutions but also ensuring you receive efficient and outstanding customer service every step of the way. Partner with us and experience the difference true dedication makes to your business growth.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tax Obligations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red">
              <Calculator className="w-4 h-4 mr-2" />
              Tax & Accounting
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Understanding Your Tax Obligations in South Africa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Once your company is established, understanding and meeting your ongoing financial obligations is crucial. Bezaleel Consultants helps ensure your business remains fully compliant with South African regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {taxObligations.map((obligation, index) => {
              const Icon = obligation.icon;
              return (
                <Card key={index} className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20 overflow-hidden">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${obligation.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-bezaleel-dark group-hover:text-bezaleel-red transition-colors text-center">
                      {obligation.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-center">
                      {obligation.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {obligation.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-bezaleel-red mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ongoing Compliance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red">
              <Shield className="w-4 h-4 mr-2" />
              Ongoing Compliance
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Key Steps After Company Registration
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Successfully registering your company is just the first step. Maintaining its legal and financial good standing in South Africa requires ongoing attention to compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="group hover-lift text-center border-2 border-transparent hover:border-bezaleel-red/20">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-bezaleel-red to-bezaleel-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-bezaleel-dark group-hover:text-bezaleel-red transition-colors">
                      {step.title}
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

      {/* Foreign Ownership Section */}
      <section className="py-20 bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red">
              <Globe className="w-4 h-4 mr-2" />
              Foreign Ownership
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Can a Foreigner Register a Company in South Africa?
            </h2>
            <Card className="p-8 border-2 border-bezaleel-red/10 shadow-xl">
              <div className="text-left space-y-6">
                <p className="text-lg text-muted-foreground">
                  <strong>Absolutely, yes!</strong> Under South Africa's Companies Act 2008, there are no restrictions on foreign ownership or the nationality of directors and shareholders. This means individuals from anywhere in the world can legally register and own a company in South Africa.
                </p>
                <p className="text-lg text-muted-foreground">
                  For example, you can easily register a South African private company (Pty Ltd) with entirely foreign shareholders and directors. In fact, most industries permit a South African limited company to be wholly foreign-owned.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bezaleel-red mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">No restrictions on foreign ownership</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bezaleel-red mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Foreign directors and shareholders allowed</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bezaleel-red mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">No minimum paid-up capital requirements</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bezaleel-red mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Most industries permit 100% foreign ownership</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Corporate Tax Section */}
            <Card className="p-8 border-2 border-bezaleel-red/10 shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-bezaleel-dark mb-6">Understanding Corporate Tax in South Africa</h3>
              <div className="text-left space-y-4">
                <p className="text-muted-foreground">
                  While South African resident companies are generally subject to a Corporate Income Tax (CIT) rate of 27% on their worldwide income, regardless of its source, there are important considerations and potential benefits:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-bezaleel-dark">Small Business Turnover Tax:</strong>
                      <span className="text-muted-foreground ml-2">Smaller businesses with an annual turnover of less than ZAR 1 million can opt for a simplified turnover-based presumptive tax. This lower tax rate typically ranges from 0% to 3%, offering significant relief for micro-businesses.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-bezaleel-dark">Free Zone Incentives:</strong>
                      <span className="text-muted-foreground ml-2">If you establish your business within one of South Africa's designated Free Zones (Special Economic Zones), you may qualify for a preferential corporate income tax rate of just 15%.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-bezaleel-dark">Non-Resident Companies:</strong>
                      <span className="text-muted-foreground ml-2">Non-resident companies operating in South Africa will pay corporate taxes only on income derived from within the country.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>


            {/* No Minimum Capital Section */}
            <Card className="p-8 border-2 border-bezaleel-red/10 shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-bezaleel-dark mb-6">No Minimum Paid-Up Capital</h3>
              <p className="text-muted-foreground">
                A notable advantage under the Companies Act 2008 is that there are generally no minimum paid-up capital requirements for registering a company in South Africa, which can simplify the initial setup for many investors.
              </p>
            </Card>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-bezaleel-dark group-hover:text-bezaleel-red transition-colors">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bezaleel-red to-bezaleel-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Register Your South African Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let Bezaleel Consultants handle your South African company registration with our seamless, comprehensive process. We've helped thousands of businesses thrive in South Africa.
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
