"use client";

import { useEffect, useRef, useState } from "react";
import { useField, useFormikContext } from "formik";

const Select = ({
  data,
  defaultValue,
  id,
  label,
  classLabel,
  boxClassName,
  system,
  placeholder,
  width,
  Icon,
  InputIcon,
  className,
  needId,
  setId,
  loading,
  isForm,
  setValue,
  SortIcon = false,
  ...props
}) => {
  // const { setFieldValue } = useFormikContext();
  const [stateData, setStateData] = useState(data);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  // const [field] = useField(props);
  const componentRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      componentRef?.current &&
      !componentRef?.current?.contains(event?.target)
    ) {
      setOpen(false);
    }
  };

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

  const handleAddTag = (id, value, icon) => {
    if (open !== false) {
      if (!isForm) {
        setText(value);
        icon && setImg(icon);
        setValue && setValue(value);
      } else {
        setText(value);
        icon && setImg(icon);
        needId && setId && setId(id);

        // setFieldValue(field.name, needId ? String(id) : value);
      }
    }
  };

  useEffect(() => {
    if (defaultValue) {
      setText(defaultValue);
    }
  }, [defaultValue]);

  const handleSearch = (event) => {
    let copyData = data;
    if (event.target.value) {
      copyData = copyData.filter((item) =>
        item.name
          .toString()
          .toLowerCase()
          .includes(event.target.value.toLowerCase()),
      );
    }

    setStateData(copyData);
  };

  return (
    <div ref={componentRef} className={`relative ${system}`}>
      {label ? (
        <label
          htmlFor={id}
          className={`flex items-center justify-between px-1 gap-2 mb-2 font-medium text-start ${classLabel}`}
        >
          <span>{label}</span>
        </label>
      ) : null}
      <div className={`${SortIcon ? "flex gap-2 items-center" : ""}`}>
        <button
          type="button"
          className={`relative flex flex-row-reverse justify-end items-center lg:text-base text-sm main-border bg-dark-soul-1 backdrop-blur-[32px] text-gray-blue-light text-left rounded-full h-14 font-light ${img ? "indent-1" : "indent-3"} ${className}`}
          onClick={() => setOpen((old) => !old)}
        >
          {!Icon ? null : (
            <span className="absolute right-1.5 top-1.5 size-6 bg-arrow-down bg-no-repeat bg-center block p-5 rounded-full backdrop-blur-[32px] main-border hover:shadow-[0px_0px_12.2px_0px_#00BFFFA3] ease-in-out duration-500 cursor-pointer" />
          )}

          {!text ? "Choose Language" : text}
          {img && (
            <span
              className={`ml-3 size-6 ${img} bg-no-repeat bg-center block`}
            />
          )}
        </button>
        {SortIcon ? (
          <span
            className="lg:size-5 size-4 bg-sort-icon bg-no-repeat bg-contain block cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        ) : null}
      </div>

      {open ? (
        <div
          className={`flex flex-col main-border z-50 absolute -top-72 ${width ? width : "w-full"} max-h-[288px] bg-gray-glass/[16%] shadow-[0px_-35px_32px_0px_#162125A3] backdrop-blur-[32px] rounded-[24px] ${boxClassName}`}
        >
          <input
            onChange={handleSearch}
            id="select-input-search"
            placeholder="Search Language..."
            className={`mx-3 mt-4 mb-3 pl-10 text-gray-light-2 bg-search-icon block bg-no-repeat bg-[10px_center] outline-none main-border bg-transparent backdrop-blur-[32px] rounded-full lg:w-[200px] w-[150px] min-h-10 text-placeholder-gradient lg:text-base text-xs`}
          />
          <span className={`main-border`} />
          <div
            className={`flex flex-col ${stateData.length <= 4 ? "h-[200px]" : "max-h-[200px]"} overflow-y-auto light-scrollbar thumb-scrollbar`}
          >
            {stateData && stateData.length < 1 ? (
              <p className="text-center text-gray-light-2 text-lg font-medium pt-20">
                Nothing Exist
              </p>
            ) : (
              stateData?.map((item) => (
                <div
                  className={`min-w-fit ${stateData.length <= 4 ? "h-fit" : "h-full"} border-b border-[#4E5F6629]/50 flex flex-row-reverse items-center justify-end gap-2 p-3 ml-3 cursor-pointer`}
                  key={item.id}
                  onClick={() => {
                    setOpen(false);
                    handleAddTag(
                      item.id,
                      item.title || item.name,
                      item?.icon || false,
                    );
                  }}
                >
                  <button
                    type="button"
                    className={`w-fit h-7 cursor-pointer text-gray-light-2 font-medium`}
                  >
                    {item.title || item.name}
                  </button>
                  {!InputIcon ? null : (
                    <span
                      className={`size-6 ${item?.icon} bg-no-repeat bg-contain block`}
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Select;
