import React, { useEffect, useRef, useState } from "react";
import { useInViewport, useLocalStorageState } from "ahooks";
import { useNews } from "@/hooks/useApi";
import useWindowSize from "@/hooks/useWindowSize";
import { Grid } from "antd-mobile";
import { motion } from "framer-motion";

interface New {
  id: number;
  title: string;
  img_url: string;
  jump_url: string;
  status: number;
}

const Planet = () => {
  const { isMobile } = useWindowSize();
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);

  const { data, run } = useNews();

  useEffect(() => {
    run();
  }, []);

  return (
    <section
      id="PARTNER"
      className=" overflow-hidden relative flex justify-center items-center flex-col "
    >
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
            {data &&
              data.map((item: New) => (
                <Grid.Item key={item.id}>
                  <ItemView item={item} />
                </Grid.Item>
              ))}
          </Grid>
        </div>
      </div>

      <div
        className="flex items-center justify-center text-[#535145] font-[600] text-[16px] gap-[40px] md:text-[0.83vw] md
      :gap-[2vw]"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("https://x.com/HeyoPlanet","_blank")}
          className="w-[260px] h-[42px] md:w-[13.54vw] md:h-[2.1vw] cursor-pointer flex justify-center items-center gap-[16px] border border-[#2C2100] rounded-[10px]"
        >
          <img src="/icon-x.svg" alt="" className="w-[14px] h-[14px]" />
          <span>https://x.com/HeyoPlanet</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("https://t.me/heyoplanetofficial","_blank")}
          className="w-[260px] h-[42px] md:w-[13.54vw] md:h-[2.1vw] cursor-pointer flex justify-center items-center gap-[16px] border border-[#2C2100] rounded-[10px]"
        >
          <img src="/icon-t.svg" alt="" className="w-[20px] h-[16px]" />
          <span>@heyoplanetofficial</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("https://github.com/heyo-global/heyo-website","_blank")}
          className="w-[260px] h-[42px] md:w-[13.54vw] md:h-[2.1vw] cursor-pointer flex justify-center items-center gap-[16px] border border-[#2C2100] rounded-[10px]"
        >
          <img src="/icon-github.svg" alt="" className="w-[22px] h-[22px]" />
          <span>@heyo-website</span>
        </motion.div>
      </div>
    </section>
  );
};

const ItemView = ({ item }: { item: New }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="w-[266px] h-[240px] md:w-[13.85vw] md:h-[12.5vw]"
      onClick={() => {
        window.open(item.jump_url, "_blank");
      }}
    >
      <img
        src={item.img_url || "/image-planet.png"}
        className="w-full h-[150px] md:h-[7.8vw] rounded-[8px]"
      />
      <span className="font-[600] text-[14px] text-[#535145] md:text-[0.73vw] md:leading-[0.94vw] md:mt-[0.5vw] textThree">
        {item.title}
      </span>
    </motion.div>
  );
};

export default React.memo(Planet);
