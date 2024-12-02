"use client";
import React, { useState, useRef } from "react";
import { useField, useFormikContext } from "formik";
import toast from "react-hot-toast";

export default function InputFile({
  system,
  label,
  placeholder,
  className,
  classLabel,
  type = "text",
  id,
  showError = true,
  error,
  accept,
  size,
  validationStar,
  ...props
}) {
  const [field, meta] = useField(props);
  const [name, setName] = useState("");

  const { setFieldValue } = useFormikContext();
  const show = useRef(null);

  return (
    <div className={system}>
      <label
        htmlFor={id}
        className={`flex items-center justify-between px-1 gap-2 mb-2 font-medium text-start ${classLabel}`}
      >
        <span>{label}</span>
        {validationStar ? <span className="text-[#EF476F]">*</span> : null}
      </label>
      <div className={`flex items-center gap-2`}>
        <div className={className} onClick={() => show.current.click()}>
          {name ? name.slice(0, 15) : placeholder}
        </div>
        <input
          type="file"
          id={id}
          placeholder={placeholder ? placeholder : "فایل"}
          className="hidden"
          accept={accept}
          size={size}
          {...field}
          value={undefined}
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file && file.size <= 2100050) {
              setName(file.name);
              setFieldValue(field.name, file);
            } else {
              toast.error("فایل انتخاب شده بیش از 2 مگابایت است");
            }
          }}
          ref={show}
        />
      </div>
      {showError && meta.error && (
        <p className="text-error text-sm font-semibold flex gap-x-2 items-center h-4 mt-2">
          {/*<IconCircleWarning className="w-5 inline fill-error" />*/}
          <span>{meta.error}</span>
        </p>
      )}
    </div>
  );
}
