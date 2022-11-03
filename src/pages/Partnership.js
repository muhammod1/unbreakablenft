import React from "react";
import PartnerCard from "../components/Partnership/PartnerCard";
import PartnerHero from "../components/Partnership/PartnerHero";
import PartnerMain from "../components/Partnership/PartnerMain";
import PartnershipContent from "../components/Partnership/PartnershipContent";
import PartnershipSales from "../components/Partnership/PartnershipSales";

const partnership = () => {
  return (
    <div className="w-[95%] mobile:w-[95%] max-w-[1220px] mx-auto">
      <PartnerHero />
      <PartnershipContent />
      <PartnershipSales />  
      <PartnerMain />
      <PartnerCard />
    </div>
  );
};

export default partnership;
