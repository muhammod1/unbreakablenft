import React, { useState } from "react";

import { lock, coin } from "../../assets";
import { Form, IconForm, SubmitBtn } from "../UI/Form";

import { motion } from "framer-motion";
import DonateQRCode from "./DonateQRCode";
const DonateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);

  // const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let filledForm = {
      name,
      email,
      number,
    };
    console.log(filledForm);
    setShowQRCode(true)
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-20 flex item-start"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-[97%] small_l[95%] mx-auto md:mx-0 md:w-[50%]"
      >
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
                required="required"
                type="text" 
                onChangeCallBack={setName}
                placeholder="your legal name" 
                label="Full name"
            />
            <Form 
                value={email}
                required="required"
                type="email" 
                onChangeCallBack={setEmail}
                placeholder="We would love to discuss further the terms of partnership" 
                label="Email address"
            />
        
          <h3 className="text-white font-audio text-2xl my-3 mt-14 flex item-center">
            <img src={lock} alt="lock" />
            <span className="pl-3">Payment methods</span>
          </h3>
          <p className="text-[14px] text-grey_p">
            All donation payments are secured and encrypted
          </p>
          <div className="flex relative flex-col  mt-4  py-2">
          <IconForm 
                value={number}
                required="required"
                type="number" 
                onChangeCallBack={setNumber}
                placeholder="200,000" 
                label="Donate Amount"
                icon="$"
            />
            
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
          <SubmitBtn type="submit" text="Proceed" />

          {showQRCode && (
            <DonateQRCode />
          )
          
        }
        </form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="ml-auto hidden md:block"
      >
        <div className="w-[400px] p-5 border border-[#171717] rounded-lg">
          <p className="block font-bold text-[18px] text-yellow">
            Donate Summary
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-between "
          >
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
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DonateForm;
