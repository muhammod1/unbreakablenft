import React from "react";
import { motion } from "framer-motion";
const HeaderNfts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-[-70px] w-full overflow-hidden stacked"
    >
      <div className="nft-content bg-nftBgImg h:screen  small_l:h-[600px] md:h-[600px] w-full">
        <div className="h-3/4 mt-[20%] mx-auto w-[95%] max-w-[1220px] bg-red-700">
          <h3 className="text-white font-audio  text-[52px] sm:text-[63px] leading-[91%]  md:text-[70px] ">
            <span className="block">Unbroken NFTs</span>{" "}
          </h3>
          <p className="mt-[15px] md:w-3/5 w-[92%] text-grey_p">
            Welcome to our NFT gallery. With your support, we will execute our
            anti-bullying initiatives.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderNfts;
