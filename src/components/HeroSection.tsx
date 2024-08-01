"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import React from "react";

export const animation = { duration: 40000, easing: (t: number) => t };

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
    <MaxWidthWrapper className="relative grid-cols-5 pb-20 sm:pb-32 lg:pb-52 lg:grid lg:gap-x-8 lg:pt-32">
      <Image
        src="/right-grid.svg"
        alt="right-grid"
        width={413}
        height={476}
        className="absolute -right-[4.5rem] top-[12%] hidden lg:block"
      />

      <Image
        src="/left-grid2.svg"
        alt="left-grid"
        width={163}
        height={163}
        className="absolute -left-8 top-[25%] lg:hidden"
      />

      <div className="w-[793px] h-[787px] absolute -right-[17%] -top-[20%] rounded-full bg-gradient-to-r from-[#61FCAE1A] to-[#1111191A] blur-3xl" />

      <div className="col-span-3 px-6 pt-12 lg:pt-0">
        <div className="mx-auto flex flex-col items-center text-center lg:text-left lg:items-start">
          <h1 className="z-20 w-fit text-balance bg-gradient-to-r from-[#6F4FF2] via-[#B0F6FF] to-[#61FCAE] bg-clip-text text-[2rem] leading-9 font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
            Starknet&#8217;s Yield Powerhouse
          </h1>

          <p className="mt-4 text-balance text-center text-xl text-[#F8F8FF] md:text-wrap lg:text-left z-20">
            Maximise your crypto earnings by finding{" "}
            <br className="hidden lg:block" />
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
            className="!hidden keen-slider mt-16 lg:!flex !w-[85%] items-center !rounded-lg border border-white/20 bg-gradient-to-r from-[#372B70] to-[#4F4875] px-5 py-2 font-semibold lg:mt-[4.5rem]"
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

      <div className="col-span-full -ml-12 lg:ml-0 mt-28 lg:mt-6 mb-7 lg:col-span-2">
        <div className="relative flex h-[162px] lg:h-[293px] w-full max-w-[250px] lg:max-w-none justify-center rounded-2xl bg-cyan-300 bg-gradient-to-r from-[#AD99FF] to-[#61FCAE]  lg:flex mx-auto">

          <div className="absolute -top-[30%] left-4 lg:left-6 xl:left-8 flex animate-[bounce_4s_infinite] flex-col items-center justify-center gap-2 lg:gap-5 rounded-xl border border-[#A1A1ED66] bg-[#A1A1ED1A] lg:px-7 lg:py-6 xl:px-10 xl:py-12 px-4 py-6 shadow-2xl backdrop-blur-md">
            <div className="absolute -left-[4px] lg:-left-[7px] top-[50%] -translate-y-[50%]">
              <div className="relative w-[6.99px] h-[7.76px] lg:w-[12px] lg:h-[14px]">
                <Image
                  src="/star.svg"
                  fill
                  objectFit="cover"
                  alt="star"
                />
              </div>
            </div>

            <div className="absolute -top-4 lg:-top-6 left-6 z-10">
              <div className="relative w-[33px] h-[30px] lg:w-[70px] lg:h-[64px]">
                <Image
                  src="/coin.svg"
                  fill
                  objectFit="cover"
                  alt="coin1"
                />
              </div>
            </div>

            <div className="absolute -top-4 lg:-top-5 left-[2.6rem] lg:left-[3.4rem] z-0 rotate-[80deg]">
              <div className="relative w-[33px] h-[30px] lg:w-[70px] lg:h-[64px]">
                <Image
                  src="/coin.svg"
                  fill
                  objectFit="cover"
                  alt="coin2"
                />
              </div>
            </div>

            <div className="relative w-[79px] lg:w-[144px] h-[90px] lg:h-[163px]">

              <Image src="/hero1.svg" fill objectFit="cover" alt="hero1" />
            </div>

            <p className="text-4xl lg:text-6xl font-bold text-white">100%</p>
          </div>

          <div className="absolute -right-6 -top-[10%] lg:-right-10 xl:-right-12 flex animate-[bounce_4s_infinite] flex-col items-center justify-center gap-5 rounded-xl border border-[#A1A1ED66] bg-[#A1A1ED1A] lg:p-10 xl:p-12 p-6 shadow-2xl backdrop-blur-md">
            <div className="absolute -top-[18%] left-[69%] lg:-top-[30%] lg:left-[75%] -translate-x-[50%]">
              <div className="relative w-[7.21px] h-[8.01px] lg:w-[13px] lg:h-[14px]">
                <Image
                  src="/star.svg"
                  fill
                  objectFit="cover"
                  alt="star"
                />
              </div>
            </div>

            <div className="absolute -top-[15%] lg:-top-[30%] left-[50%] -translate-x-[50%]">
              <div className="relative h-[42px] w-[42px] lg:h-[76px] lg:w-[76px]">
                <Image
                  src="/hero2.svg"
                  fill
                  objectFit="cover"
                  alt="hero1"
                />
              </div>
            </div>

            <p className="text-2xl lg:text-4xl font-bold text-white mt-4 lg:mt-0">25%</p>
          </div>

          <div className="absolute -right-12 -bottom-12 lg:-bottom-[15%] lg:-right-16 xl:-right-24 flex animate-[bounce_4s_infinite] flex-col items-center justify-center gap-1 lg:gap-5 rounded-xl border border-[#A1A1ED66] bg-[#A1A1ED1A] px-8 py-3 lg:px-12 xl:px-16 lg:pb-[5.5rem] lg:pt-5 shadow-2xl backdrop-blur-md">
            <div className="absolute -right-[4px] lg:-right-[7px] top-[75%] -translate-y-[50%]">
              <div className="relative w-[6.99px] h-[7.76px] lg:w-[12px] lg:h-[14px]">
                <Image
                  src="/star.svg"
                  fill
                  objectFit="cover"
                  alt="star"
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-[50%] -translate-x-[50%]">
              <div className="relative h-[43px] w-[50px] lg:h-[77px] lg:w-[91px]">
                <Image
                  src="/coin2.svg"
                  fill
                  objectFit="cover"
                  alt="coin2"
                />
              </div>
            </div>

            <div className="lg:hidden absolute -bottom-[1rem] lg:-bottom-[1.70rem] left-[50%] -translate-x-[50%]">
              <div className="relative h-[30px] w-[74px] lg:h-[133px] lg:w-[55px]">
                <Image
                  src="/coin_line.svg"
                  fill
                  objectFit="cover"
                  alt="coin_line"
                />
              </div>
            </div>

            <Image
              src="/coin_line.svg"
              width={133}
              height={55}
              className="hidden lg:flex absolute left-[50%] -bottom-[1.70rem] -translate-x-[50%]"
              alt="coin_line"
            />

            <div className="relative h-[26px] w-[26px] lg:h-[48px] lg:w-[48px]">
              <Image src="/hero3.svg" fill objectFit="cover" alt="hero1" />
            </div>

            <p className="text-lg lg:text-2xl font-bold text-white mb-8 lg:mb-0">30%+</p>
          </div>
        </div>
      </div>


      <div
        ref={ref}
        className="lg:!hidden keen-slider mt-24 flex !w-full items-center !rounded-lg border border-white/20 bg-gradient-to-r from-[#372B70] to-[#4F4875] px-5 py-2 font-semibold mx-auto"
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
    </MaxWidthWrapper>
  );
};

export default HeroSection;
