import React from "react";
import { union, unionFill, unionUnFill } from "../assets";

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
          <div className="hidden absolute z-50  top-[77px] left-[50px] lg_l:block">
            <img src={unionFill} className="w-183px h-[281px]" alt="union" />
          </div>
          <div className="hidden z-40 absolute top-[288px] left-[50px]  lg_l:block">
            <img
              src={unionUnFill}
              className="w-183px h-[280px]"
              alt="un fill union"
            />
            {/* <img src={unionFill} className="w-183px h-[280px]" alt="union" /> */}
          </div>
          <div className="hidden z-30 absolute top-[499px] left-[50px]  lg_l:block">
            <img
              src={unionUnFill}
              className="w-183px h-[280px]"
              alt="un fill union"
            />
            {/* <img src={unionFill} className="w-183px h-[281px]" alt="union" /> */}
          </div>
          <div className="hidden z-10 absolute bottom-[297px] left-[50px]  lg_l:block">
            <img
              src={unionUnFill}
              className="w-183px h-[280px]"
              alt="un fill union"
            />
            {/* <img src={unionFill} className="w-184px h-[280px]" alt="union" /> */}
          </div>

          {/* together */}
          <div className="hidden absolute bottom-[86px] left-[50px]  lg_l:block">
            <img
              src={unionUnFill}
              className="w-183px h-[280px]"
              alt="un fill union"
            />
            {/* <img src={unionFill} className="w-183px h-[281px]" alt="union" /> */}
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
