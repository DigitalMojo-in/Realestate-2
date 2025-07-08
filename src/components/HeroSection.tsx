import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

interface HeroSectionProps {
  onLeadFormOpen: () => void;
}

const HeroSection = ({ onLeadFormOpen }: HeroSectionProps) => {
  const images = [hero1, hero2, hero3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-[85vh] w-full overflow-hidden mt-16">
      {/* Image Slider */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
  {images.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 
        ${index === currentSlide 
          ? 'bg-luxury-gold scale-100' 
          : 'bg-white/30 hover:bg-white/50 scale-90'}`}
    />
  ))}
</div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 z-20 hover:scale-105 transition-all"
      >
        <ChevronLeft className="w-3 h-3 text-white/80" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 z-20 hover:scale-105 transition-all"
      >
        <ChevronRight className="w-3 h-3 text-white/80" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-luxury-gold' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Live the Lifestyle <br />
            <span className="text-luxury-gold block mt-1">You Deserve</span>
          </h1>
          <p className="text-base sm:text-lg mb-6 opacity-90 font-light px-2">
            2 & 3 BHK Luxury Apartments | Gated Community | Prime Location
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0">
            <Button 
              variant="cta" 
              size="lg"
              onClick={onLeadFormOpen}
              className="text-sm sm:text-base w-full sm:w-auto"
            >
              Book Site Visit
            </Button>
            <Button 
              variant="hero" 
              size="lg"
              onClick={onLeadFormOpen}
              className="text-sm sm:text-base w-full sm:w-auto"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;