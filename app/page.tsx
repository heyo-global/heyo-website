"use client";
import PageOne from "@/components/home/PageOne";
import PageTwo from "@/components/home/PageTwo";
import { Button, Space, Swiper, Toast } from "antd-mobile";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen bg-theme-color">
      <Swiper direction="vertical" style={{ "--height": "100vh" }} indicator={() => null}>
        <Swiper.Item key={0}>
          <PageOne />
        </Swiper.Item>
        <Swiper.Item key={1}>
          <PageTwo />
        </Swiper.Item>
      </Swiper>
    </div>
  );
}
