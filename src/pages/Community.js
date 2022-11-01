import React from "react";
import {
  discord1,
  discord2,
  discord3,
  faceb,
  frame,
  host,
  instag,
  linkd,
  twit,
} from "../assets";
import { FaHeartBroken } from "react-icons/fa";
const Community = () => {
  return (
    <>
      {/* community section  */}
      <div className="mt-14 mx-6 md:mx-20 flex-col scrollbar-hide overflow-y-auto">
        <p className="text-[#737373] text-lg">Our Community</p>
        <h3 className="text-head_white font-audio text-[40px] sm:text-7xl mt-2">
          <span className="block 4xl:inline">Join other Unbrokens</span> around
          the world.
        </h3>
        <div className="mt-16 max-w-[534px] ">
          <h3 className="font-audio text-2xl  md:text-2xl text-head_white">
            Follow us on social media
          </h3>
          <p className="text-grey_p mt-2 ">
            Keep up with all our activities and join other Unbrokens around the
            world!
          </p>
        </div>
        <div className="mt-4 max-w-[534px] h-[110px] flex mx-[-10px]  ">
          <div className="mx-2">
            <img src={twit} alt="instagram" />
          </div>
          <div className="mx-2">
            <img src={linkd} alt="linkdln" />
          </div>
          <div className="mx-2">
            <img src={instag} alt="instagram" />
          </div>
          <div className="mx-2">
            <img src={faceb} alt="facebook" />
          </div>
        </div>
        <div className=" ">
          <div className="w-[100%]  p-5 md:p-5 bg-yellow rounded-md">
            <div className="flex flex-col gap-4 md:flex-row item-center justify-between">
              <h1 className="w-full md:w-[20%] text-[28px] font-audio ">
                <span className="block">Become an Unbroken</span>{" "}
              </h1>
              <p className="h-fit my-auto mr-20 text-[16px]">
                Welcome to our NFT gallery. With your support, we will execute
                our anti-bullying initiatives.
              </p>
              <button className="h-fit  md:w-[30%] my-auto bg-[#262626] py-3 px-2 text-yellow text-[14px] rounded">
                join discord
              </button>
            </div>
          </div>
        </div>

        <div className=" mt-16 flex lg:flex-row justify-center flex-col  ">
          <div className="  ">
            <div className="  ">
              <h3 className="font-audio text-4xl  md:text-7xl text-head_white">
                Community <br /> townhall sessions
              </h3>
              <p className="text-grey_p lg:w-[500px] w-[300px] mt-2">
                Share your story, listen to stories, help change the narrative
                and reality of bullying.
              </p>
            </div>
            <div className="flex mt-8 flex-col sm:flex-row">
              <div class=" rounded mt-8 mr-6 max-w-[350px] overflow-hidden bg-[#171717] h-full relative">
                <div className="absolute  z-10  rounded-2xl overflow-hidden top-2 right-3">
                  <img src={frame} alt="frame" className="h-[25px] w-[100px]" />
                  <div className="bg-[#FAFAFA] opacity-40 -z-10 absolute inset-0"></div>
                </div>
                <img
                  className="w-full h-[325px]"
                  src={discord1}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-2">
                  <div class="font-bold text-xl text-white mb-2">
                    Workshop: Changing the narrative - Anti-bullying{" "}
                  </div>
                  <p class="text-grey_p text-base">
                    #respectme. The Anti-bullying alliance, join the movement,
                    help make schools safer more kids
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block   py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <img src={host} alt="host" className="h-[45px] w-[146px]" />
                  </span>
                </div>
              </div>
              <div class=" mb-8 rounded overflow-hidden mt-8 bg-[#171717] max-w-[350px] h-full  relative">
                <div className="absolute  z-10  rounded-2xl overflow-hidden top-2 right-3">
                  <img src={frame} alt="frame" className="h-[25px] w-[100px]" />
                  <div className="bg-[#FAFAFA] opacity-40 -z-10 absolute inset-0"></div>
                </div>
                <img
                  className="w-full h-[325px]"
                  src={discord2}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-2">
                  <div class="font-bold text-xl text-white mb-2">
                    Workshop: Changing the narrative - Anti-bullying{" "}
                  </div>
                  <p class="text-grey_p text-base">
                    #respectme. The Anti-bullying alliance, join the movement,
                    help make schools safer more kids
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block   py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <img src={host} alt="host" className="h-[45px] w-[146px]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class=" rounded max-w-[350px] overflow-hidden bg-[#171717] relative h-full lg:ml-8">
            <div className="absolute  z-10  rounded-2xl overflow-hidden top-2 right-3">
              <img src={frame} alt="frame" className="h-[25px] w-[100px]" />
              <div className="bg-[#FAFAFA] opacity-40 -z-10 absolute inset-0"></div>
            </div>
            <img
              className="w-full h-[325px]"
              src={discord3}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-2 ">
              <div class="font-bold text-xl text-white mb-2">
                Workshop: Changing the narrative - Anti-bullying{" "}
              </div>
              <p class="text-grey_p text-base">
                #respectme. The Anti-bullying alliance, join the movement, help
                make schools safer more kids
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block   py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={host} alt="host" className="h-[45px] w-[146px]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
