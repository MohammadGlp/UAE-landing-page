"use client";

import Image from "next/image";
import WichCityImage from "/public/assets/images/wich-city.png";
import Button from "@/components/button/button";
import { Squircle } from "corner-smoothing";

export const WhichCityHero = () => {
  return (
    <div className="relative 2xl:w-[343px] xl:w-full lg:w-[343px] w-[312px] h-48 flex items-center justify-center overflow-hidden">
      <Squircle
        cornerRadius={40}
        className="absolute inset-0 bg-[radial-gradient(51.45%_283.89%_at_51.45%_50%,_#00BFFF_0%,_#0F1819_100%)] p-px"
      >
        <div className="w-full h-full bg-transparent rounded-3xl p-6 flex flex-col items-center justify-center relative">
          <Image
            src={WichCityImage}
            alt="WhichCityHero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <Button className="absolute bottom-4 border border-[#fff]/20 mx-4 2xl:w-[300px] xl:w-[280px] w-[300px] h-14 bg-[#27353B]/[32%] backdrop-blur-[32px] flex justify-between items-center gap-4 text-gray-white text-lg !py-0 2xl:!px-2 xl:!px-4 !px-2 !rounded-full">
            <p className="block w-full text-center">which city to go</p>

            <span className="min-w-10 h-10 border border-[#fff]/20 rounded-full">
              <span className="size-full bg-open-icon bg-no-repeat bg-center block" />
            </span>
          </Button>
        </div>
      </Squircle>
    </div>
  );
};
