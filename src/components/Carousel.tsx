'use client';

import React, { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';

const Carousel: React.FC = () => {
  const swiperRef = useRef(null);
  const swiperSlide = useSwiperSlide();

  console.log(swiperSlide?.isActive, 'isActive')

  return (
    <MaxWidthWrapper className="z-20 mt-56 relative">
      <div className="w-[793px] h-[787px] absolute -left-[25%] -top-[15%] rounded-full bg-gradient-to-r from-[#61FCAE1A] to-[#1111191A] blur-3xl -z-50" />

      <Swiper
        ref={swiperRef}
        navigation
        pagination
        loop
        modules={[Navigation, Pagination]}
        className="mySwiper relative"
      >
        <SwiperSlide className="!flex !items-center !justify-center">
          <div className="relative h-[127px] lg:h-[343px] w-[90%]">
            <Image
              src="/c1.svg"
              alt="c1"
              fill
              objectFit="cover"
              className="w-[90%] rounded-[2rem] lg:rounded-3xl lg:border-none border border-[#A1A1ED4D]"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="!flex !items-center !justify-center">
          <div className="relative h-[127px] lg:h-[343px] w-[90%]">
            <Image
              src="/c2.svg"
              alt="c2"
              fill
              objectFit="cover"
              className="w-[90%] rounded-[2rem] lg:rounded-3xl lg:border-none border border-[#A1A1ED4D]"
            />
          </div>
        </SwiperSlide>

        <div
          // @ts-ignore
          onClick={() => swiperRef?.current?.swiper.slidePrev()}
          className="absolute hidden lg:flex left-[4%] top-[45%] z-50 w-fit cursor-pointer rounded-full bg-white p-0.5"
        >
          <ChevronLeft className="size-5 text-black" />
        </div>

        <div
          // @ts-ignore
          onClick={() => swiperRef?.current?.swiper.slideNext()}
          className="absolute hidden lg:flex right-[4%] top-[45%] z-50 w-fit cursor-pointer rounded-full bg-white p-0.5"
        >
          <ChevronRight className="size-5 text-black" />
        </div>

        <div className="mt-3 flex w-full items-center justify-center gap-2">
          <div
            className={cn(
              'size-3 rounded-full border border-[#A1A1ED66] bg-[#A1A1ED1A]',
              {
                'border-[#61FCAE] bg-[#61FCAE]': swiperSlide?.isActive,
              },
            )}
          />

          <div
            className={cn(
              'size-3 rounded-full border border-[#A1A1ED66] bg-[#A1A1ED1A]',
              {
                'border-[#61FCAE] bg-[#61FCAE]': swiperSlide?.isActive,
              },
            )}
          />
        </div>
      </Swiper>
    </MaxWidthWrapper>
  );
};

export default Carousel;
