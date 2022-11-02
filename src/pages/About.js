import React from "react";
import {
  about1,
  about2,
  about3,
  about4,
  about5,
  about6,
  mabout,
} from "../assets";
import { AboutCard1, AboutCard2 } from "../components";

const About = () => {
  return (
    <div className="mt-14   px-4 small:px-6 max-w-[1240px] mx-auto">
      <div>
        <h4 className="text-head_white text-3xl break-words  font-audio small_l:text-5xl sm:text-7xl">
          About <span className="hidden sm:inline">unbroken</span>
          <span className="inline sm:hidden">US</span>
        </h4>
        <p className="text-[#D4D4D4] text-lg">
          Unbroken NFTs is a collection that tells the fictional story of
          fifteen (15) unique characters from diverse cultural backgrounds. They
          were victims of bullying who transitioned to become successful by
          overcoming the pains they went through.
        </p>

        <div className="mt-8 hidden sm:block">
          <p className="text-[#D4D4D4] text-lg ">
            This fictional story was created from the results of our survey,
            which was conducted in February 2022. We received over 450 responses
            within one week, highlighting the ugly experiences of victims in the
            hands of bullies and how those experiences shaped them. About 85% of
            the victims experienced bullying during their high school education.
          </p>
          <p className="text-[#D4D4D4] text-lg mt-6">
            While some anti-bullying organizations in countries like Canada, the
            United Kingdom, and the United States carry out annual projects to
            address the issue of bullying in high schools, we did not find any
            active organizations doing similar things in Nigeria and Africa at
            large.
          </p>
        </div>
      </div>
      <div className="mt-24">
        <h4 className="hidden sm:block text-3xl text-head_white">Our goals</h4>
        <div className="flex mt-8 gap-10 flex-col sm:flex-row text-[#D4D4D4] text-base">
          <div className="max-w-[400px]">
            <h4 className="block text-2xl font-audio sm:hidden text-yellow">
              Goals
            </h4>
            <p>To increase awareness of bullying and its negative impacts</p>
          </div>
          <div className="max-w-[400px]">
            <h4 className="block text-2xl font-audio sm:hidden text-yellow">
              Mission
            </h4>
            <p>
              o create long-term impactful solutions to curb bullying in high
              schools.
            </p>
          </div>
          <div className="max-w-[400px]">
            <h4 className="block text-2xl font-audio sm:hidden text-yellow">
              Vision
            </h4>
            <p>
              To improve the safety and monitoring of student activities on the
              school premises
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 flex max-w-[1120px]  mx-auto gap-4 flex-col sm:items-end sm:flex-row">
        <div className=" w-full h-109px sm:w-[70%]">
          <h4 className=" small:text-[28px] sm:text-[40px] font-audio  text-head_white">
            We are the Unbrokens
          </h4>
          <p className="text-lg text-[#D4D4D4]">
            The proceeds from our collection will help us implement three key
            projects to address bullying in high schools in Nigeria.
          </p>

          <div className="hidden gap-3 w-full  items-end sm:flex ">
            <div className="w-full flex-shrink-1  gap-4 flex flex-col">
              <AboutCard2 aboutImage={about1} />
              <AboutCard2 aboutImage={about2} />
            </div>
            <div className="w-full items-end flex flex-col gap-4 ">
              <AboutCard1 aboutImage={about4} />
              <AboutCard1 aboutImage={about3} />
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-[30%] h-109px  justify-center items-center sm:items-end flex  flex-col gap-5 sm:mt-0">
          <AboutCard1 aboutImage={about6} />
          <AboutCard1 aboutImage={about5} />
          <div className="block sm:hidden ">
            <AboutCard1 aboutImage={mabout} />
            <div className="mt-5"></div>
            <AboutCard1 aboutImage={about5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
