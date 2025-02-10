import React, { useEffect, useRef, useState } from "react";
import { useInViewport, useLocalStorageState } from "ahooks";
import useWindowSize from "@/hooks/useWindowSize";
import { motion } from "framer-motion";
import { useRive } from "@rive-app/react-canvas";

const Experience = () => {
  const { isMobile } = useWindowSize();
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);
  const { RiveComponent } = useRive({
    src: "/home/real-word.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });
  return (
    <section
      id="Experience"
      className="relative flex justify-center items-center flex-col w-full z-10 "
    >
      <img
          src="/mobile/bg-real.png"
          className="w-full h-[178vw] absolute top-[0px] left-[0px]  z-[0] img-disabled"
          alt=""
        />

      <img
          src="/mobile/experience.png"
          className="w-full h-[10.4vw] absolute top-[4vw] -left-[0px]  z-[10] img-disabled"
          alt=""
        />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewport ? 1 : 0 }}
        className="relative flex flex-col items-center justify-center -mt-[0vw] w-[92%]"
      > 
        <div className="text-[4.8vw] leading-[7.2vw] font-[800] w-full mt-[8.3vw] flex flex-col items-center justify-center z-[100] text-black fontPP">
          <span>AI-Powered Digital Twin</span>
          <span>of the Real World</span>
        </div>
        <div className="flex flex-col justify-center items-center text-black  !border-b-[1px] !border-b-[#D9D9D9] ">
          <div className="flex flex-col items-center justify-center w-[76vw] mt-[5.55vw] gap-[4vw] text-[3.2vw] leading-[5.6vw]">
            <span className=" font-[500]">
              We leverage real-world geographic data and user activity to create
              a blockchain-based, 1:1 AI-simulated twin of Earth.
            </span>
            <span className=" font-[500]">
              Here, every piece of spot becomes a tradeable crypto asset,
              seamlessly bridging the physical and digital worlds.
            </span>
          </div>
          <div
            className="w-[95vw] h-[75.2vw] flex items-center relative -mt-[4vw] "
            style={{ backdropFilter: "blur(100px)" }}
          >
            {/* <img src="/home/bg-exprience-anmation.png" className="w-[664px] h-[664px] absolute top-[0px] left-[2.67vw] z-0" /> */}
            <RiveComponent className="w-[95vw] h-[61vw] z-10" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Experience);
