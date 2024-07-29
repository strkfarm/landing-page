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

  return (
    <MaxWidthWrapper className="z-20 mt-56">
      <Swiper
        ref={swiperRef}
        navigation
        pagination
        loop
        modules={[Navigation, Pagination]}
        className="mySwiper relative"
      >
        <SwiperSlide className="!flex !items-center !justify-center">
          <div className="relative h-[343px] w-[90%]">
            <Image
              src="/c1.svg"
              alt="c1"
              fill
              objectFit="cover"
              className="w-[90%] rounded-lg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="!flex !items-center !justify-center">
          <div className="relative h-[343px] w-[90%]">
            <Image
              src="/c1.svg"
              alt="c1"
              fill
              objectFit="cover"
              className="w-[90%] rounded-lg"
            />
          </div>
        </SwiperSlide>

        <div
          // @ts-ignore
          onClick={() => swiperRef?.current?.swiper.slidePrev()}
          className="absolute left-[4%] top-[45%] z-50 w-fit cursor-pointer rounded-full bg-white p-0.5"
        >
          <ChevronLeft className="size-5 text-black" />
        </div>

        <div
          // @ts-ignore
          onClick={() => swiperRef?.current?.swiper.slideNext()}
          className="absolute right-[4%] top-[45%] z-50 w-fit cursor-pointer rounded-full bg-white p-0.5"
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
