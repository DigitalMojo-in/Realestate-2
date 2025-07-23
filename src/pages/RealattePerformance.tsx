import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ScrollingGallery } from '@/components/ScrollingGallery';
import { RotatedBackgroundGallery } from '@/components/RotatedBackgroundGallery';
import { LeadForm } from '@/components/LeadForm';
import { FooterForm } from '@/components/FooterForm';
import { StickyContactButtons } from '@/components/StickyContactButtons';
import { 
  Target,
  Menu, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer, 
  BarChart3,
  ArrowRight,
  ArrowLeft,
  Play,
  CheckCircle,
  Zap,
  Globe,
  Binoculars,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  X,
  Phone,
  AlertTriangle,
  TrendingUp as TrendingUpIcon,
  Shield,
  Repeat
} from 'lucide-react';

// Import images - Change these paths to update gallery photos
import dashboardDemo from '@/assets/dashboard-demo.jpg'; // Change this path to update dashboard image
import landingBg from '@/assets/landing-bg.jpg'; // Change this path to update landing background
import gallery1 from '@/assets/gallery-1.jpeg'; // Change this path to update gallery image 1
import gallery2 from '@/assets/gallery-2.jpeg'; // Change this path to update gallery image 2
import gallery3 from '@/assets/gallery-3.jpeg'; // Change this path to update gallery image 3
import gallery4 from '@/assets/gallery-4.jpeg'; // Change this path to update gallery image 4
import gallery5 from '@/assets/gallery-5.jpeg'; // Change this path to update gallery image 5
import gallery6 from '@/assets/gallery-6.jpeg'; // Change this path to update gallery image 6
import gallery7 from '@/assets/gallery-7.jpeg'; // Change this path to update gallery image 6
import gallery8 from '@/assets/gallery-8.jpeg'; // Change this path to update gallery image 6
import gallery9 from '@/assets/gallery-9.jpeg'; // Change this path to update gallery image 6
import gallery10 from '@/assets/gallery-10.jpeg'; // Change this path to update gallery image 6
import gallery11 from '@/assets/gallery-11.jpeg'; // Change this path to update gallery image 6
import gallery12 from '@/assets/gallery-12.jpeg'; // Change this path to update gallery image 6
import gallery13 from '@/assets/gallery-13.jpeg'; // Change this path to update gallery image 6
import { CaseStudyCarousel } from '@/components/CaseStudyCarousel';
import { relative } from 'path';

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,gallery7,gallery8,gallery9,gallery10,gallery11,gallery12,gallery13 ];

// Landing page background images - Change these paths to update landing page background photos
const landingPageImages = [
  '/lp1.png', // Change this path to update landing page background image 1
  '/lp2.png', // Change this path to update landing page background image 2
  '/lp3.png', // Change this path to update landing page background image 2
  '/lp4.png', // Change this path to update landing page background image 2
  '/lp5.png', // Change this path to update landing page background image 2
  '/lp6.png', // Change this path to update landing page background image 2
  '/lp7.png', // Change this path to update landing page background image 2
];

