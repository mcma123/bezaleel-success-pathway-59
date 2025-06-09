
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Clock, Eye, Download } from 'lucide-react';

const SystemVideos = () => {
  const videos = [
    {
      id: 1,
      title: "BezaPay Integration Demo",
      description: "Complete walkthrough of payment gateway integration and API usage",
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      duration: "12:45",
      views: "2.1K",
      category: "Payment System",
      type: "Integration Guide"
    },
    {
      id: 2,
      title: "Inventory Management Dashboard",
      description: "Real-time inventory tracking and analytics dashboard overview",
      thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      duration: "8:30",
      views: "1.8K",
      category: "Inventory System",
      type: "Product Demo"
    },
    {
      id: 3,
      title: "HR System Complete Setup",
      description: "Step-by-step guide to setting up the HR management system",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      duration: "15:20",
      views: "3.2K",
      category: "HR System",
      type: "Setup Guide"
    },
    {
      id: 4,
      title: "Healthcare Records Management",
      description: "Patient management and electronic health records system demo",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      duration: "10:15",
      views: "1.5K",
      category: "Healthcare System",
      type: "Product Demo"
    },
    {
      id: 5,
      title: "E-Learning Platform Features",
      description: "Comprehensive overview of the learning management system capabilities",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      duration: "14:00",
      views: "2.7K",
      category: "Education System",
      type: "Feature Overview"
    },
    {
      id: 6,
      title: "POS System Live Demo",
      description: "Real-world demonstration of point of sale system in retail environment",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      duration: "9:45",
      views: "2.9K",
      category: "Retail System",
      type: "Live Demo"
    }
  ];

  const videoTypes = ["All Videos", "Product Demo", "Integration Guide", "Setup Guide", "Feature Overview", "Live Demo"];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-bezaleel-accent/10 text-bezaleel-accent hover:bg-bezaleel-accent hover:text-white">
            System Demonstrations
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bezaleel-dark mb-6">
            See Our Systems in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch detailed demonstrations of our business systems and learn how they can 
            transform your operations through these comprehensive video guides.
          </p>
        </div>

        {/* Video Type Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {videoTypes.map((type, index) => (
            <Badge 
              key={type}
              variant={index === 0 ? "default" : "outline"}
              className={`px-4 py-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                index === 0 
                  ? 'bg-bezaleel-accent text-white' 
                  : 'text-bezaleel-accent border-bezaleel-accent hover:bg-bezaleel-accent hover:text-white'
              }`}
            >
              {type}
            </Badge>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <Card 
              key={video.id}
              className="group hover-lift border-2 border-transparent hover:border-bezaleel-accent/20 overflow-hidden transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <Badge className="absolute bottom-3 right-3 bg-black/70 text-white">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </Badge>

                {/* Category Badge */}
                <Badge className="absolute top-3 left-3 bg-bezaleel-accent text-white">
                  {video.category}
                </Badge>

                {/* Type Badge */}
                <Badge className="absolute top-3 right-3 bg-bezaleel-red text-white">
                  {video.type}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-bezaleel-dark mb-2 group-hover:text-bezaleel-accent transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {video.description}
                </p>
                
                {/* Video Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{video.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-bezaleel-accent text-white hover:bg-bezaleel-accent/90"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-bezaleel-accent text-bezaleel-accent hover:bg-bezaleel-accent hover:text-white"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-bezaleel-accent to-bezaleel-red text-white overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <Play className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">
                  Want a Personalized Demo?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Schedule a live demonstration with our experts to see how our systems 
                  can be customized for your specific business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    variant="secondary" 
                    className="bg-white text-bezaleel-accent hover:bg-white/90"
                  >
                    Schedule Live Demo
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-bezaleel-accent"
                  >
                    Request Custom Video
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

export default SystemVideos;
