import React from "react";
import { faceb, instag, linkd, twit, mail } from "../assets";

import { BsDiscord } from "react-icons/bs";
import {FiMail} from 'react-icons/fi'

import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="h-screen flex ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="hidden justify-start md:flex w-full lg:w-1/2 bg-contact bg-cover  bg-no-repeat
   items-end"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex justify-center mt-20   md:mt-20 md:ml-8  "
      >
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.7 }}
          className="px-3 sm:px-8 max-w-[1240px] mx-auto"
        >
          <div className=" max-w-[534px] ">
            <h3 className="font-audio text-4xl md:w-[474px]  md:text-[40px] text-yellow">
              We would love to hear from you
            </h3>
            <p className="text-grey_p text-[14px] mt-2">
              Want to become a partner or have a story to share?
            </p>
          </div>
          <div className="block">
            <div className="flex mt-14">
             <img src={mail} alt="mail" className="w-[24px]"/>
              <span className="font-poppins text-[14px] text-head_white ml-2">Write to us</span>
            </div>
            <div className="flex mt-8">
              <BsDiscord
                fill=" #7289DA
"
                size={24}
                
              />
              <span className="font-poppins text-[14px] text-head_white ml-2">Join us on discord</span>
            </div>
            <div class="flex items-center  py-4 mt-14">
        
        <div className="flex-grow h-px px-10 bg-gray-400"></div> 

     
        <span className="flex-shrink text-[14px] text-head_white px-4  font-poppins">OR</span>

        
        <div className="flex-grow h-px  px-10 bg-gray-400"></div>
    </div>
    <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.7 }}
          className="mt-8 max-w-[534px] "
        >
          <h3 className="font-poppins text-[14px]  md:text-[14px] text-head_white">
          Send a DM social media
          </h3>
         
        </motion.div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.7 }}
          className="mt-4 max-w-[534px] h-[110px] flex mx-[-10px]  "
        >
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
        </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
