'use client';

import { motion } from 'framer-motion';
import {
  TailoredForClientIcon,
  SecureWebsitesIcon,
  StrongBrandingIcon,
  LongPartnershipIcon,
} from '../icons';

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

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

// Card Data
const cards = [
  {
    title: 'Tailored Strategy for Every Client',
    description:
      'We dive deep into your goals to craft strategies that align with your unique vision, personalized solutions that drive real results.',
    Icon: TailoredForClientIcon,
    bgColor: '#FECF00',
    gradientId: 'paint0_linear_card1',
    gradientHoverId: 'paint0_linear_card1_hover',
    height: 416,
    viewBox: '0 0 306 416',
    positionClass: 'xs:place-self-end',
    gradient: (
      <>
        <linearGradient
          id="paint0_linear_card1"
          x1="0"
          y1="0"
          x2="306"
          y2="416"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAF9F6" />
          <stop offset="1" stopColor="#FAF9F6" />
        </linearGradient>
        <linearGradient
          id="paint0_linear_card1_hover"
          x1="0"
          y1="0"
          x2="306"
          y2="416"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFBF0" />
          <stop offset="0.5" stopColor="#FEF3C7" />
          <stop offset="1" stopColor="#FDE68A" />
        </linearGradient>
      </>
    ),
  },
  {
    title: 'Secure, High-End Websites & Apps',
    description:
      'Our websites and apps combine cutting-edge design with robust security.',
    Icon: SecureWebsitesIcon,
    bgColor: '#55E679',
    gradientId: 'paint0_linear_card2',
    gradientHoverId: 'paint0_linear_card2_hover',
    height: 434,
    viewBox: '0 0 306 434',
    positionClass: 'place-self-start justify-self-center',
    gradient: (
      <>
        <linearGradient
          id="paint0_linear_card2"
          x1="0"
          y1="0"
          x2="306"
          y2="434"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6FAF7" />
          <stop offset="1" stopColor="#F6FAF7" />
        </linearGradient>
        <linearGradient
          id="paint0_linear_card2_hover"
          x1="0"
          y1="0"
          x2="306"
          y2="434"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ECFDF5" />
          <stop offset="0.5" stopColor="#D1FAE5" />
          <stop offset="1" stopColor="#BBF7D0" />
        </linearGradient>
      </>
    ),
  },
  {
    title: 'Strong Visual Branding',
    description:
      'We create bold, cohesive visuals from logos to color systems, every element is designed to leave a lasting impression.',
    Icon: StrongBrandingIcon,
    bgColor: '#FE0002',
    gradientId: 'paint0_linear_card3',
    gradientHoverId: 'paint0_linear_card3_hover',
    height: 416,
    viewBox: '0 0 306 416',
    positionClass: 'place-self-end justify-self-center',
    gradient: (
      <>
        <linearGradient
          id="paint0_linear_card3"
          x1="0"
          y1="0"
          x2="306"
          y2="416"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAF6F6" />
          <stop offset="1" stopColor="#FAF6F6" />
        </linearGradient>
        <linearGradient
          id="paint0_linear_card3_hover"
          x1="0"
          y1="0"
          x2="306"
          y2="416"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDF2F8" />
          <stop offset="0.5" stopColor="#FCE7F3" />
          <stop offset="1" stopColor="#FBCFE8" />
        </linearGradient>
      </>
    ),
  },
  {
    title: 'Long-Term Partnerships',
    description:
      "We're in it for the long run. Think beyond projects; we build relationships that evolve with your brand.",
    Icon: LongPartnershipIcon,
    bgColor: '#BB7DF8',
    gradientId: 'paint0_linear_card4',
    gradientHoverId: 'paint0_linear_card4_hover',
    height: 416,
    viewBox: '0 0 306 416',
    positionClass:
      'xs:place-self-start md:col-span-full md:justify-self-center lg:col-auto lg:justify-self-auto',
    gradient: (
      <>
        <linearGradient
          id="paint0_linear_card4"
          x1="0"
          y1="0"
          x2="306"
          y2="416"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8F6FA" />
          <stop offset="1" stopColor="#F8F6FA" />
        </linearGradient>
        <linearGradient
          id="paint0_linear_card4_hover"
          x1="0"
          y1="0"
          x2="306"
          y2="416"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFCFF" />
          <stop offset="0.5" stopColor="#F3E8FF" />
          <stop offset="1" stopColor="#E9D5FF" />
        </linearGradient>
      </>
    ),
  },
];

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
          className="xs:grid-cols-2 grid min-h-[584px] grid-cols-1 place-items-center gap-[18px] md:grid-cols-3 lg:grid-cols-4 lg:px-0"
        >
          {cards.map(
            (
              {
                title,
                description,
                Icon,
                bgColor,
                gradientId,
                gradientHoverId,
                height,
                viewBox,
                gradient,
                positionClass,
              },
              index
            ) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={positionClass}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="306"
                  height={height}
                  viewBox={viewBox}
                  fill="none"
                  className="group h-auto w-full"
                  style={{
                    maxWidth: '306px',
                    height: 'auto',
                    shapeRendering: 'geometricPrecision',
                    imageRendering: 'crisp-edges',
                  }}
                >
                  <defs>{gradient}</defs>
                  <path
                    d="M0 376V40C0 17.9086 17.9086 0 40 0H237.85C248.469 0 258.653 4.22282 266.156 11.7377L294.306 39.9319C301.794 47.4316 306 57.5963 306 68.1942V376C306 398.091 288.091 416 266 416H40C17.9086 416 0 398.091 0 376Z"
                    fill={`url(#${gradientId})`}
                    className={`transition-all duration-500 ease-out group-hover:fill-[url(#${gradientHoverId})]`}
                  />
                  <foreignObject
                    x="0"
                    y="0"
                    width="306"
                    height={height}
                    style={{ overflow: 'visible' }}
                  >
                    <div className="group box-border flex h-full w-full flex-col gap-5 px-7 pb-9 pt-12">
                      <div
                        className="flex size-20 items-center justify-center rounded-full transition-all duration-500 ease-out group-hover:animate-pulse"
                        style={{ backgroundColor: bgColor }}
                      >
                        <Icon />
                      </div>
                      <motion.div variants={textVariants}>
                        <h3 className="mb-5">{title}</h3>
                        <p className="font-medium text-[#888888]">
                          {description}
                        </p>
                      </motion.div>
                    </div>
                  </foreignObject>
                </svg>
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyClientsLoveUs;
