'use client';

import HeroSection from '@/components/home/HeroSection';
import ClientsLogoSection from '@/components/home/ClientsLogoSection';
import CompanyDescription from '@/components/home/CompanyDescription';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import PricingSection from '@/components/home/PricingSection';
import WhyClientsLoveUs from '@/components/shared/WhyClientsLoveUs';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-red-600 selection:text-white">
      <div className="space-y-[80px] md:space-y-[130px] lg:space-y-[160px]">
        <HeroSection />
        <ClientsLogoSection />
        <CompanyDescription />
        <ServicesSection />
        <TestimonialSection />
        <BenefitsSection />
        <PricingSection />
        <WhyClientsLoveUs />
      </div>
    </div>
  );
}
