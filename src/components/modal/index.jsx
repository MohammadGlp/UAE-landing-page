import { useEffect, useState } from "react";

export const Modal = ({
  isOpen,
  onClose,
  size,
  className,
  modalHeader,
  modalBody,
  modalFooter,
  modalHeaderClass,
  modalBodyClass,
  modalFooterClass,
  overlayColor,
  isTop = true,
}) => {
  const [isVisible, setIsVisible] = useState();

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const sizeClasses = {
    full: "w-full h-full",
    small: "w-1/3 h-1/3",
    medium: "w-1/2 h-1/2",
    large: "w-3/4 h-3/4",
  };

  const sizeClass = sizeClasses[size] || "w-auto h-auto";

  return (
    isVisible && (
      <>
        {size === "full" ? null : (
          <span
            className={`animate-fadeIn fixed top-0 bottom-0 right-0 left-0 ${overlayColor ? overlayColor : "bg-black/40"} bg-blend-overlay z-[55] block cursor-pointer`}
            onClick={() => onClose && onClose(false)}
          />
        )}
        <div
          className={`${isOpen ? "animate-fadeIn" : "animate-fadeOut"} ${sizeClass} ${className} flex flex-col m-auto gap-10 fixed bg-white drop-shadow-[0px_0px_96px_0px_#0000007A] ${isTop && "top-0"} bottom-0 left-0 right-0 z-[60] ease-in duration-500`}
        >
          <div className={modalHeaderClass}>{modalHeader}</div>
          <div className={modalBodyClass}>{modalBody}</div>
          <div className={modalFooterClass}>{modalFooter}</div>
        </div>
      </>
    )
  );
};
