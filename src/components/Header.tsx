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
          <div className="w-8 h-8 bg-gradient-to-br from-luxury-gold to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <div>
            <h1 className="font-montserrat font-bold text-lg text-luxury-charcoal">LuxeVista</h1>
            <p className="text-xs text-gray-600 font-light">Premium Living</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-luxury-gold transition-colors font-medium text-sm">Home</a>
          <a href="#overview" className="text-gray-700 hover:text-luxury-gold transition-colors font-medium text-sm">Overview</a>
          <a href="#gallery" className="text-gray-700 hover:text-luxury-gold transition-colors font-medium text-sm">Gallery</a>
          <a href="#amenities" className="text-gray-700 hover:text-luxury-gold transition-colors font-medium text-sm">Amenities</a>
          <a href="#location" className="text-gray-700 hover:text-luxury-gold transition-colors font-medium text-sm">Location</a>
          <a href="#contact" className="text-gray-700 hover:text-luxury-gold transition-colors font-medium text-sm">Contact</a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onLeadFormOpen}
            className="hidden sm:flex font-montserrat font-medium text-sm px-4"
          >
            Enquire Now
          </Button>
          <Button 
            variant="luxury" 
            size="sm"
            onClick={onLeadFormOpen}
            className="font-montserrat font-semibold text-sm px-4"
          >
            Download Brochure
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;