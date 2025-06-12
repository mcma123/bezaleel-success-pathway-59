import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, CreditCard, Truck, BarChart3, Shield, Smartphone } from 'lucide-react';

const Ecommerce = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Complete Store Setup',
      description: 'Full e-commerce platform with product catalog and shopping cart'
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Secure payment processing with multiple payment options'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'Integrated shipping solutions and order tracking'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Comprehensive sales reports and customer analytics'
    },
    {
      icon: Shield,
      title: 'Security & SSL',
      description: 'Enterprise-grade security for customer data protection'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect shopping experience on all devices'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bezaleel-dark mb-6">
                E-commerce Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your business with a powerful online store. We create e-commerce solutions that drive sales, improve customer experience, and scale with your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bezaleel-gradient text-white ripple-effect">
                  Start Selling Online
                </Button>
                <Button size="lg" variant="outline" className="border-bezaleel-red text-bezaleel-red hover:bg-bezaleel-red hover:text-white">
                  View Demo Stores
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
                alt="E-commerce Solutions"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bezaleel-red/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Complete E-commerce Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to run a successful online business, from product management to customer analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover-lift">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-bezaleel-red/10 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-bezaleel-red" />
                    </div>
                    <CardTitle className="text-xl font-bold text-bezaleel-dark">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
                See Our E-commerce Platform in Action
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Watch how our e-commerce solutions help businesses increase sales and improve customer satisfaction.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                  <span>Easy product management and inventory tracking</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                  <span>Seamless checkout process for better conversions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                  <span>Real-time analytics and sales reporting</span>
                </li>
              </ul>
              <Button className="bezaleel-gradient text-white ripple-effect">
                Schedule Demo
              </Button>
            </div>
            <div className="relative">
              <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-lg font-medium">E-commerce Demo Video</p>
                    <p className="text-sm text-gray-300">Click to play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              E-commerce Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect package for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-bezaleel-dark">Starter</CardTitle>
                <div className="text-3xl font-bold text-bezaleel-red mt-4">$500</div>
                <CardDescription>Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    Up to 50 products
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    Payment gateway integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    Mobile responsive design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    Basic analytics
                  </li>
                </ul>
                <Button className="w-full mt-6 bezaleel-gradient text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift border-bezaleel-red border-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-bezaleel-red text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-bezaleel-dark">Professional</CardTitle>
                <div className="text-3xl font-bold text-bezaleel-red mt-4">$5,000</div>
                <CardDescription>For growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    Up to 500 products
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    Advanced payment options
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    Inventory management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    SEO optimization
                  </li>
                </ul>
                <Button className="w-full mt-6 bezaleel-gradient text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-bezaleel-dark">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-bezaleel-red mt-4">get quote</div>
                <CardDescription>For large-scale operations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    Unlimited products
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    Payment integrations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    online vendor support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                    Custom features
                  </li>
                </ul>
                <a href="https://wa.me/27697906374" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full mt-6 bezaleel-gradient text-white">
                    Contact Us
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ecommerce;
