import React from 'react';
import { Code2, Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="">
                 <img 
                    src="/logo1.png" 
                    alt="HyperCraft Logo" 
                    className="h-12 w-12 object-contain transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
            />
              </div>
              <div>
                <h3 className="text-xl font-bold">HyperCraft</h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Innovative IT solutions for businesses ready to embrace digital transformation 
              and achieve sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/hypercraft1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-indigo-600 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transform hover:translate-x-2 transition-all duration-300 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transform hover:translate-x-2 transition-all duration-300 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transform hover:translate-x-2 transition-all duration-300 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-400 hover:text-white transform hover:translate-x-2 transition-all duration-300 inline-block">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transform hover:translate-x-2 transition-all duration-300 inline-block">
                  Contact
                </Link>
              </li>
            
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/custom-software-development" className="text-gray-400 hover:text-white transform hover:translate-x-2 transition-all duration-300 inline-block">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-solutions" className="text-gray-400 hover:text-white transform hover:translate-x-2 transition-all duration-300 inline-block">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/ai-data-analytics" className="text-gray-400 hover:text-white transform hover:translate-x-2 transition-all duration-300 inline-block">
                  AI & Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/services/odoo-integration" className="text-gray-400 hover:text-white transform hover:translate-x-2 transition-all duration-300 inline-block">
                  Odoo Integration
                </Link>
              </li>
              <li>
                <Link to="/services/salesforce-services" className="text-gray-400 hover:text-white transform hover:translate-x-2 transition-all duration-300 inline-block">
                  Salesforce Services
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-gray-400 hover:text-white transform hover:translate-x-2 transition-all duration-300 inline-block">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400" />
                <a href="tel:+919622286781" className="text-gray-400 hover:text-white transform hover:translate-x-2 transition-all duration-300 inline-block">
                  +91-9622286781
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <a href="mailto:info@hypercraft.in" className="text-gray-400 hover:text-white transform hover:translate-x-2 transition-all duration-300 inline-block">
                  info@hypercraft.in
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400 mt-0.5" />
                <div className="text-gray-400">
                  <p>Srinagar, Jammu and Kashmir</p>
                  <p>193201, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 HyperCraft. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transform hover:translate-x-1 transition-all duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transform hover:translate-x-1 transition-all duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
