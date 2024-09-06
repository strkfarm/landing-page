'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Link from 'next/link';
import { animation } from './HeroSection';

const RunningBanner = () => {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free',
    slides: {
      perView: 2,
      spacing: 2,
    },
    renderMode: 'performance',
    drag: false,
    created(s: {
      moveToIdx: (
        arg0: number,
        arg1: boolean,
        arg2: { duration: number; easing: (t: number) => number },
      ) => void;
    }) {
      s.moveToIdx(5, true, animation);
    },
    updated(s: {
      moveToIdx: (
        arg0: any,
        arg1: boolean,
        arg2: { duration: number; easing: (t: number) => number },
      ) => void;
      track: { details: { abs: number } };
    }) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s: {
      moveToIdx: (
        arg0: any,
        arg1: boolean,
        arg2: { duration: number; easing: (t: number) => number },
      ) => void;
      track: { details: { abs: number } };
    }) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div
      ref={ref}
      className="keen-slider h-10 bg-gradient-to-r from-[#B0F6FF] to-[#61FCAE] text-black"
    >
      <Link target='_blank' href='https://docs.strkfarm.xyz/p/community/og-farmer-nft-campaign' className="keen-slider__slide flex items-center text-nowrap hover:underline">
        🏞️ OG Farmer Limited edition NFT Campaign is live 📢
      </Link>

      <Link target='_blank' href='https://docs.strkfarm.xyz/p/community/og-farmer-nft-campaign' className="keen-slider__slide flex items-center text-nowrap hover:underline">
        🏞️ OG Farmer Limited edition NFT Campaign is live 📢
      </Link>

      <Link target='_blank' href='https://docs.strkfarm.xyz/p/community/og-farmer-nft-campaign' className="keen-slider__slide flex items-center text-nowrap hover:underline" >
        🏞️ OG Farmer Limited edition NFT Campaign is live 📢
      </Link>
    </div >
  );
};

export default RunningBanner;
