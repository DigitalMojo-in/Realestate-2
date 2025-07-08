import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Download, Building2 } from 'lucide-react';
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

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section ref={sectionRef} className="py-16 bg-background scroll-animate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
            Gallery & <span className="text-luxury-gold">Floor Plans</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our premium interiors and thoughtfully designed floor plans
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="scroll-animate-left stagger-delay-1">
            <h3 className="font-montserrat text-xl font-semibold mb-4">Premium Interiors</h3>
            <Card className="overflow-hidden shadow-luxury transform transition-all duration-500 hover:scale-105">
              <div className="relative h-80 md:h-96">
                <img 
                  src={images[currentImage].src} 
                  alt={images[currentImage].title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                
                {/* Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-white font-semibold">{images[currentImage].title}</h4>
                  <p className="text-white/80 text-sm">{images[currentImage].description}</p>
                </div>
              </div>
            </Card>

            {/* Thumbnails */}
            <div className="flex space-x-2 mt-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                    index === currentImage ? 'border-luxury-gold shadow-accent' : 'border-transparent hover:border-luxury-gold/50'
                  }`}
                >
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Floor Plans */}
          <div className="scroll-animate-right stagger-delay-2">
            <h3 className="font-montserrat text-xl font-semibold mb-4">Floor Plans</h3>
            
            <Tabs defaultValue="2bhk" className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-12 mb-4">
                <TabsTrigger value="2bhk" className="text-sm font-semibold">2 BHK</TabsTrigger>
                <TabsTrigger value="3bhk" className="text-sm font-semibold">3 BHK</TabsTrigger>
              </TabsList>
              
              {Object.entries(floorPlans).map(([key, plan]) => (
                <TabsContent key={key} value={key}>
                  <Card className="p-6 shadow-card transform transition-all duration-500 hover:shadow-luxury">
                    <h4 className="font-montserrat text-lg font-semibold mb-2">{plan.title}</h4>
                    <p className="text-luxury-gold font-medium mb-4">{plan.area}</p>
                    
                    {/* Floor Plan Preview */}
                    <div className="h-48 bg-luxury-cream rounded-lg mb-4 flex items-center justify-center group transition-all duration-300 hover:bg-luxury-gold/10">
                      <div className="text-center">
                        <Building2 className="w-12 h-12 text-luxury-gold mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                        <p className="text-muted-foreground">Floor Plan Preview</p>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 group">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full transition-transform duration-300 group-hover:scale-150"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="cta" 
                      size="lg" 
                      className="w-full transform transition-all duration-300 hover:scale-105"
                      onClick={onLeadFormOpen}
                    >
                      <Download className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
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