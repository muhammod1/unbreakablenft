import React from "react";
import { motion } from "framer-motion";
const PartnerHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="w-full mt-[60px] mobile:mt-[80px]  mx-auto md:mx-0 md:w-[70%]"
    >
      <h3 className="text-white font-audio text-2xl small_l:text-[265%] small_l:leading-[121%]  md:text-[65px]">
        <span className="block">Why Unbroken</span>{" "}
      </h3>
      <p className="mt-[25px] w-full md:w-4/5 text-grey_p">
        Bullying and any form of oppression is a global menace, which has to be
        treated with a sense of urgency.
      </p>
    </motion.div>
  );
};

export default PartnerHero;
