import { Card } from "@/components/ui/card";
import { CheckCircle, Building2, Car, Waves, MapPin, Shield, Zap, Users } from 'lucide-react';

const ProjectHighlights = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: "Vastu Compliant",
      description: "Designed as per ancient principles",
      color: "text-emerald-500"
    },
    {
      icon: Building2,
      title: "50,000 sq. ft Clubhouse",
      description: "Premium amenities & facilities",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Mini Theatre",
      description: "Private screening experience",
      color: "text-purple-500"
    },
    {
      icon: Zap,
      title: "EV Charging",
      description: "Future-ready infrastructure",
      color: "text-yellow-500"
    },
    {
      icon: MapPin,
      title: "Near IT Hubs",
      description: "5-10 mins to major tech parks",
      color: "text-orange-500"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Gated community with surveillance",
      color: "text-red-500"
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Resort-style aquatic facilities",
      color: "text-cyan-500"
    },
    {
      icon: Car,
      title: "2-Level Parking",
      description: "Ample covered parking space",
      color: "text-indigo-500"
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
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-scale-in group border-luxury-silver/30"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300 group-hover:scale-110 ${highlight.color} bg-current/10`}>
                  <IconComponent className={`w-8 h-8 ${highlight.color}`} />
                </div>
                <h3 className="font-montserrat font-semibold mb-2 text-sm md:text-base text-luxury-charcoal">
                  {highlight.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;