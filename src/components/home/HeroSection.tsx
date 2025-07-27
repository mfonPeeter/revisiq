'use client';

import type React from 'react';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';
import ImageCarousel from '../ui/image-carousel';
import { RocketIcon } from '../icons';
import FloatingParticles from '../ui/floating-particles';

const carouselImages = [
  {
    src: '/images/hero/project-1.png',
    alt: 'Project 1',
  },
  {
    src: '/images/hero/project-2.png',
    alt: 'Project 2',
  },
  {
    src: '/images/hero/project-3.png',
    alt: 'Project 3',
  },
];

const HeroSection = () => {
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
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -40]);

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
      className="relative overflow-hidden px-4 pb-6 pt-40 sm:pl-14 sm:pr-12 sm:pt-36"
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
        <div className="grid grid-cols-1 place-items-center gap-12 md:grid-cols-2 md:gap-8 lg:gap-14 xl:gap-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="relative flex flex-col items-center md:items-start"
            style={{ y: y1 }}
          >
            <div className="mb-6 flex flex-col items-center md:items-start lg:mb-9">
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
                    x: [0, 0, 200],
                    y: [0, 0, -100],
                    rotate: [0, 0, 20],
                    opacity: [1, 1, 0],
                  }}
                  transition={{
                    delay: 2,
                    duration: 2, // Flight duration
                    repeat: Infinity,
                    times: [0, 0.5, 1],
                    repeatType: 'loop',
                    ease: 'easeInOut',
                    repeatDelay: 1, // Small delay before next launch
                  }}
                >
                  <RocketIcon />
                </motion.div>
                <span className="relative z-10">FAST GROWING AGENCY</span>
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
                className="text-center md:max-w-[570px] md:text-left"
              >
                {/* Split text animation */}
                {'Fueling Brands with Next-Level Design & Tech'
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

          {/* Professional Image Section with Animated Corners */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: 'spring',
              bounce: 0.2,
            }}
            className="relative"
            style={{ y: y2 }}
          >
            {/* Main Image Container - Clean and Professional */}
            <motion.div
              className="relative rounded-3xl bg-[#FAF6F6] p-4 sm:rounded-[40px] sm:p-6"
              whileHover={{
                shadow: '0 12px 40px rgb(0,0,0,0.12)',
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative z-10 overflow-hidden rounded-2xl sm:rounded-3xl">
                <ImageCarousel images={carouselImages} duration={4000} />
              </div>

              {/* Animated Yellow Corner Decoration */}
              <motion.div
                className="absolute -right-2 -top-2 size-6 rounded-full shadow-lg"
                style={{
                  background:
                    'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)',
                }}
                animate={
                  isScrolling
                    ? {} // Still during scroll
                    : {
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          '0 4px 15px rgba(251, 191, 36, 0.4)',
                          '0 8px 25px rgba(251, 191, 36, 0.6)',
                          '0 4px 15px rgba(251, 191, 36, 0.4)',
                        ],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
              >
                {/* Inner glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400"
                  animate={
                    isScrolling
                      ? {}
                      : {
                          opacity: [0.8, 1, 0.8],
                          scale: [0.8, 1, 0.8],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
              </motion.div>

              {/* Animated Blue Corner Decoration */}
              <motion.div
                className="absolute -bottom-2 -left-2 size-4 rounded-full shadow-lg"
                style={{
                  background:
                    'linear-gradient(135deg, #60a5fa, #3b82f6, #1d4ed8)',
                }}
                animate={
                  isScrolling
                    ? {} // Still during scroll
                    : {
                        scale: [1, 1.4, 1],
                        boxShadow: [
                          '0 4px 15px rgba(96, 165, 250, 0.4)',
                          '0 8px 25px rgba(96, 165, 250, 0.6)',
                          '0 4px 15px rgba(96, 165, 250, 0.4)',
                        ],
                      }
                }
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                {/* Inner glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 to-purple-400"
                  animate={
                    isScrolling
                      ? {}
                      : {
                          opacity: [0.7, 1, 0.7],
                          scale: [0.9, 1.1, 0.9],
                        }
                  }
                  transition={{
                    duration: 1.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                    delay: 1.5,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default HeroSection;
