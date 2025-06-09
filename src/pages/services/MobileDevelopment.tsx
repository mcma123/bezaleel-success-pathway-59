
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Tablet, Monitor, Zap, Users, TrendingUp } from 'lucide-react';

const MobileDevelopment = () => {
  const platforms = [
    {
      icon: Smartphone,
      title: 'iOS Development',
      description: 'Native iOS apps for iPhone and iPad',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600'
    },
    {
      icon: Tablet,
      title: 'Android Development',
      description: 'Native Android apps for all devices',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600'
    },
    {
      icon: Monitor,
      title: 'Cross-Platform',
      description: 'One codebase for both platforms',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600'
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
                Mobile App Development
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create powerful mobile applications that engage users and drive business growth. From concept to app store deployment, we build apps that make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bezaleel-gradient text-white ripple-effect">
                  Start Your App
                </Button>
                <Button size="lg" variant="outline" className="border-bezaleel-red text-bezaleel-red hover:bg-bezaleel-red hover:text-white">
                  View Our Apps
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800"
                alt="Mobile App Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bezaleel-red/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Multi-Platform Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We develop apps for all major platforms, ensuring your app reaches the widest possible audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card key={index} className="hover-lift overflow-hidden">
                  <div className="relative">
                    <img
                      src={platform.image}
                      alt={platform.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <Icon className="h-8 w-8 text-white mb-2" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-bezaleel-dark">
                      {platform.title}
                    </CardTitle>
                    <CardDescription>
                      {platform.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-lg font-medium">Mobile App Showcase</p>
                    <p className="text-sm text-gray-300">See our latest mobile apps</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
                Award-Winning Mobile Apps
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our mobile apps have been featured in app stores and won multiple awards for design and functionality.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bezaleel-red mb-2">50+</div>
                  <p className="text-muted-foreground">Apps Developed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bezaleel-red mb-2">1M+</div>
                  <p className="text-muted-foreground">Downloads</p>
                </div>
              </div>
              <Button className="bezaleel-gradient text-white ripple-effect">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From concept to app store, we follow a proven process to deliver exceptional mobile apps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Strategy & Planning', description: 'Define goals, target audience, and app features' },
              { step: '02', title: 'Design & Prototype', description: 'Create wireframes, UI/UX design, and interactive prototypes' },
              { step: '03', title: 'Development & Testing', description: 'Build the app with rigorous testing throughout' },
              { step: '04', title: 'Launch & Support', description: 'Deploy to app stores and provide ongoing maintenance' }
            ].map((phase, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="text-4xl font-bold text-bezaleel-red mb-4">{phase.step}</div>
                  <CardTitle className="text-xl font-bold text-bezaleel-dark">
                    {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {phase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileDevelopment;
