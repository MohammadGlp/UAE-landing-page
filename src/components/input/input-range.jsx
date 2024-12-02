"use client";

import { useRef, useState, useEffect } from "react";
import { getPersianNumber } from "@/utils/getPersianNumber";
import useDebounce from "@/hooks/useDebounce";

const InputRange = ({
  initialMin,
  initialMax,
  min,
  max,
  step,
  priceCap,
  text,
  icon,
  boxClassName,
  className,
  system,
  onRemoveEmptyProducts,
  onGetMaxAndMinValue,
}) => {
  const [open, setOpen] = useState(false);

  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);
  const [isEmpty, setIsEmpty] = useState(false);

  const lineRef = useRef(null);
  const componentRef = useRef(null);

  const maxGetValueWithDelay = useDebounce(maxValue, 500);
  const minGetValueWithDelay = useDebounce(minValue, 500);

  const handleMin = (e) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) < parseInt(maxValue)) {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) > parseInt(minValue)) {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };

  const handleClickOutside = (event) => {
    if (
      componentRef?.current &&
      !componentRef?.current?.contains(event?.target)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (
      maxGetValueWithDelay !== initialMax + 1 ||
      minGetValueWithDelay !== initialMin
    )
      onGetMaxAndMinValue(maxGetValueWithDelay, minGetValueWithDelay);
  }, [maxGetValueWithDelay, minGetValueWithDelay]);

  useEffect(() => {
    if (lineRef.current) {
      lineRef.current.style.left = (minValue / max) * step + "%";
      lineRef.current.style.right = step - (maxValue / max) * step + "%";
    }
  }, [minValue, maxValue, max, step, open, lineRef.current]);

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <div className={`relative ${system}`} ref={componentRef}>
        <button
          type="button"
          className={`w-fit lg:text-sm text-xs flex items-center gap-1.5 ${className}`}
          onClick={() => setOpen((old) => !old)}
        >
          {text}
          {!icon ? null : (
            <span className="w-2.5 h-1 bg-arrow-down bg-no-repeat lg:bg-left bg-bottom bg-contain" />
          )}
        </button>

        {open && (
          <div
            className={`absolute right-0 mt-2 w-60 h-16 shadow-lg rounded-lg flex flex-col justify-center items-center z-30 bg-white ${boxClassName}`}
          >
            <div className="slider w-[90%] relative right-0 left-0 h-0.5 rounded-md bg-white-gray-6">
              <div
                className="progress absolute h-full bg-black rounded-md"
                ref={lineRef}
              ></div>
            </div>
            <div className="flex flex-col relative w-[95%]" dir="ltr">
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={minValue}
                onChange={handleMin}
                className="absolute w-full -top-[13px] bg-transparent cursor-pointer appearance-none pointer-events-none"
              />
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={maxValue}
                onChange={handleMax}
                className="absolute w-full -top-[13px] bg-transparent cursor-pointer appearance-none pointer-events-none"
              />

              <div className="mt-4 flex justify-between text-sm px-1.5">
                <span>{getPersianNumber(minValue)}</span>
                <span>{getPersianNumber(maxValue)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <label className="flex gap-2 items-center text-xs text-[#564C68] cursor-pointer md:pt-0 md:pr-0 pt-4 pr-3">
        <div className="relative pt-1.5">
          <input
            type="checkbox"
            onChange={(event) => {
              setIsEmpty(event.target.checked);
              onRemoveEmptyProducts(event.target.checked);
            }}
            className={`cursor-pointer appearance-none size-4 rounded-md border-2 group-hover:border-red-pink-almasi group-hover:cursor-pointer ${isEmpty ? "bg-red-pink-almasi" : "bg-transparent"}`}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className={`absolute top-3.5 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2.5 ${isEmpty ? "fill-white" : "hidden"}`}
            viewBox="0 0 16 16"
          >
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
          </svg>
        </div>
        حذف ناموجودها
      </label>
    </>
  );
};

export default InputRange;
