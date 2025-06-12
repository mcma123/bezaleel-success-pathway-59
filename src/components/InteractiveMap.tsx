
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';

const InteractiveMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const countries = [
    {
      id: 'south-africa',
      name: 'South Africa',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7271949.32590628!2d22.0!3d-29.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2s!4v1639000000000!5m2!1sen!2s',
      services: ['Company Registration', 'Bank Account Setup', 'SARS Registration', 'BEE Certificates'],
      bgColor: 'bg-emerald-500',
      position: { top: '60%', left: '55%' }
    },
    {
      id: 'zambia',
      name: 'Zambia',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825196.0!2d28.0!3d-13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19669e3af1a0b12b%3A0x6a0c9edf9b5b5c5!2sZambia!5e0!3m2!1sen!2s!4v1639000000000!5m2!1sen!2s',
      services: ['Business Registration', 'PACRA Compliance', 'ZRA Setup', 'Work Permits'],
      bgColor: 'bg-blue-500',
      position: { top: '45%', left: '58%' }
    }
  ];

  return (
    <div className="relative">
      {/* Map Container */}
      <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
        {selectedCountry ? (
          <iframe
            src={countries.find(c => c.id === selectedCountry)?.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <>
            {/* Africa Continent Placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
              <img 
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop" 
                alt="Africa Map"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            
            {/* Country Markers */}
            {countries.map((country) => (
              <button
                key={country.id}
                className={`absolute w-6 h-6 ${country.bgColor} rounded-full border-4 border-white shadow-lg hover:scale-125 transition-transform duration-200 pulse`}
                style={{ 
                  top: country.position.top, 
                  left: country.position.left,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setSelectedCountry(country.id)}
              >
                <MapPin className="w-4 h-4 text-white mx-auto" />
              </button>
            ))}
          </>
        )}
      </div>

      {/* Country Information Panel */}
      {selectedCountry && (
        <Card className="mt-6 border-2 border-bezaleel-red/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-bezaleel-dark flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-bezaleel-red" />
                {countries.find(c => c.id === selectedCountry)?.name}
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedCountry(null)}
                className="text-gray-500 hover:text-bezaleel-red"
              >
                Close Map
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-bezaleel-dark mb-2">Available Services:</h4>
                <div className="space-y-2">
                  {countries.find(c => c.id === selectedCountry)?.services.map((service, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button className="bg-bezaleel-red text-white hover:bg-bezaleel-accent">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Details
                </Button>
                <Button variant="outline" className="border-bezaleel-red text-bezaleel-red hover:bg-bezaleel-red hover:text-white">
                  Get Quote
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Instructions */}
      {!selectedCountry && (
        <div className="text-center mt-4">
          <p className="text-gray-600">Click on a country marker to view detailed Google Maps and available services</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
