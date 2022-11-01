import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { motion } from "framer-motion";
const fnqInitailData = [
  {
    question: "What is Unbroken?",
    answer:
      "This is some subtext which appears after expanding the accordian.1",
    isOpen: false,
    id: 1,
  },
  {
    question: "Does Unbroken have a community?",
    answer:
      "This is some subtext which appears after expanding the accordian.2",
    isOpen: false,
    id: 2,
  },
  {
    question: "When does presale start?",
    answer:
      "This is some subtext which appears after expanding the accordian.3",
    isOpen: false,
    id: 3,
  },
  {
    question: "How can I support the Unbroken community?",
    answer: "This is some subtext which appears after expanding the accordian.",
    isOpen: false,
    id: 4,
  },
];
const FAQ = () => {
  const [fnqData, setFnqData] = useState(fnqInitailData);
  const handleToggle = (id) => {
    setFnqData((prev) => {
      return prev.map((val) =>
        val.id === id
          ? { ...val, isOpen: !val.isOpen }
          : { ...val, isOpen: false }
      );
    });
  };
  return (
    <div className="flex  flex-col   flex-wrap mt-14 mx-6 md:mx-20">
      <h3 className="text-head_white text-center font-audio text-lg small:text-4xl sm:text-[32px]">
        Frequently Asked Questions
      </h3>
      <div className="mt-6 w-full  max-w-[802px] mx-auto">
        {fnqData.length > 0 &&
          fnqData.map(({ question, answer, id, isOpen }) => (
            <>
              <div
                onClick={() => handleToggle(id)}
                className=" w-full mt-10 cursor-pointer  flex justify-between items-center"
              >
                <p className="text-[#A3A3A3]">{question}</p>
                {isOpen ? (
                  <BsChevronUp className="text-grey_p" />
                ) : (
                  <BsChevronDown className="text-grey_p" />
                )}
              </div>
              {isOpen && (
                <motion.div
                  onClick={() => handleToggle(id)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className=""
                >
                  <p className="text-[#525252]  ">{answer}</p>
                </motion.div>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default FAQ;
