import React, { useState } from "react";
// import { Submit } from "../components/UI/Form";
import { motion } from "framer-motion";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let filledForm = {
      name,
      email,
      org,
      message,
    };
    console.log(filledForm);
  };

  return (
    <div className="h-screen flex ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="hidden justify-start md:flex w-full lg:w-1/2 bg-contact bg-cover  bg-no-repeat
   items-end"
      >
        <div className="w-full mb-10 mx-auto px-10 flex flex-col">
          <h4 className="text-yellow leading-9 lg:leading-10 text-[40px] font-audio">
            We would love to hear from you
          </h4>
          <p className="text-grey_p text-sm">
            Write to us, we would love to hear from you.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex w-full lg:w-1/2 justify-center  "
      >
        <div className="w-full px-4 small:px-6 mx-auto">
          <form className=" max-w-[600px]" onSubmit={handleSubmit}>
            <h1 className="text-yellow text-[32px] font-audio">Contact us</h1>
            <p className=" text-grey_p">
              Want to become a partner or have a story to share?
            </p>
            <div className="flex  flex-col  mt-8  py-2 px-3 ">
              <label className="text-gray-50">Full name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent text-gray-400 placeholder-[#404040] w-full border-[#404040] outline-none p-2 rounded-lg border-2 "
                type="text"
                placeholder="your legal name"
              />
            </div>
            <div className="flex  flex-col  mt-4  py-2 px-3 ">
              <label className="text-gray-50">Email address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-gray-400 placeholder-[#404040] w-full border-[#404040] outline-none p-2 rounded-lg border-2 "
                type="text"
                placeholder="We would love to discuss further the terms of partnership"
              />
            </div>
            <div className="flex  flex-col  mt-4  py-2 px-3 ">
              <label className="text-gray-50">Organization</label>
              <input
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                className="bg-transparent text-gray-400 placeholder-[#404040] w-full border-[#404040] outline-none p-2 rounded-lg border-2 "
                type="text"
                placeholder="org name if any*"
              />
            </div>
            <div className="flex  flex-col  mt-4 mb-8 py-2 px-3 ">
              <label className="text-gray-50">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="bg-transparent text-gray-400 placeholder-[#404040] w-full border-[#404040] outline-none p-2 rounded-lg border-2 "
                type="text"
                placeholder="write to us"
              />
            </div>

            <button
              type="submit"
              className="block w-full c  bg-yellow mt-5 py-2 rounded-lg  hover:-translate-y-1 transition-all duration-500  mb-2"
            >
              send
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
