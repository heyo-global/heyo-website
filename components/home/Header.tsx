import React, { useState } from "react";
import Link from "next/link";
import AppDialog from "./AppDialog";
import { motion } from "framer-motion";
import * as Menubar from "@radix-ui/react-menubar";
import useWindowSize from "@/hooks/useWindowSize";

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
  // {
  //   label: "PARTNER",
  //   url: "#PARTNER",
  //   target: false,
  // },
  {
    label: "COMMUNITY",
    url: "#COMMUNITY",
    target: false,
  },
  {
    label: "Docs",
    url: "https://heyoplanet.gitbook.io/heyoplanet-docs",
    target: true,
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const { isMobile } = useWindowSize();

  return (
    <div className="md:h-[6.0vw] h-[11.5vw] !text-[#535145] absolute top-0 left-0 right-0 z-[100] text-xs flex items-center justify-between bg-transparent px-[4.3vw] md:px-[5vw]">
      <div className="flex items-center gap-2 shrink-0 ">
        <img
          src={"/title.svg"}
          className="w-[56px] h-[55px] md:w-[10vw] md:h-[3.13vw] img-disabled"
          alt="Logo"
        />
      </div>
      <div className="flex-grow hidden md:flex justify-center items-center gap-[30px] md:gap-[1.56vw]">
        {menus.map((item: any) => (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={item.url}
            href={item.url}
            target={item.target ? "_blank" : "_self"}
            className="font-[600] px-[12px] leading-[11.5vw] md:leading-[6vw] md:h-[6.0vw] h-[11.5vw] text-[22px] md:text-[1.15vw] !text-[#535145] cursor-pointer"
          >
            {item.label}
          </motion.a>
        ))}
      </div>
      <div className="flex items-center gap-[20px] md:gap-[1.56vw] shrink-0">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center items-center gap-[8px] !text-[#535145] cursor-pointer font-[800]"
          onClick={() => setShow(true)}
        >
          <img
            src="/icon-t.svg"
            alt="X"
            className="w-[18px] h-[14px] md:w-[24px] md:h-[20px] img-disabled"
          />
          <span className="hidden md:inline-block">Telegram Mini App</span>
        </motion.div>
        <Link
          href="https://app.heyoplanet.com"
          target="_blank"
          rel="noreferrer"
          className="!text-[#535145] font-[800] hover:scale-110"
        >
          App
        </Link>
        {isMobile && (
          <Menubar.Root>
            <Menubar.Menu>
              <Menubar.Trigger>
                <div className="group flex items-center justify-between w-[20px] h-[20px]  ">
                  <img
                    src={"/icon-arrow-up.svg"}
                    className="w-[18px] h-[10px] shrink-0 group-data-[state=open]:!rotate-180 duration-200"
                  />
                </div>
              </Menubar.Trigger>
              <Menubar.Portal>
                <Menubar.Content
                  className="w-[160px] max-h-[400px] overflow-y-auto rounded-md bg-white textSize12 font-[350] text-black p-[8px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
                  align="start"
                  sideOffset={5}
                  alignOffset={-3}
                >
                  {menus.map((item: any, index: number) => (
                    <Menubar.Item
                      key={index}
                      className="group relative flex w-full h-[36px] select-none justify-between items-center
                rounded px-[8px] text-[13px] leading-none  outline-none data-[highlighted]:bg-[#f8f8f8]"
                      onClick={() => {}}
                    >
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        key={item.url}
                        href={item.url}
                        target={item.target ? "_blank" : "_self"}
                        className=" !text-[#535145] cursor-pointer"
                      >
                        {item.label}
                      </motion.a>
                    </Menubar.Item>
                  ))}
                </Menubar.Content>
              </Menubar.Portal>
            </Menubar.Menu>
          </Menubar.Root>
        )}
      </div>
      <AppDialog show={show} setShow={setShow} />
    </div>
  );
};

export default React.memo(Header);
