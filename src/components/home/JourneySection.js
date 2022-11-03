import React from "react";
import { Link } from "react-router-dom";
import { journeyData } from "../../assets/data";
import JourneyCard from "./JourneyCard";
import { motion } from "framer-motion";
const JourneySection = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className=" mt-[85px]  px-3 sm:px-6 max-w-[1240px] mx-auto"
    >
      <p className="text-[#737373] text-lg">Our Journey starts here</p>
      <h3 className="text-head_white font-audio text-3xl small_l:text-[40px] sm:text-7xl mt-2">
        <span className="block 4xl:inline">The Unbroken</span> Roadmap
      </h3>
      {journeyData.length > 0 && (
        <div className="mt-[78px] ">
          <div className="">
            {journeyData.map((data, index) => (
              <JourneyCard key={data.title} {...data} index={index} />
            ))}
          </div>
          <div className="hidden md:flex justify-center mt-16">
            <Link to="/roadmap" className="bg-yellow rounded-lg p-3">
              Learn More
            </Link>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default JourneySection;
