"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import React from "react";

const animation = { duration: 40000, easing: (t: number) => t };

const HeroSection: React.FC = () => {
  const [ref, _slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
    },
    renderMode: "performance",
    drag: false,
    created(s: {
      moveToIdx: (
        arg0: number,
        arg1: boolean,
        arg2: { duration: number; easing: (t: number) => number }
      ) => void;
    }) {
      s.moveToIdx(5, true, animation);
    },
    updated(s: {
      moveToIdx: (
        arg0: any,
        arg1: boolean,
        arg2: { duration: number; easing: (t: number) => number }
      ) => void;
      track: { details: { abs: number } };
    }) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s: {
      moveToIdx: (
        arg0: any,
        arg1: boolean,
        arg2: { duration: number; easing: (t: number) => number }
      ) => void;
      track: { details: { abs: number } };
    }) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <MaxWidthWrapper className="relative grid-cols-5 pb-20 sm:pb-32 lg:pb-52 lg:pt-24 xl:grid xl:gap-x-8 xl:pt-32">
      <Image
        src="/right-grid.svg"
        alt="left-grid"
        width={413}
        height={476}
        className="absolute -right-8 top-0"
      />

      <div className="col-span-3 px-6 pt-12 lg:pt-0">
        <div className="mx-auto flex flex-col items-center text-center lg:text-left xl:items-start">
          <h1 className="z-20 w-fit text-balance bg-gradient-to-r from-[#6F4FF2] via-[#B0F6FF] to-[#61FCAE] bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
            Starknet&apos;s Yield Powerhouse
          </h1>

          <p className="mt-4 text-balance text-center text-xl text-white/80 md:text-wrap lg:text-left">
            Maximise your crypto earnings by finding{" "}
            <br className="hidden xl:block" />
            the best opportunities.
          </p>

          <div
            ref={ref}
            // onMouseOver={() => {
            //   slider.current?.animator.stop();
            // }}
            // onMouseLeave={() => {
            //   slider.current?.animator.start([
            //     {
            //       distance: 0,
            //       duration: 5,
            //       easing: animation.easing,
            //     },
            //   ]);
            // }}
            className="keen-slider mt-16 flex !w-[85%] items-center !rounded-lg border border-white/20 bg-gradient-to-r from-[#372B70] to-[#4F4875] px-5 py-2 font-semibold xl:mt-[4.5rem"
          >
            <div className="keen-slider__slide z-10 select-all number-slide1 flex items-center text-nowrap text-sm">
              STRK 20% APR
            </div>

            <div className="keen-slider__slide z-10 select-all number-slide2 flex items-center text-nowrap text-sm">
              USDT 25%
            </div>

            <div className="keen-slider__slide z-10 select-all number-slide3 flex items-center text-nowrap text-sm">
              STRK 20%
            </div>

            <div className="keen-slider__slide z-10 select-all number-slide2 flex items-center text-nowrap text-sm">
              USDT 25%
            </div>

            <div className="keen-slider__slide z-10 select-all number-slide3 flex items-center text-nowrap text-sm">
              STRK 20%
            </div>
          </div>
        </div>
      </div>

      <div className="relative col-span-full hidden h-[293px] w-full justify-center rounded-2xl bg-cyan-300 bg-gradient-to-r from-[#AD99FF] to-[#61FCAE] lg:col-span-2 xl:flex">
        <div className="absolute -top-[30%] left-8 flex animate-[bounce_4s_infinite] flex-col items-center justify-center gap-5 rounded-2xl border border-[#A1A1ED66] bg-[#A1A1ED1A] px-10 py-12 shadow-2xl backdrop-blur-md">
          <Image
            src="/star.svg"
            width={12}
            height={14}
            alt="star"
            className="absolute -left-[7px] top-[50%] -translate-y-[50%]"
          />

          <Image
            src="/coin.svg"
            width={65}
            height={59}
            alt="coin1"
            className="absolute -top-6 left-6 z-10"
          />

          <Image
            src="/coin.svg"
            width={70}
            height={64}
            alt="coin1"
            className="absolute -top-5 left-[3.4rem] z-0 rotate-[80deg]"
          />

          <Image src="/hero1.svg" width={144} height={163} alt="hero1" />
          <p className="text-6xl font-bold text-white">100%</p>
        </div>

        <div className="absolute -right-12 -top-[10%] flex animate-[bounce_4s_infinite] flex-col items-center justify-center gap-5 rounded-2xl border border-[#A1A1ED66] bg-[#A1A1ED1A] px-12 py-12 shadow-2xl backdrop-blur-md">
          <Image
            src="/star.svg"
            width={13}
            height={14}
            alt="star"
            className="absolute -top-[30%] left-[75%] -translate-x-[50%]"
          />

          <Image
            src="/hero2.svg"
            width={76}
            height={76}
            alt="hero1"
            className="absolute -top-[30%] left-[50%] -translate-x-[50%]"
          />
          <p className="text-4xl font-bold text-white">25%</p>
        </div>

        <div className="absolute -bottom-[15%] -right-24 flex animate-[bounce_4s_infinite] flex-col items-center justify-center gap-5 rounded-2xl border border-[#A1A1ED66] bg-[#A1A1ED1A] px-16 pb-[5.5rem] pt-5 shadow-2xl backdrop-blur-md">
          <Image
            src="/star.svg"
            width={12}
            height={14}
            alt="star"
            className="absolute -right-[7px] top-[75%] -translate-y-[50%]"
          />

          <Image
            src="/coin2.svg"
            width={91}
            height={77}
            alt="coin2"
            className="absolute bottom-0 left-[50%] -translate-x-[50%]"
          />

          <Image
            src="/coin_line.svg"
            width={133}
            height={55}
            alt="coin_line"
            className="absolute -bottom-[1.70rem] left-[50%] -translate-x-[50%]"
          />

          <Image src="/hero3.svg" width={48} height={48} alt="hero1" />
          <p className="text-2xl font-bold text-white">30%+</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
