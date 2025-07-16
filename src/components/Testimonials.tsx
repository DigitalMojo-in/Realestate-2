import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      designation: 'Software Engineer',
      location: 'Electronic City',
      rating: 5,
      text: 'The quality of construction and attention to detail is exceptional. The amenities are world-class and the location connectivity is perfect for my daily commute to Electronic City.',
      image: '/lovable-uploads/283fd918-b0a7-4c6d-a18c-a1ca081a5092.png',
      hasVideo: true,
      videoThumbnail: '/lovable-uploads/283fd918-b0a7-4c6d-a18c-a1ca081a5092.png'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      designation: 'Marketing Manager',
      location: 'Koramangala',
      rating: 5,
      text: 'Living here has been a dream come true. The clubhouse facilities are amazing and my kids love the play areas. The developer has delivered exactly what was promised.',
      image: '/lovable-uploads/283fd918-b0a7-4c6d-a18c-a1ca081a5092.png',
      hasVideo: false
    },
    {
      id: 3,
      name: 'Amit Patel',
      designation: 'Business Owner',
      location: 'Whitefield',
      rating: 5,
      text: 'The investment value has already appreciated significantly. The build quality and amenities justify every penny spent. Highly recommend for both end-users and investors.',
      image: '/lovable-uploads/283fd918-b0a7-4c6d-a18c-a1ca081a5092.png',
      hasVideo: true,
      videoThumbnail: '/lovable-uploads/283fd918-b0a7-4c6d-a18c-a1ca081a5092.png'
    }
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            What Our Residents Say
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            Real stories from real people who now call this place home
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Video/Image Section */}
            <div className="relative">
              {current.hasVideo ? (
                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src={current.videoThumbnail}
                    alt={`${current.name} testimonial`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm">Video Testimonial</span>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-lg flex items-center justify-center">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
              )}
            </div>

            {/* Testimonial Content */}
            <div className="space-y-6">
              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-brand-text leading-relaxed">
                "{current.text}"
              </blockquote>

              {/* Author Info */}
              <div className="space-y-1">
                <h4 className="text-xl font-semibold text-brand-text">{current.name}</h4>
                <p className="text-brand-muted">{current.designation}</p>
                <p className="text-sm text-brand-muted">Relocated from {current.location}</p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial
                          ? 'bg-brand-primary'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-brand-border hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors flex items-center justify-center"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-brand-border hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors flex items-center justify-center"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 p-6 bg-brand-surface rounded-lg">
            <h3 className="text-xl font-semibold text-brand-text mb-2">
              Join Our Happy Residents Community
            </h3>
            <p className="text-brand-muted mb-4">
              Schedule a visit and see why families choose us for their dream home
            </p>
            <Button variant="cta" size="lg" className="px-8">
              Book Your Site Visit Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;