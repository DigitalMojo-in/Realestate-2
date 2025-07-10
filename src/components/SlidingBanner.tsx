import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BannerSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
}

interface SlidingBannerProps {
  onCTAClick: () => void;
}

const SlidingBanner = ({ onCTAClick }: SlidingBannerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: BannerSlide[] = [
    {
      id: 1,
      image: '/lovable-uploads/1542c8c9-f6f5-4cdf-a2a6-9e8d8ce0fe4d.png',
      title: 'LUXURY REDEFINED',
      subtitle: '2 & 3 BHK Premium Apartments',
      cta: 'Explore Now'
    },
    {
      id: 2,
      image: '/lovable-uploads/1542c8c9-f6f5-4cdf-a2a6-9e8d8ce0fe4d.png',
      title: 'PRIME LOCATION',
      subtitle: 'Strategic connectivity to IT hubs',
      cta: 'View Location'
    },
    {
      id: 3,
      image: '/lovable-uploads/1542c8c9-f6f5-4cdf-a2a6-9e8d8ce0fe4d.png',
      title: 'WORLD-CLASS AMENITIES',
      subtitle: 'Clubhouse • Pool • Gym • Garden',
      cta: 'Book Visit'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 z-20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 z-20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-brand-primary shadow-lg'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white animate-fade-in-up">
            <h1 className="font-montserrat text-4xl sm:text-6xl font-bold mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl mb-8 opacity-90 font-light">
              {slides[currentSlide].subtitle}
            </p>
            <Button
              onClick={onCTAClick}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105"
            >
              {slides[currentSlide].cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlidingBanner;