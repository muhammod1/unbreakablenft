import React from "react";
import PartnerCard from "../components/Partnership/PartnerCard";
import PartnerHero from "../components/Partnership/PartnerHero";
import PartnerMain from "../components/Partnership/PartnerMain";
import PartnershipContent from "../components/Partnership/PartnershipContent";
import PartnershipSales from "../components/Partnership/PartnershipSales";

const partnership = () => {
  return (
    <div className="px-3 sm:px-6 max-w-[1240px] mx-auto">
      <PartnerHero />
      <PartnershipContent />
      <PartnershipSales />
      <PartnerMain />
      <PartnerCard />
    </div>
  );
};

export default partnership;
