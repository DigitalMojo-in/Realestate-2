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
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eed80b2a001d5a46bb71a22d2b949516f1b74&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4" type="video/mp4" />
          {/* Fallback for modern architecture */}
          <div className="w-full h-full bg-gradient-to-br from-luxury-navy via-luxury-charcoal to-black"></div>
        </video>
      </div>

      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-luxury-gold/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-luxury-gold/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8 backdrop-blur-sm border-2 border-white/20 hover:scale-110 transition-all duration-500 cursor-pointer group shadow-luxury">
              <Play className="w-10 h-10 text-white group-hover:scale-125 transition-transform duration-500 ml-1" />
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