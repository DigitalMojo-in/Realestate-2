
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Download } from 'lucide-react';

interface StickyBottomCTAProps {
  onLeadFormOpen: () => void;
}

const StickyBottomCTA = ({ onLeadFormOpen }: StickyBottomCTAProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in Vinay Iconic project. Please share more details.");
    const phoneNumber = "917331166997";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:7331166997', '_self');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white border-t border-brand-border shadow-lg">
        <div className="grid grid-cols-3 gap-1">
          <Button
            onClick={handleWhatsApp}
            variant="redCta"
            size="lg"
            className="h-16 rounded-none flex flex-col items-center justify-center gap-1 bg-green-600 hover:bg-green-700"
          >
            <MessageCircle className="w-6 h-6 animate-bounce" />
            <span className="text-xs font-bold">WhatsApp</span>
          </Button>
          
          <Button
            onClick={onLeadFormOpen}
            variant="redGradient"
            size="lg"
            className="h-16 rounded-none flex flex-col items-center justify-center gap-1"
          >
            <Download className="w-6 h-6 animate-bounce" />
            <span className="text-xs font-bold">Enquire Now</span>
          </Button>
          
          <Button
            onClick={handleCall}
            variant="redCta"
            size="lg"
            className="h-16 rounded-none flex flex-col items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700"
          >
            <Phone className="w-6 h-6 animate-pulse" />
            <span className="text-xs font-bold">Call Now</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomCTA;
