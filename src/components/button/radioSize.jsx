import Button from "@/components/button/button";

const RadioSize = ({ size, id, check, onSizeCheck }) => {
  const handleChange = (event) => {
    onSizeCheck(event.target.innerText, Number(event.target.id));
  };

  return (
    <div>
      <Button
        id={id}
        className={`sm:text-sm text-[10px] !pt-px !p-0 text-black sm:!w-11 sm:!h-11 !h-7 !w-7 !rounded-md border font-sans ${check ? "border-[#A1A1A1]" : "border-white-magic-1"}`}
        onClick={handleChange}
      >
        {size}
      </Button>
    </div>
  );
};

export default RadioSize;