export default function RealattePerformance() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [zigzagCurrentIndex, setZigzagCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideStickyCTA, setHideStickyCTA] = useState(false);
  const [showPopupForm, setShowPopupForm] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const footer = document.querySelector('#footer');
        if (footer && window.innerWidth < 768) {
          const footerRect = footer.getBoundingClientRect();
          const isFooterVisible = footerRect.top < window.innerHeight + 100;
          setHideStickyCTA(isFooterVisible);
        } else {
          setHideStickyCTA(false);
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show popup form only once on page load
  useEffect(() => {
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowPopupForm(true);
        setHasShownPopup(true);
      }, 2000); // Show after 2 seconds
      
      return () => clearTimeout(timer);
    }
  }, [hasShownPopup]);

  const zigzagCards = [
    {
      icon: BarChart3,
      title: "Performance Marketing",
      description: "From lead generation to final conversion, we deploy ROI-focused strategies that maximize every rupee spent on digital advertising.",
      color: "text-brand-blue",
      image: gallery1
    },
    {
      icon: Zap,
      title: "Campaign Optimization",
      description: "Real-time campaign adjustments powered by AI and machine learning to ensure peak performance across all platforms.",
      color: "text-brand-green",
      image: gallery2
    },
    {
      icon: Globe,
      title: "Multi-Platform Strategy",
      description: "Comprehensive campaigns across Google, Meta, LinkedIn, YouTube, and programmatic platforms for maximum reach and impact.",
      color: "text-brand-purple",
      image: gallery3
    }
  ];

  const handleZigzagPrev = () => {
    setZigzagCurrentIndex((prev) => (prev === 0 ? zigzagCards.length - 1 : prev - 1));
  };

  const handleZigzagNext = () => {
    setZigzagCurrentIndex((prev) => (prev === zigzagCards.length - 1 ? 0 : prev + 1));
  };

  const navItems = [
    { name: 'Performance', href: '#performance' },
    { name: 'Metrics', href: '#metrics' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Case Studies', href: '#case-studies' },
  ];

  const scrollToFooterForm = () => {
    const form = document.getElementById('footer-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div  className="overflow-hidden min-h-screen bg-background text-foreground overflow-x-hidden font-spartan">
      {/* Add Sticky Contact Buttons */}
      <StickyContactButtons />

      {/* Dark Mode Toggle - Desktop */}
      <div className="hidden sm:block fixed left-4 top-80 z-50 bg-background/80 backdrop-blur-lg rounded-full p-0.5 shadow-md border border-border">
        <div
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`w-8 h-14 flex flex-col items-center justify-between px-0.5 py-1 rounded-full cursor-pointer transition-colors duration-300 ${
            isDarkMode ? 'bg-yellow-400' : 'bg-gray-800'
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform duration-300 flex items-center justify-center ${
              isDarkMode ? 'translate-y-6 rotate-180' : 'translate-y-0 rotate-0'
            }`}
          >
            {isDarkMode ? (
              <Moon className="h-3 w-3 text-yellow-600" />
            ) : (
              <Sun className="h-3 w-3 text-orange-500" />
            )}
          </div>
        </div>
      </div>

      <div className="hidden sm:block fixed -right-20 top-80 z-50">
      <Button
          onClick={scrollToFooterForm}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 shadow-2xl transition-all duration-300 font-spartan transform -rotate-90 origin-center whitespace-nowrap"
          style={{
            fontSize: '20px',
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '0px',
            minWidth: '180px',
            height: '60px',
            marginRight: '0px'
          }}
        >
          FREE Strategy Call
        </Button>
</div>

{/* Mobile Sticky CTA */}
<div
  id="main-header"
  className={`md:hidden fixed bottom-4 right-4 z-50 transition-all duration-300 ${
    hideStickyCTA ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100'
  }`}
>
  <Button
    onClick={scrollToFooterForm}
    className="bg-red-600 hover:bg-red-700 text-white rounded-full px-5 py-3 shadow-2xl font-spartan font-bold"
  >
    <Phone className="mr-2 h-4 w-4" />
    FREE Strategy Call
  </Button>
</div>
<button
  onClick={() => setIsDarkMode(!isDarkMode)}
  className="sm:hidden fixed bottom-4 left-4 z-50 p-3 bg-background border border-border shadow-md rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-accent"
>
  {isDarkMode ? (
    <Sun className="w-5 h-5 text-foreground" />
  ) : (
    <Moon className="w-5 h-5 text-foreground" />
  )}
</button>

      {/* Improved Header */}
      <header id="main-header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/95 dark:bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/20' 
          : 'bg-background/80 dark:bg-background/80 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center group">
                <img
                  src={isDarkMode ? "/DMM.png" : "/DMMM.png"}
                  alt="Digital Mojo Logo"
                  className={`object-contain group-hover:scale-110 transition-all duration-300 ${
                    scrolled ? (isDarkMode?'h-8 w-auto sm:h-10 sm:w-auto':'h-24 w-auto sm:h-28 sm:w-auto') : (isDarkMode?'h-10 w-auto sm:h-14 sm:w-auto':'h-28 w-auto sm:h-40 sm:w-auto')
                  }`}
                />
              </a>
            </div>

            {/* Desktop Navigation - Improved */}
            <nav className="hidden md:flex items-center justify-center flex-1 ml-12">
              <div className="flex items-center space-x-12">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative text-lg font-semibold text-foreground/90 hover:text-foreground transition-colors duration-300 group"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                ))}
              </div>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex items-center">
              <Button 
                onClick={scrollToFooterForm}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Strategy Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md hover:bg-muted/50 transition-colors duration-200"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-foreground" />
                ) : (
                  <Menu className="h-5 w-5 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-xl">
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-md transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 py-2">
                  <Button 
                    onClick={scrollToFooterForm}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3"
                  >
                    Get Free Strategy Call
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-red-50/20 dark:to-red-950/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Enhanced Heading and CTA */}
            <div className="space-y-8 lg:space-y-10">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground">
                  <span className="block mb-2">Boost Your</span>
                  <span className="block mb-2">Real Estate Sales</span>
                  <span className="block mb-4">
                    by <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-2xl inline-block transform -rotate-2 shadow-xl">47%</span>
                  </span>
                  {/* <span className="block text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    with Proven Marketing Strategies
                  </span> */}
                  <br/>
                </h1>
                
                <p className="text-2xl sm:text-3xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
                Spending Crores on Projects, But Struggling with Bookings?
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  onClick={scrollToFooterForm}
                  className="text-xl px-10 py-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <Target className="mr-3 h-6 w-6" />
                  Boost Your Realstate by 47%
                </Button>
              </div>

              {/* Enhanced Stats Preview */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-2">
                    <AnimatedCounter end={100} duration={2000} />+
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-semibold">Clients Scaled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-2">
                    <AnimatedCounter end={5} duration={2200} />X
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-semibold">Lead Conversion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-2">
                    <AnimatedCounter end={17}  duration={2400} />+
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-semibold">Integrated Marketing Channels</div>
                </div>
              </div>
            </div>

            {/* Right Side - Banner Image */}
            <div className="text-center lg:text-right">
              <img 
                src="/banner.jpeg"
                alt="Digital Marketing Performance"
                className="w-full max-w-2xl mx-auto lg:ml-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Data Table Section - White Background */}
      
      <section id="performance" className="py-6 sm:py-12 px-4 sm:px-6 relative bg-white dark:bg-gray-900">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-orange/10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 animate-slide-up text-gray-900 dark:text-gray-100 slide-in-left">
            Delivering ROI that'll give your competitors chills.
          </h2>
          
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-2xl p-3 sm:p-4 max-w-full mx-auto animate-slide-up slide-in-up" style={{animationDelay: '0.3s'}}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base md:text-lg min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-3 font-bold">Platform</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-3 font-bold">Clicks</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-3 font-bold">Impressions</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-3 font-bold">CTR</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-3 font-bold">Conversions</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-3 font-bold">Spend (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 sm:py-3 px-2 sm:px-3 font-semibold">Google Ads</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={156789543} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={12456789123} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={1.26} decimals={2} suffix="%" /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={3245678} decimals={2} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={2876543210} prefix="₹" /></td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 sm:py-3 px-2 sm:px-3 font-semibold">Meta Platforms</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={98765432} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={8765432198} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={1.13} decimals={2} suffix="%" /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={2134567} decimals={2} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={1987654321} prefix="₹" /></td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 sm:py-3 px-2 sm:px-3 font-semibold">LinkedIn</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={45678901} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={3456789012} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={1.32} decimals={2} suffix="%" /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={987654} decimals={2} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={876543210} prefix="₹" /></td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 sm:py-3 px-2 sm:px-3 font-semibold">YouTube</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={123456789} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={9876543210} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={1.25} decimals={2} suffix="%" /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={1567890} decimals={2} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={1234567890} prefix="₹" /></td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 sm:py-3 px-2 sm:px-3 font-semibold">Programmatic</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={67890123} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={5432109876} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={1.25} decimals={2} suffix="%" /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={876543} decimals={2} /></td>
                    <td className="py-2 sm:py-3 px-2 sm:px-3"><AnimatedCounter end={654321098} prefix="₹" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-900 dark:bg-gray-700 text-white rounded-lg">
              <div className="text-center">
                <div className="text-sm sm:text-base uppercase tracking-wider text-gray-400 mb-1">Total Investment</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                  <AnimatedCounter end={7620764963} prefix="₹" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics + Live Dashboard Section - Yellow Background */}
      <section id="metrics" className="py-6 sm:py-12 px-4 sm:px-6 relative bg-[#f0bc00] dark:bg-[#f0bc00]/20">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        ></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-slide-up text-gray-900 dark:text-gray-100 slide-in-right">
              Digital Mojo by the <span className="gradient-text">Metrics</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto animate-slide-up slide-in-up font-medium" style={{animationDelay: '0.2s'}}>
            At Digital Mojo, we don't do "general marketing." We do Real Estate Growth Engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <Card className="text-center p-4 sm:p-6 card-hover animate-slide-up slide-in-left bg-white dark:bg-gray-800">
              <CardContent className="pt-3 sm:pt-4">
                <MousePointer className="mx-auto mb-3 sm:mb-4 h-10 w-10 sm:h-12 w-12 text-brand-blue animate-float" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-gray-100">
                  <AnimatedCounter end={415363674} duration={3000} />
                </div>
                <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">Total Clicks</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-4 sm:p-6 card-hover animate-slide-up slide-in-up bg-white dark:bg-gray-800" style={{animationDelay: '0.2s'}}>
              <CardContent className="pt-3 sm:pt-4">
                <Eye className="mx-auto mb-3 sm:mb-4 h-10 w-10 sm:h-12 w-12 text-brand-green animate-float" style={{animationDelay: '1s'}} />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-gray-100">
                  <AnimatedCounter end={39589557928} duration={3500} />
                </div>
                <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">Total Impressions</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-4 sm:p-6 card-hover animate-slide-up slide-in-right bg-white dark:bg-gray-800" style={{animationDelay: '0.4s'}}>
              <CardContent className="pt-3 sm:pt-4">
                <TrendingUp className="mx-auto mb-3 sm:mb-4 h-10 w-10 sm:h-12 w-12 text-brand-orange animate-float" style={{animationDelay: '2s'}} />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-gray-100">
                  <AnimatedCounter end={8630060.39} decimals={2} duration={4000} />
                </div>
                <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">Total Conversions</div>
              </CardContent>
            </Card>
          </div>

          {/* Live Performance Dashboard Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center max-w-6xl mx-auto">
            <div className="space-y-4 sm:space-y-6 animate-slide-up slide-in-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Your Pain Points. Our Growth Plan.
              </h2>
              <div className="space-y-6">
  <div className="flex items-start space-x-3">
    <span className="text-red-600 text-xl">🔻</span>
    <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg font-medium leading-relaxed">
      <strong>Random Inquiries, Low Conversions?</strong><br />
      → We run targeted campaigns that bring serious buyers, not time-wasters.
    </p>
  </div>
  <div className="flex items-start space-x-3">
    <span className="text-red-600 text-xl">🔻</span>
    <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg font-medium leading-relaxed">
      <strong>Relying on Just Channel Partners?</strong><br />
      → Build your own independent digital funnel. Own your leads. Control your brand.
    </p>
  </div>
  <div className="flex items-start space-x-3">
    <span className="text-red-600 text-xl">🔻</span>
    <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg font-medium leading-relaxed">
      <strong>Low Trust in Your Brand?</strong><br />
      → We craft a brand presence that sells trust before you sell flats.
    </p>
  </div>
  <div className="flex items-start space-x-3">
    <span className="text-red-600 text-xl">🔻</span>
    <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg font-medium leading-relaxed">
      <strong>Leads Drop After Launch Phase?</strong><br />
      → Our always-on model keeps your bookings strong, not seasonal.
    </p>
  </div>
</div>

              <div className="text-center mt-12">
                <Button  
                  size="lg" 
                  onClick={scrollToFooterForm}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  <Target className="mr-2 h-6 w-6" />
                  Boost Your Realstate by 47%
                </Button>
              </div>
            </div>
            
            <div className="relative mb-12 sm:mb-8">
              <div className="relative rounded-xl overflow-hidden shadow-lg max-w-6xl mx-auto">
                <video
                  src="/vid.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-h-[600px] object-contain rounded-xl"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Creatives Gallery - Updated to show 2 images adjacent */}
      <section  className="py-6 sm:py-12 px-4 sm:px-6 relative bg-white dark:bg-gray-900">
        <div 
          className="absolute inset-0 bg-gradient-to-l from-brand-green/10 to-brand-yellow/10"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        ></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 slide-in-up">
            A Full-Funnel Growth System. Not Just Ads.
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto slide-in-up font-medium" style={{animationDelay: '0.2s'}}>
            From Hyderabad to Mumbai to Tier-2 towns, we specialize in putting builders and their projects on the map – digitally, emotionally, and commercially.
            </p>
          </div>

          <div className="z-9999 slide-in-up" style={{animationDelay: '0.4s',position: 'relative',zIndex:9999}}>
            <ScrollingGallery images={galleryImages} />
          </div>
        </div>
      </section>

      {/* Always On, Always Transparent with Video - Yellow Background */}
      <section className="py-12 px-4 sm:px-6 bg-[#f0bc00] dark:bg-[#f0bc00]/20 relative overflow-hidden">
  <div 
    className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10"
    style={{ transform: `translateY(${scrollY * 0.25}px)` }}
  ></div>

  <div className="container mx-auto relative z-10">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white slide-in-left">
        Numbers That Builders Respect.
      </h2>
    </div>

    <div className=" grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* LEFT COLUMN */}
      <div className="space-y-6">
        <div className="flex items-start space-x-3 slide-in-left">
          <span className="text-green-600 text-2xl">✅</span>
          <p className="text-gray-800 dark:text-gray-100 text-lg font-medium">
            <strong>3x Growth in Bookings in 6 Months</strong><br />
            Hyderabad Builder (3 Projects)
          </p>
        </div>
        <div className="flex items-start space-x-3 slide-in-left" style={{ animationDelay: '0.1s' }}>
          <span className="text-green-600 text-2xl">✅</span>
          <p className="text-gray-800 dark:text-gray-100 text-lg font-medium">
            <strong>₹1.2 CR in Direct Sales from ₹9L Ad Spend</strong><br />
            Pune-based Developer
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className=" space-y-6">
        <div className="flex items-start space-x-3 slide-in-right">
          <span className="text-green-600 text-2xl">✅</span>
          <p className="text-gray-800 dark:text-gray-100 text-lg font-medium">
            <strong>2,000+ Inquiries Generated in 60 Days</strong><br />
            Bangalore Premium Villa Project
          </p>
        </div>
        <div className="flex items-start space-x-3 slide-in-right" style={{ animationDelay: '0.1s' }}>
          <span className="text-green-600 text-2xl">✅</span>
          <p className="text-gray-800 dark:text-gray-100 text-lg font-medium">
            <strong>₹800/sqft Increase in Brand Value</strong><br />
            Mid-size Developer in Vizag
          </p>
        </div>
      </div>
    </div>

    <p className="mt-12 text-center text-xl text-gray-900 dark:text-white font-semibold slide-in-up" style={{ animationDelay: '0.2s' }}>
      Let’s make your numbers the next headline.
    </p>
  </div>
</section>



      {/* Performance Solutions We Offer - White Background */}
      <section id="solutions" className="py-6 sm:py-12 px-4 sm:px-6 relative bg-white dark:bg-gray-900">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-brand-orange/10 to-brand-yellow/10"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        ></div>
        <div className="container mx-auto relative z-10 ">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 slide-in-up">
              Performance Solutions <span className="gradient-text">We Offer</span>
            </h2>
          </div>

          {/* Desktop View - Zig-zag with large images */}
          <div className="hidden md:block space-y-16 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <img
                src={gallery1} // Change this path to update performance marketing image
                alt="Performance Marketing"
                className="w-full md:w-1/2 h-64 rounded-xl shadow-2xl object-cover"
              />
              <div className="w-full md:w-1/2 space-y-4">
                <BarChart3 className="h-12 w-12 text-brand-blue" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Performance Marketing</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium leading-relaxed">
                  From lead generation to final conversion, we deploy ROI-focused strategies 
                  that maximize every rupee spent on digital advertising.
                </p>
                <Button onClick={scrollToFooterForm} variant="outline" className="group-hover:bg-brand-blue group-hover:text-white transition-all text-lg font-semibold px-6 py-3">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <img
                src={gallery2} // Change this path to update campaign optimization image
                alt="Campaign Optimization"
                className="w-full md:w-1/2 h-64 rounded-xl shadow-2xl object-cover"
              />
              <div className="w-full md:w-1/2 space-y-4">
                <Zap className="h-12 w-12 text-brand-green" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Campaign Optimization</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium leading-relaxed">
                  Real-time campaign adjustments powered by AI and machine learning 
                  to ensure peak performance across all platforms.
                </p>
                <Button onClick={scrollToFooterForm} variant="outline" className="group-hover:bg-brand-green group-hover:text-white transition-all text-lg font-semibold px-6 py-3">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <img
                src={gallery3} // Change this path to update multi-platform strategy image
                alt="Multi-Platform Strategy"
                className="w-full md:w-1/2 h-64 rounded-xl shadow-2xl object-cover"
              />
              <div className="w-full md:w-1/2 space-y-4">
                <Globe className="h-12 w-12 text-brand-purple" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Multi-Platform Strategy</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium leading-relaxed">
                  Comprehensive campaigns across Google, Meta, LinkedIn, YouTube, 
                  and programmatic platforms for maximum reach and impact.
                </p>
                <Button onClick={scrollToFooterForm} variant="outline" className="group-hover:bg-brand-purple group-hover:text-white transition-all text-lg font-semibold px-6 py-3">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile View - Carousel with large images */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${zigzagCurrentIndex * 100}%)`,
                }}
              >
                {zigzagCards.map((card, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="p-4 text-center shadow-xl bg-white dark:bg-gray-800">
                      <CardContent className="space-y-4">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-56 object-cover rounded-xl shadow-lg mb-4"
                        />
                        <card.icon className={`h-12 w-12 mx-auto ${card.color}`} />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{card.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{card.description}</p>
                        <Button onClick={scrollToFooterForm} variant="outline" className="w-full text-base py-3 font-semibold">
                          Learn More <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 touch-manipulation"
              onClick={handleZigzagPrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 touch-manipulation"
              onClick={handleZigzagNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {zigzagCards.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === zigzagCurrentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setZigzagCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Landing Page Showcase - Yellow Background */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 relative overflow-hidden min-h-[40vh] sm:min-h-[60vh] flex items-center justify-center bg-white/80 dark:bg-[#f0bc00]/20">
        {/* Rotated Background Gallery */}
        <RotatedBackgroundGallery images={landingPageImages} />
        
        <div className="relative z-10 container mx-auto text-center ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 slide-in-up">
            Landing Pages That <span className="gradient-text">Converts</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 mb-6 max-w-3xl mx-auto slide-in-up font-medium" style={{animationDelay: '0.2s'}}>
            Maximize every visitor's potential with high-impact designs that turn clicks into customers. 
            Our landing pages are engineered for conversion optimization.
          </p>
          
          <Button  
            size="lg" 
            onClick={scrollToFooterForm}
            className="text-base sm:text-lg px-6 py-3 animate-bounce-cta button-hover-red bg-red-500 hover:bg-red-600 slide-in-up font-semibold" 
            style={{animationDelay: '0.4s'}}
          >
            <Binoculars className="mr-2 h-5 w-5" />
            Turn Clicks Into Customers
          </Button>
        </div>
      </section>

      <div id="clients" className={`w-full px-4 md:px-10 py-12 ${isDarkMode ? 'bg-black' : 'bg-[#f0bc00]'}`}>
        <div className="text-center mb-10">
          <h2 className={`text-3xl md:text-5xl font-bold font-spartan transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-white'}`}>
            Partnered with <span className={`${isDarkMode ? 'text-yellow-500' : 'text-black'}`}>Brands</span> that demand <span className={`${isDarkMode ? 'text-yellow-500' : 'text-black'}`}>Results</span>
          </h2>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
          {Array.from({ length: 32 }, (_, i) => (
            <div
              key={i}
              className="group p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 h-20 w-28 flex items-center justify-center filter grayscale hover:grayscale-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <img
                src={`/client-logo/logo-${i + 1}.png`} // Change these paths to update client logo images
                alt={`Client Logo ${i + 1}`}
                className={`object-contain ${
                  i === 0 || i === 3 ? 'h-16' : 'h-12'
                } w-auto transition-all duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Mobile Infinite Scroll - Fixed infinite scrolling for client logos */}
        <div className="md:hidden overflow-hidden whitespace-nowrap px-2 py-4 relative">
          <div className="inline-flex space-x-4 animate-scroll-slow">
            {/* Create 3 sets for truly infinite scroll */}
            {[...Array(3)].flatMap((_, setIndex) => (
              Array.from({ length: 32 }, (_, i) => (
                <div
                  key={`set-${setIndex}-logo-${i}`}
                  className="inline-block p-3 bg-white rounded-lg shadow-md h-16 w-20 flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={`/client-logo/logo-${i + 1}.png`} // Change these paths to update mobile client logo images
                    alt={`Client Logo ${i + 1}`}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Carousel - White Background */}
      <section id="case-studies" className="py-4 sm:py-8 px-3 sm:px-4 relative bg-white dark:bg-gray-900">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-brand-green/10"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        ></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100 slide-in-up">
              High-Performance Marketing Success Stories
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto slide-in-up font-medium" style={{animationDelay: '0.2s'}}>
              Explore how our data-driven campaigns have delivered exceptional results 
              for leading real estate developers across India.
            </p>
          </div>

          <CaseStudyCarousel />
        </div>
      </section>
      
      {/* Footer - New Layout: Left (Tagline + CTA) | Right (Embedded Form) */}
      <div id="footer" className="bg-grey-400 dark:bg-black text-accent-black dark:text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 items-center max-w-2xl mx-auto">
            {/* Top - Tagline and CTA */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-spartan">
                Sell your Real Estate{" "}
                <span className="italic text-[47px] md:text-[60px] text-red-500">
                  47%
                </span>{" "}
                faster
              </h3>

              <Button
                onClick={scrollToFooterForm}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-spartan animate-bounce-cta"
              >
                <Phone className="mr-2 h-5 w-5" />
                FREE Strategy Call
              </Button>
            </div>

            {/* Bottom - Form */}
            <div id="footer-form" className="w-full">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
                  Get Your Free Strategy Call
                </h3>
                <FooterForm />
              </div>
            </div>
          </div>

          {/* Footer Links & Credits */}
          <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-sm flex flex-col sm:flex-row justify-between items-center px-2 sm:px-6 gap-2 sm:gap-4">

            {/* Left: Credit */}
            <p className="text-gray-600 dark:text-gray-400 font-spartan text-center sm:text-left">
              © 2025, Made with <span className="text-red-500">♥</span> by <span className="font-semibold text-black dark:text-yellow-400">Digital Mojo</span>
            </p>

            {/* Right: Links */}
            <div className="flex gap-4 justify-center flex-wrap text-sm font-spartan">
              <a
                href="https://digitalmojo.in/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-black dark:text-yellow-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="https://digitalmojo.in/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-black dark:text-yellow-300"
              >
                ISO 9001:2015 Certified
              </a>
            </div>

          </div>
        </div>
      </div>
      
      <LeadForm 
        isOpen={showPopupForm} 
        onClose={() => setShowPopupForm(false)} 
      />
    </div>
  );
}
