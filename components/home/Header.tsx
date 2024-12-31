import React, { useState } from "react";
import Link from "next/link";
import AppDialog from "./AppDialog";
import { motion } from "framer-motion";

const menus = [
  {
    label: "INTRO",
    url: "#INTRO",
    target: false,
  },
  {
    label: "DATA",
    url: "#DATA",
    target: false,
  },
  {
    label: "REAL-WORLD",
    url: "#REAL-WORLD",
    target: false,
  },
  {
    label: "MONOPOLY GAME",
    url: "#MONOPOLY",
    target: false,
  },
  {
    label: "PARTNER",
    url: "#PARTNER",
    target: false,
  },
  {
    label: "Docs",
    url: "",
    target: true,
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="md:h-[6.0vw] h-[11.5vw] !text-[#535145] absolute top-0 left-0 right-0 z-[100] text-xs flex items-center justify-between bg-transparent px-[4.3vw] md:px-[5vw]">
      <div className="flex items-center gap-2 shrink-0 ">
        <img
          src={"/title.svg"}
          className="w-[56px] h-[55px] md:w-[10vw] md:h-[3.13vw] img-disabled"
          alt="Logo"
        />
      </div>
      <div className="flex-grow flex justify-center items-center gap-[30px] md:gap-[1.56vw]">
        {menus.map((item: any) => (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={item.url}
            href={item.url}
            className="font-[600] px-[12px] leading-[11.5vw] md:leading-[6vw] md:h-[6.0vw] h-[11.5vw] text-[22px] md:text-[1.15vw] !text-[#535145] cursor-pointer"
          >
            {item.label}
          </motion.a>
        ))}
      </div>
      <div className="flex items-center gap-[30px] md:gap-[1.56vw]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center items-center gap-[8px] !text-[#535145] cursor-pointer font-[800]"
          onClick={() => setShow(true)}
        >
          <img
            src="/icon-t.svg"
            alt="X"
            className="w-[24px] h-[20px] img-disabled"
          />
          Telegram Mini App
        </motion.div>
        <Link
          href="https://app.heyoplanet.com"
          target="_blank"
          rel="noreferrer"
          className="!text-[#535145] font-[800] hover:scale-110"
        >
          App
        </Link>
      </div>
      <AppDialog show={show} setShow={setShow} />
    </div>
  );
};

export default React.memo(Header);
