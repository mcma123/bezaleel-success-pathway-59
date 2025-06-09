
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Users, TrendingUp, Target, MessageSquare, BarChart3 } from 'lucide-react';

const DigitalMarketing = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and organic traffic',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all social platforms',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600'
    },
    {
      icon: Target,
      title: 'PPC Advertising',
      description: 'Targeted advertising campaigns that deliver results',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600'
    },
    {
      icon: MessageSquare,
      title: 'Content Marketing',
      description: 'Engaging content that converts visitors into customers',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your marketing efforts',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600'
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Comprehensive strategies for sustainable business growth',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600'
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
                Digital Marketing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Grow your business online with our comprehensive digital marketing services. From SEO to social media, we help you reach your target audience and achieve measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bezaleel-gradient text-white ripple-effect">
                  Get Marketing Audit
                </Button>
                <Button size="lg" variant="outline" className="border-bezaleel-red text-bezaleel-red hover:bg-bezaleel-red hover:text-white">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                alt="Digital Marketing"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bezaleel-red/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to help your business thrive in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-lift overflow-hidden">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-bezaleel-dark">
                      {service.title}
                    </CardTitle>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bezaleel-gradient text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-muted-foreground">
              See how our digital marketing strategies deliver real business results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '300%', label: 'Average Traffic Increase' },
              { metric: '150%', label: 'Conversion Rate Improvement' },
              { metric: '200%', label: 'Social Media Growth' },
              { metric: '85%', label: 'Client Retention Rate' }
            ].map((stat, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="text-4xl font-bold text-bezaleel-red mb-2">{stat.metric}</div>
                  <CardTitle className="text-lg font-bold text-bezaleel-dark">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Hear from businesses that have transformed their online presence with our digital marketing expertise.
              </p>
              <blockquote className="border-l-4 border-bezaleel-red pl-6 mb-8">
                <p className="text-lg italic text-muted-foreground mb-4">
                  "Bezaleel Consultants transformed our online presence. Our website traffic increased by 250% and leads by 180% in just 6 months."
                </p>
                <footer className="text-bezaleel-dark font-semibold">
                  - Sarah Johnson, CEO of TechStart
                </footer>
              </blockquote>
              <Button className="bezaleel-gradient text-white ripple-effect">
                Read More Success Stories
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
                    <p className="text-lg font-medium">Client Success Story</p>
                    <p className="text-sm text-gray-300">Watch their transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
