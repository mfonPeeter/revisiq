'use client';

import type React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  duration?: number;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  duration = 4000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const clearIntervals = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  }, []);

  const startCarousel = useCallback(() => {
    clearIntervals();
    setProgress(0);

    let progressValue = 0;
    progressRef.current = setInterval(() => {
      progressValue += 100 / (duration / 50);
      setProgress(progressValue);
      if (progressValue >= 100) {
        if (progressRef.current) clearInterval(progressRef.current);
      }
    }, 50);

    intervalRef.current = setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, duration);
  }, [duration, clearIntervals, images.length]);

  useEffect(() => {
    startCarousel();
    return clearIntervals;
  }, [currentIndex, startCarousel, clearIntervals]);

  const handleIndicatorClick = useCallback(
    (index: number) => {
      if (index !== currentIndex) {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
      }
    },
    [currentIndex]
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
    }),
    center: {
      x: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
    }),
  };

  const slideTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.5,
  };

  return (
    <div className={`relative ${className}`}>
      {/* Progress Indicators */}
      <div className="mx-auto flex gap-1.5 px-4 pb-8 sm:gap-3 sm:px-8 md:w-[300px] md:px-0 lg:w-[400px] xl:w-[444px]">
        {images.map((_, index) => (
          <div
            key={index}
            className="relative h-1.5 flex-1 cursor-pointer overflow-hidden rounded-full bg-red-200"
            onClick={() => handleIndicatorClick(index)}
          >
            <motion.div
              className="absolute inset-0 origin-left rounded-full bg-red-500"
              animate={{
                scaleX:
                  index < currentIndex
                    ? 1
                    : index === currentIndex
                      ? progress / 100
                      : 0,
              }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>
        ))}
      </div>

      {/* Image Container - Keep original structure */}
      <div className="relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src || '/placeholder.svg'}
              alt={images[currentIndex].alt}
              width={576}
              height={466}
              className="h-auto w-full"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Invisible placeholder to maintain container height */}
        <Image
          src={images[0].src || '/placeholder.svg'}
          alt=""
          width={576}
          height={466}
          className="h-auto w-full opacity-0"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
