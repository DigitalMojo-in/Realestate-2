import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Shield, Users, Building, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WhyThisProject = () => {
  const sectionRef = useScrollAnimation();
  
  const usps = [
    {
      icon: <CheckCircle className="w-6 h-6 text-luxury-gold" />,
      title: "RERA Approved",
      description: "Project registered under RERA (AP-RERA-12345) ensuring transparency and timely delivery"
    },
    {
      icon: <Clock className="w-6 h-6 text-luxury-gold" />,
      title: "On-Time Delivery",
      description: "Track record of delivering 15+ projects on schedule with zero delays"
    },
    {
      icon: <Award className="w-6 h-6 text-luxury-gold" />,
      title: "Award-Winning Builder",
      description: "Recognized as 'Best Residential Developer' by Times Property Awards 2023"
    },
    {
      icon: <Shield className="w-6 h-6 text-luxury-gold" />,
      title: "Quality Assurance",
      description: "Premium branded fittings from Kohler, Hafele, and other international brands"
    },
    {
      icon: <Building className="w-6 h-6 text-luxury-gold" />,
      title: "25+ Years Experience",
      description: "Established builder with expertise in luxury residential developments"
    },
    {
      icon: <Users className="w-6 h-6 text-luxury-gold" />,
      title: "5000+ Happy Families",
      description: "Delivered premium homes to thousands of satisfied customers across Bangalore"
    }
  ];

  const awards = [
    "Best Residential Project 2023",
    "Excellence in Construction Quality",
    "Customer Satisfaction Award",
    "Green Building Initiative"
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-luxury-cream scroll-animate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-luxury-gold">This Project</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trust, quality, and excellence - the pillars of our commitment to you
          </p>
        </div>

        {/* RERA Badge */}
        <div className="text-center mb-12 scroll-animate-scale stagger-delay-1">
          <Card className="inline-block p-6 luxury-gradient text-white shadow-luxury transform transition-all duration-500 hover:scale-110">
            <Shield className="w-12 h-12 mx-auto mb-3 text-luxury-gold animate-pulse" />
            <h3 className="font-montserrat font-bold text-xl mb-2">RERA APPROVED</h3>
            <p className="text-white/90">Registration No: AP-RERA-12345</p>
            <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
              ✓ Verified & Trusted
            </Badge>
          </Card>
        </div>

        {/* USPs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {usps.map((usp, index) => (
            <Card 
              key={index}
              className={`p-6 shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 group scroll-animate-scale stagger-delay-${Math.min(index + 2, 6)}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-125">
                  {usp.icon}
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold mb-2 transition-colors duration-300 group-hover:text-luxury-gold">{usp.title}</h3>
                  <p className="text-sm text-muted-foreground">{usp.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Builder Trust Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Builder Info */}
          <Card className="p-8 shadow-luxury scroll-animate-left stagger-delay-1 transform transition-all duration-500 hover:scale-105">
            <div className="text-center mb-6">
              <Building className="w-16 h-16 text-luxury-gold mx-auto mb-4 transition-transform duration-300 hover:scale-125" />
              <h3 className="font-montserrat text-2xl font-bold mb-2">Premium Developers</h3>
              <p className="text-muted-foreground">Building dreams since 1998</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center group transition-all duration-300 hover:bg-luxury-gold/10 p-2 rounded">
                <span>Projects Completed</span>
                <span className="font-bold text-luxury-gold transition-transform duration-300 group-hover:scale-125">50+</span>
              </div>
              <div className="flex justify-between items-center group transition-all duration-300 hover:bg-luxury-gold/10 p-2 rounded">
                <span>Happy Families</span>
                <span className="font-bold text-luxury-gold transition-transform duration-300 group-hover:scale-125">5,000+</span>
              </div>
              <div className="flex justify-between items-center group transition-all duration-300 hover:bg-luxury-gold/10 p-2 rounded">
                <span>Sq.Ft Delivered</span>
                <span className="font-bold text-luxury-gold transition-transform duration-300 group-hover:scale-125">2.5M+</span>
              </div>
              <div className="flex justify-between items-center group transition-all duration-300 hover:bg-luxury-gold/10 p-2 rounded">
                <span>Years of Excellence</span>
                <span className="font-bold text-luxury-gold transition-transform duration-300 group-hover:scale-125">25+</span>
              </div>
            </div>
          </Card>

          {/* Awards & Recognition */}
          <Card className="p-8 shadow-card scroll-animate-right stagger-delay-2 transform transition-all duration-500 hover:shadow-luxury">
            <div className="text-center mb-6">
              <Award className="w-16 h-16 text-luxury-gold mx-auto mb-4 transition-transform duration-300 hover:rotate-12" />
              <h3 className="font-montserrat text-2xl font-bold mb-2">Awards & Recognition</h3>
              <p className="text-muted-foreground">Industry recognition for excellence</p>
            </div>

            <div className="space-y-3">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-luxury-cream rounded-lg transition-all duration-300 hover:bg-luxury-gold/20 hover:scale-105">
                  <Award className="w-5 h-5 text-luxury-gold flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                  <span className="text-sm font-medium">{award}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 luxury-gradient text-white rounded-lg text-center transform transition-all duration-300 hover:scale-105">
              <p className="font-montserrat font-semibold">Your Trust, Our Commitment</p>
              <p className="text-sm text-white/90 mt-1">Building quality homes with integrity since 1998</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyThisProject;