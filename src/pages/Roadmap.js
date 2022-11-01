import React from "react";
import { Union } from "../assets";

import { roadmapData } from "../assets/data";
import { RoadmapCard } from "../components";

const Roadmap = () => {
  return (
    <>
      {/* roadmap section  */}
      <div className="mt-14 mx-6 md:mx-20 scrollbar-hide overflow-y-auto">
        <p className="text-[#737373] text-lg">Our Journey starts here</p>
        <h3 className="text-head_white font-audio text-[40px] sm:text-7xl mt-2">
          <span className="block 4xl:inline">Unbroken</span> Roadmap
        </h3>
        <div className="flex">
          <div className="flex-auto mt-[20px] ml-24 w-[15%]  hidden md:block">
            <div className="flex">
              <div className="mt-20">
                {/* <img  src={Union} alt="vector" /> */}
              </div>
            </div>
          </div>
          <div className="flex-auto w-[85%]">
            {roadmapData.length > 0 && (
              <div>
                {roadmapData.map((data) => (
                  <RoadmapCard key={data.title} {...data} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
