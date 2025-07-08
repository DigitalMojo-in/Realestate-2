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
        <div className="group relative">
          <Button 
            onClick={onLeadFormOpen}
            className="w-12 h-12 rounded-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-charcoal shadow-card hover:shadow-luxury transition-all duration-300 hover:scale-105 p-0 group"
          >
            <Phone className="w-4 h-4" />
          </Button>
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-luxury-charcoal text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            Book Visit
          </div>
        </div>
        
        <div className="group relative">
          <Button 
            onClick={onLeadFormOpen}
            className="w-12 h-12 rounded-full bg-luxury-charcoal hover:bg-luxury-charcoal/90 text-white shadow-card hover:shadow-luxury transition-all duration-300 hover:scale-105 p-0 group"
          >
            <Download className="w-4 h-4" />
          </Button>
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-luxury-charcoal text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            Brochure
          </div>
        </div>
        
        <div className="group relative">
          <a 
            href="https://wa.me/919876543210" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-card transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-green-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            WhatsApp
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyFAB;