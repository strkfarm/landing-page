'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Stats from "./Stats";

const Partners: React.FC = () => {
  return (
    <MaxWidthWrapper className="relative">
      <h5 className="bg-gradient-to-r from-[#B0F6FF] to-[#61FCAE] bg-clip-text text-center text-2xl font-medium text-transparent">
        Partners & Backed by
      </h5>

      <div className="w-[793px] h-[787px] absolute -left-[25%] top-[15%] rounded-full bg-gradient-to-r from-[#61FCAE1A] to-[#1111191A] blur-3xl -z-50" />


      <div className="mx-auto mt-6 flex w-full max-w-[50rem] flex-wrap items-center justify-center lg:gap-x-32 gap-x-7 gap-y-5">
        <Link href='https://www.starknet.io/' className="relative w-[152px] h-[34px] lg:w-[165px] lg:h-[44px]">
          <Image src="/starknet.svg" alt="starknet" fill objectFit="contain" />
        </Link>
        <Link href='https://zklend.com/' className="relative w-[152px] h-[34px] lg:w-[165px] lg:h-[44px]">
          <Image src="/zklend.svg" alt="zklend" fill objectFit="contain" />
        </Link>
        <Link href='https://nostra.finance/' className="relative w-[152px] h-[34px] lg:w-[165px] lg:h-[44px]">
          <Image src="/nostra.svg" alt="zklend" fill objectFit="contain" />
        </Link>
        <Link href='https://www.pragma.build/' className="relative w-[152px] h-[34px] lg:w-[165px] lg:h-[44px]">
          <Image src="/pragma.svg" alt="zklend" fill objectFit="contain" />
        </Link>
        <Link href='https://nimbora.io/' className="relative w-[152px] h-[34px] lg:w-[165px] lg:h-[44px]">
          <Image src="/nimbora.svg" alt="zklend" fill objectFit="contain" />
        </Link>
      </div>

      <Stats />
    </MaxWidthWrapper>
  );
};

export default Partners;
