import React from "react";

const InitiativeCard = ({ icon, title, desc }) => {
  return (
    <div className="max-w-[409px] md:flex-1 px-3 py-8">
      <img alt="icons" src={icon} />
      <h3 className="text-2xl sm:text-[32px] text-yellow mt-2">{title}</h3>
      <p className="text-grey_p mt-2 text-base">{desc}</p>
    </div>
  );
};

export default InitiativeCard;