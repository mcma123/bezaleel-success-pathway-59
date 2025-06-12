import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, Smartphone, Search, Zap, Shield, TrendingUp } from 'lucide-react';

const WebsiteDevelopment = () => {
  const features = [
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Websites that work perfectly on all devices and screen sizes'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed with lightning-fast loading times'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built-in SEO features to help your site rank higher'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee'
    }
  ];

  const portfolioItems = [
    {
      title: 'Corporate Website',
      description: 'Professional business website with modern design',
      image: '/trusted installation .png',
      category: 'Corporate'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with payment integration',
      image: '/teejay bakehouse.png',
      category: 'E-commerce'
    },
    {
      title: 'Portfolio Website',
      description: 'Creative portfolio showcasing work and achievements',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600',
      category: 'Portfolio'
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
                Website Development
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create stunning, professional websites that drive results. From simple business sites to complex web applications, we build digital experiences that convert visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bezaleel-gradient text-white ripple-effect">
                  Start Your Project
                </Button>
                <Button size="lg" variant="outline" className="border-bezaleel-red text-bezaleel-red hover:bg-bezaleel-red hover:text-white">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800"
                alt="Website Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bezaleel-red/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Why Choose Our Website Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just build websites; we craft digital experiences that engage your audience and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Services Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Our Website Development Services
            </h2>
          </div>
          
          <Tabs defaultValue="corporate" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="corporate">Corporate Websites</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce Sites</TabsTrigger>
              <TabsTrigger value="custom">Custom Applications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="corporate" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-bezaleel-dark mb-4">
                    Professional Corporate Websites
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Establish your brand online with a professional corporate website that reflects your business values and drives conversions.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                      Professional design and branding
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                      Content management system
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                      Contact forms and lead generation
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
                    alt="Corporate Website"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ecommerce" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-bezaleel-dark mb-4">
                    E-commerce Solutions
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Build a powerful online store that converts visitors into customers with our comprehensive e-commerce solutions.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                      Secure payment processing
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                      Inventory management
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                      Order tracking and management
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
                    alt="E-commerce Website"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="custom" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-bezaleel-dark mb-4">
                    Custom Web Applications
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Need something unique? We build custom web applications tailored to your specific business requirements.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                      Custom functionality development
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                      Database integration
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3"></div>
                      API development and integration
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600"
                    alt="Custom Web Application"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Our Recent Work
            </h2>
            <p className="text-xl text-muted-foreground">
              See some of our latest website development projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group hover-lift overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.title === 'Portfolio Website' ? (
                      <a href="https://innovationimperial.co.za/" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-white text-bezaleel-red hover:bg-gray-100">
                          View Project
                        </Button>
                      </a>
                    ) : item.title === 'E-commerce Platform' ? (
                      <a href="https://teejaybakehouse.store/" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-white text-bezaleel-red hover:bg-gray-100">
                          View Project
                        </Button>
                      </a>
                    ) : item.title === 'Corporate Website' ? (
                      <a href="https://www.trustedinstallations.co.za/" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-white text-bezaleel-red hover:bg-gray-100">
                          View Project
                        </Button>
                      </a>
                    ) : (
                      <Button className="bg-white text-bezaleel-red hover:bg-gray-100">
                        View Project
                      </Button>
                    )}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-bezaleel-red bg-bezaleel-red/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-bezaleel-dark">
                    {item.title}
                  </CardTitle>
                  <CardDescription>
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bezaleel-red to-bezaleel-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create a stunning website that represents your brand and drives results. Get started today with a free consultation.
          </p>
          <Button size="lg" className="bg-white text-bezaleel-red hover:bg-gray-100 font-semibold px-8 py-3">
            Get Free Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
