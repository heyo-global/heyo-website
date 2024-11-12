/*
 * 翻牌时钟
 * @author： 兔子先生
 * @createDate: 2019-11-24
 */
import React, { useEffect, useState } from "react";
import Flipper from "./Flipper";
import dayjs from "dayjs";
 

// 日期时间补零
const padLeftZero = (str: string) => {
  return ("00" + str).substr(str.length);
};
const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const formatTime = (end: number, back?: boolean) => {
  // let end = new Date(2024,5,11,0,0,0,0).getTime();
  let time = back ? 1000 : 0;
  let now = dayjs().valueOf() + time;
  let result = end - now;
  if (result <= 1000) result = 0;
  let day = Math.floor(result / DAY);
  let hourTime = result - day * DAY;
  let hour = Math.floor(hourTime / HOUR);
  let minuteTime = hourTime - hour * HOUR;
  let minute = Math.floor(minuteTime / MINUTE);
  let secondTime = minuteTime - MINUTE * minute;
  let second = Math.floor(secondTime / 1000);
  return (
    padLeftZero(day + "") +
    padLeftZero(hour + 24*day + "") +
    padLeftZero(minute + "") +
    padLeftZero(second + "")
  );
};

const FlipClock = ({ date, onFinish }: { date: number; onFinish: any }) => {
  const [fronts, setFronts] = useState([0, 0, 0, 0, 0, 0]);
  const [backs, setBacks] = useState([0, 0, 0, 0, 0, 0]);
  useEffect(() => {
    let frontArr: any = [];
    let backArr: any = [];
    // console.log(date);
    let nowTimeStr = formatTime(date);
    for (let i = 0; i < nowTimeStr.length; i++) {
      frontArr.push(nowTimeStr[i]);
      backArr.push(nowTimeStr[i]);
    }
    setFronts(frontArr);
    setBacks(backArr);
    // console.log(nowTimeStr);
    const timer = setInterval(() => {
      let frontArr: any = [];
      let backArr: any = [];
      // 获取当前时间
      let nowTimeStr = formatTime(date);
      let nextTimeStr = formatTime(date, true);
      if ("00000000" == nextTimeStr) {
        onFinish();
        clearInterval(timer);
      }
      for (let i = 0; i < nowTimeStr.length; i++) {
        frontArr.push(nowTimeStr[i]);
        backArr.push(nextTimeStr[i]);
      }
      setFronts(frontArr);
      setBacks(backArr);
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className="FlipTimeClock ">
      {/* <Flipper  front={fronts[0]} back={backs[0]} />
      <Flipper  front={fronts[1]} back={backs[1]} />
      <span className="unit pr-1">D</span> */}
      {(fronts[2] > 0 ||
        fronts[3] > 0) && (
          <>
            <Flipper  front={fronts[2]} back={backs[2]} />
            <Flipper  front={fronts[3]} back={backs[3]} />
            <span className="unit ">:</span>
          </>
        )}

      <Flipper  front={fronts[4]} back={backs[4]} />
      <Flipper  front={fronts[5]} back={backs[5]} />
      <span className="unit ">:</span>
      <Flipper  front={fronts[6]} back={backs[6]} />
      <Flipper  front={fronts[7]} back={backs[7]} />
      {/* <span className="unit pl-1">:</span> */}
    </div>
  );
};

export default React.memo(FlipClock);
