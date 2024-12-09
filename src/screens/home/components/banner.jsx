import { Squircle } from "corner-smoothing";

export const Banner = () => {
  return (
    <div className="flex xl:flex-row flex-col justify-center items-center xl:gap-10 lg:gap-6 gap-2 w-full">
      <Squircle
        cornerRadius={40}
        className="lg:w-[271px] w-[312px] lg:h-[176px] h-fit bg-gray-dark-1 hover:border-effect-blue"
      >
        <div className="flex flex-col lg:gap-6 gap-3 w-full h-full p-6 z-10">
          <div className="flex justify-between items-center">
            <span className="size-14 bg-flight-atomic-icon bg-no-repeat bg-contain block" />
            <p className="lg:w-36 text-gray-blue text-sm font-light">
              Reserve Flights and Hotels easily
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="w-full text-gray-light-2 lg:text-2xl text-xl lg:font-light">
              Flights & Hotels
            </p>
            <span className="lg:size-14 size-12 bg-open-icon bg-no-repeat bg-contain bg-center block backdrop-blur-xl opacity-50" />
          </div>
        </div>
      </Squircle>

      <Squircle
        cornerRadius={40}
        className="lg:w-[271px] w-[312px] lg:h-[176px] h-fit bg-gray-dark-1 hover:border-effect-blue"
      >
        <div className="flex flex-col lg:gap-6 gap-3 w-full h-full p-6 z-10">
          <div className="flex justify-between items-center">
            <span className="size-14 bg-ticket-atomic-icon bg-no-repeat bg-contain block" />
            <p className="lg:w-36 text-gray-blue text-sm font-light">
              Tours, cinemas, concerts and etc.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="w-full text-gray-light-2 lg:text-2xl text-xl lg:font-light">
              Events & Tickets
            </p>
            <span className="lg:size-14 size-12 bg-open-icon bg-no-repeat bg-contain bg-center block backdrop-blur-xl opacity-50" />
          </div>
        </div>
      </Squircle>
    </div>
  );
};
