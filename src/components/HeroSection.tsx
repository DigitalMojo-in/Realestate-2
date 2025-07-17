
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Phone } from 'lucide-react';

interface HeroSectionProps {
  onLeadFormOpen: () => void;
}

const HeroSection = ({ onLeadFormOpen }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Using placeholder images for better visual appeal
  const images = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="hero" className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden mt-16">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Luxury Apartment ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-red-500' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-4 max-w-xl mx-auto animate-fade-in-up">
          <h1 className="font-spartan text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 leading-tight">
            Unlock Premium Living<br />
            <span className="text-red-400">Every Day</span>
          </h1>
          <p className="text-xs sm:text-base mb-4 opacity-90 font-light">
            Smart Design | Prime Location | Secure Community
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={onLeadFormOpen}
              variant="redGradient"
              size="xl"
              className="group"
            >
              <Phone className="w-5 h-5 mr-2 animate-bounce" />
              Book Site Visit
            </Button>
            <Button
              onClick={onLeadFormOpen}
              variant="redCta"
              size="xl"
              className="group"
            >
              <Download className="w-5 h-5 mr-2 animate-pulse" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
