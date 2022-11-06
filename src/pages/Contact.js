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
      ></motion.div>
    </div>
  );
};

export default Contact;
