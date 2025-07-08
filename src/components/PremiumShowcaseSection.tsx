import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Star, CheckCircle } from 'lucide-react';

interface PremiumShowcaseSectionProps {
  onLeadFormOpen: () => void;
}

const PremiumShowcaseSection = ({ onLeadFormOpen }: PremiumShowcaseSectionProps) => {
  const features = [
    "Parametric Architecture Design",
    "RERA Approved & Certified",
    "On-Time Delivery Guaranteed",
    "24/7 Customer Support",
    "Premium Location Advantage",
    "World-Class Amenities"
  ];

  return (
    <section  className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Feature List + CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our <span className="text-yellow-400">Premium Development</span>
            </h2>
            <ul className="space-y-4 text-lg font-light">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all px-6 py-3 rounded-lg shadow-md"
                onClick={onLeadFormOpen}
              >
                <Star className="w-5 h-5 mr-2" />
                Get Exclusive Pricing
              </Button>
              <input
                type="text"
                placeholder="Enter your name or number"
                className="px-4 py-3 rounded-lg bg-white text-black shadow-inner w-full sm:w-64"
              />
            </div>
          </div>

          {/* RIGHT: Certification Card */}
          <div className="flex justify-center">
            <Card className="p-8 bg-white rounded-3xl shadow-lg w-full max-w-sm">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-4">
                  <Award className="w-10 h-10 text-yellow-500" />
                </div>
                <h4 className="font-montserrat text-2xl font-bold text-gray-800 mb-2">
                  Premium Certification
                </h4>
                <p className="text-gray-600">
                  RERA Registered & Government Approved
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-green-100">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800">RERA Registration</span>
                    <Badge variant="outline" className="border-green-400 text-green-600">
                      Verified ✓
                    </Badge>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800">Quality Certification</span>
                    <Badge variant="outline" className="border-blue-400 text-blue-600">
                      ISO Certified
                    </Badge>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-yellow-100">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800">Safety Standards</span>
                    <Badge variant="outline" className="border-yellow-400 text-yellow-600">
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
