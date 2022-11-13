import React from "react";


import { motion } from "framer-motion";
const Contact = () => {
  
  return (
    <div className="h-screen flex ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="hidden justify-start md:flex w-full lg:w-1/2 bg-contact bg-cover  bg-no-repeat
   items-end"
      >
       
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex w-full lg:w-1/2 justify-center items-center  "
      >
        <div className=" max-w-[534px] ">
        <h3 className="font-audio w-[474px] text-4xl text-yellow md:text-[40px] ">
        We would love to hear from you
        </h3>
        <p className="text-grey_p mt-2">
        Want to become a partner or have a story to share?
        </p>
      </div>
      </motion.div>
    </div>
  );
};

export default Contact;
