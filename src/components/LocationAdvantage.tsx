import { Button } from '@/components/ui/button';
import { MapPin, Clock, Plane, GraduationCap, Building, ShoppingBag, Hospital, Train } from 'lucide-react';

const LocationAdvantage = () => {
  const landmarks = [
    {
      category: 'IT Parks & Business Hubs',
      icon: Building,
      items: [
        { name: 'Electronic City Phase 1', distance: '2.5 km', time: '8 mins' },
        { name: 'Electronic City Phase 2', distance: '4.2 km', time: '12 mins' },
        { name: 'Wipro Corporate Office', distance: '3.1 km', time: '10 mins' },
        { name: 'Infosys Bangalore', distance: '5.8 km', time: '18 mins' }
      ]
    },
    {
      category: 'Educational Institutions',
      icon: GraduationCap,
      items: [
        { name: 'Delhi Public School', distance: '1.2 km', time: '4 mins' },
        { name: 'Ryan International School', distance: '2.8 km', time: '9 mins' },
        { name: 'Christ University', distance: '6.5 km', time: '20 mins' },
        { name: 'IIM Bangalore', distance: '12 km', time: '35 mins' }
      ]
    },
    {
      category: 'Healthcare',
      icon: Hospital,
      items: [
        { name: 'Narayana Multispeciality Hospital', distance: '3.2 km', time: '10 mins' },
        { name: 'Apollo Hospital', distance: '8.5 km', time: '25 mins' },
        { name: 'Fortis Hospital', distance: '7.8 km', time: '22 mins' },
        { name: 'Columbia Asia Hospital', distance: '4.1 km', time: '13 mins' }
      ]
    },
    {
      category: 'Shopping & Entertainment',
      icon: ShoppingBag,
      items: [
        { name: 'Forum Mall', distance: '4.5 km', time: '15 mins' },
        { name: 'Phoenix MarketCity', distance: '8.2 km', time: '25 mins' },
        { name: 'Total Mall', distance: '2.1 km', time: '7 mins' },
        { name: 'VR Bengaluru', distance: '6.8 km', time: '20 mins' }
      ]
    },
    {
      category: 'Transportation',
      icon: Train,
      items: [
        { name: 'Heelalige Metro Station', distance: '1.8 km', time: '6 mins' },
        { name: 'Electronic City Metro', distance: '3.5 km', time: '12 mins' },
        { name: 'Bangalore City Junction', distance: '18 km', time: '45 mins' },
        { name: 'NICE Road Access', distance: '1.2 km', time: '4 mins' }
      ]
    },
    {
      category: 'Airport & Connectivity',
      icon: Plane,
      items: [
        { name: 'Kempegowda International Airport', distance: '45 km', time: '60 mins' },
        { name: 'Proposed Peripheral Ring Road', distance: '2.0 km', time: '6 mins' },
        { name: 'Elevated Expressway', distance: '3.2 km', time: '10 mins' },
        { name: 'ORR (Outer Ring Road)', distance: '8.5 km', time: '25 mins' }
      ]
    }
  ];

  return (
    <section className="py-16 bg-brand-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Strategic Location Advantage
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            Perfectly positioned with seamless connectivity to all major destinations in Bangalore
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {landmarks.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-brand-border">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <category.icon className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text">{category.category}</h3>
              </div>
              
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                      <span className="text-brand-text text-sm font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-brand-muted">
                      <span className="font-medium">{item.distance}</span>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Map Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-brand-border">
          <h3 className="text-xl font-semibold text-brand-text mb-4 text-center">
            Interactive Location Map
          </h3>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-brand-primary mx-auto mb-2" />
              <p className="text-brand-muted">Interactive Google Map</p>
              <p className="text-sm text-brand-muted">Click to explore nearby locations</p>
            </div>
          </div>
          <div className="text-center">
            <Button variant="outline" className="mr-3">
              Get Directions
            </Button>
            <Button variant="cta">
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;