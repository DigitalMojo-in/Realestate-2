import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

interface GalleryProps {
  onLeadFormOpen: () => void;
}

const Gallery = ({ onLeadFormOpen }: GalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useScrollAnimation();

  const images = [
    { src: gallery1, title: "Master Bedroom", description: "Spacious bedroom with premium finishes" },
    { src: gallery2, title: "Modular Kitchen", description: "State-of-the-art kitchen with premium appliances" },
    { src: gallery3, title: "Balcony View", description: "Stunning city skyline views from your balcony" }
  ];

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

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section ref={sectionRef} className="py-16 bg-white scroll-animate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Gallery & <span className="text-yellow-500">Floor Plans</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our premium interiors and thoughtfully designed floor plans
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">Premium Interiors</h3>
            <Card className="overflow-hidden shadow-md">
              <div className="relative h-64 sm:h-80 md:h-96">
                <img 
                  src={images[currentImage].src} 
                  alt={images[currentImage].title}
                  className="w-full h-full object-cover"
                />
                <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2">
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h4 className="text-white font-semibold text-base">{images[currentImage].title}</h4>
                  <p className="text-white/80 text-sm">{images[currentImage].description}</p>
                </div>
              </div>
            </Card>

            <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${index === currentImage ? 'border-yellow-500' : 'border-transparent'}`}
                >
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Floor Plans */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">Floor Plans</h3>
            <Tabs defaultValue="2bhk" className="w-full">
              <TabsList className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded-md mb-4">
                <TabsTrigger value="2bhk" className="text-sm font-medium">2 BHK</TabsTrigger>
                <TabsTrigger value="3bhk" className="text-sm font-medium">3 BHK</TabsTrigger>
              </TabsList>

              {Object.entries(floorPlans).map(([key, plan]) => (
                <TabsContent key={key} value={key}>
                  <Card className="p-6 border border-gray-200">
                    <h4 className="text-lg font-semibold mb-2 text-neutral-900">{plan.title}</h4>
                    <p className="text-yellow-600 font-medium mb-4 text-base">{plan.area}</p>

                    <div className="h-36 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-sm text-gray-500">Floor Plan Preview</span>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-800 mb-6 list-disc list-inside">
                      {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>

                    <Button 
                      variant="cta" 
                      size="lg" 
                      className="w-full text-sm h-12 bg-yellow-500 text-white hover:bg-yellow-600"
                      onClick={onLeadFormOpen}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Get Floor Plan PDF
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
