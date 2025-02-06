import React, { useState } from "react";
import AppDialog from "./AppDialog";
import { motion } from "framer-motion";
import * as Menubar from "@radix-ui/react-menubar";
import useWindowSize from "@/hooks/useWindowSize";

const menus = [
  {
    label: "Related",
    url: "#Related",
    target: false,
  },
  {
    label: "Ai",
    url: "#ai",
    target: false,
  },
  {
    label: "Information",
    url: "#Information",
    target: false,
  },
  // {
  //   label: "Docs",
  //   url: "https://heyoplanet.gitbook.io/heyoplanet-docs",
  //   target: true,
  // },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const { isMobile } = useWindowSize();

  return (
    <div
      style={{ fontSize: "14PX" }}
      className="h-[64px] pt-[30px] !text-black absolute top-0 left-0 right-0 z-[100]  flex items-center justify-center bg-transparent px-[4.3vw] md:px-[10vw]"
    >
      <div className="w-[1280px] h-full  flex items-center justify-center">
        <div className="flex items-center gap-2 shrink-0 ">
          <img
            src={"/home/title.svg"}
            className="w-[96px] h-[32px] img-disabled"
            alt="Logo"
          />
        </div>
        <div className="flex-grow hidden md:flex justify-center items-center ">
          <div className="flex justify-center items-center px-[12px] rounded-[10px] bg-white/85 border border-whiter h-[32px] leading-[32px]">
            {menus.map((item: any) => (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={item.url}
                href={item.url}
                target={item.target ? "_blank" : "_self"}
                className="font-[500] px-[24px] text-black  h-full cursor-pointer"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center items-center  cursor-pointer font-[600] w-[120px] h-[32px] rounded-3xl bg-[#F0FF9F] border border-[#F0FF9F]"
          onClick={() => setShow(true)}
          style={{ boxShadow: "0px 0px 10px 0px #F0FF9F" }}
        >
          <span>Launch App</span>
        </motion.div>
      </div>
      <AppDialog show={show} setShow={setShow} />
    </div>
  );
};

const Mobile = () => {
  return (
    <Menubar.Root className="z-50">
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
            className="w-[160px] max-h-[400px] z-50 overflow-y-auto rounded-md bg-white textSize12 font-[350] text-black p-[8px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
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
                  className=" !text-[#535145] cursor-pointer w-full h-full block leading-[36px]"
                >
                  {item.label}
                </motion.a>
              </Menubar.Item>
            ))}
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

export default React.memo(Header);
