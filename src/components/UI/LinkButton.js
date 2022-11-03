import React from "react";
import { Link } from "react-router-dom";
const LinkButton = ({ text, url }) => {
  return (
    <Link
      href={url}
      className="bg-yellow flex justify-center px-5 py-3 rounded-[5px] text-black-200"
    >
      {text}
    </Link>
  );
};

export default LinkButton;
