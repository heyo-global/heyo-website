import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInViewport } from "ahooks";
import { useRive } from "@rive-app/react-canvas";
import { useStatistics } from "@/hooks/useApi";
import CountUp from "react-countup";

const Intro = () => {
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
      <div className="relative w-full h-[3760px] flex flex-col items-center overflow-hidden text-black  bg-no-repeat bg-cover">
        <img
          src="/mobile/bg.png"
          className="w-full h-[1375px] absolute top-0 left-0 z-0"
        />
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inViewport ? 1 : 0 }}
          style={{ fontSize: "60PX", lineHeight: "82PX" }}
          className="font-[800] flex flex-col items-center justify-center mt-[128px] z-10"
        >
          <span className="fontPP" style={{ fontSize: "48PX" }}>
            The World's
          </span>
          <span className="fontPP">First Web3 LBS</span>
          <span className="fontPP" style={{ fontSize: "48PX" }}>
            Lifestyle App
          </span>

          <div
            // style={{ fontSize: "28PX" }}
            className="flex justify-center items-center text-[28px] gap-[24px] text-black font-[500] mt-[50px]"
          >
            <span
              className="min-w-[142px] px-[24px] py-[4px] min-h-[30px] text-center rounded-3xl"
              style={{
                background: "linear-gradient(90deg, #52FEFF 0%, #00FEFF 100%)",
              }}
            >
              Discover
            </span>
            <span
              className="min-w-[122px] min-h-[30px] px-[24px] py-[4px] text-center rounded-3xl"
              style={{
                background:
                  " linear-gradient(270deg, #BAFE74 0%, #D4FFA8 100%)",
              }}
            >
              Create
            </span>
            <span className="min-w-[58px] min-h-[30px] text-center ">And</span>
            <span
              className="min-w-[135px] min-h-[30px] px-[24px] py-[4px] text-center rounded-3xl"
              style={{
                background:
                  "  linear-gradient(90deg, #FFDBF5 0%, #FFC3EE 100%)",
              }}
            >
              Interact
            </span>
          </div>
          <span className="font-[500] text28 leading-[28px] mt-[20px]">
            with Fascinating Landmarks Around You
          </span>
        </motion.div>

        <div className="w-[600px] h-[100px] mt-[70px] flex justify-between items-center z-10">
          {inViewport && (
            <div
              className="flex flex-col justify-center items-center min-w-[280px] min-h-[100px] py-[12px] px-[32px] bg-white/20 rounded-[20px] border border-[#ffffff]"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <span
                className="font-[600] text20 text-[#FF6ADA]"
                style={{ textShadow: "0px 0px 4px 0px #FF6ADA45" }}
              >
                Covered cities
              </span>
              <CountUp
                start={0}
                end={(data && data.city_num) || 0}
                separator=","
                className="font-[600] text36 text-[#FF6ADA] "
                style={{ textShadow: "0px 0px 6px 0px #FF6ADA45" }}
              />
            </div>
          )}

          {inViewport && (
            <div
              className="flex flex-col justify-center items-center min-w-[280px] min-h-[100px] py-[12px] px-[32px] bg-white/20 rounded-[20px] border border-[#ffffff]"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <span
                className="font-[600] text20 text-[#FF6ADA]"
                style={{ textShadow: "0px 0px 4px 0px #FF6ADA45" }}
              >
                Real created landmarks
              </span>
              <CountUp
                start={0}
                end={(data && data.point_num) || 0}
                separator=","
                className="font-[600] text36 text-[#FF6ADA] "
                style={{ textShadow: "0px 0px 6px 0px #FF6ADA45" }}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col items-center w-full relative mt-[20px]">
          <RiveComponent className="w-[1200px] h-[1000px]" />
        </div>

        <div className="flex flex-col w-full items-center -mt-[320px] z-10">
          <span className="font-[800] text-[36px] w-[80%] text-black leading-[54px] fontPP text-center">
            Getting started your Heyo travel
          </span>
          <div className="flex justify-center items-center font-[500] text-[24px] text-black gap-2 mt-[10px]">
            <span>I’m a user</span>
            <img
              src="/home/icon-switch.svg"
              className="w-[44PX] h-[24PX]"
            />{" "}
            <span>I want be mayor</span>
          </div>

          <div className=" w-screen overflow-hidden -mt-[0px] flex flex-col items-center">
            <img src="/home/banner1.png" className="w-[670px] h-[434px]" />

            <div className="flex flex-col items-center w-[600px] text-black ">
              <span className="font-[800] text-[24px] fontPP">
                Explore Landmarks
              </span>
              <span className="font-[500] text-[24px] leading-[42px] text-center">
                Heyo display nearby landmarks based on your current location,
                helping you explore and discover fascinating landmarks around
                you.
              </span>
            </div>
            <img src="/home/banner2.png" className="w-[670px] h-[434px] " />
            <div className="flex flex-col items-center w-[600px] text-black ">
              <span className="font-[800] text-[24px] fontPP">
                Explore Landmarks
              </span>
              <span className="font-[500] text20 leading-[24px] text-center">
                Heyo display nearby landmarks based on your current location,
                helping you explore and discover fascinating landmarks around
                you.
              </span>
            </div>
            <img src="/home/banner3.png" className="w-[670px] h-[434px]" />
            <div className="flex flex-col items-center w-[600px] text-black mt-[0px]">
              <span className="font-[800] text-[24px] fontPP">
                Explore Landmarks
              </span>
              <span className="font-[500] text20 leading-[24px] text-center">
                Heyo display nearby landmarks based on your current location,
                helping you explore and discover fascinating landmarks around
                you.
              </span>
            </div>
            <img src="/home/banner4.png" className="w-[670px] h-[434px]" />
            <div className="flex flex-col items-center w-[600px] text-black mt-[0px]">
              <span className="font-[800] text-[24px] fontPP">
                Explore Landmarks
              </span>
              <span className="font-[500] text20 leading-[24px] text-center">
                Heyo display nearby landmarks based on your current location,
                helping you explore and discover fascinating landmarks around
                you.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Intro);
