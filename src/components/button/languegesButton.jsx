"use client";
import { useState } from "react";
import Image from "next/image";

export const ButtonLang = ({ languages, setLanguages }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex items-center relative z-0 w-16 h-9 bg-dark-soul-1/15 rounded-full`}
    >
      <button
        className={`flex justify-center items-center gap-1 w-full h-full cursor-pointer text-gray-light-1`}
        onClick={() => setOpen((old) => !old)}
      >
        <span
          className={`lg:size-5 size-4 ${languages !== "en" ? "bg-uae-flag" : "bg-american-flag"} bg-no-repeat bg-contain`}
        />
        {languages === "en" ? "En" : "Ar"}
      </button>

      {open ? (
        <div className="flex flex-col justify-between items-start absolute z-50 top-16 -left-24 w-60 h-44 p-4 border border-[#4E5F6629]/50 rounded-2xl bg-lang-dialog-color/[16%] backdrop-blur-lg shadow-[0px_35px_32px_0px_#162125A3]">
          <p className="text-gray-light-1 text-sm font-light">
            Website Language
          </p>
          <div className="w-full">
            <div className="flex justify-between items-center w-full border-b border-white/15 h-14">
              <button
                className="flex justify-start items-center gap-3 w-full h-full cursor-pointer text-gray-light-2"
                onClick={() => {
                  setOpen(false);
                  setLanguages("ar");
                }}
              >
                <span
                  className={`lg:size-6 size-3 bg-uae-flag bg-no-repeat bg-contain`}
                />
                Arabic
              </button>
              <span
                className={`flex justify-center items-center w-[21.9px] h-5 border-[1.5px] ${languages === "ar" ? "border-sky-blue shadow-[0px_0px_12.2px_0px_#00BFFFA3]" : "border-gray-light-1"} rounded-full cursor-pointer`}
                onClick={() => setLanguages("ar")}
              >
                {languages === "ar" && (
                  <span className="size-2 bg-sky-blue rounded-full" />
                )}
              </span>
            </div>
            <div
              className="flex justify-between items-center w-full h-14"
              onClick={() => {
                setOpen(false);
                setLanguages("en");
              }}
            >
              <button className="flex justify-start items-center gap-3 w-full h-full cursor-pointer text-gray-light-2">
                <span
                  className={`lg:size-6 size-3 bg-american-flag bg-no-repeat bg-contain`}
                />
                English
              </button>
              <span
                className={`flex justify-center items-center w-[21.9px] h-5 border-[1.5px] rounded-full ${languages === "en" ? "border-sky-blue shadow-[0px_0px_12.2px_0px_#00BFFFA3]" : "border-gray-light-1"} cursor-pointer`}
              >
                {languages === "en" && (
                  <span className="size-2 bg-sky-blue rounded-full" />
                )}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
