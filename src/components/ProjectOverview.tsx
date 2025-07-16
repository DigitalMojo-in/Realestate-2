import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Calendar, Building, Users } from 'lucide-react';

interface ProjectOverviewProps {
  onLeadFormOpen: () => void;
}

const ProjectOverview = ({ onLeadFormOpen }: ProjectOverviewProps) => {
  const configurations = [
    { type: '2 BHK', price: '₹85 Lakhs', area: '1,200 sq.ft' },
    { type: '3 BHK', price: '₹1.2 Cr', area: '1,650 sq.ft' },
    { type: '4 BHK', price: '₹1.8 Cr', area: '2,200 sq.ft' }
  ];

  const stats = [
    { icon: Building, label: 'Project Area', value: '12 Acres' },
    { icon: Calendar, label: 'Possession', value: 'Dec 2025' },
    { icon: Home, label: 'Towers', value: '4 Towers, G+15' },
    { icon: Users, label: 'Total Units', value: '480 Units' }
  ];

  return (
    <section className="py-16 bg-brand-surface">
      <div className="container mx-auto px-4">
        {/* Project Hook */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Luxury Living Redefined
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            Experience the perfect blend of modern architecture and premium amenities in the heart of the city's most coveted location.
          </p>
        </div>

        {/* Configuration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {configurations.map((config, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-brand-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brand-text mb-2">{config.type}</h3>
                <p className="text-2xl font-bold text-brand-primary mb-1">{config.price}</p>
                <p className="text-brand-muted mb-4">{config.area}</p>
                <Button 
                  variant="outline" 
                  onClick={onLeadFormOpen}
                  className="w-full"
                >
                  Get Floor Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 4-Stat Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-lg p-6 shadow-sm border border-brand-border">
              <stat.icon className="w-8 h-8 text-brand-primary mx-auto mb-3" />
              <h4 className="text-2xl font-bold text-brand-text mb-1">{stat.value}</h4>
              <p className="text-brand-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;