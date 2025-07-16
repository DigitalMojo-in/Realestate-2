import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Car, 
  Zap, 
  Trees, 
  Dumbbell, 
  Waves,
  Building,
  MapPin,
  Clock,
  Star
} from 'lucide-react';

interface USPSectionProps {
  onCTAClick: () => void;
}

const USPSection = ({ onCTAClick }: USPSectionProps) => {
  const usps = [
    {
      icon: Shield,
      title: 'Gated Community',
      description: '24/7 Security with CCTV surveillance'
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Strategic connectivity to IT corridors'
    },
    {
      icon: Building,
      title: 'RERA Approved',
      description: 'Government approved project'
    },
    {
      icon: Car,
      title: 'Ample Parking',
      description: 'Covered parking for every unit'
    },
    {
      icon: Dumbbell,
      title: 'Modern Clubhouse',
      description: 'Gym, swimming pool & recreational facilities'
    },
    {
      icon: Trees,
      title: 'Vastu Compliant',
      description: 'Homes designed as per Vastu principles'
    },
    {
      icon: Zap,
      title: 'Power Backup',
      description: '100% power backup for common areas'
    },
    {
      icon: Waves,
      title: 'Water Feature',
      description: 'Landscaped gardens with water bodies'
    },
    {
      icon: Clock,
      title: 'Ready to Move',
      description: 'Immediate possession available'
    },
    {
      icon: Star,
      title: 'Premium Finishes',
      description: 'High-quality fixtures & fittings'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-brand-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
            Why Choose Vinay Iconic?
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            Discover the top advantages that make this project your perfect home choice
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {usps.map((usp, index) => {
            const IconComponent = usp.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-sm border border-brand-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="font-semibold text-brand-text mb-2">
                  {usp.title}
                </h3>
                <p className="text-sm text-brand-muted">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={onCTAClick}
            className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Book Your Site Visit Today
          </Button>
          <p className="text-sm text-brand-muted mt-2">
            Schedule a free site visit and experience these features yourself
          </p>
        </div>
      </div>
    </section>
  );
};

export default USPSection;