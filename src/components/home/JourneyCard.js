import React from "react";

import { activeJourney } from "../../assets";
import { journeyData } from "../../assets/data";
const JourneyCard = ({ title, isaActive, desc, version, year, index }) => {
  return (
    <div>
      <div className=" flex justify-between items-start gap-5 my-10">
        <div className="max-w-full small:max-w-[1039px] flex md:items-center flex-col md:flex-row gap-2 md:gap-9">
          <div className="min-w-[83px] mb-8 md:mb-0">
            <h3 className="text-yellow font-audio  text-[32px]">{version}</h3>
            <p className="text-[#404040] text-lg">{year}</p>
          </div>
          <div className=" w-full sm:w-[270px] ">
            {isaActive && (
              <div className="">
                <p className="text-[#404040] text-lg">Current</p>
              </div>
            )}
            <h3 className="text-head_white leading-[48px] text-lg small:text-[28px] font-audio sm:text-[32px]">
              {title}
            </h3>
          </div>
          <div className=" max-w-[608px] w-full xl:w-[700px]">
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
      {index < journeyData.length - 1 && (
        <div className=" w-full bg-[#262626]  rounded-lg h-[1px]"></div>
      )}
    </div>
  );
};

export default JourneyCard;
