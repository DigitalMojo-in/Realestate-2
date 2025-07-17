import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onLeadFormOpen: () => void;
}

const Footer = ({ onLeadFormOpen }: FooterProps) => {
  return (
    <footer className="bg-brand-text text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Prestige Luxury Residences</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience luxury living at its finest with world-class amenities, 
              strategic location, and uncompromising quality construction.
            </p>
            <div className="flex space-x-2">
              <Button 
                onClick={onLeadFormOpen}
                variant="cta" 
                size="sm"
                className="text-xs"
              >
                Enquire Now
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-brand-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Sales Hotline</p>
                  <a href="tel:+919876543210" className="text-gray-300 text-sm hover:text-white">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-brand-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:sales@prestigeluxury.com" className="text-gray-300 text-sm hover:text-white">
                    sales@prestigeluxury.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-brand-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Site Visit Hours</p>
                  <p className="text-gray-300 text-sm">Mon - Sun: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Project Location</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-brand-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Site Address</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Electronic City Phase 2,<br />
                  Bangalore - 560100,<br />
                  Karnataka, India
                </p>
              </div>
            </div>
            
            <div className="pt-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs border-gray-600 text-gray-300 hover:bg-white hover:text-brand-text"
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#overview" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Project Overview
              </a>
              <a href="#amenities" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Amenities
              </a>
              <a href="#gallery" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Gallery
              </a>
              <a href="#location" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Location
              </a>
              <a href="#specifications" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Specifications
              </a>
              <button 
                onClick={onLeadFormOpen}
                className="block text-brand-primary text-sm hover:text-brand-accent transition-colors font-medium"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Legal & Compliance */}
            <div className="text-center md:text-left">
              <p className="text-xs text-gray-400 mb-2">
                RERA Registration: PRM/KA/RERA/1251/446/PR/171101/001908
              </p>
              <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-xs text-gray-400">
                <a href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms-conditions" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
                <a href="/rera-documents" className="hover:text-white transition-colors">
                  RERA Documents
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-400">
                © 2024 Prestige Group. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Marketing Partner: PropertyConnect Solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-900 py-3">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Disclaimer: All images, layouts, and promotional materials are artistic representations and may differ from actual construction. 
            Specifications, amenities, and features are subject to change without notice. Please verify all details with our sales team 
            before making any investment decisions. This is not an offer to sell or solicitation to buy real estate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;