import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import { schoolBatch, schoolImage } from "../../assets";
import { motion } from "framer-motion";

const SchoolCard = ({ photo, videoLink }) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.7 }}
      className="p-4 group w-full  bg-no-repeat transition-all duration-500 hover:scale-105 ease-in-out bg-cover small_l:w-[361px] h-60 small_l:h-[387px]  overflow-hidden flex-shrink-0 rounded-md relative"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="w-12 small_l:w-[78px]">
          <img src={schoolBatch} alt="school batch" />
        </div>
        <div>
          <h4 className="text-head_white text-lg small_l:text-[32px]">
            GSS PASALI
          </h4>
          <p className="text-head_white">Kuje, Abuja</p>
        </div>
        <button className="flex text-yellow items-center">
          {" "}
          <BiPlayCircle size={26} className="mr-2" /> Watch Video
        </button>
      </div>

      {/* <div className="absolute inset-0 bg-black-200 opacity-30 "></div> */}
      <img
        src={photo}
        alt="schoolimages"
        className="w-full group-hover:hidden -z-10  absolute inset-0"
      />
      <motion.img
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.7 }}
        src={schoolImage}
        alt="schoolimages"
        className="w-full hidden group-hover:block -z-10  absolute inset-0"
      />
    </motion.div>
  );
};

export default SchoolCard;
