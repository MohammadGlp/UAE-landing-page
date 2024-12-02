"use client";

import { useField, useFormikContext } from "formik";

const Input = ({
  label,
  placeholder,
  className,
  inputCheck,
  classLabel,
  system,
  showError = true,
  type = "text",
  id,
  validationStar,
  disabled,
  isStrict,
  innerDiv,
  children,
  ...props
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  const handleChange = (event) => {
    setFieldValue(field.name, event.target.value);
  };

  return (
    <div className={system}>
      {label ? (
        <label
          htmlFor={id}
          className={`flex items-center justify-between px-1 gap-2 mb-2 font-medium text-start ${classLabel}`}
        >
          <span>{label}</span>
          {validationStar ? <span className="text-error">*</span> : null}
        </label>
      ) : null}
      {inputCheck ? (
        <div className={innerDiv}>
          <input
            type={type}
            disabled={disabled}
            id={id}
            className={`text-gray-light-2 outline-none border border-[#4E5F6629]/50 bg-dark-soul-1/15 rounded-full indent-3 h-12 ${className}`}
            placeholder={placeholder}
            {...props}
            {...field}
            {...(isStrict
              ? {
                  value: field.value,
                  onChange: handleChange,
                }
              : {})}
          />
          {children}
        </div>
      ) : (
        <div className="">
          <textarea
            id={id}
            className={`outline-black border border-black/20 indent-3 pt-5 h-40 ${className}`}
            placeholder={placeholder}
            {...props}
            {...field}
            {...(isStrict
              ? {
                  value: field.value,
                  onChange: handleChange,
                }
              : {})}
          ></textarea>
        </div>
      )}
      {showError && !!meta.touched && meta.error && (
        <p className="text-red-700 sm:text-xs text-[10px] font-semibold flex gap-x-2 items-center h-4 mt-2">
          <span>{!!meta.touched && meta.error}</span>
        </p>
      )}
    </div>
  );
};
export default Input;
