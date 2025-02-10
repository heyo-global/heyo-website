"use client";
import Intro from "@/components/home/Intro";
import useWindowSize from "@/hooks/useWindowSize";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useScroll } from "ahooks";
import Header from "@/components/home/Header";
import AppDialog from "@/components/home/AppDialog";
import Planet from "@/components/home/Planet";
import Experience from "@/components/home/Experience";
import Lifestyle from "@/components/home/Lifestyle";
import Era from "@/components/home/Era";
import Beyond from "@/components/home/Beyond";
import Footer from "@/components/home/Footer";
import App from "@/mobile/App";
import MobileIntro from "@/components/mobile/Intro";
import MobileHeader from "@/components/mobile/Header"; 
import MobilePlanet from "@/components/mobile/Planet";
import MobileExperience from "@/components/mobile/Experience";
import MobileLifestyle from "@/components/mobile/Lifestyle";
import MobileEra from "@/components/mobile/Era";
import MobileBeyond from "@/components/mobile/Beyond";
import MobileFooter from "@/components/mobile/Footer";

export default function Page() {
  const {  isMobile } = useWindowSize();

  return <>
  {isMobile ? <Mobile /> : <Home />}
  </>
}


const Home = () => {
  const { height } = useWindowSize();
  const ref = useRef(null);
  const scroll = useScroll(ref);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    if (scroll) {
      console.log(JSON.stringify(scroll));
    }
  }, [scroll, height]);

  return (
    <div className="flex flex-col w-screen h-screen bg-white relative">
      <div className="fixed left-0 right-0 top-0 z-[2000] h-[6.0vw]">
        <Header />
      </div>

      <div id="outer" className="body" ref={ref}>
        <Intro />
        <section id="ai" className="w-full relative pt-[90px]">
          <img src="/experience/bg-bottom-left.png" className=" absolute left-[0px] top-[1300px] w-[1798px] h-[2547px]"/>
          <img src="/experience/bg-right1.png" className=" absolute left-[1237px] top-[250px] w-[1083px] h-[2301px]"/>
          <Experience />
          <Era />
          <Lifestyle />
          <Beyond />
        </section> 
        <Planet />
        <Footer />
      </div>

      <AppDialog show={showApp} setShow={setShowApp} />
    </div>
  );
}

const Mobile = () => {
  const { height } = useWindowSize();
  const ref = useRef(null);
  const scroll = useScroll(ref);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    if (scroll) {
      console.log(JSON.stringify(scroll));
    }
  }, [scroll, height]);

  return (
    <div className="flex flex-col w-screen h-screen bg-white relative">
      <div className="fixed left-0 right-0 top-0 z-[2000] h-[6.0vw]">
        <MobileHeader />
      </div>

      <div id="outer" className="body" ref={ref}>
        <MobileIntro />
        <section id="ai" className="w-full relative pt-[90px]">
          <img src="/experience/bg-bottom-left.png" className=" absolute left-[0px] top-[1300px] w-[1798px] h-[2547px]"/>
          <img src="/experience/bg-right1.png" className=" absolute left-[1237px] top-[250px] w-[1083px] h-[2301px]"/>
          <MobileExperience />
          <MobileEra />
          <MobileLifestyle />
          <MobileBeyond />
        </section> 
        <MobilePlanet />
        <MobileFooter />
      </div>

      <AppDialog show={showApp} setShow={setShowApp} />
    </div>
  );
}
