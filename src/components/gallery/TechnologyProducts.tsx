
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Zap, Shield } from 'lucide-react';

const TechnologyProducts = () => {
  const products = [
    {
      id: 1,
      title: "BezaPay Payment Gateway",
      description: "Secure payment processing solution for African businesses with multi-currency support",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      category: "FinTech",
      features: ["Multi-currency", "Mobile Money", "Bank Integration"],
      rating: 4.9,
      clients: "500+",
      link: "#",
      status: "Live Product"
    },
    {
      id: 2,
      title: "BezaHR Management System",
      description: "Complete human resource management platform with payroll, attendance, and performance tracking",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "HR Tech",
      features: ["Payroll Management", "Time Tracking", "Performance Reviews"],
      rating: 4.8,
      clients: "200+",
      link: "#",
      status: "Live Product"
    },
    {
      id: 3,
      title: "BezaInventory Pro",
      description: "Advanced inventory management system with real-time tracking and analytics",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      category: "Inventory",
      features: ["Real-time Tracking", "Analytics Dashboard", "Multi-location"],
      rating: 4.7,
      clients: "150+",
      link: "#",
      status: "Live Product"
    },
    {
      id: 4,
      title: "BezaHealth Records",
      description: "Electronic health records system for healthcare facilities with patient management",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      category: "HealthTech",
      features: ["Patient Records", "Appointment Booking", "Medical History"],
      rating: 4.9,
      clients: "75+",
      link: "#",
      status: "Live Product"
    },
    {
      id: 5,
      title: "BezaLearn LMS",
      description: "Learning management system for educational institutions and corporate training",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      category: "EdTech",
      features: ["Course Management", "Video Streaming", "Progress Tracking"],
      rating: 4.6,
      clients: "100+",
      link: "#",
      status: "Live Product"
    },
    {
      id: 6,
      title: "BezaRetail POS",
      description: "Point of sale system for retail businesses with inventory integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "Retail",
      features: ["POS Terminal", "Inventory Sync", "Sales Analytics"],
      rating: 4.8,
      clients: "300+",
      link: "#",
      status: "Live Product"
    }
  ];

  const categories = ["All Products", "FinTech", "HR Tech", "Inventory", "HealthTech", "EdTech", "Retail"];

  return (
    <section className="py-20 bg-bezaleel-gray/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red hover:bg-bezaleel-red hover:text-white">
            Technology Products
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bezaleel-dark mb-6">
            Our Software Product Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our range of ready-to-use software products designed specifically 
            for African businesses across various industries.
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group hover-lift border-2 border-transparent hover:border-bezaleel-red/20 overflow-hidden transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-bezaleel-dark"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Product
                  </Button>
                </div>
                
                {/* Status Badge */}
                <Badge className="absolute top-3 left-3 bg-green-500 text-white">
                  <Zap className="w-3 h-3 mr-1" />
                  {product.status}
                </Badge>
                
                {/* Category Badge */}
                <Badge className="absolute top-3 right-3 bg-bezaleel-red text-white">
                  {product.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-bezaleel-dark mb-2 group-hover:text-bezaleel-red transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <Badge 
                      key={featureIndex}
                      variant="secondary" 
                      className="text-xs bg-bezaleel-gray text-bezaleel-dark"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <div className="text-muted-foreground">
                    {product.clients} clients
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-bezaleel-red to-bezaleel-accent text-white overflow-hidden">
            <CardContent className="p-8 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Need a Custom Solution?
                </h3>
                <p className="text-white/90 mb-6">
                  We can customize any of our products or build a completely new solution for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="secondary" 
                    className="bg-white text-bezaleel-red hover:bg-white/90"
                  >
                    Request Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-bezaleel-red"
                  >
                    Custom Development
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnologyProducts;
