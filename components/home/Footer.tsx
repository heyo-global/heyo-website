import React from "react";

const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full h-[288px] flex justify-center items-center border-t border-[#D9D9D9]"
    >
      <div className="w-[1280px] h-[168px] flex justify-between">
        <img
          src={"/home/title.svg"}
          className="w-[180px] h-[60px] img-disabled"
          alt="Logo"
        />
        <div className="flex w-[300px] h-full text-black font-[500] text14">
          <div className="flex flex-col gap-3 flex-1">
            <span className="text20">RESOURCES</span>
            <span>DOCS</span>
            <span>BLOG</span>
            <span>GITHUB</span>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <span className="text20">CONTACT US</span>
            <span>TALK TO A BUILDER</span>
            <span>TWITTER</span>
            <span>JOIN TELEGRAM</span>
            <span>JOIN DISCORD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Footer);
