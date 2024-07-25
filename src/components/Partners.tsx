import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";

const Partners: React.FC = () => {
  return (
    <MaxWidthWrapper>
      <h5 className="bg-gradient-to-r from-[#B0F6FF] to-[#61FCAE] bg-clip-text text-center text-2xl font-medium text-transparent">
        Partners & Backed by
      </h5>

      <div className="mx-auto mt-6 flex w-full max-w-[50rem] flex-wrap items-center justify-center gap-x-24 gap-y-8">
        <Image src="/starknet.svg" alt="starknet" width={165} height={55} />
        <Image src="/zklend.svg" alt="zklend" width={165} height={55} />
        <Image src="/nimbora.svg" alt="zklend" width={165} height={55} />
        <Image src="/nostra.svg" alt="zklend" width={165} height={55} />
        <Image src="/pragma.svg" alt="zklend" width={165} height={55} />
      </div>

      <div className="mt-32 flex justify-around rounded-2xl bg-opacity-80 bg-gradient-to-r from-[#2E2C5C] to-[#295446] px-4 py-4 sm:px-0 sm:py-8">
        <div className="flex flex-col items-center justify-center gap-3">
          <h4 className="text-xs text-white/90 sm:text-sm xl:text-lg">TVL</h4>
          <span className="text-lg font-bold text-[#61EDAA] sm:text-2xl xl:text-5xl">
            $419
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <h4 className="text-xs text-white/90 sm:text-sm xl:text-lg">
            Total rewards generated
          </h4>
          <span className="text-lg font-bold text-[#61EDAA] sm:text-2xl xl:text-5xl">
            $41.5k
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <h4 className="text-xs text-white/90 sm:text-sm xl:text-lg">
            Supported pools
          </h4>
          <span className="text-lg font-bold text-[#61EDAA] sm:text-2xl xl:text-5xl">
            50
          </span>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Partners;
