import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInViewport } from "ahooks";

const RealWord = () => {
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);
  return (
    <section
      id="REAL-WORLD"
      className=" flex justify-center items-center flex-col text-[#535145]"
    >
      <div className="font-[800] text-[30px]  md:text-[2.4vw] ">
        Providing A Global Lifestyle
      </div>

      <div
        className="flex justify-center items-center mt-[20px] md:mt-[4.2vw]"
        ref={ref}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: inViewport ? 1 : 0 }}
          className="rounded-[20px] w-[390px] h-[512px] md:w-[20.1vw] md:h-[26.67vw] flex flex-col items-center pt-[40px] md:pt-[2vw]"
          style={{
            background: "linear-gradient(180deg, #CEFFFC 0%, #ECFFFE 100%)",
          }}
        >
          <span className="text-[30px] leading-[42px] md:text-[1.56vw] md:leading-[2.2vw] font-[800]">
            Interaction with
          </span>
          <span className="text-[30px] leading-[42px] md:text-[1.56vw] md:leading-[2.2vw] font-[800]">
            Rewards
          </span>
          <img
            src="/image-interaction.png"
            alt=""
            className="w-[247px] h-[241px] my-[10px] md:w-[12.86vw] md:h-[12.55vw]"
          />
          <span className="text-[14px] leading-[18px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            Heyo goes beyond providing
          </span>
          <span className="text-[14px] leading-[18px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            detailed landmark information
          </span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} 
          className="rounded-[20px] w-[339px] h-[587px] md:w-[17.66vw] md:h-[30.57vw] flex flex-col items-center pt-[40px] md:pt-[2vw]"
          style={{
            background: "linear-gradient(180deg, #FFF1DB 0%, #FFFBF4 100%)",
          }}
        >
          <span className="text-[30px] leading-[42px] font-[800] md:text-[1.56vw] md:leading-[2.2vw]">
            A Compelling
          </span>
          <span className="text-[30px] leading-[42px] font-[800] md:text-[1.56vw] md:leading-[2.2vw]">
            Economic Model
          </span>
          <img
            src="/image-compelling.png"
            alt=""
            className="w-[255px] h-[211px] my-[24px] md:w-[13.28vw] md:h-[11vw]"
          />
          <span className="text-[14px] leading-[18px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            Heyo introduces an innovative
          </span>
          <span className="text-[14px] leading-[18px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            3-token model to reward
          </span>
          <span className="text-[14px] leading-[18px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            various contributions, ensuring
          </span>
          <span className="text-[14px] leading-[18px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            a balanced economy
          </span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: inViewport ? 1 : 0 }}
          className="rounded-[20px] w-[390px] h-[512px] md:w-[20.1vw] md:h-[26.67vw] flex flex-col items-center pt-[40px] md:pt-[2vw]"
          style={{
            background: "linear-gradient(180deg, #FFE1E1 0%, #FFF5F5 100%)",
          }}
        >
          <span className="text-[30px] leading-[42px] font-[800] md:text-[1.56vw] md:leading-[2.2vw]">
            Bridging Reality and
          </span>
          <span className="text-[30px] leading-[42px] font-[800] md:text-[1.56vw] md:leading-[2.2vw]">
            Cryptocurrency
          </span>
          <img
            src="/image-bridging.png"
            alt=""
            className="w-[208px] h-[219px] my-[16px] md:w-[10.8vw] md:h-[11.4vw]"
          />
          <span className="text-[14px] leading-[18px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            Every landmark on Heyo
          </span>
          <span className="text-[14px] leading-[18px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            holds significant real-world
          </span>
          <span className="text-[14px] leading-[18px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
            business value
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(RealWord);
