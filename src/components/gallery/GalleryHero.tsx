
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const GalleryHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-bezaleel-red/10 text-bezaleel-red hover:bg-bezaleel-red hover:text-white">
            Our Work Portfolio
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bezaleel-dark mb-6">
            Explore Our Digital Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            From company registration services to cutting-edge technology products and custom business systems, 
            discover how we've helped businesses across Africa achieve digital transformation.
          </p>
          
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-bezaleel-red mb-2">500+</div>
                <p className="text-muted-foreground">Companies Registered</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-bezaleel-red mb-2">150+</div>
                <p className="text-muted-foreground">Technology Products</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-bezaleel-red mb-2">200+</div>
                <p className="text-muted-foreground">Custom Systems Built</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
