import React, { useState } from 'react'


import { QRCode, copyIcon, checkbox } from '../../assets'

const DonateQRCode = () => {
  const [copyText] = useState('16WLJpio9KPPh8z4kBDiKyPiWZ6KPgGagm');

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText)
    alert("Text copied")
  };

  return (
    <>
      <div className='text-white mt-10 mb-4 border p-[17px] border-[#262626] rounded-[5px]'>
        <p className='text-[16px] w-[90%] max-w-[282px] mx-auto text-center'>Scan the QR code below to donate 3400 USDC from your wallet.</p>
        <div className="my-3">
          <img className='mx-auto h-[265.5px] w-[265.5px]' src={QRCode} alt="qrcode" />
        </div>
        <p className='text-white mt-6 text-[12px] w-fit mx-auto'>Network</p>
        <p className='bg-yellow text-[black] p-2 text-[12px] mt-2 rounded-md w-fit mx-auto'>bep20</p>
        <p className='flex text-white mt-6 text-[14px] w-fit mx-auto'>
          {copyText}
          <img onClick={handleCopy} className='px-3 cursor-pointer' src={copyIcon} alt="icon" />
        </p>
     {/* This is what to be displayed when Clipboard is clicked */}
          <p className='flex w-fit mx-auto mt-4'>
            <img className='px-3' src={checkbox} alt="checked" />
            copied!
          </p>
      </div>

      <div className='mt-10'>
        <p className='text-white text-[14px] text-center'>Confirm wallet address and network before sending , only send USDC to this address . Any error made can not be reversed </p>
        <p className='text-white text-[14px] text-center mt-6'>Don not send NFTS to this address will result in the loss of your donation .</p>
      </div>
    </>
  )
}

export default DonateQRCode