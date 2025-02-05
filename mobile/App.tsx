import { motion } from "framer-motion";
import React, { useCallback, useEffect } from "react";

const App = () => {
  const handleClickToMobile = useCallback(() => {
    window.open("https://t.me/HeyoPlanetBot/Heyo", "_blank");
  }, []);
  return (
    <div className="text-[#535145] relative bg-white w-full h-screen flex flex-col justify-center items-center ">
      {/* <img src="/image-app-bg.svg" className="md:w-[306px] md:h-[518px] img-disabled absolute" /> */}

      <div className="flex flex-col justify-center items-center text-[16px] w-full h-[70%] font-[800] ">
        <span>Visit us on</span>
        <span>Telegram Mini-app</span>

        <img
          src="/image-code.png"
          className="w-[53vw] h-[53vw]  mt-[12px]"
        />

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[53vw] h-[38px] mt-[12px]  flex justify-center items-center gap-[6px] cursor-pointer "
          onClick={handleClickToMobile}
        >
          <span className="custom-app-underline text-[3.7vw]  font-[800]">
            t.me/HeyoPlanetBot/Heyo
          </span>
          <img
            src="/icon-right-black.svg"
            className="w-[9px] h-[10px] md:w-[9px]  img-disabled"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(App);
