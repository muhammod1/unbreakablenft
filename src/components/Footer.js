import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { facebookIcon, instagramIcon, logo } from "../assets";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="pb-8  mt-24  flex flex-col items-center"
    >
      <div className="px-3 sm:px-6 max-w-[1240px] mx-auto">
        <div className="flex gap-5 justify-center flex-wrap md:flex-nowrap flex-col md:flex-row  w-full">
          <div className="w-full mb-8 flex sm:items-center flex-col md:w-1/2">
            <div>
              <div>
                <img src={logo} alt="logo" />
              </div>
              <p className="text-sm text-grey_p">
                Get the latest updates about our new features and product
                updates.
              </p>
              <div className="mt-6 flex gap-3">
                <BsTwitter color="#1DA1F2" size={24} />
                <AiFillLinkedin size={25} color="#0A66C2" />
                <img src={instagramIcon} className="w-6" alt="instagram icon" />
                <img src={facebookIcon} className="w-6" alt="facebook icon" />
              </div>
            </div>
          </div>
          <div className="flex sm:w-1/2 flex-wrap md:flex-nowrap sm:gap-5 sm:justify-center">
            <div className="w-full small:max-w-[196px] items-center mb-4">
              <h4 className="text-yellow text-sm">About</h4>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  to="/about"
                  className="text-[#737373] text-base sm:text-sm"
                >
                  About us
                </Link>
                <Link
                  to="/partnership"
                  className="text-[#737373] text-base sm:text-sm"
                >
                  Partner with us
                </Link>
                <Link
                  to="/donate"
                  className="text-[#737373] text-base sm:text-sm"
                >
                  Donations
                </Link>
                <Link
                  to="/contact"
                  className="text-[#737373] text-base sm:text-sm"
                >
                  Email us
                </Link>
              </div>
            </div>
            <div className="w-full small:w-[196px] mb-4">
              <h4 className="text-yellow text-sm">Unbroken NFT</h4>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  to="/nfts"
                  className="text-[#737373] text-base sm:text-sm"
                >
                  NFT stories
                </Link>
                <Link
                  to="/nfts"
                  className="text-[#737373] text-base sm:text-sm"
                >
                  NFT collection
                </Link>
              </div>
            </div>
            <div className="w-full small:w-[196px] mb-4">
              <h4 className="text-yellow text-sm">Programmes</h4>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  to="/community"
                  className="text-[#737373] text-base sm:text-sm"
                >
                  School programmes
                </Link>
                <Link
                  to="/events"
                  className="text-[#737373] text-base sm:text-sm"
                >
                  Online events
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 w-full bg-[#262626]  rounded-lg h-[1px]"></div>
        <div className="mt-16 flex w-full justify-center">
          <p className="text-[#737373] text-base sm:text-sm">
            © 2022 Unbroken. All rights reserved.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
