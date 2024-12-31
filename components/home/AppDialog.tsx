import useWindowSize from "@/hooks/useWindowSize";
import { Dialog } from "antd-mobile";
import React, { useCallback } from "react";

const AppDialog = ({ show, setShow }: any) => {
  const { isMobile } = useWindowSize();
  const handleClickToPc = useCallback(() => {
    window.open("https://app.heyoplanet.com", "_blank");
  }, []);

  const handleClickToMobile = useCallback(() => {
    window.open("https://t.me/HeyoPlanetBot/Heyo", "_blank");
  }, []);
  return (
    <Dialog
      visible={show}
      className="relative"
      closeOnMaskClick={false}
      getContainer={document && document.getElementById("root")}
      bodyStyle={{
        backgroundColor: "transparent",
        width: isMobile ? "100vw" : "19vw",
        height: isMobile ? "150vw" : "32vw",
        overflow: "hidden",
        marginTop: isMobile ? "0px" : "-5vw",
      }}
      maskStyle={{
        backgroundColor: "#343434",
        opacity: 0.8,
      }}
      content={
        <div className="-ml-[6.2vw] md:-ml-0 relative w-[82vw] h-[134.4vw] md:w-[16.04vw] md:h-[26.25vw] flex flex-col justify-center items-center mt-[10px] md:mt-[2vw]">
          <img src="/image-app-bg.svg" className="w-full h-full img-disabled" />
          <img
            onClick={() => setShow(false)}
            src="/icon-close.svg"
            className="w-[24px] h-[24px] md:w-[1.3vw] md:h-[1.3vw] absolute -right-[10px] -top-[10px] md:-right-[0.52vw] md:-top-[0.52vw] 
          z-50 hover:scale-125 cursor-pointer"
          />
          <img
            src="/image-code.png"
            className="w-[53vw] h-[53vw] md:w-[10.42vw] md:h-[10.42vw] absolute z-10 top-[29.6vw]
         left-1/2 -ml-[26.5vw] md:top-[5.73vw] md:-ml-[5.21vw]"
          />
          <div
            className="w-[53vw] h-[38px] md:w-[10.42vw] md:h-[1.98vw] flex justify-center items-center text-[#2c2100]
         gap-[6px] absolute z-10 top-[81.6vw] left-1/2 -ml-[26.5vw] cursor-pointer hover:text-black hover:scale-105
           md:top-[15.94vw] md:-ml-[5.21vw]"
            onClick={handleClickToMobile}
          >
            <span className="custom-app-underline   text-[3.7vw] md:text-[0.73vw] font-[800]">
              t.me/HeyoPlanetBot/Heyo
            </span>
            <img
              src="/icon-right-black.svg"
              className="w-[9px] h-[10px] md:w-[9px] md:h-[10px] img-disabled"
            />
          </div>

          <div
            className="w-[63.5vw] h-[38px] md:w-[12.4vw] md:h-[1.98vw] flex justify-center items-center bg-[#2C2100] rounded-[10px]
         gap-[12px] md:gap-[0.6vw] absolute z-10 bottom-[12.27vw] md:bottom-[2.4vw] left-1/2 -ml-[32.7vw]  md:-ml-[6.2vw] cursor-pointer hover:bg-black hover:scale-105"
            onClick={handleClickToPc}
          >
            <img
              src="/icon-pc.svg"
              className="w-[17px] h-[14px] md:w-[1vw] md:h-[0.83vw] img-disabled"
            />
            <span className="custom-underline text-[#FFF9B0] text-[3.7vw] md:text-[0.73vw] font-[500]">
              app.heyoplanet.com
            </span>
            <svg
              className="w-[18px] h-[18px] md:[1vw] md:h-[1vw]"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="10.4883"
                cy="9.99998"
                rx="10.1054"
                ry="9.99998"
                fill="#FFF9B0"
              />
              <path
                d="M15.7859 10.5303C16.0788 10.2374 16.0788 9.76256 15.7859 9.46967L11.013 4.6967C10.7201 4.40381 10.2452 4.40381 9.95231 4.6967C9.65942 4.98959 9.65942 5.46447 9.95231 5.75736L14.195 10L9.95231 14.2426C9.65942 14.5355 9.65942 15.0104 9.95231 15.3033C10.2452 15.5962 10.7201 15.5962 11.013 15.3033L15.7859 10.5303ZM5.72095 10.75H15.2556V9.25H5.72095V10.75Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      }
    ></Dialog>
  );
};

export default React.memo(AppDialog);
