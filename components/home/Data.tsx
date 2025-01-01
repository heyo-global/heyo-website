import React, { useEffect, useRef, useState } from "react";
import Citites from "./Citites";
import FilpClock from "./Spots";
import { useInViewport, useLocalStorageState } from "ahooks";
import { useStatistics } from "@/hooks/useApi";
import useWindowSize from "@/hooks/useWindowSize";
import CountUp, { CountUpProps } from "react-countup";

const Data = () => {
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
  // const [mayorsCount, setMayorsCount] = useLocalStorageState<number>(
  //   "heyo-weekly_trading_volume",
  //   {
  //     defaultValue: 0,
  //   }
  // );
  const { data, run } = useStatistics();

  useEffect(() => {
    run();
  }, []);

  // useEffect(() => {
  //   if(data && inViewport){
  //     setMayorsCount(data.weekly_trading_volume);
  //   }
  // },[data,inViewport])

  return (
    <section
      id="DATA"
      className="overflow-hidden relative flex justify-center items-center flex-col  rounded-t-[30px] bg-white md:rounded-none"
    >
      <img
        src="/image-footer.png"
        className="w-[2186px] h-[230px] md:w-[113.85vw] md:h-[12vw] absolute bottom-0 -left-[20px] z-[10] img-disabled"
        alt=""
      />

      <div className="flex flex-col justify-center items-center md:-mt-[2vw]">
        <span className="font-[800] text-[20px] leading-[40px] md:text-[2.4vw] md:leading-[3.33vw] text-[#535145]">
          Real-time Portfolio
        </span>

        <div className="mt-[1vw] relative rounded-[16px] flex flex-col justify-center items-center w-full h-[24vw] md:w-[74vw] md:h-[15.8vw] bg-[url(/bg-weekly-usdt.svg)] bg-no-repeat bg-cover">
          <span className="text-[#43ACE9] font-[800] text-[3.2vw] md:text-[1vw] w-[80vw] md:w-[40vw] text-center absolute top-[10px] md:top-[1vw] left-1/2 -ml-[40vw] md:-ml-[20vw]">
            Weekly Trading Volume (USDT)
          </span>
          {
            inViewport && 
            <CountUp
              start={ 0 }
              end={(data && data.weekly_trading_volume) || 0}
              separator=","
              className="font-[700] text-[44px] md:text-[10vw] text-[#43ACE9] mt-[12px] md:mt-0"
            />
          }
        </div>

        <div className="w-full relative flex justify-center items-center md:flex-row flex-col md:mt-[2vw] gap-[8px] md:gap-[0px] mt-[12px] ">
          <div
            ref={ref}
            className="md:w-[26vw] md:h-[14.5vw] px-[20px] w-[80vw] 
             h-[35.7vw] rounded-[3.2vw] flex flex-col 
              justify-center items-center   md:rounded-[1.56vw] relative z-[10] gap-2 !text-[#00782D]"
            style={{
              background: "linear-gradient(180deg, #B1F4CA 0%, #D5FFE5 100%)",
            }}
          >
            {inViewport && data && (
              <Citites
                start={
                  cityCount || data.city_num > 1000
                    ? data.city_num - 1
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
           px-[20px] flex flex-col justify-center items-center 
            md:rounded-[1.56vw] rounded-[3.2vw] relative z-[10] !text-[#BF1111]"
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

          <div
            className="md:w-[26vw] md:h-[14.5vw] md:ml-[3vw] w-[80vw] h-[35.7vw] px-[20px] 
            flex flex-col justify-center items-center  md:pt-[0.5vw]
            md:rounded-[1.56vw] rounded-[3.2vw] relative z-[10] !text-[#9D6E27]"
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
        </div>
      </div>
    </section>
  );
};

export default React.memo(Data);
