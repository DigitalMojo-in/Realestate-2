import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  monthlyInvestment: string;
  requirements: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  subject?: string;
  monthlyInvestment?: string;
}

export const LeadForm = ({ isOpen, onClose }: LeadFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    monthlyInvestment: '',
    requirements: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, monthlyInvestment: value }));
    
    // Clear error when user selects
    if (errors.monthlyInvestment) {
      setErrors(prev => ({
        ...prev,
        monthlyInvestment: undefined
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
    
    if (!formData.company.trim()) newErrors.company = "Company is required";
    
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.monthlyInvestment) newErrors.monthlyInvestment = "Monthly investment range is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors below and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Same Google Sheets integration as FooterForm
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzkTb1YHjCqnWQDKgQFc6S9DiSCGBdhXG1FtSfV2-vKpbfDKfw8k2mi_w2oaea51KOE/exec';
      
      const submitData = {
        timestamp: new Date().toISOString(),
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        monthlyInvestment: formData.monthlyInvestment,
        requirements: formData.requirements,
        source: 'Digital Mojo Performance Landing Page - Lead Form Popup'
      };

      // Submit to Google Sheets
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submitData)
        });
      } catch (error) {
        console.log('Google Sheets submission error (expected with no-cors):', error);
      }

      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        monthlyInvestment: '',
        requirements: ''
      });
      setErrors({});

      onClose();
      
      // Redirect to thank you page
      navigate('/thankyou');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an issue submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-w-[95vw] max-h-[90vh] overflow-y-auto mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Get Your Free Strategy Call
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Row - Name, Company, Email */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-sm font-medium">
                Name*
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className={`h-9 text-sm bg-white border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-primary`}
                required
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="company" className="text-sm font-medium">
                Company*
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company name"
                className={`h-9 text-sm bg-white border ${errors.company ? 'border-red-500' : 'border-gray-300'} focus:border-primary`}
                required
              />
              {errors.company && (
                <p className="text-xs text-red-500">{errors.company}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="email" className="text-sm font-medium">
                Email*
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                className={`h-9 text-sm bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-primary`}
                required
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Second Row - Phone, Subject, Monthly Investment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone*
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone number"
                className={`h-9 text-sm bg-white border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-primary`}
                required
              />
              {errors.phone && (
                <p className="text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="subject" className="text-sm font-medium">
                Subject*
              </Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className={`h-9 text-sm bg-white border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:border-primary`}
                required
              />
              {errors.subject && (
                <p className="text-xs text-red-500">{errors.subject}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="monthlyInvestment" className="text-sm font-medium">
                Monthly Marketing Investment*
              </Label>
              <Select onValueChange={handleSelectChange} value={formData.monthlyInvestment}>
                <SelectTrigger className={`h-9 text-sm bg-white border ${errors.monthlyInvestment ? 'border-red-500' : 'border-gray-300'} focus:border-primary`}>
                  <SelectValue placeholder="1Lac - 5Lac" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-300">
                  <SelectItem value="1lac-5lac">1Lac - 5Lac</SelectItem>
                  <SelectItem value="5lac-10lac">5Lac - 10Lac</SelectItem>
                  <SelectItem value="10lac-25lac">10Lac - 25Lac</SelectItem>
                  <SelectItem value="25lac-50lac">25Lac - 50Lac</SelectItem>
                  <SelectItem value="50lac+">50Lac+</SelectItem>
                </SelectContent>
              </Select>
              {errors.monthlyInvestment && (
                <p className="text-xs text-red-500">{errors.monthlyInvestment}</p>
              )}
            </div>
          </div>

          {/* Third Row - Requirements spanning full width */}
          <div className="space-y-1">
            <Label htmlFor="requirements" className="text-sm font-medium">
              Requirements / Comments
            </Label>
            <Textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              placeholder="Brief project details"
              rows={4}
              className="text-sm bg-white border-gray-300 focus:border-primary resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-8 rounded-md transition-colors text-sm"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Enquire Now'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
