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
        className="relative flex flex-col items-center justify-center w-[72%] z-10"
      >
        <div className="text50 font-[800] mt-[32px] flex flex-col items-center justify-center z-[100] text-black">
          <span>Beyond Crypto</span>
        </div>
        <div className="flex justify-center items-center text-black w-[88%] pt-[20px] mb-[80px] ">
          <div className="flex flex-col items-center justify-center w-[570px] gap-[30px] text24">
            <span className=" font-[500]">
              The landmarks in Heyo are closely integrated with real-world
              business scenarios, creating a seamless connection between Web2
              and Web3 experiences.
            </span>
          </div>
          <RiveComponent className="w-[710px] h-[410px] z-10" />
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Experience);
