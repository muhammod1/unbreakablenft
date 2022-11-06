import React from "react";

import Modal from "../UI/Modal";
import {IoMdClose} from 'react-icons/io'


const PartnershipModal = ({ setShowModal }) => {
  return (
    <div>
      <Modal>
        <div
          className="cursor-pointer w-fit flex ml-auto py-2 pr-4 text-end text-yellow background-transparent text-[18px] outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(false)}
        >
          close <span className="pl-1"> <IoMdClose size={24} /></span>
        </div>
        <div className="w-full px-3 pb-3 mx-auto h-fit flex flex-row-reverse">
          <div className="hidden md:block partner__bg w-1/2 mx-auto" />
          <div className="w-full md:w-1/2 px-2">
            <h1 className="text-[26px] font-audio">
              <span className="block text-yellow">Partner with us</span>{" "}
            </h1>
            <p className="text-white mt-1 font-sans">
              We would like to make a difference with you by our side. Join
              us
            </p>
            <div className="md:mr-2">
              <form className="mt-4 ">
                <label for="name" className="block text-[#F5F5F5]">
                  Name
                </label>
                <input
                  id="name"
                  name="username"
                  type="text"
                  reqiured
                  className="rounded mb-4 mt-1 focus:outline-none bg-transparent border p-2 text-[14px] w-full border-[#404040]"
                  placeholder="your legal name"
                />

                <label for="organ" className="block text-[#F5F5F5]">
                  Organization
                </label>
                <input
                  id="organ"
                  name="organization"
                  type="text"
                  className="rounded mb-4 mt-1 focus:outline-none bg-transparent border p-2 text-[14px] w-full border-[#404040]"
                  placeholder="org name if any"
                />

                <label for="email" className="block text-[#F5F5F5]">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  reqiured
                  className="rounded mb-4 mt-1 focus:outline-none bg-transparent border p-2 text-[14px] w-full border-[#404040]"
                  placeholder="We would love to discuss further on the terms of partnership"
                />
                <label for="message" className="block text-[#F5F5F5]">
                  Email address
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write to us"
                  className="rounded focus:outline-none h-[100px] mb-4 mt-1 bg-transparent border p-2 text-[14px] w-full border-[#404040]"
                ></textarea>
              </form>
              <button className="w-full flex justify-center text-[16px] bg-yellow px-1.5 md:px-2 py-1.5 mb-2 text-center rounded-md">
                View on Opensea
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PartnershipModal;
