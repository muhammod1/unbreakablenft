import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import { nftsample1, thunder } from "../../assets";
import { motion } from "framer-motion";
const NftCard = ({ bgImage, icon, title, desc }) => {
  return (
    <motion.div
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }} className="w-[353px] hover:scale-105 transition-all duration-500 group ease-in-out  overflow-hidden flex-shrink-0 rounded-xl h-[427px] relative ">
      <div className="nft__card-cover w-full">
        <div className="nft___side_cover absolute  z-10 py-1 px-4 rounded-2xl overflow-hidden top-2 right-3">
          <FaHeartBroken className="text-yellow " />
          <div className="bg-[#FAFAFA] opacity-40 -z-10 absolute inset-0"></div>
        </div>
        <div className="nft___main_cover">
          <div className=" absolute  z-10 py-1 px-5 rounded-2xl overflow-hidden top-2 right-3">
            <img src={thunder} alt="thunder icon" className="w-[10px]" />
            <div className="bg-yellow -z-10 absolute inset-0"></div>
          </div>
          <div className="flex justify-between items-center w-full text-white mt-2 absolute bottom-0 mb-4 px-4">
            <div>
              <p className="text-2xl">{title}</p>
              <p className="text-sm">
                Price <span className="text-yellow">0.5ETH</span>
              </p>
            </div>
            <img src={icon} alt="nft icons" />
          </div>
        </div>
      </div>

      <img src={bgImage} alt="nftcard" className="w-full" />
    </motion.div>
  );
};

export default NftCard;
