import { motion } from "framer-motion";
import React, { useCallback } from "react";

const Footer = () => {
  const handleClick = useCallback((url:string) => {
    window.open(url,"_blank");
  },[])
  return (
    <section
      id="footer"
      className="w-full flex flex-col justify-center items-center"
    >
      <div className="flex w-[72vw] h-full text-black font-[500] text-[3.2vw]">
        <div className="flex flex-col gap-[2vw] flex-1">
          <span className="text-[3.7vw]">RESOURCES</span>
          <span>DOCS</span>
          <span>BLOG</span>
          <span>GITHUB</span>
        </div>
        <div className="flex flex-col gap-[2vw] flex-1">
          <span className="text-[3.7vw]">CONTACT US</span>
          <span>TALK TO A BUILDER</span>
          <span>TWITTER</span>
          <span>JOIN TELEGRAM</span>
          <span>JOIN DISCORD</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[2.67vw] my-[6.7vw]">
        {/* <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          src="/mobile/icon-idcard.svg"
          className="w-[10.67vw] h-[10.67vw]"
          onClick={() => handleClick("")}
        /> */}
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          src="/mobile/icon-t.svg"
          className="w-[10.67vw] h-[10.67vw]"
          onClick={() => handleClick("https://t.me/heyoplanetofficial")}
        />
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          src="/mobile/icon-x.svg"
          className="w-[10.67vw] h-[10.67vw]"
          onClick={() => handleClick("https://x.com/HeyoPlanet")}
        />
      </div>

      <img
        src={"/home/title.svg"}
        className="w-[24vw] h-[8vw] img-disabled mb-[6.7vw]"
        alt="Logo"
      />
    </section>
  );
};

export default React.memo(Footer);
