
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Play } from 'lucide-react';

const Gallery = () => {
  const portfolioItems = [
    {
      type: "website",
      title: "E-Commerce Fashion Store",
      description: "Modern online clothing store with payment integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "E-Commerce",
      technologies: ["React", "Stripe", "MongoDB"],
      url: "#"
    },
    {
      type: "website", 
      title: "Corporate Business Site",
      description: "Professional corporate website with CMS integration",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "Corporate",
      technologies: ["WordPress", "PHP", "MySQL"],
      url: "#"
    },
    {
      type: "system",
      title: "Inventory Management System",
      description: "Complete stock management with real-time tracking",
      image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&h=400&fit=crop",
      category: "Management System",
      technologies: ["Vue.js", "Node.js", "PostgreSQL"],
      url: "#",
      isVideo: true
    },
    {
      type: "website",
      title: "Restaurant Delivery Platform",
      description: "Online food ordering system with delivery tracking",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      category: "Food & Beverage",
      technologies: ["React Native", "Firebase", "Maps API"],
      url: "#"
    },
    {
      type: "system",
      title: "Customer Relationship Management",
      description: "Advanced CRM with sales pipeline and analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "CRM System",
      technologies: ["Angular", "Spring Boot", "Oracle"],
      url: "#",
      isVideo: true
    },
    {
      type: "website",
      title: "Healthcare Management Portal",
      description: "Patient management system with appointment booking",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      category: "Healthcare",
      technologies: ["React", "Express", "MongoDB"],
      url: "#"
    },
    {
      type: "website",
      title: "Educational Learning Platform",
      description: "Online learning management system with video courses",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      category: "Education",
      technologies: ["Next.js", "Prisma", "Vercel"],
      url: "#"
    },
    {
      type: "system",
      title: "Financial Management System",
      description: "Comprehensive accounting and financial reporting tool",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      category: "Finance",
      technologies: ["Python", "Django", "PostgreSQL"],
      url: "#",
      isVideo: true
    }
  ];

  const categories = ["All", "E-Commerce", "Corporate", "Management System", "Food & Beverage", "CRM System", "Healthcare", "Education", "Finance"];

  return (
    <section className="py-20 bg-bezaleel-gray/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red hover:bg-bezaleel-red hover:text-white">
            Our Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bezaleel-dark mb-6">
            Websites & Systems We've Built
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse portfolio of websites and business systems that have helped companies across Africa achieve digital success.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={`px-4 py-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                index === 0 
                  ? 'bg-bezaleel-red text-white' 
                  : 'text-bezaleel-red border-bezaleel-red hover:bg-bezaleel-red hover:text-white'
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.title}
              className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20 overflow-hidden transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    {item.isVideo && (
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                {/* Category Badge */}
                <Badge className="absolute top-3 left-3 bg-bezaleel-red text-white">
                  {item.category}
                </Badge>
                {/* Type Badge */}
                {item.isVideo && (
                  <Badge className="absolute top-3 right-3 bg-bezaleel-accent text-white">
                    <Play className="w-3 h-3 mr-1" />
                    Demo
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-bold text-bezaleel-dark mb-2 group-hover:text-bezaleel-red transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {item.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary" 
                      className="text-xs bg-bezaleel-gray text-bezaleel-dark"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-bezaleel-red text-white rounded-lg hover:bg-bezaleel-accent transition-colors duration-300 cursor-pointer ripple-effect">
            <span>Load More Projects</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-bezaleel-red to-bezaleel-accent text-white overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Build Your Digital Presence?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join our portfolio of successful businesses. Let's create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="px-8 py-4 bg-white text-bezaleel-red rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 cursor-pointer">
                    Start Your Project
                  </div>
                  <div className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-bezaleel-red transition-colors duration-300 cursor-pointer">
                    Schedule Consultation
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
