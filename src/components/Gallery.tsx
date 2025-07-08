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
  const [current, setCurrent] = useState(0);

  const images = [gallery1, gallery2, gallery3];
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

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Gallery & Floor Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore interiors and layout plans that reflect modern luxury
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={images[current]}
                alt={`Gallery ${current + 1}`}
                className="w-full h-80 object-cover"
              />
              <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 text-black rounded-full p-1 hover:bg-white">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 text-black rounded-full p-1 hover:bg-white">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Thumb ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`w-20 h-16 object-cover rounded-lg cursor-pointer border-2 ${current === i ? 'border-black' : 'border-transparent'}`}
                />
              ))}
            </div>
          </div>

          {/* Floor Plans */}
          <div className="w-full lg:w-1/2">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;