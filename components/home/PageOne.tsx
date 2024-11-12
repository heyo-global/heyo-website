import React from "react";
import Phone from "./Phone";
import Header from "./Header";

const PageOne = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden bg-black">
      <Header />
      <div className=" relative w-full h-full overflow-hidden">
        <img
          src="/bg-earth.svg"
          className="w-[124.27vw] h-[124.27vw] md:w-[62vw] md:h-[62vw] img-disabled absolute top-[60vw] -right-[10vw] md:right-0 md:top-[6vw]"
        />

        <img src="/Hotspots-05.svg" alt="" className="img-disabled absolute top-[82vw] left-[24vw] z-[300] w-[10vw] h-[16vw] marker md:top-[12vw] md:left-[54vw] md:w-[5.1vw] md:h-[8.2vw]"/>
        <img src="/Hotspots-03.svg" alt="" className="img-disabled absolute top-[83vw] left-[40vw] z-[300] w-[10vw] h-[16vw] marker md:top-[10vw] md:left-[64vw] md:w-[5.1vw] md:h-[8.2vw]"/>
        <img src="/Hotspots-04.svg" alt="" className="img-disabled absolute top-[92vw] left-[56vw] z-[300] w-[10vw] h-[16vw] marker md:top-[16vw] md:left-[68vw] md:w-[5.1vw] md:h-[8.2vw]"/>
        <img src="/Hotspots-06.svg" alt="" className="img-disabled absolute top-[82vw] left-[66vw] z-[300] w-[10vw] h-[16vw] marker md:top-[20vw] md:left-[76vw] md:w-[5.1vw] md:h-[8.2vw]"/>
        <img src="/Hotspots-02.svg" alt="" className="img-disabled absolute top-[85vw] left-[78vw] z-[300] w-[10vw] h-[16vw] marker md:top-[19vw] md:left-[86vw] md:w-[5.1vw] md:h-[8.2vw]"/>
        <img src="/Hotspots-01.svg" alt="" className="img-disabled absolute top-[112vw] left-[68vw] z-[300] w-[10vw] h-[16vw] marker md:top-[32vw] md:left-[68vw] md:w-[5.1vw] md:h-[8.2vw]"/>
      </div>

      <div className="font-[800] text-[10.67vw] leading-[12.8vw] left-[16px] md:text-[6.6vw] text-[#FFEA00] md:leading-[8vw] md:left-[4.4vw] absolute -top-[44vw] md:top-0 h-screen z-10 flex flex-col justify-center">
        <div>Social Network</div>
        <div className="flex items-center gap-[3vw]">
          <span>Based On</span>
          <img src="/icon-map.png" className="w-[10.9vw] h-[6.4vw]" alt="" />
        </div>
        <div>Real-World</div>
        <div>Location</div>
      </div>

      <div className="w-screen h-[56.67vw] md:h-[5.2vw] overflow-hidden absolute -bottom-[40vw] md:bottom-0 left-0">
        <img
          alt=""
          src="/image-line.svg"
          className="w-full h-full md:w-full md:h-[56.8vw]"
        />
      </div>

      <Phone />
    </div>
  );
};

export default React.memo(PageOne);
