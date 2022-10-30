import React from "react";
import { event1, event2, event3, faceb, host, instag, linkd, twit } from "../assets";

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
          <div className="py-32 bg-black"></div>
        </div>
        <div className="w-[90%]  p-2 md:p-5 bg-yellow rounded-md ">
          <div className="flex lg:flex-row flex-col  lg:space-x-6 space-x-0 item-center">
            <h1 className="  lg:w-[20%] w-full my-auto my-3 text-[24px] lg:text-[28px] font-audio ">
              <span className="block">Become an Unbroken</span>{" "}
            </h1>
            <p className=" mb-6 lg:w-[50%]  text-[16px] my-auto ">
              Join the coolest tribe on Discord , participate in community
              activities, events and programmes
            </p>
            <button className="sm:my-4 md:my-auto my-auto ml-auto md:ml-auto sm:ml-0 bg-[#262626] py-3 px-3 text-yellow text-[16px]  rounded">
              Join Discord
            </button>
          </div>
        </div>
       
        <div className=" mt-16 flex lg:flex-row flex-col  ">
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
            <div className="flex mt-8 lg:flex-row flex-col lg:justify-between">
              <div class=" rounded mt-8 mr-6  overflow-hidden bg-[#171717] w-full h-full">
                <img
                  className="w-full h-[325px]"
                  src={event1}
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
                   <img src={host} alt="host" className="h-[45px] w-[146px]"/>
                  </span>
                  
                </div>
              </div>
              <div class=" mb-8 rounded overflow-hidden mt-8 bg-[#171717] w-full h-full">
                <img
                  className="w-full h-[325px]"
                  src={event2}
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
                   <img src={host} alt="host" className="h-[45px] w-[146px]"/>
                  </span>
                  
                </div>
              </div>
            </div>
          </div>
          <div class=" rounded overflow-hidden bg-[#171717]  h-full lg:ml-8">
                <img
                  className="w-full h-[325px]"
                  src={event3}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-2 ">
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
                   <img src={host} alt="host" className="h-[45px] w-[146px]"/>
                  </span>
                  
                </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default Community;
