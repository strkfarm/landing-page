"use client";

import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { useDotButton } from "./EmblaCarouselDotButton";

import { useWindowSize } from "@/lib/useWindowSize";
import { cn } from "@/lib/utils";
import { Box, Image as ChakraImage, Link } from "@chakra-ui/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { isMobile } from "react-device-detect";

const banner_images = [
  {
    desktop: "/banners/seed_grant.svg",
    mobile: "/banners/seed_grant_small.jpg",
    link: "https://x.com/strkfarm/status/1787783906982260881",
  },
  {
    desktop: "/banners/ognft.svg",
    mobile: "/banners/ognft_small.svg",
    link: "https://x.com/strkfarm/status/1788558092109775029",
  },
];

const Carousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay({ playOnInit: true, delay: 8000 })]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const size = useWindowSize();

  return (
    <MaxWidthWrapper className="z-20 mt-56">
      <Box className="embla" ref={emblaRef} margin={0} width={"100%"}>
        <Box className="embla__container">
          {banner_images.map((banner, index) => (
            <Box
              className="embla__slide"
              position="relative"
              height={"auto"}
              key={index}
              padding={"10px"}
            >
              <Link href={banner.link} isExternal>
                <ChakraImage
                  src={
                    (!isMobile && size.width > 450) || size.width === 0
                      ? banner.desktop
                      : banner.mobile
                  }
                  height={"auto"}
                  boxShadow={"0px 0px 2px #484848"}
                  width="100%"
                  alt="Banner"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
              </Link>
            </Box>
          ))}
        </Box>
      </Box>

      <div className="mb-[1.5rem] grid justify-center gap-[1.2rem]">
        <div className="mr-[calc((2.6rem-1.4rem)/2*-1)] flex flex-wrap items-center justify-end gap-[.5rem]">
          {scrollSnaps.map((_, index) => (
            <div
              className={cn(
                "none flex h-[.8rem] w-[.8rem] cursor-pointer items-center justify-center rounded-full border-[1px] border-[#373A5D] bg-black",
                {
                  "bg-[#4D59E8]": index === selectedIndex,
                }
              )}
              key={index}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Carousel;
