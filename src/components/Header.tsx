import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onLeadFormOpen: () => void;
}

const Header = ({ onLeadFormOpen }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-luxury-gold text-white font-bold rounded-md flex items-center justify-center">
            L
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">LuxeVista</h1>
            <p className="text-xs text-gray-500 -mt-1">Premium Living</p>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {['Home', 'Overview', 'Gallery', 'Amenities', 'Location', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-luxury-gold text-sm font-medium transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-medium"
            onClick={onLeadFormOpen}
          >
            Enquire Now
          </Button>
          <Button
            variant="luxury"
            size="sm"
            className="text-sm font-semibold"
            onClick={onLeadFormOpen}
          >
            Download Brochure
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white border-t border-gray-100 space-y-3">
          {['Home', 'Overview', 'Gallery', 'Amenities', 'Location', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 text-sm font-medium hover:text-luxury-gold"
            >
              {item}
            </a>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-sm"
            onClick={onLeadFormOpen}
          >
            Enquire Now
          </Button>
          <Button
            variant="luxury"
            size="sm"
            className="w-full text-sm"
            onClick={onLeadFormOpen}
          >
            Download Brochure
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
