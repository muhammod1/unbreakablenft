import React, { useState } from "react";

import ProgramModal from "./PartnershipModal";

const PartnershipSales = ({ title, desc, buttonText }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="mt-14 flex flex-col sm:flex-row justify-between gap-2 px-4 py-2 sm:px-6 rounded-md items-center mx-2 min-h-[110px] bg-yellow">
        <div className="flex flex-col lg:gap-10 lg:flex-row lg:justify-between lg:items-center">
          <h4 className="font-audio text-2xl">
            <span className="inline sm:block">Partner with us</span>
          </h4>
          <p className="text-[#262626] max-w-[583px] w-full text-lg">
            The initial sale has sold out. To get your Unbroken NFT, check out
            the collection on OpenSea.
          </p>
        </div>
        <button className="bg-[#262626] p-3 w-full sm:w-fit rounded-md text-yellow text-sm">
          Send proposal
        </button>
      </div>

      {showModal ? <ProgramModal setShowModal={setShowModal} /> : null}
    </div>
  );
};

export default PartnershipSales;
