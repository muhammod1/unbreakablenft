import React, { useState } from "react";

import { lock, coin } from "../../assets";
import { Form } from "../UI/Form";

const DonateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let filledForm = {
      name,
      email,
      number,
    };
    console.log(filledForm);
  };


  return (
    <div className="mt-20 flex item-start">
      <div className="w-[97%] small_l[95%] mx-auto md:mx-0 md:w-[50%]">
        <div className="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 accent-yellow h-4 rounded"
          />
          <label
            for="default-checkbox"
            className="ml-2 text-[14px] text-[#D4D4D4] "
          >
            Donate anonymously
          </label>
        </div>
        <h3 className="text-white font-audio text-2xl my-2">
          Personal information
        </h3>
        <p className="text-[14px] text-grey_p">
          All donation payments are secured and encrypted
        </p>
        <form onSubmit={handleSubmit}>
            <Form 
                value={name}
                type="text" 
                onChange={(e) => setName(e.target.value)}
                placeholder="your full name" 
                label="Full name"
            />
          {/* <div className="flex  flex-col  mt-8  py-2">
            <label className="text-gray-50">Full name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent text-gray-400 placeholder-[#404040] w-full border-[#404040] outline-none p-2 rounded-lg border-2 "
              type="text"
              placeholder="your legal name"
            />
          </div> */}
          <div className="flex  flex-col  mt-4  py-2">
            <label className="text-gray-50">Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent text-gray-400 placeholder-[#404040] w-full border-[#404040] outline-none p-2 rounded-lg border-2 "
              type="text"
              placeholder="We would love to discuss further the terms of partnership"
            />
          </div>
          <h3 className="text-white font-audio text-2xl my-3 mt-14 flex item-center">
            <img src={lock} alt="lock" />
            <span className="pl-3">Payment methods</span>
          </h3>
          <p className="text-[14px] text-grey_p">
            All donation payments are secured and encrypted
          </p>
          <div className="flex relative flex-col  mt-4  py-2">
            <label className="text-gray-50">Email address</label>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="bg-transparent text-gray-400 placeholder-[#404040] w-full border-[#404040] outline-none p-2 rounded-lg border-2 "
              type="number"
              placeholder="200,000"
            />
            <div className="text-grey_p flex absolute inset-y-0 right-10 top-6 items-center pl-3 pointer-events-none">
              $
            </div>
          </div>

          <div className="flex mt-10 justify-between p-5 border border-[#171717] rounded-lg">
            <div className="w-[50%]">
              {/* <label for="coins" className="block text-[14px] text-[#737373]">
                I want to donate
              </label> 
                <select
                id="coins"
                className="my-2 flex-col w-fit bg-yellow text-[black] text-bold text-[20px] rounded-lg p-2.5"
              >
                <option className="pl-3" selected data-content={coin}>
                  USDC
                </option>
                <option className="pl-3" value="US">
                  United States
                </option>
                <option className="pl-3" value="CA">
                  Canada
                </option>
                <option className="pl-3" value="FR">
                  France
                </option>
                <option className="pl-3" value="DE">
                  Germany
                </option>
              </select> */}
              <p className="mt-9 block text-[12px] text-[#737373]">Approx:</p>
            </div>
            <div className="mt-auto">
              <p className="text-white text-[32px] font-bold">3400</p>
              <p className=" mt-9 text-[12px] text-end text-[#737373]">-$0</p>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full bg-yellow mt-5 py-2 rounded-lg  hover:-translate-y-1 transition-all duration-500  mb-2"
          >
            Proceed
          </button>
        </form>
      </div>
      <div className="ml-auto hidden md:block">
        <div className="w-[400px] p-5 border border-[#171717] rounded-lg">
          <p className="block font-bold text-[18px] text-yellow">
            Donate Summary
          </p>
          <div className="flex justify-between ">
            <div className="">
              <p className="mt-3 block text-[14px] text-[#737373]">Full name</p>
              <p className="mt-3 block text-[14px] text-[#737373]">
                email address
              </p>
              <p className="mt-3 block text-[14px] text-[#737373]">
                Your donation
              </p>
            </div>
            <div className="">
              <p className=" mt-3 text-[14px] text-end text-[#F5F5F5]">
                Michael James
              </p>
              <p className=" mt-3 text-[14px] text-end text-[#F5F5F5]">
                michaeljames@gmail.com
              </p>
              <p className=" mt-3 text-[14px] text-end text-[#F5F5F5]">
                NGN 200,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
