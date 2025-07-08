import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { X } from 'lucide-react';

interface LeadFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  variant?: 'inline' | 'modal';
}

const LeadForm = ({ isOpen, onClose, variant = 'inline' }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    bhkPreference: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for your interest!",
      description: "Our team will contact you within 24 hours. Check your email for the brochure download link.",
    });
    
    setFormData({ name: '', mobile: '', bhkPreference: '' });
    setIsSubmitting(false);
    
    if (onClose) {
      onClose();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const FormContent = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
            className="mt-1 h-12 border-luxury-silver focus:border-luxury-gold focus:ring-luxury-gold"
          />
        </div>
        
        <div>
          <Label htmlFor="mobile" className="text-sm font-medium">Mobile Number *</Label>
          <Input
            id="mobile"
            type="tel"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={(e) => handleInputChange('mobile', e.target.value)}
            required
            className="mt-1 h-12 border-luxury-silver focus:border-luxury-gold focus:ring-luxury-gold"
          />
        </div>
        
        <div>
          <Label htmlFor="bhk" className="text-sm font-medium">BHK Preference</Label>
          <Select onValueChange={(value) => handleInputChange('bhkPreference', value)}>
            <SelectTrigger className="mt-1 h-12 border-luxury-silver focus:border-luxury-gold focus:ring-luxury-gold">
              <SelectValue placeholder="Select your preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2bhk">2 BHK</SelectItem>
              <SelectItem value="3bhk">3 BHK</SelectItem>
              <SelectItem value="both">Both 2 & 3 BHK</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-4">
          🔒 100% Privacy. No spam.
        </p>
        <Button 
          type="submit" 
          variant="cta" 
          size="xl"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Get Instant Call Back'}
        </Button>
      </div>
    </form>
  );

  if (variant === 'modal') {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-montserrat text-xl">Get Instant Details</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Fill the form below to receive floor plans, pricing details, and exclusive offers for this luxury project.
            </DialogDescription>
          </DialogHeader>
          <FormContent />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-luxury-cream to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-lg mx-auto p-8 shadow-luxury border-2 border-luxury-gold/30 bg-white/95 backdrop-blur-md hover:shadow-accent transition-all duration-500 animate-scale-in">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/30 rounded-full mb-4 shadow-accent">
              <span className="text-2xl">📋</span>
            </div>
            <h2 className="font-montserrat text-3xl font-bold mb-3 text-luxury-charcoal">Get Instant Details</h2>
            <p className="text-muted-foreground text-lg">Fill the form below to get floor plans, pricing & exclusive offers</p>
            <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold/60 to-luxury-gold mx-auto mt-4 rounded-full"></div>
          </div>
          <FormContent />
        </Card>
      </div>
    </section>
  );
};

export default LeadForm;