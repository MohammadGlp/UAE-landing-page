"use client";

import Image from "next/image";
import WichCityImage from "/public/assets/images/wich-city.png";
import Button from "@/components/button/button";

export const WhichCityHero = () => {
  return (
    <div className="relative lg:w-[343px] w-[312px] h-48 flex items-center justify-center overflow-hidden rounded-[40px]">
      <div className="absolute inset-0 bg-[radial-gradient(51.45%_283.89%_at_51.45%_50%,_#00BFFF_0%,_#0F1819_100%)] p-px rounded-[40px]">
        <div className="w-full h-full bg-gray-800 rounded-3xl p-6 flex flex-col items-center justify-center relative">
          <Image
            src={WichCityImage}
            alt="WhichCityHero"
            className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
          />

          <Button className="absolute bottom-4 border border-[#fff]/20 w-[300px] h-14 bg-[#27353B]/[32%] backdrop-blur-[32px] flex justify-between items-center gap-4 text-gray-white text-lg !py-0 !px-2 !rounded-full">
            <span className="pl-16">which city to go</span>

            <span className="w-10 h-10 border border-[#fff]/20 rounded-full">
              <span className="size-full bg-open-icon bg-no-repeat bg-center block" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
