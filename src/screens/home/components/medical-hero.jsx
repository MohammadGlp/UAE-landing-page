import Button from "@/components/button/button";

export const MedicalHero = () => {
  return (
    <div className="lg:w-96 w-[312px] h-36 flex flex-col lg:gap-3 gap-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-light-2 lg:text-2xl text-lg">
          Need Medical Services?
        </p>

        <Button className="w-10 h-10 bg-dark-soul-1 border border-[#4E5F6629]/50 !rounded-full !p-0">
          <span className="size-6 bg-bel-icon bg-no-repeat bg-contain" />
        </Button>
      </div>
      <p className="text-gray-blue lg:text-sm text-xs font-light">
        We are here to help you find the best experts in almost every country in
        the easiest way.
      </p>
      <Button className="w-16 h-10 bg-dark-soul-1 border border-[#4E5F6629]/50 !rounded-full">
        <span className="size-6 bg-arrow-right-long-icon bg-no-repeat bg-contain" />
      </Button>
    </div>
  );
};
