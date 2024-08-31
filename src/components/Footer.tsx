import Image from "next/image";
import Link from "next/link";
import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { cn } from "@/lib/utils";

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
        label: "Audit (Coming soon)",
        href: "#",
      },
      // {
      //   label: "Blog",
      //   href: "#",
      // },
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
        href: "https://strkfarm.betteruptime.com/",
      },
    ],
  },
  {
    category: "Community",
    links: [
      {
        label: "Telegram",
        href: "https://t.me/+HQ_eHaXmF-1lZDc1",
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
                      <Link href={link.href} className={cn("hover:underline", {
                        'opacity-80 hover:no-underline cursor-default': link.label === "Audit (Coming soon)",
                      })}>
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

            <Link href="https://t.me/+HQ_eHaXmF-1lZDc1">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="17.34"
                  cy="17.34"
                  r="17.34"
                  fill="url(#paint0_linear_160_1541)"
                />
                <path
                  d="M6.52544 16.7493C6.57137 16.7258 6.61733 16.7033 6.66211 16.6821C7.44061 16.3118 8.22946 15.9651 9.01715 15.6183C9.05963 15.6183 9.13081 15.5676 9.17099 15.5511C9.23185 15.524 9.29272 15.498 9.35358 15.4709C9.4707 15.419 9.58782 15.3683 9.70379 15.3164C9.93804 15.2138 10.1711 15.1112 10.4054 15.0086L11.8074 14.3918C12.742 13.9814 13.6779 13.5698 14.6125 13.1593C15.5472 12.7489 16.483 12.3373 17.4177 11.9269C18.3523 11.5165 19.2881 11.1049 20.2228 10.6945C21.1575 10.284 22.0933 9.87243 23.028 9.46201C23.2358 9.37002 23.4609 9.23321 23.6836 9.19311C23.8708 9.15891 24.0533 9.09287 24.2417 9.05631C24.5988 8.98672 24.9926 8.95842 25.3348 9.11056C25.453 9.16363 25.5621 9.23793 25.6528 9.3311C26.0869 9.77219 26.026 10.4963 25.9342 11.1167C25.2946 15.4402 24.655 19.765 24.0143 24.0886C23.927 24.6818 23.8076 25.3328 23.3518 25.7079C22.966 26.0251 22.4171 26.0605 21.9406 25.926C21.4641 25.7904 21.0438 25.5062 20.6316 25.2267C18.9219 24.0638 17.211 22.9009 15.5013 21.7381C15.0948 21.4621 14.6424 21.1012 14.647 20.6C14.6493 20.2981 14.8249 20.0292 15.0041 19.7898C16.4899 17.799 18.6337 16.4309 20.2286 14.5321C20.4536 14.2644 20.6304 13.7809 20.3216 13.6264C20.1379 13.5344 19.9266 13.6594 19.7589 13.7785C17.6507 15.2822 15.5437 16.7871 13.4356 18.2908C12.7478 18.7814 12.0267 19.2862 11.1977 19.4065C10.4559 19.515 9.70954 19.3027 8.99189 19.0857C8.39021 18.9041 7.78966 18.7177 7.19143 18.5255C6.87337 18.4241 6.54497 18.3144 6.29924 18.0844C6.05352 17.8544 5.91231 17.4676 6.06043 17.1609C6.15344 16.9687 6.33371 16.8472 6.52317 16.7482L6.52544 16.7493Z"
                  fill="black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_160_1541"
                    x1="0"
                    y1="17.34"
                    x2="34.68"
                    y2="17.34"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6F4FF2" />
                    <stop offset="1" stopColor="#61FCAE" />
                  </linearGradient>
                </defs>
              </svg>

              <span className="sr-only">Telegram</span>
            </Link>

            <Link href="https://twitter.com/strkfarm">
              <svg
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.460938 17.3398C0.460938 7.75984 8.2209 0 17.8009 0C27.3809 0 35.1409 7.75984 35.1409 17.3398C35.1409 26.9198 27.3809 34.6797 17.8009 34.6797C8.2209 34.6797 0.460938 26.9198 0.460938 17.3398ZM17.2909 14.1047C17.2881 14.1006 17.2817 14.1028 17.2821 14.1077L17.3112 14.5436C17.3162 14.6197 17.251 14.6819 17.1752 14.6731L16.7109 14.6196C14.5009 14.3396 12.5709 13.3798 10.9409 11.7798L10.5837 11.4227C10.3781 11.2171 10.0284 11.2959 9.93091 11.5698C9.49091 12.8798 9.77091 14.2599 10.6809 15.1899C11.1709 15.6999 11.0609 15.7797 10.2209 15.4697C9.84869 15.3414 9.63227 15.5396 9.72714 15.9217C9.81832 16.2889 9.96377 16.7368 10.0909 16.98C10.4109 17.59 11.0509 18.1898 11.7509 18.5498C11.8927 18.6172 11.8447 18.8301 11.6877 18.8301H11.6409C10.9609 18.8401 10.9409 18.8499 11.0109 19.1099C11.2509 19.9099 12.2109 20.7496 13.2809 21.1196L13.3147 21.1314C13.5988 21.2299 13.6387 21.6153 13.3809 21.77C12.4109 22.33 11.2709 22.6497 10.1309 22.6797C9.58092 22.6897 9.14093 22.7398 9.14093 22.7798C9.14093 22.8998 10.6209 23.5899 11.4809 23.8599C14.0609 24.6599 17.1309 24.3097 19.4409 22.9497C21.0809 21.9797 22.7109 20.0597 23.4809 18.1997C23.8909 17.2097 24.3009 15.3998 24.3009 14.5298C24.3009 13.9698 24.3409 13.8897 25.0209 13.2197C25.4209 12.8297 25.8009 12.3998 25.8709 12.2798C25.9909 12.0498 25.9809 12.0498 25.3609 12.2598C24.3309 12.6298 24.1809 12.5798 24.6909 12.0298C25.0709 11.6398 25.5109 10.9297 25.5109 10.7197C25.5109 10.6797 25.3309 10.7396 25.1209 10.8496C24.9009 10.9696 24.4209 11.16 24.0509 11.27C23.6407 11.4025 23.1923 11.3386 22.8354 11.0967L22.8109 11.0801C22.4809 10.8601 22.0209 10.61 21.7809 10.54C21.1609 10.37 20.2209 10.3898 19.6609 10.5898C18.1467 11.1377 17.1982 12.5487 17.2997 14.1016C17.3 14.1065 17.2936 14.1088 17.2909 14.1047Z"
                  fill="url(#paint0_linear_160_1486)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_160_1486"
                    x1="0.460937"
                    y1="17.3398"
                    x2="35.1409"
                    y2="17.3398"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6F4FF2" />
                    <stop offset="1" stopColor="#61FCAE" />
                  </linearGradient>
                </defs>
              </svg>

              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
