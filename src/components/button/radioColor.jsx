const RadioColor = ({ id, color, color_name, checked, onCkeck }) => {
  const handleChange = (event) => {
    onCkeck(
      event.target.name,
      Number(event.target.id),
      event.target.ariaSelected,
    );
  };

  return (
    <div className="flex gap-2 items-start">
      <div className="grid place-items-center mt-1 relative">
        <input
          type="radio"
          id={id}
          name={color}
          aria-selected={color_name}
          className={`appearance-none ${(color === null || color === "#fff") && "shadow-[0px_0px_5px_-1px_#555]"} sm:w-7 w-5 sm:h-7 h-5 mr-0.5 sm:rounded-lg rounded-md border-2 ${checked ? "opacity-100 border-[#242424]/50" : "opacity-50 hover:opacity-100 cursor-pointer border-transparent"} z-10`}
          style={{ backgroundColor: color }}
          checked={checked}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default RadioColor;
