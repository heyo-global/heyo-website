import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInViewport } from "ahooks";
import useWindowSize from "@/hooks/useWindowSize";

const Landmark = () => {
  const { isMobile } = useWindowSize();

  return <>{isMobile ? <Mobile /> : <Pc />}</>;
};

const Mobile = () => {
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);
  return (
    <section
      id="MONOPOLY"
      className=" flex justify-center items-center flex-col text-[#535145] h-[780px] md:h-screen rounded-t-[30px] bg-white md:rounded-none"
    >
      <div className="font-[800] text-[20px] md:text-[2.4vw] ">
        Landmark Manager
      </div>

      <div
        className="flex flex-col justify-center items-center  gap-[12px] mt-[20px] "
        ref={ref}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: inViewport ? 1 : 0 }}
          className="rounded-[16px] w-[328px] h-[130px] md:w-[43.4vw] md:h-[14.7vw] flex justify-between items-center pl-[16px] bg-[#CCFCDE] relative"
        >
          <div className="flex flex-grow h-full flex-col justify-center z-10">
            <span className="text-[16px] leading-[18px] font-[800]">
              Location - based
            </span>
            <span className="text-[16px] leading-[18px] font-[800]">
              Monopoly Game
            </span>
            <span className="text-[12px] leading-[16px] font-[600] mt-[12px]">
              We turn all the land
            </span>
            <span className="text-[12px] leading-[16px] font-[600]">
              into financial assets
            </span>
          </div>

          <img
            src="/image-location.png"
            alt=""
            className="w-[190px] h-[130px] rounded-[16px] shrink-0 absolute right-0 top-0"
          />
        </motion.div>

        <div className="flex justify-between items-center w-[328px] gap-[12px]  overflow-hidden ">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: inViewport ? 1 : 0 }}
            className="rounded-[16px] w-[174px] h-[168px] bg-[#FCFAE9] flex flex-col justify-between items-center"
          >
            <img
              src="/image-create-occupy.png"
              alt=""
              className="w-[174px] h-[72px] "
            />
            <div className="flex-grow flex flex-col justify-center items-center">
              <span className="font-[800] text-[16px] leading-[20px] md:text-[1.56vw] md:leading-[2.2vw]">
                Create or Occupy
              </span>
              <span className="font-[600] text-[12px] leading-[16px] md:text-[0.73vw] md:leading-[0.94vw]">
                Create on your location
              </span>
              <span className="font-[600] text-[12px] leading-[16px] md:text-[0.73vw] md:leading-[0.94vw]">
                Occupy from other people
              </span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: inViewport ? 1 : 0 }}
            className="rounded-[16px] w-[138px] h-[168px] bg-[#FCFAE9] flex flex-col  items-center"
          >
            <img
              src="/image-manage.png"
              alt=""
              className="w-[84px] h-[50px] "
            />
            <div className=" flex flex-col items-center mt-[8px]">
              <span className="font-[800] text-[16px] leading-[20px] ">
                Manage
              </span>
              <span className="font-[800] text-[16px] leading-[20px] ">
                Landmark
              </span>
              <span className="font-[600] text-[12px] leading-[16px] mt-[8px] ">
                · Upgrading · Democrats 
              </span>
              <span className="font-[600] text-[12px] leading-[16px] ">
              · Claim $LAND 
              </span>
              <span className="font-[600] text-[12px] leading-[16px] ">
              · Withdraw $USDT
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: inViewport ? 1 : 0 }}
          className="rounded-[16px] w-[328px] h-[300px] flex flex-col justify-between items-center pl-[16px] bg-[#CCFCDE] relative overflow-hidden"
        >
          <div className="flex h-full flex-grow flex-col justify-center items-center">
            <span className="text-[16px] leading-[18px] font-[800] md:text-[1.56vw] md:leading-[2.2vw]">
              $LAND Usage - Network
            </span>
            <span className="text-[16px] leading-[18px] font-[800] md:text-[1.56vw] md:leading-[2.2vw]">
              Token $LAND
            </span>
            <span className="text-[12px] leading-[16px] font-[600] mt-[12px] md:text-[0.73vw] md:leading-[0.94vw]">
              · Landmark Trading
            </span>
            <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
              · Upgrade your Landmark Level to get more Land
            </span>
            <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
              · Expanded Consumption Scenarios
            </span>
          </div>

          <img
            src="/image-network-mobile.png"
            alt=""
            className="w-[192px] h-[144px] shrink-0 "
          />
        </motion.div>
      </div>
    </section>
  );
};
const Pc = () => {
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);
  return (
    <section
      id="MONOPOLY"
      className=" flex justify-center items-center flex-col text-[#535145]"
    >
      <div className="font-[800] text-[20px] md:text-[2.4vw] ">
        Landmark Manager
      </div>

      <div
        className="flex flex-col md:flex-row justify-center items-center  gap-[12px] mt-[30px]  md:mt-[3.2vw] md:gap-[2vw]"
        ref={ref}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: inViewport ? 1 : 0 }}
          className="rounded-[16px] w-[328px] h-[130px] md:w-[43.4vw] md:h-[14.7vw] flex justify-between items-center pl-[16px] bg-[#CCFCDE] relative"
        >
          <div className="flex flex-grow h-full flex-col justify-center items-center">
            <span className="text-[16px] leading-[18px] md:text-[1.56vw] md:leading-[2.2vw] font-[800]">
              Location - based
            </span>
            <span className="text-[16px] leading-[18px] md:text-[1.56vw] md:leading-[2.2vw] font-[800]">
              Monopoly Game
            </span>
            <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
              We turn all the land into financial assets
            </span>
          </div>

          <img
            src="/image-location.png"
            alt=""
            className="w-[190px] h-[130px] rounded-[16px] shrink-0 md:w-[23.5vw] md:h-[14.7vw]"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: inViewport ? 1 : 0 }}
          className="rounded-[16px] w-[574px] h-[282px] md:w-[30vw] md:h-[14.7vw] bg-[#FCFAE9] flex flex-col justify-between items-center"
        >
          <img
            src="/image-create-occupy.png"
            alt=""
            className="w-[510px] h-[178px] md:w-[26.56vw] md:h-[9.27vw]"
          />
          <div className="flex-grow flex flex-col justify-center items-center">
            <span className="font-[800] text-[30px] leading-[42px] md:text-[1.56vw] md:leading-[2.2vw]">
              Create or Occupy
            </span>
            <span className="font-[600] text-[12px] leading-[16px] md:text-[0.73vw] md:leading-[0.94vw]">
              Create on your location
            </span>
            <span className="font-[600] text-[12px] leading-[16px] md:text-[0.73vw] md:leading-[0.94vw]">
              Occupy from other people
            </span>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center items-center gap-[12px] mt-[12px] overflow-hidden md:gap-[2vw] md:mt-[2vw]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: inViewport ? 1 : 0 }}
          className="rounded-[16px] w-[574px] h-[282px] md:w-[30vw] md:h-[14.7vw] bg-[#FCFAE9] flex flex-col justify-between items-center"
        >
          <img
            src="/image-manage.png"
            alt=""
            className="w-[342px] h-[207px] md:w-[17.8vw] md:h-[9vw]"
          />
          <div className="flex-grow flex flex-col justify-center items-center -mt-[12px]">
            <span className="font-[800] text-[30px] leading-[42px] md:text-[1.56vw] md:leading-[2.2vw]">
              Manage Landmark
            </span>
            <span className="font-[600] text-[12px] leading-[16px] md:text-[0.73vw] md:leading-[0.94vw]">
            Upgrading · Democrats · Claim $LAND · Withdraw $USDT
            </span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: inViewport ? 1 : 0 }}
          className="rounded-[16px] w-[328px] h-[300px] md:w-[43.4vw] md:h-[14.7vw] flex justify-between items-center pl-[16px] bg-[#CCFCDE] relative overflow-hidden"
        >
          <div className="flex h-full flex-grow flex-col justify-center items-center">
            <span className="text-[16px] leading-[18px] font-[800] md:text-[1.56vw] md:leading-[2.2vw]">
              $LAND Usage - Network
            </span>
            <span className="text-[16px] leading-[18px] font-[800] md:text-[1.56vw] md:leading-[2.2vw]">
              Token $LAND
            </span>
            <span className="text-[12px] leading-[16px] font-[600] mt-[12px] md:text-[0.73vw] md:leading-[0.94vw]">
              · Landmark Trading
            </span>
            <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
              · Upgrade your Landmark Level to get more Land
            </span>
            <span className="text-[12px] leading-[16px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
              · Expanded Consumption Scenarios
            </span>
          </div>

          <img
            src="/image-network.png"
            alt=""
            className="w-[357px] h-full shrink-0 rounded-[16px] md:w-[18.6vw]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Landmark);
