import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Dumbbell, 
  Waves, 
  Gamepad2, 
  Trees, 
  Car, 
  Shield,
  Utensils,
  Users,
  Baby,
  Coffee,
  Sparkles,
  Heart
} from 'lucide-react';

interface AmenitiesSectionProps {
  onCTAClick: () => void;
}

const AmenitiesSection = ({ onCTAClick }: AmenitiesSectionProps) => {
  const amenityCategories = [
    {
      title: 'Club & Recreation',
      icon: Dumbbell,
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      amenities: [
        'State-of-the-art Gymnasium',
        'Swimming Pool with Kids Pool',
        'Indoor Games Room',
        'Community Hall',
        'Library & Reading Room',
        'Multipurpose Court'
      ]
    },
    {
      title: 'Outdoor & Wellness',
      icon: Trees,
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      amenities: [
        'Landscaped Gardens',
        'Jogging Track',
        'Yoga & Meditation Area',
        'Senior Citizen Seating',
        'Amphitheatre',
        'Reflexology Path'
      ]
    },
    {
      title: 'Family & Kids',
      icon: Baby,
      color: 'bg-pink-50 border-pink-200',
      iconColor: 'text-pink-600',
      amenities: [
        'Kids Play Area',
        'Toddlers Zone',
        'Sand Pit',
        'Splash Pool',
        'Activity Lawn',
        'Daycare Center'
      ]
    },
    {
      title: 'Convenience & Security',
      icon: Shield,
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600',
      amenities: [
        '24/7 Security',
        'CCTV Surveillance',
        'Visitor Management',
        'Intercom Facility',
        'Fire Safety Systems',
        'Earthquake Resistant'
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-brand-surface to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
            World-Class Amenities
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            Experience luxury living with our thoughtfully curated amenities designed for every member of your family
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {amenityCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className={`${category.color} border-2 hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${category.iconColor}`} />
                    </div>
                    <span className="text-xl font-bold text-brand-text">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.amenities.map((amenity, amenityIndex) => (
                      <div key={amenityIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-brand-text font-medium">
                          {amenity}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Premium Features */}
        <div className="bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-brand-text mb-6 text-center">
            Premium Lifestyle Features
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Car, label: 'Valet Parking' },
              { icon: Coffee, label: 'Café Lounge' },
              { icon: Utensils, label: 'Banquet Hall' },
              { icon: Users, label: 'Co-working Space' },
              { icon: Sparkles, label: 'Spa & Salon' },
              { icon: Heart, label: 'Medical Center' }
            ].map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                    <FeatureIcon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <p className="text-sm font-medium text-brand-text">
                    {feature.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={onCTAClick}
            className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Schedule Amenities Tour
          </Button>
          <p className="text-sm text-brand-muted mt-2">
            Visit us to experience these world-class amenities
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;