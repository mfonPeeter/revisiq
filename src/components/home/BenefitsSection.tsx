import Image from 'next/image';
import { motion } from 'framer-motion';
import { BoldHandLoveIcon } from '../icons';

const BenefitsSection = () => {
  return (
    <section>
      <div className="container relative mx-auto space-y-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-y-7"
        >
          <div className="flex w-fit items-center gap-x-2 rounded-3xl border border-[#E1E1E1] px-4 py-2 text-sm font-medium text-[#898989]">
            <BoldHandLoveIcon />
            WE&apos;RE HERE FOR YOU
          </div>
          <h2 className="mb-2 text-4xl font-bold text-zinc-900 md:text-5xl">
            Benefits for You
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 331 585"
              fill="none"
              className="h-auto w-full"
            >
              <path
                d="M0 544.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H255.529C267.947 0.419922 279.661 6.18729 287.233 16.0296L322.703 62.1358C328.083 69.1285 331 77.7036 331 86.5262V544.42C331 566.511 313.091 584.42 291 584.42H40C17.9086 584.42 0 566.511 0 544.42Z"
                fill="url(#paint0_linear_103_339)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_103_339"
                  x1="-8.00001"
                  y1="-6.08007"
                  x2="331"
                  y2="584.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F6FAF7" />
                  <stop offset="1" stop-color="#EBFFF0" />
                </linearGradient>
              </defs>

              <foreignObject
                x="0"
                y="0"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/1999/xhtml"
              >
                <div className="space-y-8 px-9 py-[90px]">
                  <div className="w-fit rounded-full bg-[#2EB853] p-5">
                    <Image
                      src="/svgs/revisiq-plain-white-logo.svg"
                      alt="Revisiq logo without text"
                      width={37}
                      height={41}
                    />
                  </div>
                  <div className="text-3xl font-semibold">
                    <p>
                      You&apos;re not just getting a service provider—
                      you&apos;re gaining a strategic partner committed to your
                      success.
                    </p>
                  </div>
                </div>
              </foreignObject>
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 306 435"
              fill="none"
              className="h-auto w-full"
            >
              <path
                d="M0 394.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H237.351C248.264 0.419922 258.704 4.87893 266.249 12.7633L294.898 42.6982C302.023 50.1429 306 60.0501 306 70.3549V394.42C306 416.511 288.091 434.42 266 434.42H40C17.9086 434.42 0 416.511 0 394.42Z"
                fill="url(#paint0_linear_103_348)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_103_348"
                  x1="18"
                  y1="-25.0801"
                  x2="273"
                  y2="426.92"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFFCF3" />
                  <stop offset="1" stop-color="#FFF3C5" />
                </linearGradient>
              </defs>

              <foreignObject
                x="0"
                y="0"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/1999/xhtml"
              >
                <div className="mb-8 px-9 pt-11">
                  <h3 className="mb-5">End-to-End Support</h3>
                  <p className="font-medium text-[#AA8600]">
                    We guide you from idea to launch and beyond, ensuring a
                    smooth and scalable growth path.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/benefits/end-to-end-support-img.png"
                    alt="End to End Support"
                    width={252}
                    height={236}
                  />
                </div>
              </foreignObject>
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className='self-end'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 306 435"
              fill="none"
              className="h-auto w-full"
            >
              <path
                d="M0 394.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H237.351C248.264 0.419922 258.704 4.87893 266.249 12.7633L294.898 42.6982C302.023 50.1429 306 60.0502 306 70.3549V394.42C306 416.511 288.091 434.42 266 434.42H40C17.9086 434.42 0 416.511 0 394.42Z"
                fill="url(#paint0_linear_103_359)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_103_359"
                  x1="1.9087e-06"
                  y1="11.4199"
                  x2="327.5"
                  y2="445.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FAF5FF" />
                  <stop offset="1" stop-color="#F7EEFF" />
                </linearGradient>
              </defs>

              <foreignObject
                x="0"
                y="0"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/1999/xhtml"
              >
                <div className="px-9 py-11">
                  <h3 className="mb-5">Access to Top Tech Talent</h3>
                  <p className="font-medium text-[#836B9B]">
                    Revisiq provides highly skilled engineers, designers,
                    content strategists and social media managers tailored to
                    your needs.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/benefits/top-talent-img.png"
                    alt="Top Talents"
                    width={247}
                    height={231}
                  />
                </div>
              </foreignObject>
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 306 511"
              fill="none"
              className="h-auto w-full"
            >
              <path
                d="M0 470.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H235.426C247.455 0.419922 258.845 5.83331 266.441 15.1604L297.015 52.7014C302.827 59.837 306 68.7582 306 77.9609V470.42C306 492.511 288.091 510.42 266 510.42H40C17.9086 510.42 0 492.511 0 470.42Z"
                fill="url(#paint0_linear_103_367)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_103_367"
                  x1="-8.5"
                  y1="-25.0801"
                  x2="306"
                  y2="510.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EEF7FF" />
                  <stop offset="1" stop-color="#D4EAFF" />
                </linearGradient>
              </defs>

              <foreignObject
                x="0"
                y="0"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/1999/xhtml"
              >
                <div className="px-9 pt-11">
                  <h3 className="mb-5">Flexible Engagement Models</h3>
                  <p className="font-medium text-[#8D9DAC]">
                    We adapt to your needs—whether you need a full build website
                    design, branding, or a support team to enhance your existing
                    website.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/benefits/flexible-engagment-img.png"
                    alt="Handshake"
                    width={338}
                    height={225}
                  />
                </div>
              </foreignObject>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
