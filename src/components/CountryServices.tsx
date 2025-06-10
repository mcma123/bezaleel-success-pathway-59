
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CountryServices = () => {
  const countries = [
    {
      name: "South Africa",
      flag: "🇿🇦",
      color: "bg-green-50 border-green-200",
      services: [
        "CIPC Company Registration",
        "SARS Tax Registration", 
        "BEE Certification Support",
        "JSE Listing Preparation",
        "VAT Registration",
        "UIF & COID Registration"
      ],
      specialties: ["Mining Rights", "Financial Services", "Import/Export"]
    },
    {
      name: "Zambia",
      flag: "🇿🇲",
      color: "bg-blue-50 border-blue-200",
      services: [
        "PACRA Registration",
        "ZRA Tax Compliance",
        "Investment Incentives Advisory",
        "Mining License Support",
        "Work Permit Assistance",
        "Environmental Compliance"
      ],
      specialties: ["Mining Sector", "Agriculture", "Tourism"]
    }
  ];

  return (
    <section className="py-20 bg-bezaleel-gray/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-bezaleel-red/10 text-bezaleel-red hover:bg-bezaleel-red hover:text-white">
            Multi-Country Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bezaleel-dark mb-6">
            Specialized Services by Country
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate unique regulatory environments with our localized expertise in each African market.
          </p>
        </div>

        {/* Countries Grid - Updated to use 2 columns for better layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {countries.map((country, index) => (
            <Card 
              key={country.name} 
              className={`${country.color} hover-lift group border-2 transition-all duration-300`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {country.flag}
                </div>
                <CardTitle className="text-2xl font-bold text-bezaleel-dark mb-2">
                  {country.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Comprehensive business setup and compliance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Core Services */}
                <div>
                  <h4 className="font-semibold text-bezaleel-dark mb-3">Core Services</h4>
                  <div className="space-y-2">
                    {country.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-bezaleel-red rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <h4 className="font-semibold text-bezaleel-dark mb-3">Industry Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {country.specialties.map((specialty, specialtyIndex) => (
                      <Badge 
                        key={specialtyIndex} 
                        variant="secondary" 
                        className="text-xs bg-white/70 text-bezaleel-dark hover:bg-bezaleel-red hover:text-white transition-colors duration-300"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Map Placeholder */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-bezaleel-red/5 to-bezaleel-accent/5 border-2 border-bezaleel-red/20 hover-lift">
            <CardContent className="p-12">
              <div className="text-6xl mb-6">🗺️</div>
              <h3 className="text-2xl font-bold text-bezaleel-dark mb-4">
                Interactive Service Map
              </h3>
              <p className="text-muted-foreground mb-6">
                Explore our service coverage across Africa with detailed country-specific information and local partnerships.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-bezaleel-red text-white rounded-lg hover:bg-bezaleel-accent transition-colors duration-300 cursor-pointer">
                View Interactive Map
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CountryServices;
