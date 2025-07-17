import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LeadForm from '@/components/LeadForm';
import ProjectOverview from '@/components/ProjectOverview';
import ProjectHighlights from '@/components/ProjectHighlights';
import LocationAdvantage from '@/components/LocationAdvantage';
import Gallery from '@/components/Gallery';
import VideoSection from '@/components/VideoSection';
import PremiumShowcaseSection from '@/components/PremiumShowcaseSection';
import SpecificationsSection from '@/components/SpecificationsSection';
import Testimonials from '@/components/Testimonials';
import WhyThisProject from '@/components/WhyThisProject';
import StickyFAB from '@/components/StickyFAB';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const openLeadForm = () => setIsLeadFormOpen(true);
  const closeLeadForm = () => setIsLeadFormOpen(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Premium Header */}
      <Header onLeadFormOpen={openLeadForm} />
      
      {/* Hero Section with Image Slider */}
      <HeroSection onLeadFormOpen={openLeadForm} />
      
      {/* Instant Lead Form - Above the fold */}
      <LeadForm variant="inline" />
      
      {/* Project Overview - Like the reference */}
      <ProjectOverview onLeadFormOpen={openLeadForm} />
      
      {/* Project Highlights Grid */}
      <ProjectHighlights />
      
      {/* Location Advantage with Map */}
      <LocationAdvantage />
      
      {/* Gallery & Floor Plans */}
      <Gallery onLeadFormOpen={openLeadForm} />
      
      {/* Specifications Section */}
      <SpecificationsSection />
      
      {/* Premium Showcase Section */}
      <PremiumShowcaseSection onLeadFormOpen={openLeadForm} />
      
      {/* Video Walkthrough */}
      <VideoSection />
      
      {/* Customer Testimonials */}
      <Testimonials />
      
      {/* Why This Project / Builder Trust */}
      <WhyThisProject />
      
      {/* Footer with Contact Info */}
      <Footer onLeadFormOpen={openLeadForm} />
      
      {/* Sticky Floating CTAs */}
      <StickyFAB onLeadFormOpen={openLeadForm} />
      
      {/* Lead Form Modal */}
      <LeadForm 
        variant="modal" 
        isOpen={isLeadFormOpen} 
        onClose={closeLeadForm} 
      />
    </div>
  );
};

export default Index;
