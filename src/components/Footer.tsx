import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

interface FooterProps {
  onLeadFormOpen: () => void;
}

const Footer = ({ onLeadFormOpen }: FooterProps) => {
  return (
    <footer className="bg-luxury-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">Sales Office:</p>
                  <p className="text-white/80 text-sm">
                    123 Premium Plaza, Bannerghatta Road,<br />
                    Bangalore - 560076
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <div>
                  <p className="text-sm">Call Now</p>
                  <p className="text-white/80 text-sm">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <div>
                  <p className="text-sm">Email</p>
                  <p className="text-white/80 text-sm">info@luxuryapartments.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-luxury-gold" />
                <div>
                  <p className="text-sm">Sales Timings</p>
                  <p className="text-white/80 text-sm">Mon - Sun: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

         {/* Quick Actions */}
<div>
  <h3 className="font-montserrat text-xl font-semibold text-white mb-6">Quick Actions</h3>
  <div className="space-y-3">
    {[
      { label: "Book Site Visit" },
      { label: "Download Brochure" },
      { label: "Get Floor Plans" },
      { label: "Check Availability" },
    ].map((action, idx) => (
      <Button
        key={idx}
        variant="outline"
        size="sm"
        onClick={onLeadFormOpen}
        className="w-full justify-start text-white border-white/20 hover:bg-white/10 transition-colors"
        aria-label={action.label}
      >
        {action.label}
      </Button>
    ))}
  </div>
</div>


          {/* Project Highlights */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-6">Why Choose Us</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>✓ RERA Approved Project</p>
              <p>✓ On-Time Delivery Guaranteed</p>
              <p>✓ Premium Location</p>
              <p>✓ World-Class Amenities</p>
              <p>✓ 25+ Years Experience</p>
              <p>✓ 5000+ Happy Families</p>
              <p>✓ Award-Winning Builder</p>
            </div>
          </div>

          {/* Location Map */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-6">Location</h3>
            <Card className="p-4 bg-white/10 border-white/20">
              <div className="aspect-video bg-luxury-navy/50 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-luxury-gold" />
              </div>
              <p className="text-sm text-white/80 mb-3">
                Bannerghatta Road, Near Electronic City
              </p>
              <Button 
                variant="gold" 
                size="sm" 
                className="w-full"
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                View on Google Maps
              </Button>
            </Card>
          </div>
        </div>

        {/* Social Media & RERA */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <p className="text-sm text-white/80">Follow Us:</p>
              <div className="flex space-x-3">
                <a href="#" className="text-white/60 hover:text-luxury-gold transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-luxury-gold transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-luxury-gold transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-luxury-gold transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* RERA Information */}
            <div className="text-center md:text-right">
              <p className="text-sm text-white/80">RERA Registration No: AP-RERA-12345</p>
              <p className="text-xs text-white/60">All information is subject to RERA guidelines</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-white/60">
            © 2024 Premium Developers. All rights reserved. | 
            <a href="#" className="hover:text-luxury-gold transition-colors"> Privacy Policy</a> | 
            <a href="#" className="hover:text-luxury-gold transition-colors"> Terms & Conditions</a> |
            <a href="#" className="hover:text-luxury-gold transition-colors"> Disclaimer</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;