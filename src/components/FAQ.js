import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { motion } from "framer-motion";
const FAQ = () => {
  const [toggleFnq, setToggleFnq] = useState(false);
  const handleToggle = () => {
    setToggleFnq(!toggleFnq);
  };
  return (
    <div className="flex  flex-col   flex-wrap mt-14 mx-6 md:mx-20">
      <h3 className="text-head_white text-center font-audio text-lg small:text-4xl sm:text-[56px]">
        Frequently Asked Questions
      </h3>
      <div className="mt-6 w-full  max-w-2xl mx-auto">
        <div className=" w-full   flex justify-between items-center">
          <p className="text-grey_p">What is your name</p>
          {toggleFnq ? (
            <BsChevronUp onClick={handleToggle} className="text-grey_p" />
          ) : (
            <BsChevronDown onClick={handleToggle} className="text-grey_p" />
          )}
        </div>
        {toggleFnq && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <p className="text-grey_p ">This is my name wow great</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
