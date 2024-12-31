"use client";
import PageOne from "@/components/home/PageOne";
import PageTwo from "@/components/home/PageTwo";
import useWindowSize from "@/hooks/useWindowSize";
import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "ahooks";
import HeaderTwo from "@/components/home/HeaderTwo";
import Header from "@/components/home/Header";
import AppDialog from "@/components/home/AppDialog";
import RealWorld from "@/components/home/RealWorld";
import Landmark from "@/components/home/Landmark";


export default function Home() {
  const { height } = useWindowSize();
  const ref = useRef(null);
  const scroll = useScroll(ref);
  const [show, setShow] = useState(false);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    if (scroll) {
      console.log(JSON.stringify(scroll));
      if (scroll.top > height * 0.85) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  }, [scroll, height]);
  return (
    <div className="flex flex-col w-screen h-screen bg-white relative">
      <div className="fixed left-0 right-0 top-0 z-[2000] h-[6.0vw]">
        <Header />
      </div>

      <div
        className="w-full h-screen overflow-y-scroll  overflow-x-hidden"
        ref={ref}
      >
        <PageOne setShow={setShowApp} />
        <Landmark />
        <RealWorld />
        <PageTwo setShow={setShowApp} />
      </div>

      <AppDialog show={showApp} setShow={setShowApp} />
    </div>
  );
}
