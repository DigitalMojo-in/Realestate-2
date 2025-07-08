import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
            <div className="flex items-center justify-between">
              <DialogTitle className="font-montserrat text-xl">Get Instant Details</DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-6 w-6 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>
          <FormContent />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <section className="py-16 luxury-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-lg mx-auto p-8 shadow-luxury border-2 border-luxury-gold/20 card-gradient backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/20 rounded-full mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h2 className="font-montserrat text-3xl font-bold mb-3 text-luxury-charcoal">Get Instant Details</h2>
            <p className="text-muted-foreground text-lg">Fill the form below to get floor plans, pricing & exclusive offers</p>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mt-4 rounded-full"></div>
          </div>
          <FormContent />
        </Card>
      </div>
    </section>
  );
};

export default LeadForm;