"use client";
import PageOne from "@/components/home/PageOne";
import PageTwo from "@/components/home/PageTwo";
import useWindowSize from "@/hooks/useWindowSize";
import { Button, Space, Swiper, Toast } from "antd-mobile";
import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "ahooks";
import HeaderTwo from "@/components/home/HeaderTwo";
import Header from "@/components/home/Header";

export default function Home() {
  const { isMobile, height } = useWindowSize();
  const ref = useRef(null);
  const scroll = useScroll(ref);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (scroll) {
      console.log(JSON.stringify(scroll));
      if (scroll.top > height*0.85) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  }, [scroll, height]);
  return (
    <div className="flex flex-col w-screen h-screen bg-theme-color">
      {!isMobile && (
        <div className="fixed left-0 right-0 top-0 z-[2000] h-[6.0vw]">
          {show && <HeaderTwo />}
          {!show && <Header />}
        </div>
      )}
      {isMobile ? (
        <Swiper
          direction="vertical"
          style={{ "--height": "100vh" }}
          indicator={() => null}
        >
          <Swiper.Item key={0}>
            <PageOne />
          </Swiper.Item>
          <Swiper.Item key={1}>
            <PageTwo />
          </Swiper.Item>
        </Swiper>
      ) : (
        <div className="w-full h-screen overflow-y-scroll" ref={ref}>
          <PageOne />
          <PageTwo />
        </div>
      )}
    </div>
  );
}
