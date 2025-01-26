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
    src: "/home/lifestyle.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });
  return (
    <section
      id="EXPERIENCE"
      className="relative flex justify-center items-center flex-col w-full z-10"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewport ? 1 : 0 }}
        className="relative flex flex-col items-center justify-center w-[72%]"
      > 
        <div className="text50  leading-[64PX] font-[800] mt-[32px] flex flex-col items-center justify-center z-[100] text-black fontPP">
          <span>Lifestyle Recommendations</span>
          <span>from Global Users</span>
        </div>
        <div className="flex justify-center items-center text-black  w-[88%] pb-[40px] !border-b-[1px] !border-b-[#D9D9D9] mb-[40px]">
          <div className="flex flex-col items-center justify-center gap-[30px] text24 w-[570px]">
            <span className=" font-[500]">
            Heyo Planet features over 10,000 user-created spots worldwide, spanning 20 categories including food, shopping malls, transportation, hotels, hospitals, and more.
            </span>
            <span className=" font-[500]">
            Here, you’ll discover the most authentic and local spot recommendations.
            </span>
          </div>
          <RiveComponent className="w-[710px] h-[410px]" />
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Experience);
