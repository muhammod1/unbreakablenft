import React from "react";

import { Link } from "react-router-dom";

import {
  FAQ,
  HomeHeader,
  InitiativeSection,
  JourneySection,
  LinkButton,
  NftHomeCardSection,
  SchoolSection,
  Sponsors,
} from "../components";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="scrollbar-hide bg-vector1   overflow-y-auto">
      {/* <div className="bg-vector1 hidden md:block w-[1055px]  h-[3196px]  top-14 fixed left-80   -z-10 "></div> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="ellipse1 hidden md:block"
      ></motion.div>
      {/* <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="ellipse2 hidden lg:block"
      ></motion.div> */}
      {/* header section   */}
      <HomeHeader />
      {/* //nft display card section */}
      <NftHomeCardSection />
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="mt-24 mx-2  small: flex"
      >
        <div className="hidden sm:block flex-1 w-full"></div>
        <div className="w-full small:w-[662px] flex flex-col justify-start flex-1  relative">
          <div className="-z-20 ellipse3"></div>
          <p className="text-head_white text-4xl font-audio  small:text-5xl  sm:leading-[79px] sm:text-[72px]">
            <span className="block ">We are</span> Unbroken
          </p>
          <p className="mt-3 text-grey_p">
            In a world where the “weak” are constantly oppressed and looked down
            on, “Unbroken” is borne out of a deep yearning to comfort, rebuild
            and uphold the suppressed.
          </p>
          <div className="mt-[45px]">
            <LinkButton text="Learn More" url="/roadmap" />
          </div>
        </div>
      </motion.div>
      {/* initiative section   */}
      <InitiativeSection />
      {/* Journey section  */}
      <JourneySection />
      {/* schools section */}
      <SchoolSection />
      {/* Sponsors section   */}
      <Sponsors />
      {/* Frequently Asked section   */}
      <FAQ />
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="px-3 sm:px-6 max-w-[1240px] mx-auto "
      >
        <div className="mt-[112px] px-3 flex flex-col sm:flex-row justify-between gap-2 py-2  rounded-md items-center  min-h-[110px] bg-yellow ">
          <div className="flex flex-col lg:gap-10 lg:flex-row lg:justify-between lg:items-center">
            <h4 className="font-audio mx-8 text-2xl">
              <span className="inline sm:block">Become an</span> Unbroken
            </h4>
            <p className="text-[#262626] max-w-[583px] w-full text-lg">
              Join the coolest tribe on Discord , participate in community
              activities, events and programmes
            </p>
          </div>
          <Link
            to="/community"
            className="bg-[#262626] w-full text-center sm:w-fit p-3 rounded-md text-yellow text-sm"
          >
            Join Discord
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
