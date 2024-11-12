import React from "react";
import Flipper from "./Flipper";

const Cities = ({ start, end }: { start: number; end: number }) => {
  const endString = String(end);
  const size = endString.length;
  let frontArr: any = [];
  let backArr: any = [];
  const startString = String(start);

  for (let i = 0; i < size; i++) {
    const value = parseInt(endString[i]);
    backArr.push(value);
    if (startString.length < size) {
      if (i == 0) {
        frontArr.push(value);
      } else {
        frontArr.push(0);
      }
    }
  }

  return (
    <div
      className={
        "flex items-center h-[18px] overflow-hidden textShadow fontM-Px"
      }
    >
      {backArr.map((item: number, index: number) => {
        return <Flipper front={frontArr[index]} back={backArr[index]} />;
      })}
    </div>
  );
};

export default React.memo(Cities);
