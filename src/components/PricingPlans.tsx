
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$100",
      description: "Perfect for starting your business journey",
      popular: false,
      features: [
        "Company Registration",
        "Bank Account Opening",
        "Basic Tax Setup",
        "Business License Assistance",
        "Email Support",
        "Document Preparation"
      ],
      buttonText: "Get Started",
      color: "border-gray-200 hover:border-bezaleel-red/30"
    },
    {
      name: "Advanced Plan",
      price: "$385",
      description: "Complete business setup with digital presence",
      popular: true,
      features: [
        "Everything in Basic",
        "Professional Website + Domain",
        "1 Year Hosting Included",
        "Social Media Setup",
        "Custom Landing Page",
        "3 Months Maintenance",
        "SEO Optimization",
        "Priority Support"
      ],
      buttonText: "Most Popular",
      color: "border-bezaleel-red bg-bezaleel-red/5"
    },
    {
      name: "Premium Plan",
      price: "$670",
      description: "Full e-commerce solution with advanced features",
      popular: false,
      features: [
        "Everything in Advanced",
        "E-Commerce Store (50 products)",
        "Secure Payment Integration",
        "Admin Dashboard",
        "User Management System",
        "Performance Optimization",
        "Priority Email Support",
        "Monthly Analytics Reports"
      ],
      buttonText: "Go Premium",
      color: "border-gray-200 hover:border-bezaleel-accent/30"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-bezaleel-accent/10 text-bezaleel-accent hover:bg-bezaleel-accent hover:text-white">
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bezaleel-dark mb-6">
            Choose Your Business Package
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From basic company registration to full e-commerce solutions, we have the right package for your business needs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative ${plan.color} hover-lift transition-all duration-300 ${plan.popular ? 'scale-105 ring-2 ring-bezaleel-red' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-bezaleel-red text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-bezaleel-dark mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {plan.description}
                </CardDescription>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-bezaleel-red">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">USD</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="flex-shrink-0 w-5 h-5 bg-bezaleel-red/10 rounded-full flex items-center justify-center mr-3">
                        <Check className="w-3 h-3 text-bezaleel-red" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-6 text-lg font-semibold ripple-effect ${
                    plan.popular 
                      ? 'bezaleel-gradient text-white hover:scale-105' 
                      : 'border-2 border-bezaleel-red text-bezaleel-red hover:bg-bezaleel-red hover:text-white'
                  } transition-all duration-300`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-bezaleel-gray/50 to-white border-2 border-bezaleel-red/20">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-bezaleel-dark mb-2">
                30-Day Money Back Guarantee
              </h3>
              <p className="text-muted-foreground">
                Not satisfied with our service? Get a full refund within 30 days, no questions asked.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
