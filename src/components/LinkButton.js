import React from "react";

const LinkButton = ({ text, url }) => {
  return (
    <a
      href={url}
      className="bg-yellow flex justify-center items-center w-32 p-3 mt-10 sm:mt-12 md:mt-14 rounded-lg text-black-200"
    >
      {text}
    </a>
  );
};

export default LinkButton;
