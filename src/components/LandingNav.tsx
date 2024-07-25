import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';

const navLinks = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Community Programs',
    href: '#',
  },
  {
    label: 'Docs',
    href: '#',
  },
  {
    label: 'FAQ',
    href: '#',
  },
  {
    label: 'Social Media',
    href: '#',
  },
];

const LandingNav: React.FC = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-fit w-full bg-[#111119] py-2">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Image width={169} height={40} alt="logo" src="/full-logo.svg" />

          <div className="hidden items-center gap-4 sm:gap-8 lg:flex 2xl:gap-10">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="text-sm text-white opacity-80"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex h-full items-center space-x-4">
            <Link
              href="/dapp"
              className="rounded-full bg-gradient-to-r from-[#6F4FF2] to-[#61FCAE] px-4 py-2 text-sm font-bold text-[#111119]"
            >
              Launch Dapp
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default LandingNav;
