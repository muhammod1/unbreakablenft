import React from 'react'
import { Link } from "react-router-dom";

const LinkCard = ({ text, url, desc }) => {
  return (
    <div className="mt-[112px] flex flex-col sm:flex-row justify-between gap-2 py-2   rounded-[5px] items-center px-[16px] md:px-[42px]  min-h-[110px] bg-yellow ">
    <div className="flex flex-col lg:gap-10 lg:flex-row lg:justify-between lg:items-center">
      <h4 className="font-audio sm:mx-8 text-2xl">
        <span className="  sm:block">{text}</span> 
      </h4>
      <p className="text-[#262626] sm:mx-[-20px] max-w-[583px] w-full text-lg">
       {desc}
      </p>
    </div>
    <Link
      href={url}
      className="bg-[#262626] w-full text-center sm:w-fit p-3 rounded-md text-yellow mx-8 text-sm"
    >
      Join Discord
    </Link>
  </div>
  )
}

export default LinkCard