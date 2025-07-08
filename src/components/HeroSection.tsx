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
    <section className="relative h-[80vh] w-full overflow-hidden mt-16">
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
              alt={`Luxury apartment view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient z-10" />

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/10 backdrop-blur-sm rounded-full p-1 z-20"
      >
        <ChevronLeft className="w-4 h-4 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/10 backdrop-blur-sm rounded-full p-1 z-20"
      >
        <ChevronRight className="w-4 h-4 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-1.5 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-luxury-gold shadow' 
                : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up leading-tight">
            Live the Lifestyle <br />
            <span className="text-luxury-gold block mt-2">You Deserve</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 animate-slide-up font-light px-2" style={{animationDelay: '0.3s'}}>
            2 & 3 BHK Luxury Apartments | Gated Community | Prime Location
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up px-4 sm:px-0" style={{animationDelay: '0.6s'}}>
            <Button 
              variant="cta" 
              size="xl"
              onClick={onLeadFormOpen}
              className="text-base sm:text-lg w-full sm:w-auto transform transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Book Site Visit
            </Button>
            <Button 
              variant="hero" 
              size="xl"
              onClick={onLeadFormOpen}
              className="text-base sm:text-lg w-full sm:w-auto transform transition-all duration-300 hover:scale-105 active:scale-95"
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