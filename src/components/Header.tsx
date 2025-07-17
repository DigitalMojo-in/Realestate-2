
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Phone } from 'lucide-react';

interface HeaderProps {
  onLeadFormOpen: () => void;
}

const Header = ({ onLeadFormOpen }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#highlight' },
    { label: 'Specifications', href: '#specification' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#overview' },
    { label: 'Testimonials', href: '#testimonial' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <div className="text-xl font-extrabold text-yellow-400 tracking-wide font-mono">
            Digital <span className="text-white">Mojo</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-white text-sm font-medium hover:text-yellow-400 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button
            variant="redGradient"
            size="lg"
            className="text-sm font-bold group"
            onClick={onLeadFormOpen}
          >
            <Download className="w-4 h-4 mr-2 animate-pulse group-hover:animate-bounce" />
            Brochure
          </Button>
          <Button
            variant="redCta"
            size="lg"
            className="text-sm font-bold group"
            onClick={() => window.open('tel:7331166997', '_self')}
          >
            <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            Call Now
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 bg-black/95 border-t border-yellow-500 space-y-2">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-white text-sm font-medium hover:text-yellow-400 py-2"
            >
              {label}
            </a>
          ))}
          <div className="pt-3 space-y-2">
            <Button
              variant="redGradient"
              size="lg"
              className="w-full text-sm font-bold group"
              onClick={() => {
                onLeadFormOpen();
                setMenuOpen(false);
              }}
            >
              <Download className="w-4 h-4 mr-2 animate-pulse group-hover:animate-bounce" />
              Brochure
            </Button>
            <Button
              variant="redCta"
              size="lg"
              className="w-full text-sm font-bold group"
              onClick={() => {
                window.open('tel:7331166997', '_self');
                setMenuOpen(false);
              }}
            >
              <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Call Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
