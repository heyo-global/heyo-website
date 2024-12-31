import React from "react";

const Landmark = () => {
  return (
    <section id="MONOPOLY" className=" flex justify-center items-center flex-col text-[#535145]">
      <div className="font-[800] text-[46px] md:text-[2.4vw] ">Landmark Manager</div>

      <div className="flex justify-center items-center gap-[42px] mt-[80px]  md:mt-[3.2vw] md:gap-[2vw]">
        <div className="rounded-[16px] w-[833px] h-[282px] md:w-[43.4vw] md:h-[14.7vw] flex justify-between items-center pl-[16px] bg-[#CCFCDE] relative">
          <div className="flex flex-grow h-full flex-col justify-center items-center">
            <span className="text-[30px] leading-[38px] md:text-[1.56vw] md:leading-[2.2vw] font-[800]">
              Location - based
            </span>
            <span className="text-[30px] leading-[38px] md:text-[1.56vw] md:leading-[2.2vw] font-[800]">
              Monopoly Game
            </span>
            <span className="text-[14px] leading-[19px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
              We turn all the land into financial assets
            </span>
          </div>

          <img
            src="/image-location.png"
            alt=""
            className="w-[451px] h-[282px] rounded-[16px] shrink-0 md:w-[23.5vw] md:h-[14.7vw]"
          />
        </div>

        <div className="rounded-[16px] w-[574px] h-[282px] md:w-[30vw] md:h-[14.7vw] bg-[#FCFAE9] flex flex-col justify-between items-center">
          <img
            src="/image-create-occupy.png"
            alt=""
            className="w-[510px] h-[178px] md:w-[26.56vw] md:h-[9.27vw]"
          />
          <div className="flex-grow flex flex-col justify-center items-center">
            <span className="font-[800] text-[30px] leading-[42px] md:text-[1.56vw] md:leading-[2.2vw]">
              Create or Occupy
            </span>
            <span className="font-[600] text-[14px] leading-[19px] md:text-[0.73vw] md:leading-[0.94vw]">
              Create on your location
            </span>
            <span className="font-[600] text-[14px] leading-[19px] md:text-[0.73vw] md:leading-[0.94vw]">
              Occupy from other people
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[42px] mt-[42px] overflow-hidden md:gap-[2vw] md:mt-[2vw]">
        <div className="rounded-[16px] w-[574px] h-[282px] md:w-[30vw] md:h-[14.7vw] bg-[#FCFAE9] flex flex-col justify-between items-center">
          <img src="/image-manage.png" alt="" className="w-[342px] h-[207px] md:w-[17.8vw] md:h-[10.8vw]" />
          <div className="flex-grow flex flex-col justify-center items-center -mt-[12px]">
            <span className="font-[800] text-[30px] leading-[42px] md:text-[1.56vw] md:leading-[2.2vw]">
              Manage Landmark
            </span>
            <span className="font-[600] text-[14px] leading-[19px] md:text-[0.73vw] md:leading-[0.94vw]">
              Upgrading · Claim · Democrats
            </span>
          </div>
        </div>

        <div className="rounded-[16px] w-[833px] h-[282px] md:w-[43.4vw] md:h-[14.7vw] flex justify-between items-center pl-[16px] bg-[#CCFCDE] relative overflow-hidden">
          <div className="flex h-full flex-grow flex-col justify-center items-center">
            <span className="text-[30px] leading-[38px] font-[800] md:text-[1.56vw] md:leading-[2.2vw]">
              $LAND Usage - Network
            </span>
            <span className="text-[30px] leading-[38px] font-[800] md:text-[1.56vw] md:leading-[2.2vw]">
              Token $LAND
            </span>
            <span className="text-[14px] leading-[19px] font-[600] mt-[12px] md:text-[0.73vw] md:leading-[0.94vw]">
              · Landmark Trading
            </span>
            <span className="text-[14px] leading-[19px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
              · Upgrade your Landmark Level to get more Land
            </span>
            <span className="text-[14px] leading-[19px] font-[600] md:text-[0.73vw] md:leading-[0.94vw]">
              · Expanded Consumption Scenarios
            </span>
          </div>

          <img
            src="/image-network.png"
            alt=""
            className="w-[357px] h-full shrink-0 rounded-[16px] md:w-[18.6vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Landmark);
