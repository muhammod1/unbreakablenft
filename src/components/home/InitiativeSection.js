import React from "react";
import { initiativeData } from "../../assets/data";
import InitiativeCard from "./InitiativeCard";
import { motion } from "framer-motion";
const InitiativeSection = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.7 }}
      className="px-3 mt-[86px] sm:px-6 max-w-[1240px] mx-auto"
    >
      <div className=" max-w-[534px] ">
        <h3 className="font-audio text-4xl  md:text-7xl text-head_white">
          Initiatives
        </h3>
        <p className="text-grey_p mt-2">
          The proceeds from our collection will be used to implement three key
          projects to address high school bullying in Nigeria.
        </p>
      </div>
      {initiativeData.length > 0 && (
        <div className="mt-[40px]   flex gap-4 justify-between flex-wrap">
          {initiativeData.map((data) => (
            <InitiativeCard key={data.title} {...data} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default InitiativeSection;
