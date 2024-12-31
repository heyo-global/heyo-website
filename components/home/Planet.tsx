import React, { useEffect, useRef, useState } from "react";
import { useInViewport, useLocalStorageState } from "ahooks";
import { useStatistics } from "@/hooks/useApi";
import useWindowSize from "@/hooks/useWindowSize";
import { Grid } from "antd-mobile";

const Planet = () => {
  const { isMobile } = useWindowSize();
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);

  const { data, run } = useStatistics();

  useEffect(() => {
    run();
  }, []);

  return (
    <section id="PARTNER" className=" overflow-hidden relative flex justify-center items-center flex-col ">
      <img
        src="/image-footer.png"
        className="w-[2186px] h-[230px] md:w-[113.85vw] md:h-[12vw] absolute bottom-0 -left-[20px] z-[10] img-disabled"
        alt=""
      />

      <div className="flex flex-col justify-center items-center ">
        <span className="font-[800] text-[46px] leading-[64px] md:text-[2.4vw] md:leading-[3.33vw] text-[#535145]">
          The Latest on Heyo Planet
        </span>
        <div className="w-full h-[50vh] overflow-y-auto mt-[2vw]">
          <Grid columns={4} gap={16}>
            <Grid.Item>
              <ItemView />
            </Grid.Item>
            <Grid.Item>
              <ItemView />
            </Grid.Item>
            <Grid.Item>
              <ItemView />
            </Grid.Item>
            <Grid.Item>
              <ItemView />
            </Grid.Item>
            <Grid.Item>
              <ItemView />
            </Grid.Item>
            <Grid.Item>
              <ItemView />
            </Grid.Item>
            <Grid.Item>
              <ItemView />
            </Grid.Item>
            <Grid.Item>
              <ItemView />
            </Grid.Item>
          </Grid>
        </div>
      </div>

      <div className="flex items-center justify-center text-[#535145] font-[600] text-[16px] gap-[40px] md:text-[0.83vw] md
      :gap-[2vw]">
        <div className="w-[260px] h-[42px] md:w-[13.54vw] md:h-[2.1vw] flex justify-center items-center gap-[16px] hover:opacity-70 hover:scale-105 border border-[#2C2100] rounded-[10px]">
          <img src="/icon-x.svg" alt="" className="w-[14px] h-[14px]" />
          <span>https://x.com/HeyoPlanet</span>
        </div>

        <div className="w-[260px] h-[42px] md:w-[13.54vw] md:h-[2.1vw] flex justify-center items-center gap-[16px] hover:opacity-70 hover:scale-105 border border-[#2C2100] rounded-[10px]">
          <img src="/icon-t.svg" alt="" className="w-[20px] h-[16px]" />
          <span>@heyoplanetofficial</span>
        </div>

        <div className="w-[260px] h-[42px] md:w-[13.54vw] md:h-[2.1vw] flex justify-center items-center gap-[16px] hover:opacity-70 hover:scale-105 border border-[#2C2100] rounded-[10px]">
          <img src="/icon-github.svg" alt="" className="w-[22px] h-[22px]" />
          <span>@heyoplanetofficial</span>
        </div>
      </div>
    </section>
  );
};

const ItemView = () => {
  return (
    <div className="w-[266px] h-[240px] md:w-[13.85vw] md:h-[12.5vw]">
      <img src="/image-planet.png" className="w-full h-[150px] md:h-[7.8vw] rounded-[8px]" />
      <span className="font-[600] text-[14px] text-[#535145] md:text-[0.73vw] md:leading-[0.94vw]">
        Join the fun and grab your share of 🎄1,000,000,000 $HEYO🎄 packed with
        surprises, laughter, and good vibes!  
      </span>
    </div>
  );
};

export default React.memo(Planet);
