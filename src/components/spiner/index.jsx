export const Spinner = ({ height }) => {
  return (
    <div className={`h-screen flex justify-center items-center w-screen`}>
      <div className="flex flex-col lg:gap-3 gap-1 items-center w-full">
        <span className="bg-logo-icon bg-no-repeat bg-contain block md:w-40 w-20 bg-center md:h-10 h-6" />
        <p className="lg:text-xl text-sm text-gray-light-2">Loading...</p>
      </div>
    </div>
  );
};
