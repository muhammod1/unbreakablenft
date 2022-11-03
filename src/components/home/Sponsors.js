import React from "react";
import { company1, company2, company3, company4, company5 } from "../../assets";
const Sponsors = () => {
  return (
    <div className="mt-16 px-3 sm:px-6 max-w-[1240px] mx-auto flex flex-col justify-center items-center">
      <p className="text-grey_p text-xl font-audio">Unbroken Sponsors</p>
      <div className="flex gap-9 items-center justify-center flex-wrap">
        <img src={company1} alt="company logo1" />
        <img src={company2} alt="company logo2" />
        <img src={company3} alt="company logo3" />
        <img src={company4} alt="company logo4" />
        <img src={company5} alt="company logo5" />
      </div>
    </div>
  );
};

export default Sponsors;
