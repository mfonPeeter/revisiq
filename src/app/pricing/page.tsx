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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const PricingPage = () => {
  return (
    <div>
      <header className="mb-[60px] px-4 pb-6 pt-40 sm:px-8 sm:pt-36 lg:mb-[100px] xl:mb-[160px]">
        <h1 className="mx-auto max-w-[708px] text-center">
          Our Services & Tiers, Tailored To Your Budget
        </h1>
      </header>

      <main className="mx-auto max-w-[1300px] space-y-[60px] px-6 lg:space-y-[100px] xl:space-y-[160px]">
        <div className="space-y-[60px] rounded-[50px] bg-secondary px-6 py-9 sm:p-11">
          {/* Website Design & Development Packages */}
          <section
            id="web-design-and-development-packages"
            className="space-y-5"
          >
            <h2 className="text-center text-2xl font-semibold sm:text-3xl md:text-[40px]">
              Website Design & Development Packages
            </h2>

            {/* Starter Package */}
            <section className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9">
              <div>
                <div className="mb-2 flex items-start gap-2.5">
                  <div className="mt-1">
                    <StarterIcon />
                  </div>
                  <h3 className="text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                    Starter Package: Essential Online Presence
                  </h3>
                </div>
                <p className="text-base text-[#747474] sm:text-xl">
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
                <ButtonLink
                  label="Choose plan"
                  href="mailto:revisiq@gmail.com"
                />
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
            </section>

            {/* Growth Package */}
            <section className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9">
              <div>
                <div className="mb-2 flex items-start gap-2.5">
                  <div className="mt-1">
                    <GrowthIcon />
                  </div>
                  <h3 className="text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                    Growth Package: Dynamic & Integrated Website
                  </h3>
                </div>
                <p className="text-base text-[#747474] sm:text-xl">
                  Ideal For: Growing brands needing dynamic, updatable content
                  and tool integrations.
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
                <ButtonLink
                  label="Choose plan"
                  href="mailto:revisiq@gmail.com"
                />
              </div>
            </section>

            {/* Premium Package */}
            <section className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9">
              <div>
                <div className="mb-2 flex items-start gap-2.5">
                  <div className="mt-1">
                    <PremiumIcon />
                  </div>
                  <h3 className="text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                    Premium Package: Custom Software Solutions
                  </h3>
                </div>
                <p className="text-base text-[#747474] sm:text-xl">
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
                <ButtonLink
                  label="Choose plan"
                  href="mailto:revisiq@gmail.com"
                />
              </div>
            </section>
          </section>

          {/* Social Media Management Services */}
          <section id="social-media-management-services" className="space-y-5">
            <h2 className="text-center text-2xl font-semibold sm:text-3xl md:text-[40px]">
              Social Media Management Services
            </h2>

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
            <section className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9">
              <div>
                <div className="mb-2 flex items-start gap-2.5">
                  <div className="mt-1">
                    <StarterIcon />
                  </div>
                  <h3 className="text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                    The &quot;Essential Presence&quot; Package
                  </h3>
                </div>
                <p className="text-base text-[#747474] sm:text-xl">
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
                <ButtonLink
                  label="Choose plan"
                  href="mailto:revisiq@gmail.com"
                />
              </div>
            </section>

            {/* Accelerate Growth Package */}
            <section className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9">
              <div>
                <div className="mb-2 flex items-start gap-2.5">
                  <div className="mt-1">
                    <GrowthIcon />
                  </div>
                  <h3 className="text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                    The &quot;Accelerate Growth&quot; Package
                  </h3>
                </div>
                <p className="text-base text-[#747474] sm:text-xl">
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
                <ButtonLink
                  label="Choose plan"
                  href="mailto:revisiq@gmail.com"
                />
              </div>
            </section>

            {/* Full-Service Immersion Package */}
            <section className="space-y-5 rounded-3xl bg-white px-6 py-7 sm:p-9">
              <div>
                <div className="mb-2 flex items-start gap-2.5">
                  <div className="mt-1">
                    <PremiumIcon />
                  </div>
                  <h3 className="text-xl font-semibold text-black sm:text-2xl md:text-3xl">
                    The &quot;Full-Service Immersion Presence&quot; Package
                  </h3>
                </div>
                <p className="text-base text-[#747474] sm:text-xl">
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
                <ButtonLink
                  label="Choose plan"
                  href="mailto:revisiq@gmail.com"
                />
              </div>
            </section>
          </section>
        </div>

        <WhyClientsLoveUs />
      </main>
    </div>
  );
};

