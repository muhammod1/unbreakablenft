import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion, nftrobot } from "../assets";
import { initiativeData, journeyData, schoolData } from "../assets/data";
import { cardData } from "../assets/NftsData";
import {
  FAQ,
  InitiativeCard,
  JourneyCard,
  LinkButton,
  NftCard1,
  SchoolCard,
  Sponsors,
} from "../components";
const Home = () => {
  return (
    <div className="scrollbar-hide max-w-[1240px] mx-auto overflow-y-auto">
      <div className="bg-vector1 hidden md:block w-[1055px]  h-[3196px]  top-14 fixed left-80   -z-10 "></div>
      <div className="ellipse1 hidden md:block"></div>
      <div className="ellipse2 hidden lg:block"></div>
      <div className="mt-16 md:mt-24  flex gap-8 flex-col items-center sm:flex-row justify-between flex-wrap md:flex-nowrap">
        <div className="flex flex-col flex-1 w-full justify-end">
          <h3 className="text-white font-audio text-3xl small:text-[55px] leading-[110%]  xl:text-9xl ">
            <span className="block">Unbroken</span>{" "}
            <span className="block md:inline">Against</span> bullying
          </h3>
          <div className="mt-6 flex flex-col small:flex-row small:items-center">
            <button className="bg-yellow text-black-200 p-1 px-3  rounded-md mr-4">
              Discover NFTs
            </button>
          </div>
        </div>
        <div className="flex-1 w-full">
          {/* <div className="hidden sm:block"></div> */}
          {/* <img className=" w-full" src={motion} alt="motion" /> */}
          <iframe
            className="w-full"
            height="415"
            src="https://www.youtube.com/embed/QsEKICkpQBI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
      {cardData.length > 0 && (
        <div className=" h-[460px] mt-16 flex items-center gap-4 overflow-x-auto scrollbar-hide">
          {cardData.map((data) => (
            <NftCard1 key={data.id} {...data} />
          ))}
        </div>
      )}
      <div className="mt-14 mx-2  small: flex">
        <div className="hidden sm:block flex-1 w-full"></div>
        <div className="w-full small:w-[662px] flex flex-col justify-start flex-1  relative">
          <div className="-z-20 ellipse3"></div>
          <p className="text-head_white text-4xl font-audio  small:text-5xl  sm:leading-[79px] sm:text-[72px]">
            <span className="block ">We are</span> Unbroken
          </p>
          <p className="mt-4 text-grey_p">
            In a world where the “weak” are constantly oppressed and looked down
            on, “Unbroken” is borne out of a deep yearning to comfort, rebuild
            and uphold the suppressed.
          </p>
          <a
            href="#"
            className="bg-yellow flex justify-center items-center w-32 p-3 mt-10 sm:mt-12 md:mt-14 rounded-lg text-black-200"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="mt-16 max-w-[534px]  mx-2  small: ">
        <h3 className="font-audio text-4xl  md:text-7xl text-head_white">
          Initiatives
        </h3>
        <p className="text-grey_p mt-2">
          The proceeds from our collection will be used to implement three key
          projects to address high school bullying in Nigeria.
        </p>
      </div>
      {initiativeData.length > 0 && (
        <div className="mt-14   flex gap-4 justify-between flex-wrap">
          {initiativeData.map((data) => (
            <InitiativeCard key={data.title} {...data} />
          ))}
        </div>
      )}

      {/* Journey section  */}
      <div className=" mt-14 mx-2  small:">
        <p className="text-[#737373] text-lg">Our Journey starts here</p>
        <h3 className="text-head_white font-audio text-3xl small_l:text-[40px] sm:text-7xl mt-2">
          <span className="block 4xl:inline">The Unbroken</span> Roadmap
        </h3>
        {journeyData.length > 0 && (
          <div className="mt-14">
            <div>
              {journeyData.map((data) => (
                <JourneyCard key={data.title} {...data} />
              ))}
            </div>
            <div className="hidden md:flex justify-center mt-16">
              <a className="bg-yellow rounded-lg p-3" href="#">
                Learn More
              </a>
            </div>
          </div>
        )}
      </div>

      {/* schools section */}
      <div className="mt-14 mx-2  small:">
        <div className=" flex gap-5 justify-center flex-wrap ">
          <div
            className=" max-w-[378px] flex md:items-center
        flex-col"
          >
            <h4 className="font-audio text-head_white text-[40px] sm:text-[72px]">
              Selected Schools
            </h4>
            <p className="text-grey_p text-[17px]">
              Discover the many ways in which we help these schools embrace
              technology and implement Anti-bullying strategies .
            </p>
          </div>
          {schoolData.length > 0 &&
            schoolData.map((data) => <SchoolCard key={data.name} {...data} />)}
        </div>
        <div className="flex justify-center">
          <LinkButton text="View more" url="#" />
        </div>
      </div>
      {/* Sponsors section   */}
      <Sponsors />

      {/* Frequently Asked section   */}
      <FAQ />

      <div className="mt-14 flex flex-col sm:flex-row justify-between gap-2 px-4 py-2 sm:px-10 rounded-md items-center mx-2 min-h-[110px] bg-yellow  small:">
        <div className="flex flex-col lg:gap-10 lg:flex-row lg:justify-between lg:items-center">
          <h4 className="font-audio text-2xl">
            <span className="inline sm:block">Become an</span> Unbroken
          </h4>
          <p className="text-[#262626] max-w-[583px] w-full text-lg">
            Join the coolest tribe on Discord , participate in community
            activities, events and programmes
          </p>
        </div>
        <button className="bg-[#262626] p-3 rounded-md text-yellow text-sm">
          Join Discord
        </button>
      </div>
    </div>
  );
};

export default Home;
