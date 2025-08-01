'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { StarIcon } from '@/components/icons';

const privacyData = {
  servicesOffered: [
    'Website Design and Development',
    'Logo Design / Branding',
    'Content Strategy',
    'Social Media Management',
  ],
  paymentTerms: {
    webDesign: [
      {
        boldText: 'Starter Package:',
        normalText:
          'A single payment of 100% upfront is required to commence work.',
      },
      {
        boldText: 'Growth Package:',
        normalText:
          'Payments are typically split into two milestones: 50% upfront to commence the project and 50% upon final design approval before development begins.',
      },
      {
        boldText: 'Premium Package:',
        normalText:
          'Payments are typically split into three milestones: 30% upfront to commence the project, 40% upon final design approval, and the final 30% upon project completion before launch or final file handover.',
      },
    ],
  },
  projectProcess: [
    {
      boldText: 'Starter Package:',
      normalText: 'Includes 1 round of revision before final approval.',
    },
    {
      boldText: 'Growth and Premium Packages:',
      normalText:
        'Include 2 rounds of revisions on design before development starts or final delivery.',
    },
  ],
  refundPolicy: [
    {
      boldText: 'Before Work Commences',
      normalText:
        'An 80% refund will be issued if the client cancels before any work has started. 20% is retained as a processing and commitment fee.',
    },
    {
      boldText: 'During Design Phase (Web & Branding):',
      normalText:
        'If canceled after the first design concept or first revision, a 50% refund of the upfront payment is issued.',
      normalText2:
        'If canceled after the second revision, a 30% refund of the upfront payment is issued.',
    },
    {
      boldText: 'Starter Package:',
      normalText:
        'If canceled after the single included revision round, a 50% refund of the upfront payment is issued.',
    },
    {
      boldText: 'After Design Approval & Development Commencement:',
      normalText:
        'No refunds are issued once development starts or after designs are finalized and approved.',
    },
    {
      boldText: 'Ongoing Monthly Services (e.g., Social Media Management):',
      normalText:
        "Clients may cancel anytime with 7 days' notice before the next billing cycle.",
      normalText2:
        'No refunds are given for the current month once work has started.',
    },
  ],
  intellectualPropertyRights: [
    'All intellectual property (designs, websites, graphics, and content) created by Revisiq remains the property of Revisiq until full payment is received.',
    'Upon full payment: The client owns the final deliverables (website files, branding assets, etc.).',
    'Revisiq retains the right to showcase completed projects in portfolios, marketing materials, and social media unless a Non-Disclosure Agreement (NDA) has been formally signed.',
    'Drafts, concepts, and unused designs remain the property of Revisiq unless otherwise agreed in writing.',
  ],
  thirdPartyServices: [
    'Projects may involve third-party services (hosting, plugins, APIs, analytics, etc.).',
    'Revisiq assists with integration but is not responsible for downtime, errors, or issues caused by third-party platforms or software.',
    "Costs related to third-party services (domains, hosting, premium tools) are the client's responsibility unless explicitly included in the package.",
  ],
  warrantyAndSupport: [
    'Premium Website clients receive 30 days of free post-launch support, covering bug fixes and minor adjustments.',
    'Starter and Growth packages do not include post-launch support by default. Support and maintenance can be purchased as an add-on.',
    'Post-support period services (updates, fixes, changes) are billed separately or managed under a maintenance agreement.',
    'Revisiq does not guarantee protection against hacking, third-party server failures, or issues caused by client modifications but implements industry-standard security practices during development.',
  ],
  limitationOfLiability: [
    'Revisiq is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or deliverables.',
    'This includes but is not limited to loss of profits, data loss, third-party service failures, or downtime.',
    'Our total liability for any claim shall not exceed the total amount paid by the client for the specific service in question.',
    'Revisiq is not liable for legal or copyright issues related to content provided by the client.',
  ],
  termination: [
    'The client violates these Terms.',
    'The client engages in abusive, illegal, or unethical behavior.',
    'The client fails to pay outstanding invoices after reasonable reminders.',
  ],
  governingLaw: [
    'These Terms are governed by and construed under the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.',
    'Any disputes arising shall be resolved first through negotiation. If unresolved, disputes may be settled through mediation, arbitration, or appropriate legal means within the jurisdiction of Nigeria.',
  ],
  tableOfContents: [
    { label: 'Introduction', route: 'introduction' },
    { label: 'Services Offered', route: 'services-offered' },
    { label: 'Payment Terms', route: 'payment-terms' },
    {
      label: 'Project Process & Client Responsibilities',
      route: 'project-proecess-and-client-responsibilities',
    },
    { label: 'Revisions Policy', route: 'revisions-policy' },
    { label: 'Data Security', route: 'data-security' },
    { label: 'Refund Policy', route: 'refund-policy' },
    {
      label: 'Intellectual Property Rights',
      route: 'intellectual-property-rights',
    },
    { label: 'Third-Party Services', route: 'third-party-services' },
    { label: 'Warranty & Support', route: 'warranty-and-support' },
    { label: 'Limitation of Liability', route: 'limitation-of-liability' },
    { label: 'Termination', route: 'termination' },
    { label: 'Governing Law', route: 'governing-law' },
    { label: 'Changes to These Terms', route: 'changes-to-these-terms' },
    { label: 'Contact Us', route: 'contact-us' },
  ],
};

