import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Home, Building, Wrench, TreePine, Car, Shield } from 'lucide-react';

const SpecificationsSection = () => {
  const [openSpecs, setOpenSpecs] = useState<string[]>(['unit-configs']);

  const specifications = [
    {
      id: 'unit-configs',
      icon: Home,
      title: 'Unit Configurations',
      color: 'text-blue-500',
      items: [
        '2 BHK: 1,200 - 1,350 sq.ft',
        '3 BHK: 1,500 - 1,800 sq.ft',
        'Spacious balconies with premium views',
        'Modular kitchen with granite countertops',
        'Master bedroom with walk-in closet'
      ]
    },
    {
      id: 'construction',
      icon: Building,
      title: 'Construction Specifications',
      color: 'text-orange-500',
      items: [
        'RCC framed structure with earthquake resistance',
        'AAC block walls for thermal insulation',
        'Vitrified tiles in living areas',
        'Anti-skid ceramic tiles in bathrooms',
        'Teak wood frames with flush doors'
      ]
    },
    {
      id: 'fittings',
      icon: Wrench,
      title: 'Fittings & Fixtures',
      color: 'text-purple-500',
      items: [
        'Premium CP fittings in bathrooms',
        'Concealed copper wiring with modular switches',
        'Split AC provisions in all bedrooms',
        'Geyser points in all bathrooms',
        'Premium sanitary ware'
      ]
    },
    {
      id: 'amenities',
      icon: TreePine,
      title: 'Premium Amenities',
      color: 'text-green-500',
      items: [
        '50,000 sq.ft clubhouse with gym',
        'Swimming pool with kids section',
        'Multi-purpose hall & banquet',
        'Indoor games room',
        'Landscaped gardens & walking tracks'
      ]
    },
    {
      id: 'parking',
      icon: Car,
      title: 'Parking & Utilities',
      color: 'text-indigo-500',
      items: [
        'Covered car parking for each unit',
        'Visitor parking area',
        'EV charging points',
        '24x7 power backup',
        'High-speed elevators'
      ]
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security Features',
      color: 'text-red-500',
      items: [
        '24x7 security with CCTV surveillance',
        'Gated community with single entry/exit',
        'Video door phones in all units',
        'Fire safety systems',
        'Intercom facility'
      ]
    }
  ];

  const toggleSpec = (id: string) => {
    setOpenSpecs(prev => 
      prev.includes(id) 
        ? prev.filter(specId => specId !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="specification" className="py-16 bg-gradient-to-b from-white to-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-luxury-charcoal animate-fade-in-up">
            Technical Specifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Detailed specifications and features that make this project exceptional
          </p>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mt-6 rounded-full animate-fade-in-up" style={{animationDelay: '0.4s'}}></div>
        </div>

        <div id="gallery" className="max-w-4xl mx-auto space-y-4">
          {specifications.map((spec, index) => {
            const IconComponent = spec.icon;
            const isOpen = openSpecs.includes(spec.id);
            
            return (
              <Card 
                key={spec.id} 
                className="overflow-hidden hover:shadow-luxury transition-all duration-300 border-luxury-silver/30 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Collapsible open={isOpen} onOpenChange={() => toggleSpec(spec.id)}>
                  <CollapsibleTrigger className="w-full p-6 text-left hover:bg-luxury-cream/30 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${spec.color} bg-current/10`}>
                          <IconComponent className={`w-6 h-6 ${spec.color}`} />
                        </div>
                        <h3 className="font-montserrat text-xl font-semibold text-luxury-charcoal">
                          {spec.title}
                        </h3>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-luxury-charcoal transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6">
                    <div className="ml-16 space-y-3">
                      {spec.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;