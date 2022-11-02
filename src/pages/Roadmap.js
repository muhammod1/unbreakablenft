import React from "react";
import { Union } from "../assets";

import { roadmapData } from "../assets/data";
import { RoadmapCard } from "../components";

const Roadmap = () => {
  return (
    <>
      {/* roadmap section  */}
      <div className="mt-14 mx-2  small:mx-6 md:mx-20 scrollbar-hide overflow-y-auto">
        <p className="text-[#737373] text-lg">Our Journey starts here</p>
        <h3 className="text-head_white font-audio text-[40px] sm:text-7xl mt-2">
          <span className="block 4xl:inline">Unbroken</span> Roadmap
        </h3>
        <div className="flex  w-full">
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
