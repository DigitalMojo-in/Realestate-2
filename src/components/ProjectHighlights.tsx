import { Card } from "@/components/ui/card";
import { CheckCircle, Building2, Car, Waves, MapPin, Shield, Zap, Users } from 'lucide-react';

const ProjectHighlights = () => {
  const highlights = [
    {
      icon: <CheckCircle className="w-8 h-8 text-luxury-gold" />,
      title: "Vastu Compliant",
      description: "Designed as per ancient principles"
    },
    {
      icon: <Building2 className="w-8 h-8 text-luxury-gold" />,
      title: "50,000 sq. ft Clubhouse",
      description: "Premium amenities & facilities"
    },
    {
      icon: <Users className="w-8 h-8 text-luxury-gold" />,
      title: "Mini Theatre",
      description: "Private screening experience"
    },
    {
      icon: <Zap className="w-8 h-8 text-luxury-gold" />,
      title: "EV Charging",
      description: "Future-ready infrastructure"
    },
    {
      icon: <MapPin className="w-8 h-8 text-luxury-gold" />,
      title: "Near IT Hubs",
      description: "5-10 mins to major tech parks"
    },
    {
      icon: <Shield className="w-8 h-8 text-luxury-gold" />,
      title: "24/7 Security",
      description: "Gated community with surveillance"
    },
    {
      icon: <Waves className="w-8 h-8 text-luxury-gold" />,
      title: "Swimming Pool",
      description: "Resort-style aquatic facilities"
    },
    {
      icon: <Car className="w-8 h-8 text-luxury-gold" />,
      title: "2-Level Parking",
      description: "Ample covered parking space"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Premium <span className="text-luxury-gold">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Experience luxury living with world-class amenities designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-luxury transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="font-montserrat font-semibold mb-2 text-sm md:text-base">
                {highlight.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;