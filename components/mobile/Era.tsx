import React, { useEffect, useRef, useState } from "react"; 
import { useInViewport, useLocalStorageState } from "ahooks";  
import { motion } from "framer-motion";
import { useRive } from "@rive-app/react-canvas";

const Experience = () => { 
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
      <img
          src="/mobile/bg-era.png"
          className="w-full h-[170vw] absolute top-[0px] left-[0px]  z-[0] img-disabled"
          alt=""
        />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewport ? 1 : 0 }}
        className="relative flex flex-col items-center justify-center w-[92%] z-10"
      > 
        <div className="text-[4.8vw] leading-[7.2vw] w-full font-[800] mt-[12.3vw] flex flex-col items-center justify-center z-[100] text-black fontPP">
          <span>A New Era of Crypto</span>
          <span>Lifestyle</span>
        </div>
        <div className="flex flex-col justify-center items-center text-black pt-[2.67vw] pb-[5.55vw] !border-b-[1px] !border-b-[#D9D9D9] mb-[5.55vw]">
          <div className="flex flex-col items-center justify-center my-[2.67vw] gap-[4vw] text-[3.2vw] leading-[5.6vw] w-[76vw]">
            <span className=" font-[500]">
            Cryptocurrency is unstoppable. Heyo aims to create a lifestyle that seamlessly integrates crypto into everyday life, making cross-border living significantly more convenient.
            </span>
            <span className=" font-[500]">
            As a user-driven platform, we reward every interaction, empowering users to shape the future of crypto-enabled living.
            </span>
          </div>
          <RiveComponent className="w-[95vw] h-[55vw]" />
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Experience);
