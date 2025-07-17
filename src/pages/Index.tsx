import { useState } from 'react';
import Header from '@/components/Header';
import SlidingBanner from '@/components/SlidingBanner';
import ImportantInfoBar from '@/components/ImportantInfoBar';
import OpenForm from '@/components/OpenForm';
import USPSection from '@/components/USPSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import StickyBottomCTA from '@/components/StickyBottomCTA';
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
      {/* Premium Header with sticky navigation */}
      <Header onLeadFormOpen={openLeadForm} />
      
      {/* Above-the-Fold Section */}
      {/* Sliding Banner with landscape creatives */}
      <SlidingBanner onCTAClick={openLeadForm} />
      
      {/* Important Info Bar - Sticky below header */}
      <ImportantInfoBar onCTAClick={openLeadForm} />
      
      {/* Open Form - Visible without scroll */}
      <OpenForm variant="inline" />
      
      {/* Core Content Blocks */}
      {/* Project Overview with inline blocks */}
      <ProjectOverview onLeadFormOpen={openLeadForm} />
      
      {/* USP Section - Bullet list of advantages */}
      <USPSection onCTAClick={openLeadForm} />
      
      {/* Amenities split by type */}
      <AmenitiesSection onCTAClick={openLeadForm} />
      
      {/* Project Highlights Grid */}
      <ProjectHighlights />
      
      {/* Specifications in accordions */}
      <SpecificationsSection />
      
      {/* Walk-through & Influencer Videos */}
      <VideoSection />
      
      {/* Testimonials - Video + text slider */}
      <Testimonials />
      
      {/* Gallery - Hi-res images carousel */}
      <Gallery onLeadFormOpen={openLeadForm} />
      
      {/* Location Proximity - Key landmarks */}
      <LocationAdvantage />
      
      {/* Premium Showcase Section */}
      <PremiumShowcaseSection onLeadFormOpen={openLeadForm} />
      
      {/* About the Developer - Brief profile */}
      <WhyThisProject />
      
      {/* Footer with Contact Info & Compliance */}
      <Footer onLeadFormOpen={openLeadForm} />
      
      {/* Conversion Devices & Sticky Elements */}
      {/* Desktop Sticky FAB */}
      <StickyFAB onLeadFormOpen={openLeadForm} />
      
      {/* Mobile Bottom Sticky Bar */}
      <StickyBottomCTA onLeadFormOpen={openLeadForm} />
      
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
