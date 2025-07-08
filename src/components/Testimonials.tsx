import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote, Play } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh & Priya Sharma",
      location: "3 BHK Owner",
      rating: 5,
      text: "The quality of construction and attention to detail is exceptional. Our family absolutely loves the spacious layout and premium amenities. The location is perfect for our daily commute to Electronic City.",
      image: "👨‍👩‍👧‍👦"
    },
    {
      name: "Ankit Patel",
      location: "2 BHK Owner", 
      rating: 5,
      text: "As a first-time home buyer, the team guided us through every step. The possession was on time and the apartment exceeded our expectations. Highly recommend this project!",
      image: "👨‍💼"
    },
    {
      name: "Meera & Suresh Kumar",
      location: "3 BHK Owner",
      rating: 5,
      text: "The clubhouse facilities are world-class. Our kids love the play area and swimming pool. It truly feels like living in a resort. Great investment decision!",
      image: "👫"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Real Stories, <span className="text-luxury-gold">Real Families</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Hear what our happy residents have to say about their luxury living experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Video Testimonials */}
          <div className="animate-slide-in-right">
            <h3 className="font-montserrat text-xl font-semibold mb-6">Video Testimonials</h3>
            <Card className="overflow-hidden shadow-luxury">
              <div className="relative aspect-video bg-gradient-to-br from-luxury-charcoal to-luxury-navy">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-4">🎥</div>
                    <h4 className="font-montserrat font-semibold mb-2">Customer Stories</h4>
                    <p className="text-white/80 mb-4">Real families sharing their experience</p>
                    <Button variant="gold" size="lg">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Stories
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Video Thumbnails */}
            <div className="flex space-x-3 mt-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="w-24 h-16 bg-luxury-cream rounded-lg flex items-center justify-center cursor-pointer hover:shadow-card transition-all duration-300">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
              ))}
            </div>
          </div>

          {/* Text Testimonials Carousel */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h3 className="font-montserrat text-xl font-semibold mb-6">Customer Reviews</h3>
            
            <Card className="p-8 shadow-card min-h-[300px] relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-luxury-gold/20" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{testimonials[currentTestimonial].image}</div>
                  <div>
                    <h4 className="font-montserrat font-semibold">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" onClick={prevTestimonial}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextTestimonial}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-luxury-gold' : 'bg-luxury-silver'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;