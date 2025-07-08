import { Card } from "@/components/ui/card";
import { CheckCircle, Building2, Car, Waves, MapPin, Shield, Zap, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProjectHighlights = () => {
  const sectionRef = useScrollAnimation();
  
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
    <section ref={sectionRef} className="py-12 sm:py-16 bg-background scroll-animate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Premium <span className="text-luxury-gold">Features</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Experience luxury living with world-class amenities designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card 
                key={index}
                className={`p-3 sm:p-4 lg:p-6 text-center hover:shadow-luxury transition-all duration-500 hover:scale-110 group border-luxury-silver/30 scroll-animate-scale stagger-delay-${Math.min(index + 1, 6)} active:scale-95`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full mb-2 sm:mb-3 lg:mb-4 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse ${highlight.color} bg-current/10`}>
                  <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${highlight.color} transition-transform duration-300 group-hover:scale-125`} />
                </div>
                <h3 className="font-montserrat font-semibold mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base text-luxury-charcoal">
                  {highlight.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
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