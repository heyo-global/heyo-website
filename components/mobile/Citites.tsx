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

const Cities = ({
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
    let startValue = start > 5 ? start - 5 : start;
    let endValue = startValue;
    let frontArr: number[] = formatData(startValue);
    let backArr: number[] = formatData(endValue);

    setFronts(frontArr);
    setBacks(backArr);
    if (end <= endValue) return;
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
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cities md:gap-[10px] gap-[10px]">
      {end < 1000 && <Flipper front={0} back={0} />}
      {end < 100 && <Flipper front={0} back={0} />}
      {end < 10 && <Flipper front={0} back={0} />}
      {fronts.map((item: number, index: number) => (
        <Flipper front={item} back={backs[index]} />
      ))}
    </div>
  );
};

export default React.memo(Cities);
