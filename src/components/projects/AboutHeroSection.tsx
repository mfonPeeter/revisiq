'use client';

import type React from 'react';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';

import FloatingParticles from '@/components/ui/floating-particles';
import { StarsIcon } from '@/components/icons';

const AboutHeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Gentle parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);

      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  return (
    <motion.header
      ref={heroRef}
      className="relative overflow-hidden px-4 pb-6 pt-40 sm:px-8 sm:pt-36"
    >
      {/* Floating Particles */}
      <FloatingParticles isScrolling={isScrolling} />

      {/* More visible grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <motion.div
          className="h-full w-full"
          style={{
            backgroundImage: `
        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
      `,
            backgroundSize: '80px 80px',
          }}
          animate={
            isScrolling
              ? {}
              : {
                  backgroundPosition: ['0px 0px', '80px 80px', '0px 0px'],
                }
          }
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px]">
        <div className="">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="relative flex flex-col items-center"
            style={{ y: y1 }}
          >
            <div className="mb-6 flex flex-col items-center lg:mb-9">
              {/* Beautiful Chip Animation - Restored */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -90 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
                whileHover={{
                  scale: 1.05,
                }}
                className="mb-3 flex w-fit items-center gap-x-2 overflow-hidden rounded-3xl border border-[#FFEBAC] bg-[#FFF7DD] px-3 py-1.5 text-sm font-medium text-[#C77F16] lg:mb-[26px] lg:px-4 lg:py-2 lg:text-base"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1], // Scale up slightly, then back
                    opacity: [1, 0.8, 1], // Optional: slight fade to enhance effect
                  }}
                  transition={{
                    duration: 1.5, // Pulse duration
                    repeat: Infinity, // Infinite loop
                    ease: 'easeInOut',
                  }}
                >
                  <StarsIcon />
                </motion.div>

                <span className="relative z-10">
                  CREATIVITY TAILORED TO YOUR TASTE
                </span>
                {/* Sparkle Effects - Paused during scroll */}
                <motion.div
                  className="absolute -right-1 -top-1"
                  animate={
                    isScrolling
                      ? {}
                      : {
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1,
                  }}
                >
                  <Sparkles className="size-3 text-yellow-400" />
                </motion.div>
              </motion.div>

              {/* Beautiful Text Animation - Restored */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="text-center md:max-w-[570px]"
              >
                {/* Split text animation */}
                {'Bold Brands. Brilliant Results'.split(' ').map((word, i) => (
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
            </div>

            {/* Button with Scroll-Aware Animations */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                type: 'spring',
                bounce: 0.3,
              }}
            >
              <motion.div whileTap={{ scale: 0.95 }}>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="mailto:revisiq@gmail.com"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-all duration-300 lg:px-7 lg:py-4 lg:text-xl"
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
                      animate={isScrolling ? {} : { rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                      }}
                    >
                      <Mail className="size-4 transition-transform group-hover:translate-x-1 lg:size-5" />
                    </motion.div>
                    <span className="relative z-10">Contact Us</span>

                    {/* Shine Effect - Paused during scroll */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={
                        isScrolling
                          ? {}
                          : {
                              x: ['-100%', '100%'],
                            }
                      }
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
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default AboutHeroSection;
