import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full h-[288px] flex justify-center items-center border-t border-[#D9D9D9]"
    >
      <div className="w-[1280px] h-[168px] flex justify-between">
        <img
          src={"/home/title.svg"}
          className="w-[180px] h-[60px] img-disabled"
          alt="Logo"
        />
        <div className="flex w-[440px] h-full text-black font-[500] text14">
          <div className="flex flex-col gap-3 flex-1">
            <span className="text20">RESOURCES</span>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={"https://heyoplanet.gitbook.io/heyoplanet-docs"}
              target={"_blank"}
              className="!text-black"
            >
              DOCS
            </motion.a>
            {/* <span>BLOG</span> */}
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
          <div className="flex flex-col gap-3 flex-1">
            <span className="text20">CONTACT US</span>
            {/* <span>TALK TO A BUILDER</span> */}
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
      </div>
    </section>
  );
};

export default React.memo(Footer);
