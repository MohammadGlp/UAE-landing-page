"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/thumbs";
import IconAngleLeft from "/public/assets/icons/easy-icon/Arrow Left.svg";
import IconAngleRight from "/public/assets/icons/easy-icon/Arrow Right.svg";

const CustomSwiper = ({
  swipeArrowRef,
  data,
  arrowStylePrev,
  arrowStyleNext,
  renderItem,
  arrow,
  wrapperArrows,
  btn = false,
  btnChildren,
  swiperSlideClass,
  isPaginationCustomizer,
  paginationClassName,
  ...rest
}) => {
  return (
    <>
      <Swiper {...rest}>
        {data?.map((item, index) => {
          return (
            <SwiperSlide
              className={swiperSlideClass}
              {...item.swiperSlideProps}
              key={index}
            >
              {renderItem(item, index, data)}
            </SwiperSlide>
          );
        })}
        {btn && data?.length >= 12 ? (
          <SwiperSlide key="swiper-btn">{btnChildren}</SwiperSlide>
        ) : null}
      </Swiper>
      {isPaginationCustomizer && (
        <div
          className={`swiper-pagination custom-pagination ${paginationClassName}`}
        ></div>
      )}
      {arrow ? (
        <div className={wrapperArrows}>
          <div
            className={`my-button-prev cursor-pointer ${arrowStylePrev}`}
            ref={swipeArrowRef?.prevRef}
          >
            <Image
              src={IconAngleLeft}
              alt="IconAngleLeft"
              className="w-5 h-5"
            />
          </div>
          <div
            className={`my-button-next cursor-pointer ${arrowStyleNext}`}
            ref={swipeArrowRef?.nextRef}
          >
            <Image
              src={IconAngleRight}
              alt="IconAngleRight"
              className="w-5 h-5"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CustomSwiper;
