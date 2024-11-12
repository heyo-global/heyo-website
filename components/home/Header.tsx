 
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="md:h-[6.0vw] h-[11.5vw] absolute top-0 left-0 right-0 z-[100] text-xs flex items-center justify-between bg-transparent px-[4.3vw] md:px-[1.88vw]">
      <div className="flex items-center gap-2 shrink-0 ">
        <img
          src={"/title.svg"}
          className="w-[56px] h-[55px] md:w-[10.1vw] md:h-[3.1vw] img-disabled"
          alt="Logo"
        />
        {/* <span className="md:text-[1.67vw] font-[500] text-theme-color">
          heyo
        </span> */}
      </div>
      <div className="flex-grow"></div>
      <div className="flex flex-row-reverse items-center gap-4 md:gap-6">
        <Link
          href="https://x.com/HeyoPlanet"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/icon-x.svg"
            alt="X"
            className="w-[3.2vw] h-[3.2vw] md:w-[1.6vw] md:h-[1.6vw] img-disabled"
          />
        </Link>
        <Link
          href="https://t.me/HeyoPlanetBot"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/icon-t.svg"
            alt="T"
            className="w-[3.4vw] h-[3.4vw] md:w-[2vw] md:h-[2vw] img-disabled"
          />
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Header);
