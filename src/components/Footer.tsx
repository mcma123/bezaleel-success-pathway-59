
import { Building, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Company Registration", href: "/services/company-incorporation" },
        { name: "Website Development", href: "/services/website-development" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "Mobile Development", href: "/services/mobile-development" },
        { name: "E-commerce", href: "/services/ecommerce" },
        { name: "Business Services", href: "/services/business-services" }
      ]
    },
    {
      title: "Countries",
      links: [
        { name: "South Africa", href: "/services/south-africa" },
        { name: "Zambia", href: "/services/zambia" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1AYZoFXgc7/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/bezaleelconsultants?igsh=MXBzbWJueTdkZzRuNQ==&utm_source=ig_contact_invite", label: "Instagram" }
  ];

  return (
    <footer className="bg-bezaleel-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-bezaleel-red rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Bezaleel</h1>
                <p className="text-sm text-gray-300">Consultants</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              At Bezaleel Consultants, we're your trusted partner for launching and growing a business in Southern Africa. From navigating company registration in South Africa and Zambia to setting up corporate bank accounts and handling tax obligations, we've got you covered. But we don't stop there - we also empower your business with digital transformation, ensuring you're not just compliant, but also poised for success and scalability from the start.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-bezaleel-red flex-shrink-0" />
                <span className="text-gray-300">enquiries@bezaleelconsultants.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-bezaleel-red flex-shrink-0" />
                <span className="text-gray-300">+27744047218</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-bezaleel-red flex-shrink-0" />
                <span className="text-gray-300">Saldanha Bay, CapeTown South Africa</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-bold mb-4 text-white">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-300 hover:text-bezaleel-red transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-white">Stay Connected</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for business insights and updates.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-bezaleel-red"
                />
                <button className="px-4 py-2 bg-bezaleel-red text-white rounded-r-lg hover:bg-bezaleel-red-light transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-white">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-bezaleel-red hover:text-white transition-all duration-200 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Bezaleel Consultants. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-bezaleel-red text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-bezaleel-red text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-bezaleel-red text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
