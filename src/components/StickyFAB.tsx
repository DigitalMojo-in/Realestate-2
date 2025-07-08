import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Download, MessageCircle, X } from 'lucide-react';

interface StickyFABProps {
  onLeadFormOpen: () => void;
}

const StickyFAB = ({ onLeadFormOpen }: StickyFABProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <>
      {/* Mobile Bottom Fixed CTAs */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t shadow-luxury">
        <div className="flex items-center space-x-2 p-3">
          <Button 
            variant="cta" 
            size="lg" 
            className="flex-1"
            onClick={onLeadFormOpen}
          >
            <Phone className="w-4 h-4 mr-2" />
            Book Site Visit
          </Button>
          <Button 
            variant="gold" 
            size="lg" 
            className="flex-1"
            onClick={onLeadFormOpen}
          >
            <Download className="w-4 h-4 mr-2" />
            Brochure
          </Button>
        </div>
      </div>

      {/* Desktop Floating Action Buttons */}
      <div className="hidden md:block">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-luxury transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Expandable FAB */}
        <div className="fixed bottom-6 right-6 z-50">
          {isExpanded && (
            <div className="absolute bottom-16 right-0 space-y-3 animate-scale-in">
              <Button
                variant="cta"
                size="lg"
                onClick={onLeadFormOpen}
                className="w-full rounded-full shadow-luxury"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Site Visit
              </Button>
              <Button
                variant="gold"
                size="lg"
                onClick={onLeadFormOpen}
                className="w-full rounded-full shadow-accent"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>
          )}
          
          <Button
            variant={isExpanded ? "secondary" : "cta"}
            size="icon"
            onClick={toggleExpanded}
            className="w-14 h-14 rounded-full shadow-luxury hover:scale-110 transition-all duration-300"
          >
            {isExpanded ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
          </Button>
        </div>
      </div>
    </>
  );
};

export default StickyFAB;