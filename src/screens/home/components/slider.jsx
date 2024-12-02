"use client";

import { useState, useEffect, useRef } from "react";
import CustomSwiper from "@/components/swiper";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import useSwiperRef from "@/hooks/useSwiperWrapperRef";
import useMenus from "@/hooks/useMenus";
import Image from "next/image";
import useDeviceWidth from "@/hooks/useDeviceWidth";

export const Slider = () => {
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();
  const [isBegining, setIsBegining] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const { sliderItems } = useMenus();
  const swiperRef = useRef(null);
  const { deviceWidth } = useDeviceWidth();
  const updateBulletStyles = () => {
    if (!swiperRef.current) return;

    const bullets = swiperRef.current.pagination.bullets;
    const bulletWidthNumber = 558 / sliderItems.length;
    const bulletWidth = `${bulletWidthNumber}px`;

    bullets.forEach((bullet, index) => {
      if (index === activeIdx && bulletWidthNumber > 8) {
        bullet.style.width = bulletWidth;
      } else {
        bullet.style.width = "8px";
      }
    });
  };

  useEffect(() => {
    updateBulletStyles();
  }, [activeIdx]);

  return (
    <div className="relative z-0 xl:w-[558px] lg:w-[460px] w-[312px] xl:h-[515px] lg:h-96 sm:h-52 h-28 mt-10 lg:mx-auto rounded-[40px]">
      <div className="xl:flex hidden absolute top-0 gap-2 items-center w-48 z-20 slider-logo-shape">
        <span className="w-36 h-8 bg-logo-icon bg-no-repeat bg-contain bg-center" />
        <span className="size-8 bg-dropdown-icon bg-no-repeat bg-cover bg-top" />
      </div>
      <CustomSwiper
        modules={[FreeMode, Navigation, Pagination]}
        arrow={true}
        className={`mySwiperLandingSlider w-full h-full lg:rounded-[40px]`}
        slidesPerView={1}
        loop={false}
        navigation={{
          nextEl: nextEl,
          prevEl: prevEl,
        }}
        swipeArrowRef={{
          nextRef: nextElRef,
          prevRef: prevElRef,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBegining(swiper.isBeginning);
          updateBulletStyles();
        }}
        onSlideChange={(swiper) => {
          setActiveIdx(swiper.realIndex);
        }}
        onRealIndexChange={(swiper) => {
          setIsBegining(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
          setActiveIdx(swiper.realIndex);
        }}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet`,
          bulletActiveClass: `swiper-pagination-bullet-active !rounded-full`,
        }}
        swiperSlideClass="!h-fit"
        arrowStyleNext={`absolute bottom-4 right-4 main-border glass-background w-10 h-10 rounded-full z-20 ${isEnd ? "hidden" : "lg:flex hidden"} justify-center items-center hover:shadow-[0px_0px_12.2px_0px_#00BFFFA3] ease-in-out duration-500`}
        arrowStylePrev={`absolute bottom-4 right-16 main-border glass-background w-10 h-10 rounded-full z-20 ${isBegining ? "hidden" : "lg:flex hidden"} justify-center items-center hover:shadow-[0px_0px_12.2px_0px_#00BFFFA3] ease-in-out duration-500`}
        btn={false}
        isPaginationCustomizer={false}
        data={sliderItems}
        renderItem={(item) => {
          return (
            <>
              <div
                className="cursor-pointer w-full lg:h-full sm:h-44 h-20"
                key={item.id}
              >
                <Image
                  src={item.imageUrl}
                  alt={`image-${item.id}`}
                  className="w-full h-full object-cover lg:rounded-none rounded-[40px]"
                  width={deviceWidth > 1024 ? 558 : 200}
                  height={deviceWidth > 1024 ? 515 : 200}
                />
              </div>
            </>
          );
        }}
      />
    </div>
  );
};
