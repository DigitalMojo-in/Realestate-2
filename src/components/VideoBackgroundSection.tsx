import { Button } from "@/components/ui/button";

interface WhyChooseSectionProps {
  onLeadFormOpen: () => void;
}

const WhyChooseSection = ({ onLeadFormOpen }: WhyChooseSectionProps) => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Bullet List */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Our <span className="text-yellow-400">Premium Development</span>
          </h2>
          <ul className="space-y-4 text-lg font-light">
            {[ 
              "Parametric Architecture Design",
              "RERA Approved & Certified",
              "On-Time Delivery Guaranteed",
              "24/7 Customer Support",
              "Premium Location Advantage",
              "World-Class Amenities",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Zone */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              variant="default"
              className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all px-6 py-3 rounded-lg shadow-md"
              onClick={onLeadFormOpen}
            >
              ⭐ Get Exclusive Pricing
            </Button>
            <input
              type="text"
              placeholder="Enter your name or number"
              className="px-4 py-3 rounded-lg bg-white text-black shadow-inner w-full sm:w-64"
            />
          </div>
        </div>

        {/* Right: Badge Stack */}
        <div className="bg-white rounded-3xl p-6 flex flex-col items-center gap-6 shadow-lg">
          <div className="bg-yellow-100 p-4 rounded-full">
            <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15 8.5L22 9.3L17 14.2L18.2 21.2L12 18L5.8 21.2L7 14.2L2 9.3L9 8.5L12 2Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <span className="px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">✔ Verified</span>
            <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">ISO Certified</span>
            <span className="px-4 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium">⭐ 5-Star Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
