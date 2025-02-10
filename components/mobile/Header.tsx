import React, { useState } from "react";
import AppDialog from "./AppDialog";
import { motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{ fontSize: "14PX" }}
      className="h-[100px] !text-black absolute top-0 left-0 right-0 z-[100]  flex items-center justify-between bg-transparent px-[4.3vw]"
    >
      <img
          src={"/home/title.svg"}
          className="w-[120px] h-[40px] img-disabled"
          alt="Logo"
        />

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex justify-center items-center  cursor-pointer font-[600] w-[150px] h-[40px] rounded-3xl bg-[#F0FF9F] border border-[#F0FF9F]"
        onClick={() => setShow(true)}
        style={{ boxShadow: "0px 0px 10px 0px #F0FF9F" }}
      >
        <span className="text-[20px]">Launch App</span>
      </motion.div>
      <AppDialog show={show} setShow={setShow} />
    </div>
  );
};

export default React.memo(Header);
