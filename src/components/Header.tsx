import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const servicesByCategory = [
    { name: 'Legal Compliance', href: '/services/legal-compliance' },
  ];

  const servicesByCountry = [
    { name: 'South Africa', href: '/services/south-africa' },
    { name: 'Zambia', href: '/services/zambia' },
  ];

  // WhatsApp configuration
  const phoneNumber = "263772515272"; // WhatsApp API number without + and spaces
  const message = "Hello! I'm interested in getting started with your business services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/800f2ab7-e97a-47e0-88c6-50fd08cb14a1.png" 
              alt="Bezaleel Consultants Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-bezaleel-dark hover:text-bezaleel-red transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-bezaleel-dark hover:text-bezaleel-red transition-colors duration-200 font-medium">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem asChild>
                  <Link 
                    to="/services" 
                    className="w-full text-bezaleel-dark hover:text-bezaleel-red transition-colors duration-200"
                  >
                    All Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {servicesByCategory.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link 
                      to={service.href} 
                      className="w-full text-bezaleel-dark hover:text-bezaleel-red transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                {servicesByCountry.map((country) => (
                  <DropdownMenuItem key={country.name} asChild>
                    <Link 
                      to={country.href} 
                      className="w-full text-bezaleel-dark hover:text-bezaleel-red transition-colors duration-200"
                    >
                      {country.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bezaleel-gradient text-white ripple-effect">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-bezaleel-dark hover:text-bezaleel-red transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Menu */}
              <div className="py-2">
                <Link
                  to="/services"
                  className="text-bezaleel-dark hover:text-bezaleel-red transition-colors duration-200 font-medium block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Services
                </Link>
                {servicesByCategory.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="text-bezaleel-dark hover:text-bezaleel-red transition-colors duration-200 font-medium block py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                {servicesByCountry.map((country) => (
                  <Link
                    key={country.name}
                    to={country.href}
                    className="text-bezaleel-dark hover:text-bezaleel-red transition-colors duration-200 font-medium block py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {country.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bezaleel-gradient text-white ripple-effect w-full">
                    Get Started
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
