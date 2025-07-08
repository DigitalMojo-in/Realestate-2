import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onLeadFormOpen: () => void;
}

const Header = ({ onLeadFormOpen }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo & Brand Name */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-gradient-to-br from-luxury-gold to-accent rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-base">L</span>
          </div>
          <div className="leading-tight">
            <h1 className="font-montserrat font-extrabold text-lg text-gray-800">LuxeVista</h1>
            <p className="text-xs text-gray-500 tracking-wide">Premium Living</p>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {['Home', 'Overview', 'Gallery', 'Amenities', 'Location', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-luxury-gold font-medium text-sm transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA - Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onLeadFormOpen}
            className="font-montserrat font-medium text-sm"
          >
            Enquire Now
          </Button>
          <Button
            variant="luxury"
            size="sm"
            onClick={onLeadFormOpen}
            className="font-montserrat font-semibold text-sm"
          >
            Download Brochure
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-3 bg-white shadow-md border-t border-gray-100">
          {['Home', 'Overview', 'Gallery', 'Amenities', 'Location', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-700 hover:text-luxury-gold font-medium text-sm"
            >
              {item}
            </a>
          ))}

          <div className="flex flex-col gap-2 pt-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onLeadFormOpen}
              className="font-montserrat font-medium text-sm"
            >
              Enquire Now
            </Button>
            <Button
              variant="luxury"
              size="sm"
              onClick={onLeadFormOpen}
              className="font-montserrat font-semibold text-sm"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;