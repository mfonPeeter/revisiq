import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail } from 'lucide-react';
import { RocketIcon } from '../icons';

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.section
      ref={heroRef}
      className="relative overflow-hidden pb-20 pt-36"
      style={{
        opacity: heroOpacity,
        scale: heroScale,
      }}
    >
      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="mb-9">
              <div className="mb-[26px] flex w-fit items-center gap-x-2 rounded-3xl bg-[#FFF7DD] px-4 py-2 font-medium text-[#C77F16]">
                <RocketIcon />
                Top 10% Agencies 2025
              </div>
              <h1 className="max-w-[570px] leading-[73px]">
                Fueling Brands with Next-Level Design &amp; Tech
              </h1>
            </div>
            <Link
              href="mailto:revisiq@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-xl font-semibold text-white transition-all duration-300 hover:bg-black"
            >
              <Mail className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <div className="rounded-[40px] bg-[#FAF6F6] px-8 py-[34px]">
              <div className="absolute left-1/2 top-6 flex w-3/4 -translate-x-1/2 gap-3">
                <div className="h-1.5 flex-1 rounded-full bg-red-500"></div>
                <div className="h-1.5 flex-1 rounded-full bg-zinc-300"></div>
                <div className="h-1.5 flex-1 rounded-full bg-zinc-300"></div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="aspect-square transform rounded-lg border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"></div>
                <div className="aspect-square transform rounded-lg border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"></div>
                <div className="aspect-square transform rounded-lg border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"></div>
                <div className="aspect-square transform rounded-lg border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-red-500/10 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 h-16 w-16 rounded-full bg-red-500/10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
