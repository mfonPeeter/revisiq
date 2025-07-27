'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';

import { ArrowRightIcon } from '../icons';

const ButtonLink = ({
  label,
  ...props
}: ComponentPropsWithoutRef<typeof Link> & { label: string }) => {
  return (
    <Link
      {...props}
      className={`group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden whitespace-nowrap bg-primary px-[72px] text-base font-semibold text-white transition-all duration-300 sm:py-3.5 sm:text-lg md:py-4 md:text-xl ${props.className ?? 'rounded-2xl py-2.5 sm:w-auto sm:rounded-[20px]'}`}
    >
      {/* Smooth Black Fill from Left */}
      <div className="absolute inset-0 -translate-x-full transform rounded-2xl bg-black transition-transform duration-500 ease-out group-hover:translate-x-0 sm:rounded-[20px]" />

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

      <span className="relative z-10">{label}</span>
      <motion.div
        className="relative z-10"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 3,
        }}
      >
        <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
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
  );
};

export default ButtonLink;
