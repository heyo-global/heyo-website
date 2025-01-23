import React, { useEffect, useRef, useState } from "react";
import Citites from "./Citites";
import FilpClock from "./Spots";
import { useInViewport, useLocalStorageState } from "ahooks";
import { useStatistics } from "@/hooks/useApi";
import useWindowSize from "@/hooks/useWindowSize";
import { motion } from "framer-motion";

const Experience = () => {
  const { isMobile } = useWindowSize();
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);

  return (
    <section
      id="EXPERIENCE"
      className="relative flex justify-center items-center flex-col  rounded-t-[30px] bg-white md:rounded-none w-full"
    >
      <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inViewport ? 1 : 0 }}
      className="relative flex flex-col items-center justify-center mt-[20px] w-[72%]"
      >
        <img
        src="/experience/experience.svg"
        className="w-[230px] h-[230px] md:w-[113.85vw] md:h-[12vw] absolute top-[0px] left-[0px]  z-[10] img-disabled"
        alt=""
        />
        <div className="text-[50px] font-[800] mt-[92px] flex flex-col items-center justify-center z-[100] text-black">
          <span>AI-Powered Digital Twin </span>
          <span>of the Real World</span>
        </div>
        <div className="flex justify-center items-center text-black  w-[88%] pb-[40px] !border-b-[1px] !border-b-[#D9D9D9] mb-[40px]">
          <div className="flex flex-col items-center justify-center gap-[30px]">
             <span className="text-[24px] font-[500]">
              We leverage real-world geographic data and user activity to create a blockchain-based, 1:1 AI-simulated twin of Earth. 
            </span>
            <span className="text-[24px] font-[500]">
              Here, every piece of spot becomes a tradeable crypto asset, seamlessly bridging the physical and digital worlds.
            </span>
          </div>
          <img
          src="/experience/earth.svg"
          className="w-[664px] h-[664px] md:w-[113.85vw] md:h-[12vw] z-[10] img-disabled"
          alt=""
          />
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Experience);