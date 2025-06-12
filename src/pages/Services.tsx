
import { useState } from 'react';
import { ChevronDown, ChevronRight, Globe, Code, Smartphone, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Link } from 'react-router-dom';

const Services = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const serviceCategories = [
    {
      id: 'business-registration',
      title: 'Business Registration & Compliance',
      description: 'Complete business setup and legal compliance across African markets',
      hasBusinessServices: true,
      services: [
        {
          title: 'Company Registration',
          description: 'CIPC, PACRA, and local registration services',
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
          features: ['Certificate of Incorporation', 'Tax Registration', 'Director Appointments'],
          videoUrl: '/videos/company-registration.mp4'
        },
        {
          title: 'Business Licensing',
          description: 'Industry-specific licenses and permits',
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
          features: ['Trade Licenses', 'Professional Permits', 'Regulatory Compliance'],
          videoUrl: '/videos/licensing.mp4'
        },
        {
          title: 'Tax Compliance',
          description: 'VAT registration and ongoing tax compliance',
          image: 'https://images.unsplash.com/photo-1554224154-26032fced8bd?w=800',
          features: ['VAT Registration', 'PAYE Setup', 'Tax Returns'],
          videoUrl: '/videos/tax-compliance.mp4'
        }
      ]
    },
    {
      id: 'banking-finance',
      title: 'Banking & Financial Services',
      description: 'Corporate banking solutions and financial planning',
      hasBusinessServices: true,
      services: [
        {
          title: 'Corporate Banking',
          description: 'Business account opening and banking relationships',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
          features: ['Account Opening', 'Credit Facilities', 'Forex Services'],
          videoUrl: '/videos/banking.mp4'
        },
        {
          title: 'Financial Planning',
          description: 'Strategic financial planning and investment advice',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
          features: ['Cash Flow Management', 'Investment Planning', 'Risk Assessment'],
          videoUrl: '/videos/financial-planning.mp4'
        }
      ]
    },
    {
      id: 'digital-services',
      title: 'Digital Solutions',
      description: 'Comprehensive digital transformation services',
      services: [
        {
          title: 'Website Development',
          description: 'Professional websites and web applications',
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
          features: ['Responsive Design', 'CMS Integration', 'SEO Optimization'],
          videoUrl: '/videos/web-development.mp4',
          hasSubpage: true,
          link: '/services/website-development'
        },
        {
          title: 'E-commerce Solutions',
          description: 'Online stores and digital marketplaces',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
          features: ['Online Store Setup', 'Payment Integration', 'Inventory Management'],
          videoUrl: '/videos/ecommerce.mp4',
          hasSubpage: true,
          link: '/services/ecommerce'
        },
        {
          title: 'Mobile App Development',
          description: 'iOS and Android mobile applications',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
          features: ['Native Apps', 'Cross-platform Solutions', 'App Store Deployment'],
          videoUrl: '/videos/mobile-development.mp4',
          hasSubpage: true,
          link: '/services/mobile-development'
        },
        {
          title: 'Digital Marketing',
          description: 'SEO, social media, and online advertising',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
          features: ['SEO Optimization', 'Social Media Management', 'PPC Advertising'],
          videoUrl: '/videos/digital-marketing.mp4',
          hasSubpage: true,
          link: '/services/digital-marketing'
        }
      ]
    },
    {
      id: 'business-support',
      title: 'Business Support Services',
      description: 'Ongoing support for business operations and growth',
      hasBusinessServices: true,
      services: [
        {
          title: 'Virtual Office',
          description: 'Professional business address and mail handling',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
          features: ['Business Address', 'Mail Forwarding', 'Meeting Rooms'],
          videoUrl: '/videos/virtual-office.mp4'
        },
        {
          title: 'Business Consulting',
          description: 'Strategic advice and business planning',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
          features: ['Market Research', 'Business Plans', 'Growth Strategy'],
          videoUrl: '/videos/consulting.mp4'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bezaleel-dark mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive business solutions across South Africa, Zambia, and Zimbabwe. 
              From company registration to digital transformation, we're your trusted partner.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {serviceCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <Collapsible 
                  open={openSections.includes(category.id)}
                  onOpenChange={() => toggleSection(category.id)}
                >
                  <CollapsibleTrigger asChild>
                    <div className="p-8 cursor-pointer hover:bg-gray-50/50 transition-colors duration-200 rounded-t-2xl">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h2 className="text-2xl md:text-3xl font-bold text-bezaleel-dark mb-3">
                            {category.title}
                          </h2>
                          <p className="text-lg text-muted-foreground">
                            {category.description}
                          </p>
                        </div>
                        <div className="ml-6">
                          {openSections.includes(category.id) ? (
                            <ChevronDown className="h-8 w-8 text-bezaleel-red transition-transform duration-200" />
                          ) : (
                            <ChevronRight className="h-8 w-8 text-bezaleel-red transition-transform duration-200" />
                          )}
                        </div>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="px-8 pb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.services.map((service, index) => (
                          <Card key={index} className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20">
                            <div className="relative overflow-hidden rounded-t-lg">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                            <CardHeader>
                              <CardTitle className="text-xl font-bold text-bezaleel-dark group-hover:text-bezaleel-red transition-colors duration-300">
                                {service.title}
                              </CardTitle>
                              <CardDescription className="text-muted-foreground">
                                {service.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2 mb-6">
                                {service.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-bezaleel-red rounded-full mr-3"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              {service.hasSubpage ? (
                                <Link to={service.link || '#'}>
                                  <Button className="w-full bezaleel-gradient text-white ripple-effect">
                                    Learn More
                                  </Button>
                                </Link>
                              ) : category.hasBusinessServices ? (
                                <Link to="/services/business-services">
                                  <Button className="w-full bezaleel-gradient text-white ripple-effect">
                                    Learn More
                                  </Button>
                                </Link>
                              ) : (
                                <Button className="w-full bezaleel-gradient text-white ripple-effect">
                                  Get Quote
                                </Button>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bezaleel-red to-bezaleel-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you build your business across Africa.
          </p>
          <Button size="lg" className="bg-white text-bezaleel-red hover:bg-gray-100 font-semibold px-8 py-3">
            Get Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
