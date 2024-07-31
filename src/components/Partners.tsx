import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";

const Partners: React.FC = () => {
  return (
    <MaxWidthWrapper>
      <h5 className="bg-gradient-to-r from-[#B0F6FF] to-[#61FCAE] bg-clip-text text-center text-lg lg:text-2xl font-medium text-transparent">
        Partners & Backed by
      </h5>

      <div className="mx-auto mt-6 flex w-full max-w-[50rem] flex-wrap items-center justify-center lg:gap-x-32 gap-8">
        <div className="relative w-[152px] h-[34px] lg:w-[165px] lg:h-[44px]"><Image src="/starknet.svg" alt="starknet" fill objectFit="contain" /></div>
        <div className="relative w-[152px] h-[34px] lg:w-[165px] lg:h-[44px]"><Image src="/zklend.svg" alt="zklend" fill objectFit="contain" /></div>
        <div className="relative w-[152px] h-[34px] lg:w-[165px] lg:h-[44px]"><Image src="/nimbora.svg" alt="zklend" fill objectFit="contain" /></div>
        <div className="relative w-[152px] h-[34px] lg:w-[165px] lg:h-[44px]"><Image src="/nostra.svg" alt="zklend" fill objectFit="contain" /></div>
        <div className="relative w-[152px] h-[34px] lg:w-[165px] lg:h-[44px]"><Image src="/pragma.svg" alt="zklend" fill objectFit="contain" /></div>
      </div>

      <div className="mt-32 flex flex-col gap-10 lg:flex-row justify-around rounded-2xl bg-opacity-80 bg-gradient-to-r from-[#2E2C5C] to-[#295446] py-8">
        <div className="flex flex-col items-center justify-center gap-3">
          <h4 className="text-white/90 text-lg">TVL</h4>
          <span className="font-bold text-[#61EDAA] text-5xl">
            $419
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <h4 className="text-white/90 text-lg">
            Total rewards generated
          </h4>
          <span className="font-bold text-[#61EDAA] text-5xl">
            $41.5k
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <h4 className="text-white/90 text-lg">
            Supported pools
          </h4>
          <span className="font-bold text-[#61EDAA] text-5xl">
            50
          </span>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Partners;
