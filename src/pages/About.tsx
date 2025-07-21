
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, Award, Users, Heart, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expertise",
      description: "We bring local knowledge and industry expertise to every project."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay ahead of the curve, leveraging the latest insights and trends."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Partnership",
      description: "We collaborate closely with our clients, understanding their unique needs and goals."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and professionalism."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Local Expertise",
      description: "We know the markets, regulations, and cultural nuances of South Africa and Zambia."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Tailored Solutions",
      description: "Our services are designed to meet your specific business needs."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "End-to-End Support",
      description: "We're with you every step of the way, from setup to growth and beyond."
    }
  ];

  // WhatsApp configuration
  const phoneNumber = "263772515272";
  const message = "Hello! I'm interested in learning more about Bezaleel Consultants services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
              Empowering Business
              <span className="block text-bezaleel-red">Success in Africa</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Bezaleel Consultants, we're passionate about empowering businesses to succeed in the vibrant markets of South Africa and Zambia. With our expertise and local knowledge, we provide tailored solutions and expert guidance to help you navigate the complexities of market entry and expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our mission is to deliver seamless and efficient business setup experiences, fostering growth and success for our clients in these dynamic markets. We believe in building lasting relationships, driving innovation, and exceeding expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our clients, ensuring a consistent standard of excellence and unwavering commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bezaleel-dark mb-6">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover-lift transition-all duration-300 bg-card text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-bezaleel-red/10 rounded-full flex items-center justify-center mb-4">
                    <div className="text-bezaleel-red">
                      {item.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-bezaleel-dark mb-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {item.description}
                  </CardDescription>
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
            Get in Touch
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to unlock new opportunities? Contact us today to learn more about how Bezaleel Consultants can support your business expansion in South Africa and Zambia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-bezaleel-red hover:bg-gray-100 font-semibold px-8 py-3">
                Contact Us Today
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bezaleel-red font-semibold px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
