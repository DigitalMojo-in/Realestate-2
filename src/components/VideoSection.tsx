import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const VideoSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      id: 1,
      title: '3D Walkthrough',
      description: 'Take a virtual tour of your future home',
      thumbnail: '/lovable-uploads/283fd918-b0a7-4c6d-a18c-a1ca081a5092.png',
      duration: '2:30',
      type: 'walkthrough'
    },
    {
      id: 2,
      title: 'Project Overview',
      description: 'Explore the complete project amenities',
      thumbnail: '/lovable-uploads/283fd918-b0a7-4c6d-a18c-a1ca081a5092.png',
      duration: '1:45',
      type: 'overview'
    },
    {
      id: 3,
      title: 'Influencer Review',
      description: 'See what lifestyle influencers say about us',
      thumbnail: '/lovable-uploads/283fd918-b0a7-4c6d-a18c-a1ca081a5092.png',
      duration: '0:58',
      type: 'influencer'
    }
  ];

  const nextVideo = () => setCurrentVideo((prev) => (prev + 1) % videos.length);
  const prevVideo = () => setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Experience Before You Invest
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            Watch our 3D walkthroughs and influencer reviews to get a real feel of the project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Video Player */}
          <div className="relative mb-8">
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group">
              <img
                src={videos[currentVideo].thumbnail}
                alt={videos[currentVideo].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="lg"
                  className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50"
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </Button>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {videos[currentVideo].title}
                </h3>
                <p className="text-white/80 text-sm mb-2">
                  {videos[currentVideo].description}
                </p>
                <span className="text-white/60 text-xs">
                  Duration: {videos[currentVideo].duration}
                </span>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevVideo}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextVideo}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Video Selector Thumbnails */}
            <div className="flex justify-center space-x-4 mt-6">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => setCurrentVideo(index)}
                  className={`relative group ${
                    currentVideo === index ? 'ring-2 ring-brand-primary' : ''
                  }`}
                >
                  <div className="w-24 h-16 rounded-lg overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 ${
                      currentVideo === index 
                        ? 'bg-brand-primary/20' 
                        : 'bg-black/30 group-hover:bg-black/20'
                    } transition-colors`} />
                  </div>
                  <span className="absolute bottom-1 right-1 text-xs text-white bg-black/60 px-1 rounded">
                    {video.duration}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-brand-muted mb-4">
              Want to schedule a live virtual tour with our property expert?
            </p>
            <Button variant="cta" size="lg" className="px-8">
              Book Live Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;