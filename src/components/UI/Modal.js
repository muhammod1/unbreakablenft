import React from "react";
import { motion } from "framer-motion";
const Modal = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="justify-center gradient items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-[90%] md:w-[95%] my-6 mx-auto max-w-5xl">
          <div className="w-[100%] md:w-[100%] mx-auto border-0 rounded-lg relative bg-[#171717] outline-none focus:outline-none">
            {children}
          </div>
        </div>
      </motion.div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
