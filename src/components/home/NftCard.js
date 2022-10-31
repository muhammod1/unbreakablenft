import React from "react";
import { FaHeartBroken } from "react-icons/fa";

const NftCard = ({ bgImage, icon, title, desc }) => {
  return (
    <div className="w-[353px] hover:scale-105 transition ease-in-out overflow-hidden flex-shrink-0 rounded-xl h-[427px] relative">
      <div className="nft__card-cover">
        <div className="nft___side_cover absolute  z-10 py-1 px-4 rounded-2xl overflow-hidden top-2 right-3">
          <FaHeartBroken className="text-yellow " />
          <div className="bg-[#FAFAFA] opacity-40 -z-10 absolute inset-0"></div>
        </div>
        <div className="nft___main_cover">
          <p className="text-sm bg-yellow mt-3 absolute mr-4 top-0 right-0 px-[8px] py-[6px] rounded-2xl">
            {desc}
          </p>
          <p className="text-white mt-2 absolute bottom-0 mb-4 ml-4">{title}</p>
        </div>
      </div>
      <img src={bgImage} alt="nftcard" className="w-full" />
    </div>
  );
};

export default NftCard;