const TermsOfServicePage = () => {
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
          Revisiq Terms of Service
        </h1>
      </header>

      <main className="mx-auto max-w-[1300px] px-5">
        <div className="flex flex-col-reverse justify-between gap-10 text-lg text-[#747474] lg:flex-row lg:gap-5 xl:text-xl">
          {/* Main Content */}
          <div className="space-y-12 lg:max-w-[600px] xl:max-w-[659px] xl:space-y-[60px]">
            <div id="introduction" className="space-y-5">
              <h3>Introduction</h3>
              <p>
                Welcome to Revisiq. By accessing or using our website, services,
                or entering into an agreement with us, you agree to comply with
                and be bound by the following Terms of Service
                (&quot;Terms&quot;). Please read them carefully.
              </p>
              <p>
                These Terms apply to all clients worldwide, including but not
                limited to Nigeria, the United States, the United Kingdom, and
                other countries.
              </p>
            </div>

            <div id="services-offered" className="space-y-5">
              <h3>Services Offered</h3>
              <p>
                Revisiq provides creative and digital services, including but
                not limited to:
              </p>
              <ul className="space-y-5">
                {privacyData.servicesOffered.map((data, index) => (
                  <li key={index} className="flex items-start gap-1">
                    <div className="mt-1.5">
                      <StarIcon />
                    </div>
                    {data}
                  </li>
                ))}
              </ul>
              <p>
                Services are offered in structured packages (Starter, Growth,
                Premium) or as custom solutions, as detailed on our website or
                proposal documents.
              </p>
            </div>

            <div id="payment-terms" className="space-y-5">
              <h3>Payment Terms</h3>
              <p>
                Payments are structured according to the service package to
                align with project milestones. All invoices are due upon the
                date of receipt unless otherwise specified.
              </p>
              <ul className="space-y-5">
                <li className="font-semibold">
                  For Website Design & Development Projects:
                </li>
                {privacyData.paymentTerms.webDesign.map((data, index) => (
                  <li key={index} className="flex items-start gap-1">
                    <div className="mt-1.5">
                      <StarIcon />
                    </div>
                    <span>
                      <span className="font-semibold">{data.boldText}</span>{' '}
                      {data.normalText}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-5">
                <li className="font-semibold">
                  For Logo Design / Branding Projects:
                </li>
                <li className="flex items-start gap-1">
                  <div className="mt-1.5">
                    <StarIcon />
                  </div>
                  Payments for all branding packages are split into two
                  milestones: 50% upfront to commence the project and 50% upon
                  final brand identity design approval before final brand files
                  are prepared for handover.
                </li>
              </ul>

              <ul className="space-y-5">
                <li className="font-semibold">
                  For Ongoing Monthly Services (e.g., Social Media Management):
                </li>
                <li className="flex items-start gap-1">
                  <div className="mt-1.5">
                    <StarIcon />
                  </div>
                  Services are billed monthly in advance.
                </li>
              </ul>
              <p>
                Invoices have a validity period. If a client fails to pay before
                the invoice expires, the invoice becomes void. The client must
                request a new invoice; old invoices must not be paid after
                expiration.
              </p>
            </div>

            <div
              id="project-proecess-and-client-responsibilities"
              className="space-y-5"
            >
              <h3>Project Process & Client Responsibilities</h3>
              <p>
                The client is responsible for providing all necessary materials
                (logos, images, text content, branding assets) unless content
                creation and/or brand development is included in the package.
              </p>
              <p>For website and branding projects:</p>
              <ul className="space-y-5">
                {privacyData.projectProcess.map((data, index) => (
                  <li key={index} className="flex items-start gap-1">
                    <div className="mt-1.5">
                      <StarIcon />
                    </div>
                    <span>
                      <span className="font-semibold">{data.boldText}</span>{' '}
                      {data.normalText}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="revisions-policy" className="space-y-5">
              <h3>Revisions Policy</h3>
              <p>
                Our revision policy is designed to ensure a smooth and efficient
                project workflow while setting clear expectations for both
                website and brand designs.
              </p>
              <p>
                <span className="font-semibold">Starter Package:</span> Includes
                1 round of revision on designs. Any further revisions are
                subject to additional fees.
              </p>
              <p>
                <span className="font-semibold">
                  Growth and Premium Packages:
                </span>{' '}
                Includes 2 rounds of revisions on designs. Further revisions
                beyond this are billable.
              </p>
              <p>
                Additional revisions beyond the included rounds are charged at
                an hourly or flat rate, communicated clearly before proceeding.
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

            <div id="refund-policy" className="space-y-5">
              <h3>Refund Policy</h3>
              <p>
                Our refund policy is designed to balance fairness for both the
                client and Revisiq:
              </p>
              <ul className="space-y-5">
                {privacyData.refundPolicy.map((data, index) => (
                  <li key={index} className="flex items-start gap-1">
                    <div className="mt-1.5">
                      <StarIcon />
                    </div>
                    <div>
                      <span className="font-semibold">{data.boldText}</span>{' '}
                      <div className="flex flex-col gap-5">
                        <span>{data.normalText}</span>
                        <span>{data.normalText2}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div id="intellectual-property-rights" className="space-y-5">
              <h3>Intellectual Property Rights</h3>
              {privacyData.intellectualPropertyRights.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>

            <div id="third-party-services" className="space-y-5">
              <h3>Third-Party Services</h3>
              {privacyData.thirdPartyServices.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>

            <div id="warranty-and-support" className="space-y-5">
              <h3>Warranty & Support</h3>
              {privacyData.warrantyAndSupport.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>

            <div id="limitation-of-liability" className="space-y-5">
              <h3>Limitation of Liability</h3>
              {privacyData.limitationOfLiability.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>

            <div id="termination" className="space-y-5">
              <h3>Termination</h3>
              <p>
                Revisiq reserves the right to terminate any project or service
                if:
              </p>
              <ul className="space-y-5">
                {privacyData.termination.map((data, index) => (
                  <li key={index} className="flex items-start gap-1">
                    <div className="mt-1.5">
                      <StarIcon />
                    </div>
                    {data}
                  </li>
                ))}
              </ul>
            </div>

            <div id="governing-law" className="space-y-5">
              <h3>Governing Law</h3>
              {privacyData.governingLaw.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>

            <div id="changes-to-these-terms" className="space-y-5">
              <h3>Changes to These Terms</h3>
              <p>
                Revisiq reserves the right to update, change, or replace any
                part of these Terms at any time without prior notice. Updates
                will be posted on our website with the latest effective date.
                Continued use of our services following changes constitutes
                acceptance of those changes.
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
            <span className="text-[#B8B8B8 inline-block pl-5 text-sm italic">
              Last updated July 5, 2025
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfServicePage;
