import { Card } from "@/components/ui/card";
import { MapPin, Clock, Car, Building, GraduationCap, Heart } from 'lucide-react';

const LocationAdvantage = () => {
  const locations = [
    { icon: <Building className="w-5 h-5" />, name: "Electronic City", distance: "8 km", time: "15 mins" },
    { icon: <Building className="w-5 h-5" />, name: "Koramangala", distance: "12 km", time: "20 mins" },
    { icon: <Building className="w-5 h-5" />, name: "Whitefield", distance: "25 km", time: "35 mins" },
    { icon: <GraduationCap className="w-5 h-5" />, name: "IIM Bangalore", distance: "15 km", time: "25 mins" },
    { icon: <Heart className="w-5 h-5" />, name: "Apollo Hospital", distance: "10 km", time: "18 mins" },
    { icon: <MapPin className="w-5 h-5" />, name: "Bannerghatta Road", distance: "5 km", time: "10 mins" }
  ];

  return (
    <section id="overview" className="py-16 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Connected to Everything <span className="text-luxury-gold">That Matters</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Strategically located with easy access to IT hubs, educational institutions, and healthcare facilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center animate-slide-in-left">
          {/* Map Placeholder */}
          <div className="animate-slide-in-right">
            <Card className="p-8 h-96 flex items-center justify-center bg-gradient-to-br from-luxury-silver/20 to-luxury-gold/10 shadow-card">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-luxury-gold mx-auto mb-4" />
                <h3 className="font-montserrat text-xl font-semibold mb-2">Interactive Location Map</h3>
                <p className="text-muted-foreground">
                  Prime location in South Bangalore with excellent connectivity
                </p>
              </div>
            </Card>
          </div>

          {/* Location Details */}
          <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h3 className="font-montserrat text-2xl font-semibold mb-6">Nearby Landmarks</h3>
            
            {locations.map((location, index) => (
              <Card key={index} className="p-4 hover:shadow-card transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-luxury-gold">
                      {location.icon}
                    </div>
                    <span className="font-medium">{location.name}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Car className="w-4 h-4" />
                      <span>{location.distance}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{location.time}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 luxury-gradient text-white mt-6">
              <h4 className="font-montserrat font-semibold mb-4 text-lg">Key Transportation</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-sm">
                <div className="flex items-center gap-3 py-2">
                  <span className="text-xl">✈️</span>
                  <span>Airport: 45 mins</span>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <span className="text-xl">🚇</span>
                  <span>Metro: 2 km</span>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <span className="text-xl">🚌</span>
                  <span>Bus Stop: 500m</span>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <span className="text-xl">🛣️</span>
                  <span>ORR: 3 km</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;