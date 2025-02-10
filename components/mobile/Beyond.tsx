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
    src: "/home/beyond.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });
  return (
    <section className="relative flex justify-center items-center flex-col w-full z-10">
      <img src="/experience/bg-bottom-right.png" className=" absolute w-[1649px] h-[2154px] -top-[300px] -right-[0px]" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewport ? 1 : 0 }}
        className="relative flex flex-col items-center justify-center w-[92%] z-10"
      >
        <div className="text-[4.3vw] font-[800] mt-[4.3vw] flex flex-col items-center justify-center z-[100] text-black fontPP">
          <span>Beyond Crypto</span>
        </div>
        <div className="flex flex-col justify-center items-center text-black w-[88%] pt-[2.67vw] mb-[5.55vw] ">
          <div className="flex flex-col items-center justify-center w-[76vw] gap-[4vw] text-[3.2vw] leading-[5.6vw]">
            <span className=" font-[500]">
              The landmarks in Heyo are closely integrated with real-world
              business scenarios, creating a seamless connection between Web2
              and Web3 experiences.
            </span>
          </div>
          <RiveComponent className="w-[95vw] h-[55vw] z-10 mt-[2.67vw]" />
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Experience);
