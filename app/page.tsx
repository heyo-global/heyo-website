"use client";
import Intro from "@/components/home/Intro";
import PageTwo from "@/components/home/Data";
import useWindowSize from "@/hooks/useWindowSize";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useScroll } from "ahooks";
import Data from "@/components/home/Data";
import Header from "@/components/home/Header";
import AppDialog from "@/components/home/AppDialog";
import RealWorld from "@/components/home/RealWorld";
import Landmark from "@/components/home/Landmark";
import Planet from "@/components/home/Planet";

export default function Home() {
  const { height } = useWindowSize();
  const ref = useRef(null);
  const scroll = useScroll(ref); 
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    if (scroll) {
      console.log(JSON.stringify(scroll));
      
    }
  }, [scroll, height]);

  // const setScroll = useCallback((index:number) => {
  //   if(ref){
  //     const outEle = document.getElementById('outer');
  //     outEle && outEle.scrollTo({top: 100, behavior: 'smooth'})
  //   }
  // },[ref])
  return (
    <div className="flex flex-col w-screen h-screen bg-white relative">
      <div className="fixed left-0 right-0 top-0 z-[2000] h-[6.0vw]">
        <Header />
      </div>

      <div id="outer" className="body" ref={ref}>
        <Intro />
        <Data />
        <RealWorld />
        <Landmark />
        <Planet />
      </div>

      <AppDialog show={showApp} setShow={setShowApp} />
    </div>
  );
}
