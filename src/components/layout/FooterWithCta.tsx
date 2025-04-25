import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { ArrowRight, Mail } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, XIcon } from '../icons';

const socialLinks = [
  { icon: <XIcon />, route: '/' },
  { icon: <LinkedInIcon />, route: '/' },
  { icon: <InstagramIcon />, route: '/' },
];

const FooterWithCta = () => {
  return (
    <div>
      <div className="container mx-auto bg-secondary">
        <section id="contact">
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center rounded-t-[80px] pb-28 pt-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1024"
                height="655"
                viewBox="0 0 1024 655"
                fill="none"
              >
                <path
                  d="M0 614.42V40.4199C0 18.3285 17.9086 0.419922 40 0.419922H775.542C791.171 0.419922 806.458 4.99803 819.514 13.5888L911.75 74.2768L987.973 124.429C1010.46 139.226 1024 164.34 1024 191.26V614.42C1024 636.511 1006.09 654.42 984 654.42H40C17.9086 654.42 0 636.511 0 614.42Z"
                  fill="white"
                />

                <foreignObject
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <div className="mx-auto flex h-full max-w-[700px] items-center justify-center">
                    <div>
                      <h2 className="mb-8 text-7xl font-medium text-[#181818]">
                        Ready to discuss your projects with us?
                        <span className="ml-3 inline-block max-w-[500px] text-xl text-[#959595]">
                          Let&apos;s talk on how we can craft innovations that
                          not only looks great but drives real growth.
                        </span>
                      </h2>
                      <div className="flex justify-center">
                        <Link
                          href="mailto:revisiq@gmail.com"
                          className="group inline-flex items-center gap-3 rounded-[20px] bg-primary px-[72px] py-4 text-xl font-semibold text-white transition-all duration-300 hover:bg-black"
                        >
                          <Mail className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </motion.div>
          </div>
        </section>

        <footer>
          <div className="space-y-[84px] rounded-t-[40px] bg-[#3E0000] p-20">
            <div className="flex justify-center">
              <div className="mx-auto max-w-[432px] space-y-[84px]">
                <Link href="/" className="flex justify-center self-center">
                  <Image
                    src="/svgs/revisiq-white-logo.svg"
                    alt="Revisiq white logo"
                    width={144}
                    height={42}
                  />
                </Link>
                <div className="mx-auto flex w-full flex-col gap-y-[42px]">
                  <p className="text-center text-[34px] font-medium leading-[41px] text-white">
                    Stay updated, subscribe to our newsletter.
                  </p>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="h-[70px] w-full rounded-full border border-white bg-transparent py-1 pl-8 pr-1 text-xl text-white placeholder:text-[#B28585] focus:border-transparent focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button
                      aria-label="Send"
                      className="group absolute right-1 top-1/2 size-[60px] -translate-y-1/2 rounded-full bg-white px-5 hover:bg-black"
                    >
                      <ArrowRight className="h-6 w-6 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-center gap-11">
                  {socialLinks.map(({ icon, route }, index) => (
                    <Link
                      key={index}
                      href={route}
                      className="transition-all duration-300 hover:scale-110"
                    >
                      {icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between font-medium text-[#B28585] md:flex-row">
              <div className="flex gap-12">
                <Link href="#" className="transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="#" className="transition-colors hover:text-primary">
                  Terms of Service
                </Link>
              </div>
              <p>© Revisiq 2025. All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterWithCta;
