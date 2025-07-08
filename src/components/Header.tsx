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
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <div className="text-xl font-bold text-gray-900 tracking-wider">
            THE <span className="text-luxury-gold">HARVEST</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {['Overview', 'Highlights', 'Specifications', 'Gallery', 'Floor Plans', 'Location'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-700 hover:text-luxury-gold text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="text-sm font-medium border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
            onClick={onLeadFormOpen}
          >
            📄 Brochure
          </Button>
          <Button
            variant="luxury"
            size="sm"
            className="text-sm font-semibold bg-luxury-gold hover:bg-luxury-gold/90"
            onClick={onLeadFormOpen}
          >
            📞 7331166997
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 bg-white border-t border-gray-100 space-y-3">
          {['Overview', 'Highlights', 'Specifications', 'Gallery', 'Floor Plans', 'Location'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 text-sm font-medium hover:text-luxury-gold py-2"
            >
              {item}
            </a>
          ))}
          <div className="pt-3 space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-sm border-luxury-gold text-luxury-gold"
              onClick={() => {
                onLeadFormOpen();
                setMenuOpen(false);
              }}
            >
              📄 Brochure
            </Button>
            <Button
              variant="luxury"
              size="sm"
              className="w-full text-sm bg-luxury-gold"
              onClick={() => {
                onLeadFormOpen();
                setMenuOpen(false);
              }}
            >
              📞 7331166997
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
