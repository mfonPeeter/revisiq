'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import {
  LotusWineryIcon,
  GoviralIcon,
  BookWeenieIcon,
  GreenYieldsIcon,
  EljeyIcon,
} from '../icons';

const clientLogos = [
  {
    client: 'Lotus Winery',
    icon: <LotusWineryIcon className="size-16 opacity-60 md:size-auto" />,
  },
  {
    client: 'Goviral',
    icon: <GoviralIcon className="size-24 opacity-60 md:size-auto" />,
  },
  {
    client: 'Book Weenie',
    icon: <BookWeenieIcon className="size-24 opacity-60 md:size-auto" />,
  },
  {
    client: 'Green Yields',
    icon: <GreenYieldsIcon className="size-24 opacity-60 md:size-auto" />,
  },
  {
    client: 'Eljey Enterprise',
    icon: <EljeyIcon className="size-24 opacity-60 md:size-auto" />,
  },
];

const ClientsLogoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [x, setX] = useState(0);

  // Measure the width of one set of logos
  useEffect(() => {
    if (containerRef.current) {
      // Get the width of just one set of logos (divide by 4 since we have 4 sets)
      setWidth(containerRef.current.scrollWidth / 4);
    }
  }, []);

  // Animate the scroll with precise reset timing
  useAnimationFrame((t, delta) => {
    setX((prev) => {
      const next = prev - delta * 0.06; // Adjust speed here

      // Reset when exactly one set has moved out, ensuring seamless transition
      if (next <= -width) {
        return next + width; // This ensures perfect alignment
      }
      return next;
    });
  });

  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto">
        <div className="relative overflow-hidden">
          {/* Fade effect on edges */}
          <div className="absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"></div>

          {/* Infinite scrolling logos */}
          <div className="flex justify-center overflow-hidden">
            <motion.div
              ref={containerRef}
              className="flex items-center gap-x-16 whitespace-nowrap sm:gap-x-28"
              style={{ x }}
            >
              {/* Quadruple the logos for extra smooth infinite scroll */}
              {[
                ...clientLogos,
                ...clientLogos,
                ...clientLogos,
                ...clientLogos,
              ].map(({ client, icon }, index) => (
                <div key={`${client}-${index}`} className="flex-shrink-0">
                  {icon}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsLogoSection;
