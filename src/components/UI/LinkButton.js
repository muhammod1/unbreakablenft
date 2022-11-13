import React from "react";
import { Link } from "react-router-dom";
const LinkButton = ({ text, url }) => {
  return (
    <Link
      to={url}
      className="bg-yellow max-w-fit flex justify-center px-5 py-3 rounded-[5px] text-[16px] text-black-200"
    >
      {text}
    </Link>
  );
};

export default LinkButton;
