import React, { useEffect, useState } from "react";
import Flipper from "./Flipper";

const formatData = (end: number) => {
  const endString = String(end);
  const size = endString.length;
  let backArr: number[] = [];

  for (let i = 0; i < size; i++) {
    const value = parseInt(endString[i]);
    backArr.push(value);
  }
  return backArr;
};

const Spots = ({
  start,
  end,
  onFinish,
}: {
  start: number;
  end: number;
  onFinish: any;
}) => {
  const [fronts, setFronts] = useState<number[]>([]);
  const [backs, setBacks] = useState<number[]>([]);
  useEffect(() => {
    
    let startValue = start > 1000 ? start : 1000;
    let endValue = startValue ;
    let frontArr: number[] = formatData(startValue);
    let backArr: number[] = formatData(endValue);

    setFronts(frontArr);
    setBacks(backArr);
    if(end <= endValue) return;
    const timer = setInterval(() => {
      startValue += 1;
      endValue += 1;
      frontArr = formatData(startValue);
      backArr = formatData(endValue);
      setFronts(frontArr);
      setBacks(backArr);
      if (end <= endValue) {
        onFinish();
        clearInterval(timer);
      }
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="FlipTimeClock md:gap-[20px] gap-[10px]">
      {fronts.map((item: number, index: number) => (
        <Flipper front={item} back={backs[index]} />
      ))}
    </div>
  );
};

export default React.memo(Spots);
