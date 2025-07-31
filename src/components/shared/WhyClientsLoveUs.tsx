'use client';

import { motion } from 'framer-motion';
import {
  TailoredForClientIcon,
  SecureWebsitesIcon,
  StrongBrandingIcon,
  LongPartnershipIcon,
} from '../icons'; // Import your icons here

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
          {/* Card 1 - Strong Visual Branding */}
          <motion.div variants={cardVariants} className="xs:place-self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="306"
              height="416"
              viewBox="0 0 306 416"
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
              </defs>
              <path
                d="M0 376V40C0 17.9086 17.9086 0 40 0H237.85C248.469 0 258.653 4.22282 266.156 11.7377L294.306 39.9319C301.794 47.4316 306 57.5963 306 68.1942V376C306 398.091 288.091 416 266 416H40C17.9086 416 0 398.091 0 376Z"
                fill="url(#paint0_linear_card1)"
                className="transition-all duration-500 ease-out group-hover:fill-[url(#paint0_linear_card1_hover)]"
              />
              <foreignObject
                x="0"
                y="0"
                width="306"
                height="416"
                style={{
                  width: '306px',
                  height: '416px',
                  overflow: 'visible',
                }}
              >
                <div className="box-border flex h-[416px] w-[306px] flex-col gap-5 px-7 pb-9 pt-12">
                  <div className="flex size-20 items-center justify-center rounded-full bg-[#FECF00]">
                    <TailoredForClientIcon />
                  </div>
                  <motion.div variants={textVariants}>
                    <h3 className="mb-5">Tailored Strategy for Every Client</h3>
                    <p className="font-medium text-[#888888]">
                      We dive deep into your goals to craft strategies that
                      align with your unique vision, personalized solutions that
                      drive real results.
                    </p>
                  </motion.div>
                </div>
              </foreignObject>
            </svg>
          </motion.div>

          {/* Card 2 - Tailored Strategy for Every Client */}
          <motion.div
            variants={cardVariants}
            className="place-self-start justify-self-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="306"
              height="434"
              viewBox="0 0 306 434"
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
              </defs>
              <path
                d="M0 394V40C0 17.9086 17.9086 0 40 0H237.351C248.264 0 258.704 4.45901 266.249 12.3434L294.898 42.2783C302.023 49.723 306 59.6302 306 69.935V394C306 416.091 288.091 434 266 434H40C17.9086 434 0 416.091 0 394Z"
                fill="url(#paint0_linear_card2)"
                className="transition-all duration-500 ease-out group-hover:fill-[url(#paint0_linear_card2_hover)]"
              />
              <foreignObject
                x="0"
                y="0"
                width="306"
                height="434"
                style={{
                  width: '306px',
                  height: '434px',
                  overflow: 'visible',
                }}
              >
                <div className="box-border flex h-[434] w-[306px] flex-col gap-5 px-7 pb-9 pt-12">
                  <div className="flex size-20 items-center justify-center rounded-full bg-[#55E679]">
                    <SecureWebsitesIcon />
                  </div>
                  <motion.div variants={textVariants}>
                    <h3 className="mb-5">Secure, High-End Websites & Apps</h3>
                    <p className="font-medium text-[#888888]">
                      Our websites and apps combine cutting-edge design with
                      robust security.
                    </p>
                  </motion.div>
                </div>
              </foreignObject>
            </svg>
          </motion.div>

          {/* Card 3 - Secure, High-End Websites & Apps */}
          <motion.div
            variants={cardVariants}
            className="place-self-end justify-self-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="306"
              height="416"
              viewBox="0 0 306 416"
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
              </defs>
              <path
                d="M0 376V40C0 17.9086 17.9086 0 40 0H237.85C248.469 0 258.653 4.22281 266.156 11.7377L294.306 39.9319C301.794 47.4316 306 57.5963 306 68.1942V376C306 398.091 288.091 416 266 416H40C17.9086 416 0 398.091 0 376Z"
                fill="url(#paint0_linear_card3)"
                className="transition-all duration-500 ease-out group-hover:fill-[url(#paint0_linear_card3_hover)]"
              />
              <foreignObject
                x="0"
                y="0"
                width="306"
                height="416"
                style={{
                  width: '306px',
                  height: '416px',
                  overflow: 'visible',
                }}
              >
                <div className="box-border flex h-[416px] w-[306px] flex-col gap-5 px-7 pb-9 pt-12">
                  <div className="flex size-20 items-center justify-center rounded-full bg-[#FE0002]">
                    <StrongBrandingIcon />
                  </div>
                  <motion.div variants={textVariants}>
                    <h3 className="mb-5">Strong Visual Branding</h3>
                    <p className="font-medium text-[#888888]">
                      We create bold, cohesive visuals from logos to color
                      systems, every element is designed to leave a lasting
                      impression.
                    </p>
                  </motion.div>
                </div>
              </foreignObject>
            </svg>
          </motion.div>

          {/* Card 4 - Long-Term Partnerships */}
          <motion.div
            variants={cardVariants}
            className="xs:place-self-start md:col-span-full md:justify-self-center lg:col-auto lg:justify-self-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="306"
              height="416"
              viewBox="0 0 306 416"
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
              </defs>
              <path
                d="M0 376V40C0 17.9086 17.9086 0 40 0H237.85C248.469 0 258.653 4.22281 266.156 11.7377L294.306 39.9319C301.794 47.4316 306 57.5963 306 68.1942V376C306 398.091 288.091 416 266 416H40C17.9086 416 0 398.091 0 376Z"
                fill="url(#paint0_linear_card4)"
                className="transition-all duration-500 ease-out group-hover:fill-[url(#paint0_linear_card4_hover)]"
              />
              <foreignObject
                x="0"
                y="0"
                width="306"
                height="416"
                style={{
                  width: '306px',
                  height: '416px',
                  overflow: 'visible',
                }}
              >
                <div className="box-border flex h-[416px] w-[306px] flex-col gap-5 px-7 pb-9 pt-12">
                  <div className="flex size-20 items-center justify-center rounded-full bg-[#BB7DF8]">
                    <LongPartnershipIcon />
                  </div>
                  <motion.div variants={textVariants}>
                    <h3 className="mb-5">Long-Term Partnerships</h3>
                    <p className="font-medium text-[#888888]">
                      We&apos;re in it for the long run. Think beyond projects;
                      we build relationships that evolve with your brand.
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

export default WhyClientsLoveUs;
