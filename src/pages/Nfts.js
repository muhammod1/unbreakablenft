import React from "react";

import { HeaderNfts, Cards } from "../components";
import NftSales from "../components/Nfts/NftSales";

const nfts = () => {
  return (
    <div className="bg-[black] ">
        <HeaderNfts />
        <Cards />
        <NftSales />
    </div>
    );
};

export default nfts;