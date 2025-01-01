import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInViewport } from "ahooks";

const RealWord = () => {
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);
  return (
    <section
      id="REAL-WORLD"
      className=" flex justify-center items-center flex-col text-[#535145] h-[950px] md:h-screen bg-[#FBFBFB] rounded-t-[30px] md:bg-white md:rounded-none"
    >
      <div className="font-[800] text-[20px]  md:text-[2.4vw] pt-[50px] md:pt-0">
        Providing A Global Lifestyle
      </div>

      <div
        className="flex flex-col md:flex-row justify-between items-center relative mt-[20px] md:mt-[4.2vw] md:w-[61vw] h-[830px] md:h-[30.57vw]"
        ref={ref}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: inViewport ? 1 : 0 }}
          className="rounded-[20px] shrink-0 w-[200px] h-[278px] md:w-[19.4vw] md:h-[26.67vw] flex flex-col items-center pt-[16px] md:pt-[2vw]"
          style={{
            background: "linear-gradient(180deg, #CEFFFC 0%, #ECFFFE 100%)",
          }}
        >
          <span className="text-[16px] leading-[20px] md:text-[1.56vw] md:leading-[2.2vw] font-[800]">
            Interaction and
          </span>
          <span className="text-[16px] leading-[20px] md:text-[1.56vw] md:leading-[2.2vw] font-[800]">
            Get $HYEO
          </span>
          <img
            src="/image-interaction.png"
            alt=""
            className="w-[144px] h-[135px] my-[4px] md:my-[10px] md:w-[12.86vw] md:h-[12.55vw]"
          />
          <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            Heyo goes beyond providing
          </span>
          <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            detailed landmark information
          </span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-[20px] shrink-0 absolute top-1/2 left-1/2 md:top-0 md:left-1/2 md:-ml-[11.5vw] z-100 w-[260px] h-[310px] -ml-[130px] -mt-[164px] md:mt-0 md:w-[23vw] md:h-[30.57vw] flex flex-col items-center pt-[20px] md:pt-[2vw]"
          style={{
            background: "linear-gradient(180deg, #FFF1DB 0%, #FFFBF4 100%)",
            boxShadow: "0px 0px 30px 0px #645A000D",
          }}
        >
          <span className="text-[16px] leading-[20px] font-[800] md:text-[1.56vw] md:leading-[2.2vw]">
            Bridging Reality and
          </span>
          <span className="text-[16px] leading-[20px] font-[800] md:text-[1.56vw] md:leading-[2.2vw]">
            Cryptocurrency
          </span>
          <img
            src="/image-compelling.png"
            alt=""
            className="w-[217px] h-[158px] my-[6px] md:my-[24px] md:w-[17vw] md:h-[15vw] shrink-0"
          />
          <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            Every landmark on Heyo
          </span>
          <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            holds significant real-world
          </span>
          <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            business value
          </span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: inViewport ? 1 : 0 }}
          className="rounded-[20px] shrink-0 w-[200px] h-[280px] md:w-[19.4vw] md:h-[26.67vw] flex flex-col items-center pt-[24px] md:pt-[2vw]"
          style={{
            background: "linear-gradient(180deg, #FFE1E1 0%, #FFF5F5 100%)",
          }}
        >
          <span className="text-[16px] leading-[20px] font-[800] md:text-[1.56vw] md:leading-[2.2vw]">
            $HEYO usage
          </span>

          <img
            src="/image-bridging.png"
            alt=""
            className="w-[128px] h-[122px] my-[4px] md:my-[16px] md:w-[204px] md:h-[192px]"
          />
          <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            Users could check themself in
          </span>
          <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            $HEYO Headership
          </span>
          <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw] mt-[6px] md:mt-[1vw]">
            Heyo planet will Launches
          </span>
          <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            earning Match Season and
          </span>
          <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            $HEYO exchange Mall
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(RealWord);
