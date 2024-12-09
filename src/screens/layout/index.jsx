"use client";
import { useState } from "react";
import useMenus from "@/hooks/useMenus";
import { ButtonLang } from "@/components/button/languegesButton";
import { usePathname } from "next/navigation";
import useDeviceWidth from "@/hooks/useDeviceWidth";

export const HeaderComponent = () => {
  const [lang, setLang] = useState("en");
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const { headerMenu } = useMenus();
  const path = usePathname();
  const { deviceWidth } = useDeviceWidth();

  return (
    <>
      <div className="flex justify-between items-center lg:mt-4 w-full h-16 lg:border border-b border-[#4E5F6629]/50 bg-dark-soul-1/15 lg:rounded-full px-3">
        <div
          className={`${deviceWidth > 1280 && path === "/" ? "hidden" : "flex"} gap-2 items-center w-44 cursor-pointer`}
        >
          <span className="lg:w-36 w-20 lg:h-6 h-4 bg-logo-icon bg-no-repeat bg-contain bg-center" />
          <span className="lg:size-8 size-6 bg-dropdown-icon bg-no-repeat bg-cover bg-center" />
        </div>
        <div className="rounded-full bg-dark-soul-1/20 w-96 h-11 md:flex hidden justify-center items-center px-1">
          {headerMenu.map((item) => (
            <p
              key={item.id}
              className="text-gray-soul-1 hover:bg-white/10 hover:rounded-full w-full py-[3px] text-center cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ButtonLang languages={lang} setLanguages={setLang} />
          <div className="rounded-full bg-dark-soul-1/20 w-fit h-10 flex justify-center items-center px-1.5">
            <span
              className={`size-[30px] bg-wallet-icon bg-no-repeat bg-contain`}
            />
            <div className="flex flex-col text-sky-blue pl-1">
              <p className="text-sm font-medium">12000</p>
              <p className="text-xs font-light">Coin</p>
            </div>
          </div>
          <div className="bg-sky-blue size-10 rounded-full"></div>
        </div>
      </div>
      <div className="fixed top-2/4 bottom-2/4 right-2 lg:hidden block z-50">
        <div className="flex flex-row-reverse gap-2">
          <div
            className="size-14 border-2 border-sky-blue rounded-full flex justify-center items-center hover:shadow-neon ease-in-out duration-500 cursor-pointer"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            <span className="size-6 bg-mobile-menu-neon-icon bg-no-repeat bg-cover block" />
          </div>

          {openMobileMenu ? (
            <div
              className={`animate-fadeIn flex items-center gap-2 rounded-full main-border h-14 w-fit glass-background px-4 self-start`}
            >
              {headerMenu.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-0.5 items-center"
                >
                  <span
                    className={`size-5 ${item.icon} bg-no-repeat bg-contain block`}
                  />
                  <p className="text-[8px] font-light text-gray-blue-light">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
