'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface FloatingParticlesProps {
  isScrolling: boolean;
}

const FloatingParticles = ({ isScrolling }: FloatingParticlesProps) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Group 1 - Appears together (0s delay) */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-primary/50"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isScrolling
            ? { opacity: 0.5, scale: 1 }
            : {
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.4, 1],
                y: [-15, 15, -15],
              }
        }
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 0,
        }}
      />

      <motion.div
        className="absolute left-[25%] top-[35%] h-1.5 w-1.5 rounded-full bg-yellow-400/60"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isScrolling
            ? { opacity: 0.6, scale: 1 }
            : {
                opacity: [0.6, 0.9, 0.6],
                scale: [1, 1.6, 1],
                x: [-10, 10, -10],
              }
        }
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 0,
        }}
      />

      <motion.div
        className="absolute right-[20%] top-[15%] h-1.5 w-1.5 rounded-full bg-blue-400/55"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isScrolling
            ? { opacity: 0.55, scale: 1 }
            : {
                opacity: [0.55, 0.8, 0.55],
                scale: [1, 1.8, 1],
                rotate: [0, 180, 360],
              }
        }
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 0,
        }}
      />

      <motion.div
        className="absolute left-[15%] top-[50%] h-1 w-1 rounded-full bg-purple-400/50"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isScrolling
            ? { opacity: 0.5, scale: 1 }
            : {
                opacity: [0.5, 0.7, 0.5],
                scale: [1, 2, 1],
                y: [-12, 12, -12],
              }
        }
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 0,
        }}
      />

      <motion.div
        className="absolute right-[15%] top-[65%] h-2 w-2 rounded-full bg-orange-400/45"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isScrolling
            ? { opacity: 0.45, scale: 1 }
            : {
                opacity: [0.45, 0.7, 0.45],
                scale: [1, 1.5, 1],
                x: [-8, 8, -8],
                y: [-8, 8, -8],
              }
        }
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 0,
        }}
      />

      {/* Group 2 - Appears together (1s delay) */}
      <motion.div
        className="absolute right-[35%] top-[25%] h-1.5 w-1.5 rounded-full bg-teal-400/50"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isScrolling
            ? { opacity: 0.5, scale: 1 }
            : {
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.7, 1],
                rotate: [0, -180, -360],
              }
        }
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        className="absolute right-[25%] top-[45%] h-1 w-1 rounded-full bg-pink-400/55"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isScrolling
            ? { opacity: 0.55, scale: 1 }
            : {
                opacity: [0.55, 0.8, 0.55],
                scale: [1, 2.2, 1],
                y: [-20, 20, -20],
              }
        }
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        className="absolute left-[20%] top-[75%] h-1.5 w-1.5 rounded-full bg-green-400/50"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isScrolling
            ? { opacity: 0.5, scale: 1 }
            : {
                opacity: [0.5, 0.7, 0.5],
                scale: [1, 1.6, 1],
                x: [-15, 15, -15],
              }
        }
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Sparkle Group - Appears together (0.5s delay) */}
      <motion.div
        className="absolute left-[40%] top-[30%] text-yellow-300/70"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isScrolling
            ? { opacity: 0.7, scale: 1 }
            : {
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.4, 1],
                rotate: [0, 360, 0],
              }
        }
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <Sparkles className="h-3 w-3" />
      </motion.div>

      <motion.div
        className="absolute right-[10%] top-[55%] text-blue-300/65"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isScrolling
            ? { opacity: 0.65, scale: 1 }
            : {
                opacity: [0.65, 0.9, 0.65],
                scale: [1, 1.6, 1],
                rotate: [0, -360, 0],
              }
        }
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <Sparkles className="h-2.5 w-2.5" />
      </motion.div>

      <motion.div
        className="absolute left-[35%] top-[70%] text-purple-300/60"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isScrolling
            ? { opacity: 0.6, scale: 1 }
            : {
                opacity: [0.6, 0.8, 0.6],
                scale: [1, 1.3, 1],
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
              }
        }
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <Sparkles className="h-2 w-2" />
      </motion.div>

      {/* Gradient Orbs - Background depth */}
      <motion.div
        className="absolute left-[5%] top-[40%] h-24 w-24 rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/20 blur-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isScrolling
            ? { opacity: 0.2, scale: 1 }
            : {
                opacity: [0.2, 0.35, 0.2],
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }
        }
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        className="from-pink-200/18 to-orange-200/18 absolute right-[8%] top-[60%] h-20 w-20 rounded-full bg-gradient-to-r blur-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isScrolling
            ? { opacity: 0.18, scale: 1 }
            : {
                opacity: [0.18, 0.3, 0.18],
                scale: [1, 1.4, 1],
                rotate: [360, 0, 360],
                y: [-10, 10, -10],
              }
        }
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  );
};

export default FloatingParticles;
