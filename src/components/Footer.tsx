import Image from "next/image";
import Link from "next/link";
import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { Icons } from "./Icons";

const navLinks = [
  {
    category: "Product",
    links: [
      {
        label: "Launch Dapp",
        href: "https://app.strkfarm.xyz",
      },
      {
        label: "Defi Spring",
        href: "https://defispring.starknet.io/",
      },
      // {
      //   label: "Docs",
      //   href: "#",
      // },
    ],
  },
  {
    category: "Developers",
    links: [
      {
        label: "Defi Spring",
        href: "https://defispring.starknet.io/",
      },
      {
        label: "Open-source",
        href: "https://app.onlydust.com/p/strkfarm",
      },
      {
        label: "Audit",
        href: "/audit",
      },
    ],
  },
  {
    category: "General",
    links: [
      {
        label: "Branding kit",
        href: "https://drive.google.com/drive/folders/1-D6uizWgdH2XwbP0f3Fc22wQgxhr_RUY?usp=sharing",
      },
      {
        label: "Status page",
        href: "https://status.strkfarm.xyz/",
      },
    ],
  },
  {
    category: "Community",
    links: [
      {
        label: "Telegram",
        href: "https://t.me/+kNCm2Q_kj7I1ZTll",
      },
      {
        label: "Twitter",
        href: "https://twitter.com/strkfarm",
      },
      {
        label: "Github",
        href: "https://github.com/strkfarm/",
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="z-20 mt-24 lg:mt-[15.5rem] bg-black">
      <MaxWidthWrapper>
        <div className="gap-3 space-y-12 py-6 md:flex md:justify-between md:space-y-0 lg:py-8">
          <Image width={246} height={58} alt="logo" src="/full-logo.svg" className="my-8 lg:mt-0 mx-auto sm:mr-auto sm:ml-0" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-16 pl-[16%] sm:pl-0">
            {navLinks.map((navLink, i) => (
              <div key={i}>
                <h2 className="mb-7 text-sm font-semibold">
                  {navLink.category}
                </h2>
                <ul className="text-sm text-gray-400">
                  {navLink.links.map((link) => (
                    <li className="mb-4" key={link.label}>
                      <Link href={link.href} className="hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

      <MaxWidthWrapper>
        <div className="pb-8 sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col-reverse items-center gap-7 md:flex-row">
            <p className="text-sm text-gray-500 text-center dark:text-gray-400">
              &copy; 2024 STRKFarm. All right reserved.
            </p>
            {/* <div className="flex flex-col items-center gap-7 md:flex-row">
              <p className="cursor-pointer text-sm text-gray-500 hover:underline sm:text-center dark:text-gray-400">
                Privacy Policy
              </p>
              <p className="cursor-pointer text-sm text-gray-500 hover:underline sm:text-center dark:text-gray-400">
                Terms of Service
              </p>
              <p className="cursor-pointer text-sm text-gray-500 hover:underline sm:text-center dark:text-gray-400">
                Cookies Settings
              </p>
            </div> */}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 sm:mt-0">
            {/* <Link href="#">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.34 34.6797C26.92 34.6797 34.68 26.9198 34.68 17.3398C34.68 7.75984 26.92 0 17.34 0C7.75997 0 0 7.75984 0 17.3398C0 26.9198 7.75997 34.6797 17.34 34.6797ZM19.78 10.8479C19.78 10.8437 19.7837 10.8405 19.7879 10.8412C20.7888 11.0113 21.7635 11.2922 22.7017 11.6734C23.1369 11.8502 23.5024 12.1638 23.7481 12.5641C25.1378 14.8273 25.9445 17.3107 26.0092 20.0763C26.0375 21.2833 25.4066 22.4136 24.354 23.0052C23.672 23.3885 22.9606 23.7147 22.2249 23.9826C21.8244 24.1285 21.3765 23.982 21.148 23.6221C21.0726 23.5035 20.9997 23.3835 20.9292 23.262C20.7478 22.9495 20.9008 22.5578 21.2282 22.4049C21.4248 22.3131 21.6186 22.2151 21.8084 22.1108C21.9403 22.0384 21.9503 21.8513 21.8339 21.756C21.7718 21.7052 21.6837 21.6924 21.611 21.7263C20.2733 22.3493 18.8161 22.6699 17.34 22.6699C15.8636 22.6699 14.4156 22.3492 13.0692 21.726C12.9957 21.692 12.9098 21.7 12.846 21.7499C12.7243 21.8452 12.7359 22.0363 12.8714 22.1107C13.0541 22.2111 13.2406 22.3057 13.4297 22.3946C13.7686 22.5538 13.9275 22.9597 13.7397 23.2837C13.6725 23.3997 13.6032 23.5142 13.5316 23.6272C13.3043 23.9857 12.8581 24.1292 12.4592 23.9841C11.7259 23.7173 11.0166 23.3926 10.3365 23.0111C9.27675 22.4167 8.64142 21.2794 8.66965 20.0646C8.72456 17.7012 9.32907 15.3059 10.7455 12.8751C11.0967 12.2723 11.6404 11.8026 12.2929 11.5558C12.976 11.2974 13.6775 11.0919 14.3936 10.9432C14.6897 10.8817 14.989 11.0248 15.1213 11.2967C15.2632 11.5883 15.574 11.7638 15.8962 11.7285C16.7743 11.6323 17.6556 11.6243 18.5342 11.7045C18.9993 11.7469 19.4439 11.4992 19.6564 11.0833C19.6962 11.0054 19.737 10.9279 19.7791 10.8511C19.7797 10.8501 19.78 10.849 19.78 10.8479ZM12.9 18.1899C12.9 19.1599 13.61 19.9497 14.46 19.9497C15.31 19.9497 16.01 19.1599 16.02 18.1899C16.04 17.2199 15.33 16.4199 14.46 16.4199C13.59 16.4199 12.9 17.2199 12.9 18.1899ZM18.66 18.1899C18.66 19.1599 19.36 19.9497 20.22 19.9497C21.08 19.9497 21.76 19.1599 21.78 18.1899C21.8 17.2199 21.1 16.4199 20.22 16.4199C19.34 16.4199 18.66 17.2199 18.66 18.1899Z"
                  fill="url(#paint0_linear_160_1489)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_160_1489"
                    x1="0"
                    y1="17.3398"
                    x2="34.68"
                    y2="17.3398"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6F4FF2" />
                    <stop offset="1" stopColor="#61FCAE" />
                  </linearGradient>
                </defs>
              </svg>

              <span className="sr-only">GitHub</span>
            </Link> */}

            <Link href="https://t.me/+kNCm2Q_kj7I1ZTll">
              <Icons.tg />
              <span className="sr-only">Telegram</span>
            </Link>

            <Link href="https://twitter.com/strkfarm">
              <Icons.x />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
