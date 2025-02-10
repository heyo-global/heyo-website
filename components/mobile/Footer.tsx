import React from "react";

const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full flex flex-col justify-center items-center"
    >
      <div className="flex w-[540px] h-full text-black font-[500] text-[24px]">
        <div className="flex flex-col gap-3 flex-1">
          <span className="text-[28px]">RESOURCES</span>
          <span>DOCS</span>
          <span>BLOG</span>
          <span>GITHUB</span>
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <span className="text-[28px]">CONTACT US</span>
          <span>TALK TO A BUILDER</span>
          <span>TWITTER</span>
          <span>JOIN TELEGRAM</span>
          <span>JOIN DISCORD</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[20px] my-[50px]">
        <img src="/mobile/icon-idcard.svg" className="w-[80px] h-[80px]" />
        <img src="/mobile/icon-t.svg" className="w-[80px] h-[80px]" />
        <img src="/mobile/icon-x.svg" className="w-[80px] h-[80px]" />
      </div>

      <img
        src={"/home/title.svg"}
        className="w-[180px] h-[60px] img-disabled mb-[50px]"
        alt="Logo"
      />
    </section>
  );
};

export default React.memo(Footer);
