'use client';

import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = totalPages > 1 ? getVisiblePages() : [];

  if (totalPages <= 1) return null;

  return (
    <div className={cn('flex items-center justify-center gap-6', className)}>
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          'flex size-10 items-center justify-center rounded-full border border-[#8E505033] transition-all duration-200',
          currentPage === 1
            ? 'cursor-not-allowed text-[#E3D6D6]'
            : 'hover:bg-[#FF2323] hover:text-white'
        )}
        aria-label="Previous page"
      >
        <ChevronLeft className="size-6" strokeWidth={1.5} />
      </button>

      {/* Page Numbers */}
      {visiblePages.map((page, index) => {
        if (page === '...') {
          return (
            <div
              key={`dots-${index}`}
              className="inline-flex size-10 items-center justify-center rounded-full border border-[#8E505033] leading-none text-[#0A161E]"
            >
              <Ellipsis size={18} />
            </div>
          );
        }

        const pageNumber = page as number;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={cn(
              'flex size-10 items-center justify-center rounded-full border border-[#8E505033] font-medium transition-all duration-200',
              isActive
                ? 'bg-[#FF2323] text-white'
                : 'text-[#0A161E] hover:bg-[#FF2323] hover:text-white'
            )}
            aria-label={`Go to page ${pageNumber}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          'flex size-10 items-center justify-center rounded-full border border-[#8E505033] transition-all duration-200',
          currentPage === totalPages
            ? 'cursor-not-allowed text-[#E3D6D6]'
            : 'hover:bg-[#FF2323] hover:text-white'
        )}
        aria-label="Next page"
      >
        <ChevronRight className="size-6" strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default Pagination;
