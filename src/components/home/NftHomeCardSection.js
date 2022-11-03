import React from "react";
import { NftCard1 } from "..";
import { cardData } from "../../assets/NftsData";
import { motion } from "framer-motion";
const NftHomeCardSection = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="mt-20  pl-3 sm:pl-6 max-w-[1240px] mx-auto"
    >
      {cardData.length > 0 && (
        <div className=" h-[460px]  flex items-center gap-4 overflow-x-auto scrollbar-hide">
          {cardData.map((data) => (
            <NftCard1 key={data.id} {...data} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default NftHomeCardSection;
