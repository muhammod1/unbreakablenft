import React, { useState } from "react";
// import { Submit } from "../components/UI/Form";

import { Form, SubmitBtn, Textarea } from "../components/UI/Form";
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
        className="flex w-full lg:w-1/2 justify-center items-center  "
      >
        {/* <div className="w-full px-4 small:px-6 mx-auto my">
          <form
            autoComplete="off"
            className=" max-w-[600px]"
            onSubmit={handleSubmit}
          >
            <h1 className="text-yellow text-[32px] font-audio">Contact us</h1>
            <p className=" text-grey_p">
              Want to become a partner or have a story to share?
            </p>
            <Form
              value={name}
              type="text"
              required="required"
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

            <Form
              value={org}
              type="text"
              onChangeCallBack={setOrg}
              placeholder="org name if any*"
              label="Organization"
            />

            <Textarea
              value={message}
              type="text"
              placeholder="write to us"
              label="Message"
              onChangeCallBack={setMessage}
            />
            <SubmitBtn type="submit" text="Send" />
          </form>
        </div> */}
      </motion.div>
    </div>
  );
};

export default Contact;
