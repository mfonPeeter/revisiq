'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { BoldHandStarsIcon } from '../icons';
import Chip from '../ui/chip';

const TestimonialSection = () => {
  const testimonials = [
    {
      rating: 5.0,
      text: "Exceptional service and creativity! From the initial concept to the final product, their team was dedicated, responsive, and incredibly talented. They took our project to the next level, and we couldn't be happier with the results.",
      author: 'Peter Chandler',
      company: 'Acme Inc.',
    },
    {
      rating: 5.0,
      text: 'Exceptional service and creativity! From the initial concept to the final product, their team was dedicated, responsive, and incredibly talented.',
      author: 'Sarah Johnson',
      company: 'Globex Corp',
    },
    {
      rating: 5.0,
      text: "Exceptional service and creativity! From the initial concept to the final product, their team was dedicated, responsive, and incredibly talented. They took our project to the next level, and we couldn't be happier with the results.",
      author: 'Michael Chen',
      company: 'TechVision',
    },
    {
      rating: 5.0,
      text: "Exceptional service and creativity! From the initial concept to the final product, their team was dedicated, responsive, and incredibly talented. They took our project to the next level, and we couldn't be happier with the results.",
      author: 'Emma Rodriguez',
      company: 'Innovate Labs',
    },
  ];

  return (
    <section className="relative mx-auto max-w-[1770px] overflow-hidden">
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-red-500/5 blur-[120px]"></div>
      <div className="relative space-y-12 lg:pl-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-y-4 px-5 lg:gap-y-7"
        >
          <Chip
            icon={<BoldHandStarsIcon className="size-4 md:size-auto" />}
            label=" GUARANTEED SATISFACTION"
          />
          <h2>Our Client&apos;s Feedback</h2>
        </motion.div>
        <div className="flex size-full items-end">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative hidden size-full min-h-[635px] max-w-[380px] lg:block"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-[517px] w-[337px]"
            >
              <Image
                src="/images/clients-feedback/generic-client.png"
                alt="Generic Client"
                width={337}
                height={517}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="absolute -bottom-0"
            >
              <span className="flex items-center gap-1.5 text-6xl font-medium text-[#211616]">
                4.9
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </span>
              <span className="inline-block max-w-[200px] text-lg font-medium text-[#282828]">
                Average rating from our clients
              </span>
            </motion.div>
          </motion.div>
          {/* Infinite testimonial slider with fade effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden"
          >
            {/* Fade effect on edges */}
            <div className="absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"></div>
            <div className="flex overflow-hidden">
              <div className="animate-testimonial-scroll-smooth flex">
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div key={index} className="mx-4 lg:mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 392 585"
                        className="h-[480px] w-[320px] lg:h-[550px] lg:w-[394px]"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M0 544.42V40.4199C0 18.3285 17.9087 0.419922 40.0001 0.419922H308.276C319.531 0.419922 330.264 5.16113 337.844 13.4804L381.568 61.47C388.28 68.8368 392 78.4437 392 88.4095V544.42C392 566.511 374.091 584.42 352 584.42H40C17.9086 584.42 0 566.511 0 544.42Z"
                          fill="#FFF9F9"
                        />
                        <foreignObject
                          x="0"
                          y="0"
                          width="100%"
                          height="100%"
                          xmlns="http://www.w3.org/1999/xhtml"
                        >
                          <div className="flex h-full flex-col space-y-14 px-10 py-9">
                            <div className="flex items-center gap-x-3">
                              <span className="text-[28px] font-semibold text-black">
                                {testimonial.rating.toFixed(1)}
                              </span>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="mb-2 text-xl font-medium text-[#535353]">
                              {testimonial.text}
                            </p>
                            <div className="flex-grow" />
                            <div className="mt-auto flex items-center gap-3">
                              <div className="flex size-12 items-center justify-center rounded-full bg-[#D1D1D1] font-bold text-white">
                                {testimonial.author.charAt(0)}
                              </div>
                              <div>
                                <p className="text-lg font-semibold text-[#777777]">
                                  {testimonial.author}
                                </p>
                                <p className="text-sm font-medium text-[#FF8989]">
                                  {testimonial.company}
                                </p>
                              </div>
                            </div>
                          </div>
                        </foreignObject>
                      </svg>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
