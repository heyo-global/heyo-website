"use client";
import PageOne from "@/components/home/PageOne";
import PageTwo from "@/components/home/PageTwo";
import useWindowSize from "@/hooks/useWindowSize";
import { Button, Space, Swiper, Toast } from "antd-mobile";

export default function Home() {
  const { isMobile } = useWindowSize();
  return (
    <div className="flex flex-col w-screen h-screen bg-theme-color">
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
        <div className="w-full h-screen overflow-y-scroll">
          <PageOne />
          <PageTwo />
        </div>
      )}
    </div>
  );
}
