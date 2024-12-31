import React, { useEffect, useRef, useState } from "react";
import Citites from "./Citites";
import FilpClock from "./Spots";
import { useInViewport, useLocalStorageState } from "ahooks";
import { useStatistics } from "@/hooks/useApi";
import useWindowSize from "@/hooks/useWindowSize";

const PageTwo = () => {
  const { isMobile } = useWindowSize();
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
  const [ownedCount, setOwnedCount] = useLocalStorageState<number>(
    "heyo-ownedCount",
    {
      defaultValue: 0,
    }
  );
  const [mayorsCount, setMayorsCount] = useLocalStorageState<number>(
    "heyo-mayorsCount",
    {
      defaultValue: 0,
    }
  );
  const { data, run } = useStatistics();

  useEffect(() => {
    run();
  }, []);

  return (
    <section id="DATA" className="overflow-hidden relative flex justify-center items-center flex-col ">
      <img
        src="/image-footer.png"
        className="w-[2186px] h-[230px] md:w-[113.85vw] md:h-[12vw] absolute bottom-0 -left-[20px] z-[10] img-disabled"
        alt=""
      />

      <div className="flex flex-col justify-center items-center ">
        <span className="font-[800] text-[46px] leading-[64px] md:text-[2.4vw] md:leading-[3.33vw] text-[#535145]">Real-time Portfolio</span>

        <div className="w-full md:flex-1 relative flex justify-center items-center md:flex-row flex-col ">
          <div
            ref={ref}
            className="md:w-[26vw] md:h-[13.54vw] px-[20px]  w-[80vw]  md:pt-[0.5vw] 
             h-[35.7vw] -mt-[36vw] md:-mt-[1vw] rounded-[3.2vw] flex flex-col 
              justify-center items-center bg-[#F1DE00] md:rounded-[1.56vw] relative z-[15] gap-2"
          >
            {inViewport && data && (
              <Citites
                start={
                  cityCount || data.city_num > 1000
                    ? data.city_num - 5
                    : data.city_num
                }
                end={data.city_num || cityCount}
                onFinish={() => {
                  setCityCount(data.city_num);
                }}
              />
            )}
            <span className="text-[#645A00] font-[400] text-[3.2vw] md:text-[1.6vw] md:mt-[0vw]">
              Unlocked Cities
            </span>
            <div className="md:h-[6px] h-[2px] w-full bg-[#FFEA00] absolute top-1/2 left-0 -mt-[3.9vw] md:-mt-[1.88vw] z-50"></div>
          </div>

          <div
            className="md:w-[26vw] md:h-[13.54vw] md:ml-[3vw] w-[80vw] h-[35.7vw]  md:pt-[0.5vw] 
           px-[20px] mt-[6vw]  md:-mt-[1vw] flex flex-col justify-center items-center 
            bg-[#221F00] md:rounded-[1.56vw] rounded-[3.2vw] relative z-[15]"
          >
            {inViewport && data && (
              <FilpClock
                start={
                  spotCount || data.point_num > 2500
                    ? data.point_num - 20
                    : data.point_num
                }
                end={data.point_num || spotCount}
                onFinish={() => {
                  setSpotCount(data.point_num);
                }}
              />
            )}
            <span className="text-[#CAB700] font-[400] text-[3.2vw] md:text-[1.6vw] mt-[2vw] md:mt-[0vw]">
              Created Spots
            </span>
            <div className="md:h-[6px] h-[2px] w-full bg-[#FFEA00] absolute top-1/2 left-0 -mt-[2.67vw] md:-mt-[1.6vw] z-50"></div>
          </div>
        </div>

        <div className="w-full  md:flex-1  relative flex md:justify-center items-center md:flex-row flex-col-reverse ">
          <div
            className="md:w-[26vw] md:h-[13.54vw] md:mr-[3vw] w-[80vw] h-[35.7vw] px-[20px] 
           mt-[6vw]  md:mt-[1vw] flex flex-col justify-center items-center bg-[#221F00]  md:pt-[0.5vw]
            md:rounded-[1.56vw] rounded-[3.2vw] relative z-[15]"
          >
            {inViewport && data && (
              <FilpClock
                start={
                  ownedCount || data.point_owner_num > 20
                    ? data.point_owner_num - 20
                    : data.point_owner_num
                }
                end={data.point_owner_num || ownedCount}
                onFinish={() => {
                  setSpotCount(data.point_owner_num);
                }}
              />
            )}
            <span className="text-[#CAB700] font-[400] text-[3.2vw] md:text-[1.6vw] mt-[2vw] md:mt-[0vw]">
              Spots Owned
            </span>
            <div className="md:h-[6px] h-[2px] w-full bg-[#FFEA00] absolute top-1/2 left-0 -mt-[2.67vw] md:-mt-[1.6vw] z-50"></div>
          </div>

          <div
            className="md:w-[26vw] md:h-[13.54vw] px-[20px] w-[80vw] h-[35.7vw] mt-[6vw] md:mt-[1vw] md:pt-[0.5vw] rounded-[3.2vw] flex flex-col 
           justify-center items-center bg-[#F1DE00] md:rounded-[1.56vw] relative z-[15] gap-2"
          >
            {inViewport && data && (
              <Citites
                start={
                  mayorsCount || data.mayors > 5 ? data.mayors - 5 : data.mayors
                }
                end={data.mayors || mayorsCount}
                onFinish={() => {
                  setCityCount(data.mayors);
                }}
              />
            )}
            <span className="text-[#645A00] font-[400] text-[3.2vw] md:text-[1.6vw] md:mt-[0vw]">
              Mayors
            </span>
            <div className="md:h-[6px] h-[2px] w-full bg-[#FFEA00] absolute top-1/2 left-0 -mt-[3.9vw] md:-mt-[1.88vw] z-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PageTwo);
