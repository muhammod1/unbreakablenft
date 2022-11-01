import React from "react";

const PartnershipModal = ({ setShowModal }) => {
  return (
    <div>
      <div className="justify-center gradient items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[90%] md:w-[95%] my-6 mx-auto max-w-5xl">
          <div className="w-[100%] md:w-[100%] mx-auto border-0 rounded-lg relative bg-[#171717] outline-none focus:outline-none">
            <div
              className="cursor-pointer w-fit ml-auto py-2 pr-4 text-end text-yellow background-transparent text-[14px] outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              close <span className="pl-1">X</span>
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
                  <button className="w-full flex justify-center text-[12px] md:text-[14px] bg-yellow px-1.5 md:px-2 py-1.5 mb-2 text-center rounded-md">
                    View on Opensea
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default PartnershipModal;
