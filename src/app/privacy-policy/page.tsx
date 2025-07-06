'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { StarIcon } from '@/components/icons';

const privacyData = {
  informationWeCollect: [
    'Basic Info: Your name, email, phone number, and business details.',
    'Website Usage: IP address, browser type, pages visited, and general website analytics.',
    'Communications: Messages, inquiries, project details, and any feedback you share with us.',
    'Billing Info: For invoicing and payments (handled securely via third-party payment processors).',
  ],
  usageOfInformation: [
    'Respond to inquiries and deliver our services.',
    'Manage projects and communicate with you.',
    'Send occasional updates, proposals, or newsletters (you can opt out anytime).',
    'Improve our website and service experience.',
    'Fulfill legal obligations (e.g., invoicing, contracts).',
  ],
  sharingOfInformation: [
    'With trusted service providers (e.g., web hosting, payment systems, analytics tools).',
    'If legally required (e.g., tax authorities, law enforcement).',
    'To protect our business rights, prevent fraud, or enforce our contracts.',
  ],
  yourRights: [
    'Access to the data we hold about you.',
    'Request corrections or updates.',
    'Request deletion of your data.',
    'Object to how we process your data.',
    'Withdraw consent (where consent was previously given).',
  ],
  tableOfContents: [
    { label: 'Who We Are', route: 'who-we-are' },
    {
      label: 'The Information We Collect',
      route: 'the-information-we-collect',
    },
    {
      label: 'How We Use Your Information',
      route: 'how-we-use-your-information',
    },
    { label: 'Sharing Your Information', route: 'sharing-your-information' },
    {
      label: 'Third-Party Tools & Links',
      route: 'third-party-tools-and-links',
    },
    { label: 'Data Security', route: 'data-security' },
    { label: 'Your Rights', route: 'your-rights' },
    { label: 'Cookies', route: 'cookies' },
    { label: "Children's Privacy", route: 'childrens-privacy' },
    { label: 'Changes to This Policy', route: 'changes-to-this-policy' },
    { label: 'Contact Us', route: 'contact-us' },
  ],
};

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sectionIds = privacyData.tableOfContents.map((item) => item.route);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          {
            rootMargin: '-30% 0px -60% 0px',
            threshold: 0.1,
          }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -160; // adjust this based on your sticky header height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="space-y-[60px] lg:space-y-[100px] xl:space-y-[160px]">
      <header className="px-4 pb-6 pt-40 sm:px-8 sm:pt-36">
        <h1 className="mx-auto max-w-[546px] text-center">
          Revisiq Privacy Policy
        </h1>
      </header>

      <main className="mx-auto max-w-[1300px] px-5">
        <div className="flex flex-col-reverse justify-between gap-10 text-lg text-[#747474] lg:flex-row lg:gap-5 xl:text-xl">
          {/* Main Content */}
          <div className="space-y-12 lg:max-w-[600px] xl:max-w-[659px] xl:space-y-[60px]">
            <div id="who-we-are" className="space-y-5">
              <h3>Who We Are</h3>
              <p>
                Welcome to Revisiq. We are a creative agency offering website
                design, brand identity, content strategy, and social media
                management services to clients worldwide.
              </p>
              <p>
                Your privacy is important to us. This Privacy Policy explains
                how we collect, use, and protect your personal information when
                you interact with our website or our services.
              </p>
            </div>

            <div id="the-information-we-collect" className="space-y-5">
              <h3>The Information We Collect</h3>
              <p>
                When you use our website or work with us, we may collect the
                following types of information:
              </p>
              <ul className="space-y-5">
                {privacyData.informationWeCollect.map((data, index) => (
                  <li key={index} className="flex items-start gap-1">
                    <div className="mt-1.5">
                      <StarIcon />
                    </div>
                    {data}
                  </li>
                ))}
              </ul>
            </div>

            <div id="how-we-use-your-information" className="space-y-5">
              <h3>How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul className="space-y-5">
                {privacyData.usageOfInformation.map((data, index) => (
                  <li key={index} className="flex items-start gap-1">
                    <div className="mt-1.5">
                      <StarIcon />
                    </div>
                    {data}
                  </li>
                ))}
              </ul>
            </div>

            <div id="sharing-your-information" className="space-y-5">
              <h3>Sharing Your Information</h3>
              <p>
                We do not sell your personal data. Ever. We only share your
                information when necessary:
              </p>
              <ul className="space-y-5">
                {privacyData.sharingOfInformation.map((data, index) => (
                  <li key={index} className="flex items-start gap-1">
                    <div className="mt-1.5">
                      <StarIcon />
                    </div>
                    {data}
                  </li>
                ))}
              </ul>
            </div>

            <div id="third-party-tools-and-links" className="space-y-5">
              <h3>Third-Party Tools & Links</h3>
              <p>
                Our website may link to third-party websites or use tools like
                Google Analytics. These third parties have their own privacy
                policies. We recommend reviewing their policies because
                we&apos;re not responsible for their practices.
              </p>
            </div>

            <div id="data-security" className="space-y-5">
              <h3>Data Security</h3>
              <p>
                We take appropriate measures to protect your personal data. This
                includes encryption, secure servers, and restricted access to
                your information.
              </p>
              <p>
                However, no online platform can be 100% secure. While we do our
                best, we cannot fully guarantee absolute security.
              </p>
            </div>

            <div id="your-rights" className="space-y-5">
              <h3>Your Rights</h3>
              <p>
                Depending on your location (Nigeria, EU, UK, US, etc.), you may
                have rights over your data, such as:
              </p>
              <ul className="space-y-5">
                {privacyData.yourRights.map((data, index) => (
                  <li key={index} className="flex items-start gap-1">
                    <div className="mt-1.5">
                      <StarIcon />
                    </div>
                    {data}
                  </li>
                ))}
              </ul>
              <p>To exercise any of these rights, just email us.</p>
            </div>

            <div id="cookies" className="space-y-5">
              <h3>Cookies</h3>
              <p>
                Our website may use cookies for analytics, performance tracking,
                and improving your experience. You can control cookies through
                your browser settings.
              </p>
            </div>

            <div id="childrens-privacy" className="space-y-5">
              <h3>Children&apos;s Privacy</h3>
              <p>
                Our services are not intended for children under 13 years old.
                We do not knowingly collect data from minors. If we learn that a
                child has provided us data, we will delete it immediately.
              </p>
            </div>

            <div id="changes-to-this-policy" className="space-y-5">
              <h3>Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. Updates
                will be posted on this page with the latest date. If there are
                major changes, we&apos;ll notify you directly where appropriate.
              </p>
            </div>

            <div id="contact-us" className="space-y-5">
              <h3>Contact Us</h3>
              <p>
                Have questions? Want to access or delete your data? No problem.
                Reach out anytime:
              </p>
              <div className="flex flex-col space-y-2">
                <span className="font-semibold">Revisiq Agency</span>
                <span>
                  Email:{' '}
                  <Link
                    href="mailto:revisiq@gmail.com"
                    className="text-[#E50101] underline"
                  >
                    Revisiq@gmail.com
                  </Link>
                </span>
                <span>
                  Website:{' '}
                  <Link
                    href="https://www.revisiq.com"
                    className="text-[#E50101] underline"
                  >
                    www.revisiq.com
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="max-h-fit space-y-5 rounded-[20px] bg-secondary px-6 py-10 sm:p-[52px] lg:sticky lg:top-40">
            <h3>Table of Contents</h3>
            <ul className="space-y-5">
              {privacyData.tableOfContents.map((item, index) => {
                const isActive = activeSection === item.route;
                return (
                  <li key={index}>
                    <Link
                      href={`#${item.route}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.route);
                      }}
                      className={`flex items-center gap-4 font-medium transition-colors ${
                        isActive ? 'text-[#FD7777]' : 'hover:text-[#FD7777]'
                      }`}
                    >
                      <div
                        className={`h-[22px] w-1 ${
                          isActive ? 'bg-[#FD7777]' : 'bg-transparent'
                        } transition-all`}
                      />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <span className="inline-block pl-5 text-sm italic text-[#B8B8B8]">
              Last updated July 5, 2025
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