const WhyClientsLoveUs = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2>Why Clients Love Working With Us</h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="relative mx-auto max-w-[800px] space-y-12 px-5 lg:max-w-[1400px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
          className="xs:grid-cols-2 grid grid-cols-1 place-items-center gap-[18px] md:grid-cols-3 lg:grid-cols-4 lg:px-0"
        >
          {/* Card 1 */}
          <motion.div variants={cardVariants}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 306 511"
              fill="none"
              className="group h-auto w-full"
              style={{
                maxWidth: '306px',
                height: 'auto',
                shapeRendering: 'geometricPrecision',
                imageRendering: 'crisp-edges',
              }}
            >
              <defs>
                <linearGradient
                  id="paint0_linear_103_367"
                  x1="-8.5"
                  y1="-25.0801"
                  x2="306"
                  y2="510.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EEF7FF" />
                  <stop offset="1" stopColor="#D4EAFF" />
                </linearGradient>
                <linearGradient
                  id="paint0_linear_103_367_hover"
                  x1="-8.5"
                  y1="-25.0801"
                  x2="306"
                  y2="510.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F8FAFC" />
                  <stop offset="0.5" stopColor="#E0F2FE" />
                  <stop offset="1" stopColor="#BAE6FD" />
                </linearGradient>
              </defs>
              <path
                d="M0 470.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H235.426C247.455 0.419922 258.845 5.83331 266.441 15.1604L297.015 52.7014C302.827 59.837 306 68.7582 306 77.9609V470.42C306 492.511 288.091 510.42 266 510.42H40C17.9086 510.42 0 492.511 0 470.42Z"
                fill="url(#paint0_linear_103_367)"
                className="transition-all duration-700 ease-out group-hover:fill-[url(#paint0_linear_103_367_hover)]"
              />
              <foreignObject
                x="0"
                y="0"
                width="306"
                height="511"
                style={{
                  width: '306px',
                  height: '511px',
                  overflow: 'visible',
                }}
              >
                <div
                  style={{
                    width: '306px',
                    height: '511px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                  }}
                >
                  <motion.div variants={textVariants} className="px-9 pt-11">
                    <h3 className="mb-5">Strong Visual Branding</h3>
                    <p className="font-medium text-[#8D9DAC]">
                      We adapt to your needs—whether you need a full build
                      website design, branding, or a support team to enhance
                      your existing website.
                    </p>
                  </motion.div>
                </div>
              </foreignObject>
            </svg>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            className="place-self-start justify-self-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 306 435"
              fill="none"
              className="group h-auto w-full"
              style={{
                maxWidth: '306px',
                height: 'auto',
                shapeRendering: 'geometricPrecision',
                imageRendering: 'crisp-edges',
              }}
            >
              <defs>
                <linearGradient
                  id="paint0_linear_103_348"
                  x1="18"
                  y1="-25.0801"
                  x2="273"
                  y2="426.92"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFFCF3" />
                  <stop offset="1" stopColor="#FFF3C5" />
                </linearGradient>
                <linearGradient
                  id="paint0_linear_103_348_hover"
                  x1="18"
                  y1="-25.0801"
                  x2="273"
                  y2="426.92"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFFBEB" />
                  <stop offset="0.5" stopColor="#FEF3C7" />
                  <stop offset="1" stopColor="#FDE68A" />
                </linearGradient>
              </defs>
              <path
                d="M0 394.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H237.351C248.264 0.419922 258.704 4.87893 266.249 12.7633L294.898 42.6982C302.023 50.1429 306 60.0501 306 70.3549V394.42C306 416.511 288.091 434.42 266 434.42H40C17.9086 434.42 0 416.511 0 394.42Z"
                fill="url(#paint0_linear_103_348)"
                className="transition-all duration-700 ease-out group-hover:fill-[url(#paint0_linear_103_348_hover)]"
              />
              <foreignObject
                x="0"
                y="0"
                width="306"
                height="435"
                style={{
                  width: '306px',
                  height: '435px',
                  overflow: 'visible',
                }}
              >
                <div
                  style={{
                    width: '306px',
                    height: '435px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                  }}
                >
                  <motion.div
                    variants={textVariants}
                    className="mb-8 px-9 pt-11"
                  >
                    <h3 className="mb-5">Tailored Strategy for Every Client</h3>
                    <p className="font-medium text-[#AA8600]">
                      We guide you from idea to launch and beyond, ensuring a
                      smooth and scalable growth path.
                    </p>
                  </motion.div>
                </div>
              </foreignObject>
            </svg>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            className="place-self-end justify-self-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 306 435"
              fill="none"
              className="group h-auto w-full"
              style={{
                maxWidth: '306px',
                height: 'auto',
                shapeRendering: 'geometricPrecision',
                imageRendering: 'crisp-edges',
              }}
            >
              <defs>
                <linearGradient
                  id="paint0_linear_103_359"
                  x1="1.9087e-06"
                  y1="11.4199"
                  x2="327.5"
                  y2="445.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FAF5FF" />
                  <stop offset="1" stopColor="#F7EEFF" />
                </linearGradient>
                <linearGradient
                  id="paint0_linear_103_359_hover"
                  x1="1.9087e-06"
                  y1="11.4199"
                  x2="327.5"
                  y2="445.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FDFCFF" />
                  <stop offset="0.5" stopColor="#F3E8FF" />
                  <stop offset="1" stopColor="#E9D5FF" />
                </linearGradient>
              </defs>
              <path
                d="M0 394.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H237.351C248.264 0.419922 258.704 4.87893 266.249 12.7633L294.898 42.6982C302.023 50.1429 306 60.0502 306 70.3549V394.42C306 416.511 288.091 434.42 266 434.42H40C17.9086 434.42 0 416.511 0 394.42Z"
                fill="url(#paint0_linear_103_359)"
                className="transition-all duration-700 ease-out group-hover:fill-[url(#paint0_linear_103_359_hover)]"
              />
              <foreignObject
                x="0"
                y="0"
                width="306"
                height="435"
                style={{
                  width: '306px',
                  height: '435px',
                  overflow: 'visible',
                }}
              >
                <div
                  style={{
                    width: '306px',
                    height: '435px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                  }}
                >
                  <motion.div variants={textVariants} className="px-9 pt-11">
                    <h3 className="mb-5">Secure, High-End Websites & Apps</h3>
                    <p className="font-medium text-[#836B9B]">
                      Revisiq provides highly skilled engineers, designers,
                      content strategists and social media managers tailored to
                      your needs.
                    </p>
                  </motion.div>
                </div>
              </foreignObject>
            </svg>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-full md:justify-self-center lg:col-auto lg:justify-self-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 306 511"
              fill="none"
              className="group h-auto w-full"
              style={{
                maxWidth: '306px',
                height: 'auto',
                shapeRendering: 'geometricPrecision',
                imageRendering: 'crisp-edges',
              }}
            >
              <defs>
                <linearGradient
                  id="paint0_linear_103_367"
                  x1="-8.5"
                  y1="-25.0801"
                  x2="306"
                  y2="510.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EEF7FF" />
                  <stop offset="1" stopColor="#D4EAFF" />
                </linearGradient>
                <linearGradient
                  id="paint0_linear_103_367_hover"
                  x1="-8.5"
                  y1="-25.0801"
                  x2="306"
                  y2="510.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F8FAFC" />
                  <stop offset="0.5" stopColor="#E0F2FE" />
                  <stop offset="1" stopColor="#BAE6FD" />
                </linearGradient>
              </defs>
              <path
                d="M0 470.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H235.426C247.455 0.419922 258.845 5.83331 266.441 15.1604L297.015 52.7014C302.827 59.837 306 68.7582 306 77.9609V470.42C306 492.511 288.091 510.42 266 510.42H40C17.9086 510.42 0 492.511 0 470.42Z"
                fill="url(#paint0_linear_103_367)"
                className="transition-all duration-700 ease-out group-hover:fill-[url(#paint0_linear_103_367_hover)]"
              />
              <foreignObject
                x="0"
                y="0"
                width="306"
                height="511"
                style={{
                  width: '306px',
                  height: '511px',
                  overflow: 'visible',
                }}
              >
                <div
                  style={{
                    width: '306px',
                    height: '511px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                  }}
                >
                  <motion.div variants={textVariants} className="px-9 pt-11">
                    <h3 className="mb-5">Long-Term Partnerships</h3>
                    <p className="font-medium text-[#8D9DAC]">
                      We adapt to your needs—whether you need a full build
                      website design, branding, or a support team to enhance
                      your existing website.
                    </p>
                  </motion.div>
                </div>
              </foreignObject>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingPage;
