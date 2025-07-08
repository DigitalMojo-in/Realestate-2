import { Button } from "@/components/ui/button";
import { Play, Phone, Download } from 'lucide-react';

interface VideoBackgroundSectionProps {
  onLeadFormOpen: () => void;
}

const VideoBackgroundSection = ({ onLeadFormOpen }: VideoBackgroundSectionProps) => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster="/lovable-uploads/283fd918-b0a7-4c6d-a18c-a1ca081a5092.png"
        >
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="/lovable-uploads/283fd918-b0a7-4c6d-a18c-a1ca081a5092.png" 
            alt="Building exterior" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-sm border border-white/30 hover:scale-110 transition-all duration-300 cursor-pointer group">
              <Play className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          
          <h2 className="font-montserrat text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Experience the
            <br />
            <span className="text-luxury-gold">Architecture</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Watch our virtual walkthrough and see why this is the most desired address
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button 
              variant="cta" 
              size="xl"
              onClick={onLeadFormOpen}
              className="text-lg group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Schedule Site Visit
            </Button>
            <Button 
              variant="hero" 
              size="xl"
              onClick={onLeadFormOpen}
              className="text-lg group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Get Floor Plans
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoBackgroundSection;