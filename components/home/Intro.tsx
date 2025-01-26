import React, { useEffect, useRef } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { motion } from "framer-motion";
import { useInViewport } from "ahooks";
import { useRive } from "@rive-app/react-canvas";
import { useStatistics } from "@/hooks/useApi";
import CountUp from "react-countup";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import {
  FreeMode,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
const Intro = () => {
  const { isMobile } = useWindowSize();

  return <Pc />;
};

const Pc = () => {
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);
  const { RiveComponent } = useRive({
    src: "/home/earth.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });
  // const inputValue = useStateMachineInput(
  //   rive,
  //   "State Machine 1",
  //   "level",
  //   level
  // );
  const { data, run } = useStatistics();

  useEffect(() => {
    run();
  }, []);

  return (
    <section
      id="Related"
      className="relative w-full flex flex-col items-center overflow-hidden text-black"
    >
      <div className="relative w-full h-[1760px] flex flex-col items-center overflow-hidden text-black bg-[url(/home/bg.png)] bg-no-repeat bg-cover">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inViewport ? 1 : 0 }}
          style={{ fontSize: "60PX", lineHeight: "80PX" }}
          className="font-[800] text-[60px]  leading-[80px] flex flex-col items-center justify-center mt-[128px]"
        >
          <span className=" fontPP">The World's First</span>
          <span className=" fontPP">Web3 LBS Lifestyle App</span>
          <div
            style={{ fontSize: "24PX" }}
            className="flex justify-center items-center gap-[24px] text-black text-[24px] font-[500] leading-[36px] mt-[20px]"
          >
            <span
              className="min-w-[122px] px-[24px] py-[4px] min-h-[36px] text-center rounded-3xl"
              style={{
                background: "linear-gradient(90deg, #52FEFF 0%, #00FEFF 100%)",
              }}
            >
              Discover
            </span>
            <span
              className="min-w-[102px] min-h-[36px] px-[24px] py-[4px] text-center rounded-3xl"
              style={{
                background:
                  " linear-gradient(270deg, #BAFE74 0%, #D4FFA8 100%)",
              }}
            >
              Create
            </span>
            <span className="min-w-[48px] min-h-[36px] text-center ">And</span>
            <span
              className="min-w-[115px] min-h-[36px] px-[24px] py-[4px] text-center rounded-3xl"
              style={{
                background:
                  "  linear-gradient(90deg, #FFDBF5 0%, #FFC3EE 100%)",
              }}
            >
              Interact
            </span>
          </div>
          <span className="font-[500] text24 leading-[24px] mt-[20px]">
            with Fascinating Landmarks Around You
          </span>
        </motion.div>

        <div className="flex flex-col items-center w-full relative mt-[20px]">
          <RiveComponent className="w-[1200px] h-[1000px]" />

          <div className="w-[1000px] h-[100px] flex justify-between items-center absolute left-1/2 top-[40px] -ml-[500px] z-10">
            {inViewport && (
              <div
                className="flex flex-col justify-center items-center min-w-[240px] min-h-[100px] py-[12px] px-[32px] bg-white/20 rounded-[20px] border border-[#ffffff]"
                style={{ backdropFilter: "blur(2px)" }}
              >
                <span
                  className="font-[600] text14 text-[#FF6ADA]"
                  style={{ textShadow: "0px 0px 4px 0px #FF6ADA45" }}
                >
                  Covered cities
                </span>
                <CountUp
                  start={0}
                  end={(data && data.city_num) || 0}
                  separator=","
                  className="font-[700] text36 text-[#FF6ADA] "
                  style={{ textShadow: "0px 0px 6px 0px #FF6ADA45" }}
                />
              </div>
            )}

            {inViewport && (
              <div
                className="flex flex-col justify-center items-center min-w-[240px] min-h-[100px] py-[12px] px-[32px] bg-white/20 rounded-[20px] border border-[#ffffff]"
                style={{ backdropFilter: "blur(2px)" }}
              >
                <span
                  className="font-[600] text14 text-[#FF6ADA]"
                  style={{ textShadow: "0px 0px 4px 0px #FF6ADA45" }}
                >
                  Real created landmarks
                </span>
                <CountUp
                  start={0}
                  end={(data && data.point_num) || 0}
                  separator=","
                  className="font-[700] text36 text-[#FF6ADA] "
                  style={{ textShadow: "0px 0px 6px 0px #FF6ADA45" }}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col w-full items-center -mt-[300px] z-10">
          <span className="font-[800] text50 text-black leading-[72px] fontPP">
            Getting started your Heyo travel
          </span>
          <div className="flex justify-center items-center font-[500] text24 text-black gap-2">
            <span>I’m a user</span>
            <img
              src="/home/icon-switch.svg"
              className="w-[44PX] h-[24PX]"
            />{" "}
            <span>I want be mayor</span>
          </div>
          <Swiper
            className=" w-screen h-[540px] overflow-hidden"
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={-30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // freeMode={true}
            modules={[Autoplay]}
            loop
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img src="/home/banner1.png" className="swiper-slide-zoom w-[788px] h-[534px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/banner2.png" className="swiper-slide-zoom w-[788px] h-[534px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/banner3.png" className="swiper-slide-zoom w-[788px] h-[534px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/banner4.png" className="swiper-slide-zoom w-[788px] h-[534px]" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex flex-col items-center w-[700px] text-black mt-[0px]">
        <span className="font-[800] text24 fontPP">Explore Landmarks</span>
        <span className="font-[500] text20 leading-[24px] text-center">
          Heyo display nearby landmarks based on your current location, helping
          you explore and discover fascinating landmarks around you.
        </span>
      </div>
    </section>
  );
};

export default React.memo(Intro);
