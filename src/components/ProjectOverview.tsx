import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Home, Ruler, Star } from 'lucide-react';

interface ProjectOverviewProps {
  onLeadFormOpen: () => void;
}

const ProjectOverview = ({ onLeadFormOpen }: ProjectOverviewProps) => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-luxury-cream to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-4 sm:p-6 lg:p-8 shadow-luxury border-2 border-luxury-gold/20 card-gradient">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-bold text-luxury-charcoal mb-3 sm:mb-4">
                Project Overview
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-luxury-gold mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="animate-slide-in-left">
                <div className="mb-4 sm:mb-6">
                  <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-luxury-charcoal mb-2">
                    Welcome to <span className="text-luxury-gold">Premium Living</span>
                  </h3>
                  <div className="flex items-center gap-2 text-luxury-navy mb-3 sm:mb-4">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">Prime Location, City Center</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  Presenting a landmark masterpiece situated in the very heart of the city. 
                  Bringing parametric architecture for the very first time ever; 
                  the 2 & 3 BHKs here feature luxuriant rooftop amenities, meticulous detailing 
                  and thoughtful planning, complemented by world-class architecture and aesthetics.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-primary/10 p-3 sm:p-4 rounded-lg border border-primary/20">
                    <div className="text-xs sm:text-sm text-muted-foreground mb-1">Unit Type:</div>
                    <div className="font-montserrat font-bold text-primary text-sm sm:text-base lg:text-lg flex items-center gap-2">
                      <Home className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>2 & 3 BHK Apartments</span>
                    </div>
                  </div>
                  
                  <div className="bg-luxury-gold/10 p-3 sm:p-4 rounded-lg border border-luxury-gold/20">
                    <div className="text-xs sm:text-sm text-muted-foreground mb-1">Price Range:</div>
                    <div className="font-montserrat font-bold text-luxury-gold text-sm sm:text-base lg:text-lg">
                      ₹ 75 L - 1.5 CR*
                    </div>
                  </div>
                </div>
                
                <div className="bg-luxury-navy/10 p-3 sm:p-4 rounded-lg border border-luxury-navy/20 mb-4 sm:mb-6">
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1">Carpet Area:</div>
                  <div className="font-montserrat font-bold text-luxury-navy text-sm sm:text-base lg:text-lg flex items-center gap-2">
                    <Ruler className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>1245 to 2145 Sq. Ft.</span>
                  </div>
                </div>
                
                <Button 
                  variant="cta" 
                  size="xl" 
                  onClick={onLeadFormOpen}
                  className="w-full text-sm sm:text-base transform transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  DOWNLOAD BROCHURE
                </Button>
              </div>
              
              <div className="space-y-3 sm:space-y-4 animate-slide-in-right mt-6 md:mt-0">
                <Card className="p-4 sm:p-6 bg-primary text-white relative overflow-hidden hover:scale-105 transition-all duration-500 animate-scale-in" style={{animationDelay: '0.2s'}}>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-luxury-gold" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">50,000</div>
                  <div className="text-base sm:text-lg opacity-90">Sq.ft</div>
                  <div className="text-xs sm:text-sm opacity-80 mt-1">Amenity Area</div>
                </Card>
                
                <Card className="p-4 sm:p-6 bg-luxury-charcoal text-white relative overflow-hidden hover:scale-105 transition-all duration-500 animate-scale-in" style={{animationDelay: '0.4s'}}>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-luxury-gold" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">250+</div>
                  <div className="text-base sm:text-lg opacity-90">Premium</div>
                  <div className="text-xs sm:text-sm opacity-80 mt-1">Apartments</div>
                </Card>
                
                <Card className="p-4 sm:p-6 accent-gradient text-luxury-charcoal relative overflow-hidden hover:scale-105 transition-all duration-500 animate-scale-in" style={{animationDelay: '0.6s'}}>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-luxury-charcoal" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">RERA</div>
                  <div className="text-base sm:text-lg font-semibold">Approved</div>
                  <div className="text-xs sm:text-sm mt-1">Certified Project</div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;