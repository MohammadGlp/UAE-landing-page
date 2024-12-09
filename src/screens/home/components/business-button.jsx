import Button from "@/components/button/button";
import { Squircle } from "corner-smoothing";

export const BusinessButton = () => {
  return (
    <Squircle cornerRadius={40} className="">
      <div className="flex flex-col gap-4 justify-between 2xl:w-[343px] xl:w-full lg:w-[343px] w-[312px] p-6 h-40 bg-gray-dark-1 hover:border-effect-yellow">
        <p className="text-gray-light-2 font-light z-10 break-all 2xl:w-full xl:w-[83%] self-start">
          Have a business and want to offer your services?
        </p>
        <Button className="!w-full text-dark-soul-2 !rounded-full bg-yellow-dark z-10">
          Join as a Provider
        </Button>
      </div>
    </Squircle>
  );
};
