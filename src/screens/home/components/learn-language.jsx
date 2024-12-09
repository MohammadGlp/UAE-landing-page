"use client";
import { useState } from "react";
import Button from "@/components/button/button";
import Select from "@/components/input/select";
import useMenus from "@/hooks/useMenus";
import { Squircle } from "corner-smoothing";

export const LearnLanguage = () => {
  const { LearnLanguagesItems } = useMenus();
  const [hover, setHover] = useState(false);
  return (
    <div className="relative z-0 2xl:w-[403px] xl:w-[340px] lg:w-[403px] w-[312px] xl:h-56 h-fit flex flex-col gap-6 py-5 xl:px-8 px-5">
      <Squircle
        cornerRadius={40}
        className="absolute -z-10 w-full h-full top-0 bottom-0 left-0 right-0 bg-learn-language-back-image bg-no-repeat bg-cover bg-blend-overlay bg-dark-soul-3 bg-center"
        children={""}
      />

      <div className="flex justify-between items-center">
        <p className="text-gray-light-2 xl:text-xl text-lg">Learn Language</p>
        <Button
          className={`bg-gray-light-2 !rounded-full !h-10 ${hover ? "flex gap-3 animate-shake w-28 !px-0 !pl-7" : "animate-reverse-shake w-20"}`}
          onMouseEnter={setHover}
          onMouseLeave={() => setHover(false)}
        >
          Start
          {hover && (
            <span
              className={`animate-shake size-4 !bg-open-icon !bg-no-repeat !bg-auto !bg-center block p-4 !bg-black rounded-full`}
            />
          )}
        </Button>
      </div>
      <div className="flex 2xl:gap-6 xl:gap-2 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center xl:gap-2 gap-1">
            <span className="text-gray-light-2 font-light xl:text-base text-xs">
              From:
            </span>
            <Select
              className="2xl:w-56 xl:w-44 lg:w-56 w-44 xl:h-14 h-12 2xl:!text-base xl:!text-sm"
              Icon={true}
              InputIcon={true}
              data={LearnLanguagesItems}
              defaultValue="Choose Language"
              setValue={false}
            />
          </div>
          <div className="flex items-center xl:gap-7 gap-5">
            <span className="text-gray-light-2 font-light xl:text-base text-xs">
              To:
            </span>
            <Select
              className="2xl:w-56 xl:w-44 lg:w-56 w-44 xl:h-14 h-12 2xl:!text-base xl:!text-sm"
              Icon={true}
              InputIcon={true}
              data={LearnLanguagesItems}
              defaultValue="Choose Language"
              setValue={false}
            />
          </div>
        </div>
        <Button className="main-border !p-0 xl:w-20 w-12 h-[120px] !rounded-full backdrop-blur-[32px] bg-dark-soul-1">
          <span
            className={`size-6 bg-reverse-icon bg-no-repeat bg-center block rotate-90`}
          />
        </Button>
      </div>
    </div>
  );
};
