import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import { thunder } from "../../assets";
import { motion } from "framer-motion";
const NftCard = ({ bgImage, icon, title, desc }) => {
  return (
    <div className="w-[353px] hover:scale-105 group transition-all ease-linear duration-300   overflow-hidden flex-shrink-0 rounded-xl h-[427px] relative ">
      <div className=" w-full">
        <div className=" absolute  z-10 py-1 px-4 rounded-2xl overflow-hidden top-2 right-3 group-hover:hidden">
          <FaHeartBroken className="text-yellow " />
          <div className="bg-[#FAFAFA] opacity-40 -z-10 absolute inset-0"></div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="nft___main_cover hidden group-hover:block"
        >
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
        </motion.div>
      </div>
      <motion.div
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="nft__side-cover group-hover:hidden"
      ></motion.div>
      <img src={bgImage} alt="nftcard" className="w-full" />
    </div>
  );
};

export default NftCard;
