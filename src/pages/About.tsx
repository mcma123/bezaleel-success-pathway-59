
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Target, Award, Globe, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const teamMembers = [
    
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission-Driven",
      description: "Empowering African businesses through comprehensive solutions and digital innovation."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-Focused",
      description: "Putting our clients' success at the heart of everything we do, ensuring personalized service."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Constantly evolving our services to meet the changing needs of modern businesses."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Maintaining the highest standards in service delivery and professional expertise."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "Working closely with clients as partners in their business growth journey."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Pan-African Vision",
      description: "Building bridges across African markets to foster continental business growth."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted via-background to-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-bezaleel-accent/10 text-bezaleel-accent hover:bg-bezaleel-accent hover:text-white">
              About Bezaleel Consultants
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bezaleel-dark mb-6">
              Empowering African
              <span className="block text-bezaleel-red">Business Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Since our founding, we've been dedicated to providing comprehensive business solutions that help entrepreneurs and companies thrive across South Africa, Zambia, and Zimbabwe.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Bezaleel Consultants was born from a simple yet powerful vision: to democratize business opportunities across Africa by making company registration, legal compliance, and digital transformation accessible to everyone.
              </p>
              <p className="text-muted-foreground mb-6">
                Founded by a team of experienced business professionals and technology experts, we recognized the challenges that entrepreneurs face when starting and scaling their businesses in African markets. Complex regulations, lengthy processes, and limited access to modern business tools were holding back innovation and growth.
              </p>
              <p className="text-muted-foreground mb-8">
                Today, we're proud to have helped over 500 companies establish their presence across multiple African countries, while also developing cutting-edge technology solutions that drive business efficiency and growth.
              </p>
              <Button className="bezaleel-gradient text-white px-8 py-3 hover:scale-105 transition-transform duration-300">
                Start Your Journey
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-bezaleel-red text-white p-6 rounded-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Companies Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our clients across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-2 border-transparent hover:border-bezaleel-red/20 transition-all duration-300 bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-bezaleel-red/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-bezaleel-red transition-colors duration-300">
                    <div className="text-bezaleel-red group-hover:text-white transition-colors duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-bezaleel-dark">
                    {value.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover-lift transition-all duration-300 overflow-hidden bg-card">
                <CardHeader className="text-center p-0">
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <CardTitle className="text-xl font-bold text-bezaleel-dark mb-1">
                      {member.name}
                    </CardTitle>
                    <p className="text-bezaleel-red font-medium mb-3">{member.role}</p>
                    <CardDescription className="text-muted-foreground text-sm">
                      {member.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-bezaleel-red to-bezaleel-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have trusted Bezaleel Consultants with their growth journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-bezaleel-red hover:bg-gray-100 font-semibold px-8 py-3">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bezaleel-red font-semibold px-8 py-3">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
