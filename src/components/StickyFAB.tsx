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
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-luxury-silver/30 shadow-luxury">
        <div className="flex items-center gap-3 p-4">
          <Button 
            variant="default" 
            size="lg" 
            className="flex-1 bg-white text-luxury-charcoal border-2 border-luxury-gold hover:bg-luxury-gold hover:text-white shadow-card transition-all duration-300 rounded-full font-semibold"
            onClick={onLeadFormOpen}
          >
            <Phone className="w-4 h-4 mr-2" />
            Book Visit
          </Button>
          <Button 
            variant="default" 
            size="lg" 
            className="flex-1 bg-white text-luxury-charcoal border-2 border-luxury-navy hover:bg-luxury-navy hover:text-white shadow-card transition-all duration-300 rounded-full font-semibold"
            onClick={onLeadFormOpen}
          >
            <Download className="w-4 h-4 mr-2" />
            Brochure
          </Button>
        </div>
      </div>

      {/* Desktop Floating Action Buttons */}
      <div className="hidden md:flex fixed right-6 bottom-6 z-50 flex-col gap-3">
        <Button 
          variant="cta" 
          size="lg" 
          onClick={onLeadFormOpen}
          className="shadow-luxury border-2 border-luxury-gold/20 backdrop-blur-sm"
        >
          <Phone className="w-4 h-4 mr-2" />
          📞 Book Site Visit
        </Button>
        <Button 
          variant="hero" 
          size="lg" 
          onClick={onLeadFormOpen}
          className="shadow-card border-2 border-white/20 backdrop-blur-sm"
        >
          <Download className="w-4 h-4 mr-2" />
          📄 Download Brochure
        </Button>
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-luxury transition-all duration-300 hover:scale-110 border-2 border-green-400/30"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};

export default StickyFAB;