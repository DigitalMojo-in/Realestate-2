import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

interface GalleryProps {
  onLeadFormOpen: () => void;
}

const Gallery = ({ onLeadFormOpen }: GalleryProps) => {
  const [current, setCurrent] = useState(0);

  const images = [
    { src: gallery1, title: 'Master Bedroom', desc: 'Spacious & elegant' },
    { src: gallery2, title: 'Modular Kitchen', desc: 'Functional luxury' },
    { src: gallery3, title: 'Balcony View', desc: 'Serene and scenic' },
  ];

  const floorPlans = {
    '2bhk': {
      title: '2 BHK Apartment',
      area: '1,200 - 1,350 sq.ft',
      features: ['2 Bedrooms', '2 Bathrooms', 'Living Room', 'Kitchen', 'Balcony']
    },
    '3bhk': {
      title: '3 BHK Apartment',
      area: '1,650 - 1,850 sq.ft',
      features: ['3 Bedrooms', '3 Bathrooms', 'Living Room', 'Kitchen', '2 Balconies', 'Study Room']
    }
  };

  const handleNext = () => setCurrent((current + 1) % images.length);
  const handlePrev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery & Floor Plans</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Gallery */}
          <div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img src={images[current].src} alt={images[current].title} className="w-full h-full object-cover" />
              <button onClick={handlePrev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={handleNext} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-3">
                <h4 className="text-white text-lg font-semibold">{images[current].title}</h4>
                <p className="text-white text-sm">{images[current].desc}</p>
              </div>
            </div>
          </div>

          {/* Floor Plans */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Floor Plans</h3>
            <Tabs defaultValue="2bhk">
              <TabsList className="grid grid-cols-2 mb-4 bg-gray-100 rounded-md">
                <TabsTrigger value="2bhk" className="py-2 px-4 text-sm font-medium">2 BHK</TabsTrigger>
                <TabsTrigger value="3bhk" className="py-2 px-4 text-sm font-medium">3 BHK</TabsTrigger>
              </TabsList>

              {Object.entries(floorPlans).map(([key, plan]) => (
                <TabsContent key={key} value={key}>
                  <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
                    <h4 className="text-lg font-bold mb-1">{plan.title}</h4>
                    <p className="text-sm text-yellow-600 font-medium mb-4">{plan.area}</p>

                    <div className="w-full h-32 bg-white border border-dashed border-gray-300 rounded flex items-center justify-center mb-4">
                      <span className="text-gray-500 text-sm">Floor Plan Preview</span>
                    </div>

                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800 mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    <Button
                      variant="cta"
                      size="lg"
                      className="w-full"
                      onClick={onLeadFormOpen}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Get Floor Plan PDF
                    </Button>
                  </div>
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