import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="md:h-[6.8vw] h-[11.5vw] absolute left-0 right-0 top-0 z-[100] text-xs flex items-center justify-between bg-transparent backdrop-blur  px-[4.3vw] md:px-[1.88vw]">
      <div className="flex items-center gap-2 shrink-0 ">
        <Image
          src={"/title-black.svg"}
          className="w-[17.3vw] h-[5.3vw] md:w-[10.1vw] md:h-[3.1vw]"
          alt="Logo"
        />
        {/* <span className="md:text-[1.67vw] font-[500] text-theme-color">
          heyo
        </span> */}
      </div>
      <div className="flex-grow"></div>
      <div className="flex flex-row-reverse items-center gap-4 md:gap-6">
        <Link
          href="https://twitter.com/ebunker_eth"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/icon-x-black.svg" alt="X" className="w-[3.2vw] h-[3.2vw] md:w-[1.8vw] md:h-[1.8vw]" />
        </Link>
        <Link
          href="https://discord.gg/nuvw6hmvnK"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/icon-t-black.svg" alt="T" className="w-[3.4vw] h-[3.4vw] md:w-[2vw] md:h-[2vw]" />
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Header);
