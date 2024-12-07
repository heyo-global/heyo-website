import React from "react";

const Explore = ({ setShow }: any) => {
  return (
    <div
      className="w-[46vw] h-[12vw] md:w-[15.78vw] md:h-[4.58vw] flex justify-center items-center gap-[16px] bg-[#FFEA00] rounded-full hover:bg-[#FFEA00]/70
    text-[#000000] text-[16px]  md:text-[1.56vw] font-[800] cursor-pointer hover:scale-105"
      onClick={() => setShow(true)}
    >
      <span>Explore Now</span>
      <img src="/icon-right-black.svg" alt="" className="w-[14px] h-[10px] md:w-[1.46vw] md:h-[1.1vw]" />
    </div>
  );
};

export default React.memo(Explore);
