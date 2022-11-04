import React from "react";
import { unionFill, unionFill2, unionUnFill, unionUnFill2 } from "../assets";

import { roadmapData } from "../assets/data";
import { RoadmapCard } from "../components";
import { motion } from "framer-motion";
const Roadmap = () => {
  return (
    <>
      {/* roadmap section  */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-14 px-3 sm:px-6 max-w-[1240px] mx-auto "
      >
        <p className="text-[#737373] text-lg">Our Journey starts here</p>
        <h3 className="text-head_white font-audio text-[40px] sm:text-7xl mt-2">
          <span className="block 4xl:inline">Unbroken</span> Roadmap
        </h3>
        <div className="flex relative w-full">
          <div className="hidden absolute z-50  top-[77px] left-[50px] lg_l:block">
            <img src={unionFill} className="w-183px h-[281px]" alt="union" />
          </div>
          <div className="hidden z-40 absolute top-[288px] left-[50px]  lg_l:block">
            {roadmapData[2].isCompleted ? (
              <img src={unionFill} className="w-183px h-[280px]" alt="union" />
            ) : (
              <img
                src={unionUnFill}
                className="w-183px h-[280px]"
                alt="un fill union"
              />
            )}
          </div>
          <div className="hidden z-30 absolute top-[499px] left-[50px]  lg_l:block">
            {roadmapData[3].isCompleted ? (
              <img src={unionFill} className="w-183px h-[280px]" alt="union" />
            ) : (
              <img
                src={unionUnFill}
                className="w-183px h-[280px]"
                alt="un fill union"
              />
            )}
          </div>
          <div className="hidden z-10 absolute bottom-[297px] left-[50px]  lg_l:block">
            {roadmapData[4].isCompleted ? (
              <img src={unionFill} className="w-183px h-[280px]" alt="union" />
            ) : (
              <img
                src={unionUnFill}
                className="w-183px h-[280px]"
                alt="un fill union"
              />
            )}
          </div>

          {/* together */}
          <div className="hidden absolute bottom-[86px] left-[50px]  lg_l:block">
            {roadmapData[5].isCompleted ? (
              <img src={unionFill} className="w-183px h-[280px]" alt="union" />
            ) : (
              <img
                src={unionUnFill}
                className="w-183px h-[280px]"
                alt="un fill union"
              />
            )}
          </div>

          <div className="hidden absolute -z-20 bottom-[-73px] left-[50px]  lg_l:block">
            {roadmapData[5].isCompleted ? (
              <div>
                <img
                  src={unionFill2}
                  className="w-183px h-[160px]"
                  alt="un fill union"
                />
                <h4 className="absolute top-20 right-12 text-lg text-yellow">
                  Continue.
                </h4>
              </div>
            ) : (
              <div>
                <img
                  src={unionUnFill2}
                  className="w-183px h-[160px]"
                  alt="un fill union"
                />
                <h4 className="absolute top-20 ight-12 text-lg text-[#404040]">
                  Continue.
                </h4>
              </div>
            )}
          </div>

          {roadmapData.length > 0 && (
            <div className="w-full">
              {roadmapData.map((data, index) => (
                <RoadmapCard key={data.title} {...data} indexId={index} />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Roadmap;
