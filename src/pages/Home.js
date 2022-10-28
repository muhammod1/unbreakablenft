import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import { nftsample1 } from "../assets";
import { initiativeData } from "../assets/data";
import { InitiativeCard, NftCard1 } from "../components";
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
      <div className="ml-6 h-[460px] md:ml-20 mt-16 flex items-center gap-4 overflow-x-auto scrollbar-hide">
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
      <div className="mt-14 mx-6 md:mx-20 flex">
        <div className="hidden sm:block flex-1 w-full"></div>
        <div className="w-[662px] flex flex-col justify-start flex-1  relative">
          <div className="-z-20 ellipse3"></div>
          <p className="text-head_white font-audio leading-[53px]  sm:leading-[79px] sm:text-[72px] text-5xl">
            <span className="block ">We are</span> Unbroken
          </p>
          <p className="mt-4 text-grey_p">
            In a world where the “weak” are constantly oppressed and looked down
            on, “Unbroken” is borne out of a deep yearning to comfort, rebuild
            and uphold the suppressed.
          </p>
          <button className="bg-yellow w-32 p-3 mt-10 sm:mt-12 md:mt-14 rounded-lg text-black-200">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-16 max-w-[534px] mx-6 md:mx-20 ">
        <h3 className="font-audio text-4xl  md:text-7xl text-head_white">
          Initiatives
        </h3>
        <p className="text-grey_p mt-2">
          The proceeds from our collection will be used to implement three key
          projects to address high school bullying in Nigeria.
        </p>
      </div>
      <div className="mt-14 mx-6 md:mx-20  flex gap-6 flex-wrap">
        {initiativeData.map((data) => (
          <InitiativeCard {...data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
