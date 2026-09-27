/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { VoiceComparisonSlider } from './components/VoiceComparisonSlider';
import { ProcessSection } from './components/ProcessSection';
import { IdeaStudioSection } from './components/IdeaStudioSection';
import { BrandAuditSection } from './components/BrandAuditSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { PricingSection } from './components/PricingSection';
import { ClientPortalPreview } from './components/ClientPortalPreview';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ClientPortalModal } from './components/ClientPortalModal';
import { BookingModal } from './components/BookingModal';
import { PolicyModal } from './components/PolicyModal';
import { PricingTier, ServiceDetail, MonographPost } from './data/content';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [policyData, setPolicyData] = useState<{ title: string; content: string } | null>(null);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'selected-work', 'philosophy', 'process', 'tools', 'faq'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBookingWithTier = (tier: PricingTier) => {
    setSelectedTier(tier);
    setSelectedService(null);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithService = (service: ServiceDetail) => {
    setSelectedService(service);
    setSelectedTier(null);
    setIsBookingOpen(true);
  };

  const handleDiscussPost = (post: MonographPost) => {
    setSelectedService({
      number: '01',
      title: `Monograph Strategy: "${post.title}"`,
      tagline: post.objective,
      badge: 'Bespoke Folio',
      forWhom: 'Executives seeking similar category authority',
      deliverables: 'Tailored editorial monograph post',
      timeline: 'Standard Retainer desk'
    });
    setIsBookingOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#fbf9f6] text-[#1b1c1a] min-h-screen flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-[#c8ead7] selection:text-[#032217]">
      {/* 3-Zone Masthead Navigation */}
      <Navbar
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenBooking={() => {
          setSelectedTier(null);
          setSelectedService(null);
          setIsBookingOpen(true);
        }}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 flex-grow">
        {/* 1. Hero Section */}
        <HeroSection
          onWorkWithMe={() => scrollToSection('packages')}
          onExploreWork={() => scrollToSection('selected-work')}
        />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. About Section */}
        <AboutSection onLearnPhilosophy={() => scrollToSection('philosophy')} />

        {/* 4. Content Philosophy */}
        <PhilosophySection />

        {/* 5. Services & Offerings with Accordion Drawers */}
        <ServicesSection onSelectService={handleOpenBookingWithService} />

        {/* 6. Selected Work (Folio & Deep Dive Modal) */}
        <SelectedWorkSection onDiscussPost={handleDiscussPost} />

        {/* 7. Before / After Tactile Voice Slider */}
        <VoiceComparisonSlider />

        {/* 8. The Monograph Method (5-step process) */}
        <ProcessSection />

        {/* 9. Interactive Idea Studio & Voice Refiner */}
        <IdeaStudioSection />

        {/* 10. Personal Brand 60-Second Mini-Assessment */}
        <BrandAuditSection onWorkOnIt={() => scrollToSection('packages')} />

        {/* 11. Case Studies & Client Praise */}
        <CaseStudiesSection />

        {/* 12. Transparent Engagements & Pricing (USD/INR) */}
        <PricingSection onSelectTier={handleOpenBookingWithTier} />

        {/* 13. Client Portal Preview */}
        <ClientPortalPreview onOpenPortal={() => setIsPortalOpen(true)} />

        {/* 14. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 15. Final Editorial CTA & Master Footer */}
      <Footer
        onOpenBooking={() => {
          setSelectedTier(null);
          setSelectedService(null);
          setIsBookingOpen(true);
        }}
        onExploreWork={() => scrollToSection('selected-work')}
        onOpenPolicy={(title, content) => setPolicyData({ title, content })}
      />

      {/* Interactive Modals */}
      <ClientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
        onOpenBooking={() => {
          setIsPortalOpen(false);
          setIsBookingOpen(true);
        }}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedTier={selectedTier}
        preselectedService={selectedService}
      />

      <PolicyModal
        title={policyData?.title || null}
        content={policyData?.content || null}
        onClose={() => setPolicyData(null)}
      />
    </div>
  );
}
