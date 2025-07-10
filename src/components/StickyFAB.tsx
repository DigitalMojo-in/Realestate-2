import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Phone, MessageCircle, X, Menu } from 'lucide-react';

interface StickyFABProps {
  onLeadFormOpen: () => void;
}

const StickyFAB = ({ onLeadFormOpen }: StickyFABProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your luxury apartment project. Please share more details.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919876543210', '_self');
  };

  return (
    <>
      {/* Desktop FAB - Hidden on mobile */}
      <div className="hidden lg:block fixed right-6 bottom-6 z-50">
        <div className="relative">
          {/* Expanded Menu */}
          {isExpanded && (
            <div className="absolute bottom-16 right-0 space-y-3 animate-fade-in">
              <Button
                onClick={onLeadFormOpen}
                className="w-14 h-14 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                title="Download Brochure"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
              </Button>
              
              <Button
                onClick={handleCall}
                className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                title="Call Now"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
              </Button>
              
              <Button
                onClick={handleWhatsApp}
                className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
              </Button>
            </div>
          )}

          {/* Main FAB Button */}
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
              isExpanded 
                ? 'bg-red-500 hover:bg-red-600 rotate-45' 
                : 'bg-brand-primary hover:bg-brand-primary/90 hover:scale-110'
            } text-white`}
          >
            {isExpanded ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Floating Download Button - Desktop Only */}
      <div className="hidden lg:block fixed left-6 bottom-6 z-50">
        <Button
          onClick={onLeadFormOpen}
          className="bg-brand-accent hover:bg-brand-accent/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
          <span className="font-semibold">Download Brochure</span>
        </Button>
      </div>
    </>
  );
};

export default StickyFAB;