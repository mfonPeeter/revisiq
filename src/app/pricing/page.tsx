'use client';

import { motion } from 'framer-motion';

import ServicesPricing from '@/components/pricing/ServicesPricing';
import WhyClientsLoveUs from '@/components/pricing/WhyClientsLoveUs';

const PricingPage = () => {
  return (
    <div>
      <header className="mb-[60px] px-4 pb-6 pt-40 sm:px-8 sm:pt-36 lg:mb-[100px] xl:mb-[160px]">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="mx-auto text-center md:max-w-[708px]"
        >
          {/* Split text animation */}
          {'  Our Services & Tiers, Tailored To Your Budget'
            .split(' ')
            .map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                    rotateX: -90,
                    filter: 'blur(10px)',
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    filter: 'blur(0px)',
                  },
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  type: 'spring',
                  bounce: 0.4,
                }}
                className="mr-2 inline-block"
                whileHover={{
                  scale: 1.05,
                  color: '#FE0002',
                  transition: { duration: 0.2 },
                }}
              >
                {word}
              </motion.span>
            ))}
        </motion.h1>
      </header>

      <main className="mx-auto max-w-[1300px] space-y-[60px] px-6 lg:space-y-[100px] xl:space-y-[160px]">
        <ServicesPricing />
        <WhyClientsLoveUs />
      </main>
    </div>
  );
};

export default PricingPage;
