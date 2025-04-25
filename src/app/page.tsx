'use client';

import { useEffect, useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import HeroSection from '@/components/home/HeroSection';
import ClientsLogoSection from '@/components/home/ClientsLogoSection';
import CompanyDescription from '@/components/home/CompanyDescription';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import FooterWithCta from '@/components/layout/FooterWithCta';

export default function Home() {
  // Parallax effect for hero section
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-red-600 selection:text-white">
      <NavBar scrollY={scrollY} />
      <HeroSection scrollY={scrollY} />
      <ClientsLogoSection />
      <CompanyDescription />
      <ServicesSection />

      <div className="space-y-28">
        <TestimonialSection />
        <BenefitsSection />
        <FooterWithCta />
      </div>
    </div>
  );
}
