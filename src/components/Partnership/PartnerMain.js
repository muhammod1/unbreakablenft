import React from "react";
import { motion } from "framer-motion";
const PartnerMain = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-[50px] mx-auto mobile:mx-0 mobile:w-[70%] lg:w-[60%]"
    >
      <h3 className="text-white font-audio text-2xl small_l:text-[225%] small_l:leading-[121%]">
        <span className="block">Initiatives</span>{" "}
      </h3>
      <p className="mt-[15px] w-full text-[13px] text-grey_p">
        The proceeds from our collection will be used to implement three key
        projects to address high school bullying in Nigeria.
      </p>
    </motion.div>
  );
};

export default PartnerMain;
