import { Button } from '@/components/ui/button';
import { MapPin, Home, IndianRupee, Calendar } from 'lucide-react';

interface ImportantInfoBarProps {
  onCTAClick: () => void;
}

const ImportantInfoBar = ({ onCTAClick }: ImportantInfoBarProps) => {
  return (
    <section className="bg-white border-t border-b border-brand-border py-4 sticky top-[70px] z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Project Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-text">Vinay Iconic</h3>
                <p className="text-brand-muted text-xs">by SMR Group</p>
              </div>
            </div>
            
            <div className="h-8 w-px bg-brand-border hidden lg:block" />
            
            <div className="flex items-center gap-1 text-brand-text">
              <Home className="w-4 h-4 text-brand-primary" />
              <span className="font-medium">2, 3 & 4 BHK</span>
            </div>
            
            <div className="h-8 w-px bg-brand-border hidden lg:block" />
            
            <div className="flex items-center gap-1 text-brand-text">
              <IndianRupee className="w-4 h-4 text-brand-primary" />
              <span className="font-medium">₹1.5 CR* onwards</span>
            </div>
            
            <div className="h-8 w-px bg-brand-border hidden lg:block" />
            
            <div className="flex items-center gap-1 text-brand-text">
              <MapPin className="w-4 h-4 text-brand-primary" />
              <span className="font-medium">Kondapur, Hyderabad</span>
            </div>
            
            <div className="h-8 w-px bg-brand-border hidden lg:block" />
            
            <div className="flex items-center gap-1 text-brand-text">
              <Calendar className="w-4 h-4 text-brand-primary" />
              <span className="font-medium">Ready to Move</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={onCTAClick}
            className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            Get Price Breakdown
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImportantInfoBar;