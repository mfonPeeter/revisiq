'use client';

import { motion } from 'framer-motion';
import Chip from '../ui/chip';
import {
  MoneyBagIcon,
  PricingBrandIcon,
  PricingWebIcon,
  PricingSocialIcon,
} from '../icons';
import ButtonLink from '../ui/button-link';

const pricingPlans = [
  {
    plan: 'Web Design / Development',
    icon: <PricingWebIcon />,
    price: '$1,500',
    route: '/pricing#web-design-and-development-packages',
  },
  {
    plan: 'Branding',
    icon: <PricingBrandIcon />,
    price: '$1,500',
    route: '',
  },
  {
    plan: 'Social Media Management',
    icon: <PricingSocialIcon />,
    price: '$500',
    route: '/pricing#social-media-management-services',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const PricingSection = () => {
  return (
    <section id="pricing" className="mx-auto max-w-[1300px] space-y-12 px-5">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center gap-y-4 lg:gap-y-7"
      >
        <Chip
          icon={<MoneyBagIcon className="size-4 md:size-auto" />}
          label="TAILORED FOR YOUR BUDGET"
        />
        <h2>Pricing Plans</h2>
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.plan}
              variants={cardVariants}
              className={`flex max-h-fit flex-col items-center gap-8 self-end rounded-[40px] bg-secondary px-6 py-[34px] sm:p-[34px] ${
                index === 2
                  ? 'sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:justify-self-auto'
                  : ''
              }`}
            >
              <div className="mb-2 flex w-full flex-col items-center justify-center">
                <div className="mb-3">{plan.icon}</div>
                <h5 className="text-center">{plan.plan}</h5>
              </div>
              <div className="w-full rounded-3xl bg-white p-[22px] sm:rounded-[30px]">
                <div className="flex flex-col gap-2.5 text-[#1C1C1C]">
                  <span className="text-center text-lg font-medium">
                    Starting from
                  </span>
                  <span className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
                    {plan.price}
                  </span>
                </div>
              </div>
              <ButtonLink
                href={plan.route}
                label="View all packages"
                className="rounded-full py-3.5"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
