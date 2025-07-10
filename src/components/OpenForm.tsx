import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, User, Home } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface OpenFormProps {
  variant?: 'inline' | 'card';
}

const OpenForm = ({ variant = 'inline' }: OpenFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    configuration: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({
        title: "Please fill required fields",
        description: "Name and phone number are required",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send data to your backend
    toast({
      title: "Thank you for your interest!",
      description: "Our property consultant will contact you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', configuration: '' });
  };

  const FormContent = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-brand-muted" />
          <Input
            type="text"
            placeholder="Full Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="pl-10 border-brand-border focus:border-brand-primary focus:ring-brand-primary"
            required
          />
        </div>
        
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-brand-muted" />
          <Input
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="pl-10 border-brand-border focus:border-brand-primary focus:ring-brand-primary"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-brand-muted" />
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="pl-10 border-brand-border focus:border-brand-primary focus:ring-brand-primary"
          />
        </div>
        
        <div className="relative">
          <Home className="absolute left-3 top-3 h-4 w-4 text-brand-muted z-10" />
          <Select value={formData.configuration} onValueChange={(value) => setFormData({ ...formData, configuration: value })}>
            <SelectTrigger className="pl-10 border-brand-border focus:border-brand-primary">
              <SelectValue placeholder="Select Configuration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2bhk">2 BHK</SelectItem>
              <SelectItem value="3bhk">3 BHK</SelectItem>
              <SelectItem value="4bhk">4 BHK</SelectItem>
              <SelectItem value="any">Any Configuration</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Button
        type="submit"
        className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
      >
        Get Best Price & Floor Plans
      </Button>
      
      <p className="text-xs text-brand-muted text-center">
        By submitting this form, you agree to our Terms & Conditions and Privacy Policy
      </p>
    </form>
  );

  if (variant === 'card') {
    return (
      <Card className="w-full max-w-md mx-auto shadow-lg border-brand-border">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-bold text-brand-text">
            Get Instant Callback
          </CardTitle>
          <p className="text-sm text-brand-muted">
            Fill the form to get best prices & floor plans
          </p>
        </CardHeader>
        <CardContent>
          <FormContent />
        </CardContent>
      </Card>
    );
  }

  return (
    <section className="py-8 bg-gradient-to-r from-brand-primary/5 to-brand-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-2">
              Get Instant Callback
            </h2>
            <p className="text-brand-muted">
              Fill the form below to get best prices, floor plans & exclusive offers
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-brand-border p-6">
            <FormContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenForm;