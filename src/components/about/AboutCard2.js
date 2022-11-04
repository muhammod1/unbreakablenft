import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
const AboutCard2 = ({ aboutImage }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg relative">
      <div className=" absolute bottom-2 left-2 small:bottom-8 small:left-8 ">
        <h4 className="text-base small:text-2xl text-[#FAFAFA]">
          Oluchi Enebeli
        </h4>
        <p className="text-sm text-[#D4D4D4]">United Kingdom, UK</p>
        <div className="flex gap-2 mt-2">
          <BsTwitter size={20} color="#fff" />
          <AiFillLinkedin size={20} color="#fff" />
        </div>
      </div>
      <img src={aboutImage} className="w-full" alt="about photos" />
    </div>
  );
};

export default AboutCard2;
