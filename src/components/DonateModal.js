import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { delay, motion } from "framer-motion";
const DonateModal = () => {
  const [toggleModel, setToggleModel] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setToggleModel(true);
    }, 3000);
  }, []);
  return (
    <motion.div
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeIn" }}
      exit={{ y: -1000 }}
      className={
        toggleModel
          ? " bg-yellow h-16 flex justify-center items-center p-2"
          : "hidden"
      }
    >
      <p className="mr-2">Donate to curb bullying in High schools</p>
      <button className=" mr-4 bg-black-200 text-yellow p-2 rounded-md">
        Donate
      </button>
      <CgClose size={20} onClick={() => setToggleModel(false)} className="" />
    </motion.div>
  );
};

export default DonateModal;
