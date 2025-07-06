'use client';

import type React from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Projects',
    route: '/projects',
  },
  {
    name: 'Pricing',
    route: '/#pricing',
  },
  {
    name: 'Services',
    route: '/#services',
  },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;
  return (
    <div className="fixed left-0 right-0 top-0 z-40 px-5 transition-all duration-300 sm:px-8">
      <div
        className={cn(
          'mx-auto mt-7 max-w-[1400px] bg-secondary transition-all duration-500 ease-in-out sm:mt-2.5',
          isMenuOpen ? 'rounded-3xl' : 'rounded-[50px]'
        )}
      >
        {/* Main navbar content */}
        <div className="flex items-center justify-between px-8 py-4">
          <Link href="/">
            <Image
              src="/svgs/revisiq-logo.svg"
              alt="Revisiq logo"
              width={144}
              height={42}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-3.5 md:flex">
            {navLinks.map(({ name, route }) => (
              <Link
                key={name}
                href={route}
                className={`rounded-full px-5 py-2 font-medium transition-colors hover:bg-[#FFF0EE] hover:text-primary ${isActive(route) ? 'bg-[#FFF0EE] text-primary' : ''}`}
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="z-50 rounded-xl bg-transparent p-2 text-black hover:bg-[#FFF0EE] md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="size-7" color="#1C274C" strokeWidth={1.5} />
            ) : (
              <Menu className="size-7" color="#1C274C" strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-500 ease-in-out md:hidden',
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="flex flex-col items-end gap-1 px-4 pb-6">
            {navLinks.map(({ name, route }) => (
              <Link
                key={name}
                href={route}
                className={`rounded-2xl px-5 py-3 font-medium transition-colors hover:bg-[#FFF0EE] hover:text-primary ${isActive(route) ? 'bg-[#FFF0EE] text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
