import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronDown } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { logo } from "../assets";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full  top-0 md:h-auto">
      <div className="justify-between px-4  mx-auto  md:items-center md:flex md:px-6 lg:px-16">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link onClick={() => setNavbar(false)} to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2  rounded-md outline-none focus:border-[#FAFAFA] focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <CgClose className="w-6 h-6" color="#FAFAFA" size={25} />
                ) : (
                  <GiHamburgerMenu
                    className="w-6 h-6"
                    color="#FAFAFA"
                    size={25}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1    md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className=" items-center justify-center  space-y-12 md:flex md:space-x-2 lg:space-x-4 md:space-y-0">
              <li
                onClick={() => setNavbar(false)}
                className="text-[#E5E5E5] text-lg md:text-sm"
              >
                <Link to="nfts">UnbrokenNFTs</Link>
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="text-[#E5E5E5]  text-lg md:text-sm"
              >
                <Link to="/roadmap">Readmap</Link>
              </li>
              <li className="group relative inline-block  text-[#E5E5E5] text-lg md:text-sm">
                <button className="flex items-center rounded py-2 ">
                  Programmes
                  <BsChevronDown className="ml-1" />
                </button>
                <ul className="absolute z-50 hidden w-[162px] pt-1 text-grey_p group-hover:block ">
                  <li onClick={() => setNavbar(false)} className="">
                    <Link
                      className="whitespace-no-wrap block rounded-t bg-[#0C0B09] py-2 px-4"
                      to="/program"
                    >
                      Programmes
                    </Link>
                  </li>
                  <li onClick={() => setNavbar(false)} className="">
                    <Link
                      className="whitespace-no-wrap block bg-[#0C0B09] py-2 px-4"
                      to="/events"
                    >
                      Event
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="flex items-center md:justify-center  text-[#E5E5E5] text-lg md:text-sm"
              >
                <Link className="" to="/partnership">
                  Partnership
                </Link>
              </li>
              <li className="group relative inline-block  text-[#E5E5E5] text-lg md:text-sm">
                <button className="flex items-center rounded py-2 ">
                  About
                  <BsChevronDown className="ml-1" />
                </button>
                <ul className="absolute z-50 hidden w-[162px] pt-1 text-grey_p  group-hover:block ">
                  <li onClick={() => setNavbar(false)} className="">
                    <Link
                      className="whitespace-no-wrap block rounded-t bg-[#0C0B09] py-2 px-4"
                      to="/about"
                    >
                      About us
                    </Link>
                  </li>
                  <li onClick={() => setNavbar(false)} className="">
                    <Link
                      className="whitespace-no-wrap block bg-[#0C0B09] py-2 px-4"
                      to="/contact"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="mt-3 space-y-2  md:hidden ">
              <Link
                to="/community"
                onClick={() => setNavbar(false)}
                className="inline-block max-w-xs bg-yellow w-full px-4 py-2 text-center  rounded-md shadow"
              >
                Join community
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <Link
            to="/community"
            className="px-[5px] py-2 lg:px-4 bg-yellow  rounded-md shadow"
          >
            Join community
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
