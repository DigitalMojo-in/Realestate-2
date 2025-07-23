
import { useMemo, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GalleryModal } from './GalleryModal';

interface ScrollingGalleryProps {
  images: string[];
  className?: string;
}

export const ScrollingGallery = ({ images, className = '' }: ScrollingGalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Utility to shuffle an array
  const shuffleArray = (arr: string[]) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Memoize the shuffled arrays so it doesn't reshuffle every re-render
  const shuffledImagesRow1 = useMemo(() => shuffleArray(images), [images]);
  const shuffledImagesRow2 = useMemo(() => shuffleArray(images), [images]);
  const shuffledImagesRow3 = useMemo(() => shuffleArray(images), [images]);

  return (
    <>
      <div className={`relative overflow-hidden ${className}`}>
        {/* Desktop View - 3 rows scrolling */}
        <div className="hidden lg:block">
          {/* First row - normal direction */}
          <div className="flex gap-6 animate-infinite-scroll hover:pause mb-6">
            {shuffledImagesRow1.map((image, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-80 h-60 card-hover cursor-pointer group"
                onClick={() => openModal(images.indexOf(image))}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-6 animate-infinite-scroll-reverse hover:pause mb-6">
            {shuffledImagesRow2.map((image, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-80 h-60 card-hover cursor-pointer group"
                onClick={() => openModal(images.indexOf(image))}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-6 animate-infinite-scroll hover:pause">
            {shuffledImagesRow3.map((image, index) => (
              <div
                key={`row3-${index}`}
                className="flex-shrink-0 w-80 h-60 card-hover cursor-pointer group"
                onClick={() => openModal(images.indexOf(image))}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Single image auto-scrolling optimized */}
        <div className="lg:hidden relative mx-4 sm:mx-6">
          <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-700">
            <div 
              className="flex transition-transform duration-700 ease-out h-full"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 cursor-pointer relative group"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                  <div className="absolute bottom-3 left-3 text-white text-xs sm:text-sm bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {index + 1} / {images.length}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows - improved mobile design */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white text-black h-8 w-8 sm:h-10 sm:w-10 rounded-full shadow-lg border border-gray-200"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white text-black h-8 w-8 sm:h-10 sm:w-10 rounded-full shadow-lg border border-gray-200"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          {/* Dots indicator - improved mobile design */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-gray-400 hover:bg-gray-600 w-2'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <GalleryModal
        images={images}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentIndex={selectedImageIndex}
      />
    </>
  );
};
