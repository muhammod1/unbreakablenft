import React from "react";
import { vector } from "../assets";

const Roadmap = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="mt-16 max-w-[534px] mx-6 md:mx-20 ">
          <p className="text-gray-400 mt-2 ">Our Journey starts here</p>
          <h3 className="text-white font-audio text-[52px] sm:text-6xl leading-[111%]  md:mt-2  ">
            <span className="block">Unbroken</span>{" "}
            <span className="block sm:inline">Roadmap</span>
          </h3>
        </div>
        <div className="flex ">
          <div className="mt-16  mx-6 md:mx-20 pl-20 flex ">
            <p className="text-gray-400 mt-10 mr-10 ">2022 </p>
            <div className="flex ">
             <img src={vector} alt="vector" className="h-[309px] w-[183px]"></img>
             <span className="mt-12 text-yellow h-[21px] w-[20px] ">M1</span>
             </div>

          </div>
          <div>
            <div className="mt-16 max-w-[534px]  ">
              <h3 className="text-white font-audio text-[24px] sm:text-4xl leading-[111%] ">
                Pre-launch activities
              </h3>
              <p className="text-grey_p mt-2">
                Design and develop the website, create marketing plans, finish
                NFT artworks, plan and document anti-bullying initiatives
              </p>
            </div>
            <div className="mt-16 max-w-[534px]">
              <h3 className="text-white font-audio text-[24px] sm:text-4xl leading-[111%] ">
                NFT & website Launch
              </h3>
              <p className="text-grey_p mt-2">
                Officially launch the NFT artworks and Unbroken website
              </p>
            </div>
            <div className="mt-16 max-w-[534px] ">
              <h3 className="text-white font-audio text-[24px] sm:text-4xl leading-[111%] ">
                Community building
              </h3>
              <p className="text-grey_p mt-2">
                Create social media pages, setup and onboard community and
                contributor platforms
              </p>
            </div>
            <div className="mt-16 max-w-[534px]  ">
              <h3 className="text-white font-audio text-[24px] sm:text-4xl leading-[111%] ">
                Partnerships & NFT Sales
              </h3>
              <p className="text-grey_p mt-2">
                Host NFTs on Opensea, presale publicity and minting. Call for
                partnership.
              </p>
            </div>
            <div className="mt-16 max-w-[534px]  ">
              <h3 className="text-white font-audio text-[24px] sm:text-4xl leading-[111%] ">
                Groundwork for execution
              </h3>
              <p className="text-grey_p mt-2">
                Pre-launch publicity and activities, Launch NFT, website,
                Pre-launch publicity and activities, Launch NFT, website,
                Pre-launch publicity and activities, Launch NFT, website,
                Pre-launch publicity and activities, Launch NFT, website
              </p>
            </div>
            <div className="mt-16 max-w-[534px]  ">
              <h3 className="text-white font-audio text-[24px] sm:text-4xl leading-[111%] ">
                Execution of projects
              </h3>
              <p className="text-grey_p mt-2">
                Pre-launch publicity and activities, Launch NFT, website,
                Pre-launch publicity and activities, Launch NFT, website,
                Pre-launch publicity and activities, Launch NFT, website,
                Pre-launch publicity and activities, Launch NFT, website
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
