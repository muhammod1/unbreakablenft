import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { nftsample1 } from "../assets";
import { initiativeData, journeyData, schoolData } from "../assets/data";
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
    <div className="scrollbar-hide overflow-y-auto">
      <div className="bg-vector1 hidden md:block w-[1055px]  h-[3196px]  top-14 fixed left-80   -z-10 "></div>
      <div className="ellipse1 hidden md:block"></div>
      <div className="ellipse2 hidden lg:block"></div>
      <h3 className="text-white font-audio text-3xl small:text-[55px] sm:text-9xl leading-[111%] mt-16 md:mt-24 mx-6 md:mx-20">
        <span className="block">Unbroken</span>{" "}
        <span className="block sm:inline">Against</span> bullying
      </h3>
      <div className="mt-8 mx-2  small:mx-6 md:mx-20 flex flex-col small:flex-row small:items-center">
        <button className="bg-yellow text-black-200 p-1 px-3  rounded-md mr-4">
          Discover NFTs
        </button>

        <button className="flex text-yellow items-center">
          {" "}
          <BiPlayCircle size={24} className="mr-2" /> Watch Vidoe
        </button>
      </div>
      <div className="ml-2  small:ml-6 h-[460px] md:ml-20 mt-16 flex items-center gap-4 overflow-x-auto scrollbar-hide">
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
      <div className="mt-14 mx-2  small:mx-6 md:mx-20 flex">
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

      <div className="mt-16 max-w-[534px]  mx-2  small:mx-6 md:mx-20 ">
        <h3 className="font-audio text-4xl  md:text-7xl text-head_white">
          Initiatives
        </h3>
        <p className="text-grey_p mt-2">
          The proceeds from our collection will be used to implement three key
          projects to address high school bullying in Nigeria.
        </p>
      </div>
      {initiativeData.length > 0 && (
        <div className="mt-14 mx-6 md:mx-20  flex gap-6 flex-wrap">
          {initiativeData.map((data) => (
            <InitiativeCard key={data.title} {...data} />
          ))}
        </div>
      )}

      {/* Journey section  */}
      <div className=" mt-14 mx-2  small:mx-6 md:mx-20">
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
      <div className="mt-14 mx-2  small:mx-6 md:mx-20">
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
    </div>
  );
};

export default Home;
