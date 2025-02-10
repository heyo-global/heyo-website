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
      <div className="relative w-full h-[502vw] flex flex-col items-center overflow-hidden text-black  bg-no-repeat bg-cover">
        <img
          src="/mobile/bg.png"
          className="w-full h-[183vw] absolute top-0 left-0 z-0"
        />
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inViewport ? 1 : 0 }}
          style={{ fontSize: "60PX", lineHeight: "82PX" }}
          className="font-[800] flex flex-col items-center justify-center mt-[17vw] z-10"
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
            className="flex justify-center items-center text-[3.7vw] gap-[3.2vw] text-black font-[500] mt-[6.7vw]"
          >
            <span
              className="min-w-[19vw] px-[3.2vw] py-[4px] min-h-[4vw] text-center rounded-3xl"
              style={{
                background: "linear-gradient(90deg, #52FEFF 0%, #00FEFF 100%)",
              }}
            >
              Discover
            </span>
            <span
              className="min-w-[16vw] min-h-[4vw] px-[3.2vw] py-[4px] text-center rounded-3xl"
              style={{
                background:
                  " linear-gradient(270deg, #BAFE74 0%, #D4FFA8 100%)",
              }}
            >
              Create
            </span>
            <span className="min-w-[8vw] min-h-[4vw] text-center ">And</span>
            <span
              className="min-w-[18vw] min-h-[4vw] px-[3.2vw] py-[4px] text-center rounded-3xl"
              style={{
                background:
                  "  linear-gradient(90deg, #FFDBF5 0%, #FFC3EE 100%)",
              }}
            >
              Interact
            </span>
          </div>
          <span className="font-[500] text-[3.3vw] leading-[3.7vw] mt-[2.67vw]">
            with Fascinating Landmarks Around You
          </span>
        </motion.div>

        <div className="w-[85vw] h-[15vw] mt-[9vw] flex justify-between items-center z-10">
          {inViewport && (
            <div
              className="flex flex-col justify-center items-center min-w-[37vw] min-h-[13.33vw] py-[12px] px-[4.3vw] bg-white/20 rounded-[2.67vw] border border-[#ffffff]"
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
              className="flex flex-col justify-center items-center min-w-[37vw] min-h-[13.33vw] py-[12px] px-[4.3vw] bg-white/20 rounded-[2.67vw] border border-[#ffffff]"
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

        <div className="flex flex-col items-center w-full relative mt-[2.67vw]">
          <RiveComponent className="w-[1200px] h-[1000px]" />
        </div>

        <div className="flex flex-col w-full items-center -mt-[42.7vw] z-10">
          <span className="font-[800] text-[4.8vw] w-[80%] text-black leading-[7.2vw] fontPP text-center">
            Getting started your Heyo travel
          </span>
          <div className="flex justify-center items-center font-[500] text-[3.2vw] text-black gap-2 mt-[10px]">
            <span>I’m a user</span>
            <img
              src="/home/icon-switch.svg"
              className="w-[44PX] h-[3.2vw]"
            />{" "}
            <span>I want be mayor</span>
          </div>            

          <div className=" w-screen overflow-hidden flex flex-col items-center">
            <img src="/home/banner1.png" className="w-[89.3vw] h-[57.87vw]" />

            <div className="flex flex-col items-center w-[600px] text-black ">
              <span className="font-[800] text-[3.2vw] fontPP">
                Explore Landmarks
              </span>
              <span className="font-[500] text-[3.2vw] leading-[4.8vw] text-center">
                Heyo display nearby landmarks based on your current location,
                helping you explore and discover fascinating landmarks around
                you.
              </span>
            </div>
            <img src="/home/banner2.png" className="w-[89.3vw] h-[57.87vw] " />
            <div className="flex flex-col items-center w-[600px] text-black ">
              <span className="font-[800] text-[3.2vw] fontPP">
                Explore Landmarks
              </span>
              <span className="font-[500] text-[3.2vw] leading-[4.8vw] text-center">
                Heyo display nearby landmarks based on your current location,
                helping you explore and discover fascinating landmarks around
                you.
              </span>
            </div>
            <img src="/home/banner3.png" className="w-[89.3vw] h-[57.87vw]" />
            <div className="flex flex-col items-center w-[600px] text-black ">
              <span className="font-[800] text-[3.2vw] fontPP">
                Explore Landmarks
              </span>
              <span className="font-[500] text-[3.2vw] leading-[4.8vw] text-center">
                Heyo display nearby landmarks based on your current location,
                helping you explore and discover fascinating landmarks around
                you.
              </span>
            </div>
            <img src="/home/banner4.png" className="w-[89.3vw] h-[57.87vw]" />
            <div className="flex flex-col items-center w-[600px] text-black ">
              <span className="font-[800] text-[3.2vw] fontPP">
                Explore Landmarks
              </span>
              <span className="font-[500] text-[3.2vw] leading-[4.8vw] text-center">
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
