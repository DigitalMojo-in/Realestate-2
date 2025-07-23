import { useMemo } from 'react';

interface RotatedBackgroundGalleryProps {
  images: string[];
  className?: string;
}

export const RotatedBackgroundGallery = ({ images, className = '' }: RotatedBackgroundGalleryProps) => {
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
  const shuffledImagesRow4 = useMemo(() => shuffleArray(images), [images]);

  // Create extended arrays for infinite scroll
  const extendedRow1 = [...shuffledImagesRow1, ...shuffledImagesRow1, ...shuffledImagesRow1];
  const extendedRow2 = [...shuffledImagesRow2, ...shuffledImagesRow2, ...shuffledImagesRow2];
  const extendedRow3 = [...shuffledImagesRow3, ...shuffledImagesRow3, ...shuffledImagesRow3];
  const extendedRow4 = [...shuffledImagesRow4, ...shuffledImagesRow4, ...shuffledImagesRow4];

  return (
    <div className={`absolute inset-0 overflow-hidden opacity-20 ${className}`} style={{ transform: 'rotate(-12deg) scale(1.2)', transformOrigin: 'center' }}>
      {/* Desktop View - 4 rows */}
      <div className="hidden md:block">
        {/* Row 1 - normal direction */}
        <div className="flex gap-4 animate-infinite-scroll mb-4 -ml-96">
          {extendedRow1.map((image, index) => (
            <div
              key={`bg-row1-${index}`}
              className="flex-shrink-0 w-48 h-32 pointer-events-none"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Row 2 - reverse direction */}
        <div className="flex gap-4 animate-infinite-scroll-reverse mb-4 -ml-96">
          {extendedRow2.map((image, index) => (
            <div
              key={`bg-row2-${index}`}
              className="flex-shrink-0 w-48 h-32 pointer-events-none"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Row 3 - normal direction */}
        <div className="flex gap-4 animate-infinite-scroll mb-4 -ml-96">
          {extendedRow3.map((image, index) => (
            <div
              key={`bg-row3-${index}`}
              className="flex-shrink-0 w-48 h-32 pointer-events-none"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Row 4 - reverse direction */}
        <div className="flex gap-4 animate-infinite-scroll-reverse -ml-96">
          {extendedRow4.map((image, index) => (
            <div
              key={`bg-row4-${index}`}
              className="flex-shrink-0 w-48 h-32 pointer-events-none"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View - 2 rows */}
      <div className="md:hidden">
        {/* Row 1 - normal direction */}
        <div className="flex gap-3 animate-infinite-scroll mb-3 -ml-64">
          {extendedRow1.map((image, index) => (
            <div
              key={`bg-mobile-row1-${index}`}
              className="flex-shrink-0 w-32 h-24 pointer-events-none"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Row 2 - reverse direction */}
        <div className="flex gap-3 animate-infinite-scroll-reverse -ml-64">
          {extendedRow2.map((image, index) => (
            <div
              key={`bg-mobile-row2-${index}`}
              className="flex-shrink-0 w-32 h-24 pointer-events-none"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="flex gap-4 animate-infinite-scroll mb-4 -ml-96">
          {extendedRow3.map((image, index) => (
            <div
              key={`bg-row3-${index}`}
              className="flex-shrink-0 w-48 h-32 pointer-events-none"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};