'use client';

import { motion } from 'framer-motion';
import {
  BrandingIcon,
  WebDesignIcon,
  ContentStrategyIcon,
  SocialMediaIcon,
  AwardIcon,
  MoveUpRightArrowIcon,
} from '../icons';
import Chip from '../ui/chip';
import Link from 'next/link';

const services = [
  {
    icons: <BrandingIcon />,
    iconBg: '#55E679',
    bgColor: '#F6FAF7',
    heading: 'Branding',
    description:
      'We shape distinctive brand identities that capture attention, build trust, and position your business for lasting impact.',
    route: '',
  },
  {
    icons: <WebDesignIcon />,
    iconBg: '#FE0002',
    bgColor: '#FAF6F6',
    heading: 'Web Design',
    description:
      'We create custom, responsive websites that look amazing, built for speed, usability, and conversion — no templates, just strategy and style.',
    route: '/pricing#web-design-and-development-packages',
  },
  {
    icons: <ContentStrategyIcon />,
    iconBg: '#FECF00',
    bgColor: '#FAF9F6',
    heading: 'Content Strategy',
    description:
      'We craft strategic content that strengthens your brand voice, boosts visibility, and drives the right audience to your website.',
    route: '/pricing#social-media-management-services',
  },
  {
    icons: <SocialMediaIcon />,
    iconBg: '#BB7DF8',
    bgColor: '#F8F6FA',
    heading: 'Social Media Management',
    description:
      'We manage your social media with purpose—building your presence, engaging your audience, and driving traffic back to your website.',
    route: '/pricing#social-media-management-services',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative z-10">
      {/* Blurred background */}
      <div className="absolute inset-0 -z-10 bg-[#FE000214] blur-[400px]" />
      <div className="mx-auto max-w-[1234px] space-y-12 px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-y-4 lg:gap-y-7"
        >
          <Chip
            icon={<AwardIcon className="size-4 md:size-auto" />}
            label="PREMIUM AND TIMELY DELIVERY"
          />
          <h2>Our Services</h2>
        </motion.div>
        <div className="rounded-[40px] bg-white p-7 sm:p-9">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {services.map(
                (
                  { heading, description, icons, iconBg, bgColor, route },
                  index
                ) => (
                  <Link key={index} href={route}>
                    <motion.div
                      key={heading}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="group relative overflow-hidden rounded-[40px] p-8 transition-all duration-500 ease-out hover:-translate-y-2 sm:p-11 md:p-8 lg:px-11 lg:py-12"
                      style={{ backgroundColor: bgColor }}
                    >
                      {/* Subtle gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Animated border glow */}
                      <div
                        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-[40px]"
                        style={{
                          background: `linear-gradient(135deg, transparent 0%, ${iconBg}20 50%, transparent 100%)`,
                        }}
                      />

                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative z-10 mb-5 flex"
                      >
                        <div
                          className="flex size-14 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                          style={{
                            backgroundColor: iconBg,
                            boxShadow: `0 0 0 0 ${iconBg}40`,
                          }}
                        >
                          <div className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                            {icons}
                          </div>
                        </div>
                        <div className="flex size-[60px] items-center justify-center rounded-full border border-[##9D9D9D] text-black">
                          <MoveUpRightArrowIcon className="transition-transform group-hover:translate-x-1" />
                        </div>
                      </motion.div>

                      <h3 className="relative z-10 mb-3.5 transition-colors duration-300 group-hover:text-gray-800">
                        {heading}
                      </h3>
                      <p className="relative z-10 text-lg font-medium leading-relaxed text-[#888] transition-colors duration-300 group-hover:text-gray-600">
                        {description}
                      </p>

                      {/* Subtle shine effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:animate-pulse group-hover:opacity-100" />
                    </motion.div>
                  </Link>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
