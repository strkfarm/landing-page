import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";

const Updates = () => {
  return (
    <MaxWidthWrapper className="relative">
      <Image
        src="/left-grid.svg"
        alt="left-grid"
        width={476}
        height={476}
        className="absolute -left-5 top-0"
      />

      <Image
        src="/right-grid.svg"
        alt="left-grid"
        width={413}
        height={476}
        className="absolute -right-8 top-0"
      />

      <h5 className="mt-24 bg-gradient-to-r from-[#B0F6FF] to-[#61FCAE] bg-clip-text text-center text-2xl font-medium text-transparent">
        Updates
      </h5>

      <div className="mt-6 flex flex-col items-center gap-6 md:flex-row md:gap-8 justify-center">
        <div className="z-20 w-fit rounded-lg border border-[#A1A1ED66] bg-[#1F1F2E] px-8 py-6">
          <Image
            src="og-farmer.svg"
            width={265}
            height={318}
            alt="og-farmer"
            className="rounded-md bg-black"
          />
          <p className="mt-5 text-center text-white/90">OG farmer NFT launch</p>
        </div>

        <div className="z-20 w-fit rounded-lg border border-[#A1A1ED66] bg-[#1F1F2E] px-8 py-6">
          <Image
            src="starknet-seed-grant.svg"
            width={265}
            height={318}
            alt="og-farmer"
            className="rounded-md bg-black"
          />
          <p className="mt-5 text-center text-white/90">OG farmer NFT launch</p>
        </div>

        <div className="z-20 w-fit rounded-lg border border-[#A1A1ED66] bg-[#1F1F2E] px-8 py-6">
          <Image
            src="yield-strategy.svg"
            width={265}
            height={318}
            alt="og-farmer"
            className="rounded-md bg-black"
          />
          <p className="mt-5 text-center text-white/90">OG farmer NFT launch</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Updates;
