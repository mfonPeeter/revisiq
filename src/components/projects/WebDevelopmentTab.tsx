'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Pagination from '../ui/pagination';
import { usePagination } from '../ui/use-pagination';

const webDev = [
  {
    imgPath: 'stashbyt.png',
    alt: 'StashByt',
    route: '/',
  },
  {
    imgPath: 'eljey-enterprise.png',
    alt: 'Eljey Enterprise',
    route: 'https://www.eljeyenterprise.com/',
  },
];

const WebDevelopmentTab = () => {
  const { currentData, currentPage, totalPages, goToPage } = usePagination({
    data: webDev,
    itemsPerPage: 4,
  });

  return (
    <section>
      <motion.div
        key={currentPage} // Re-animate when page changes
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8 grid grid-cols-1 gap-6 rounded-[30px] bg-secondary p-5 sm:mb-12 sm:grid-cols-2 sm:rounded-[50px] sm:p-7 lg:gap-9 lg:p-10"
      >
        {currentData.map((dev, index) => (
          <motion.div
            key={`${dev.alt}-${currentPage}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <Link href={dev.route} target="_blank" rel="noopener noreferrer">
              <Image
                src={`/images/projects/${dev.imgPath}`}
                alt={dev.alt}
                width={587}
                height={440}
                className="h-auto w-full object-cover"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </section>
  );
};

export default WebDevelopmentTab;
