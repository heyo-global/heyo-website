import React from "react"; 
import useWindowSize from "@/hooks/useWindowSize"; 

const PageOne = () => {
  const {isMobile} = useWindowSize();

  return (
    <div className="w-screen h-screen relative overflow-hidden text-[#535145]">
      
      <div className="font-[800] text-[120px] h-[50vh] leading-[130px] flex flex-col items-center justify-center pt-[10vw]">
        <span>The World's First</span>
        <span>Web3 LBS Lifestyle App</span>
        <span className="font-[500] text-[35px] leading-[40px] mt-[1vw]">Seamlessly move from Web2 to Web3 in daily lives</span> 
      </div>

      <div className=" relative w-full  h-[50vh] overflow-hidden">
        <img
          src="/bg-earth.svg"
          className="w-[1528px] h-[413px] img-disabled absolute bottom-[0vw] left-1/2 -ml-[764px] z-[10]"
        />

        <img src="/Hotspots-01.svg" alt="" className="img-disabled absolute bottom-[5vw] left-[18vw] z-[300] w-[74px] h-[108px] marker6 "/>
        <img src="/Hotspots-02.svg" alt="" className="img-disabled absolute bottom-[4vw] left-[28vw] z-[300] w-[74px] h-[108px] marker5 "/>
        <img src="/Hotspots-03.svg" alt="" className="img-disabled absolute bottom-[12vw] left-[34vw] z-[300] w-[74px] h-[108px] marker2 "/>
        <img src="/Hotspots-04.svg" alt="" className="img-disabled absolute bottom-[8vw] left-[46vw] z-[300] w-[74px] h-[108px] marker3 "/>
        <img src="/Hotspots-05.svg" alt="" className="img-disabled absolute bottom-[14vw] right-[42vw] z-[300] w-[74px] h-[108px] marker1 "/>
        <img src="/Hotspots-06.svg" alt="" className="img-disabled absolute bottom-[16vw] right-[36vw] z-[300] w-[74px] h-[108px] marker4 "/>
        <img src="/Hotspots-07.svg" alt="" className="img-disabled absolute bottom-[8vw] right-[24vw] z-[300] w-[74px] h-[108px] marker4 "/>
      </div>

    </div>
  );
};

export default React.memo(PageOne);
