import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Download } from 'lucide-react';

interface StickyBottomCTAProps {
  onLeadFormOpen: () => void;
}

const StickyBottomCTA = ({ onLeadFormOpen }: StickyBottomCTAProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in Vinay Iconic project. Please share more details.");
    const phoneNumber = "917331166997"; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:7331166997', '_self');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      {/* Bottom CTA Bar */}
      <div className="bg-white border-t border-brand-border shadow-lg">
        <div className="grid grid-cols-3 gap-1">
          <Button
            onClick={handleWhatsApp}
            className="h-14 bg-green-600 hover:bg-green-700 text-white rounded-none flex flex-col items-center justify-center gap-1"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-medium">WhatsApp</span>
          </Button>
          
          <Button
            onClick={onLeadFormOpen}
            className="h-14 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-none flex flex-col items-center justify-center gap-1"
          >
            <Download className="w-5 h-5 animate-bounce" />
            <span className="text-xs font-medium">Enquire Now</span>
          </Button>
          
          <Button
            onClick={handleCall}
            className="h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-none flex flex-col items-center justify-center gap-1"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            <span className="text-xs font-medium">Call Now</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomCTA;