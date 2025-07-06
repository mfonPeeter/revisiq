'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, XIcon } from '../icons';

const socialLinks = [
  { icon: <XIcon />, route: '/' },
  { icon: <LinkedInIcon />, route: '/' },
  { icon: <InstagramIcon />, route: '/' },
];

const FooterWithCta = () => {
  return (
    <div className="mx-auto max-w-[1300px]">
      <div className="rounded-t-[40px] bg-secondary md:rounded-t-[80px]">
        {/* CTA */}
        <section id="contact">
          <div className="px-6 sm:px-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center rounded-t-[80px] py-10 sm:pb-14 sm:pt-16 md:pb-28 md:pt-20"
            >
              {/* Tablet and Desktop */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 655"
                fill="none"
                className="hidden h-auto w-[1024px] sm:block"
              >
                <motion.path
                  d="M0 614.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H775.542C791.171 0.419922 806.458 4.99803 819.514 13.5888L911.75 74.2768L987.973 124.429C1010.46 139.226 1024 164.34 1024 191.26V614.42C1024 636.511 1006.09 654.42 984 654.42H40C17.9086 654.42 0 636.511 0 614.42Z"
                  fill="white"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                />
                <foreignObject
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <div className="mx-auto flex h-full max-w-[640px] items-center justify-center">
                    <div>
                      <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mb-8 text-center text-[80px] font-medium leading-[80px] text-[#181818] md:text-left md:text-7xl md:leading-[76px]"
                      >
                        Ready to discuss your projects with us?
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          viewport={{ once: true }}
                          className="mt-4 inline-block max-w-[600px] text-3xl text-[#959595] md:ml-3 md:max-w-[500px] md:text-xl"
                        >
                          Let&apos;s talk on how we can craft innovations that
                          not only looks great but drives real growth.
                        </motion.span>
                      </motion.h2>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                      >
                        <motion.div whileTap={{ scale: 0.95 }}>
                          <motion.div
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href="mailto:revisiq@gmail.com"
                              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-[72px] py-7 font-semibold text-white transition-all duration-300 sm:text-2xl md:py-5 md:text-xl lg:py-4"
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

                              <motion.div
                                className="relative z-10"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  repeatDelay: 3,
                                }}
                              >
                                <Mail className="size-8 transition-transform group-hover:translate-x-1 lg:size-5" />
                              </motion.div>
                              <span className="relative z-10">Contact Us</span>

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
                    </div>
                  </div>
                </foreignObject>
              </svg>

              {/* Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="block rounded-3xl bg-white px-8 py-10 sm:hidden"
              >
                <div className="mx-auto flex h-full max-w-[700px] items-center justify-center">
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="mb-4 text-center text-3xl font-medium text-[#181818]"
                    >
                      Ready to discuss your projects with us?
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="mb-6 text-center text-lg font-medium text-[#959595]"
                    >
                      Let&apos;s talk on how we can craft innovations that not
                      only looks great but drives real growth.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="flex justify-center"
                    >
                      <motion.div whileTap={{ scale: 0.95 }}>
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href="mailto:revisiq@gmail.com"
                            className="group relative inline-flex w-full max-w-[275px] items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl"
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

                            <motion.div
                              className="relative z-10"
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatDelay: 3,
                              }}
                            >
                              <Mail className="size-4 transition-transform group-hover:translate-x-1" />
                            </motion.div>
                            <span className="relative z-10">Contact Us</span>

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
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-16 rounded-t-[40px] bg-[#3E0000] px-8 py-20 sm:p-20 md:space-y-[84px]"
          >
            <div className="flex justify-center">
              <div className="mx-auto space-y-16 md:max-w-[432px] md:space-y-[84px]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link href="/" className="flex justify-center self-center">
                    <Image
                      src="/svgs/revisiq-white-logo.svg"
                      alt="Revisiq white logo"
                      width={144}
                      height={42}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.2, delayChildren: 0.4 },
                    },
                  }}
                  className="mx-auto flex w-full flex-col gap-y-[42px]"
                >
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-[28px] font-medium text-white md:text-[34px] md:leading-[41px]"
                  >
                    Stay updated, subscribe to our newsletter.
                  </motion.p>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="h-[70px] w-full rounded-full border border-white bg-transparent py-1 pl-6 pr-20 text-base text-white placeholder:text-[#B28585] focus:border-transparent focus:outline-none focus:ring-1 focus:ring-primary md:pl-8 md:text-xl"
                    />
                    <button
                      aria-label="Send"
                      className="group absolute right-1 top-1/2 size-[60px] -translate-y-1/2 overflow-hidden rounded-full bg-white px-5 transition-all duration-300"
                    >
                      {/* Smooth Black Fill from Left */}
                      <div className="absolute inset-0 -translate-x-full transform rounded-full bg-primary transition-transform duration-300 ease-out group-hover:translate-x-0" />

                      {/* Ripple Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-black/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{
                          scale: 2,
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{ duration: 0.6 }}
                      />

                      <motion.div
                        className="relative z-10"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 3,
                        }}
                      >
                        <ArrowRight className="h-6 w-6 -rotate-45 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                      </motion.div>

                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 2,
                        }}
                      />
                    </button>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.15, delayChildren: 0.8 },
                    },
                  }}
                  className="flex justify-center gap-11"
                >
                  {socialLinks.map(({ icon, route }, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, scale: 0.5, y: 30, rotate: -180 },
                        visible: { opacity: 1, scale: 1, y: 0, rotate: 0 },
                      }}
                      transition={{
                        duration: 0.6,
                        type: 'spring',
                        bounce: 0.4,
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="relative"
                    >
                      <Link
                        href={route}
                        className="relative block overflow-hidden rounded-full p-2 transition-all duration-300 hover:bg-white/10"
                      >
                        <motion.div
                          whileHover={{
                            y: -2,
                            transition: { duration: 0.2 },
                          }}
                        >
                          {icon}
                        </motion.div>
                        {/* Ripple effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white/20"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{
                            scale: 1.5,
                            opacity: [0, 0.3, 0],
                            transition: { duration: 0.6 },
                          }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-5 font-medium text-[#B28585] md:flex-row md:gap-0"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 1.1 },
                  },
                }}
                className="flex flex-col gap-5 md:flex-row md:gap-12"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href="/privacy-policy"
                    className="transition-colors hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href="/terms-of-service"
                    className="transition-colors hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                </motion.div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                viewport={{ once: true }}
              >
                © Revisiq 2025. All Rights Reserved
              </motion.p>
            </motion.div>
          </motion.div>
        </footer>
      </div>
    </div>
  );
};

export default FooterWithCta;
