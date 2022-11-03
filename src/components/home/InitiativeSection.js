import React from "react";
import { initiativeData } from "../../assets/data";
import InitiativeCard from "./InitiativeCard";

const InitiativeSection = () => {
  return (
    <div className="px-3 sm:px-6 max-w-[1240px] mx-auto">
      <div className="mt-16 max-w-[534px] ">
        <h3 className="font-audio text-4xl  md:text-7xl text-head_white">
          Initiatives
        </h3>
        <p className="text-grey_p mt-2">
          The proceeds from our collection will be used to implement three key
          projects to address high school bullying in Nigeria.
        </p>
      </div>
      {initiativeData.length > 0 && (
        <div className="mt-14   flex gap-4 justify-between flex-wrap">
          {initiativeData.map((data) => (
            <InitiativeCard key={data.title} {...data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default InitiativeSection;
