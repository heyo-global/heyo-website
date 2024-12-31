import React, { useRef } from "react"; 
import useWindowSize from "@/hooks/useWindowSize"; 
import { motion } from 'framer-motion';
import { useInViewport } from "ahooks";

const PageOne = () => {
  const {isMobile} = useWindowSize();
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);
  return (
    <section id="INTRO" className="relative overflow-hidden text-[#535145]">
      
      <motion.div ref={ref} initial={{opacity: 0}} animate={{opacity: inViewport?1:0}} className="font-[800] text-[30px] md:text-[6.25vw] h-[40vh] md:h-[50vh] leading-[40px] md:leading-[6.77vw] flex flex-col items-center justify-center pt-[10vw]">
        <span>The World's First</span>
        <span>Web3 LBS Lifestyle App</span>
        <span className="font-[500] text-[12px] md:text-[1.82vw] leading-[14px] md:leading-[2vw] mt-[1vw]">Seamlessly move from Web2 to Web3 in daily lives</span> 
      </motion.div>

      <div className=" relative w-full  h-[60vh] md:h-[50vh] overflow-hidden">
        <img
          src="/bg-earth.svg"
          className="w-[1528px] h-[413px] md:w-[79.6vw] md:h-[21.5vw] img-disabled absolute bottom-[0vw] left-1/2 -ml-[39.8vw] z-[10]"
        />

        <img src="/Hotspots-01.svg" alt="" className="img-disabled absolute bottom-[5vw] left-[18vw] z-[300] w-[74px] h-[108px] md:w-[3.85vw] md:h-[5.6vw] marker6 "/>
        <img src="/Hotspots-02.svg" alt="" className="img-disabled absolute bottom-[4vw] left-[28vw] z-[300] w-[74px] h-[108px] md:w-[3.85vw] md:h-[5.6vw] marker5 "/>
        <img src="/Hotspots-03.svg" alt="" className="img-disabled absolute bottom-[12vw] left-[34vw] z-[300] w-[74px] h-[108px] md:w-[3.85vw] md:h-[5.6vw] marker2 "/>
        <img src="/Hotspots-04.svg" alt="" className="img-disabled absolute bottom-[8vw] left-[46vw] z-[300] w-[74px] h-[108px] md:w-[3.85vw] md:h-[5.6vw] marker3 "/>
        <img src="/Hotspots-05.svg" alt="" className="img-disabled absolute bottom-[14vw] right-[42vw] z-[300] w-[74px] h-[108px] md:w-[3.85vw] md:h-[5.6vw] marker1 "/>
        <img src="/Hotspots-06.svg" alt="" className="img-disabled absolute bottom-[16vw] right-[36vw] z-[300] w-[74px] h-[108px] md:w-[3.85vw] md:h-[5.6vw] marker4 "/>
        <img src="/Hotspots-07.svg" alt="" className="img-disabled absolute bottom-[8vw] right-[24vw] z-[300] w-[74px] h-[108px] md:w-[3.85vw] md:h-[5.6vw] marker4 "/>
      </div>

    </section>
  );
};

export default React.memo(PageOne);
