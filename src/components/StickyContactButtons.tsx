
import { Phone, MessageCircle } from 'lucide-react';

export const StickyContactButtons = () => {
  const handlePhoneCall = () => {
    window.open('tel:+919908398763', '_self');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi, I am interested in your real estate marketing services. Please provide more details.');
    window.open(`https://wa.me/919908398763?text=${message}`, '_blank');
  };

  return (
    <div className="fixed left-4 bottom-20 md:bottom-4 z-40 flex flex-col gap-3">
      {/* Phone Button */}
      <button
        onClick={handlePhoneCall}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        title="Call us"
      >
        <Phone className="h-6 w-6" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};
