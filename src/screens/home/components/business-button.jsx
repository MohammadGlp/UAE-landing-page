import Button from "@/components/button/button";

export const BusinessButton = () => {
  return (
    <div className="lg:w-[343px] w-[312px] h-40 bg-gray-dark-1 rounded-[40px] hover:border-effect-yellow">
      <div className="flex flex-col gap-4 p-6 z-10">
        <p className="text-gray-light-2 font-light">
          Have a business and want to offer your services?
        </p>
        <Button className="!w-full text-dark-soul-2 !rounded-full bg-yellow-dark">
          Join as a Provider
        </Button>
      </div>
    </div>
  );
};
