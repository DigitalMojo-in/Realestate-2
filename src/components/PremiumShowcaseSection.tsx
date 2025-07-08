import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Star, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';

interface PremiumShowcaseSectionProps {
  onLeadFormOpen: () => void;
}

const PremiumShowcaseSection = ({ onLeadFormOpen }: PremiumShowcaseSectionProps) => {
  const achievements = [
    {
      icon: Award,
      title: "Award Winning",
      subtitle: "Architecture",
      number: "15+",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "Happy Families",
      subtitle: "Living with us",
      number: "5000+",
      color: "text-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Years of Excellence",
      subtitle: "In Real Estate",
      number: "25+",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Premium Projects",
      subtitle: "Delivered",
      number: "50+",
      color: "text-purple-500"
    }
  ];

  const features = [
    "Parametric Architecture Design",
    "RERA Approved & Certified",
    "On-Time Delivery Guaranteed",
    "24/7 Customer Support",
    "Premium Location Advantage",
    "World-Class Amenities"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-luxury-navy via-luxury-charcoal to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-luxury-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-luxury-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 border-luxury-gold text-luxury-gold bg-luxury-gold/10">
            Premium Excellence
          </Badge>
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
            Experience <span className="text-luxury-gold">Unmatched Quality</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Bringing you India's finest residential experience with cutting-edge design,
            premium amenities, and a legacy of trust spanning over two decades.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-scale-in backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${achievement.color} bg-current/20`}>
                  <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <div className="text-3xl font-bold text-luxury-gold mb-1">{achievement.number}</div>
                <div className="text-white font-semibold">{achievement.title}</div>
                <div className="text-white/60 text-sm">{achievement.subtitle}</div>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h3 className="font-montserrat text-3xl font-bold mb-8 text-white">
              Why Choose Our <span className="text-luxury-gold">Premium Development</span>
            </h3>

            <div className="grid grid-cols-1 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-luxury-gold flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="xl"
                onClick={onLeadFormOpen}
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-charcoal font-semibold"
              >
                <Star className="w-5 h-5 mr-2" />
                Get Exclusive Pricing
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={onLeadFormOpen}
                className="border-white/30 text-white hover:bg-white/10"
              >
                Schedule Site Visit
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Showcase */}
          <div className="animate-slide-in-right">
            <Card className="p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-luxury-gold/20 rounded-full mb-4">
                  <Award className="w-10 h-10 text-luxury-gold" />
                </div>
                <h4 className="font-montserrat text-2xl font-bold text-white mb-2">
                  Premium Certification
                </h4>
                <p className="text-white/70">
                  RERA Registered & Government Approved
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-white">RERA Registration</span>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      Verified ✓
                    </Badge>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Quality Certification</span>
                    <Badge variant="outline" className="border-blue-400 text-blue-400">
                      ISO Certified
                    </Badge>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Safety Standards</span>
                    <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                      5-Star Rating
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumShowcaseSection;
