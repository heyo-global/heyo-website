import React from "react";

const Explore = ({setShow}:any) => {

    return <div className="w-[46vw] h-[12vw] md:w-[17.78vw] md:h-[4.58vw] flex justify-center items-center gap-[16px] bg-[#2c2100] rounded-full hover:bg-[#2c2100]/70
    text-[#FFEA00] text-[16px] md:text-[1.56vw] font-[800] hover:scale-105 cursor-pointer"
    onClick={()=>setShow(true)}>
       <span>Explore Now</span>
       <img src="/image-right.png" alt="" className="w-[14px] h-[10px] md:w-[1.46vw] md:h-[1.1vw]"/>
   </div>
   
}

export default React.memo(Explore)