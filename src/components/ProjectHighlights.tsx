import { Shield, Award, Leaf, Car, Wifi, Dumbbell } from 'lucide-react';

const ProjectHighlights = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'RERA Approved',
      description: 'Fully compliant project with RERA registration'
    },
    {
      icon: Award,
      title: 'Premium Developer',
      description: '20+ years of excellence in real estate'
    },
    {
      icon: Leaf,
      title: 'Vastu Compliant',
      description: 'Designed as per Vastu principles for prosperity'
    },
    {
      icon: Car,
      title: 'Smart Parking',
      description: 'Automated multi-level car parking system'
    },
    {
      icon: Wifi,
      title: 'Smart Homes',
      description: 'IoT enabled apartments with home automation'
    },
    {
      icon: Dumbbell,
      title: 'Premium Clubhouse',
      description: '50,000 sq.ft clubhouse with world-class amenities'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Why Choose Our Project
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            Discover the unique features that make this project stand out from the rest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary/20 transition-colors">
                <highlight.icon className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-brand-text mb-2">{highlight.title}</h3>
              <p className="text-brand-muted">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;