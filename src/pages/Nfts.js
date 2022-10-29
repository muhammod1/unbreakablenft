import React from "react";

import { HeaderNfts, Cards } from "../components";
import NftSales from "../components/Nfts/NftSales";

const nfts = () => {
  return (
    <div className="bg-[black] -z-10">
        <HeaderNfts />
        <Cards />
        <NftSales />
    </div>
    );
};

export default nfts;