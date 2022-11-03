import React from "react";
import { union, unionFill } from "../assets";

import { roadmapData } from "../assets/data";
import { RoadmapCard } from "../components";

const Roadmap = () => {
  return (
    <>
      {/* roadmap section  */}
      <div className="mt-14 px-3 sm:px-6 max-w-[1240px] mx-auto scrollbar-hide overflow-y-auto">
        <p className="text-[#737373] text-lg">Our Journey starts here</p>
        <h3 className="text-head_white font-audio text-[40px] sm:text-7xl mt-2">
          <span className="block 4xl:inline">Unbroken</span> Roadmap
        </h3>
        <div className="flex relative w-full">
          <div className="hidden absolute top-[111px] lg_l:top-[104px] left-[49px] md:block">
            <img
              src={unionFill}
              className="w-183px h-[275px]  lg_l:h-[258px]"
              alt="union"
            />
          </div>
          <div className="hidden absolute top-[317px] lg_l:top-[298px] left-[49px]  md:block">
            <img
              src={unionFill}
              className="w-183px h-[275px]  lg_l:h-[258px]"
              alt="union"
            />
          </div>

          {roadmapData.length > 0 && (
            <div className="w-full">
              {roadmapData.map((data, index) => (
                <RoadmapCard key={data.title} {...data} indexId={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Roadmap;
