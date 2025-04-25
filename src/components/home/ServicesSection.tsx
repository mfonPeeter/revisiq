import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  BrandingIcon,
  WebDesignIcon,
  ContentStrategyIcon,
  SocialMediaIcon,
  AwardIcon,
} from '../icons';

const services = [
  {
    icons: <BrandingIcon />,
    iconBg: '#55E679',
    bgColor: '#F6FAF7',
    heading: 'Branding',
    description:
      'We shape distinctive brand identities that capture attention, build trust, and position your business for lasting impact.',
  },
  {
    icons: <WebDesignIcon />,
    iconBg: '#FE0002',
    bgColor: '#FAF6F6',
    heading: 'Web Design',
    description:
      'We create custom, responsive websites that look amazing, built for speed, usability, and conversion — no templates, just strategy and style.',
  },
  {
    icons: <ContentStrategyIcon />,
    iconBg: '#FECF00',
    bgColor: '#FAF9F6',
    heading: 'Content Strategy',
    description:
      'We craft strategic content that strengthens your brand voice, boosts visibility, and drives the right audience to your website.',
  },
  {
    icons: <SocialMediaIcon />,
    iconBg: '#BB7DF8',
    bgColor: '#F8F6FA',
    heading: 'Social Media Management',
    description:
      'We manage your social media with purpose—building your presence, engaging your audience, and driving traffic back to your website.',
  },
];

const ServicesSection = () => {
  return (
    <section
      className="relative z-0 border py-28"
      style={{
        maskImage:
          'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
      }}
    >
      {/* Blurred background */}
      <div className="absolute inset-0 bottom-[-400px] top-[-400px] -z-10 bg-[#FE000214] blur-[400px]" />

      <div className="container mx-auto space-y-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-y-7"
        >
          <div className="flex w-fit items-center gap-x-2 rounded-3xl border border-[#E1E1E1] px-4 py-2 text-sm font-medium text-[#898989]">
            <AwardIcon />
            PREMIUM AND TIMELY DELIVERY
          </div>
          <h2>Our Services</h2>
        </motion.div>

        <div className="rounded-[40px] bg-white p-9">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {services.map(
                ({ heading, description, icons, iconBg, bgColor }) => (
                  <motion.div
                    key={heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-[40px] px-11 py-12"
                    style={{ backgroundColor: bgColor }}
                  >
                    <div className="mb-5 flex">
                      <div
                        className="flex size-14 items-center justify-center rounded-full"
                        style={{ backgroundColor: iconBg }}
                      >
                        {icons}
                      </div>
                      <Link
                        href="/projects"
                        className="group flex size-14 items-center justify-center rounded-full border-[0.5px] border-[#9D9D9D] hover:bg-black"
                      >
                        <ArrowRight className="h-6 w-6 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                      </Link>
                    </div>
                    <h3 className="mb-3.5">{heading}</h3>
                    <p className="text-lg font-medium leading-relaxed text-[#888]">
                      {description}
                    </p>
                  </motion.div>
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
