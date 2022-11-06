import React from "react";
import { company1, company2, company3, company4, company5 } from "../../assets";
import { motion } from "framer-motion";
const Sponsors = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.7 }}
      className="mt-[85px] px-3 sm:px-6 max-w-[1240px] mx-auto flex flex-col justify-center items-center"
    >
      <p className="text-grey_p text-xl font-audio">Unbroken Sponsors</p>
      <div className="flex gap-9 mt-8 items-center justify-center flex-wrap">
        <img src={company1} alt="company logo1" />
        <img src={company2} alt="company logo2" />
        <img src={company3} alt="company logo3" />
        <img src={company4} alt="company logo4" />
        <img src={company5} alt="company logo5" />
      </div>
    </motion.div>
  );
};

export default Sponsors;
