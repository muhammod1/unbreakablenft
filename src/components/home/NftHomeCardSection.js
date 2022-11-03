import React from "react";
import { NftCard1 } from "..";
import { cardData } from "../../assets/NftsData";

const NftHomeCardSection = () => {
  return (
    <div className=" pl-3 sm:pl-6 max-w-[1240px] mx-auto">
      {cardData.length > 0 && (
        <div className=" h-[460px] mt-16 flex items-center gap-4 overflow-x-auto scrollbar-hide">
          {cardData.map((data) => (
            <NftCard1 key={data.id} {...data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NftHomeCardSection;
