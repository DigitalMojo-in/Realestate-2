import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Home, Ruler, Star } from 'lucide-react';

interface ProjectOverviewProps {
  onLeadFormOpen: () => void;
}

const ProjectOverview = ({ onLeadFormOpen }: ProjectOverviewProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-luxury-cream to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-luxury border-2 border-luxury-gold/20 card-gradient">
            <div className="text-center mb-8">
              <h2 className="font-montserrat text-4xl font-bold text-luxury-charcoal mb-4">
                Project Overview
              </h2>
              <div className="w-24 h-1 bg-luxury-gold mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-6">
                  <h3 className="font-montserrat text-2xl font-bold text-luxury-charcoal mb-2">
                    Welcome to <span className="text-luxury-gold">Premium Living</span>
                  </h3>
                  <div className="flex items-center gap-2 text-luxury-navy mb-4">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">Prime Location, City Center</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Presenting a landmark masterpiece situated in the very heart of the city. 
                  Bringing parametric architecture for the very first time ever; 
                  the 2 & 3 BHKs here feature luxuriant rooftop amenities, meticulous detailing 
                  and thoughtful planning, complemented by world-class architecture and aesthetics.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground mb-1">Unit Type:</div>
                    <div className="font-montserrat font-bold text-primary text-lg flex items-center gap-2">
                      <Home className="w-5 h-5" />
                      2 & 3 BHK Apartments
                    </div>
                  </div>
                  
                  <div className="bg-luxury-gold/10 p-4 rounded-lg border border-luxury-gold/20">
                    <div className="text-sm text-muted-foreground mb-1">Price Range:</div>
                    <div className="font-montserrat font-bold text-luxury-gold text-lg">
                      ₹ 75 L - 1.5 CR*
                    </div>
                  </div>
                </div>
                
                <div className="bg-luxury-navy/10 p-4 rounded-lg border border-luxury-navy/20 mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Carpet Area:</div>
                  <div className="font-montserrat font-bold text-luxury-navy text-lg flex items-center gap-2">
                    <Ruler className="w-5 h-5" />
                    1245 to 2145 Sq. Ft.
                  </div>
                </div>
                
                <Button 
                  variant="cta" 
                  size="xl" 
                  onClick={onLeadFormOpen}
                  className="w-full"
                >
                  DOWNLOAD BROCHURE
                </Button>
              </div>
              
              <div className="space-y-4">
                <Card className="p-6 bg-primary text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Star className="w-6 h-6 fill-current text-luxury-gold" />
                  </div>
                  <div className="text-3xl font-bold mb-2">50,000</div>
                  <div className="text-lg opacity-90">Sq.ft</div>
                  <div className="text-sm opacity-80 mt-1">Amenity Area</div>
                </Card>
                
                <Card className="p-6 bg-luxury-charcoal text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Star className="w-6 h-6 fill-current text-luxury-gold" />
                  </div>
                  <div className="text-3xl font-bold mb-2">250+</div>
                  <div className="text-lg opacity-90">Premium</div>
                  <div className="text-sm opacity-80 mt-1">Apartments</div>
                </Card>
                
                <Card className="p-6 accent-gradient text-luxury-charcoal relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Star className="w-6 h-6 fill-current text-luxury-charcoal" />
                  </div>
                  <div className="text-3xl font-bold mb-2">RERA</div>
                  <div className="text-lg font-semibold">Approved</div>
                  <div className="text-sm mt-1">Certified Project</div>
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