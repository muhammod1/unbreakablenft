import React from "react";

const InitiativeCard = ({ icon, title, desc }) => {
  return (
    <div className="max-w-[359px] md:flex-1 px-3 py-8">
      <img src={icon} alt="icon" />
      <h3 className="text-yellow mt-2">{title}</h3>
      <p className="text-grey_p mt-2">{desc}</p>
    </div>
  );
};

export default InitiativeCard;
