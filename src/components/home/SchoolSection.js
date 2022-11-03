import React from "react";
import { schoolData } from "../../assets/data";

import SchoolCard from "./SchoolCard";
import { motion } from "framer-motion";
import { LinkButton } from "../";
const SchoolSection = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="mt-[85px] px-3 sm:px-6 max-w-[1240px] mx-auto"
    >
      <div className=" flex gap-5 justify-center flex-wrap ">
        <div
          className=" max-w-[378px] flex md:items-center
    flex-col"
        >
          <h4 className="font-audio text-head_white text-[40px] sm:text-[72px]">
            Selected Schools
          </h4>
          <p className="text-grey_p text-[17px]">
            Discover the many ways in which we help these schools embrace
            technology and implement Anti-bullying strategies .
          </p>
        </div>
        {schoolData.length > 0 &&
          schoolData.map((data) => <SchoolCard key={data.name} {...data} />)}
      </div>
      <div className="flex justify-center mt-[46px]">
        <LinkButton text="View more" url="/program" />
      </div>
    </motion.div>
  );
};

export default SchoolSection;
