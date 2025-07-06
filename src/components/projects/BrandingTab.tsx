'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Pagination from '../ui/pagination';
import { usePagination } from '../ui/use-pagination';
import Link from 'next/link';

const brandings = [
  {
    imgPath: 'branding-1.png',
    alt: 'Green Yields',
    route:
      'https://www.behance.net/gallery/211552195/GreenYields-Farms-Agricultural-Farm-Brand-IdentityGreen yields',
  },
  {
    imgPath: 'branding-2.png',
    alt: 'Ofiliates',
    route: 'https://www.behance.net/gallery/182729247/Ofiliates',
  },
  {
    imgPath: 'branding-3.png',
    alt: 'Lotus Winery',
    route: 'https://www.behance.net/gallery/188844427/Lotus-Winery',
  },
  {
    imgPath: 'branding-4.png',
    alt: 'Book Weenie',
    route: 'https://www.behance.net/gallery/184760971/BookWeenie',
  },
  {
    imgPath: 'branding-2.png',
    alt: 'Ofiliates',
    route: 'https://www.behance.net/gallery/182729247/Ofiliates',
  },
];

const BrandingTab = () => {
  const { currentData, currentPage, totalPages, goToPage } = usePagination({
    data: brandings,
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
        {currentData.map((brand, index) => (
          <motion.div
            key={`${brand.alt}-${currentPage}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <Link href={brand.route} target="_blank" rel="noopener noreferrer">
              <Image
                src={`/images/projects/${brand.imgPath}`}
                alt={brand.alt}
                width={587}
                height={416}
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

export default BrandingTab;
