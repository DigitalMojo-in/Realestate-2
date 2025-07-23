
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Mail, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/DMMM.png"
              alt="Digital Mojo Logo"
              className="h-20 w-auto mx-auto"
            />
          </div>

          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto animate-bounce" />
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Thank You for Your Interest!
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            We've received your inquiry and our team will reach out to you within 24 hours 
            to discuss your real estate marketing strategy.
          </p>

          {/* What's Next */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              What's Next?
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">1.</span>
                <p className="text-gray-700 dark:text-gray-300">
                  Our performance marketing expert will call you within 24 hours
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">2.</span>
                <p className="text-gray-700 dark:text-gray-300">
                  We'll analyze your current marketing approach and identify growth opportunities
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">3.</span>
                <p className="text-gray-700 dark:text-gray-300">
                  Get a customized strategy to boost your real estate sales by 47%
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Phone className="h-5 w-5" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Mail className="h-5 w-5" />
              <span>hello@digitalmojo.in</span>
            </div>
          </div>

          {/* Back to Home Button */}
          <Button
            onClick={() => navigate('/')}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
