import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { Icons } from './Icons';
import MaxWidthWrapper from './MaxWidthWrapper';
import RunningBanner from './RunningBanner';

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Community Programs',
    href: 'https://docs.strkfarm.xyz/p/community',
  },
  {
    label: 'Docs',
    href: 'https://docs.strkfarm.xyz/',
  },
  {
    label: 'FAQ',
    href: 'https://docs.strkfarm.xyz/p/faq',
  },
];

const LandingNav: React.FC = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-50 h-fit w-full bg-black">
      <RunningBanner />

      <MaxWidthWrapper className="py-2">
        <div className="flex h-14 items-center justify-between">
          <Link href="/">
            <Image width={169} height={40} alt="logo" src="/full-logo.svg" />
          </Link>

          <div className="hidden items-center gap-4 sm:gap-8 lg:flex 2xl:gap-10">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                target='_blank'
                className="text-sm text-white opacity-80"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-3">
              <Link
                href="https://t.me/+kNCm2Q_kj7I1ZTll"
                target='_blank'
                className="text-sm text-white opacity-80"
              >
                <Icons.tg />
              </Link>

              <Link href="https://twitter.com/strkfarm"
                target='_blank'
                className="text-sm text-white opacity-80"
              >
                <Icons.x />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex h-full items-center space-x-4">
            <Link
              href="https://app.strkfarm.xyz"
              className="rounded-full bg-gradient-to-r from-[#6F4FF2] to-[#61FCAE] px-4 py-2 text-sm font-bold text-[#111119]"
            >
              Launch Dapp
            </Link>
          </div>


          <Sheet>
            <SheetTrigger className='lg:hidden'>
              <Menu className='text-white' />
            </SheetTrigger>
            <SheetContent className='bg-gradient-to-r from-[#111119] to-[#182123] border-[#182123]'>
              <div className="mt-16 flex flex-col items-center gap-4 sm:gap-6">
                {navLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.label}
                    className="text-sm py-2 w-full text-center text-white opacity-80 hover:underline transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="https://app.strkfarm.xyz"
                  className="rounded-full bg-gradient-to-r from-[#6F4FF2] to-[#61FCAE] px-4 py-2 text-sm font-semibold text-[#111119]"
                >
                  Launch Dapp
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default LandingNav;
