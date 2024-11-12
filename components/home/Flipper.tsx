/*
 * 翻牌数字
 */
import React, { useEffect, useState } from "react";  

const Flipper = ({ 
  front,
  back,
}: { 
  front: number;
  back: number;
}) => {
  const [isFlipping, setFlipping] = useState(false); 
  const [frontTextFromData, setFrontTextFromData] = useState(0);
  const [backTextFromData, setBackTextFromData] = useState(1);

    useEffect(() => {
        setFlipping(true);
        setFrontTextFromData(front);
    },[front])

  useEffect(() => {
    setBackTextFromData(back);
    setTimeout(() => {
      setFrontTextFromData(back);
      setFlipping(false);
    }, 600);
  }, [back]);
  return (
    <div
      className={` M-Flipper up ${isFlipping ? 'go' : ''} `}
    >
      <div className={"digital front " + ("number" + frontTextFromData)}></div>
      <div className={"digital back " + ("number" + backTextFromData)}></div>
    </div>
  );
};
  
export default React.memo(Flipper);
