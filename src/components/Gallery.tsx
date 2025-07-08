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
    <section ref={sectionRef} className="py-20 bg-gray-100 scroll-animate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Gallery & <span className="text-yellow-500">Floor Plans</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our premium interiors and thoughtfully designed floor plans
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Image Gallery */}
          <div className="scroll-animate-left stagger-delay-1">
            <h3 className="font-montserrat text-xl font-semibold mb-4 text-gray-800">Premium Interiors</h3>
            <Card className="overflow-hidden shadow-lg bg-white">
              <div className="relative h-64 sm:h-80 md:h-96">
                <img 
                  src={images[currentImage].src} 
                  alt={images[currentImage].title}
                  className="w-full h-full object-cover"
                />

                <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70">
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
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
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${index === currentImage ? 'border-yellow-500 shadow' : 'border-transparent hover:border-yellow-400'}`}
                >
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Floor Plans */}
          <div className="scroll-animate-right stagger-delay-2">
            <h3 className="font-montserrat text-xl font-semibold mb-4 text-gray-800">Floor Plans</h3>
            <Tabs defaultValue="2bhk" className="w-full">
              <TabsList className="grid grid-cols-2 gap-2 bg-yellow-100 p-1 rounded-lg mb-4">
                <TabsTrigger value="2bhk" className="font-semibold text-gray-800">2 BHK</TabsTrigger>
                <TabsTrigger value="3bhk" className="font-semibold text-gray-800">3 BHK</TabsTrigger>
              </TabsList>

              {Object.entries(floorPlans).map(([key, plan]) => (
                <TabsContent key={key} value={key}>
                  <Card className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h4 className="font-montserrat text-lg font-semibold mb-2 text-gray-900">{plan.title}</h4>
                    <p className="text-yellow-500 font-medium mb-4 text-base">{plan.area}</p>

                    <div className="h-40 bg-gray-50 rounded-lg mb-4 flex items-center justify-center border border-gray-200">
                      <div className="text-center">
                        <div className="w-20 h-16 mx-auto mb-2 bg-white rounded-md border border-gray-200 flex items-center justify-center">
                          <div className="grid grid-cols-2 gap-1 w-10 h-8">
                            <div className="bg-yellow-300 rounded-sm"></div>
                            <div className="bg-gray-300 rounded-sm"></div>
                            <div className="bg-gray-300 rounded-sm"></div>
                            <div className="bg-yellow-300 rounded-sm"></div>
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm font-medium">Floor Plan Preview</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="default" 
                      size="lg" 
                      className="w-full text-sm h-12 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:brightness-110"
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
