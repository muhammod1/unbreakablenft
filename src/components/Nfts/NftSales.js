import React from "react";

const NftSales = () => {
  return (
    <div className="py-32 px-4 small:px-6 max-w-[1240px] mx-auto bg-[black]">
      <div className=" p-5 md:p-5 bg-yellow rounded-md">
        <div className="flex flex-col gap-4 md:flex-row item-center justify-between">
          <h1 className="w-full md:w-[30%] text-[28px] font-audio ">
            <span className="block">Buy an Unbroken</span>{" "}
          </h1>
          <p className="h-fit my-auto text-[16px]">
            Welcome to our NFT gallery. With your support, we will execute our
            anti-bullying initiatives.
          </p>
          <button className="h-fit md:w-[30%] my-auto bg-[#262626] py-2 px-2 text-yellow text-[14px] rounded">
            View on Opensea
          </button>
        </div>
      </div>
    </div>
  );
};

export default NftSales;
