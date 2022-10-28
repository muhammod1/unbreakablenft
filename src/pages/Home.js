import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import { nftsample1 } from "../assets";
import { NftCard1 } from "../components";
const Home = () => {
  return (
    <div className="scrollbar-hide overflow-y-auto">
      <div className="bg-vector1 hidden md:block w-[1055px]  h-[3196px]  top-14 fixed left-80   -z-10 "></div>
      <div className="ellipse1 hidden md:block"></div>
      <div className="ellipse2 hidden lg:block"></div>
      <h3 className="text-white font-audio text-[52px] sm:text-9xl leading-[111%] mt-16 md:mt-24 mx-6 md:mx-20">
        <span className="block">Unbroken</span>{" "}
        <span className="block sm:inline">Against</span> bullying
      </h3>
      <div className="mt-8 mx-6 md:mx-20 flex items-center">
        <button className="bg-yellow text-black-200 p-1 px-3  rounded-md mr-4">
          Discover NFTs
        </button>

        <p className="flex text-yellow cursor-pointer items-center">
          {" "}
          <BiPlayCircle className="mr-2" /> Watch Vidoe
        </p>
      </div>
      <div className="ml-6 md:ml-20 mt-16 flex gap-4 overflow-x-auto scrollbar-hide">
        {/* this is were you map through your data and call a single card  data.map((val) => <NftCard1 key={val.id} image={val.image}/>) */}
        <NftCard1 image={nftsample1} />
        <NftCard1 image={nftsample1} />
        <NftCard1 image={nftsample1} />
        <NftCard1 image={nftsample1} />
        <NftCard1 image={nftsample1} />
        <NftCard1 image={nftsample1} />
        <NftCard1 image={nftsample1} />
        <NftCard1 image={nftsample1} />
      </div>
    </div>
  );
};

export default Home;
