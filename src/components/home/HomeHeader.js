import React from "react";
import { motion } from "framer-motion";
const HomeHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-16 md:mt-24 px-3 sm:px-6 max-w-[1240px] mx-auto  flex gap-8 flex-col items-center sm:flex-row justify-between flex-wrap md:flex-nowrap"
    >
      <div className="flex flex-col flex-1 w-full justify-end">
        <h3 className="text-white font-audio   small:text-[55px] leading-[110%]  xl:text-9xl ">
          <span className="block">Unbroken</span>{" "}
          <span className="block md:inline">Against</span> bullying
        </h3>
        <div className="mt-6 flex flex-col small:flex-row small:items-center">
          <button className="bg-yellow text-black-200 p-1 px-3  rounded-md mr-4">
            Discover NFTs
          </button>
        </div>
      </div>
      <div className="flex-1 w-full">
        {/* <div className="hidden sm:block"></div> */}
        {/* <img className=" w-full" src={motion} alt="motion" /> */}
        <motion.iframe
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full"
          height="415"
          src="https://www.youtube.com/embed/QsEKICkpQBI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </motion.div>
  );
};

export default HomeHeader;
