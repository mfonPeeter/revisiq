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
    route: '#pricing',
  },
  {
    name: 'Services',
    route: '#services',
  },
];

interface NavBarProps {
  scrollY: number;
}

const NavBar: React.FC<NavBarProps> = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 transition-all duration-500',
          isMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute right-6 top-6 text-zinc-900 transition-colors hover:text-red-500"
        >
          <X className="h-8 w-8" />
        </button>
        <nav className="flex flex-col items-center gap-8 text-2xl">
          <Link
            href="#"
            className="relative text-zinc-900 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:text-red-500 hover:after:w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#"
            className="relative text-zinc-900 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:text-red-500 hover:after:w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="relative text-zinc-900 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all hover:text-red-500 hover:after:w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#"
            className="mt-8 rounded-full bg-gradient-to-r from-red-600 to-red-700 px-8 py-3 font-medium text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Header */}
      <header
        className="fixed left-0 right-0 top-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: scrollY > 50 ? 'transparent' : 'transparent',
          backdropFilter: scrollY > 50 ? 'none' : 'none',
          boxShadow: scrollY > 50 ? 'none' : 'none',
        }}
      >
        <div className="container mx-auto mt-2.5 flex items-center justify-between rounded-full bg-secondary py-4 pl-9 pr-4">
          <Link href="/">
            <Image
              src="/svgs/revisiq-black-logo.svg"
              alt="Revisiq black logo"
              width={144}
              height={42}
            />
          </Link>
          <nav className="hidden items-center gap-3.5 md:flex">
            {navLinks.map(({ name, route }) => (
              <Link
                key={name}
                href={route}
                className="rounded-full px-5 py-2 font-medium transition-colors hover:bg-[#FFF0EE] hover:text-primary"
              >
                {name}
              </Link>
            ))}
          </nav>
          <button
            className="z-50 text-zinc-900 md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
