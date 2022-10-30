import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import { schoolBatch, schoolImage } from "../../assets";

const SchoolCard = ({ badge, name, address, photo, videoLink }) => {
  return (
    <div className="p-4 w-full  small_l:w-[361px] h-60 small_l:h-[387px] hover:scale-105 transition ease-in-out overflow-hidden flex-shrink-0 rounded-md relative">
      <div className="flex flex-col justify-between h-full">
        <div className="w-12 small_l:w-[78px]">
          <img src={badge} />
        </div>
        <div>
          <h4 className="text-head_white text-lg small_l:text-[32px]">
            {name}
          </h4>
          <p className="text-head_white">{address}</p>
        </div>
        <button className="flex text-yellow items-center">
          {" "}
          <BiPlayCircle size={26} className="mr-2" /> Watch Vidoe
        </button>
      </div>

      {/* <div className="absolute inset-0 bg-black-200 opacity-30 "></div> */}
      <img
        src={photo}
        alt="schoolimages"
        className="w-full -z-10 absolute inset-0"
      />
    </div>
  );
};

export default SchoolCard;
