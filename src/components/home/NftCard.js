import React, { useState } from "react";
import { FaHeartBroken } from "react-icons/fa";
import { nftsample1 } from "../../assets";
const NftCard = ({ image }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="w-[353px] hover:scale-105 transition ease-in-out overflow-hidden flex-shrink-0 rounded-xl h-[427px] relative">
      {/* <div className="absolute hover:hidden inset-0 bg-black-200 opacity-30 "></div> */}
      {hover ? (
        <>
          <img
            src={image}
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
            alt="nftcard"
            className="w-full"
          />
        </>
      ) : (
        <>
          <div className="absolute  z-10 py-1 px-4 rounded-2xl overflow-hidden top-2 right-3">
            <FaHeartBroken className="text-yellow " />
            <div className="bg-[#FAFAFA] opacity-40 -z-10 absolute inset-0"></div>
          </div>
          <img
            src={nftsample1}
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
            alt="nftcard"
            className="w-full"
          />
        </>
      )}
    </div>
  );
};

export default NftCard;
