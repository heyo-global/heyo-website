import React, { useEffect, useRef, useState } from "react";
import { useInViewport, useLocalStorageState } from "ahooks";
import { useNews } from "@/hooks/useApi";
import useWindowSize from "@/hooks/useWindowSize";
import { Grid } from "antd-mobile";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
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
  const { isMobile } = useWindowSize();
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);

  const { data, run } = useNews();

  useEffect(() => {
    run();
  }, []);

  return (
    <section
      id="Information"
      style={{
        background:
          "linear-gradient(360deg, #FFC6FF -48.81%, #F5CBFF 0.6%, #EAD3FF 40.12%, #82E1FE 103.36%, #3DAEF0 148.81%)",
      }}
      className=" overflow-hidden relative flex justify-center items-center flex-col w-full h-[820px] z-10"
    >
      <img
        src="/planet/title.png"
        className="w-[1300px] h-[108px] absolute top-[120px] left-1/2 -ml-[650px] img-disabled"
        alt=""
      />

      <div className="flex flex-col justify-center items-center pt-[70px] text-black">
        <span className="font-[800] text50  ">The Latest on Heyo Planet</span>
        <motion.div
          className="w-full h-[390px] overflow-x-hidden overflow-y-auto my-[60px] flex flex-col items-center"
          ref={ref}
          initial={false}
          animate={inViewport ? "open" : "closed"}
          variants={navVariants}
        >
          <Swiper
            className="w-[1300px] !h-[390px] overflow-hidden"
            slidesPerView={3}
            // centeredSlides={false}
            // spaceBetween={30}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data &&
              data.map((item: New) => (
                <SwiperSlide key={item.id}>
                  <ItemView item={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

const Information = () => {
  return (
    <>
      <Planet />
      <Share />
    </>
  );
};

const ItemView = ({ item }: { item: New }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="w-[376px] h-[388px] group flex flex-col items-center gap-4 text-black border border-white rounded-[20px] bg-white/20"
    >
      <img
        src={item.img_url || "/image-planet.png"}
        className="w-full h-[180px] rounded-t-[20px]"
      />
      <span className="font-[500] text16  leading-[24PX] textTwo w-[320px]">
        {item.title}
      </span>
      <img src={"/planet/image-x.png"} className="w-[55px] h-[28px]" />
      <div
        onClick={() => {
          window.open(item.jump_url, "_blank");
        }}
        className="w-[320px] h-[42px] cursor-pointer flex justify-center items-center gap-2 bg-white rounded group-hover:scale-110 hover:bg-white/70"
      >
        <span className="font-[500] text16">View Content</span>
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
      style={{
        background: "linear-gradient(180deg, #F4CCFF 0%, #FFFFFF 100%)",
      }}
      className=" overflow-hidden relative flex flex-col justify-center items-center w-full h-[680px] -mt-[50px]"
    >
      <img
        src="/planet/share-title.png"
        className="w-[1282px] h-[108px] absolute top-[30px] left-1/2 -ml-[650px] img-disabled z-10"
        alt=""
      />

      <div className="flex flex-col justify-center items-center text-black">
        <span className="font-[800] text50 leading-[72PX] ">
          Ready To Create Your
        </span>
        <span ref={ref} className="font-[800] text50 leading-[72PX] ">
          Own Landmarks With Heyo?
        </span>
        <motion.div
          className="w-full h-[160px] flex flex-col items-center my-[30px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: inViewport ? 1 : 0 }}
        >
          <RiveComponent className="w-[1000px] h-[160px]" />
        </motion.div>
      </div>

      <div className="flex items-center justify-center z-10 text-[#FF6ADA] font-[500] text-24 gap-10">
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
