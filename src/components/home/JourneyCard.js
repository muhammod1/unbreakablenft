import React from "react";

import { activeJourney } from "../../assets";
const JourneyCard = ({ title, isaActive, desc, version, year }) => {
  return (
    <div className=" flex justify-between items-start gap-5 mb-5">
      <div className="max-w-[1039px] flex md:items-center flex-col md:flex-row gap-2 md:gap-9">
        <div className="w-[83px] mb-8 md:mb-0">
          <h3 className="text-yellow font-audio text-[32px]">{version}</h3>
          <p className="text-[#404040] text-lg">{year}</p>
        </div>
        <div className=" max-w-[257px]">
          {isaActive && (
            <div className="">
              <p className="text-[#404040] text-lg">Current</p>
            </div>
          )}
          <h3 className="text-head_white text-[28px] font-audio sm:text-[32px]">
            {title}
          </h3>
        </div>
        <div className=" max-w-[608px]">
          <p className="text-grey_p text-base sm:text-[18px]">{desc}</p>
        </div>
        <a href="#" className=" text-yellow md:hidden">
          view more
        </a>
      </div>
      {isaActive && (
        <div className="pt-3 hidden md:block">
          <img src={activeJourney} alt="active journey icon" />
        </div>
      )}
    </div>
  );
};

export default JourneyCard;
