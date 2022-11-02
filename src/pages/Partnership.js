import React from "react";
import PartnerCard from "../components/Partnership/PartnerCard";
import PartnerHero from "../components/Partnership/PartnerHero";
import PartnerMain from "../components/Partnership/PartnerMain";
import PartnershipContent from "../components/Partnership/PartnershipContent";
import PartnershipSales from "../components/Partnership/PartnershipSales";

const partnership = () => {
  return (
    <div className="w-[85%] mobile:w-[90%] max-w-[1120px] mx-auto">
      <PartnerHero />
      <PartnershipContent />
      <PartnershipSales />  
      <PartnerMain />
      <PartnerCard />
    </div>
  );
};

export default partnership;
