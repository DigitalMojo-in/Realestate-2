
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Import images
import gallery1 from '@/assets/gallery-1.jpeg';
import gallery2 from '@/assets/gallery-2.jpeg';
import gallery3 from '@/assets/gallery-3.jpeg';
import gallery4 from '@/assets/gallery-4.jpeg';

interface CaseStudy {
  id: string;
  brand: string;
  logo: string;
  image: string;
  metric: string;
  headline: string;
  description: string;
  bgColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    brand: 'Brigade Group',
    logo: '/DMMM.png',
    image: gallery1,
    metric: '40% Lower CPL',
    headline: 'Performance Revolution',
    description: 'Strategic campaign optimization delivering exceptional cost per lead reduction across all channels.',
    bgColor: 'from-blue-500/20 to-purple-500/20'
  },
  {
    id: '2',
    brand: 'Hiranandani Group',
    logo: '/DMMM.png',
    image: gallery2,
    metric: '65% Conversion Boost',
    headline: 'Targeted Excellence',
    description: 'Advanced audience segmentation driving unprecedented conversion rate improvements.',
    bgColor: 'from-green-500/20 to-blue-500/20'
  },
  {
    id: '3',
    brand: 'Prestige Group',
    logo: '/DMMM.png',
    image: gallery3,
    metric: '300% ROI Growth',
    headline: 'Multi-Platform Success',
    description: 'Comprehensive performance marketing strategy delivering exceptional return on investment.',
    bgColor: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: '4',
    brand: 'Godrej Properties',
    logo: '/DMMM.png',
    image: gallery4,
    metric: '50% Lead Quality',
    headline: 'Quality Innovation',
    description: 'Enhanced lead scoring and qualification processes improving overall campaign effectiveness.',
    bgColor: 'from-orange-500/20 to-red-500/20'
  }
];

export function CaseStudyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    setIsAutoPlaying(false);
  };

  const getSlidePosition = (index: number) => {
    const diff = index - currentIndex;
    const totalSlides = caseStudies.length;
    
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(totalSlides - 1)) return 'right';
    if (diff === -1 || diff === totalSlides - 1) return 'left';
    return 'hidden';
  };

  return (
    <>
      {/* Desktop 3D Carousel */}
      <div className="hidden md:block relative w-full h-96 perspective-1000 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img
                src={study.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${study.bgColor} backdrop-blur-sm`} />
            </div>
          ))}
        </div>

        {/* 3D Carousel Slides */}
        <div className="relative w-full h-full flex items-center justify-center">
          {caseStudies.map((study, index) => {
            const position = getSlidePosition(index);
            
            return (
              <div
                key={study.id}
                className={`absolute w-80 h-72 transition-all duration-700 ease-in-out transform-gpu ${
                  position === 'center'
                    ? 'translate-x-0 scale-100 z-30 rotateY-0'
                    : position === 'left'
                    ? '-translate-x-96 scale-75 z-10 rotateY-45 opacity-60'
                    : position === 'right'
                    ? 'translate-x-96 scale-75 z-10 rotateY--45 opacity-60'
                    : 'opacity-0 scale-50'
                }`}
                style={{
                  transform: `${
                    position === 'center'
                      ? 'translateX(0) scale(1) rotateY(0deg)'
                      : position === 'left'
                      ? 'translateX(-24rem) scale(0.75) rotateY(45deg)'
                      : position === 'right'
                      ? 'translateX(24rem) scale(0.75) rotateY(-45deg)'
                      : 'scale(0.5)'
                  }`,
                }}
              >
                <Card className="w-full h-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg border-2 border-white/20 shadow-2xl">
                  <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center space-y-4">
                    <img
                      src={study.logo}
                      alt={study.brand}
                      className="w-16 h-16 object-contain"
                    />
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {study.metric}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {study.headline}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {study.description}
                    </p>
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {study.brand}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/80 hover:bg-white/90 dark:bg-gray-800/80 dark:hover:bg-gray-800/90 border-2 border-white/40 shadow-lg backdrop-blur-sm transition-all duration-200"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/80 hover:bg-white/90 dark:bg-gray-800/80 dark:hover:bg-gray-800/90 border-2 border-white/40 shadow-lg backdrop-blur-sm transition-all duration-200"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white shadow-lg scale-110'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
            />
          ))}
        </div>
      </div>

      {/* Mobile Gallery View */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {caseStudies.map((study) => (
              <div key={study.id} className="w-full flex-shrink-0 px-2">
                <Card className="shadow-xl bg-white dark:bg-gray-800">
                  <CardContent className="p-4 space-y-4">
                    <img
                      src={study.image}
                      alt={study.brand}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="text-center space-y-2">
                      <img
                        src={study.logo}
                        alt={study.brand}
                        className="w-12 h-12 object-contain mx-auto"
                      />
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">
                        {study.metric}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {study.headline}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {study.description}
                      </p>
                      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        {study.brand}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
        
        {/* Mobile Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}