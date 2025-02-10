import React, { useEffect, useRef, useState } from "react";
import { useInViewport, useLocalStorageState } from "ahooks";
import { useNews } from "@/hooks/useApi"; 
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
      className=" overflow-hidden relative flex justify-center items-center flex-col w-full h-[347vw] z-10"
    >
      <img
        src="/planet/title.png"
        className="w-[86vw] h-[7.2vw] absolute top-[9vw] left-1/2 -ml-[43vw] img-disabled z-0"
        alt=""
      />

      <div className="flex flex-col justify-center items-center text-black z-10">
        <span className="font-[800] text-[4.8vw] leading-[7.2vw] mt-[40vw] fontPP">
          The Latest on 
        </span>
        <span className="font-[800] text-[4.8vw] leading-[7.2vw] fontPP">
          Heyo Planet
        </span>
        <motion.div
          className="w-full h-[328vw] overflow-x-hidden my-[8vw] flex flex-col items-center gap-[2.67vw] pb-[2.67vw]"
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
      className="w-[89.3vw] h-[73vw] group flex flex-col items-center gap-4 text-black border border-white rounded-[2.67vw] bg-white/20"
    >
      <img
        src={item.img_url || "/image-planet.png"}
        className="w-full h-[42.7vw] rounded-t-[2.67vw]"
      />
      <span className="font-[500] text-[3.2vw]  leading-[3.2vw] textTwo w-[80vw]">
        {item.title}
      </span>
      <img src={"/planet/image-x.png"} className="w-[12.5vw] h-[6.4vw]" />
      <div
        onClick={() => {
          window.open(item.jump_url, "_blank");
        }}
        className="w-[81vw] h-[7.2vw] cursor-pointer flex justify-center items-center gap-2 bg-white rounded group-hover:scale-110 hover:bg-white/70"
      >
        <span className="font-[500] text-[3.7vw]">View Content</span>
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
      className=" overflow-hidden relative flex flex-col justify-center items-center w-full h-[80vw] mt-[0px]"
    >
      <img
        src="/planet/share-title.png"
        className="w-[85vw] h-[7.2vw] absolute top-[4vw] left-1/2 -ml-[42.5vw] img-disabled z-10"
        alt=""
      />

      <div className="flex flex-col justify-center items-center text-black fontPP">
        <span className="font-[800] text-[4.8vw] leading-[7.2vw]">
          Ready To Create Your
        </span>
        <span ref={ref} className="font-[800] text-[4.8vw] leading-[7.2vw]">
          Own Landmarks 
        </span>
        <span className="font-[800] text-[4.8vw] leading-[7.2vw]">
          With Heyo?
        </span>
        <motion.div
          className="w-full h-[13.33vw] flex flex-col items-center my-[6.7vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: inViewport ? 1 : 0 }}
        >
          <RiveComponent className="w-[600px] h-[96px]" />
        </motion.div>
      </div>

      <div className="flex items-center justify-between w-full z-10 text-[#FF6ADA] font-[500] text-[3.2vw] px-[3.2vw]">
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
          className="w-[42.7vw] h-[10.67vw] bg-[#FF6ADA1A] cursor-pointer flex justify-center items-center gap-[8px] border border-[#FF6ADA] rounded-[14px]"
        >
          <img
            src="/planet/icon-docs.svg"
            alt=""
            className="w-[3.2vw] h-[3.2vw] "
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
          className="w-[42.7vw] h-[10.67vw] bg-[#FF6ADA1A] cursor-pointer flex justify-center items-center gap-[8px] border border-[#FF6ADA] rounded-[14px]"
        >
          <img
            src="/planet/icon-website.svg"
            alt=""
            className="w-[3.2vw] h-[3.2vw] "
          />
          <span>heyoplanet.com</span>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Information);
