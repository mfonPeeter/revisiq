'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Chip from '../ui/chip';
import {
  MoneyBagIcon,
  GrowthIcon,
  StarterIcon,
  PremiumIcon,
  ArrowRightIcon,
  TickIcon,
} from '../icons';

const pricingPlans = [
  {
    plan: 'Starter Package',
    icon: <StarterIcon />,
    price: '$750 - $1,200',
    features: [
      { feature: 'Landing Page' },
      {
        feature: 'Basic Branding',
        subFeatures: ['Logo', 'Color palette', 'Font selection'],
      },
      { feature: '30-minute strategy call' },
      { feature: 'SEO' },
    ],
  },
  {
    plan: 'Growth Package',
    icon: <GrowthIcon />,
    price: '$1,500 - $2,500',
    features: [
      {
        feature: 'Full brand identity design',
        subFeatures: [
          'Logo + Variations',
          'Color palette',
          'Typography system',
          'Brand asset kit (mockups, templates)',
        ],
      },
      {
        feature: '3 to 5 Page website',
      },
      { feature: 'SEO' },
      { feature: 'CMS integration (optional)' },
      { feature: 'Copywriting for all pages' },
      { feature: '1 Training Session on Updating Content (optional)' },
    ],
  },
  {
    plan: 'Premium Package',
    icon: <PremiumIcon />,
    price: '$3,000 - $5,000+',
    features: [
      {
        feature: 'Everything in Growth Package',
      },
      {
        feature: '3 to 5+ Page website',
      },
      { feature: '2 Branded content samples post-launch' },
      {
        feature: '1 Month social media management',
        subFeatures: [
          'Content creation',
          'Page management',
          'Audience growth strategies',
        ],
      },
      { feature: 'Analytics report ' },
      { feature: '1 Month site maintenance' },
      { feature: 'Content calendar template' },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="mx-auto max-w-[1300px] space-y-12 px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-y-4 lg:gap-y-7"
      >
        <Chip
          icon={<MoneyBagIcon className="size-4 md:size-auto" />}
          label="TAILORED FOR YOUR BUDGET"
        />
        <h2>Pricing Plans</h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.plan}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={`flex max-h-fit flex-col items-center gap-8 self-end rounded-3xl bg-secondary px-6 py-[34px] sm:rounded-[40px] sm:p-[34px] ${
                index === 2
                  ? 'sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:justify-self-auto'
                  : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <div>{plan.icon}</div>
                <h5>{plan.plan}</h5>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2.5 text-[#1C1C1C]"
              >
                <span className="text-center text-lg font-medium">
                  Starting from
                </span>
                <span className="text-center text-3xl font-bold sm:text-4xl">
                  {plan.price}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex w-full justify-center"
              >
                <motion.div whileTap={{ scale: 0.95 }} className="w-full">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="mailto:revisiq@gmail.com"
                      className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full bg-primary py-3 text-lg font-semibold text-white transition-all duration-300 sm:py-3.5 sm:text-lg md:py-4 md:text-xl"
                    >
                      {/* Smooth Black Fill from Left */}
                      <div className="absolute inset-0 -translate-x-full transform rounded-full bg-black transition-transform duration-500 ease-out group-hover:translate-x-0" />

                      {/* Ripple Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{
                          scale: 2,
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{ duration: 0.6 }}
                      />

                      <span className="relative z-10">Choose plan</span>
                      <motion.div
                        className="relative z-10"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 3,
                        }}
                      >
                        <ArrowRightIcon className="size-8 transition-transform group-hover:translate-x-1 lg:size-5" />
                      </motion.div>

                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 2,
                        }}
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="w-full rounded-3xl bg-white p-[22px] sm:rounded-[40px]"
              >
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.7 },
                    },
                  }}
                  className="space-y-4 font-medium"
                >
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex gap-3.5 text-lg">
                        <div className="mt-1">
                          <TickIcon />
                        </div>
                        <div>
                          {feature.feature}
                          {feature.subFeatures && (
                            <motion.ul
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="mt-1 space-y-1 text-xs text-[#969696]"
                            >
                              {feature.subFeatures.map(
                                (subFeature, subIndex) => (
                                  <li key={`${subFeature}-${subIndex}`}>
                                    {subFeature}
                                  </li>
                                )
                              )}
                            </motion.ul>
                          )}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
