import React from 'react'

import { QRCode, copyIcon } from '../../assets'

const DonateQRCode = () => {
  return (
    <div className='text-white mt-10 mb-4 border p-[17px] border-[#262626] rounded-[5px]'>
      <p className='text-[16px] w-[90%] max-w-[282px] mx-auto text-center'>Scan the QR code below to donate 3400 USDC from your wallet.</p>
      <div className="my-3">
        <img className='mx-auto h-[265.5px] w-[265.5px]' src={QRCode} alt="qrcode" />
      </div>
      <p className='text-white mt-6 text-[12px] w-fit mx-auto'>Network</p>
      <p className='bg-yellow text-[black] p-2 text-[12px] mt-2 rounded-md w-fit mx-auto'>bep20</p>
      <p className='flex text-white mt-6 text-[12px] w-fit mx-auto'>
        16WLJpio9KPPh8z4kBDiKyPiWZ6KPgGagm
        <img className='px-3' src={copyIcon} alt="icon" />
      </p>
    </div>
  )
}

export default DonateQRCode