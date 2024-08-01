'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })


  return (
    <MaxWidthWrapper className="z-20 mt-16 lg:mt-56 relative px-0">
      <div className="w-[793px] h-[787px] absolute -left-[25%] -top-[15%] rounded-full bg-gradient-to-r from-[#61FCAE1A] to-[#1111191A] blur-3xl -z-50" />

      <div ref={sliderRef} className="keen-slider -z-50">
        <div className="keen-slider__slide number-slide1 flex items-center justify-center">
          <div className="relative h-[127px] sm:h-[155px] lg:h-[343px] w-[90%]">
            <Image
              src="/c1.svg"
              alt="c1"
              fill
              objectFit="cover"
              className="w-[90%] rounded-[1.3rem] lg:rounded-3xl lg:border-none border border-[#A1A1ED4D]"
            />
          </div>
        </div>

        <div className="keen-slider__slide number-slide2 flex items-center justify-center">
          <div className="relative h-[127px] sm:h-[155px] lg:h-[343px] w-[90%]">
            <Image
              src="/c2.svg"
              alt="c1"
              fill
              objectFit="cover"
              className="w-[90%] rounded-[1.3rem] lg:rounded-3xl lg:border-none border border-[#A1A1ED4D]"
            />
          </div>
        </div>
      </div>

      {loaded && instanceRef.current && (
        <>
          <div
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            className="absolute hidden lg:flex left-[10%] top-[45%] z-50 w-fit cursor-pointer rounded-full bg-white p-0.5"
          >
            <ChevronLeft className="size-5 text-black" />
          </div>

          <div
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            className="absolute hidden lg:flex right-[10%] top-[45%] z-50 w-fit cursor-pointer rounded-full bg-white p-0.5"
          >
            <ChevronRight className="size-5 text-black" />
          </div>
        </>
      )}

      {loaded && instanceRef.current && (
        <div className="mt-3 flex w-full items-center justify-center gap-2">
          {[
            // @ts-ignore
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={cn(
                  'size-3 rounded-full border border-[#A1A1ED66] bg-[#A1A1ED1A] cursor-pointer',
                  {
                    'border-[#61FCAE] bg-[#61FCAE]': currentSlide === idx,
                  },
                )}
              />
            )
          })}
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export default Carousel;
