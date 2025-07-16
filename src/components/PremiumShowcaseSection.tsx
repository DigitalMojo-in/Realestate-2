import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Download, Calendar } from 'lucide-react';

interface PremiumShowcaseSectionProps {
  onLeadFormOpen: () => void;
}

const PremiumShowcaseSection = ({ onLeadFormOpen }: PremiumShowcaseSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Premium Floor Plans Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Exclusive Preview
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Master Plan & Floor Plans
            </h2>
            <p className="text-lg text-brand-muted">
              Get access to detailed architectural plans and layout designs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Master Plan */}
            <div className="relative">
              <div className="aspect-square bg-white rounded-lg border border-brand-border overflow-hidden">
                <div className="relative h-full">
                  {/* Blurred Background */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 filter blur-sm"
                    style={{
                      backgroundImage: "url('/lovable-uploads/283fd918-b0a7-4c6d-a18c-a1ca081a5092.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <Eye className="w-12 h-12 text-brand-primary mb-4" />
                    <h3 className="text-xl font-semibold text-brand-text mb-2">Master Plan</h3>
                    <p className="text-brand-muted mb-4">Complete project layout with amenities mapping</p>
                    <Badge variant="outline" className="mb-4">Unlock on Form Submission</Badge>
                    <Button onClick={onLeadFormOpen} variant="cta" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Master Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floor Plans */}
            <div className="space-y-4">
              {['2 BHK Floor Plan', '3 BHK Floor Plan', '4 BHK Penthouse'].map((title, index) => (
                <div key={index} className="relative">
                  <div className="aspect-[4/3] bg-white rounded-lg border border-brand-border overflow-hidden">
                    <div className="relative h-full">
                      {/* Blurred Background */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 filter blur-sm"
                        style={{
                          backgroundImage: "url('/lovable-uploads/283fd918-b0a7-4c6d-a18c-a1ca081a5092.png')",
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        <h4 className="font-semibold text-brand-text mb-1">{title}</h4>
                        <p className="text-sm text-brand-muted mb-3">High-resolution architectural drawing</p>
                        <Button onClick={onLeadFormOpen} variant="outline" size="sm">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-white rounded-lg p-6 border border-brand-border">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-brand-text mb-3">
                Get Instant Access to Complete Plans
              </h3>
              <p className="text-brand-muted mb-4">
                Submit your details to unlock high-resolution master plan, floor plans, and exclusive pricing information
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={onLeadFormOpen} variant="cta" size="lg" className="px-8">
                  <Download className="w-4 h-4 mr-2" />
                  Download All Plans
                </Button>
                <Button onClick={onLeadFormOpen} variant="outline" size="lg" className="px-8">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Site Visit
                </Button>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-brand-muted">
              * Plans shown are artistic representations and may vary from actual construction. 
              All dimensions and specifications are subject to change without notice. 
              Please refer to final architectural drawings for exact specifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumShowcaseSection;