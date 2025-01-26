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
    src: "/home/era.riv",
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
        <div className="text50  leading-[64PX] font-[800] mt-[92px] flex flex-col items-center justify-center z-[100] text-black fontPP">
          <span>A New Era of Crypto </span>
          <span>Lifestyle</span>
        </div>
        <div className="flex justify-center items-center text-black pt-[20px] pb-[40px] !border-b-[1px] !border-b-[#D9D9D9] mb-[40px]">
          <div className="flex flex-col items-center justify-center gap-[30px] text24 w-[570px]">
            <span className=" font-[500]">
            Cryptocurrency is unstoppable. Heyo aims to create a lifestyle that seamlessly integrates crypto into everyday life, making cross-border living significantly more convenient.
            </span>
            <span className=" font-[500]">
            As a user-driven platform, we reward every interaction, empowering users to shape the future of crypto-enabled living.
            </span>
          </div>
          <RiveComponent className="w-[710px] h-[410px]" />
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Experience);
