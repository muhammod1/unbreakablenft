import React from "react";
import { logo } from "../assets";
const Footer = () => {
  return (
    <div className="pb-8 mt-14 mx-6 md:mx-20 flex flex-col  items-center">
      <div className="flex  lg:justify-evenly flex-wrap md:flex-nowrap  flex-col sm:flex-row w-full">
        <div className="w-full small:w-[196px] items-center mb-4">
          <h4 className="text-yellow text-sm">About</h4>
          <div className="mt-4 flex flex-col gap-2">
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              NFTS
            </a>
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              Discord community
            </a>
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              Volunteers
            </a>
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              Sponsorship
            </a>
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="w-full small:w-[196px] mb-4">
          <h4 className="text-yellow text-sm">Programmes</h4>
          <div className="mt-4 flex flex-col gap-2">
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              Seminare
            </a>
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              Outreaches
            </a>
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              Donations
            </a>
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              Start for Free
            </a>
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              Sign In
            </a>
          </div>
        </div>
        <div className="w-full small:w-[196px] mb-4">
          <h4 className="text-yellow text-sm">Our story</h4>
          <div className="mt-4 flex flex-col gap-2">
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              About us
            </a>
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              Testimonials
            </a>
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              NFT stories
            </a>
            <a href="#" className="text-[#737373] text-base sm:text-sm">
              Email us
            </a>
          </div>
        </div>
        <div className="max-w-full small:max-w-[369px]">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <p className="text-sm text-grey_p">
            Get the latest updates about our new features and product updates.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-2  ">
            <input
              className="bg-transparent w-full border-[#262626] p-2 rounded-lg border-2 "
              type="email"
              placeholder="enter email address"
            />
            <button className="px-4 py-2 bg-yellow text-black-200 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full bg-[#262626]  rounded-lg h-[1px]"></div>
      <div className="mt-16 flex w-full justify-between">
        <div className="hidden sm:flex gap-3">
          <a href="#" className="text-[#737373] text-base sm:text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-[#737373] text-base sm:text-sm">
            Security
          </a>
          <a href="#" className="text-[#737373] text-base sm:text-sm">
            Sitemap
          </a>
        </div>
        <p className="text-[#737373] text-base sm:text-sm">
          © 2022 Unbroken. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
