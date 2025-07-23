
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
}

export const GalleryModal = ({
  images,
  isOpen,
  onClose,
  currentIndex,
}: GalleryModalProps) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [headerElement, setHeaderElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);
  useEffect(() => {
    const mainContent = document.getElementById('main');
    if (isOpen) {
      if (mainContent) mainContent.style.display = 'none';
    } else {
      if (mainContent) mainContent.style.display = '';
    }
  
    return () => {
      if (mainContent) mainContent.style.display = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const header = document.getElementById('main-header');
    const body = document.body;

    if (isOpen) {
      // Store reference to header and remove it from DOM
      if (header) {
        setHeaderElement(header);
        header.remove();
      }
      body.style.overflow = 'hidden';
    } else {
      // Re-add header to DOM if it was removed
      if (headerElement) {
        document.body.prepend(headerElement);
        setHeaderElement(null);
      }
      body.style.overflow = '';
    }

    // Cleanup function
    return () => {
      if (headerElement) {
        document.body.prepend(headerElement);
        setHeaderElement(null);
      }
      body.style.overflow = '';
    };
  }, [isOpen, headerElement]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-900S0 bg-black backdrop-blur-lg flex items-center justify-center overflow-hidden z-[99999]"
      onClick={handleBackdropClick}
    >
      <button
        onClick={onClose}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 bg-white hover:bg-gray-100 text-black h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 z-[99999999]"
        aria-label="Close gallery"
      >
        <X className="h-6 w-6 sm:h-7 sm:w-7 stroke-[2.5]" />
      </button>

      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
        <div className="relative w-full h-full flex items-center justify-center max-w-7xl">
        <div className="w-full h-full flex items-center justify-center bg-black rounded-lg shadow-2xl max-h-[85vh] sm:max-h-[90vh]" style={{ maxWidth: '95vw' }}>
  <img
    src={images[activeIndex]}
    alt={`Gallery image ${activeIndex + 1}`}
    className="z-[99999] object-contain max-h-full max-w-full rounded-lg"
  />
</div>


          {images.length > 1 && (
            <>
              <button
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 bg-black/60 hover:bg-black/80 p-3 sm:p-4 rounded-full transition-all shadow-xl backdrop-blur-sm border border-white/20"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>

              <button
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 bg-black/60 hover:bg-black/80 p-3 sm:p-4 rounded-full transition-all shadow-xl backdrop-blur-sm border border-white/20"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-2xl">
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 mx-4">
              <div className="flex gap-3 justify-center overflow-x-auto scrollbar-hide">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg cursor-pointer transition-all border-2 flex-shrink-0 hover:scale-105 ${
                      index === activeIndex
                        ? 'border-white shadow-lg scale-110'
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-white/20">
            {activeIndex + 1} / {images.length}
          </div>

          {images.length > 1 && (
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-2">
              <div className="flex gap-2 max-w-[200px] overflow-x-auto scrollbar-hide">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`w-8 h-8 object-cover rounded-md cursor-pointer transition-all border flex-shrink-0 ${
                      index === activeIndex
                        ? 'border-white scale-110'
                        : 'border-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
