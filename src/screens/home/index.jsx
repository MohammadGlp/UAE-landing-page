"use client";
import { HeroComponent } from "@/screens/home/components/hero";
import { MedicalHero } from "@/screens/home/components/medical-hero";
import { WhichCityHero } from "@/screens/home/components/which-city-hero";
import { BusinessButton } from "@/screens/home/components/business-button";
import { Banner } from "@/screens/home/components/banner";
import { LearnLanguage } from "@/screens/home/components/learn-language";
import { Slider } from "@/screens/home/components/slider";
import { HeaderComponent } from "@/screens/layout";
import useDeviceWidth from "@/hooks/useDeviceWidth";
import { usePathname } from "next/navigation";

export const HomeComponent = () => {
  const { deviceWidth } = useDeviceWidth();
  const path = usePathname();

  return (
    <div className="w-full h-full flex xl:flex-row lg:flex-col-reverse flex-col items-center gap-4">
      <div className="lg:hidden block self-center">
        <Slider />
      </div>
      <div className="lg:flex hidden w-[45%] h-full xl:flex-col flex-row justify-center items-end gap-8 pl-2">
        <Slider />
        <Banner />
      </div>
      <div className="xl:w-[55%] w-full flex flex-col xl:items-start items-center gap-8 xl:pr-16">
        {path === "/" && deviceWidth > 1024 && <HeaderComponent />}
        <HeroComponent />
        {deviceWidth < 1024 && <Banner />}
        <div className="flex lg:flex-row flex-col gap-4">
          <div className="flex lg:flex-col flex-col-reverse gap-4">
            <MedicalHero />
            <LearnLanguage />
          </div>
          <div className="flex flex-col gap-8">
            <WhichCityHero />
            <BusinessButton />
          </div>
        </div>
      </div>
    </div>
  );
};
