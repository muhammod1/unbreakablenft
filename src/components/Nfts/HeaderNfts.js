import React from "react";
import { motion } from "framer-motion";
const HeaderNfts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-[-70px] w-full overflow-hidden stacked"
    >
      <div className="nft-content bg-nftBgImg h-[600px]  small_l:h-[600px] md:h-[600px] w-full">
        <div className="h-[300px] mobile:h-3/4 mt-[35%] mobile:mt-[25%] md:mt[18%] mx-auto w-[95%] max-w-[1220px] ">
          <h3 className="text-white font-audio text-[40px] mobile:text-[50px] sm:text-[63px] leading-[91%]  md:text-[70px] ">
            <span className="block">Unbroken NFTs</span>{" "}
          </h3>
          <p className="mt-[15px] small_l:w-[90%] mobile_l:w-[65%] w-[100%] text-grey_p">
            Welcome to our NFT gallery. With your support, we will execute <span className="md:block"> our
            anti-bullying initiatives.</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderNfts;
