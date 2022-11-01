import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
const Footer = () => {
  return (
    <div className="pb-8 mt-24 mx-6 md:mx-20 flex flex-col items-center">
      <div className="flex gap-5 md:justify-center flex-col sm:flex-row  w-full">
        <div className="max-w-full mb-8 flex sm:items-center flex-col sm:w-1/2">
          <div>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <p className="text-sm text-grey_p">
              Get the latest updates about our new features and product updates.
            </p>
          </div>
        </div>
        <div className="flex sm:w-1/2 flex-wrap small_l:flex-nowrap sm:gap-5 small_l:justify-center">
          <div className="w-full small:w-[196px] items-center mb-4">
            <h4 className="text-yellow text-sm">About</h4>
            <div className="mt-4 flex flex-col gap-2">
              <Link to="/about" className="text-[#737373] text-base sm:text-sm">
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
              <Link to="/nfts" className="text-[#737373] text-base sm:text-sm">
                NFT stories
              </Link>
              <Link to="/nfts" className="text-[#737373] text-base sm:text-sm">
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
