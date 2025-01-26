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
      className="relative flex justify-center items-center flex-col w-full z-10"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewport ? 1 : 0 }}
        className="relative flex flex-col items-center justify-center mt-[20px] w-[72%]"
      >
        <img
          src="/experience/experience.svg"
          className="w-[1380px] h-[140px] absolute top-[0px] left-[0px]  z-[10] img-disabled"
          alt=""
        />
        <div className="text50 leading-[64PX] font-[800] mt-[72px] flex flex-col items-center justify-center z-[100] text-black">
          <span>AI-Powered Digital Twin </span>
          <span>of the Real World</span>
        </div>
        <div className="flex justify-center items-center text-black  !border-b-[1px] !border-b-[#D9D9D9] ">
          <div className="flex flex-col items-center justify-center w-[570px] gap-[30px] text24">
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
            className="w-[710px] h-[564px] flex items-center relative -mt-[30px] "
            style={{ backdropFilter: "blur(100px)" }}
          >
            <img src="/home/bg-exprience-anmation.png" className="w-[664px] h-[664px] absolute top-[0px] left-[20px] z-0" />
            <RiveComponent className="w-[710px] h-[460px] z-10" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Experience);
