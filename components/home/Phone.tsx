import React from "react";

const Phone = () => {
  return (
    <div className="md:w-[15.2vw] md:h-[28vw] w-[48.3vw] h-[89.1vw] overflow-hidden absolute left-1/2 -bottom-[36vw] -ml-[24.15vw] md:-bottom-[12vw] md:-ml-[7.6vw] z-[200]">
      <img src="/bg-phone.svg" className="w-full h-full" alt="" />
      <img
        src="/heyo-share-t.png"
        className="md:w-[12vw] md:h-[12vw] w-[36vw] h-[36vw] absolute left-1/2 -ml-[18vw] top-[10vw] md:-ml-[6vw] md:top-[3vw] z-10"
        alt=""
      />
    </div>
  );
};

export default React.memo(Phone);
