import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const LinkCard = ({ text, subtext, linktext, url, desc,}) => {
  return (
    <motion.div
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
    className="px-3  sm:px-6 max-w-[1240px] mx-auto "
  >
    <div className="mt-[112px] flex flex-col sm:flex-row justify-between gap-2 py-2   rounded-[5px] items-center px-[16px] md:px-[42px]  min-h-[110px] bg-yellow ">
      <div className="flex flex-col lg:gap-10 lg:flex-row lg:justify-between lg:items-center">
        <h4 className="font-audio text-2xl">
        <span className="sm:block">{text}</ span> {subtext}
        </h4>
        <p className="text-[#262626]  max-w-[583px] w-full text-lg">
          {desc}
        </p>
      </div>
      <Link
        to={url}
        className="bg-[#262626] w-full text-center sm:w-fit p-3 rounded-md text-yellow md:px-[42px] text-sm"
      >
        {linktext}
      </Link>
    </div>
  </motion.div>
  )
}

export default LinkCard