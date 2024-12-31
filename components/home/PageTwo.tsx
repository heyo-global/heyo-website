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
    "heyo-weekly_trading_landmark",
    {
      defaultValue: 0,
    }
  );
  const [mayorsCount, setMayorsCount] = useLocalStorageState<number>(
    "heyo-weekly_trading_volume",
    {
      defaultValue: 0,
    }
  );
  const { data, run } = useStatistics();

  useEffect(() => {
    run();
  }, []);

  return (
    <section
      id="DATA"
      className="overflow-hidden relative flex justify-center items-center flex-col "
    >
      <img
        src="/image-footer.png"
        className="w-[2186px] h-[230px] md:w-[113.85vw] md:h-[12vw] absolute bottom-0 -left-[20px] z-[10] img-disabled"
        alt=""
      />

      <div className="flex flex-col justify-center items-center md:-mt-[2vw]">
        <span className="font-[800] text-[46px] leading-[64px] md:text-[2.4vw] md:leading-[3.33vw] text-[#535145]">
          Real-time Portfolio
        </span>

        <div className="w-full md:flex-1 relative flex justify-center items-center md:flex-row flex-col md:mt-[3vw]">
          <div
            ref={ref}
            className="md:w-[26vw] md:h-[14.5vw] px-[20px] w-[80vw] 
             h-[35.7vw] -mt-[36vw] md:-mt-[1vw] rounded-[3.2vw] flex flex-col 
              justify-center items-center   md:rounded-[1.56vw] relative z-[15] gap-2 !text-[#00782D]"
            style={{
              background: "linear-gradient(180deg, #B1F4CA 0%, #D5FFE5 100%)",
            }}
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
            <span className="text-[#60AB7C] font-[800] text-[3.2vw] md:text-[20px] md:mt-[0.6vw]">
              Covered Cities
            </span>
            <div className="md:h-[6px] h-[2px] w-full bg-[#B1F4CA] absolute top-1/2 left-0 -mt-[3.9vw] md:-mt-[1.5vw] z-50"></div>
          </div>

          <div
            className="md:w-[26vw] md:h-[14.5vw] md:ml-[3vw] w-[80vw] h-[35.7vw] 
           px-[20px] mt-[6vw]  md:-mt-[1vw] flex flex-col justify-center items-center 
            md:rounded-[1.56vw] rounded-[3.2vw] relative z-[15] !text-[#BF1111]"
            style={{
              background: "linear-gradient(180deg, #FECFCF 0%, #FFE3E3 100%)",
            }}
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
            <span className="text-[#BF1111] font-[800] text-[3.2vw] md:text-[1.04vw] mt-[2vw] md:mt-[0.6vw]">
              Landmarks
            </span>
            <div className="md:h-[6px] h-[2px] w-full bg-[#FECFCF] absolute top-1/2 left-0 -mt-[2.67vw] md:-mt-[1.5vw] z-50"></div>
          </div>
        </div>

        <div className="w-full  md:flex-1  relative flex md:justify-center items-center md:flex-row flex-col-reverse md:mt-[2vw]">
          <div
            className="md:w-[26vw] md:h-[14.5vw] md:mr-[3vw] w-[80vw] h-[35.7vw] px-[20px] 
           mt-[6vw]  md:mt-[1vw] flex flex-col justify-center items-center  md:pt-[0.5vw]
            md:rounded-[1.56vw] rounded-[3.2vw] relative z-[15] !text-[#9D6E27]"
            style={{
              background: "linear-gradient(180deg, #FEE4BD 0%, #FFF1DB 100%)",
            }}
          >
            {inViewport && data && (
              <FilpClock
                start={
                  ownedCount || data.weekly_trading_landmark > 5
                    ? data.weekly_trading_landmark - 5
                    : data.weekly_trading_landmark
                }
                end={data.weekly_trading_landmark || ownedCount}
                onFinish={() => {
                  setSpotCount(data.weekly_trading_landmark);
                }}
              />
            )}
            <span className="text-[#9D6E27] font-[800] text-[3.2vw] md:text-[1.04vw] mt-[2vw] md:mt-[0.6vw]">
              Weekly Trading Landmark
            </span>
            <div className="md:h-[6px] h-[2px] w-full bg-[#FEE4BD] absolute top-1/2 left-0 -mt-[2.67vw] md:-mt-[1.5vw] z-50"></div>
          </div>

          <div
            className="md:w-[26vw] md:h-[14.5vw] px-[20px] w-[80vw] h-[35.7vw] mt-[6vw] md:mt-[1vw] md:pt-[0.5vw] rounded-[3.2vw] flex flex-col 
           justify-center items-center  md:rounded-[1.56vw] relative z-[15] gap-2 !text-[#044F83]"
            style={{
              background: "linear-gradient(180deg, #B2DEFD 0%, #DEF2FF 100%)",
            }}
          >
            {inViewport && data && (
              <Citites
                start={
                  mayorsCount || data.weekly_trading_volume > 5 ? data.weekly_trading_volume - 5 : data.weekly_trading_volume
                }
                end={data.weekly_trading_volume || mayorsCount}
                onFinish={() => {
                  setCityCount(data.weekly_trading_volume);
                }}
              />
            )}
            <span className="text-[#044F83] font-[800] text-[3.2vw] md:text-[1.04vw] md:mt-[0.6vw]">
              Weekly Trading Volume(USDT)
            </span>
            <div className="md:h-[6px] h-[2px] w-full bg-[#B2DEFD] absolute top-1/2 left-0 -mt-[3.9vw] md:-mt-[1.5vw] z-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PageTwo);
