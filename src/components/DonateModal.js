import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const DonateModal = () => {
  const [toggleModel, setToggleModel] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setToggleModel(true);
    }, 4000);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={
        toggleModel
          ? " bg-yellow h-16 flex z-50 justify-center items-center p-2"
          : "hidden"
      }
    >
      <p className="mr-2 text-xs small:text-sm">
        Donate to curb bullying in High schools
      </p>
      <Link to="/donate">
        <button className=" mr-4 bg-black-200 text-xs small:text-sm text-yellow p-2 rounded-md">
          Donate
        </button>
      </Link>
      <CgClose size={20} onClick={() => setToggleModel(false)} className="" />
    </motion.div>
  );
};

export default DonateModal;
