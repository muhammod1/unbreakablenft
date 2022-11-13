import React from "react";
import { motion } from "framer-motion";
import { activeJourney } from "../../assets";
const RoadmapCard = ({
  title,
  isActive,
  desc,
  version,
  year,
  progressIcon,
  isCompleted,
  completedIcon,
  indexId,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className=" flex w-full h-fit lg_l:h-[147px] justify-between md:mt-16 items-center gap-5 mb-5"
    >
      <div className=" flex md:items-center flex-col md:flex-row gap-2 md:gap-9">
        <div className=" w-11">
          {indexId === 0 && <p className="text-[#404040] text-lg">2022</p>}
          {indexId === 4 && <p className="text-[#404040] text-lg">2023</p>}
        </div>
        <div className="hidden max-w-[220px] md:block">
          {isCompleted ? (
            <img src={completedIcon} alt="progress" />
          ) : (
            <img src={progressIcon} alt="progress" />
          )}
        </div>
        <div className=" mb-8 md:mb-0 block md:hidden ">
          <h3 className="text-yellow font-audio text-[32px]">{version}</h3>
          <p className="text-[#404040] text-lg">{year}</p>
        </div>

        <div className="flex mb-14 flex-col ">
          <div className="  max-w-[657px]">
            {isActive && (
              <div className="">
                <p className="text-[#404040] text-lg">Current</p>
              </div>
            )}
            <h3 className="text-head_white text-[24px] font-audio sm:text-[24px]">
              {title}
            </h3>
          </div>
          <div className=" max-w-[648px]  ">
            <p className="text-grey_p text-base sm:text-[18px]">{desc}</p>
          </div>
        </div>
      </div>
      {isActive && (
        <div className="pt-3 hidden md:block">
          <img src={activeJourney} alt="active journey icon" />
        </div>
      )}
    </motion.div>
  );
};

export default RoadmapCard;
