import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { QRCode, copyIcon, checkbox } from "../../assets";

const DonateQRCode = () => {
  const [copyText, setCopyText] = useState({
    isCopied: false,
    text: "16WLJpio9KPPh8z4kBDiKyPiWZ6KPgGagm",
  });
  const [isCopying, setIsCopying] = useState(false);

  const handleCopy = () => {
    setIsCopying(true);
    setCopyText((prev) => ({ ...prev, isCopied: true }));
    setIsCopying(false);

    console.log(copyText);
  };

  return (
    <>
      <div className="text-white mt-10 mb-4 border p-[17px] border-[#262626] rounded-[5px]">
        <p className="text-[16px] w-[90%] max-w-[282px] mx-auto text-center">
          Scan the QR code below to donate 3400 USDC from your wallet.
        </p>
        <div className="my-3">
          <img
            className="mx-auto h-[265.5px] w-[265.5px]"
            src={QRCode}
            alt="qrcode"
          />
        </div>
        <p className="text-white mt-6 text-[12px] w-fit mx-auto">Network</p>
        <p className="bg-yellow text-[black] p-2 text-[12px] mt-2 rounded-md w-fit mx-auto">
          bep20
        </p>
        <p className="flex items-center gap-3 text-white mt-6 text-[14px] w-fit mx-auto">
          {copyText.text}
          <CopyToClipboard onCopy={handleCopy} text={copyText.text}>
            {isCopying ? (
              <div class="flex items-center justify-center ">
                <div class="w-8 h-8 border-b-2 border-yellow rounded-full animate-spin"></div>
              </div>
            ) : (
              <img className="px-3 cursor-pointer" src={copyIcon} alt="icon" />
            )}
          </CopyToClipboard>
        </p>
        {/* This is what to be displayed when Clipboard is clicked */}
        {copyText.isCopied && (
          <p className="flex w-fit mx-auto mt-4">copied!</p>
        )}
      </div>

      <div className="mt-10">
        <p className="text-white text-[14px] text-center">
          Confirm wallet address and network before sending , only send USDC to
          this address . Any error made can not be reversed{" "}
        </p>
        <p className="text-white text-[14px] text-center mt-6">
          Don not send NFTS to this address will result in the loss of your
          donation .
        </p>
      </div>
    </>
  );
};

export default DonateQRCode;
