
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Clock, Globe, Shield, TrendingUp, Banknote, Users, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const BankingFinance = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Enhanced Credibility",
      description: "We help you establish a professional corporate account, which instantly elevates your business's reputation and builds trust with investors, suppliers, and customers."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Streamlined Financial Management",
      description: "Our service helps you set up an account that simplifies tracking business expenses, provides clear financial reports, and keeps business and personal finances separate for easier tax preparation and better organization."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Robust Liability Protection",
      description: "By assisting you in establishing a dedicated business account, we help ensure the clear separation of business and personal funds, crucial for protecting you from personal liability for business obligations."
    },
    {
      icon: <Banknote className="h-6 w-6" />,
      title: "Improved Access to Capital",
      description: "Our efficient setup process helps your business gain access to an account that can improve its financial standing, potentially paving the way for easier access to future loans and financial assistance."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Seamless Transactions",
      description: "We help you secure access to modern corporate accounts with reliable online and mobile banking, facilitating hassle-free fund transfers, deposits, and withdrawals from anywhere."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Access to Valuable Offers",
      description: "Through our banking relationships, we help you connect with accounts that often include attractive incentives, low-fee electronic transactions, and competitive interest rates on corporate profits."
    }
  ];

  const features = [
    "CIPC/PACRA Registration Support",
    "Multi-currency Account Setup",
    "Online Banking Activation",
    "Debit Card Provision",
    "Credit Facility Access",
    "Mobile Banking Setup",
    "Forex Services Access",
    "24/7 Account Support"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bezaleel-dark mb-6">
                Banking & Finance Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                At Bezaleel Consultants, we assist our clients in opening bank accounts in South Africa and Zambia, ensuring a smooth and efficient process. Our expertise helps you navigate local banking requirements, enabling you to manage your finances effectively and securely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bezaleel-gradient text-white ripple-effect">
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline" className="border-bezaleel-red text-bezaleel-red hover:bg-bezaleel-red hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                alt="Banking and Finance Services"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-bezaleel-red/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-bezaleel-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-bezaleel-dark">Quick Setup</p>
                    <p className="text-sm text-muted-foreground">Within 1 week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Account Opening Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bezaleel-dark mb-6">
              Bank Account Opening
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamlined corporate bank account opening process for international clients establishing businesses in South Africa and Zambia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Corporate Banking"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-bezaleel-dark mb-6">
                Corporate Bank Account Opening Services
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Bezaleel Consultants streamlines the corporate bank account opening process for our international clients establishing businesses in South Africa and Zambia. Leveraging our established relationships with a leading banking partner in both countries, we ensure a seamless and efficient setup for your business account, often without the need for you to travel.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-bezaleel-red flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-bezaleel-gray/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Key Benefits of Our Corporate Bank Account Opening Service
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expert guidance tailored to your specific business needs ensures you gain access to reliable internet banking facilities crucial for managing your operations from anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-bezaleel-red/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-bezaleel-red group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-bezaleel-dark group-hover:text-bezaleel-red transition-colors duration-300">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-bezaleel-dark mb-6">
                Optimized Financial Organization & Business Growth
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-bezaleel-red/10 rounded-full flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-bezaleel-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-bezaleel-dark mb-2">Optimized Financial Organization</h4>
                    <p className="text-muted-foreground">Our assistance in setting up a dedicated business bank account makes it significantly easier for you to manage expenses, budget effectively, and maintain clear financial oversight.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-bezaleel-red/10 rounded-full flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-bezaleel-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-bezaleel-dark mb-2">Foundation for Business Growth</h4>
                    <p className="text-muted-foreground">We help you establish the essential banking platform that is critical for future transitions, partnerships, or the eventual sale of your business, providing a clear and transparent financial picture of performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
                alt="Financial Growth"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-r from-bezaleel-red to-bezaleel-accent">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Timeline</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8 opacity-90">
                Opening a corporate bank account can often be a lengthy process, but not with Bezaleel Consultants. We pride ourselves on an exceptionally high success rate, typically facilitating the opening of your corporate bank account <strong>within just 1 week</strong> on average.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Clock className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Quick Processing</h3>
                  <p className="opacity-90">Our efficiency stems from our team's in-depth understanding of our banking partner's specific requirements and expectations in both South Africa and Zambia.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Globe className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Non-Travel Solutions</h3>
                  <p className="opacity-90">A significant advantage for our international clients is our ability to provide non-travel banking solutions. This means you generally won't be required to travel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
            Ready to Open Your Corporate Bank Account?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you establish your business banking foundation in South Africa and Zambia with our streamlined, efficient process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bezaleel-gradient text-white ripple-effect px-8">
              Start Your Application
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-bezaleel-red text-bezaleel-red hover:bg-bezaleel-red hover:text-white px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BankingFinance;
