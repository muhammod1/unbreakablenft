import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronDown } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { Dropdown } from ".";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="w-full   bg-[#1E1E1E]  top-0 md:h-auto nav-bg">
      <div className="justify-between px-4  mx-auto  md:items-center md:flex md:px-4 lg:px-8">
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
            className={`flex-1 h-screen md:h-3 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center  space-y-12 md:flex md:space-x-2 lg:space-x-6 md:space-y-0">
              <li
                onClick={() => setNavbar(false)}
                className="text-[#E5E5E5] text-lg md:text-sm"
              >
                <Link to="nfts">UnbrokenNFTs</Link>
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="text-[#E5E5E5] text-lg md:text-sm"
              >
                <Link to="/roadmap">Readmap</Link>
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="text-[#E5E5E5] text-lg md:text-sm"
              >
                <Link to="/program">Programmes</Link>
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="flex items-center md:justify-center  text-[#E5E5E5] text-lg md:text-sm"
              >
                <Link className="mr-3" to="/partnership">
                  Partnership
                </Link>
                {/* <BsChevronDown /> */}

                {/* <div className="max-w-7 absolute md:top-24">
                  <p>What is the value</p>
                  <p>Second Item</p>
                </div> */}
              </li>
              <li
                onClick={() => setNavbar(false)}
                className="flex items-center md:justify-center  text-[#E5E5E5] text-lg md:text-sm"
              >
                <Link className="mr-3" to="/about">
                  About
                </Link>
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
            className="px-2 py-2 lg:px-4 bg-yellow  rounded-md shadow"
          >
            Join community
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
