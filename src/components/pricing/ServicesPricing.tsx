'use client';

import { motion } from 'framer-motion';

import ButtonLink from '@/components/ui/button-link';
import {
  StarterIcon,
  GrowthIcon,
  PremiumIcon,
  TickIcon,
} from '@/components/icons';

const services = {
  webDevelopment: {
    starter: {
      coreOfferings: [
        '30-min Discovery & Website Briefing Call',
        'SEO-Ready Structure',
        'Lead Capture Form Setup',
        'Responsive Design (Mobile, Tablet, Desktop)',
        'SSL Certificate Setup',
        'Google Analytics Setup (Basic)',
      ],
      tierOne: [
        '1-2 page custom-designed landing site',
        'Includes all Starter Core Offerings',
      ],
      tierTwo: [
        '3-7 page custom static website',
        'Includes all Starter Core Offerings',
      ],
    },
    growth: [
      'Discovery & Strategy Call',
      'Dynamic Website (CMS-powered, scalable)',
      'CMS Integration + 1-Hour CMS Training',
      '1-2 Third-Party API Integrations',
      'Advanced Forms (multi-step, logic-based, file uploads)',
      'Enhanced SEO (Schema, Core Web Vitals, Keywords)',
      'Google Analytics + Search Console Setup',
    ],
    premium: [
      'Full Discovery & Strategy Workshop',
      'Custom Full-Stack Web App (Backend + Frontend)',
      'Complex API Integrations',
      'Custom Dashboards / Workflow Automation',
      'Robust Testing (Functional, Security, UAT)',
      'Deployment & Hosting Infrastructure Setup (AWS/GCP/Azure)',
    ],
  },
  socialMedia: {
    acrossAll: [
      'Custom Content Creation',
      'Strategic Caption Writing',
      'Targeted Hashtag Research',
      'Scheduled Posting',
      'Brand Voice Consistency',
      'Transparent Growth Reports',
    ],
    essential: [
      '1 Platform',
      '8 Feed Posts + 2 Reels',
      'Basic Content Calendar',
      'Caption Writing + Hashtag Research',
      'Monthly Performance Report',
    ],
    accelerate: [
      'Up to 2 Platforms',
      '12-14 Feed Posts + 4 Reels',
      'Stories Posts',
      'Basic Community Engagement',
      'Monthly Strategy Call (30 min)',
      'Enhanced Reporting',
    ],
    full: [
      '3+ Platforms',
      '16-20 Strategic Posts per Month',
      'Rich content mix: carousels, Reels, Stories, Video',
      'Proactive Community Engagement',
      'Trend Research + Crisis Monitoring',
      'Monthly Strategy Call (60 min)',
      'Advanced Performance Analytics',
    ],
  },
  branding: [
    'Logo Suite',
    'Brand Color Palette',
    'Typography System',
    'Brand Style Guide',
    'Stationery & Business Collateral',
    'Digital & Social Media Assets',
    'Mockups / Presentation',
  ],
};

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

