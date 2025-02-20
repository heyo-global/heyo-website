import { motion } from "framer-motion";
import React, { useCallback } from "react";

const Footer = () => {
  const handleClick = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);
  return (
    <section
      id="footer"
      className="w-full flex flex-col justify-center items-center"
    >
      <div className="flex w-[72vw] h-full text-black font-[500] text-[3.2vw]">
        <div className="flex flex-col gap-[2vw] flex-1">
          <span className="text-[3.7vw]">RESOURCES</span>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={"https://heyoplanet.gitbook.io/heyoplanet-docs"}
            target={"_blank"}
            className="!text-black"
          >
            DOCS
          </motion.a>
          {/* <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={"https://heyoplanet.gitbook.io/heyoplanet-docs"}
            target={"_blank"}
          >
            BLOG
          </motion.a> */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={"https://github.com/heyo-global/heyo-website"}
            target={"_blank"}
            className="!text-black"
          >
            GITHUB
          </motion.a>
        </div>
        <div className="flex flex-col gap-[2vw] flex-1">
          <span className="text-[3.7vw]">CONTACT US</span>
          {/* <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={"https://heyoplanet.gitbook.io/heyoplanet-docs"}
            target={"_blank"}
          >
            TALK TO A BUILDER
          </motion.a> */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={"https://x.com/HeyoPlanet"}
            target={"_blank"}
            className="!text-black"
          >
            TWITTER
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={"https://t.me/heyoplanetofficial"}
            target={"_blank"}
            className="!text-black"
          >
            JOIN TELEGRAM
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={"https://discord.gg/afWccpKj"}
            target={"_blank"}
            className="!text-black"
          >
            JOIN DISCORD
          </motion.a>
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
