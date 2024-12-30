import React from "react";

const Landmark = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col text-[#535145]">
      <div className="font-[800] text-[46px]">Landmark Manager</div>

      <div className="flex justify-center items-center gap-[42px] mt-[80px]">
        <div className="rounded-[16px] w-[833px] h-[282px] flex justify-between items-center pl-[16px] bg-[#CCFCDE] relative">
          <div className="flex flex-grow h-full flex-col justify-center items-center">
            <span className="text-[30px] leading-[38px] font-[800]">
              Location - based
            </span>
            <span className="text-[30px] leading-[38px] font-[800]">
              Monopoly Game
            </span>
            <span className="text-[14px] leading-[19px] font-[600]">
              We turn all the land into financial assets
            </span>
          </div>

          <img
            src="/image-location.png"
            alt=""
            className="w-[451px] h-[282px] rounded-[16px] shrink-0"
          />
        </div>

        <div className="rounded-[16px] w-[574px] h-[282px] bg-[#FCFAE9] flex flex-col justify-between items-center">
          <img
            src="/image-create-occupy.png"
            alt=""
            className="w-[510px] h-[178px]"
          />
          <div className="flex-grow flex flex-col justify-center items-center">
            <span className="font-[800] text-[30px] leading-[42px]">
              Create or Occupy
            </span>
            <span className="font-[600] text-[14px] leading-[19px]">
              Create on your location
            </span>
            <span className="font-[600] text-[14px] leading-[19px]">
              Occupy from other people
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[42px] mt-[42px] overflow-hidden">
        <div className="rounded-[16px] w-[574px] h-[282px] bg-[#FCFAE9] flex flex-col justify-between items-center">
          <img src="/image-manage.png" alt="" className="w-[342px] h-[207px] " />
          <div className="flex-grow flex flex-col justify-center items-center -mt-[12px]">
            <span className="font-[800] text-[30px] leading-[42px]">
              Manage Landmark
            </span>
            <span className="font-[600] text-[14px] leading-[19px]">
              Upgrading · Claim · Democrats
            </span>
          </div>
        </div>

        <div className="rounded-[16px] w-[833px] h-[282px] flex justify-between items-center pl-[16px] bg-[#CCFCDE] relative overflow-hidden">
          <div className="flex h-full flex-grow flex-col justify-center items-center">
            <span className="text-[30px] leading-[38px] font-[800]">
              $LAND Usage - Network
            </span>
            <span className="text-[30px] leading-[38px] font-[800]">
              Token $LAND
            </span>
            <span className="text-[14px] leading-[19px] font-[600] mt-[12px]">
              · Landmark Trading
            </span>
            <span className="text-[14px] leading-[19px] font-[600]">
              · Upgrade your Landmark Level to get more Land
            </span>
            <span className="text-[14px] leading-[19px] font-[600]">
              · Expanded Consumption Scenarios
            </span>
          </div>

          <img
            src="/image-network.png"
            alt=""
            className="w-[357px] h-[282px] shrink-0 rounded-[16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Landmark);
