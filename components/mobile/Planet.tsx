import React, { useEffect, useRef, useState } from "react";
import { useInViewport, useLocalStorageState } from "ahooks";
import { useNews } from "@/hooks/useApi";
import useWindowSize from "@/hooks/useWindowSize"; 
import { motion } from "framer-motion"; 
import { useRive } from "@rive-app/react-canvas";

interface New {
  id: number;
  title: string;
  img_url: string;
  jump_url: string;
  status: number;
}
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const Planet = () => { 
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);

  const { data, run } = useNews();

  useEffect(() => {
    run();
  }, []);

  return (
    <section
      id="Information"
      // style={{
      //   background:
      //     "linear-gradient(bottom,  #F5CBFF 0%, #EAD3FF 40.12%, #82E1FE 103.36%)",
      // }}
      className=" overflow-hidden relative flex justify-center items-center flex-col w-full h-[2600px] z-10"
    >
      <img
        src="/planet/title.png"
        className="w-[650px] h-[54px] absolute top-[70px] left-1/2 -ml-[325px] img-disabled z-0"
        alt=""
      />

      <div className="flex flex-col justify-center items-center text-black z-10">
        <span className="font-[800] text-[36px] leading-[54px] mt-[300px] fontPP">
          The Latest on 
        </span>
        <span className="font-[800] text-[36px] leading-[54px] fontPP">
          Heyo Planet
        </span>
        <motion.div
          className="w-full h-[2460px] overflow-x-hidden my-[60px] flex flex-col items-center gap-[20px] pb-[20px]"
          ref={ref}
          initial={false}
          animate={inViewport ? "open" : "closed"}
          variants={navVariants}
        >
          {data &&
            data.map((item: New) => <ItemView key={item.id} item={item} />)}
        </motion.div>
      </div>
    </section>
  );
};

const Information = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(360deg, #FFFFFF 0%, #F5CBFF 30%, #EAD3FF 60.12%, #82E1FE 103.36%, #3DAEF0 148.81%)",
      }}
    >
      <Planet />
      <Share />
    </div>
  );
};

const ItemView = ({ item }: { item: New }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="w-[670px] h-[548px] group flex flex-col items-center gap-4 text-black border border-white rounded-[20px] bg-white/20"
    >
      <img
        src={item.img_url || "/image-planet.png"}
        className="w-full h-[320px] rounded-t-[20px]"
      />
      <span className="font-[500] text-[24px]  leading-[24px] textTwo w-[600px]">
        {item.title}
      </span>
      <img src={"/planet/image-x.png"} className="w-[94px] h-[48px]" />
      <div
        onClick={() => {
          window.open(item.jump_url, "_blank");
        }}
        className="w-[610px] h-[54px] cursor-pointer flex justify-center items-center gap-2 bg-white rounded group-hover:scale-110 hover:bg-white/70"
      >
        <span className="font-[500] text-[28px]">View Content</span>
        <img src="/planet/icon-view.svg" className="w-[10px] h-10px]" />
      </div>
    </motion.div>
  );
};

const Share = () => {
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);
  const { RiveComponent } = useRive({
    src: "/planet/share.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });
  return (
    <section
      id="Share" 
      className=" overflow-hidden relative flex flex-col justify-center items-center w-full h-[600px] mt-[0px]"
    >
      <img
        src="/planet/share-title.png"
        className="w-[640px] h-[54px] absolute top-[30px] left-1/2 -ml-[320px] img-disabled z-10"
        alt=""
      />

      <div className="flex flex-col justify-center items-center text-black fontPP">
        <span className="font-[800] text-[36px] leading-[54px]">
          Ready To Create Your
        </span>
        <span ref={ref} className="font-[800] text-[36px] leading-[54px]">
          Own Landmarks 
        </span>
        <span className="font-[800] text-[36px] leading-[54px]">
          With Heyo?
        </span>
        <motion.div
          className="w-full h-[100px] flex flex-col items-center my-[50px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: inViewport ? 1 : 0 }}
        >
          <RiveComponent className="w-[600px] h-[96px]" />
        </motion.div>
      </div>

      <div className="flex items-center justify-between w-full z-10 text-[#FF6ADA] font-[500] text-[24px] px-[24px]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            // window.open("https://x.com/HeyoPlanet", "_blank")
            window.open(
              "https://heyoplanet.gitbook.io/heyoplanet-docs",
              "_blank"
            )
          }
          className="w-[320px] h-[80px] bg-[#FF6ADA1A] cursor-pointer flex justify-center items-center gap-[8px] border border-[#FF6ADA] rounded-[14px]"
        >
          <img
            src="/planet/icon-docs.svg"
            alt=""
            className="w-[24px] h-[24px] "
          />
          <span>Heyo docs</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            // window.open("https://t.me/heyoplanetofficial", "_blank")
            window.open("https://app.heyoplanet.com", "_blank")
          }
          className="w-[320px] h-[80px] bg-[#FF6ADA1A] cursor-pointer flex justify-center items-center gap-[8px] border border-[#FF6ADA] rounded-[14px]"
        >
          <img
            src="/planet/icon-website.svg"
            alt=""
            className="w-[24px] h-[24px] "
          />
          <span>heyoplanet.com</span>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Information);
