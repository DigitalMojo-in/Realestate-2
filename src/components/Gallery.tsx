import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
gallery2 from '@/assets/gallery-2.jpg';
gallery3 from '@/assets/gallery-3.jpg';

interface GalleryProps {
  onLeadFormOpen: () => void;
}

const Gallery = ({ onLeadFormOpen }: GalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: gallery1, title: 'Master Bedroom' },
    { src: gallery2, title: 'Modular Kitchen' },
    { src: gallery3, title: 'Balcony View' },
  ];

  const floorPlans = {
    '2bhk': {
      title: '2 BHK',
      area: '1,200 - 1,350 sq.ft',
      features: ['2 Bedrooms', '2 Bathrooms', 'Living Room', 'Kitchen', 'Balcony']
    },
    '3bhk': {
      title: '3 BHK',
      area: '1,650 - 1,850 sq.ft',
      features: ['3 Bedrooms', '3 Bathrooms', 'Living Room', 'Kitchen', '2 Balconies', 'Study Room']
    }
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-center text-3xl font-bold mb-10">Gallery & Floor Plans</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Gallery */}
          <div>
            <Card className="overflow-hidden relative">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].title}
                className="w-full h-80 object-cover"
              />
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-sm">
                {images[currentImage].title}
              </div>
            </Card>
            <div className="flex gap-2 mt-3 overflow-x-auto">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.title}
                  onClick={() => setCurrentImage(index)}
                  className={`w-16 h-12 object-cover rounded cursor-pointer border ${index === currentImage ? 'border-yellow-500' : 'border-transparent'}`}
                />
              ))}
            </div>
          </div>

          {/* Floor Plans */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Floor Plans</h3>
            <Tabs defaultValue="2bhk" className="w-full">
              <TabsList className="flex gap-4 bg-gray-200 rounded p-1 mb-4">
                <TabsTrigger value="2bhk" className="w-full py-2 px-4 text-sm font-medium rounded bg-white">2 BHK</TabsTrigger>
                <TabsTrigger value="3bhk" className="w-full py-2 px-4 text-sm font-medium rounded bg-white">3 BHK</TabsTrigger>
              </TabsList>
              {Object.entries(floorPlans).map(([key, data]) => (
                <TabsContent key={key} value={key}>
                  <Card className="p-5">
                    <h4 className="text-lg font-semibold mb-1">{data.title}</h4>
                    <p className="text-yellow-600 mb-4">{data.area}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {data.features.map((feature, i) => (
                        <div key={i} className="text-sm flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button onClick={onLeadFormOpen} className="w-full bg-yellow-500 text-white">
                      <Download className="w-4 h-4 mr-2" /> Get Floor Plan PDF
                    </Button>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;