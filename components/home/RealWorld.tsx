import React from "react";

const RealWord = () => {
  return (
    <section className=" flex justify-center items-center flex-col text-[#535145]">
      <div className="font-[800] text-[46px]">Providing A Global Lifestyle</div>

      <div className="flex justify-center items-center mt-[100px]">
        <div
          className="rounded-[20px] w-[390px] h-[512px] flex flex-col items-center pt-[40px]"
          style={{
            background: "linear-gradient(180deg, #CEFFFC 0%, #ECFFFE 100%)",
          }}
        >
          <span className="text-[30px] leading-[42px] font-[800]">
            Interaction with
          </span>
          <span className="text-[30px] leading-[42px] font-[800]">Rewards</span>
          <img
            src="/image-interaction.png"
            alt=""
            className="w-[247px] h-[241px] my-[10px]"
          />
          <span className="text-[14px] leading-[18px] font-[600]">
            Heyo goes beyond providing
          </span>
          <span className="text-[14px] leading-[18px] font-[600]">
            detailed landmark information
          </span>
        </div>

        <div
          className="rounded-[20px] w-[339px] h-[587px] flex flex-col items-center pt-[40px]"
          style={{
            background: "linear-gradient(180deg, #FFF1DB 0%, #FFFBF4 100%)",
          }}
        >
          <span className="text-[30px] leading-[42px] font-[800]">
            A Compelling
          </span>
          <span className="text-[30px] leading-[42px] font-[800]">
            Economic Model
          </span>
          <img
            src="/image-compelling.png"
            alt=""
            className="w-[255px] h-[211px] my-[24px]"
          />
          <span className="text-[14px] leading-[18px] font-[600]">
            Heyo introduces an innovative
          </span>
          <span className="text-[14px] leading-[18px] font-[600]">
            3-token model to reward
          </span>
          <span className="text-[14px] leading-[18px] font-[600]">
            various contributions, ensuring
          </span>
          <span className="text-[14px] leading-[18px] font-[600]">
            a balanced economy
          </span>
        </div>

        <div
          className="rounded-[20px] w-[390px] h-[512px] flex flex-col items-center pt-[40px]"
          style={{
            background: "linear-gradient(180deg, #FFE1E1 0%, #FFF5F5 100%)",
          }}
        >
          <span className="text-[30px] leading-[42px] font-[800]">
            Bridging Reality and
          </span>
          <span className="text-[30px] leading-[42px] font-[800]">
            Cryptocurrency
          </span>
          <img
            src="/image-bridging.png"
            alt=""
            className="w-[208px] h-[219px] my-[16px]"
          />
          <span className="text-[14px] leading-[18px] font-[600]">
            Every landmark on Heyo
          </span>
          <span className="text-[14px] leading-[18px] font-[600]">
            holds significant real-world
          </span>
          <span className="text-[14px] leading-[18px] font-[600]">
            business value
          </span>
        </div>
      </div>
    </section>
  );
};

export default React.memo(RealWord);
