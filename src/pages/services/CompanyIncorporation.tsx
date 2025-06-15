
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Shield, 
  TrendingUp, 
  Users, 
  Banknote, 
  FileText, 
  CheckCircle, 
  Clock, 
  Award,
  Globe,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyIncorporation = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Limited Liability Protection",
      description: "Protection for shareholders and directors"
    },
    {
      icon: TrendingUp,
      title: "Enhanced Credibility",
      description: "Professional reputation and trust"
    },
    {
      icon: Banknote,
      title: "Tax Benefits",
      description: "Potential savings and optimization"
    },
    {
      icon: Users,
      title: "Attract Investors",
      description: "Ability to raise capital effectively"
    },
    {
      icon: Building2,
      title: "Asset Separation",
      description: "Clear distinction between personal and business assets"
    }
  ];

  const incorporationProcess = [
    {
      step: 1,
      title: "Consultation",
      description: "Discuss your business needs and goals with our experts",
      icon: Users
    },
    {
      step: 2,
      title: "Document Preparation",
      description: "We'll prepare and review all necessary documents",
      icon: FileText
    },
    {
      step: 3,
      title: "Filing",
      description: "We'll submit your application to the relevant authorities",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "Registration",
      description: "Receive your company registration documents",
      icon: Award
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Fast & Efficient",
      description: "Quick processing with minimal delays"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Professional support throughout the process"
    },
    {
      icon: Banknote,
      title: "Competitive Pricing",
      description: "Transparent and affordable rates"
    },
    {
      icon: Award,
      title: "Personalized Service",
      description: "Tailored solutions for your unique needs"
    }
  ];

  const bankingChallenges = [
    "Strict Know Your Customer (KYC) and Anti-Money Laundering (AML) requirements",
    "Need for certified and notarized corporate documents",
    "Understanding different account types (resident vs. non-resident)",
    "Navigating specific bank policies for foreign-owned entities",
    "Physical presence or local directors/representatives requirements"
  ];

  const complianceReasons = [
    {
      title: "Avoid Costly Penalties",
      description: "Prevent fines, legal actions, and operational restrictions"
    },
    {
      title: "Protect Your Reputation",
      description: "Build trust with customers, partners, and authorities"
    },
    {
      title: "Ensure Operational Continuity",
      description: "Streamline processes and reduce business risks"
    },
    {
      title: "Access Local Markets",
      description: "Meet prerequisites for tenders, licenses, and funding"
    },
    {
      title: "Mitigate Risks",
      description: "Address potential legal and financial risks proactively"
    },
    {
      title: "Foster Trust",
      description: "Demonstrate commitment to responsible business practices"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red border-bezaleel-red/20">
              Company Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bezaleel-dark mb-6">
              Complete Business Setup Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From company incorporation to bank account opening and regulatory compliance - 
              we handle everything so you can focus on growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Company Incorporation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Company Incorporation Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Bezaleel Consultants, we specialize in streamlining the company incorporation process, 
              making it easy and efficient for entrepreneurs to establish their businesses. Our expert team 
              handles all the paperwork, filings, and regulatory requirements, ensuring a smooth and hassle-free experience.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-bezaleel-dark mb-8 text-center">
                Benefits of Incorporating Your Business
              </h3>
            </div>
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-bezaleel-red/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-bezaleel-red/20 transition-colors duration-300">
                    <benefit.icon className="h-8 w-8 text-bezaleel-red" />
                  </div>
                  <CardTitle className="text-xl font-bold text-bezaleel-dark">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-bezaleel-dark mb-12 text-center">
              Our Incorporation Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {incorporationProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-bezaleel-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <process.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-bezaleel-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{process.step}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-bezaleel-dark mb-3">
                    {process.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-4 text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-bezaleel-dark">
                Why Choose Us?
              </h3>
            </div>
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-bezaleel-red/10 rounded-lg flex items-center justify-center mb-4">
                    <reason.icon className="h-6 w-6 text-bezaleel-red" />
                  </div>
                  <CardTitle className="text-lg font-bold text-bezaleel-dark">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {reason.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Bank Account Section */}
      <section className="py-20 bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Corporate Bank Account Opening
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Once your company is successfully incorporated, the next critical step is to open a local corporate 
              bank account in your chosen market. This isn't just a formality; it's the gateway to conducting 
              business effectively, managing your finances locally, and truly integrating into the regional economy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Why Essential */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-bezaleel-dark mb-4">
                  Why a Local Corporate Bank Account is Essential
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Seamless Local Operations: Pay suppliers and manage payroll with ease",
                    "Receive Local & International Payments: Handle multiple currencies efficiently",
                    "Enhanced Financial Control: Separate business from personal finances",
                    "Improved Credibility: Add legitimacy when dealing with local partners",
                    "Access to Local Banking Services: Unlock credit facilities and trade finance",
                    "Compliance with Local Regulations: Adhere to financial regulations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-bezaleel-red mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-bezaleel-dark mb-4">
                  The Challenge for International Clients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Opening a corporate bank account in a foreign country can be notoriously complex. It often involves:
                </p>
                <ul className="space-y-3">
                  {bankingChallenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Our Solution */}
          <Card className="bezaleel-gradient text-white">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-center mb-4">
                Our Expert Solution: Streamlined Corporate Bank Account Opening
              </CardTitle>
              <CardDescription className="text-white/90 text-center text-lg">
                At Bezaleel Consultants, we remove the hassle from this critical process. 
                Leveraging our deep understanding of banking requirements in various key markets, 
                we guide our international clients through every step.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Preparation of Required Documentation",
                  "Liaison with Banking Partners", 
                  "Guidance on Compliance",
                  "Remote Facilitation",
                  "Ongoing Support",
                  "Account Activation"
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Regulatory Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Navigating Regulatory Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Establishing a presence in a new country involves more than just registering your company and 
              opening a bank account. To operate successfully and sustainably, your business must adhere to 
              a complex web of local laws, regulations, and industry standards.
            </p>
          </div>

          {/* Why Compliance is Important */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-3 text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-bezaleel-dark">
                Why Regulatory Compliance is Non-Negotiable
              </h3>
            </div>
            {complianceReasons.map((reason, index) => (
              <Card key={index} className="hover-lift border-2 border-transparent hover:border-bezaleel-red/20">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-bezaleel-dark">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {reason.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Our Compliance Solution */}
          <Card className="bg-gray-50 border-2 border-bezaleel-red/20">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-bezaleel-dark text-center mb-4">
                Your Partner in Global Compliance
              </CardTitle>
              <CardDescription className="text-center text-lg text-muted-foreground">
                We provide comprehensive guidance and support to ensure your business not only meets 
                its obligations but operates with confidence in any new market.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Compliance Assessment",
                    description: "Understand specific regulatory landscape and obligations"
                  },
                  {
                    title: "Tailored Compliance Roadmaps", 
                    description: "Clear, actionable strategies for all requirements"
                  },
                  {
                    title: "Document Preparation & Filing",
                    description: "Timely submission of required reports and filings"
                  },
                  {
                    title: "Local Expertise, Global Reach",
                    description: "Navigate complex local regulations with confidence"
                  },
                  {
                    title: "Proactive Monitoring & Updates",
                    description: "Stay informed about regulatory framework changes"
                  },
                  {
                    title: "Ongoing Support",
                    description: "Trusted point of contact for compliance questions"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-bezaleel-red rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-bezaleel-dark mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Jurisdictions Section */}
      <section className="py-20 bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Your Global Reach Starts Here
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Expanding your business internationally requires strategic choices. We specialize in simplifying 
              your entry into key markets, providing expert guidance and seamless support for company incorporation, 
              bank account opening, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* South Africa */}
            <Card className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🇿🇦</div>
                <CardTitle className="text-2xl font-bold text-bezaleel-dark">
                  South Africa
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Gateway to African markets with robust financial infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/services/south-africa">
                  <Button className="bezaleel-gradient text-white ripple-effect group-hover:scale-105 transition-transform duration-300">
                    Learn More about South Africa Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Zambia */}
            <Card className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🇿🇲</div>
                <CardTitle className="text-2xl font-bold text-bezaleel-dark">
                  Zambia
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Strategic mining hub with growing business opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/services/zambia">
                  <Button className="bezaleel-gradient text-white ripple-effect group-hover:scale-105 transition-transform duration-300">
                    Learn More about Zambia Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bezaleel-red to-bezaleel-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us handle the incorporation process, bank account opening, and compliance requirements 
            so you can focus on growing your business. Contact us today to learn more!
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-bezaleel-red hover:bg-gray-100 font-semibold px-8 py-3">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyIncorporation;
