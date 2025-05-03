
import React from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import CountdownTimer from '@/components/CountdownTimer';
import PricingCard from '@/components/PricingCard';
import FeatureCard from '@/components/FeatureCard';
import FAQItem from '@/components/FAQItem';
import TestimonialCard from '@/components/TestimonialCard';
import BundleItemCard from '@/components/BundleItemCard';
import AssetCategories from '@/components/AssetCategories';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import BundleImageCarousel from '@/components/BundleImageCarousel';

// Set end date for countdown (1 week from now)
const endDate = new Date();
endDate.setDate(endDate.getDate() + 7);

const Index = () => {
  const { toast } = useToast();
  
  const handleBuyNow = () => {
    toast({
      title: "Processing your order",
      description: "This is where you would integrate your payment processor.",
    });
  };

  return (
    <div className="min-h-screen bg-bundle-dark text-white">
      <ScrollToTopButton />

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bundle-blue/20 to-transparent"></div>
        
        <div className="relative bundle-container flex flex-col items-center text-center">
          <div className="bg-bundle-red text-white px-4 py-2 rounded-full inline-flex items-center mb-8 animate-pulse-glow">
            <span className="font-bold">LIMITED TIME OFFER - 95% OFF</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="gradient-text">World's Biggest</span><br/>
            Photography Bundle
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-gray-300">
            Get lifetime access to <span className="font-bold text-white">50,000+</span> premium photo & video editing assets worth ₹75,000 for just ₹297
          </p>
          
          <CountdownTimer
            targetDate={endDate.toISOString()}
            className="mb-8"
          />
          
          <button
            onClick={handleBuyNow}
            className="btn-primary text-xl mb-8 flex items-center gap-2"
          >
            <span>GET INSTANT ACCESS</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-bundle-green">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-bundle-green">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-bundle-green">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Commercial Usage Rights</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-bundle-green">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </header>

      {/* What's Included Section */}
      <section className="bundle-container">
        <h2 className="section-heading">What's Included In The Bundle</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <BundleItemCard 
            title="Lightroom Presets" 
            count="10,000+" 
            color="blue"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            } 
          />
          <BundleItemCard 
            title="Photoshop Actions" 
            count="5,000+" 
            color="purple"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
              </svg>
            } 
          />
          <BundleItemCard 
            title="Video LUTs" 
            count="2,500+" 
            color="pink"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            } 
          />
          <BundleItemCard 
            title="Overlays & Textures" 
            count="8,000+" 
            color="orange"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            } 
          />
        </div>
        
        {/* Bundle Image Carousel */}
        <BundleImageCarousel />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <AssetCategories 
            title="Lightroom Presets"
            items={[
              { name: "Portrait Presets", count: 3500 },
              { name: "Landscape Presets", count: 2800 },
              { name: "Wedding Presets", count: 1600 },
              { name: "HDR Presets", count: 900 },
              { name: "Film Emulation", count: 1200 }
            ]}
          />
          
          <AssetCategories 
            title="Photoshop Tools"
            items={[
              { name: "Actions", count: 5000 },
              { name: "Brushes", count: 3200 },
              { name: "Overlays", count: 2100 },
              { name: "Mockups", count: 1800 },
              { name: "Templates", count: 1400 }
            ]}
          />
          
          <AssetCategories 
            title="Video Editing"
            items={[
              { name: "LUTs", count: 2500 },
              { name: "Transitions", count: 1200 },
              { name: "Sound Effects", count: 3000 },
              { name: "Motion Graphics", count: 800 },
              { name: "Premiere Templates", count: 650 }
            ]}
          />
        </div>
        
        <div className="text-center mb-12">
          <p className="text-gray-300 mb-6">
            And much more! The bundle includes everything you need to elevate your photography and video editing to professional levels.
          </p>
          <button onClick={handleBuyNow} className="btn-primary">
            GET THE COMPLETE BUNDLE NOW
          </button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-gray-900 py-16">
        <div className="bundle-container">
          <h2 className="section-heading">Why This Bundle Is Perfect For You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              }
              title="Easy To Use"
              description="Simple one-click application for most presets. Works with latest software versions and includes detailed instructions."
            />
            
            <FeatureCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 2 7l10 5 10-5-10-5Z"></path>
                  <path d="m2 17 10 5 10-5"></path>
                  <path d="m2 12 10 5 10-5"></path>
                </svg>
              }
              title="Massive Value"
              description="50,000+ assets worth ₹75,000 available for just ₹297. Save 95% with this limited-time bundle offer."
            />
            
            <FeatureCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="2" x2="9" y2="4"></line>
                  <line x1="15" y1="2" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="22"></line>
                  <line x1="15" y1="20" x2="15" y2="22"></line>
                  <line x1="20" y1="9" x2="22" y2="9"></line>
                  <line x1="20" y1="14" x2="22" y2="14"></line>
                  <line x1="2" y1="9" x2="4" y2="9"></line>
                  <line x1="2" y1="14" x2="4" y2="14"></line>
                </svg>
              }
              title="Commercial License"
              description="Use all assets in client projects and commercial work with our complete commercial usage rights."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bundle-container" id="pricing">
        <div className="max-w-xl mx-auto">
          <h2 className="section-heading">Limited Time Pricing</h2>
          
          <PricingCard 
            originalPrice="₹7,500"
            currentPrice="₹297"
            discount="95%"
            onClick={handleBuyNow}
          />
          
          <p className="text-center mt-6 text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-1">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            Price increases when the timer runs out!
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900 py-16">
        <div className="bundle-container">
          <h2 className="section-heading">What Photographers Are Saying</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="This bundle completely transformed my workflow. The presets save me hours on each photoshoot and the quality is amazing."
              author="Priya Sharma"
              role="Wedding Photographer"
            />
            
            <TestimonialCard
              quote="Best investment I've made for my photography business. The variety of presets and tools gives me endless creative options."
              author="Rahul Verma"
              role="Portrait Photographer"
            />
            
            <TestimonialCard
              quote="I was skeptical at first about the value, but after using these assets for a month, I can confirm it's worth every rupee and more."
              author="Ananya Patel"
              role="Travel Photographer"
            />
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bundle-container">
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 flex flex-col md:flex-row items-center">
          <div className="md:mr-8 mb-6 md:mb-0 text-bundle-green">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-gray-300 mb-4">
              We're confident you'll love our photography bundle. If you're not completely satisfied, simply email us within 30 days of purchase for a full refund. No questions asked.
            </p>
            <button onClick={handleBuyNow} className="btn-primary">
              GET INSTANT ACCESS
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bundle-container">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          <FAQItem
            question="What software do I need to use these assets?"
            answer="Most presets are compatible with Adobe Lightroom (all versions from 4 to Classic CC), Photoshop (CS6 and newer), and Premiere Pro. Some assets also work with popular alternatives like Capture One, Luminar, Final Cut Pro, and DaVinci Resolve."
          />
          
          <FAQItem
            question="Do I get instant access after purchasing?"
            answer="Yes! After completing your purchase, you'll receive an email with download instructions. All assets are available through a simple download portal where you can access everything immediately."
          />
          
          <FAQItem
            question="Can I use these assets for client work and commercial projects?"
            answer="Absolutely! Your purchase includes a full commercial license that allows you to use all assets in personal and client projects, including work you charge for. The only restriction is reselling or redistributing the assets themselves."
          />
          
          <FAQItem
            question="How long will I have access to the bundle?"
            answer="You get lifetime access to all assets in the bundle. Download them once and they're yours forever, with no subscription or recurring fees."
          />
          
          <FAQItem
            question="What if I'm not satisfied with my purchase?"
            answer="We offer a no-questions-asked 30-day money-back guarantee. If you're not completely happy with the bundle, simply email our support team for a full refund."
          />
          
          <FAQItem
            question="Will these work on both Mac and PC?"
            answer="Yes, all assets are compatible with both Mac and Windows computers, provided you have the required software."
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-bundle-blue/20 via-bundle-purple/20 to-bundle-pink/20 py-16">
        <div className="bundle-container text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Don't Miss This Opportunity</h2>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Get 50,000+ premium photo & video editing assets worth ₹75,000 for just ₹297 before this limited-time offer ends!
          </p>
          
          <CountdownTimer
            targetDate={endDate.toISOString()}
            className="mb-10"
          />
          
          <button
            onClick={handleBuyNow}
            className="btn-primary text-xl"
          >
            GET INSTANT ACCESS NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="bundle-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Photography Bundle</h3>
              <p className="text-gray-400 mb-4">
                The ultimate collection of photography and video editing assets to elevate your creative work.
              </p>
              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} Photography Bundle. All rights reserved.
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Support</h3>
              <p className="text-gray-400 mb-2">
                Need help or have questions?
              </p>
              <a href="mailto:support@photographybundle.com" className="text-bundle-blue hover:text-blue-400">
                support@photographybundle.com
              </a>
              <p className="mt-4 text-gray-400">
                Response time: Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
