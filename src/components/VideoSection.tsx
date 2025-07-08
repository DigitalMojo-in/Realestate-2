import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Video } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-16 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Experience the Property <span className="text-luxury-gold">Before You Visit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Take a virtual walkthrough of our premium apartments and world-class amenities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-luxury animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="relative aspect-video bg-gradient-to-br from-luxury-charcoal to-luxury-navy">
              {!isPlaying ? (
                // Video Thumbnail/Placeholder
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Video className="w-16 h-16 mx-auto mb-4 text-luxury-gold" />
                    <h3 className="font-montserrat text-xl font-semibold mb-2">Property Walkthrough</h3>
                    <p className="text-white/80 mb-6">3D virtual tour of sample flat & amenities</p>
                    <Button
                      variant="gold"
                      size="lg"
                      onClick={handlePlayClick}
                      className="rounded-full"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Play Video
                    </Button>
                  </div>
                </div>
              ) : (
                // Embedded Video (You can replace this with actual video embed)
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <div className="text-center text-white">
                    <Video className="w-12 h-12 mx-auto mb-4 text-luxury-gold" />
                    <p>Video would be embedded here</p>
                    <p className="text-sm text-white/60 mt-2">
                      (Replace with actual YouTube/Vimeo embed)
                    </p>
                  </div>
                </div>
              )}

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white text-sm font-medium">🎥 HD Quality</span>
              </div>
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white text-sm font-medium">⏱️ 5:30 mins</span>
              </div>
            </div>
          </Card>

          {/* Video Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: "🏠", title: "Sample Flat Tour", description: "Detailed view of furnished model apartment" },
              { icon: "🏊‍♂️", title: "Amenities Preview", description: "Clubhouse, pool, gym & recreational facilities" },
              { icon: "🌳", title: "Landscape Views", description: "Beautifully designed gardens & outdoor spaces" }
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-luxury transition-all duration-300">
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h4 className="font-montserrat font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;