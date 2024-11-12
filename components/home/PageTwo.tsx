import React from "react";
import Phone from "./Phone";
import HeaderTwo from "./HeaderTwo";

const PageTwo = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center md:flex-row flex-col bg-theme-color">
      <HeaderTwo />
      <img
        src="/bg-light.svg"
        className="w-full h-screen absolute bottom-0 left-0 z-[1] img-disabled"
        alt=""
      />

      <img
        src="/image-footer.png"
        className="w-full h-[22.2vw] hidden md:absolute bottom-0 left-0 z-[2] img-disabled"
        alt=""
      />

      <img
        src="/image-footer-phone.png"
        className="w-full h-[32.27vw] md:hidden absolute bottom-0 left-0 z-[2] img-disabled"
        alt=""
      />

      <Phone />

      <div className="md:w-[29.2vw] md:h-[18.3vw] w-[60.3vw] h-[35.7vw] -mt-[20vw] md:mt-0 rounded-[3.2vw] flex flex-col justify-center items-center bg-[#F1DE00] md:rounded-[1.56vw] relative z-[5] gap-2">
        <div className="flex justify-center items-center gap-[2.67vw] md:gap-[20px]">
          <div className="md:w-[6.88vw] md:h-[11.4vw] w-[15.5vw] h-[21.8vw] rounded-[2.67vw] bg-[#FFEA00] text-[#FFEA00] md:rounded-[2.67vw] flex justify-center items-center">
            <span className="font-[700] text-[#2C2100] text-[16vw] md:text-[8.3vw]">
              3
            </span>
          </div>
          <div className="md:w-[6.88vw] md:h-[11.4vw] w-[15.5vw] h-[21.8vw] rounded-[2.67vw] bg-[#FFEA00] text-[#FFEA00] md:rounded-[2.67vw] flex justify-center items-center">
            <span className="font-[700] text-[#2C2100] text-[16vw] md:text-[8.3vw]">
              3
            </span>
          </div>
          <div className="md:w-[6.88vw] md:h-[11.4vw] w-[15.5vw] h-[21.8vw] rounded-[2.67vw] bg-[#FFEA00] text-[#FFEA00] md:rounded-[2.67vw] flex justify-center items-center">
            <span className="font-[700] text-[#2C2100] text-[16vw] md:text-[8.3vw]">
              3
            </span>
          </div>
        </div>
        <span className="text-[#645A00] font-[400] text-[3.2vw] md:text-[1.88vw]">
          Unlocked Cities
        </span>
        <div className="md:h-[6px] h-[2px] w-full bg-[#FFEA00] absolute top-1/2 left-0 md:-mt-[3px] z-50"></div>
      </div>

      <div className="md:w-[36.7vw] md:h-[18.3vw] md:ml-[5vw] w-[74.67vw] h-[35.7vw] mt-[5vw] md:mt-0 flex flex-col justify-center items-center bg-[#221F00] md:rounded-[1.56vw] rounded-[3.2vw] relative z-[5]">
        <div className="flex justify-center items-center md:gap-[20px]">
          <div className="md:w-[6.88vw] md:h-[11.4vw] w-[15.5vw] h-[21.87vw] rounded-[2.67vw] bg-[#171500] text-[#171500] md:rounded-[2.67vw] flex justify-center items-center">
            <span className="font-[700] text-[#FFEA00] text-[16vw] md:text-[8.3vw]">
              3
            </span>
          </div>
          <div className="md:w-[6.88vw] md:h-[11.4vw] w-[15.5vw] h-[21.87vw] rounded-[2.67vw] bg-[#171500] text-[#171500] md:rounded-[2.67vw] flex justify-center items-center">
            <span className="font-[700] text-[#FFEA00] text-[16vw] md:text-[8.3vw]">
              3
            </span>
          </div>
          <div className="md:w-[6.88vw] md:h-[11.4vw] w-[15.5vw] h-[21.87vw] rounded-[2.67vw] bg-[#171500] text-[#171500] md:rounded-[2.67vw] flex justify-center items-center">
            <span className="font-[700] text-[#FFEA00] text-[16vw] md:text-[8.3vw]">
              3
            </span>
          </div>
          <div className="md:w-[6.88vw] md:h-[11.4vw] w-[15.5vw] h-[21.87vw] rounded-[2.67vw] bg-[#171500] text-[#171500] md:rounded-[2.67vw] flex justify-center items-center">
            <span className="font-[700] text-[#FFEA00] text-[16vw] md:text-[8.3vw]">
              3
            </span>
          </div>
        </div>
        <span className="text-[#CAB700] font-[400] text-[3.2vw] md:text-[1.88vw]">
          Created Spots
        </span>
        <div className="md:h-[6px] h-[2px] w-full bg-[#FFEA00] absolute top-1/2 left-0 md:-mt-[3px] z-50"></div>
      </div>
    </div>
  );
};

export default React.memo(PageTwo);
