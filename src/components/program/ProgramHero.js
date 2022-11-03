import React from "react";
import { motion } from "framer-motion";
const ProgramHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="relative"
    >
      <div className="bg__program h-[525px] md:h-[522px] w-full">
        <div className="w-full mx-auto absolute top-[35%] md:top-[25%]">
          <div className=" max-w-[1240px] w-[90%] mobile:w-[70%] md:w-[90%] mx-auto ">
            <h3 className="text-white font-audio text-[265%] leading-[91%]  md:text-[82px]">
              Unbroken<span className="block"> Programmes</span>{" "}
            </h3>
            <p className="mt-[25px] w-full md:w-[50%] text-grey_p">
              Here we tell the stories of the Unbrokens who remained resilient
              in the face of bullying
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramHero;
