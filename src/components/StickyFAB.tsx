
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
            <div className="absolute bottom-20 right-0 space-y-4 animate-fade-in">
              <Button
                onClick={onLeadFormOpen}
                variant="redGradient"
                size="iconXl"
                className="rounded-full shadow-2xl group"
                title="Download Brochure"
              >
                <Download className="w-6 h-6 group-hover:animate-bounce" />
              </Button>
              
              <Button
                onClick={handleCall}
                variant="redCta"
                size="iconXl"
                className="rounded-full bg-green-600 hover:bg-green-700 shadow-2xl group"
                title="Call Now"
              >
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
              </Button>
              
              <Button
                onClick={handleWhatsApp}
                variant="redCta"
                size="iconXl"
                className="rounded-full bg-green-500 hover:bg-green-600 shadow-2xl group"
                title="WhatsApp"
              >
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
              </Button>
            </div>
          )}

          {/* Main FAB Button */}
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="redGradient"
            size="iconXl"
            className={`rounded-full shadow-2xl transition-all duration-300 ${
              isExpanded 
                ? 'bg-red-500 hover:bg-red-600 rotate-45' 
                : 'hover:scale-110'
            }`}
          >
            {isExpanded ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8 animate-pulse" />
            )}
          </Button>
        </div>
      </div>

      {/* Floating Download Button - Desktop Only */}
      <div className="hidden lg:block fixed left-6 bottom-6 z-50">
        <Button
          onClick={onLeadFormOpen}
          variant="redGradient"
          size="xl"
          className="rounded-full shadow-2xl group pulse-glow"
        >
          <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
          <span className="font-bold">Download Brochure</span>
        </Button>
      </div>
    </>
  );
};

export default StickyFAB;
