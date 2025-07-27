'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BoldHandLoveIcon } from '../icons';
import Chip from '../ui/chip';

const BenefitsSection = () => {
  return (
    <section>
      <div className="relative mx-auto max-w-[800px] space-y-12 px-5 lg:max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-y-4 lg:gap-y-7"
        >
          <Chip
            icon={<BoldHandLoveIcon className="size-4 md:size-auto" />}
            label="WE'RE HERE FOR YOU"
          />
          <h2>Benefits for You</h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-4 lg:px-0"
        >
          {/* Card 1 - Strategic Partner */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 331 585"
              fill="none"
              className="h-auto w-full"
              style={{
                maxWidth: '331px',
                height: 'auto',
                shapeRendering: 'geometricPrecision',
                imageRendering: 'crisp-edges',
              }}
            >
              <defs>
                <linearGradient
                  id="paint0_linear_103_339"
                  x1="-8.00001"
                  y1="-6.08007"
                  x2="331"
                  y2="584.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F6FAF7" />
                  <stop offset="1" stopColor="#EBFFF0" />
                </linearGradient>
              </defs>
              <path
                d="M0 544.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H255.529C267.947 0.419922 279.661 6.18729 287.233 16.0296L322.703 62.1358C328.083 69.1285 331 77.7036 331 86.5262V544.42C331 566.511 313.091 584.42 291 584.42H40C17.9086 584.42 0 566.511 0 544.42Z"
                fill="url(#paint0_linear_103_339)"
              />
              <foreignObject
                x="0"
                y="0"
                width="331"
                height="585"
                style={{
                  width: '331px',
                  height: '585px',
                  overflow: 'visible',
                }}
              >
                <div
                  style={{
                    width: '331px',
                    height: '585px',
                    padding: '36px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{
                      width: 'fit-content',
                      borderRadius: '50%',
                      backgroundColor: '#2EB853',
                      padding: '20px',
                      marginBottom: '32px',
                    }}
                  >
                    <Image
                      src="/svgs/revisiq-plain-white-logo.svg"
                      alt="Revisiq logo without text"
                      width={37}
                      height={41}
                      className="transition-transform duration-300 ease-out group-hover:scale-110"
                      style={{
                        transformOrigin: 'center',
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-3xl font-semibold sm:text-3xl"
                  >
                    <p className="leading-[49px]">
                      You&apos;re not just getting a service provider—
                      you&apos;re gaining a strategic partner committed to your
                      success.
                    </p>
                  </motion.div>
                </div>
              </foreignObject>
            </svg>
          </motion.div>

          {/* Card 2 - End-to-End Support */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 306 435"
              fill="none"
              className="h-auto w-full"
              style={{
                maxWidth: '306px',
                height: 'auto',
                shapeRendering: 'geometricPrecision',
                imageRendering: 'crisp-edges',
              }}
            >
              <defs>
                <linearGradient
                  id="paint0_linear_103_348"
                  x1="18"
                  y1="-25.0801"
                  x2="273"
                  y2="426.92"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFFCF3" />
                  <stop offset="1" stopColor="#FFF3C5" />
                </linearGradient>
              </defs>
              <path
                d="M0 394.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H237.351C248.264 0.419922 258.704 4.87893 266.249 12.7633L294.898 42.6982C302.023 50.1429 306 60.0501 306 70.3549V394.42C306 416.511 288.091 434.42 266 434.42H40C17.9086 434.42 0 416.511 0 394.42Z"
                fill="url(#paint0_linear_103_348)"
              />
              <foreignObject
                x="0"
                y="0"
                width="306"
                height="435"
                style={{
                  width: '306px',
                  height: '435px',
                  overflow: 'visible',
                }}
              >
                <div
                  style={{
                    width: '306px',
                    height: '435px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-8 px-9 pt-11"
                  >
                    <h3 className="mb-5 text-3xl">End-to-End Support</h3>
                    <p className="text-lg font-medium text-[#AA8600] lg:text-base">
                      We guide you from idea to launch and beyond, ensuring a
                      smooth and scalable growth path.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    style={{
                      marginTop: 'auto',
                      display: 'flex',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src="/images/benefits/end-to-end-support-img.png"
                      alt="End to End Support"
                      width={252}
                      height={236}
                      className="transition-transform duration-300 ease-out group-hover:scale-105"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        transformOrigin: 'center',
                      }}
                    />
                  </motion.div>
                </div>
              </foreignObject>
            </svg>
          </motion.div>

          {/* Card 3 - Top Tech Talent */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group self-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 306 435"
              fill="none"
              className="h-auto w-full"
              style={{
                maxWidth: '306px',
                height: 'auto',
                shapeRendering: 'geometricPrecision',
                imageRendering: 'crisp-edges',
              }}
            >
              <defs>
                <linearGradient
                  id="paint0_linear_103_359"
                  x1="1.9087e-06"
                  y1="11.4199"
                  x2="327.5"
                  y2="445.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FAF5FF" />
                  <stop offset="1" stopColor="#F7EEFF" />
                </linearGradient>
              </defs>
              <path
                d="M0 394.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H237.351C248.264 0.419922 258.704 4.87893 266.249 12.7633L294.898 42.6982C302.023 50.1429 306 60.0502 306 70.3549V394.42C306 416.511 288.091 434.42 266 434.42H40C17.9086 434.42 0 416.511 0 394.42Z"
                fill="url(#paint0_linear_103_359)"
              />
              <foreignObject
                x="0"
                y="0"
                width="306"
                height="435"
                style={{
                  width: '306px',
                  height: '435px',
                  overflow: 'visible',
                }}
              >
                <div
                  style={{
                    width: '306px',
                    height: '435px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="px-9 pt-11"
                  >
                    <h3 className="mb-5 text-3xl">Access to Top Tech Talent</h3>
                    <p className="text-lg font-medium text-[#836B9B] lg:text-base">
                      Revisiq provides highly skilled engineers, designers,
                      content strategists and social media managers tailored to
                      your needs.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    style={{
                      marginTop: 'auto',
                      display: 'flex',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src="/images/benefits/top-talent-img.png"
                      alt="Top Talents"
                      width={247}
                      height={231}
                      className="transition-transform duration-300 ease-out group-hover:scale-105"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        transformOrigin: 'center',
                      }}
                    />
                  </motion.div>
                </div>
              </foreignObject>
            </svg>
          </motion.div>

          {/* Card 4 - Flexible Engagement */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group justify-self-auto sm:col-span-full sm:justify-self-center lg:col-auto lg:justify-self-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 306 511"
              fill="none"
              className="h-auto w-full"
              style={{
                maxWidth: '306px',
                height: 'auto',
                shapeRendering: 'geometricPrecision',
                imageRendering: 'crisp-edges',
              }}
            >
              <defs>
                <linearGradient
                  id="paint0_linear_103_367"
                  x1="-8.5"
                  y1="-25.0801"
                  x2="306"
                  y2="510.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EEF7FF" />
                  <stop offset="1" stopColor="#D4EAFF" />
                </linearGradient>
              </defs>
              <path
                d="M0 470.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H235.426C247.455 0.419922 258.845 5.83331 266.441 15.1604L297.015 52.7014C302.827 59.837 306 68.7582 306 77.9609V470.42C306 492.511 288.091 510.42 266 510.42H40C17.9086 510.42 0 492.511 0 470.42Z"
                fill="url(#paint0_linear_103_367)"
              />
              <foreignObject
                x="0"
                y="0"
                width="306"
                height="511"
                style={{
                  width: '306px',
                  height: '511px',
                  overflow: 'visible',
                }}
              >
                <div
                  style={{
                    width: '306px',
                    height: '511px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="px-9 pt-11"
                  >
                    <h3 className="mb-5 text-3xl">
                      Flexible Engagement Models
                    </h3>
                    <p className="text-lg font-medium text-[#8D9DAC] lg:text-base">
                      We adapt to your needs—whether you need a full build
                      website design, branding, or a support team to enhance
                      your existing website.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    style={{
                      marginTop: 'auto',
                      display: 'flex',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        maxWidth: '338px',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Image
                        src="/images/benefits/flexible-engagment-img.png"
                        alt="Handshake"
                        width={338}
                        height={225}
                        className="transition-transform duration-300 ease-out group-hover:scale-105"
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          transformOrigin: 'center',
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </foreignObject>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
