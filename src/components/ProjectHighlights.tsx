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
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16 bg-background scroll-animate">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="font-montserrat text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4">
            Premium <span className="text-luxury-gold">Features</span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4">
            Experience luxury living with world-class amenities designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 xl:gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card 
                key={index}
                className={`p-2 sm:p-3 lg:p-4 xl:p-6 text-center hover:shadow-luxury transition-all duration-500 hover:scale-110 group border-luxury-silver/30 scroll-animate-scale stagger-delay-${Math.min(index + 1, 6)} active:scale-95 min-h-[100px] sm:min-h-[120px] lg:min-h-[140px]`}
              >
                <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-full mb-1 sm:mb-2 lg:mb-3 xl:mb-4 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse ${highlight.color} bg-current/10`}>
                  <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 ${highlight.color} transition-transform duration-300 group-hover:scale-125`} />
                </div>
                <h3 className="font-montserrat font-semibold mb-0.5 sm:mb-1 lg:mb-2 text-[10px] sm:text-xs lg:text-sm xl:text-base text-luxury-charcoal leading-tight">
                  {highlight.title}
                </h3>
                <p className="text-[8px] sm:text-xs lg:text-sm text-muted-foreground leading-tight">
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