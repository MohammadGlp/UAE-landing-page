"use client";
import { useState } from "react";
import { Form, Formik } from "formik";
import { FreeMode, EffectCoverflow } from "swiper/modules";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import CustomSwiper from "@/components/swiper";
import useMenus from "@/hooks/useMenus";
import { Modal } from "@/components/modal";

export const HeroComponent = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { sliderNotificationItems, NeedItems } = useMenus();

  const handleSubmit = (values) => {
    if (values.needThings) {
      setText(values.needThings);
    }
  };

  return (
    <>
      <div className="relative z-0 flex lg:flex-row-reverse flex-col-reverse lg:w-[762px] w-[312px] lg:h-[260px] h-fit bg-gray-dark-1 rounded-[40px] p-6">
        <div className="lg:w-[50%] w-fit flex flex-col z-0">
          <div className="hidden absolute -top-3 right-0 lg:block z-30">
            <div className="relative flex justify-center items-center w-[100px] h-[100px]">
              <div className="relative z-30 flex justify-center items-center w-10 h-10 border border-sky-blue group peer hover:animate-pulse rounded-full backdrop-blur-[32px] shadow-[0px_0px_12px_0px_#00BFFFA3]">
                <span
                  className={`size-full bg-notification-alarm-icon bg-no-repeat bg-fixed bg-center -rotate-[15deg] group-hover:animate-swing rounded-full`}
                />
              </div>
              <div className="absolute w-[90px] h-[95px] bg-ring-frame-out bg-no-repeat bg-cover flex justify-center items-center peer-hover:animate-expandShrinkHidden opacity-0 z-10" />
              <div className="absolute w-14 h-14 bg-ring-frame-in bg-no-repeat flex justify-center items-center peer-hover:animate-expandShrink z-10" />
            </div>
          </div>
          <CustomSwiper
            modules={[FreeMode, EffectCoverflow]}
            effect="coverflow"
            className="mySwiperNotifications w-full lg:h-full h-36"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2.5}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.8,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
            direction={"vertical"}
            arrow={false}
            btn={false}
            data={sliderNotificationItems}
            renderItem={(item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 lg:w-80 w-64 lg:h-[90px] h-[65px] px-4 py-3 rounded-[18px] bg-dark-soul-1 backdrop-blur-[32px] shadow-[0px_35px_32px_0px_#162125A3] cursor-pointer"
              >
                <div className="lg:min-w-16 min-w-12 lg:h-16 h-12 rounded-full bg-green-500"></div>
                <div className="">
                  <p className="text-gray-light-2 font-medium lg:text-base text-sm">
                    {item.name}
                  </p>
                  <p className="text-gray-light-1 lg:text-sm text-xs">
                    {item.notification}
                  </p>
                </div>
              </div>
            )}
          />
        </div>
        <div className="lg:w-[50%] w-full flex flex-col gap-3">
          <div className="flex w-full">
            <h2 className="lg:text-2xl text-xl text-gray-light-2 font-medium">
              Whatever you Need is Right Here
            </h2>
            <Button className="lg:hidden min-w-10 h-10 bg-dark-soul-1 border border-[#4E5F6629]/50 !rounded-full !p-0">
              <span className="size-6 bg-bel-icon bg-no-repeat bg-contain" />
            </Button>
          </div>
          <p className="lg:text-sm text-xs text-gray-blue font-light">
            Lorem ipsum dolor sit amet consectetur. Scelerisque odio tempor
            euismod vestibulum.
          </p>
          <Formik initialValues={{ needThings: "" }} onSubmit={handleSubmit}>
            <Form>
              <Input
                id="needInput"
                name="needThings"
                inputCheck={true}
                type="text"
                isStrict={false}
                className="lg:w-80 w-full !h-14 lg:text-sm text-xs text-placeholder-gradient"
                placeholder="Type what you need..."
                innerDiv="relative lg:w-fit"
                system="mt-5"
              >
                <Button
                  className={`absolute top-2 right-2 bg-gray-light-2 !rounded-full !h-10 ${hover ? "flex gap-2 animate-shake w-28 !px-0 !pl-5 !pr-2" : "animate-reverse-shake w-20"}`}
                  onMouseEnter={setHover}
                  onMouseLeave={() => setHover(false)}
                  onClick={() => setOpen(!open)}
                >
                  Submit
                  {hover && (
                    <span
                      className={`animate-shake size-4 !bg-open-icon !bg-no-repeat !bg-auto !bg-center block p-4 !bg-black rounded-full`}
                    />
                  )}
                </Button>
              </Input>
            </Form>
          </Formik>
        </div>
      </div>

      <Modal
        className="rounded-[40px] !bg-dark-soul-1 backdrop-blur-[32px] sm:!w-1/2 !w-3/4 !gap-0 !h-fit"
        isOpen={open}
        size="medium"
        onClose={setOpen}
        modalHeader={
          <>
            <div className="py-4 px-6 flex justify-between items-center main-border-bottom">
              <p className="text-xl text-gray-light-2">Submit your Need</p>
              <span
                className="size-6 bg-close-icon bg-no-repeat bg-contain cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
          </>
        }
        modalBody={
          <>
            <div className="p-6 flex flex-col gap-4">
              <div className="flex gap-2">
                <p className="whitespace-nowrap text-gray-blue-light">
                  Your Need:
                </p>
                <p className="text-gray-light-1 font-light">
                  {text ? text : "Nothing"}
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-gray-blue-light">
                  Choose a related Category
                </p>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center lg:h-[300px] sm:h-[150px] h-[75px] overflow-y-auto light-scrollbar thumb-scrollbar">
                  {NeedItems.map((item) => (
                    <div
                      className="w-40 h-full flex flex-col items-start gap-1 p-4 rounded-3xl main-border glass-background hover:border-sky-blue ease-in-out duration-500"
                      key={item.id}
                    >
                      <span
                        className={`size-10 ${item.icon} bg-no-repeat bg-contain block`}
                      />
                      <p className="text-gray-light-2 font-light pl-1">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="text-main-color bg-yellow-dark !rounded-full self-end">
                Submit
              </Button>
            </div>
          </>
        }
      />
    </>
  );
};
