import React from "react";
import { BsTwitter } from "react-icons/bs";

const EventCard = ({ center, title, desc, date, icon, photo, url }) => {
  return (
    <div className="w-[350px]  h-[348px] bg-[#171717] flex flex-col  rounded">
      <div className="w-full h-[350px]   relative">
        <div className="flex gap-2 items-center  absolute  z-10 py-[2px] px-2 rounded-2xl overflow-hidden top-2 right-3">
          <BsTwitter className="text-blue-400 " />
          <p className="text-head_white text-xs">{center}</p>
          <div className="bg-[#000000] opacity-40 -z-10 absolute inset-0"></div>
        </div>
        <div className="absolute inset-0 bg-black-200 opacity-30 "></div>
        <img src={photo} alt="event cover" className="w-full" />
      </div>
      <div className="p-3  w-full ">
        <h4 className="text-[#FAFAFA] font-bold text-lg">{title}</h4>
        <p className="text-grey_p text-xs">{desc}</p>
        <div className="flex mt-4 flex-col small:flex-row items-center justify-between">
          <div className="relative rounded-2xl">
            <p className="text-grey_p text-xs  ">{date}</p>
            {/* <div className="bg-[#d03e3e]  absolute inset-0"></div> */}
          </div>
          <a
            href={url}
            className="bg-yellow  text-xs rounded-lg p-1 small:p-2 px-2 small:px-4"
          >
            Read me
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
