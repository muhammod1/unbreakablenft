import React from "react";

import { activeJourney } from "../../assets";
const RoadmapCard = ({
  title,
  isaActive,
  desc,
  version,
  year,
  progressIcon,
}) => {
  return (
    <div className=" flex w-full justify-between md:mt-28 items-center gap-5 mb-5">
      <div className=" flex md:items-center flex-col md:flex-row gap-2 md:gap-9">
        <div className="hidden md:block">
          <img src={progressIcon} alt="progress" />
        </div>
        <div className=" mb-8 md:mb-0 block md:hidden ">
          <h3 className="text-yellow font-audio text-[32px]">{version}</h3>
          <p className="text-[#404040] text-lg">{year}</p>
        </div>

        <div className="flex flex-col ">
          <div className=" max-w-[657px]">
            {isaActive && (
              <div className="">
                <p className="text-[#404040] text-lg">Current</p>
              </div>
            )}
            <h3 className="text-head_white text-[28px] font-audio sm:text-[32px]">
              {title}
            </h3>
          </div>
          <div className=" max-w-[648px]  ">
            <p className="text-grey_p text-base sm:text-[18px]">{desc}</p>
          </div>
        </div>
      </div>
      {isaActive && (
        <div className="pt-3 hidden md:block">
          <img src={activeJourney} alt="active journey icon" />
        </div>
      )}
    </div>
  );
};

export default RoadmapCard;
