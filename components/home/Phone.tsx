import React from "react";

const Phone = () => {
  return (
    <div className="md:w-[15.2vw] md:h-[28vw] w-[48.3vw] h-[89.1vw] overflow-hidden absolute left-1/2 -bottom-[36vw] -ml-[24.15vw] md:-bottom-[12vw] md:-ml-[7.6vw] z-[1500]">
      <img src="/bg-phone.svg" className="w-full h-full img-disabled z-[1]" alt="" />
      <img
        src="/heyo-share-t.png"
        className="md:w-[12vw] md:h-[12vw] w-[36vw] h-[36vw] absolute left-1/2 -ml-[18vw] top-[10vw] md:-ml-[6vw] md:top-[3vw] z-10"
        alt=""
      />
      <div className="absolute left-[2vw] md:left-[0.7vw] w-[44vw] md:w-[13.8vw] md:h-[12vw] h-[46vw] top-[6vw] md:top-[3vw] z-[20]">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default React.memo(Phone);
