import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Updates = () => {
  return (
    <MaxWidthWrapper className="relative">
      <Image
        src="/left-grid.svg"
        alt="left-grid"
        width={406}
        height={406}
        className="absolute -left-[6%] top-[15%] hidden lg:block"
      />

      <Image
        src="/right-grid2.svg"
        alt="right-grid"
        width={246}
        height={246}
        className="absolute -right-[6%] top-[15%] hidden lg:block"
      />

      <h5 className="mt-24 bg-gradient-to-r from-[#B0F6FF] to-[#61FCAE] bg-clip-text text-center text-2xl font-medium text-transparent">
        Updates
      </h5>

      <div className="mt-6 flex flex-col items-center gap-6 md:flex-row md:gap-8 justify-center">
        <Link target="_blank" href='https://x.com/strkfarm/status/1788558092109775029' className="cursor-pointer relative z-20 w-fit rounded-2xl border border-[#A1A1ED66] bg-[#1F1F2E] px-8 py-6">
          <Image
            src="og-farmer.svg"
            width={265}
            height={318}
            alt="og-farmer"
            className="rounded-lg bg-black"
          />
          <p className="mt-5 text-center text-white/90">OG farmer NFT launch</p>

          <div className="absolute top-[25%] -left-[7px]">
            <div className="relative w-[13px] h-[15px] lg:w-[13px] lg:h-[14px]">
              <Image
                src="/star.svg"
                fill
                objectFit="cover"
                alt="star"
              />
            </div>
          </div>
        </Link>

        <Link target="_blank" href='https://x.com/strkfarm/status/1787783906982260881' className="cursor-pointer relative z-20 w-fit rounded-2xl border border-[#A1A1ED66] bg-[#1F1F2E] px-8 py-6">
          <Image
            src="starknet-seed-grant.svg"
            width={265}
            height={318}
            alt="og-farmer"
            className="rounded-lg bg-black"
          />
          <p className="mt-5 text-center text-white/90">Starknet seed grant</p>

          <div className="absolute left-[50%] -top-2">
            <div className="relative w-[13px] h-[15px] lg:w-[13px] lg:h-[14px]">
              <Image
                src="/star.svg"
                fill
                objectFit="cover"
                alt="star"
              />
            </div>
          </div>
        </Link>

        <Link target="_blank" href='https://x.com/strkfarm/status/1817886800318513273' className="cursor-pointer relative z-20 w-fit rounded-2xl border border-[#A1A1ED66] bg-[#1F1F2E] px-8 py-6">
          <Image
            src="yield-strategy.svg"
            width={265}
            height={318}
            alt="og-farmer"
            className="rounded-lg bg-black"
          />
          <p className="mt-5 text-center text-white/90">High yield strategy launch</p>

          <div className="absolute bottom-[25%] -right-[7px]">
            <div className="relative w-[13px] h-[15px] lg:w-[13px] lg:h-[14px]">
              <Image
                src="/star.svg"
                fill
                objectFit="cover"
                alt="star"
              />
            </div>
          </div>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Updates;
