import React from "react";
import { company1, company2, company3, company4, company5 } from "../../assets";
const Sponsors = () => {
  return (
    <div className="mt-14 mx-6 md:mx-20 flex flex-col justify-center items-center">
      <p className="text-grey_p">Unbroken Sponsors</p>
      <div className="flex gap-9 flex-wrap">
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
