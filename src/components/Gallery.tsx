import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

interface GalleryProps {
  onLeadFormOpen: () => void;
}

const Gallery = ({ onLeadFormOpen }: GalleryProps) => {
  const [currentSegment, setCurrentSegment] = useState('apartments');
  const [current, setCurrent] = useState(0);

  const gallerySegments = {
    apartments: {
      title: 'Apartments',
      images: [gallery1, gallery2, gallery3]
    },
    clubhouse: {
      title: 'Club House',
      images: [gallery2, gallery3, gallery1]
    },
    amenities: {
      title: 'Amenities',
      images: [gallery3, gallery1, gallery2]
    },
    exteriors: {
      title: 'Exteriors',
      images: [gallery1, gallery3, gallery2]
    }
  };

  const currentImages = gallerySegments[currentSegment as keyof typeof gallerySegments].images;
  const floorPlans = {
    '2bhk': {
      title: '2 BHK Apartment',
      area: '1,200 - 1,350 sq.ft',
      features: ['2 Bedrooms', '2 Bathrooms', 'Living Room', 'Kitchen', 'Balcony', 'Utility Area']
    },
    '3bhk': {
      title: '3 BHK Apartment',
      area: '1,650 - 1,850 sq.ft',
      features: ['3 Bedrooms', '3 Bathrooms', 'Living Room', 'Kitchen', '2 Balconies', 'Utility Area', 'Study Room']
    }
  };

  const nextImage = () => setCurrent((prev) => (prev + 1) % currentImages.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + currentImages.length) % currentImages.length);

  const handleSegmentChange = (segment: string) => {
    setCurrentSegment(segment);
    setCurrent(0);
  };

  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Gallery & Floor Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore interiors and layout plans that reflect modern luxury
          </p>
        </div>

        {/* Gallery Segments Tabs */}
        <div className="mb-8">
          <Tabs value={currentSegment} onValueChange={handleSegmentChange}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl mx-auto">
              {Object.entries(gallerySegments).map(([key, segment]) => (
                <TabsTrigger key={key} value={key} className="text-sm">
                  {segment.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="">
          {/* Gallery */}
          <div id="gallery" className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={currentImages[current]}
                alt={`${gallerySegments[currentSegment as keyof typeof gallerySegments].title} ${current + 1}`}
                className="w-full h-80 object-cover"
              />
              {/* Hover Navigation Arrows */}
              <button 
                onClick={prevImage} 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-105"
              >
                <ChevronLeft className="w-3 h-3" />
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-105"
              >
                <ChevronRight className="w-3 h-3" />
              </button>
              
              {/* Dot Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      current === index 
                        ? 'bg-luxury-gold shadow-sm' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {currentImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${gallerySegments[currentSegment as keyof typeof gallerySegments].title} Thumb ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`w-20 h-16 object-cover rounded-lg cursor-pointer border-2 ${current === i ? 'border-black' : 'border-transparent'}`}
                />
              ))}
            </div>
          </div>

          {/* Floor Plans */}
          {/* <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Floor Plans</h3>
            <Tabs defaultValue="2bhk">
              <TabsList className="flex gap-2 bg-gray-100 p-1 rounded-md mb-4">
                <TabsTrigger value="2bhk" className="flex-1 py-2 px-4 rounded-md bg-grey-200 text-sm font-medium text-black">
                  2 BHK
                </TabsTrigger>
                <TabsTrigger value="3bhk" className="flex-1 py-2 px-4 rounded-md bg-grey-200 text-sm font-medium text-black">
                  3 BHK
                </TabsTrigger>
              </TabsList>

              {Object.entries(floorPlans).map(([key, plan]) => (
                <TabsContent key={key} value={key} className="border rounded-md p-4 bg-gray-50">
                  <h4 className="text-lg font-semibold mb-1">{plan.title}</h4>
                  <p className="text-sm text-gray-500 mb-3">{plan.area}</p>

                  <div className="w-full h-32 bg-gray-100 flex items-center justify-center rounded-md mb-4">
                    <span className="text-sm text-gray-400">Floor Plan Preview</span>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-sm list-disc list-inside">
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>

                  <Button onClick={onLeadFormOpen} className="w-full bg-black text-white hover:bg-gray-900">
                    <Download className="w-4 h-4 mr-2" /> Get Floor Plan PDF
                  </Button>
                </TabsContent>
              ))}
            </Tabs>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;