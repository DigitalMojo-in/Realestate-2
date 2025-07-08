import { Button } from '@/components/ui/button';

interface HeaderProps {
  onLeadFormOpen: () => void;
}

const Header = ({ onLeadFormOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Section */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-luxury-gold to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <div>
            <h1 className="font-montserrat font-bold text-xl text-luxury-charcoal">LuxeVista</h1>
            <p className="text-xs text-gray-600 font-light">Premium Living</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onLeadFormOpen}
            className="hidden sm:flex font-montserrat font-medium"
          >
            Enquire Now
          </Button>
          <Button 
            variant="luxury" 
            size="sm"
            onClick={onLeadFormOpen}
            className="font-montserrat font-semibold text-sm px-6"
          >
            Download Brochure
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;