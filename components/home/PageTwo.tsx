import React, { useEffect, useRef, useState } from "react";
import Phone from "./Phone";
import HeaderTwo from "./HeaderTwo";
import Citites from "./Citites";
import FilpClock from "./Spots";
import { useInViewport, useLocalStorageState } from "ahooks";
import { useStatistics } from "@/hooks/useApi";
import useWindowSize from "@/hooks/useWindowSize";

const PageTwo = () => {
  const {isMobile} = useWindowSize();
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);
  const [cityCount, setCityCount] = useLocalStorageState<number>(
    "heyo-cityCount",
    {
      defaultValue: 0,
    }
  );
  const [spotCount, setSpotCount] = useLocalStorageState<number>(
    "heyo-spotCount",
    {
      defaultValue: 0,
    }
  );
  const { data, run } = useStatistics();

  useEffect(() => {
    run();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative flex justify-center items-center md:flex-row flex-col bg-theme-color">
     {/* {isMobile && <HeaderTwo />}  */}
      <img
        src="/bg-light.svg"
        className=" w-full h-screen absolute bottom-0 left-0 z-[6] img-disabled"
        alt=""
      />

      <img
        src="/image-footer.png"
        className="w-full h-[19.3vw] hidden md:block  absolute bottom-0 left-0 z-[10] img-disabled"
        alt=""
      />

      <img
        src="/image-footer-phone.png"
        className="w-full h-[32.27vw] md:hidden block absolute bottom-0 left-0 z-[10] img-disabled"
        alt=""
      />

     {/* {isMobile &&  <Phone />} */}
      
      <div
        ref={ref}
        className="md:min-w-[29.2vw] md:h-[18.3vw] px-[20px] min-w-[60.3vw] h-[35.7vw] -mt-[36vw] md:-mt-[18vw] rounded-[3.2vw] flex flex-col justify-center items-center bg-[#F1DE00] md:rounded-[1.56vw] relative z-[15] gap-2"
      >
        
        {inViewport && data && (
          <Citites
            start={ cityCount || data.city_num - 5 || 100}
            end={data.city_num || cityCount}
            onFinish={() => {
              setCityCount(data.city_num);
            }}
          />
        )}
        <span className="text-[#645A00] font-[400] text-[3.2vw] md:text-[1.88vw]">
          Unlocked Cities
        </span>
        <div className="md:h-[6px] h-[2px] w-full bg-[#FFEA00] absolute top-1/2 left-0 -mt-[3.9vw] md:-mt-[1.88vw] z-50"></div>
      </div>

      <div className="md:min-w-[36.7vw] md:h-[18.3vw] md:ml-[5vw] min-w-[74.67vw] h-[35.7vw] px-[20px] mt-[6vw]  md:-mt-[18vw] flex flex-col justify-center items-center bg-[#221F00] md:rounded-[1.56vw] rounded-[3.2vw] relative z-[15]">
      
        {inViewport && data && (
          <FilpClock
            start={spotCount || data.point_num - 20 || 2500}
            end={data.point_num || spotCount}
            onFinish={() => {
              setSpotCount(data.point_num)
            }}
          />
        )}
        <span className="text-[#CAB700] font-[400] text-[3.2vw] md:text-[1.88vw]">
          Created Spots
        </span>
        <div className="md:h-[6px] h-[2px] w-full bg-[#FFEA00] absolute top-1/2 left-0 -mt-[2.67vw] md:-mt-[1.6vw] z-50"></div>
      </div>
    </div>
  );
};

export default React.memo(PageTwo);
