import React from 'react'

import { cardData } from "../../assets/NftsData";

const Cards = () => {
  return (
    <div className='mt-[-20px] bg-[black]'>
      <div className='flex justify-center my-20 pt-8'>
        <div className='rounded-full p-1 inline-flex bg-[#171717]'>
          <button className='bg-yellow text-black font-bold py-2 px-4 rounded-full'>
            Broken
          </button>
          <button className=' text-[#737373] bg-[#171717] font-bold py-2 px-4 rounded-full'>
            Unbroken
          </button>
        </div>
      </div>
      <div className="flex gap-6 w-[90%] mx-auto flex-wrap justify-center">
          {cardData.map(({ icon, title, desc }) => (
              <div className='nftcard bg-nftCard w-[300px] h-[320px] bg-blue-700 rounded-2xl overflow-hidden relative'>
                  <p className="text-sm bg-yellow mt-3 absolute mr-4 top-0 right-0 px-[8px] py-[6px] rounded-2xl">{desc}</p>
                  <p className="text-white mt-2 absolute bottom-0 mb-4 ml-4">{title}</p>
                  <img className='absolute bottom-0 right-0 mr-4 mb-4 w-[6%]' src={icon} alt="icon" />
              </div>       
          ))}
      </div>
    </div>
  )
}

export default Cards