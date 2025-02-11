import useWindowSize from "@/hooks/useWindowSize";
import { Dialog } from "antd-mobile";
import { motion } from "framer-motion";
import React, { useCallback, useEffect } from "react";

const AppDialog = ({ show, setShow }: any) => {
  const { isMobile } = useWindowSize();
  const handleClickToPc = useCallback(() => {
    window.open("https://app.heyoplanet.com", "_blank");
  }, []);

  const handleClickToMobile = useCallback(() => {
    window.open("https://t.me/HeyoPlanetBot/Heyo", "_blank");
  }, []);

  // useEffect(() => {
  //   const arr:any = document.getElementsByClassName("adm-mask-aria-button");
  //   if(arr){
  //     arr.forEach((item:any) => {
  //       item.
  //     })
  //   }
  // },[])
  return (
    <Dialog
      visible={show}
      className="relative"
      closeOnMaskClick={true}
      bodyStyle={{
        backgroundColor: "transparent",
        width: isMobile ? "81.3vw" : "16vw",
        height: isMobile ? "138vw" : "27vw",
        overflow: "hidden", 
      }}
      title={
        <div className=" text-black flex justify-center w-full relative "> 
           <div
              className="top-[4vw] right-[2vw] md:top-[1vw] md:right-[0.5vw] z-[200] absolute cursor-pointer flex justify-center items-center group"
              onClick={() => setShow(false)}
            >
              <svg
                className="w-[8vw] h-[8vw] group-hover:scale-125"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="#F8F8F8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="14"
                  cy="14"
                  r="14"
                  fill="#F8F8F8"
                  className="group-hover:fill-black/10 "
                />
                <path
                  d="M18 10L10 18"
                  stroke="black"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M10 10L18 18"
                  stroke="black"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
        </div>
      }
      content={
        <div className="text-[#535145] relative bg-[url(/image-app-bg.svg)] bg-contain bg-no-repeat w-full h-full flex flex-col justify-center items-center ">
          {/* <img src="/image-app-bg.svg" className="md:w-[306px] md:h-[518px] img-disabled absolute" /> */}

          <div className="flex flex-col justify-center items-center text-[3.7vw] w-full h-[70%] font-[800] md:text-[0.94vw] md:leading-[1.1vw]">
            <span>Visit us on</span>
            <span>Telegram Mini-app</span>

            <img
              src="/image-code.png"
              className="w-[53vw] h-[53vw] md:w-[10.42vw] md:h-[10.42vw] md:mt-[0.3vw]"
            />

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-[53vw] h-[10vw] md:w-[10.42vw] md:h-[1.48vw] flex justify-center items-center gap-[6PX] cursor-pointer "
              onClick={handleClickToMobile}
            >
              <span className="custom-app-underline text-[3.7vw] md:text-[0.73vw] font-[800]">
                t.me/HeyoPlanetBot/Heyo
              </span>
              <img
                src="/icon-right-black.svg"
                className="w-[2.4vw] h-[2.6vw] md:w-[9px] md:h-[10px] img-disabled"
              />
            </motion.div>
          </div>

          <div className="flex flex-col justify-center items-center text-[3.7vw] w-full h-[30%] gap-[6PX] font-[800]  md:text-[0.94vw] md:leading-[1.1vw]">
            <span>on Web Version</span>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-[63.5vw] h-[10vw] md:w-[11.4vw] md:h-[1.98vw] flex justify-center items-center rounded-[5.55vw]
         gap-[12px] md:gap-[0.6vw] cursor-pointer border border-[#ADADAD]"
              onClick={handleClickToPc}
            >
              <img
                src="/icon-pc.svg"
                className="w-[4.5vw] h-[3.7vw] md:w-[1vw] md:h-[0.83vw] img-disabled"
              />
              <span className="custom-underline  text-[3.7vw] md:text-[0.73vw] font-[500]">
                app.heyoplanet.com
              </span>
              <svg
                className="w-[3.2vw] h-[3.2vw]"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8607 6.53033C11.1535 6.23744 11.1535 5.76256 10.8607 5.46967L6.08768 0.696699C5.79479 0.403806 5.31991 0.403806 5.02702 0.696699C4.73413 0.989593 4.73413 1.46447 5.02702 1.75736L9.26966 6L5.02702 10.2426C4.73413 10.5355 4.73413 11.0104 5.02702 11.3033C5.31991 11.5962 5.79479 11.5962 6.08768 11.3033L10.8607 6.53033ZM0.795654 6.75H10.3303V5.25H0.795654V6.75Z"
                  fill="#535145"
                />
              </svg>
            </motion.div>

            <span className="text-[2.7vw] font-[500]">
              For mobile and desktop
            </span>
          </div>
        </div>
      }
    ></Dialog>
  );
};

export default React.memo(AppDialog);
