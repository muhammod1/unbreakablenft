import React from "react";
import {
  circle,
  event1,
  event2,
  event3,
  faceb,
  frame,
  host,
  instag,
  linkd,
  twit,
} from "../assets";
import { motion } from "framer-motion";
import { BsTwitter } from "react-icons/bs";
const Community = () => {
  return (
    <>
      {/* community section  */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-14 flex-col scrollbar-hide px-3 sm:px-6 max-w-[1240px] mx-auto overflow-y-auto"
      >
        <p className="text-[#737373] text-lg">Our Community</p>
        <h3 className="text-head_white font-audio text-[40px] sm:text-7xl mt-2">
          <span className="block 4xl:inline">Join other Unbrokens</span> around
          the world.
        </h3>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-[534px] "
        >
          <h3 className="font-audio text-2xl  md:text-2xl text-head_white">
            Follow us on social media
          </h3>
          <p className="text-grey_p text-[14.5px] mt-2 ">
            Keep up with all our activities and join other Unbrokens around the
            world!
          </p>
        </motion.div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="mt-4 max-w-[534px] h-[110px] flex mx-[-10px]  "
        >
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
        </motion.div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-[100%]  p-5 md:p-5 bg-yellow rounded-md">
            <div className="flex flex-col gap-4 md:flex-row item-center justify-between">
              <h1 className="w-full md:w-[30%] mx-8 text-[28px] font-audio ">
                <span className="block">Become an Unbroken</span>{" "}
              </h1>
              <p className="h-fit my-auto mr-20 text-[16px]">
                Welcome to our NFT gallery. With your support, we will execute
                our anti-bullying initiatives.
              </p>
              <button className="h-fit  md:w-[12%] my-auto bg-[#262626] py-3 px-2 text-yellow text-[14px] rounded">
                join discord
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className=" mt-16 flex lg:flex-row items-center justify-center flex-col  "
        >
          <div className="  ">
            <div className="  ">
              <h3 className="font-audio text-4xl   md:text-7xl text-head_white">
                Community <br /> townhall sessions
              </h3>
              <p className="text-grey_p lg:w-[500px] w-[300px] mt-2">
                Share your story, listen to stories, help change the narrative
                and reality of bullying.
              </p>
            </div>
            <div className="flex mt-8 flex-col sm:flex-row">
              <div className=" rounded mt-8 sm:mr-6 max-w-[350px] overflow-hidden bg-[#171717] h-full relative">
              <div className="flex gap-2 items-center  absolute  z-10 py-[5px] px-3 rounded-2xl overflow-hidden top-2 right-3">
          <BsTwitter className="text-blue-400 " />
          <p className="text-head_white text-xs">Twitter Spaces</p>
          <div className="bg-[#000000] opacity-40 -z-10 absolute inset-0"></div>
        </div>
                <img
                  className="w-full object-cover h-[325px]"
                  src={event1}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-2">
                  <div className="font-bold text-xl text-white mb-2">
                    Workshop: Changing the narrative - Anti-bullying{" "}
                  </div>
                  <p className="text-grey_p text-base">
                    #respectme. The Anti-bullying alliance, join the movement,
                    help make schools safer more kids
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block   py-1 text-sm font-semibold  mr-2 mb-2">
                    <div className="  md:w-fit py-1 px-3 bg-[#262626] flex   rounded-[8px] ">
                      <img src={circle} className=" my-auto mr-2 w-[37px] h-[37px]"/>
                      <div className="flex  flex-col">
                         <p className="text-[10px]  text-[#A3A3A3] Poppins">Host</p>
                         <p className="text-[12px]  text-[#FAFAFA] Poppins">Oluchi Enebeli</p>
                      </div>
                     
                    </div>
                  </span>
                </div>
              </div>
              <div className=" mb-8 rounded overflow-hidden mt-8 bg-[#171717] max-w-[350px] h-full  relative">
              <div className="flex gap-2 items-center  absolute  z-10 py-[5px] px-3 rounded-2xl overflow-hidden top-2 right-3">
          <BsTwitter className="text-blue-400 " />
          <p className="text-head_white text-xs">Twitter Spaces</p>
          <div className="bg-[#000000] opacity-40 -z-10 absolute inset-0"></div>
        </div>
                <img
                  className="w-full object-cover h-[325px]"
                  src={event2}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-2">
                  <div className="font-bold text-xl text-white mb-2">
                    Workshop: Changing the narrative - Anti-bullying{" "}
                  </div>
                  <p className="text-grey_p text-base">
                    #respectme. The Anti-bullying alliance, join the movement,
                    help make schools safer more kids
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block   py-1 text-sm font-semibold  mr-2 mb-2">
                    <div className="  md:w-fit py-1 px-3 bg-[#262626] flex   rounded-[8px] ">
                      <img src={circle} className=" my-auto mr-2 w-[37px] h-[37px]"/>
                      <div className="flex  flex-col">
                         <p className="text-[10px]  text-[#A3A3A3] Poppins">Host</p>
                         <p className="text-[12px]  text-[#FAFAFA] Poppins">Oluchi Enebeli</p>
                      </div>
                     
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded max-w-[350px] overflow-hidden bg-[#171717] relative h-full lg:ml-8">
          <div className="flex gap-2 items-center  absolute  z-10 py-[5px] px-3 rounded-2xl overflow-hidden top-2 right-3">
          <BsTwitter className="text-blue-400 " />
          <p className="text-head_white text-xs">Twitter Spaces</p>
          <div className="bg-[#000000] opacity-40 -z-10 absolute inset-0"></div>
        </div>
            <img
              className="w-full object-cover h-[325px]"
              src={event3}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-2 ">
              <div className="font-bold text-xl text-white mb-2">
                Workshop: Changing the narrative - Anti-bullying{" "}
              </div>
              <p className="text-grey_p text-base">
                #respectme. The Anti-bullying alliance, join the movement, help
                make schools safer more kids
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            <span className="inline-block   py-1 text-sm font-semibold  mr-2 mb-2">
                    <div className="  md:w-fit py-1 px-3 bg-[#262626] flex   rounded-[8px] ">
                      <img src={circle} className=" my-auto mr-2 w-[37px] h-[37px]"/>
                      <div className="flex  flex-col">
                         <p className="text-[10px]  text-[#A3A3A3] Poppins">Host</p>
                         <p className="text-[12px]  text-[#FAFAFA] Poppins">Oluchi Enebeli</p>
                      </div>
                     
                    </div>
                  </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Community;