// Animation variants for card text
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Animation for section entrance
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const ServicesPricing = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="space-y-[60px] rounded-[50px] bg-secondary px-6 py-9 sm:p-11">
        {/* Website Design & Development Packages */}
        <motion.section
          id="web-design-and-development-packages"
          className="space-y-5"
          variants={sectionVariants}
        >
          <motion.h2
            className="text-center text-2xl font-semibold sm:text-3xl md:text-[40px]"
            variants={textVariants}
          >
            Website Design & Development Packages
          </motion.h2>

          {/* Starter Package */}
          <motion.section
            className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9"
            variants={cardVariants}
          >
            <div>
              <div className="xs:flex-row xs:items-start mb-2 flex flex-col items-center gap-2.5">
                <div className="mt-1">
                  <StarterIcon />
                </div>
                <h3 className="xs:text-left text-center text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                  Starter Package: Essential Online Presence
                </h3>
              </div>
              <p className="xs:text-left text-center text-base text-[#747474] sm:text-xl">
                Ideal For: Solo entrepreneurs, consultants, small businesses
                needing a high-impact presence.
              </p>
            </div>
            <hr className="border-[#F3E4E4]" />
            <div>
              <h6 className="mb-2">Core Offerings</h6>
              <ul className="space-y-3 text-base md:text-lg">
                {services.webDevelopment.starter.coreOfferings.map(
                  (service, index) => (
                    <li key={index} className="flex items-start gap-3.5">
                      <div className="mt-1">
                        <TickIcon />
                      </div>
                      {service}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="rounded-3xl border border-[#F3E4E4] px-6 py-7 sm:p-9">
              <h6 className="mb-3">Tier 1: Starter (Micro-Site)</h6>
              <h3 className="mb-3 text-lg font-semibold text-black sm:text-2xl md:text-3xl">
                Starting from $1,500
              </h3>
              <ul className="mb-5 space-y-3 text-sm sm:text-base md:text-lg">
                {services.webDevelopment.starter.tierOne.map(
                  (service, index) => (
                    <li key={index} className="flex items-start gap-3.5">
                      <div className="mt-1">
                        <TickIcon />
                      </div>
                      {service}
                    </li>
                  )
                )}
              </ul>
              <ButtonLink label="Choose plan" href="mailto:revisiq@gmail.com" />
            </div>
            <div className="rounded-3xl border border-[#F3E4E4] px-6 py-7 sm:p-9">
              <h6 className="mb-3">Tier 2: Starter (Multi-Page Site)</h6>
              <h3 className="mb-3 text-lg font-semibold text-black sm:text-2xl md:text-3xl">
                Starting from $2,800
              </h3>
              <ul className="mb-5 space-y-3 text-sm sm:text-base md:text-lg">
                {services.webDevelopment.starter.tierTwo.map(
                  (service, index) => (
                    <li key={index} className="flex items-start gap-3.5">
                      <div className="mt-1">
                        <TickIcon />
                      </div>
                      {service}
                    </li>
                  )
                )}
              </ul>
              <ButtonLink label="Choose plan" href="mailto:re" />
            </div>
          </motion.section>

          {/* Growth Package */}
          <motion.section
            className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9"
            variants={cardVariants}
          >
            <div>
              <div className="xs:flex-row xs:items-start mb-2 flex flex-col items-center gap-2.5">
                <div className="mt-1">
                  <GrowthIcon />
                </div>
                <h3 className="xs:text-left text-center text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                  Growth Package: Dynamic & Integrated Website
                </h3>
              </div>
              <p className="xs:text-left text-center text-base text-[#747474] sm:text-xl">
                Ideal For: Growing brands needing dynamic, updatable content and
                tool integrations.
              </p>
            </div>
            <div className="rounded-3xl border border-[#F3E4E4] px-6 py-7 sm:p-9">
              <h3 className="mb-3 text-lg font-semibold text-black sm:text-2xl md:text-3xl">
                Starting from $5,000
              </h3>
              <ul className="mb-5 space-y-3 text-sm sm:text-base md:text-lg">
                {services.webDevelopment.growth.map((service, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <div className="mt-1">
                      <TickIcon />
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
              <ButtonLink label="Choose plan" href="mailto:revisiq@gmail.com" />
            </div>
          </motion.section>

          {/* Premium Package */}
          <motion.section
            className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9"
            variants={cardVariants}
          >
            <div>
              <div className="xs:flex-row xs:items-start mb-2 flex flex-col items-center gap-2.5">
                <div className="mt-1">
                  <PremiumIcon />
                </div>
                <h3 className="xs:text-left text-center text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                  Premium Package: Custom Software Solutions
                </h3>
              </div>
              <p className="xs:text-left text-center text-base text-[#747474] sm:text-xl">
                Ideal For: Established businesses, funded startups, or complex
                operational needs.
              </p>
            </div>
            <div className="rounded-3xl border border-[#F3E4E4] px-6 py-7 sm:p-9">
              <h3 className="mb-3 text-lg font-semibold text-black sm:text-2xl md:text-3xl">
                Starting from $15,000
              </h3>
              <ul className="mb-5 space-y-3 text-sm sm:text-base md:text-lg">
                {services.webDevelopment.premium.map((service, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <div className="mt-1">
                      <TickIcon />
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
              <ButtonLink label="Choose plan" href="mailto:revisiq@gmail.com" />
            </div>
          </motion.section>
        </motion.section>

        {/* Social Media Management Services */}
        <motion.section
          id="social-media-management-services"
          className="space-y-5"
          variants={sectionVariants}
        >
          <motion.h2
            className="text-center text-2xl font-semibold sm:text-3xl md:text-[40px]"
            variants={textVariants}
          >
            Social Media Management Services
          </motion.h2>

          {/* Across All */}
          <div className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9">
            <h6 className="mb-2">Included Across All Social Media Tiers</h6>
            <ul className="space-y-3 text-base md:text-lg">
              {services.socialMedia.acrossAll.map((service, index) => (
                <li key={index} className="flex items-start gap-3.5">
                  <div className="mt-1">
                    <TickIcon />
                  </div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Essential Presence */}
          <motion.section
            className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9"
            variants={cardVariants}
          >
            <div>
              <div className="xs:flex-row xs:items-start mb-2 flex flex-col items-center gap-2.5">
                <div className="mt-1">
                  <StarterIcon />
                </div>
                <h3 className="xs:text-left text-center text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                  The &quot;Essential Presence&quot; Package
                </h3>
              </div>
              <p className="xs:text-left text-center text-base text-[#747474] sm:text-xl">
                Ideal For: Brands building their initial presence.
              </p>
            </div>
            <div className="rounded-3xl border border-[#F3E4E4] px-6 py-7 sm:p-9">
              <h3 className="mb-3 text-lg font-semibold text-black sm:text-2xl md:text-3xl">
                $500 - $850 Monthly
              </h3>
              <ul className="mb-5 space-y-3 text-sm sm:text-base md:text-lg">
                {services.socialMedia.essential.map((service, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <div className="mt-1">
                      <TickIcon />
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
              <ButtonLink label="Choose plan" href="mailto:revisiq@gmail.com" />
            </div>
          </motion.section>

          {/* Accelerate Growth Package */}
          <motion.section
            className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9"
            variants={cardVariants}
          >
            <div>
              <div className="xs:flex-row xs:items-start mb-2 flex flex-col items-center gap-2.5">
                <div className="mt-1">
                  <GrowthIcon />
                </div>
                <h3 className="xs:text-left text-center text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                  The &quot;Accelerate Growth&quot; Package
                </h3>
              </div>
              <p className="xs:text-left text-center text-base text-[#747474] sm:text-xl">
                Ideal For: Brands seeking to grow engagement & variety.
              </p>
            </div>
            <div className="rounded-3xl border border-[#F3E4E4] px-6 py-7 sm:p-9">
              <h3 className="mb-3 text-lg font-semibold text-black sm:text-2xl md:text-3xl">
                $1000 - $2,000 Monthly
              </h3>
              <ul className="mb-5 space-y-3 text-sm sm:text-base md:text-lg">
                {services.socialMedia.accelerate.map((service, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <div className="mt-1">
                      <TickIcon />
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
              <ButtonLink label="Choose plan" href="mailto:revisiq@gmail.com" />
            </div>
          </motion.section>

          {/* Full-Service Immersion Package */}
          <motion.section
            className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9"
            variants={cardVariants}
          >
            <div>
              <div className="xs:flex-row xs:items-start mb-2 flex flex-col items-center gap-2.5">
                <div className="mt-1">
                  <PremiumIcon />
                </div>
                <h3 className="xs:text-left text-center text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                  The &quot;Full-Service Immersion Presence&quot; Package
                </h3>
              </div>
              <p className="xs:text-left text-center text-base text-[#747474] sm:text-xl">
                Ideal For: For hands-off, multi-platform growth & engagement
              </p>
            </div>
            <div className="rounded-3xl border border-[#F3E4E4] px-6 py-7 sm:p-9">
              <h3 className="mb-3 text-lg font-semibold text-black sm:text-2xl md:text-3xl">
                $3,000+ Monthly (Based on Scope)
              </h3>
              <ul className="mb-5 space-y-3 text-sm sm:text-base md:text-lg">
                {services.socialMedia.full.map((service, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <div className="mt-1">
                      <TickIcon />
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
              <ButtonLink label="Choose plan" href="mailto:revisiq@gmail.com" />
            </div>
          </motion.section>
        </motion.section>

        {/* Logo Design / Branding Services */}
        <motion.section
          id="logo-design-branding"
          className="space-y-5"
          variants={sectionVariants}
        >
          <motion.h2
            className="text-center text-2xl font-semibold sm:text-3xl md:text-[40px]"
            variants={textVariants}
          >
            Logo Design / Branding Services
          </motion.h2>

          <motion.section
            className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9"
            variants={cardVariants}
          >
            <div>
              <div className="xs:flex-row xs:items-start mb-2 flex flex-col items-center gap-2.5">
                <div className="mt-1">
                  <PremiumIcon />
                </div>
                <h3 className="xs:text-left text-center text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                  Brand Identity / Logo Design
                </h3>
              </div>
              <p className="xs:text-left text-center text-base text-[#747474] sm:text-xl">
                Ideal For: New brands seeking an identity and existing brands
                looking for a unique rebrand.
              </p>
            </div>
            <div className="rounded-3xl border border-[#F3E4E4] px-6 py-7 sm:p-9">
              <h3 className="mb-3 text-lg font-semibold text-black sm:text-2xl md:text-3xl">
                Starting from $1,500
              </h3>
              <ul className="mb-5 space-y-3 text-sm sm:text-base md:text-lg">
                {services.branding.map((service, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <div className="mt-1">
                      <TickIcon />
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
              <ButtonLink label="Choose plan" href="mailto:revisiq@gmail.com" />
            </div>
          </motion.section>
        </motion.section>
      </div>
    </motion.section>
  );
};

export default ServicesPricing;
